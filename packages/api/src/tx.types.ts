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
       * a big dispatch that will disallow any other transaction to be included
       */
      fillBlock: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * make some on-chain remark
       */
      remark: ((__remark: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * set the number of pages in the WebAssembly environment's heap
       */
      setHeapPages: ((_pages: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * set the new code
       */
      setCode: ((_new: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * set some items of storage
       */
      setStorage: ((_items: KeyValue[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * kill some items from storage
       */
      killStorage: ((_keys: Key|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * kill all storage items with a key that starts with the given prefix
       */
      killPrefix: ((_prefix: Key | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    timestamp: {
      /**
       * set the current time. This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. The dispatch origin for this call must be `Inherent`
       */
      set: ((_now: Compact<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    balances: {
      /**
       * transfer some liquid free balance to another account. `transfer` will set the `FreeBalance` of the sender and receiver. It will decrease the total issuance of the system by the `TransferFee`. The dispatch origin for this call must be `Signed` by the transactor. # <weight> - Dependent on arguments but not critical, given proper implementations for   input config types. See related functions below. - It contains a limited number of reads and writes internally and no complex computation. Related functions:   - `ensure_can_withdraw` is always called internally but has a bounded complexity.   - Transferring balances to accounts that did not exist before will cause      `T::OnNewAccount::on_new_account` to be called. # </weight>
       */
      transfer: ((_dest: Address, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * move some poly from balance of self to balance of an identity
       */
      topUpIdentityBalance: ((_did: IdentityId | Uint8Array | string, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * claim back poly from an identity. Can only be called by master key of the identity
       */
      reclaimIdentityBalance: ((_did: IdentityId | Uint8Array | string, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * change setting that governs if user pays fee via their own balance or identity's balance
       */
      changeChargeDidFlag: ((_charge_did: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * set the balances of a given account. This will alter `FreeBalance` and `ReservedBalance` in storage. it will also decrease the total issuance of the system (`TotalIssuance`). The dispatch origin for this call is `root`. # <weight> - Independent of the arguments. - Contains a limited number of reads and writes. # </weight>
       */
      setBalance: ((_who: Address, _new_free: Compact<Balance>, _new_reserved: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * exactly as `transfer`, except the origin must be root and the source account may be specified
       */
      forceTransfer: ((_source: Address, _dest: Address, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    authorship: {
      /**
       * provide a set of uncles
       */
      setUncles: ((_new_uncles: Header[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    staking: {
      /**
       * take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it. `value` must be more than the `minimum_balance` specified by `T::Currency`. The dispatch origin for this call must be _Signed_ by the stash account. # <weight> - Independent of the arguments. Moderate complexity. - O(1). - Three extra DB entries. NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless the `origin` falls below _existential deposit_ and gets removed as dust. # </weight>
       */
      bond: ((_controller: Address, _value: Compact<BalanceOf>, _payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * add some extra amount that have appeared in the stash `free_balance` into the balance up for staking. Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added. The dispatch origin for this call must be _Signed_ by the stash, not the controller. # <weight> - Independent of the arguments. Insignificant complexity. - O(1). - One DB entry. # </weight>
       */
      bondExtra: ((_max_additional: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount. Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer. No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible). The dispatch origin for this call must be _Signed_ by the controller, not the stash. See also [`Call::withdraw_unbonded`]. # <weight> - Independent of the arguments. Limited but potentially exploitable complexity. - Contains a limited number of reads. - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)   will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.   The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`. - One DB entry. </weight>
       */
      unbond: ((_value: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * remove any unlocked chunks from the `unlocking` queue from our management. This essentially frees up that balance to be used by the stash account to do whatever it wants. The dispatch origin for this call must be _Signed_ by the controller, not the stash. See also [`Call::unbond`]. # <weight> - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.  It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is  indirectly user-controlled. See [`unbond`] for more detail. - Contains a limited number of reads, yet the size of which could be large based on `ledger`. - Writes are limited to the `origin` account key. # </weight>
       */
      withdrawUnbonded: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * declare the desire to validate for the origin controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key. # </weight>
       */
      validate: ((_prefs: ValidatorPrefs) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * declare the desire to nominate `targets` for the origin controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - The transaction's complexity is proportional to the size of `targets`, which is capped at `MAX_NOMINATIONS`. - It also depends upon the no. of claim issuers for a given stash account. - Both the reads and writes follow a similar pattern. # </weight>
       */
      nominate: ((_targets: Address[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * declare no desire to either validate or nominate. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains one read. - Writes are limited to the `origin` account key. # </weight>
       */
      chill: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * (Re-)set the payment target for a controller. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the controller, not the stash. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key. # </weight>
       */
      setPayee: ((_payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * (Re-)set the controller of a stash. Effects will be felt at the beginning of the next era. The dispatch origin for this call must be _Signed_ by the stash, not the controller. # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key. # </weight>
       */
      setController: ((_controller: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * the ideal number of validators
       */
      setValidatorCount: ((_new: Compact<u32>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * governance committee on 2/3 rds majority can introduce a new potential validator to the pool of validators. Staking module uses `PermissionedValidators` to ensure validators have completed KYB compliance and considers them for validation
       */
      addPotentialValidator: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * remove a validator from the pool of validators. Effects are known in the next session. Staking module checks `PermissionedValidators` to ensure validators have completed KYB compliance
       */
      removeValidator: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * governance committee on 2/3 rds majority can update the compliance status of a validator as `Pending`
       */
      complianceFailed: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * governance committee on 2/3 rds majority can update the compliance status of a validator as `Active`
       */
      compliancePassed: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * validate the nominators KYC expiry time If an account from a given set of address is nominating then check the KYC expiry time of it and if it is expired then the account should be unbonded and removed from the nominating process. #<weight> - Depends on passed list of AccountId - Depends on the no. of claim issuers an accountId has for the KYC expiry #</weight>
       */
      validateKycExpiryNominators: ((_targets: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * force there to be no new eras indefinitely. # <weight> - No arguments. # </weight>
       */
      forceNoEras: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour. # <weight> - No arguments. # </weight>
       */
      forceNewEra: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * set the validators who cannot be slashed (if any)
       */
      setInvulnerables: ((_validators: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * force a current staker to become completely unstaked, immediately
       */
      forceUnstake: ((_stash: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * force there to be a new era at the end of sessions indefinitely. # <weight> - One storage write # </weight>
       */
      forceNewEraAlways: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * cancel enactment of a deferred slash. Can be called by either the root origin or the `T::SlashCancelOrigin`. passing the era and indices of the slashes for that era to kill. # <weight> - One storage write. # </weight>
       */
      cancelDeferredSlash: ((_era: EraIndex | Uint8Array | number | string, _slash_indices: u32|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    session: {
      /**
       * sets the session key(s) of the function caller to `key`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session. The dispatch origin of this function must be signed. # <weight> - O(log n) in number of accounts. - One extra DB entry. # </weight>
       */
      setKeys: ((_keys: Keys, _proof: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    finalityTracker: {
      /**
       * hint that the author of this block thinks the best finalized block is the given number
       */
      finalHint: ((_hint: Compact<BlockNumber>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    grandpa: {
      /**
       * report some misbehavior
       */
      reportMisbehavior: ((__report: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    imOnline: {
      heartbeat: ((_heartbeat: Heartbeat, __signature: Signature | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sudo: {
      /**
       * authenticates the sudo key and dispatches a function call with `Root` origin. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution. # </weight>
       */
      sudo: ((_proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB change. # </weight>
       */
      setKey: ((_new: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * authenticates the sudo key and dispatches a function call with `Signed` origin from a given account. The dispatch origin for this call must be _Signed_. # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution. # </weight>
       */
      sudoAs: ((_who: Address, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    multiSig: {
      /**
       * creates a multisig # Arguments * `signers` - Signers of the multisig (They need to accept authorization before they are actually added). * `sigs_required` - Number of sigs required to process a multi-sig tx
       */
      createMultisig: ((_signers: Signer[], _sigs_required: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * creates a multisig proposal # Arguments * `multisig` - MultiSig address. * `proposal` - Proposal to be voted on. If this is 1 of m multisig, the proposal will be immediately executed
       */
      createProposalAsIdentity: ((_multisig: AccountId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * creates a multisig proposal # Arguments * `multisig` - MultiSig address. * `proposal` - Proposal to be voted on. If this is 1 of m multisig, the proposal will be immediately executed
       */
      createProposalAsKey: ((_multisig: AccountId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * approves a multisig proposal using caller's identity # Arguments * `multisig` - MultiSig address. * `proposal_id` - Proposal id to approve. If quorum is reached, the proposal will be immediately executed
       */
      approveAsIdentity: ((_multisig: AccountId | Uint8Array | string, _proposal_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * approves a multisig proposal using caller's signing key (AccountId) # Arguments * `multisig` - MultiSig address. * `proposal_id` - Proposal id to approve. If quorum is reached, the proposal will be immediately executed
       */
      approveAsKey: ((_multisig: AccountId | Uint8Array | string, _proposal_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * accept a multisig signer authorization given to signer's identity # Arguments * `multisig` - MultiSig address. * `proposal_id` - Auth id of the authorization
       */
      acceptMultisigSignerAsIdentity: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * accept a multisig signer authorization given to signer's key (AccountId) # Arguments * `multisig` - MultiSig address. * `proposal_id` - Auth id of the authorization
       */
      acceptMultisigSignerAsKey: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * add a signer to the multisig. This must be called by the multisig itself. # Arguments * `multisig` - MultiSig address. * `signer` - Signer to add
       */
      addMultisigSigner: ((_signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * remove a signer from the multisig. This must be called by the multisig itself. # Arguments * `multisig` - MultiSig address. * `signer` - Signer to remove
       */
      removeMultisigSigner: ((_signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * change number of sigs required by a multisig. This must be called by the multisig itself. # Arguments * `multisig` - MultiSig address. * `sigs_required` - New number os sigs required
       */
      changeSigsRequired: ((_sigs_required: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    contracts: {
      /**
       * updates the schedule for metering contracts. The schedule must have a greater version than the stored schedule
       */
      updateSchedule: ((_schedule: Schedule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * stores the given binary Wasm code into the chain's storage and returns its `codehash`. You can instantiate contracts only with stored code
       */
      putCode: ((_gas_limit: Compact<Gas>, _code: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * makes a call to an account, optionally transferring some balance. * If the account is a smart-contract account, the associated code will be executed and any value will be transferred. * If the account is a regular account, any value will be transferred. * If no account exists and the call value is not less than `existential_deposit`, a regular account will be created and any value will be transferred
       */
      call: ((_dest: Address, _value: Compact<BalanceOf>, _gas_limit: Compact<Gas>, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance. Instantiation is executed as follows: - The destination address is computed based on the sender and hash of the code. - The smart-contract account is created at the computed address. - The `ctor_code` is executed in the context of the newly-created account. Buffer returned   after the execution is saved as the `code` of the account. That code will be invoked   upon any call received by this account. - The contract is initialized
       */
      instantiate: ((_endowment: Compact<BalanceOf>, _gas_limit: Compact<Gas>, _code_hash: CodeHash | Uint8Array | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * allows block producers to claim a small reward for evicting a contract. If a block producer fails to do so, a regular users will be allowed to claim the reward. If contract is not evicted as a result of this call, no actions are taken and the sender is not eligible for the reward
       */
      claimSurcharge: ((_dest: AccountId | Uint8Array | string, _aux_sender: Option<AccountId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    treasury: {
      /**
       * put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded. # <weight> - O(1). - Limited storage reads. - One DB change, one extra DB entry. # </weight>
       */
      proposeSpend: ((_value: Compact<BalanceOf>, _beneficiary: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * reject a proposed spend. The original deposit will be slashed. # <weight> - O(1). - Limited storage reads. - One DB clear. # </weight>
       */
      rejectProposal: ((_proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned. # <weight> - O(1). - Limited storage reads. - One DB change. # </weight>
       */
      approveProposal: ((_proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    polymeshCommittee: {
      /**
       * change the vote threshold the determines the winning proposal. For e.g., for a simple majority use (ProportionMatch.AtLeast, 1, 2) which represents the inequation ">= 1/2" # Arguments * `match_criteria` One of {AtLeast, MoreThan} * `n` Numerator of the fraction representing vote threshold * `d` Denominator of the fraction representing vote threshold * `match_criteria` One of {AtLeast, MoreThan}
       */
      setVoteThreshold: ((_match_criteria: ProportionMatch, _n: u32 | Uint8Array | number | string, _d: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * set the committee's membership manually to `new_members`. Requires root origin. # Arguments * `origin` Root * `new_members` Members to be initialized as committee
       */
      setMembers: ((_new_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * any committee member proposes a dispatchable. # Arguments * `did` Identity of the proposer * `proposal` A dispatchable call
       */
      propose: ((_did: IdentityId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * member casts a vote. # Arguments * `did` Identity of the proposer * `proposal` Hash of proposal to be voted on * `index` Proposal index * `approve` Represents a `for` or `against` vote
       */
      vote: ((_did: IdentityId | Uint8Array | string, _proposal: Hash | Uint8Array | string, _index: Compact<ProposalIndex>, _approve: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    committeeMembership: {
      /**
       * add a member `who` to the set. May only be called from `AddOrigin` or root. # Arguments * `origin` Origin representing `AddOrigin` or root * `who` IdentityId to be added to the group
       */
      addMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * remove a member `who` from the set. May only be called from `RemoveOrigin` or root. # Arguments * `origin` Origin representing `RemoveOrigin` or root * `who` IdentityId to be removed from the group
       */
      removeMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root. # Arguments * `origin` Origin representing `SwapOrigin` or root * `remove` IdentityId to be removed from the group. * `add` IdentityId to be added in place of `remove`
       */
      swapMember: ((_remove: IdentityId | Uint8Array | string, _add: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root. # Arguments * `origin` Origin representing `ResetOrigin` or root * `members` New set of identities
       */
      resetMembers: ((_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    mIPS: {
      /**
       * change the minimum proposal deposit amount required to start a proposal. Only Governance committee is allowed to change this value. # Arguments * `deposit` the new min deposit required to start a proposal
       */
      setMinProposalDeposit: ((_deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * change the quorum threshold amount. This is the amount which a proposal must gather so as to be considered by a committee. Only Governance committee is allowed to change this value. # Arguments * `threshold` the new quorum threshold amount value
       */
      setQuorumThreshold: ((_threshold: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * change the proposal duration value. This is the number of blocks for which votes are accepted on a proposal. Only Governance committee is allowed to change this value. # Arguments * `duration` proposal duration in blocks
       */
      setProposalDuration: ((_duration: BlockNumber | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * a network member creates a Mesh Improvement Proposal by submitting a dispatchable which changes the network in someway. A minimum deposit is required to open a new proposal. # Arguments * `proposal` a dispatchable call * `deposit` minimum deposit value
       */
      propose: ((_proposal: Proposal, _deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * a network member can vote on any Mesh Improvement Proposal by selecting the hash that corresponds ot the dispatchable action and vote with some balance. # Arguments * `proposal` a dispatchable call * `index` proposal index * `aye_or_nay` a bool representing for or against vote * `deposit` minimum deposit value
       */
      vote: ((_proposal_hash: Hash | Uint8Array | string, _index: MipsIndex | Uint8Array | number | string, _aye_or_nay: bool, _deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * an emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time
       */
      killProposal: ((_index: MipsIndex | Uint8Array | number | string, _proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * an emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time
       */
      fastTrackProposal: ((_index: MipsIndex | Uint8Array | number | string, _proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * an emergency proposal that bypasses network voting process. Governance committee can make a proposal that automatically becomes a referendum on which the committee can vote on
       */
      emergencyReferendum: ((_proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * moves a referendum instance into dispatch queue
       */
      enactReferendum: ((_proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    asset: {
      /**
       * this function is used to either register a new ticker or extend validity of an exisitng ticker NB Ticker validity does not get carryforward when renewing ticker # Arguments * `origin` It contains the signing key of the caller (i.e who signed the transaction to execute this function) * `ticker` ticker to register
       */
      registerTicker: ((_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * this function is used to accept a ticker transfer NB: To reject the transfer, call remove auth function in identity module. # Arguments * `origin` It contains the signing key of the caller (i.e who signed the transaction to execute this function) * `auth_id` Authorization ID of ticker transfer authorization
       */
      acceptTickerTransfer: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * this function is used to accept a token ownership transfer NB: To reject the transfer, call remove auth function in identity module. # Arguments * `origin` It contains the signing key of the caller (i.e who signed the transaction to execute this function) * `auth_id` Authorization ID of the token ownership transfer authorization
       */
      acceptTokenOwnershipTransfer: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * initializes a new security token makes the initiating account the owner of the security token & the balance of the owner is set to total supply # Arguments * `origin` - contains the signing key of the caller (i.e who signed the transaction to execute this function). * `did` - the DID of the creator of the token or the owner of the token. * `name` - the name of the token. * `ticker` - the ticker symbol of the token. * `total_supply` - the total supply of the token. * `divisible` - a boolean to identify the divisibility status of the token. * `asset_type` - the asset type. * `identifiers` - a vector of asset identifiers
       */
      createToken: ((_did: IdentityId | Uint8Array | string, _name: Bytes | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _total_supply: Balance | Uint8Array | number | string, _divisible: bool, _asset_type: AssetType, _identifiers: Vec<ITuple<[IdentifierType,Bytes]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * renames a given token. # Arguments * `origin` - the signing key of the sender * `ticker` - the ticker of the token * `name` - the new name of the token
       */
      renameToken: ((_ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * transfer tokens from one DID to another DID as tokens are stored/managed on the DID level # Arguments * `_origin` signing key of the sender * `did` DID of the `from` token holder, from whom tokens needs to transferred * `ticker` Ticker of the token * `to_did` DID of the `to` token holder, to whom token needs to transferred * `value` Value that needs to transferred
       */
      transfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * forces a transfer between two DIDs & This can only be called by security token owner. This function doesn't validate any type of restriction beside a valid KYC check # Arguments * `_origin` signing key of the token owner DID. * `did` Token owner DID. * `ticker` symbol of the token * `from_did` DID of the token holder from whom balance token will be transferred. * `to_did` DID of token holder to whom token balance will be transferred. * `value` Amount of tokens. * `data` Some off chain data to validate the restriction. * `operator_data` It is a string which describes the reason of this control transfer call
       */
      controllerTransfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string, _operator_data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * approve token transfer from one DID to DID once this is done, transfer_from can be called with corresponding values # Arguments * `_origin` Signing key of the token owner (i.e sender) * `did` DID of the sender * `spender_did` DID of the spender * `value` Amount of the tokens approved
       */
      approve: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _spender_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * if sufficient allowance provided, transfer from a DID to another DID without token owner's signature. # Arguments * `_origin` Signing key of spender * `did` DID of the spender * `_ticker` Ticker of the token * `from_did` DID from whom token is being transferred * `to_did` DID to whom token is being transferred * `value` Amount of the token for transfer
       */
      transferFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * function used to create the checkpoint # Arguments * `_origin` Signing key of the token owner. (Only token owner can call this function). * `did` DID of the token owner * `_ticker` Ticker of the token
       */
      createCheckpoint: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * function is used to issue(or mint) new tokens for the given DID can only be executed by the token owner # Arguments * `origin` Signing key of token owner * `did` DID of the token owner * `ticker` Ticker of the token * `to_did` DID of the token holder to whom new tokens get issued. * `value` Amount of tokens that get issued
       */
      issue: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * function is used issue(or mint) new tokens for the given DIDs can only be executed by the token owner # Arguments * `origin` Signing key of token owner * `did` DID of the token owner * `ticker` Ticker of the token * `investor_dids` Array of the DID of the token holders to whom new tokens get issued. * `values` Array of the Amount of tokens that get issued
       */
      batchIssue: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _investor_dids: IdentityId|Uint8Array|string[], _values: Balance|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to redeem the security tokens # Arguments * `_origin` Signing key of the token holder who wants to redeem the tokens * `did` DID of the token holder * `ticker` Ticker of the token * `value` Amount of the tokens needs to redeem * `_data` An off chain data blob used to validate the redeem functionality
       */
      redeem: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to redeem the security tokens by some other DID who has approval # Arguments * `_origin` Signing key of the spender who has valid approval to redeem the tokens * `did` DID of the spender * `ticker` Ticker of the token * `from_did` DID from whom balance get reduced * `value` Amount of the tokens needs to redeem * `_data` An off chain data blob used to validate the redeem functionality
       */
      redeemFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * forces a redemption of an DID's tokens. Can only be called by token owner # Arguments * `_origin` Signing key of the token owner * `did` DID of the token holder * `ticker` Ticker of the token * `token_holder_did` DID from whom balance get reduced * `value` Amount of the tokens needs to redeem * `data` An off chain data blob used to validate the redeem functionality. * `operator_data` Any data blob that defines the reason behind the force redeem
       */
      controllerRedeem: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _token_holder_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string, _operator_data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * makes an indivisible token divisible. Only called by the token owner # Arguments * `origin` Signing key of the token owner. * `did` DID of the token owner * `ticker` Ticker of the token
       */
      makeDivisible: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * checks whether a transaction with given parameters can take place or not This function is state less function and used to validate the transfer before actual transfer call. # Arguments * `_origin` Signing Key of the caller * `ticker` Ticker of the token * `from_did` DID from whom tokens will be transferred * `to_did` DID to whom tokens will be transferred * `value` Amount of the tokens * `data` Off chain data blob to validate the transfer
       */
      canTransfer: ((_ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * an ERC1594 transfer with data This function can be used by the exchanges of other third parties to dynamically validate the transaction by passing the data blob # Arguments * `origin` Signing key of the sender * `did` DID from whom tokens will be transferred * `ticker` Ticker of the token * `to_did` DID to whom tokens will be transferred * `value` Amount of the tokens * `data` Off chain data blob to validate the transfer
       */
      transferWithData: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * an ERC1594 transfer_from with data This function can be used by the exchanges of other third parties to dynamically validate the transaction by passing the data blob # Arguments * `origin` Signing key of the spender * `did` DID of spender * `ticker` Ticker of the token * `from_did` DID from whom tokens will be transferred * `to_did` DID to whom tokens will be transferred * `value` Amount of the tokens * `data` Off chain data blob to validate the transfer
       */
      transferFromWithData: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to know whether the given token will issue new tokens or not # Arguments * `_origin` Signing key * `ticker` Ticker of the token whose issuance status need to know
       */
      isIssuable: ((_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to get the documents details attach with the token # Arguments * `_origin` Caller signing key * `ticker` Ticker of the token * `name` Name of the document
       */
      getDocument: ((_ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to set the details of the document, Only be called by the token owner # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `name` Name of the document * `uri` Off chain URL of the document * `document_hash` Hash of the document to proof the incorruptibility of the document
       */
      setDocument: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string, _uri: Bytes | Uint8Array | string, _document_hash: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to remove the document details for the given token, Only be called by the token owner # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `name` Name of the document
       */
      removeDocument: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * eRC-2258 Implementation Used to increase the allowance for a given custodian Any investor/token holder can add a custodian and transfer the token transfer ownership to the custodian Through that investor balance will remain the same but the given token are only transfer by the custodian. This implementation make sure to have an accurate investor count from omnibus wallets. # Arguments * `origin` Signing key of the token holder * `ticker` Ticker of the token * `holder_did` DID of the token holder (i.e who wants to increase the custody allowance) * `custodian_did` DID of the custodian (i.e whom allowance provided) * `value` Allowance amount
       */
      increaseCustodyAllowance: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to increase the allowance for a given custodian by providing the off chain signature # Arguments * `origin` Signing key of a DID who posses off chain signature * `ticker` Ticker of the token * `holder_did` DID of the token holder (i.e who wants to increase the custody allowance) * `holder_account_id` Signing key which signs the off chain data blob. * `custodian_did` DID of the custodian (i.e whom allowance provided) * `caller_did` DID of the caller * `value` Allowance amount * `nonce` A u16 number which avoid the replay attack * `signature` Signature provided by the holder_did
       */
      increaseCustodyAllowanceOf: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _holder_account_id: AccountId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _caller_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _nonce: u16 | Uint8Array | number | string, _signature: OffChainSignature | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to transfer the tokens by the approved custodian # Arguments * `origin` Signing key of the custodian * `ticker` Ticker of the token * `holder_did` DID of the token holder (i.e whom balance get reduced) * `custodian_did` DID of the custodian (i.e who has the valid approved allowance) * `receiver_did` DID of the receiver * `value` Amount of tokens need to transfer
       */
      transferByCustodian: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _receiver_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * sets the name of the current funding round. # Arguments * `origin` - the signing key of the token owner DID. * `did` - the token owner DID. * `ticker` - the ticker of the token. * `name` - the desired name of the current funding round
       */
      setFundingRound: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * updates the asset identifiers. Can only be called by the token owner. # Arguments * `origin` - the signing key of the token owner * `did` - the DID of the token owner * `ticker` - the ticker of the token * `identifiers` - the asset identifiers to be updated in the form of a vector of pairs    of `IdentifierType` and `Vec<u8>` value
       */
      updateIdentifiers: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _identifiers: Vec<ITuple<[IdentifierType,Bytes]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    dividend: {
      /**
       * creates a new dividend entry without payout. Token must have at least one checkpoint
       */
      new: ((_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string, _ticker: Ticker | Uint8Array | string, _matures_at: Moment | Uint8Array | number | string, _expires_at: Moment | Uint8Array | number | string, _payout_ticker: Ticker | Uint8Array | string, _checkpoint_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * lets the owner cancel a dividend before start/maturity date
       */
      cancel: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * withdraws from a dividend the adequate share of the `amount` field. All dividend shares are rounded by truncation (down to first integer below)
       */
      claim: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * after a dividend had expired, collect the remaining amount to owner address
       */
      claimUnclaimed: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    identity: {
      /**
       * register signing keys for a new DID. Uses origin key as the master key. # TODO Signing keys should authorize its use in this identity. # Failure - Master key (administrator) can be linked to just one identity. - External signing keys can be linked to just one identity
       */
      registerDid: ((_signing_items: SigningItem[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * adds new signing keys for a DID. Only called by master key owner. # Failure  - It can only called by master key owner.  - If any signing key is already linked to any identity, it will fail.  - If any signing key is already
       */
      addSigningItems: ((_did: IdentityId | Uint8Array | string, _signing_items: SigningItem[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * removes specified signing keys of a DID if present. # Failure It can only called by master key owner
       */
      removeSigningItems: ((_did: IdentityId | Uint8Array | string, _signers_to_remove: Signer[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * sets a new master key for a DID. # Failure Only called by master key owner
       */
      setMasterKey: ((_did: IdentityId | Uint8Array | string, _new_key: Key | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * adds new claim record or edits an existing one. Only called by did_issuer's signing key
       */
      addClaim: ((_did: IdentityId | Uint8Array | string, _claim_key: Bytes | Uint8Array | string, _did_issuer: IdentityId | Uint8Array | string, _expiry: Moment | Uint8Array | number | string, _claim_value: ClaimValue) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * adds a new batch of claim records or edits an existing one. Only called by `did_issuer`'s signing key
       */
      addClaimsBatch: ((_did_issuer: IdentityId | Uint8Array | string, _claims: ClaimRecord[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forwardedCall: ((_target_did: IdentityId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * marks the specified claim as revoked
       */
      revokeClaim: ((_did: IdentityId | Uint8Array | string, _claim_key: Bytes | Uint8Array | string, _did_issuer: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * it sets permissions for an specific `target_key` key. Only the master key of an identity is able to set signing key permissions
       */
      setPermissionToSigner: ((_did: IdentityId | Uint8Array | string, _signer: Signer, _permissions: Permission[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * it disables all signing keys at `did` identity. # Errors
       */
      freezeSigningKeys: ((_did: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unfreezeSigningKeys: ((_did: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      getMyDid: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * adds an authorization
       */
      addAuthorization: ((_target: Signer, _authorization_data: AuthorizationData, _expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * adds an authorization as a key. To be used by signing keys that don't have an identity
       */
      addAuthorizationAsKey: ((_target: Signer, _authorization_data: AuthorizationData, _expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * adds an array of authorization
       */
      batchAddAuthorization: ((_auths: Vec<ITuple<[Signer,AuthorizationData,Option<Moment>]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * removes an authorization
       */
      removeAuthorization: ((_target: Signer, _auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * removes an array of authorizations
       */
      batchRemoveAuthorization: ((_auth_identifiers: Vec<ITuple<[Signer,u64]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * accepts an authorization
       */
      acceptAuthorization: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * accepts an array of authorizations
       */
      batchAcceptAuthorization: ((_auth_ids: u64|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * the key designated by `origin` accepts the authorization to join to `target_id` Identity. # Errors  - Key should be authorized previously to join to that target identity.  - Key is not linked to any other identity
       */
      authorizeJoinToIdentity: ((_target_id: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * identity's master key or target key are allowed to reject a pre authorization to join. It only affects the authorization: if key accepted it previously, then this transaction shall have no effect
       */
      unauthorizedJoinToIdentity: ((_signer: Signer, _target_id: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * it adds signing keys to target identity `id`. Keys are directly added to identity because each of them has an authorization. Arguments:     - `origin` Master key of `id` identity.     - `id` Identity where new signing keys will be added.     - `additional_keys` New signing items (and their authorization data) to add to target     identity. Failure     - It can only called by master key owner.     - Keys should be able to linked to any identity
       */
      addSigningItemsWithAuthorization: ((_id: IdentityId | Uint8Array | string, _expires_at: Moment | Uint8Array | number | string, _additional_keys: SigningItemWithAuth[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * it revokes the `auth` off-chain authorization of `signer`. It only takes effect if the authorized transaction is not yet executed
       */
      revokeOffchainAuthorization: ((_signer: Signer, _auth: TargetIdAuthorization) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * query whether given signer identity has valid KYC or not # Arguments * `origin` Signer whose identity get checked * `buffer_time` Buffer time corresponds to which kyc expiry need to check
       */
      isMyIdentityHasValidKyc: ((_buffer_time: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    generalTM: {
      /**
       * adds an asset rule to active rules for a ticker
       */
      addActiveRule: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * removes a rule from active asset rules
       */
      removeActiveRule: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * removes all active rules of a ticker
       */
      resetActiveRules: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    voting: {
      /**
       * adds a ballot # Arguments * `did` - DID of the token owner. Sender must be a signing key or master key of this DID * `ticker` - Ticker of the token for which ballot is to be created * `ballot_name` - Name of the ballot * `ballot_details` - Other details of the ballot
       */
      addBallot: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string, _ballot_details: Ballot) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * casts a vote # Arguments * `did` - DID of the voter. Sender must be a signing key or master key of this DID * `ticker` - Ticker of the token for which vote is to be cast * `ballot_name` - Name of the ballot * `votes` - The actual vote to be cast
       */
      vote: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string, _votes: Balance|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * cancels a vote by setting it as expired # Arguments * `did` - DID of the token owner. Sender must be a signing key or master key of this DID * `ticker` - Ticker of the token for which ballot is to be cancelled * `ballot_name` - Name of the ballot
       */
      cancelBallot: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sTOCapped: {
      /**
       * used to initialize the STO for a given asset # Arguments * `origin` Signing key of the token owner who wants to initialize the sto * `did` DID of the token owner * `ticker` Ticker of the token * `beneficiary_did` DID which holds all the funds collected * `cap` Total amount of tokens allowed for sale * `rate` Rate of asset in terms of native currency * `start_date` Unix timestamp at when STO starts * `end_date` Unix timestamp at when STO ends * `simple_token_ticker` Ticker of the simple token
       */
      launchSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _beneficiary_did: IdentityId | Uint8Array | string, _cap: Balance | Uint8Array | number | string, _rate: u128 | Uint8Array | number | string, _start_date: Moment | Uint8Array | number | string, _end_date: Moment | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to buy tokens # Arguments * `origin` Signing key of the investor * `did` DID of the investor * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO investor wants to invest in * `value` Amount of POLY wants to invest in
       */
      buyTokens: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * modify the list of allowed tokens (stable coins) corresponds to given token/asset # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO investor wants to invest in. * `simple_token_ticker` Ticker of the stable coin * `modify_status` Boolean to know whether the provided simple token ticker will be used or not
       */
      modifyAllowedTokens: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string, _modify_status: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * used to buy tokens using stable coins # Arguments * `origin` Signing key of the investor * `did` DID of the investor * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO investor wants to invest in * `value` Amount of POLY wants to invest in * `simple_token_ticker` Ticker of the simple token
       */
      buyTokensBySimpleToken: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _value: Balance | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get freezed like buy_tokens # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO needs to paused
       */
      pauseSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * un-pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get un freezed. # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO needs to un paused
       */
      unpauseSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    percentageTM: {
      /**
       * set a maximum percentage that can be owned by a single investor
       */
      toggleMaximumPercentageRestriction: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _max_percentage: u16 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    exemption: {
      modifyExemptionList: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, __tm: u16 | Uint8Array | number | string, _asset_holder_did: IdentityId | Uint8Array | string, _exempted: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    simpleToken: {
      /**
       * create a new token and mint a balance to the issuing identity
       */
      createToken: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _total_supply: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * approve another identity to transfer tokens on behalf of the caller
       */
      approve: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _spender_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * transfer tokens to another identity
       */
      transfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * transfer tokens to another identity using the approval mechanic
       */
      transferFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    kYCServiceProviders: {
      /**
       * add a member `who` to the set. May only be called from `AddOrigin` or root. # Arguments * `origin` Origin representing `AddOrigin` or root * `who` IdentityId to be added to the group
       */
      addMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * remove a member `who` from the set. May only be called from `RemoveOrigin` or root. # Arguments * `origin` Origin representing `RemoveOrigin` or root * `who` IdentityId to be removed from the group
       */
      removeMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root. # Arguments * `origin` Origin representing `SwapOrigin` or root * `remove` IdentityId to be removed from the group. * `add` IdentityId to be added in place of `remove`
       */
      swapMember: ((_remove: IdentityId | Uint8Array | string, _add: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      /**
       * change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root. # Arguments * `origin` Origin representing `ResetOrigin` or root * `members` New set of identities
       */
      resetMembers: ((_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
  }
}
