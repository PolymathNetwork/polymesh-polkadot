
import { ModuleMetadataLatest, FunctionMetadataV10 } from '../../interfaces/metadata';
import { Registry } from '../../types';
import * as defaultDefinitions from '../../interfaces/definitions';

import fs from 'fs';
import { stringLowerFirst, stringCamelCase } from '@polkadot/util';

import { Metadata } from '../..';
import { TypeRegistry } from '../../codec';
import { createImportCode, createImports, FOOTER, formatType, getSimilarTypes, HEADER, indent, setImports, TypeImports } from '../util';
import polymeshMetadata from './tmp/polymesh_metadata';

// From a storage entry metadata, we return [args, returnType]
/** @internal */
function entrySignature (definitions: object, registry: Registry, callEntry: FunctionMetadataV10, imports: TypeImports): [string, string] {

  var args:string[] = [];
  callEntry.args.map(({ name, type }) => {
    const similarTypes = getSimilarTypes(definitions, registry, type.toString(), imports);
    if (!RegExp(/(\(|\))\1+/g).test(similarTypes[0])) {
      setImports(definitions, imports, [
        ...similarTypes,
        type.toString()
      ]);
      args.push(`_${name.toString()}: ${similarTypes.map((type) => formatType(definitions, type, imports)).join(' | ')}`)
    } else {
      var matches = /\(\(([^)]+)\)\)/.exec(similarTypes[0]);
      setImports(definitions, imports, [
        `Vec<(${matches![1]})>`
      ]);
      args.push(`_${name.toString()}: Vec<ITuple<[${matches![1]}]>>`)
    }
  })
  return [args.join(', '), tsDoc(callEntry)];
}

// Generate documentation with tsdoc format
/** @internal */
function tsDoc(callEntry: FunctionMetadataV10): string {
  const lines = callEntry.documentation.toArray().map(text => text.toString());
  const position = lines.indexOf(" # Arguments");
  const args = position > 0 ? lines.slice(position + 1, lines.length - 1) : [];
  const params = args.map(arg => {
    return arg.trim().replace(/[`]/,'@param ').replace('`', ' -').replace('- -', '-').replace(/\.$/, '')
  })

  const documentation = callEntry.documentation.join('').replace(/#[^#]+$/, '');
  let strarg = '';
  if (params.length) {
    strarg += indent(7)('*\n')
    params.map(param => {
      strarg += indent(7)(`${param.replace(/(\- [a-zA-Z]{1})/, c => c.toUpperCase())}\n`)
    })
  }
  return documentation === "" ? "" : `/**\n${indent(6)(indent(1)(`* ${documentation.toString().trim().replace(/^\w/, c => c.toUpperCase()).replace(/\.$/, '')}`))}\n${strarg}${indent(7)('*/')}\n`.concat(indent(6)(""))
}

// Generate types for one call entry in a module
/** @internal */
function generateEntry (definitions: object, registry: Registry, callEntry: FunctionMetadataV10, imports: TypeImports): string[] {
  const [args, docs] = entrySignature(definitions, registry, callEntry, imports);

  return [
    `${docs}${stringCamelCase(callEntry.name.toString())}: ((${args}) => SubmittableExtrinsic<ApiType>) & CallFunction;`
  ];
}

// Generate types for one module
/** @internal */
function generateModule (definitions: object, registry: Registry, modul: ModuleMetadataLatest, imports: TypeImports): string[] {
  if (modul.calls.isNone || !modul.calls.unwrap().length) {
    return [];
  }

  return [indent(4)(`${stringLowerFirst(modul.name.toString())}: {`)]
    .concat(
      modul.calls.unwrap()
        .reduce((acc, callEntry): string[] => {
          return acc.concat(generateEntry(definitions, registry, callEntry, imports).map(indent(6)));
        }, [] as string[])
        .join('\n')
    )
    .concat([indent(4)('};')]);
}

// Generate `packages/api/src/tx.types.ts` for a particular
// metadata
/** @internal */
function generateForMeta (definitions: object, registry: Registry, meta: Metadata): void {
  console.log('Writing packages/api/src/tx.types.ts');

  const imports = createImports({ '@polkadot/types/interfaces': definitions }); // Will hold all needed imports

  const body = meta.asLatest.modules.reduce((acc, modul): string[] => {
    const storageEntries = generateModule(definitions, registry, modul, imports);

    return acc.concat(storageEntries);
  }, [] as string[]);

  imports.typesTypes["ITuple"] = true;

  const header = createImportCode(HEADER, [
    {
      file: '@polkadot/api/types',
      types: ['SubmittableExtrinsic']
    },
    {
      file: '@polkadot/types/types',
      types: ['CallFunction']
    },
    {
      file: '@polkadot/types/codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '@polkadot/types',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `@polkadot/types/interfaces/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    })),
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    }
  ]);

  const interfaceStart =
    [
      "declare module './types' {",
      indent(2)('export interface SubmittableExtrinsicsExact<ApiType> {\n')
    ].join('\n');
  const interfaceEnd = `\n${indent(2)('}')}\n}`;

  fs.writeFileSync(
    'packages/api/src/tx.types.ts',
    header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER)
    , { flag: 'w' }
  );
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateTx (): void {
  const registry = new TypeRegistry();

  return generateForMeta(defaultDefinitions, registry, new Metadata(registry, polymeshMetadata));
}
