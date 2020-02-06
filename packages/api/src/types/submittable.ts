// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyFunction, Callable } from '@polkadot/types/types';

import { SubmittableExtrinsic } from '../submittable/types';
import { ApiTypes } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedSubmittables<ApiType extends ApiTypes> { }

export type AugmentedSubmittable<T extends AnyFunction> = T & Callable;

export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes> extends Callable {
  (...params: any[]): SubmittableExtrinsic<ApiType>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SubmittableModuleExtrinsics<ApiType extends ApiTypes> {}

export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
  (extrinsic: Uint8Array | string): SubmittableExtrinsic<ApiType>;
}
