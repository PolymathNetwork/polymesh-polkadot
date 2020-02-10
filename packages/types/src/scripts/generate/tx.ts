
// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest, FunctionMetadataV10 } from '../../interfaces/metadata';
import * as defaultDefs from '../../interfaces/definitions';
import { Registry } from '../../types';

import staticData from './tmp/polymesh_metadata';
import Metadata from '@polkadot/metadata/Metadata';
import { Text } from '@polkadot/types';
import { stringCamelCase, stringUpperFirst, stringLowerFirst } from '@polkadot/util';

import { TypeRegistry, Vec } from '../../codec';
import { FOOTER, HEADER, TypeImports, createImportCode, createImports, formatType, getSimilarTypes, indent, setImports, writeFile } from '../util';

const MAPPED_NAMES: Record<string, string> = {
  new: 'updated'
};

let namespaces = '';
let txTag = 'export type TxTag =';
let txTags = 'export const TxTags = {\n';

function mapName (_name: Text): string {
  const name = stringCamelCase(_name.toString());

  return MAPPED_NAMES[name] || name;
}

// Generate documentation with tsdoc format
/** @internal */
function tsDoc (documentation: Vec<Text>): string {
  const lines = documentation.toArray().map(text => text.toString());
  const position = lines.indexOf(' # Arguments');
  const args = position > 0 ? lines.slice(position + 1, lines.length - 1) : [];
  const params = args.map(arg => {
    return arg.trim().replace(/[`]/, '@param ').replace('`', ' -').replace('- -', '-').replace(/\.$/, '');
  });

  const docs = documentation.join('').replace(/#[^#]+$/, '');
  let strarg = '';
  if (params.length) {
    strarg += indent(7)('*\n');
    params.map(param => {
      strarg += indent(7)(`${param.replace(/(- [a-zA-Z]{1})/, c => c.toUpperCase())}\n`);
    });
  }
  return docs === '' ? '' : indent(6)(`/**\n${indent(6)(indent(1)(`* ${docs.toString().trim().replace(/^\w/, c => c.toUpperCase()).replace(/\.$/, '')}`))}\n${strarg}${indent(7)('*/')}\n`);
}

// Generate namespaces file
/** @internal */
function generateTxTags (moduleName: string, methods: FunctionMetadataV10[]): string {
  const moduleNme = stringUpperFirst(stringCamelCase(moduleName));
  txTag = txTag.concat(` ${moduleNme}Tx |`);
  txTags = txTags.concat(indent(2)(`${stringLowerFirst(moduleName)}: ${moduleNme}Tx,\n`));
  namespaces = namespaces.concat(`export enum ${moduleNme}Tx {\n`);
  methods.forEach(({ name }) => {
    const nme = stringUpperFirst(stringCamelCase(name.toString()));
    namespaces = namespaces.concat(indent(2)(`${nme} = '${nme}',\n`));
  });
  namespaces = namespaces.concat('}\n\n');
  return namespaces;
}

// Generate types for one module
/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateModule (registry: Registry, allDefs: object, { calls, name }: ModuleMetadataLatest, imports: TypeImports, isStrict: boolean): string[] {
  const allCalls = calls.unwrapOr<null>(null);

  if (!allCalls?.length) {
    return [];
  }

  setImports(allDefs, imports, ['SubmittableExtrinsic']);

  // NOTE Not removing this concat yet, first see the fallout
  return [indent(4)(`${stringCamelCase(name.toString())}: {`)]
    .concat(isStrict ? '' : indent(6)('[index: string]: SubmittableExtrinsicFunction<ApiType>;'))
    .concat(allCalls.map(({ args, documentation, name }): string => {
      const params = args
        .map(({ name, type }): [string, string, string] => {
          const typeStr = type.toString();
          const similarTypes = getSimilarTypes(allDefs, registry, typeStr, imports).map((type): string =>
            type.startsWith('(') || type.startsWith('{') || type.startsWith('[')
              ? type
              : formatType(allDefs, type, imports)
          );

          const nameStr = mapName(name);

          setImports(allDefs, imports, [...similarTypes.filter((type): boolean => !type.startsWith('(') && !type.startsWith('{') && !type.startsWith('[')), typeStr]);

          return [`_${nameStr}: ${similarTypes.join(' | ')}`, nameStr, typeStr];
        })
        .map(([full]): string => full)
        .join(', ');

      return tsDoc(documentation) +
      indent(6)(`${stringCamelCase(name.toString())}: AugmentedSubmittable<(${params}) => SubmittableExtrinsic<ApiType>>;`);
    }))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, object>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, object>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [key]: value }), defs);
    }, {});
    const body = meta.asLatest.modules.reduce((acc, mod): string[] => {
      return acc.concat(generateModule(registry, allDefs, mod, imports, isStrict));
    }, [] as string[]);
    const header = createImportCode(HEADER, imports, [
      ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
        file: `${imports.moduleToPackage[moduleName]}/${moduleName}`,
        types: Object.keys(imports.localTypes[moduleName])
      })),
      {
        file: '@polkadot/api/submittable/types',
        types: ['SubmittableExtrinsic']
      }
    ]);
    const interfaceStart = [
      "declare module '@polkadot/api/types/submittable' {",
      indent(2)('export interface AugmentedSubmittables<ApiType> {\n')
    ].join('\n');
    const interfaceEnd = `\n${indent(2)('}')}\n}`;

    return header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER);
  });

  let transactionTagsBody = '';
  meta.asLatest.modules.map(({ name, calls }) => {
    const allCalls = calls.unwrapOr<null>(null);
    if (allCalls?.length) {
      transactionTagsBody = generateTxTags(name.toString(), allCalls.toArray());
    }
  });
  writeFile('packages/api/src/types/transaction-tags.ts', (): string => {
    return transactionTagsBody;
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateTx (dest = 'packages/api/src/types/augment/tx.ts', data = staticData, extraTypes: Record<string, Record<string, object>> = {}, isStrict = true): void {
  const registry = new TypeRegistry();

  return generateForMeta(registry, new Metadata(registry, data), dest, extraTypes, isStrict);
}