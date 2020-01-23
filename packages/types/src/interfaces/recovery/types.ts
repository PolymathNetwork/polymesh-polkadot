// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { u16 } from '@polkadot/types/primitive';
import { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';
import { Balance } from '@polkadot/types/interfaces/polymesh';

/** Struct */
export interface ActiveRecovery extends Struct {
  /** BlockNumber */
  readonly created: BlockNumber;
  /** Balance */
  readonly deposit: Balance;
  /** Vec<AccountId> */
  readonly friends: Vec<AccountId>;
}

/** Struct */
export interface RecoveryConfig extends Struct {
  /** BlockNumber */
  readonly delayPeriod: BlockNumber;
  /** Balance */
  readonly deposit: Balance;
  /** Vec<AccountId> */
  readonly friends: Vec<AccountId>;
  /** u16 */
  readonly threshold: u16;
}
