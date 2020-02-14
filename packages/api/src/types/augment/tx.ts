// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AnyNumber, ITuple } from '@polkadot/types/types';
import { Compact, Option, Vec } from '@polkadot/types/codec';
import { Bytes, bool, u128, u16, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, AccountIndex, Address, Balance, BalanceOf, BlockNumber, Hash, Header, KeyValue, LookupSource, Moment, Perbill, Signature } from '@polkadot/types/interfaces/runtime';
import { ProposalIndex } from '@polkadot/types/interfaces/collective';
import { CodeHash, Gas, Schedule } from '@polkadot/types/interfaces/contracts';
import { Proposal } from '@polkadot/types/interfaces/democracy';
import { Heartbeat } from '@polkadot/types/interfaces/imOnline';
import { Keys } from '@polkadot/types/interfaces/session';
import { EraIndex, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { Key } from '@polkadot/types/interfaces/system';
import { AccountKey, AssetRule, AssetType, AuthIdentifier, AuthorizationData, Ballot, ClaimRecord, ClaimValue, Document, IdentifierType, IdentityId, MipsIndex, OffChainSignature, Permission, ProportionMatch, Signatory, SigningItem, SigningItemWithAuth, SmartExtension, TargetIdAuthorization, Ticker } from '@polkadot/types/interfaces/polymesh';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    system: {

      /**
       * A big dispatch that will disallow any other transaction to be included
       */
      fillBlock: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Make some on-chain remark
       */
      remark: AugmentedSubmittable<(_remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the number of pages in the WebAssembly environment's heap
       */
      setHeapPages: AugmentedSubmittable<(_pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the new code
       */
      setCode: AugmentedSubmittable<(_updated: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set some items of storage
       */
      setStorage: AugmentedSubmittable<(_items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Kill some items from storage
       */
      killStorage: AugmentedSubmittable<(_keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Kill all storage items with a key that starts with the given prefix
       */
      killPrefix: AugmentedSubmittable<(_prefix: Key | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    timestamp: {

      /**
       * Set the current time. This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. The dispatch origin for this call must be `Inherent`
       */
      set: AugmentedSubmittable<(_now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    balances: {

      /**
       * Transfer some liquid free balance to another account. `transfer` will set the `FreeBalance` of the sender and receiver. It will decrease the total issuance of the system by the `TransferFee`. The dispatch origin for this call must be `Signed` by the transactor. # <weight> - Dependent on arguments but not critical, given proper implementations for   input config types. See related functions below. - It contains a limited number of reads and writes internally and no complex computation. Related functions:   - `ensure_can_withdraw` is always called internally but has a bounded complexity.   - Transferring balances to accounts that did not exist before will cause      `T::OnNewAccount::on_new_account` to be called
       */
      transfer: AugmentedSubmittable<(_dest: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, _value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Move some poly from balance of self to balance of an identity
       */
      topUpIdentityBalance: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Claim back poly from an identity. Can only be called by master key of the identity
       */
      reclaimIdentityBalance: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change setting that governs if user pays fee via their own balance or identity's balance
       */
      changeChargeDidFlag: AugmentedSubmittable<(_chargeDid: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the balances of a given account. This will alter `FreeBalance` and `ReservedBalance` in storage. it will also decrease the total issuance of the system (`TotalIssuance`). The dispatch origin for this call is `root`. # <weight> - Independent of the arguments. - Contains a limited number of reads and writes
       */
      setBalance: AugmentedSubmittable<(_who: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, _newFree: Compact<Balance> | AnyNumber | Uint8Array, _newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be specified
       */
      forceTransfer: AugmentedSubmittable<(_source: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, _dest: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, _value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    authorship: {

      /**
       * Provide a set of uncles
       */
      setUncles: AugmentedSubmittable<(_newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
    };
    staking: {

      /**
       * Take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it. `value` must be more than the `minimum_balance` specified by `T::Currency`. The dispatch origin for this call must be _Signed_ by the stash account. # <weight> - Independent of the arguments. Moderate complexity. - O(1). - Three extra DB entries. NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless the `origin` falls below _existential deposit_ and gets removed as dust
       */
      bond: AugmentedSubmittable<(_controller: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, _value: Compact<BalanceOf> | AnyNumber | Uint8Array, _payee: RewardDestination | ('Staked' | 'Stash' | 'Controller') | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Add some extra amount that have appeared in the stash `free_balance` into the balance up for staking. Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added. The dispatch origin for this call must be _Signed_ by the stash, not the controller. # <weight> - Independent of the arguments. Insignificant complexity. - O(1). - One DB entry
       */
      bondExtra: AugmentedSubmittable<(_maxAdditional: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount. Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer. No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible). The dispatch origin for this call must be _Signed_ by the controller, not the stash. See also [`Call::withdraw_unbonded`]
       */
      unbond: AugmentedSubmittable<(_value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove any unlocked chunks from the `unlocking` queue from our management. This essentially frees up that balance to be used by the stash account to do whatever it wants. The dispatch origin for this call must be _Signed_ by the controller, not the stash. See also [`Call::unbond`]. # <weight> - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.  It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is  indirectly user-controlled. See [`unbond`] for more detail. - Contains a limited number of reads, yet the size of which could be large based on `ledger`. - Writes are limited to the `origin` account key
       */
      withdrawUnbonded: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Declare the desire to validate for the origin controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key
       */
      validate: AugmentedSubmittable<(_prefs: ValidatorPrefs | { commission?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Declare the desire to nominate `targets` for the origin controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - The transaction's complexity is proportional to the size of `targets`, which is capped at `MAX_NOMINATIONS`. - It also depends upon the no. of claim issuers for a given stash account. - Both the reads and writes follow a similar pattern
       */
      nominate: AugmentedSubmittable<(_targets: Vec<LookupSource> | (LookupSource | Address | AccountId | AccountIndex | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Declare no desire to either validate or nominate. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains one read. - Writes are limited to the `origin` account key
       */
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * (Re-)set the payment target for a controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key
       */
      setPayee: AugmentedSubmittable<(_payee: RewardDestination | ('Staked' | 'Stash' | 'Controller') | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * (Re-)set the controller of a stash. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the stash, not the controller. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key
       */
      setController: AugmentedSubmittable<(_controller: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * The ideal number of validators
       */
      setValidatorCount: AugmentedSubmittable<(_updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Governance committee on 2/3 rds majority can introduce a new potential validator to the pool of validators. Staking module uses `PermissionedValidators` to ensure validators have completed KYB compliance and considers them for validation
       */
      addPotentialValidator: AugmentedSubmittable<(_validator: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a validator from the pool of validators. Effects are known in the next session. Staking module checks `PermissionedValidators` to ensure validators have completed KYB compliance
       */
      removeValidator: AugmentedSubmittable<(_validator: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Governance committee on 2/3 rds majority can update the compliance status of a validator as `Pending`
       */
      complianceFailed: AugmentedSubmittable<(_validator: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Governance committee on 2/3 rds majority can update the compliance status of a validator as `Active`
       */
      compliancePassed: AugmentedSubmittable<(_validator: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Validate the nominators KYC expiry time If an account from a given set of address is nominating then check the KYC expiry time of it and if it is expired then the account should be unbonded and removed from the nominating process. #<weight> - Depends on passed list of AccountId - Depends on the no. of claim issuers an accountId has for the KYC expiry
       */
      validateKycExpiryNominators: AugmentedSubmittable<(_targets: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Enables individual commisions. This can be set only once. Once individual commission rates are enabled, there's no going back.  Only Governance committee is allowed to change this value
       */
      enableIndividualCommissions: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Changes commission rate which applies to all validators. Only Governance committee is allowed to change this value
       */
      setGlobalComission: AugmentedSubmittable<(_newValue: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Changes min bond value to be used in bond(). Only Governance committee is allowed to change this value
       */
      setMinBondThreshold: AugmentedSubmittable<(_newValue: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Force there to be no new eras indefinitely. # <weight> - No arguments
       */
      forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour. # <weight> - No arguments
       */
      forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the validators who cannot be slashed (if any)
       */
      setInvulnerables: AugmentedSubmittable<(_validators: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Force a current staker to become completely unstaked, immediately
       */
      forceUnstake: AugmentedSubmittable<(_stash: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Force there to be a new era at the end of sessions indefinitely. # <weight> - One storage write
       */
      forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancel enactment of a deferred slash. Can be called by either the root origin or the `T::SlashCancelOrigin`. passing the era and indices of the slashes for that era to kill. # <weight> - One storage write
       */
      cancelDeferredSlash: AugmentedSubmittable<(_era: EraIndex | AnyNumber | Uint8Array, _slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
    };
    session: {

      /**
       * Sets the session key(s) of the function caller to `key`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session. The dispatch origin of this function must be signed. # <weight> - O(log n) in number of accounts. - One extra DB entry
       */
      setKeys: AugmentedSubmittable<(_keys: Keys, _proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    finalityTracker: {

      /**
       * Hint that the author of this block thinks the best finalized block is the given number
       */
      finalHint: AugmentedSubmittable<(_hint: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    grandpa: {

      /**
       * Report some misbehavior
       */
      reportMisbehavior: AugmentedSubmittable<(_report: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    imOnline: {

      heartbeat: AugmentedSubmittable<(_heartbeat: Heartbeat | { blockNumber?: any; networkState?: any; sessionIndex?: any; authorityIndex?: any } | string | Uint8Array, _signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    sudo: {

      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution
       */
      sudo: AugmentedSubmittable<(_proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB change
       */
      setKey: AugmentedSubmittable<(_updated: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from a given account. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution
       */
      sudoAs: AugmentedSubmittable<(_who: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, _proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    multiSig: {

      /**
       * Creates a multisig
       *
       * @param signers - Signers of the multisig (They need to accept authorization before they are actually added)
       */
      createMultisig: AugmentedSubmittable<(_signers: Vec<Signatory> | (Signatory | { identity: any } | { accountKey: any } | string | Uint8Array)[], _sigsRequired: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Creates a multisig proposal
       *
       * @param multisig - MultiSig address
       * @param proposal - Proposal to be voted on
       */
      createProposalAsIdentity: AugmentedSubmittable<(_multisig: AccountId | string | Uint8Array, _proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Creates a multisig proposal
       *
       * @param multisig - MultiSig address
       * @param proposal - Proposal to be voted on
       */
      createProposalAsKey: AugmentedSubmittable<(_multisig: AccountId | string | Uint8Array, _proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Approves a multisig proposal using caller's identity
       *
       * @param multisig - MultiSig address
       * @param proposal_id - Proposal id to approve
       */
      approveAsIdentity: AugmentedSubmittable<(_multisig: AccountId | string | Uint8Array, _proposalId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Approves a multisig proposal using caller's signing key (AccountId)
       *
       * @param multisig - MultiSig address
       * @param proposal_id - Proposal id to approve
       */
      approveAsKey: AugmentedSubmittable<(_multisig: AccountId | string | Uint8Array, _proposalId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Accept a multisig signer authorization given to signer's identity
       */
      acceptMultisigSignerAsIdentity: AugmentedSubmittable<(_authId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Accept a multisig signer authorization given to signer's key (AccountId)
       */
      acceptMultisigSignerAsKey: AugmentedSubmittable<(_authId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Add a signer to the multisig. This must be called by the multisig itself
       */
      addMultisigSigner: AugmentedSubmittable<(_signer: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a signer from the multisig. This must be called by the multisig itself
       */
      removeMultisigSigner: AugmentedSubmittable<(_signer: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change number of sigs required by a multisig. This must be called by the multisig itself
       */
      changeSigsRequired: AugmentedSubmittable<(_sigsRequired: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    contracts: {

      /**
       * Updates the schedule for metering contracts. The schedule must have a greater version than the stored schedule
       */
      updateSchedule: AugmentedSubmittable<(_schedule: Schedule | { version?: any; putCodePerByteCost?: any; growMemCost?: any; regularOpCost?: any; returnDataPerByteCost?: any; eventDataPerByteCost?: any; eventPerTopicCost?: any; eventBaseCost?: any; sandboxDataReadCost?: any; sandboxDataWriteCost?: any; transferCost?: any; maxEventTopics?: any; maxStackHeight?: any; maxMemoryPages?: any; enablePrintln?: any; maxSubjectLen?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Stores the given binary Wasm code into the chain's storage and returns its `codehash`. You can instantiate contracts only with stored code
       */
      putCode: AugmentedSubmittable<(_gasLimit: Compact<Gas> | AnyNumber | Uint8Array, _code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Makes a call to an account, optionally transferring some balance. * If the account is a smart-contract account, the associated code will be executed and any value will be transferred. * If the account is a regular account, any value will be transferred. * If no account exists and the call value is not less than `existential_deposit`, a regular account will be created and any value will be transferred
       */
      call: AugmentedSubmittable<(_dest: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, _value: Compact<BalanceOf> | AnyNumber | Uint8Array, _gasLimit: Compact<Gas> | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance. Instantiation is executed as follows: - The destination address is computed based on the sender and hash of the code. - The smart-contract account is created at the computed address. - The `ctor_code` is executed in the context of the newly-created account. Buffer returned   after the execution is saved as the `code` of the account. That code will be invoked   upon any call received by this account. - The contract is initialized
       */
      instantiate: AugmentedSubmittable<(_endowment: Compact<BalanceOf> | AnyNumber | Uint8Array, _gasLimit: Compact<Gas> | AnyNumber | Uint8Array, _codeHash: CodeHash | string | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Allows block producers to claim a small reward for evicting a contract. If a block producer fails to do so, a regular users will be allowed to claim the reward. If contract is not evicted as a result of this call, no actions are taken and the sender is not eligible for the reward
       */
      claimSurcharge: AugmentedSubmittable<(_dest: AccountId | string | Uint8Array, _auxSender: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    treasury: {

      /**
       * Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded. # <weight> - O(1). - Limited storage reads. - One DB change, one extra DB entry
       */
      proposeSpend: AugmentedSubmittable<(_value: Compact<BalanceOf> | AnyNumber | Uint8Array, _beneficiary: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Reject a proposed spend. The original deposit will be slashed. # <weight> - O(1). - Limited storage reads. - One DB clear
       */
      rejectProposal: AugmentedSubmittable<(_proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned. # <weight> - O(1). - Limited storage reads. - One DB change
       */
      approveProposal: AugmentedSubmittable<(_proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    polymeshCommittee: {

      /**
       * Change the vote threshold the determines the winning proposal. For e.g., for a simple majority use (ProportionMatch.AtLeast, 1, 2) which represents the inequation ">= 1/2"
       *
       * @param match_criteria - One of {AtLeast, MoreThan}
       * @param n - Numerator of the fraction representing vote threshold
       * @param d - Denominator of the fraction representing vote threshold
       */
      setVoteThreshold: AugmentedSubmittable<(_matchCriteria: ProportionMatch | ('AtLeast' | 'MoreThan') | number | Uint8Array, _n: u32 | AnyNumber | Uint8Array, _d: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the committee's membership manually to `new_members`. Requires root origin
       *
       * @param origin - Root
       */
      setMembers: AugmentedSubmittable<(_newMembers: Vec<IdentityId> | (IdentityId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Any committee member proposes a dispatchable
       *
       * @param did - Identity of the proposer
       */
      propose: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Member casts a vote
       *
       * @param did - Identity of the proposer
       * @param proposal - Hash of proposal to be voted on
       * @param index - Proposal index
       */
      vote: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _proposal: Hash | string | Uint8Array, _index: Compact<ProposalIndex> | AnyNumber | Uint8Array, _approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    committeeMembership: {

      /**
       * Add a member `who` to the set. May only be called from `AddOrigin` or root
       *
       * @param origin - Origin representing `AddOrigin` or root
       */
      addMember: AugmentedSubmittable<(_who: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a member `who` from the set. May only be called from `RemoveOrigin` or root
       *
       * @param origin - Origin representing `RemoveOrigin` or root
       */
      removeMember: AugmentedSubmittable<(_who: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root
       *
       * @param origin - Origin representing `SwapOrigin` or root
       * @param remove - IdentityId to be removed from the group
       */
      swapMember: AugmentedSubmittable<(_remove: IdentityId | string | Uint8Array, _add: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root
       *
       * @param origin - Origin representing `ResetOrigin` or root
       */
      resetMembers: AugmentedSubmittable<(_members: Vec<IdentityId> | (IdentityId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
    };
    mips: {

      /**
       * Change the minimum proposal deposit amount required to start a proposal. Only Governance committee is allowed to change this value
       */
      setMinProposalDeposit: AugmentedSubmittable<(_deposit: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change the quorum threshold amount. This is the amount which a proposal must gather so as to be considered by a committee. Only Governance committee is allowed to change this value
       */
      setQuorumThreshold: AugmentedSubmittable<(_threshold: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change the proposal duration value. This is the number of blocks for which votes are accepted on a proposal. Only Governance committee is allowed to change this value
       */
      setProposalDuration: AugmentedSubmittable<(_duration: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * A network member creates a Mesh Improvement Proposal by submitting a dispatchable which changes the network in someway. A minimum deposit is required to open a new proposal
       *
       * @param proposal - A dispatchable call
       */
      propose: AugmentedSubmittable<(_proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, _deposit: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * A network member can vote on any Mesh Improvement Proposal by selecting the hash that corresponds ot the dispatchable action and vote with some balance
       *
       * @param proposal - A dispatchable call
       * @param index - Proposal index
       * @param aye_or_nay - A bool representing for or against vote
       */
      vote: AugmentedSubmittable<(_proposalHash: Hash | string | Uint8Array, _index: MipsIndex | AnyNumber | Uint8Array, _ayeOrNay: bool | boolean | Uint8Array, _deposit: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * An emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time
       */
      killProposal: AugmentedSubmittable<(_index: MipsIndex | AnyNumber | Uint8Array, _proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * An emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time
       */
      fastTrackProposal: AugmentedSubmittable<(_index: MipsIndex | AnyNumber | Uint8Array, _proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * An emergency proposal that bypasses network voting process. Governance committee can make a proposal that automatically becomes a referendum on which the committee can vote on
       */
      emergencyReferendum: AugmentedSubmittable<(_proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Moves a referendum instance into dispatch queue
       */
      enactReferendum: AugmentedSubmittable<(_proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    asset: {

      /**
       * This function is used to either register a new ticker or extend validity of an exisitng ticker NB Ticker validity does not get carryforward when renewing ticker
       *
       * @param origin - It contains the signing key of the caller (i.e who signed the transaction to execute this function)
       */
      registerTicker: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * This function is used to accept a ticker transfer NB: To reject the transfer, call remove auth function in identity module
       *
       * @param origin - It contains the signing key of the caller (i.e who signed the transaction to execute this function)
       */
      acceptTickerTransfer: AugmentedSubmittable<(_authId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * This function is used to accept a token ownership transfer NB: To reject the transfer, call remove auth function in identity module
       *
       * @param origin - It contains the signing key of the caller (i.e who signed the transaction to execute this function)
       */
      acceptTokenOwnershipTransfer: AugmentedSubmittable<(_authId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Initializes a new security token makes the initiating account the owner of the security token & the balance of the owner is set to total supply
       *
       * @param origin - Contains the signing key of the caller (i.e who signed the transaction to execute this function)
       * @param did - The DID of the creator of the token or the owner of the token
       * @param name - The name of the token
       * @param ticker - The ticker symbol of the token
       * @param total_supply - The total supply of the token
       * @param divisible - A boolean to identify the divisibility status of the token
       * @param asset_type - The asset type
       * @param identifiers - A vector of asset identifiers
       */
      createToken: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _name: Bytes | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _totalSupply: Balance | AnyNumber | Uint8Array, _divisible: bool | boolean | Uint8Array, _assetType: AssetType | { equity: any } | { debt: any } | { commodity: any } | { structuredProduct: any } | { custom: any } | string | Uint8Array, _identifiers: Vec<ITuple<[IdentifierType, Bytes]>> | ([IdentifierType | { isin: any } | { cusip: any } | { custom: any } | string | Uint8Array, Bytes | string | Uint8Array])[], _fundingRound: Option<Bytes> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Freezes transfers and minting of a given token
       *
       * @param origin - The signing key of the sender
       */
      freeze: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Unfreezes transfers and minting of a given token
       *
       * @param origin - The signing key of the sender
       */
      unfreeze: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Renames a given token
       *
       * @param origin - The signing key of the sender
       * @param ticker - The ticker of the token
       */
      renameToken: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _name: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Transfer tokens from one DID to another DID as tokens are stored/managed on the DID level
       *
       * @param _origin - Signing key of the sender
       * @param did - DID of the `from` token holder, from whom tokens needs to transferred
       * @param ticker - Ticker of the token
       * @param to_did - DID of the `to` token holder, to whom token needs to transferred
       */
      transfer: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Forces a transfer between two DIDs & This can only be called by security token owner. This function doesn't validate any type of restriction beside a valid KYC check
       *
       * @param _origin - Signing key of the token owner DID
       * @param did - Token owner DID
       * @param ticker - Symbol of the token
       * @param from_did - DID of the token holder from whom balance token will be transferred
       * @param to_did - DID of token holder to whom token balance will be transferred
       * @param value - Amount of tokens
       * @param data - Some off chain data to validate the restriction
       */
      controllerTransfer: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _fromDid: IdentityId | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array, _operatorData: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Approve token transfer from one DID to DID once this is done, transfer_from can be called with corresponding values
       *
       * @param _origin - Signing key of the token owner (i.e sender)
       * @param did - DID of the sender
       * @param spender_did - DID of the spender
       */
      approve: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _spenderDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * If sufficient allowance provided, transfer from a DID to another DID without token owner's signature
       *
       * @param _origin - Signing key of spender
       * @param did - DID of the spender
       * @param _ticker - Ticker of the token
       * @param from_did - DID from whom token is being transferred
       * @param to_did - DID to whom token is being transferred
       */
      transferFrom: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _fromDid: IdentityId | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Function used to create the checkpoint
       *
       * @param _origin - Signing key of the token owner. (Only token owner can call this function)
       * @param did - DID of the token owner
       */
      createCheckpoint: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Function is used to issue(or mint) new tokens for the given DID can only be executed by the token owner
       *
       * @param origin - Signing key of token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param to_did - DID of the token holder to whom new tokens get issued
       */
      issue: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Function is used issue(or mint) new tokens for the given DIDs can only be executed by the token owner
       *
       * @param origin - Signing key of token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param investor_dids - Array of the DID of the token holders to whom new tokens get issued
       */
      batchIssue: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _investorDids: Vec<IdentityId> | (IdentityId | string | Uint8Array)[], _values: Vec<Balance> | (Balance | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Used to redeem the security tokens
       *
       * @param _origin - Signing key of the token holder who wants to redeem the tokens
       * @param did - DID of the token holder
       * @param ticker - Ticker of the token
       * @param value - Amount of the tokens needs to redeem
       */
      redeem: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Used to redeem the security tokens by some other DID who has approval
       *
       * @param _origin - Signing key of the spender who has valid approval to redeem the tokens
       * @param did - DID of the spender
       * @param ticker - Ticker of the token
       * @param from_did - DID from whom balance get reduced
       * @param value - Amount of the tokens needs to redeem
       */
      redeemFrom: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _fromDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Forces a redemption of an DID's tokens. Can only be called by token owner
       *
       * @param _origin - Signing key of the token owner
       * @param did - DID of the token holder
       * @param ticker - Ticker of the token
       * @param token_holder_did - DID from whom balance get reduced
       * @param value - Amount of the tokens needs to redeem
       * @param data - An off chain data blob used to validate the redeem functionality
       */
      controllerRedeem: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _tokenHolderDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array, _operatorData: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Makes an indivisible token divisible. Only called by the token owner
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       */
      makeDivisible: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Checks whether a transaction with given parameters can take place or not This function is state less function and used to validate the transfer before actual transfer call
       *
       * @param _origin - Signing Key of the caller
       * @param ticker - Ticker of the token
       * @param from_did - DID from whom tokens will be transferred
       * @param to_did - DID to whom tokens will be transferred
       * @param value - Amount of the tokens
       */
      canTransfer: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _fromDid: IdentityId | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * An ERC1594 transfer with data This function can be used by the exchanges of other third parties to dynamically validate the transaction by passing the data blob
       *
       * @param origin - Signing key of the sender
       * @param did - DID from whom tokens will be transferred
       * @param ticker - Ticker of the token
       * @param to_did - DID to whom tokens will be transferred
       * @param value - Amount of the tokens
       */
      transferWithData: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * An ERC1594 transfer_from with data This function can be used by the exchanges of other third parties to dynamically validate the transaction by passing the data blob
       *
       * @param origin - Signing key of the spender
       * @param did - DID of spender
       * @param ticker - Ticker of the token
       * @param from_did - DID from whom tokens will be transferred
       * @param to_did - DID to whom tokens will be transferred
       * @param value - Amount of the tokens
       */
      transferFromWithData: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _fromDid: IdentityId | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Used to know whether the given token will issue new tokens or not
       *
       * @param _origin - Signing key
       */
      isIssuable: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Add documents for a given token. To be called only by the token owner
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      addDocuments: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _documents: Vec<Document> | (Document | { name?: any; uri?: any; hash?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove documents for a given token. To be called only by the token owner
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      removeDocuments: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _docIds: Vec<u64> | (u64 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Update documents for the given token, Only be called by the token owner
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      updateDocuments: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _docs: Vec<ITuple<[u64, Document]>> | ([u64 | AnyNumber | Uint8Array, Document | { name?: any; uri?: any; hash?: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * ERC-2258 Implementation Used to increase the allowance for a given custodian Any investor/token holder can add a custodian and transfer the token transfer ownership to the custodian Through that investor balance will remain the same but the given token are only transfer by the custodian. This implementation make sure to have an accurate investor count from omnibus wallets
       *
       * @param origin - Signing key of the token holder
       * @param ticker - Ticker of the token
       * @param holder_did - DID of the token holder (i.e who wants to increase the custody allowance)
       * @param custodian_did - DID of the custodian (i.e whom allowance provided)
       */
      increaseCustodyAllowance: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _holderDid: IdentityId | string | Uint8Array, _custodianDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Used to increase the allowance for a given custodian by providing the off chain signature
       *
       * @param origin - Signing key of a DID who posses off chain signature
       * @param ticker - Ticker of the token
       * @param holder_did - DID of the token holder (i.e who wants to increase the custody allowance)
       * @param holder_account_id - Signing key which signs the off chain data blob
       * @param custodian_did - DID of the custodian (i.e whom allowance provided)
       * @param caller_did - DID of the caller
       * @param value - Allowance amount
       * @param nonce - A u16 number which avoid the replay attack
       */
      increaseCustodyAllowanceOf: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _holderDid: IdentityId | string | Uint8Array, _holderAccountId: AccountId | string | Uint8Array, _custodianDid: IdentityId | string | Uint8Array, _callerDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _nonce: u16 | AnyNumber | Uint8Array, _signature: OffChainSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Used to transfer the tokens by the approved custodian
       *
       * @param origin - Signing key of the custodian
       * @param ticker - Ticker of the token
       * @param holder_did - DID of the token holder (i.e whom balance get reduced)
       * @param custodian_did - DID of the custodian (i.e who has the valid approved allowance)
       * @param receiver_did - DID of the receiver
       */
      transferByCustodian: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _holderDid: IdentityId | string | Uint8Array, _custodianDid: IdentityId | string | Uint8Array, _receiverDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Sets the name of the current funding round
       *
       * @param origin - The signing key of the token owner DID
       * @param did - The token owner DID
       * @param ticker - The ticker of the token
       */
      setFundingRound: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _name: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Updates the asset identifiers. Can only be called by the token owner
       *
       * @param origin - The signing key of the token owner
       * @param did - The DID of the token owner
       * @param ticker - The ticker of the token
       * @param identifiers - The asset identifiers to be updated in the form of a vector of pairs
       */
      updateIdentifiers: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _identifiers: Vec<ITuple<[IdentifierType, Bytes]>> | ([IdentifierType | { isin: any } | { cusip: any } | { custom: any } | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Whitelisting the Smart-Extension address for a given ticker
       *
       * @param origin - Signatory who owns to ticker/asset
       * @param ticker - Ticker for whom extension get added
       */
      addExtension: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _extensionDetails: SmartExtension | { extension_type?: any; extension_name?: any; extension_id?: any; is_archive?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Archived the extension. Extension will not be used to verify the compliance or any smart logic it posses
       *
       * @param origin - Signatory who owns the ticker/asset
       * @param ticker - Ticker symbol of the asset
       */
      archiveExtension: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _extensionId: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Archived the extension. Extension will not be used to verify the compliance or any smart logic it posses
       *
       * @param origin - Signatory who owns the ticker/asset
       * @param ticker - Ticker symbol of the asset
       */
      unarchiveExtension: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array, _extensionId: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    dividend: {

      /**
       * Creates a new dividend entry without payout. Token must have at least one checkpoint
       */
      new: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _amount: Balance | AnyNumber | Uint8Array, _ticker: Ticker | string | Uint8Array, _maturesAt: Moment | AnyNumber | Uint8Array, _expiresAt: Moment | AnyNumber | Uint8Array, _payoutTicker: Ticker | string | Uint8Array, _checkpointId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Lets the owner cancel a dividend before start/maturity date
       */
      cancel: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _dividendId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Withdraws from a dividend the adequate share of the `amount` field. All dividend shares are rounded by truncation (down to first integer below)
       */
      claim: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _dividendId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * After a dividend had expired, collect the remaining amount to owner address
       */
      claimUnclaimed: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _dividendId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    identity: {

      /**
       * Register signing keys for a new DID. Uses origin key as the master key. # TODO Signing keys should authorize its use in this identity
       */
      registerDid: AugmentedSubmittable<(_signingItems: Vec<SigningItem> | (SigningItem | { signer?: any; signer_type?: any; permissions?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Adds new signing keys for a DID. Only called by master key owner
       */
      addSigningItems: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _signingItems: Vec<SigningItem> | (SigningItem | { signer?: any; signer_type?: any; permissions?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Removes specified signing keys of a DID if present
       */
      removeSigningItems: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _signersToRemove: Vec<Signatory> | (Signatory | { identity: any } | { accountKey: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Sets a new master key for a DID
       */
      setMasterKey: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _newKey: AccountKey | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Call this with the new master key. By invoking this method, caller accepts authorization with the new master key. If a KYC service provider approved this change, master key of the DID is updated
       *
       * @param owner_auth_id - Authorization from the owner who initiated the change
       */
      acceptMasterKey: AugmentedSubmittable<(_rotationAuthId: u64 | AnyNumber | Uint8Array, _kycAuthId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Adds new claim record or edits an existing one. Only called by did_issuer's signing key
       */
      addClaim: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _claimKey: Bytes | string | Uint8Array, _didIssuer: IdentityId | string | Uint8Array, _expiry: Moment | AnyNumber | Uint8Array, _claimValue: ClaimValue | { data_type?: any; value?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Adds a new batch of claim records or edits an existing one. Only called by `did_issuer`'s signing key
       */
      addClaimsBatch: AugmentedSubmittable<(_didIssuer: IdentityId | string | Uint8Array, _claims: Vec<ClaimRecord> | (ClaimRecord | { did?: any; claim_key?: any; expiry?: any; claim_value?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      forwardedCall: AugmentedSubmittable<(_targetDid: IdentityId | string | Uint8Array, _proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Marks the specified claim as revoked
       */
      revokeClaim: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _claimKey: Bytes | string | Uint8Array, _didIssuer: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * It sets permissions for an specific `target_key` key. Only the master key of an identity is able to set signing key permissions
       */
      setPermissionToSigner: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _signer: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array, _permissions: Vec<Permission> | (Permission | ('Full' | 'Admin' | 'Operator' | 'SpendFunds') | number | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * It disables all signing keys at `did` identity
       */
      freezeSigningKeys: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      unfreezeSigningKeys: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      getMyDid: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      getAssetDid: AugmentedSubmittable<(_ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Adds an authorization
       */
      addAuthorization: AugmentedSubmittable<(_target: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array, _authorizationData: AuthorizationData | { attestMasterKeyRotation: any } | { rotateMasterKey: any } | { transferTicker: any } | { addMultiSigSigner: any } | { transferTokenOwnership: any } | { custom: any } | { noData: any } | string | Uint8Array, _expiry: Option<Moment> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Adds an authorization as a key. To be used by signing keys that don't have an identity
       */
      addAuthorizationAsKey: AugmentedSubmittable<(_target: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array, _authorizationData: AuthorizationData | { attestMasterKeyRotation: any } | { rotateMasterKey: any } | { transferTicker: any } | { addMultiSigSigner: any } | { transferTokenOwnership: any } | { custom: any } | { noData: any } | string | Uint8Array, _expiry: Option<Moment> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Adds an array of authorization
       */
      batchAddAuthorization: AugmentedSubmittable<(_auths: Vec<ITuple<[Signatory, AuthorizationData, Option<Moment>]>> | ([Signatory | { identity: any } | { accountKey: any } | string | Uint8Array, AuthorizationData | { attestMasterKeyRotation: any } | { rotateMasterKey: any } | { transferTicker: any } | { addMultiSigSigner: any } | { transferTokenOwnership: any } | { custom: any } | { noData: any } | string | Uint8Array, Option<Moment> | null | object | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Removes an authorization
       */
      removeAuthorization: AugmentedSubmittable<(_target: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array, _authId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Removes an array of authorizations
       */
      batchRemoveAuthorization: AugmentedSubmittable<(_authIdentifiers: Vec<AuthIdentifier> | (AuthIdentifier | { signatory?: any; auth_id?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Accepts an authorization
       */
      acceptAuthorization: AugmentedSubmittable<(_authId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Accepts an array of authorizations
       */
      batchAcceptAuthorization: AugmentedSubmittable<(_authIds: Vec<u64> | (u64 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * The key designated by `origin` accepts the authorization to join to `target_id` Identity
       */
      authorizeJoinToIdentity: AugmentedSubmittable<(_targetId: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Identity's master key or target key are allowed to reject a pre authorization to join. It only affects the authorization: if key accepted it previously, then this transaction shall have no effect
       */
      unauthorizedJoinToIdentity: AugmentedSubmittable<(_signer: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array, _targetId: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * It adds signing keys to target identity `id`. Keys are directly added to identity because each of them has an authorization. Arguments:     - `origin` Master key of `id` identity.     - `id` Identity where new signing keys will be added.     - `additional_keys` New signing items (and their authorization data) to add to target     identity. Failure     - It can only called by master key owner.     - Keys should be able to linked to any identity
       */
      addSigningItemsWithAuthorization: AugmentedSubmittable<(_id: IdentityId | string | Uint8Array, _expiresAt: Moment | AnyNumber | Uint8Array, _additionalKeys: Vec<SigningItemWithAuth> | (SigningItemWithAuth | { signing_item?: any; auth_signature?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * It revokes the `auth` off-chain authorization of `signer`. It only takes effect if the authorized transaction is not yet executed
       */
      revokeOffchainAuthorization: AugmentedSubmittable<(_signer: Signatory | { identity: any } | { accountKey: any } | string | Uint8Array, _auth: TargetIdAuthorization | { target_id?: any; nonce?: any; expires_at?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Query whether given signer identity has valid KYC or not
       *
       * @param origin - Signatory whose identity get checked
       */
      isMyIdentityHasValidKyc: AugmentedSubmittable<(_bufferTime: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    generalTm: {

      /**
       * Adds an asset rule to active rules for a ticker
       */
      addActiveRule: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _assetRule: AssetRule | { sender_rules?: any; receiver_rules?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Removes a rule from active asset rules
       */
      removeActiveRule: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _assetRule: AssetRule | { sender_rules?: any; receiver_rules?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Removes all active rules of a ticker
       */
      resetActiveRules: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    voting: {

      /**
       * Adds a ballot
       *
       * @param did - DID of the token owner. Sender must be a signing key or master key of this DID
       * @param ticker - Ticker of the token for which ballot is to be created
       * @param ballot_name - Name of the ballot
       */
      addBallot: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _ballotName: Bytes | string | Uint8Array, _ballotDetails: Ballot | { checkpoint_id?: any; voting_start?: any; voting_end?: any; motions?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Casts a vote
       *
       * @param did - DID of the voter. Sender must be a signing key or master key of this DID
       * @param ticker - Ticker of the token for which vote is to be cast
       * @param ballot_name - Name of the ballot
       */
      vote: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _ballotName: Bytes | string | Uint8Array, _votes: Vec<Balance> | (Balance | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancels a vote by setting it as expired
       *
       * @param did - DID of the token owner. Sender must be a signing key or master key of this DID
       * @param ticker - Ticker of the token for which ballot is to be cancelled
       */
      cancelBallot: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _ballotName: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    stoCapped: {

      /**
       * Used to initialize the STO for a given asset
       *
       * @param origin - Signing key of the token owner who wants to initialize the sto
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param beneficiary_did - DID which holds all the funds collected
       * @param cap - Total amount of tokens allowed for sale
       * @param rate - Rate of asset in terms of native currency
       * @param start_date - Unix timestamp at when STO starts
       * @param end_date - Unix timestamp at when STO ends
       */
      launchSto: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _beneficiaryDid: IdentityId | string | Uint8Array, _cap: Balance | AnyNumber | Uint8Array, _rate: u128 | AnyNumber | Uint8Array, _startDate: Moment | AnyNumber | Uint8Array, _endDate: Moment | AnyNumber | Uint8Array, _simpleTokenTicker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Used to buy tokens
       *
       * @param origin - Signing key of the investor
       * @param did - DID of the investor
       * @param ticker - Ticker of the token
       * @param sto_id - A unique identifier to know which STO investor wants to invest in
       */
      buyTokens: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _stoId: u32 | AnyNumber | Uint8Array, _value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Modify the list of allowed tokens (stable coins) corresponds to given token/asset
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param sto_id - A unique identifier to know which STO investor wants to invest in
       * @param simple_token_ticker - Ticker of the stable coin
       */
      modifyAllowedTokens: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _stoId: u32 | AnyNumber | Uint8Array, _simpleTokenTicker: Ticker | string | Uint8Array, _modifyStatus: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Used to buy tokens using stable coins
       *
       * @param origin - Signing key of the investor
       * @param did - DID of the investor
       * @param ticker - Ticker of the token
       * @param sto_id - A unique identifier to know which STO investor wants to invest in
       * @param value - Amount of POLY wants to invest in
       */
      buyTokensBySimpleToken: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _stoId: u32 | AnyNumber | Uint8Array, _value: Balance | AnyNumber | Uint8Array, _simpleTokenTicker: Ticker | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get freezed like buy_tokens
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      pauseSto: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _stoId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Un-pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get un freezed
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      unpauseSto: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _stoId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    percentageTm: {

      /**
       * Set a maximum percentage that can be owned by a single investor
       */
      toggleMaximumPercentageRestriction: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _maxPercentage: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    exemption: {

      modifyExemptionList: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _tm: u16 | AnyNumber | Uint8Array, _assetHolderDid: IdentityId | string | Uint8Array, _exempted: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    simpleToken: {

      /**
       * Create a new token and mint a balance to the issuing identity
       */
      createToken: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _totalSupply: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Approve another identity to transfer tokens on behalf of the caller
       */
      approve: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _spenderDid: IdentityId | string | Uint8Array, _value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Transfer tokens to another identity
       */
      transfer: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Transfer tokens to another identity using the approval mechanic
       */
      transferFrom: AugmentedSubmittable<(_did: IdentityId | string | Uint8Array, _ticker: Ticker | string | Uint8Array, _fromDid: IdentityId | string | Uint8Array, _toDid: IdentityId | string | Uint8Array, _amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    kycServiceProviders: {

      /**
       * Add a member `who` to the set. May only be called from `AddOrigin` or root
       *
       * @param origin - Origin representing `AddOrigin` or root
       */
      addMember: AugmentedSubmittable<(_who: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a member `who` from the set. May only be called from `RemoveOrigin` or root
       *
       * @param origin - Origin representing `RemoveOrigin` or root
       */
      removeMember: AugmentedSubmittable<(_who: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root
       *
       * @param origin - Origin representing `SwapOrigin` or root
       * @param remove - IdentityId to be removed from the group
       */
      swapMember: AugmentedSubmittable<(_remove: IdentityId | string | Uint8Array, _add: IdentityId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root
       *
       * @param origin - Origin representing `ResetOrigin` or root
       */
      resetMembers: AugmentedSubmittable<(_members: Vec<IdentityId> | (IdentityId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
    };
  }
}
