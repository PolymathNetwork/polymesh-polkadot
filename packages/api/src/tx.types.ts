// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { SubmittableExtrinsic } from '@polkadot/api/types';
import { CallFunction } from '@polkadot/types/types';
import { Compact, Option, Vec } from '@polkadot/types/codec';
import { Bytes, bool, u128, u16, u32, u64 } from '@polkadot/types';
import { AccountId, Address, Balance, BalanceOf, BlockNumber, Hash, Header, KeyValue, Moment, Signature } from '@polkadot/types/interfaces/runtime';
import { ProposalIndex } from '@polkadot/types/interfaces/collective';
import { CodeHash, Gas, Schedule } from '@polkadot/types/interfaces/contracts';
import { Proposal } from '@polkadot/types/interfaces/democracy';
import { Heartbeat } from '@polkadot/types/interfaces/imOnline';
import { Keys } from '@polkadot/types/interfaces/session';
import { EraIndex, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { AssetRule, AssetType, AuthorizationData, Ballot, ClaimRecord, ClaimValue, IdentifierType, IdentityId, Key, MipsIndex, OffChainSignature, Permission, ProportionMatch, Signer, SigningItem, SigningItemWithAuth, TargetIdAuthorization, Ticker } from '@polkadot/types/interfaces/polymesh';
import { ITuple } from '@polkadot/types/types';

declare module './types' {
  export interface SubmittableExtrinsicsExact<ApiType> {
    system: {
      /**
       * A big dispatch that will disallow any other transaction to be included
       */
      fillBlock: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Make some on-chain remark
       */
      remark: ((__remark: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Set the number of pages in the WebAssembly environment's heap
       */
      setHeapPages: ((_pages: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Set the new code
       */
      setCode: ((_new: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Set some items of storage
       */
      setStorage: ((_items: KeyValue[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Kill some items from storage
       */
      killStorage: ((_keys: Key|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Kill all storage items with a key that starts with the given prefix
       */
      killPrefix: ((_prefix: Key | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    timestamp: {
      /**
       * Set the current time. This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. The dispatch origin for this call must be `Inherent`
       */
      set: ((_now: Compact<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    balances: {
      /**
       * Transfer some liquid free balance to another account. `transfer` will set the `FreeBalance` of the sender and receiver. It will decrease the total issuance of the system by the `TransferFee`. The dispatch origin for this call must be `Signed` by the transactor. # <weight> - Dependent on arguments but not critical, given proper implementations for   input config types. See related functions below. - It contains a limited number of reads and writes internally and no complex computation. Related functions:   - `ensure_can_withdraw` is always called internally but has a bounded complexity.   - Transferring balances to accounts that did not exist before will cause      `T::OnNewAccount::on_new_account` to be called
       */
      transfer: ((_dest: Address, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Move some poly from balance of self to balance of an identity
       */
      topUpIdentityBalance: ((_did: IdentityId | Uint8Array | string, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Claim back poly from an identity. Can only be called by master key of the identity
       */
      reclaimIdentityBalance: ((_did: IdentityId | Uint8Array | string, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Change setting that governs if user pays fee via their own balance or identity's balance
       */
      changeChargeDidFlag: ((_charge_did: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Set the balances of a given account. This will alter `FreeBalance` and `ReservedBalance` in storage. it will also decrease the total issuance of the system (`TotalIssuance`). The dispatch origin for this call is `root`. # <weight> - Independent of the arguments. - Contains a limited number of reads and writes
       */
      setBalance: ((_who: Address, _new_free: Compact<Balance>, _new_reserved: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be specified
       */
      forceTransfer: ((_source: Address, _dest: Address, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    authorship: {
      /**
       * Provide a set of uncles
       */
      setUncles: ((_new_uncles: Header[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    staking: {
      /**
       * Take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it. `value` must be more than the `minimum_balance` specified by `T::Currency`. The dispatch origin for this call must be _Signed_ by the stash account. # <weight> - Independent of the arguments. Moderate complexity. - O(1). - Three extra DB entries. NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless the `origin` falls below _existential deposit_ and gets removed as dust
       */
      bond: ((_controller: Address, _value: Compact<BalanceOf>, _payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Add some extra amount that have appeared in the stash `free_balance` into the balance up for staking. Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added. The dispatch origin for this call must be _Signed_ by the stash, not the controller. # <weight> - Independent of the arguments. Insignificant complexity. - O(1). - One DB entry
       */
      bondExtra: ((_max_additional: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount. Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer. No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible). The dispatch origin for this call must be _Signed_ by the controller, not the stash. See also [`Call::withdraw_unbonded`]
       */
      unbond: ((_value: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Remove any unlocked chunks from the `unlocking` queue from our management. This essentially frees up that balance to be used by the stash account to do whatever it wants. The dispatch origin for this call must be _Signed_ by the controller, not the stash. See also [`Call::unbond`]. # <weight> - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.  It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is  indirectly user-controlled. See [`unbond`] for more detail. - Contains a limited number of reads, yet the size of which could be large based on `ledger`. - Writes are limited to the `origin` account key
       */
      withdrawUnbonded: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Declare the desire to validate for the origin controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key
       */
      validate: ((_prefs: ValidatorPrefs) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Declare the desire to nominate `targets` for the origin controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - The transaction's complexity is proportional to the size of `targets`, which is capped at `MAX_NOMINATIONS`. - It also depends upon the no. of claim issuers for a given stash account. - Both the reads and writes follow a similar pattern
       */
      nominate: ((_targets: Address[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Declare no desire to either validate or nominate. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains one read. - Writes are limited to the `origin` account key
       */
      chill: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * (Re-)set the payment target for a controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key
       */
      setPayee: ((_payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * (Re-)set the controller of a stash. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the stash, not the controller. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key
       */
      setController: ((_controller: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * The ideal number of validators
       */
      setValidatorCount: ((_new: Compact<u32>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Governance committee on 2/3 rds majority can introduce a new potential validator to the pool of validators. Staking module uses `PermissionedValidators` to ensure validators have completed KYB compliance and considers them for validation
       */
      addPotentialValidator: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Remove a validator from the pool of validators. Effects are known in the next session. Staking module checks `PermissionedValidators` to ensure validators have completed KYB compliance
       */
      removeValidator: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Governance committee on 2/3 rds majority can update the compliance status of a validator as `Pending`
       */
      complianceFailed: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Governance committee on 2/3 rds majority can update the compliance status of a validator as `Active`
       */
      compliancePassed: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Validate the nominators KYC expiry time If an account from a given set of address is nominating then check the KYC expiry time of it and if it is expired then the account should be unbonded and removed from the nominating process. #<weight> - Depends on passed list of AccountId - Depends on the no. of claim issuers an accountId has for the KYC expiry
       */
      validateKycExpiryNominators: ((_targets: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Force there to be no new eras indefinitely. # <weight> - No arguments
       */
      forceNoEras: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour. # <weight> - No arguments
       */
      forceNewEra: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Set the validators who cannot be slashed (if any)
       */
      setInvulnerables: ((_validators: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Force a current staker to become completely unstaked, immediately
       */
      forceUnstake: ((_stash: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Force there to be a new era at the end of sessions indefinitely. # <weight> - One storage write
       */
      forceNewEraAlways: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Cancel enactment of a deferred slash. Can be called by either the root origin or the `T::SlashCancelOrigin`. passing the era and indices of the slashes for that era to kill. # <weight> - One storage write
       */
      cancelDeferredSlash: ((_era: EraIndex | Uint8Array | number | string, _slash_indices: u32|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    session: {
      /**
       * Sets the session key(s) of the function caller to `key`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session. The dispatch origin of this function must be signed. # <weight> - O(log n) in number of accounts. - One extra DB entry
       */
      setKeys: ((_keys: Keys, _proof: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    finalityTracker: {
      /**
       * Hint that the author of this block thinks the best finalized block is the given number
       */
      finalHint: ((_hint: Compact<BlockNumber>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    grandpa: {
      /**
       * Report some misbehavior
       */
      reportMisbehavior: ((__report: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    imOnline: {
      heartbeat: ((_heartbeat: Heartbeat, __signature: Signature | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sudo: {
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution
       */
      sudo: ((_proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB change
       */
      setKey: ((_new: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from a given account. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution
       */
      sudoAs: ((_who: Address, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    multiSig: {
      /**
       * Creates a multisig
       *
       * @param signers - Signers of the multisig (They need to accept authorization before they are actually added)
       */
      createMultisig: ((_signers: Signer[], _sigs_required: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Creates a multisig proposal
       *
       * @param multisig - MultiSig address
       * @param proposal - Proposal to be voted on
       */
      createProposalAsIdentity: ((_multisig: AccountId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Creates a multisig proposal
       *
       * @param multisig - MultiSig address
       * @param proposal - Proposal to be voted on
       */
      createProposalAsKey: ((_multisig: AccountId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Approves a multisig proposal using caller's identity
       *
       * @param multisig - MultiSig address
       * @param proposal_id - Proposal id to approve
       */
      approveAsIdentity: ((_multisig: AccountId | Uint8Array | string, _proposal_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Approves a multisig proposal using caller's signing key (AccountId)
       *
       * @param multisig - MultiSig address
       * @param proposal_id - Proposal id to approve
       */
      approveAsKey: ((_multisig: AccountId | Uint8Array | string, _proposal_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Accept a multisig signer authorization given to signer's identity
       *
       * @param multisig - MultiSig address
       */
      acceptMultisigSignerAsIdentity: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Accept a multisig signer authorization given to signer's key (AccountId)
       *
       * @param multisig - MultiSig address
       */
      acceptMultisigSignerAsKey: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Add a signer to the multisig. This must be called by the multisig itself
       *
       * @param multisig - MultiSig address
       */
      addMultisigSigner: ((_signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Remove a signer from the multisig. This must be called by the multisig itself
       *
       * @param multisig - MultiSig address
       */
      removeMultisigSigner: ((_signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Change number of sigs required by a multisig. This must be called by the multisig itself
       *
       * @param multisig - MultiSig address
       */
      changeSigsRequired: ((_sigs_required: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    contracts: {
      /**
       * Updates the schedule for metering contracts. The schedule must have a greater version than the stored schedule
       */
      updateSchedule: ((_schedule: Schedule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Stores the given binary Wasm code into the chain's storage and returns its `codehash`. You can instantiate contracts only with stored code
       */
      putCode: ((_gas_limit: Compact<Gas>, _code: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Makes a call to an account, optionally transferring some balance. * If the account is a smart-contract account, the associated code will be executed and any value will be transferred. * If the account is a regular account, any value will be transferred. * If no account exists and the call value is not less than `existential_deposit`, a regular account will be created and any value will be transferred
       */
      call: ((_dest: Address, _value: Compact<BalanceOf>, _gas_limit: Compact<Gas>, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance. Instantiation is executed as follows: - The destination address is computed based on the sender and hash of the code. - The smart-contract account is created at the computed address. - The `ctor_code` is executed in the context of the newly-created account. Buffer returned   after the execution is saved as the `code` of the account. That code will be invoked   upon any call received by this account. - The contract is initialized
       */
      instantiate: ((_endowment: Compact<BalanceOf>, _gas_limit: Compact<Gas>, _code_hash: CodeHash | Uint8Array | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Allows block producers to claim a small reward for evicting a contract. If a block producer fails to do so, a regular users will be allowed to claim the reward. If contract is not evicted as a result of this call, no actions are taken and the sender is not eligible for the reward
       */
      claimSurcharge: ((_dest: AccountId | Uint8Array | string, _aux_sender: Option<AccountId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    treasury: {
      /**
       * Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded. # <weight> - O(1). - Limited storage reads. - One DB change, one extra DB entry
       */
      proposeSpend: ((_value: Compact<BalanceOf>, _beneficiary: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Reject a proposed spend. The original deposit will be slashed. # <weight> - O(1). - Limited storage reads. - One DB clear
       */
      rejectProposal: ((_proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned. # <weight> - O(1). - Limited storage reads. - One DB change
       */
      approveProposal: ((_proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    polymeshCommittee: {
      /**
       * Change the vote threshold the determines the winning proposal. For e.g., for a simple majority use (ProportionMatch.AtLeast, 1, 2) which represents the inequation ">= 1/2"
       *
       * @param match_criteria - One of {AtLeast, MoreThan}
       * @param n - Numerator of the fraction representing vote threshold
       * @param d - Denominator of the fraction representing vote threshold
       */
      setVoteThreshold: ((_match_criteria: ProportionMatch, _n: u32 | Uint8Array | number | string, _d: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Set the committee's membership manually to `new_members`. Requires root origin
       *
       * @param origin - Root
       */
      setMembers: ((_new_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Any committee member proposes a dispatchable
       *
       * @param did - Identity of the proposer
       */
      propose: ((_did: IdentityId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Member casts a vote
       *
       * @param did - Identity of the proposer
       * @param proposal - Hash of proposal to be voted on
       * @param index - Proposal index
       */
      vote: ((_did: IdentityId | Uint8Array | string, _proposal: Hash | Uint8Array | string, _index: Compact<ProposalIndex>, _approve: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    committeeMembership: {
      /**
       * Add a member `who` to the set. May only be called from `AddOrigin` or root
       *
       * @param origin - Origin representing `AddOrigin` or root
       */
      addMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Remove a member `who` from the set. May only be called from `RemoveOrigin` or root
       *
       * @param origin - Origin representing `RemoveOrigin` or root
       */
      removeMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root
       *
       * @param origin - Origin representing `SwapOrigin` or root
       * @param remove - IdentityId to be removed from the group
       */
      swapMember: ((_remove: IdentityId | Uint8Array | string, _add: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root
       *
       * @param origin - Origin representing `ResetOrigin` or root
       */
      resetMembers: ((_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    mIPS: {
      /**
       * Change the minimum proposal deposit amount required to start a proposal. Only Governance committee is allowed to change this value
       */
      setMinProposalDeposit: ((_deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Change the quorum threshold amount. This is the amount which a proposal must gather so as to be considered by a committee. Only Governance committee is allowed to change this value
       */
      setQuorumThreshold: ((_threshold: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Change the proposal duration value. This is the number of blocks for which votes are accepted on a proposal. Only Governance committee is allowed to change this value
       */
      setProposalDuration: ((_duration: BlockNumber | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * A network member creates a Mesh Improvement Proposal by submitting a dispatchable which changes the network in someway. A minimum deposit is required to open a new proposal
       *
       * @param proposal - A dispatchable call
       */
      propose: ((_proposal: Proposal, _deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * A network member can vote on any Mesh Improvement Proposal by selecting the hash that corresponds ot the dispatchable action and vote with some balance
       *
       * @param proposal - A dispatchable call
       * @param index - Proposal index
       * @param aye_or_nay - A bool representing for or against vote
       */
      vote: ((_proposal_hash: Hash | Uint8Array | string, _index: MipsIndex | Uint8Array | number | string, _aye_or_nay: bool, _deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * An emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time
       */
      killProposal: ((_index: MipsIndex | Uint8Array | number | string, _proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * An emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time
       */
      fastTrackProposal: ((_index: MipsIndex | Uint8Array | number | string, _proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * An emergency proposal that bypasses network voting process. Governance committee can make a proposal that automatically becomes a referendum on which the committee can vote on
       */
      emergencyReferendum: ((_proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Moves a referendum instance into dispatch queue
       */
      enactReferendum: ((_proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    asset: {
      /**
       * This function is used to either register a new ticker or extend validity of an exisitng ticker NB Ticker validity does not get carryforward when renewing ticker
       *
       * @param origin - It contains the signing key of the caller (i.e who signed the transaction to execute this function)
       */
      registerTicker: ((_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * This function is used to accept a ticker transfer NB: To reject the transfer, call remove auth function in identity module
       *
       * @param origin - It contains the signing key of the caller (i.e who signed the transaction to execute this function)
       */
      acceptTickerTransfer: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * This function is used to accept a token ownership transfer NB: To reject the transfer, call remove auth function in identity module
       *
       * @param origin - It contains the signing key of the caller (i.e who signed the transaction to execute this function)
       */
      acceptTokenOwnershipTransfer: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
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
       */
      createToken: ((_did: IdentityId | Uint8Array | string, _name: Bytes | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _total_supply: Balance | Uint8Array | number | string, _divisible: bool, _asset_type: AssetType, _identifiers: Vec<ITuple<[IdentifierType,Bytes]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Renames a given token
       *
       * @param origin - The signing key of the sender
       * @param ticker - The ticker of the token
       */
      renameToken: ((_ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Transfer tokens from one DID to another DID as tokens are stored/managed on the DID level
       *
       * @param _origin - Signing key of the sender
       * @param did - DID of the `from` token holder, from whom tokens needs to transferred
       * @param ticker - Ticker of the token
       * @param to_did - DID of the `to` token holder, to whom token needs to transferred
       */
      transfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
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
      controllerTransfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string, _operator_data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Approve token transfer from one DID to DID once this is done, transfer_from can be called with corresponding values
       *
       * @param _origin - Signing key of the token owner (i.e sender)
       * @param did - DID of the sender
       * @param spender_did - DID of the spender
       */
      approve: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _spender_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * If sufficient allowance provided, transfer from a DID to another DID without token owner's signature
       *
       * @param _origin - Signing key of spender
       * @param did - DID of the spender
       * @param _ticker - Ticker of the token
       * @param from_did - DID from whom token is being transferred
       * @param to_did - DID to whom token is being transferred
       */
      transferFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Function used to create the checkpoint
       *
       * @param _origin - Signing key of the token owner. (Only token owner can call this function)
       * @param did - DID of the token owner
       */
      createCheckpoint: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Function is used to issue(or mint) new tokens for the given DID can only be executed by the token owner
       *
       * @param origin - Signing key of token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param to_did - DID of the token holder to whom new tokens get issued
       */
      issue: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Function is used issue(or mint) new tokens for the given DIDs can only be executed by the token owner
       *
       * @param origin - Signing key of token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param investor_dids - Array of the DID of the token holders to whom new tokens get issued
       */
      batchIssue: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _investor_dids: IdentityId|Uint8Array|string[], _values: Balance|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to redeem the security tokens
       *
       * @param _origin - Signing key of the token holder who wants to redeem the tokens
       * @param did - DID of the token holder
       * @param ticker - Ticker of the token
       * @param value - Amount of the tokens needs to redeem
       */
      redeem: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to redeem the security tokens by some other DID who has approval
       *
       * @param _origin - Signing key of the spender who has valid approval to redeem the tokens
       * @param did - DID of the spender
       * @param ticker - Ticker of the token
       * @param from_did - DID from whom balance get reduced
       * @param value - Amount of the tokens needs to redeem
       */
      redeemFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
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
      controllerRedeem: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _token_holder_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string, _operator_data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Makes an indivisible token divisible. Only called by the token owner
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       */
      makeDivisible: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Checks whether a transaction with given parameters can take place or not This function is state less function and used to validate the transfer before actual transfer call
       *
       * @param _origin - Signing Key of the caller
       * @param ticker - Ticker of the token
       * @param from_did - DID from whom tokens will be transferred
       * @param to_did - DID to whom tokens will be transferred
       * @param value - Amount of the tokens
       */
      canTransfer: ((_ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * An ERC1594 transfer with data This function can be used by the exchanges of other third parties to dynamically validate the transaction by passing the data blob
       *
       * @param origin - Signing key of the sender
       * @param did - DID from whom tokens will be transferred
       * @param ticker - Ticker of the token
       * @param to_did - DID to whom tokens will be transferred
       * @param value - Amount of the tokens
       */
      transferWithData: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
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
      transferFromWithData: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to know whether the given token will issue new tokens or not
       *
       * @param _origin - Signing key
       */
      isIssuable: ((_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to get the documents details attach with the token
       *
       * @param _origin - Caller signing key
       * @param ticker - Ticker of the token
       */
      getDocument: ((_ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to set the details of the document, Only be called by the token owner
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param name - Name of the document
       * @param uri - Off chain URL of the document
       */
      setDocument: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string, _uri: Bytes | Uint8Array | string, _document_hash: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to remove the document details for the given token, Only be called by the token owner
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      removeDocument: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * ERC-2258 Implementation Used to increase the allowance for a given custodian Any investor/token holder can add a custodian and transfer the token transfer ownership to the custodian Through that investor balance will remain the same but the given token are only transfer by the custodian. This implementation make sure to have an accurate investor count from omnibus wallets
       *
       * @param origin - Signing key of the token holder
       * @param ticker - Ticker of the token
       * @param holder_did - DID of the token holder (i.e who wants to increase the custody allowance)
       * @param custodian_did - DID of the custodian (i.e whom allowance provided)
       */
      increaseCustodyAllowance: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
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
      increaseCustodyAllowanceOf: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _holder_account_id: AccountId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _caller_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _nonce: u16 | Uint8Array | number | string, _signature: OffChainSignature | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to transfer the tokens by the approved custodian
       *
       * @param origin - Signing key of the custodian
       * @param ticker - Ticker of the token
       * @param holder_did - DID of the token holder (i.e whom balance get reduced)
       * @param custodian_did - DID of the custodian (i.e who has the valid approved allowance)
       * @param receiver_did - DID of the receiver
       */
      transferByCustodian: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _receiver_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Sets the name of the current funding round
       *
       * @param origin - The signing key of the token owner DID
       * @param did - The token owner DID
       * @param ticker - The ticker of the token
       */
      setFundingRound: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Updates the asset identifiers. Can only be called by the token owner
       *
       * @param origin - The signing key of the token owner
       * @param did - The DID of the token owner
       * @param ticker - The ticker of the token
       * @param identifiers - The asset identifiers to be updated in the form of a vector of pairs
       */
      updateIdentifiers: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _identifiers: Vec<ITuple<[IdentifierType,Bytes]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    dividend: {
      /**
       * Creates a new dividend entry without payout. Token must have at least one checkpoint
       */
      new: ((_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string, _ticker: Ticker | Uint8Array | string, _matures_at: Moment | Uint8Array | number | string, _expires_at: Moment | Uint8Array | number | string, _payout_ticker: Ticker | Uint8Array | string, _checkpoint_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Lets the owner cancel a dividend before start/maturity date
       */
      cancel: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Withdraws from a dividend the adequate share of the `amount` field. All dividend shares are rounded by truncation (down to first integer below)
       */
      claim: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * After a dividend had expired, collect the remaining amount to owner address
       */
      claimUnclaimed: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    identity: {
      /**
       * Register signing keys for a new DID. Uses origin key as the master key. # TODO Signing keys should authorize its use in this identity
       */
      registerDid: ((_signing_items: SigningItem[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Adds new signing keys for a DID. Only called by master key owner
       */
      addSigningItems: ((_did: IdentityId | Uint8Array | string, _signing_items: SigningItem[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Removes specified signing keys of a DID if present
       */
      removeSigningItems: ((_did: IdentityId | Uint8Array | string, _signers_to_remove: Signer[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Sets a new master key for a DID
       */
      setMasterKey: ((_did: IdentityId | Uint8Array | string, _new_key: Key | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Adds new claim record or edits an existing one. Only called by did_issuer's signing key
       */
      addClaim: ((_did: IdentityId | Uint8Array | string, _claim_key: Bytes | Uint8Array | string, _did_issuer: IdentityId | Uint8Array | string, _expiry: Moment | Uint8Array | number | string, _claim_value: ClaimValue) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Adds a new batch of claim records or edits an existing one. Only called by `did_issuer`'s signing key
       */
      addClaimsBatch: ((_did_issuer: IdentityId | Uint8Array | string, _claims: ClaimRecord[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forwardedCall: ((_target_did: IdentityId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Marks the specified claim as revoked
       */
      revokeClaim: ((_did: IdentityId | Uint8Array | string, _claim_key: Bytes | Uint8Array | string, _did_issuer: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * It sets permissions for an specific `target_key` key. Only the master key of an identity is able to set signing key permissions
       */
      setPermissionToSigner: ((_did: IdentityId | Uint8Array | string, _signer: Signer, _permissions: Permission[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * It disables all signing keys at `did` identity
       */
      freezeSigningKeys: ((_did: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unfreezeSigningKeys: ((_did: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      getMyDid: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Adds an authorization
       */
      addAuthorization: ((_target: Signer, _authorization_data: AuthorizationData, _expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Adds an authorization as a key. To be used by signing keys that don't have an identity
       */
      addAuthorizationAsKey: ((_target: Signer, _authorization_data: AuthorizationData, _expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Adds an array of authorization
       */
      batchAddAuthorization: ((_auths: Vec<ITuple<[Signer,AuthorizationData,Option<Moment>]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Removes an authorization
       */
      removeAuthorization: ((_target: Signer, _auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Removes an array of authorizations
       */
      batchRemoveAuthorization: ((_auth_identifiers: Vec<ITuple<[Signer,u64]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Accepts an authorization
       */
      acceptAuthorization: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Accepts an array of authorizations
       */
      batchAcceptAuthorization: ((_auth_ids: u64|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * The key designated by `origin` accepts the authorization to join to `target_id` Identity
       */
      authorizeJoinToIdentity: ((_target_id: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Identity's master key or target key are allowed to reject a pre authorization to join. It only affects the authorization: if key accepted it previously, then this transaction shall have no effect
       */
      unauthorizedJoinToIdentity: ((_signer: Signer, _target_id: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * It adds signing keys to target identity `id`. Keys are directly added to identity because each of them has an authorization. Arguments:     - `origin` Master key of `id` identity.     - `id` Identity where new signing keys will be added.     - `additional_keys` New signing items (and their authorization data) to add to target     identity. Failure     - It can only called by master key owner.     - Keys should be able to linked to any identity
       */
      addSigningItemsWithAuthorization: ((_id: IdentityId | Uint8Array | string, _expires_at: Moment | Uint8Array | number | string, _additional_keys: SigningItemWithAuth[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * It revokes the `auth` off-chain authorization of `signer`. It only takes effect if the authorized transaction is not yet executed
       */
      revokeOffchainAuthorization: ((_signer: Signer, _auth: TargetIdAuthorization) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Query whether given signer identity has valid KYC or not
       *
       * @param origin - Signer whose identity get checked
       */
      isMyIdentityHasValidKyc: ((_buffer_time: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    generalTM: {
      /**
       * Adds an asset rule to active rules for a ticker
       */
      addActiveRule: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Removes a rule from active asset rules
       */
      removeActiveRule: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Removes all active rules of a ticker
       */
      resetActiveRules: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    voting: {
      /**
       * Adds a ballot
       *
       * @param did - DID of the token owner. Sender must be a signing key or master key of this DID
       * @param ticker - Ticker of the token for which ballot is to be created
       * @param ballot_name - Name of the ballot
       */
      addBallot: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string, _ballot_details: Ballot) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Casts a vote
       *
       * @param did - DID of the voter. Sender must be a signing key or master key of this DID
       * @param ticker - Ticker of the token for which vote is to be cast
       * @param ballot_name - Name of the ballot
       */
      vote: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string, _votes: Balance|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Cancels a vote by setting it as expired
       *
       * @param did - DID of the token owner. Sender must be a signing key or master key of this DID
       * @param ticker - Ticker of the token for which ballot is to be cancelled
       */
      cancelBallot: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sTOCapped: {
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
      launchSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _beneficiary_did: IdentityId | Uint8Array | string, _cap: Balance | Uint8Array | number | string, _rate: u128 | Uint8Array | number | string, _start_date: Moment | Uint8Array | number | string, _end_date: Moment | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to buy tokens
       *
       * @param origin - Signing key of the investor
       * @param did - DID of the investor
       * @param ticker - Ticker of the token
       * @param sto_id - A unique identifier to know which STO investor wants to invest in
       */
      buyTokens: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Modify the list of allowed tokens (stable coins) corresponds to given token/asset
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       * @param sto_id - A unique identifier to know which STO investor wants to invest in
       * @param simple_token_ticker - Ticker of the stable coin
       */
      modifyAllowedTokens: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string, _modify_status: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Used to buy tokens using stable coins
       *
       * @param origin - Signing key of the investor
       * @param did - DID of the investor
       * @param ticker - Ticker of the token
       * @param sto_id - A unique identifier to know which STO investor wants to invest in
       * @param value - Amount of POLY wants to invest in
       */
      buyTokensBySimpleToken: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _value: Balance | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get freezed like buy_tokens
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      pauseSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Un-pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get un freezed
       *
       * @param origin - Signing key of the token owner
       * @param did - DID of the token owner
       * @param ticker - Ticker of the token
       */
      unpauseSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    percentageTM: {
      /**
       * Set a maximum percentage that can be owned by a single investor
       */
      toggleMaximumPercentageRestriction: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _max_percentage: u16 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    exemption: {
      modifyExemptionList: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, __tm: u16 | Uint8Array | number | string, _asset_holder_did: IdentityId | Uint8Array | string, _exempted: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    simpleToken: {
      /**
       * Create a new token and mint a balance to the issuing identity
       */
      createToken: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _total_supply: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Approve another identity to transfer tokens on behalf of the caller
       */
      approve: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _spender_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Transfer tokens to another identity
       */
      transfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Transfer tokens to another identity using the approval mechanic
       */
      transferFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    kYCServiceProviders: {
      /**
       * Add a member `who` to the set. May only be called from `AddOrigin` or root
       *
       * @param origin - Origin representing `AddOrigin` or root
       */
      addMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Remove a member `who` from the set. May only be called from `RemoveOrigin` or root
       *
       * @param origin - Origin representing `RemoveOrigin` or root
       */
      removeMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root
       *
       * @param origin - Origin representing `SwapOrigin` or root
       * @param remove - IdentityId to be removed from the group
       */
      swapMember: ((_remove: IdentityId | Uint8Array | string, _add: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * Change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root
       *
       * @param origin - Origin representing `ResetOrigin` or root
       */
      resetMembers: ((_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
  }
}
