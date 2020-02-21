// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { detectPackage } from '@polkadot/util';

/* eslint-disable @typescript-eslint/no-var-requires */
try {
  detectPackage(require('./package.json'), __dirname);
} catch (error) {
  // development environment
  detectPackage(require('../package.json'), __dirname);
}
/* eslint-enable @typescript-eslint/no-var-requires */

export * from './codec';
export * from './create';
export * from './index.types';
