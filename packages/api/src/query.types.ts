// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';
import { Option, Raw, Vec } from '@polkadot/types/codec';
import { Bytes, bool, u16, u32, u64 } from '@polkadot/types';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Index, KeyTypeId, Moment, Perbill, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { BabeAuthorityWeight, MaybeVrf } from '@polkadot/types/interfaces/babe';
import { BalanceLock, VestingSchedule } from '@polkadot/types/interfaces/balances';
import { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { CodeHash, ContractInfo, Gas, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import { Proposal, ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { AuthorityList, SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import { Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex, EraPoints, Exposure, Forcing, MomentOf, Nominations, RewardDestination, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { DigestOf, EventIndex, EventRecord, Key } from '@polkadot/types/interfaces/system';
import { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import { Multiplier } from '@polkadot/types/interfaces/txpayment';
import { AssetRule, Authorization, AuthorizationNonce, Ballot, Claim, ClaimMetaData, Counter, DidRecord, Dividend, IdentifierType, IdentityId, Investment, Link, LinkedKeyInfo, MIP, MipsMetadata, PermissionedValidator, PreAuthorizedKeyInfo, ProportionMatch, STO, SecurityToken, Signer, SimpleTokenRecord, TargetIdAuthorization, Ticker, TickerRegistration, TickerRegistrationConfig } from '@polkadot/types/interfaces/polymesh';
import { ITuple } from '@polkadot/types/types';

declare module './types' {
  export interface QueryableStorageExact<ApiType> {
    system: {
      /**
       * extrinsics nonce for accounts
       */
      accountNonce: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Index>> & QueryableStorageEntry<ApiType>;
      /**
       * total extrinsics count for the current block
       */
      extrinsicCount: StorageEntryExact<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * total weight for all extrinsics put together, for the current block
       */
      allExtrinsicsWeight: StorageEntryExact<ApiType, () => Observable<Option<Weight>>> & QueryableStorageEntry<ApiType>;
      /**
       * total length (in bytes) for all extrinsics put together, for the current block
       */
      allExtrinsicsLen: StorageEntryExact<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * map of block numbers to block hashes
       */
      blockHash: StorageEntryExact<ApiType, (arg: BlockNumber | Uint8Array | number | string) => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * extrinsics data for the current block (maps an extrinsic's index to its data)
       */
      extrinsicData: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      /**
       * the current block number being processed. Set by `execute_block`
       */
      number: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      /**
       * hash of the previous block
       */
      parentHash: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * extrinsics root of the current block, also part of the block header
       */
      extrinsicsRoot: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * digest of the current block, also part of the block header
       */
      digest: StorageEntryExact<ApiType, () => Observable<DigestOf>> & QueryableStorageEntry<ApiType>;
      /**
       * events deposited for the current block
       */
      events: StorageEntryExact<ApiType, () => Observable<Vec<EventRecord>>> & QueryableStorageEntry<ApiType>;
      /**
       * the number of events in the `Events<T>` list
       */
      eventCount: StorageEntryExact<ApiType, () => Observable<EventIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * mapping between a topic (represented by T::Hash) and a vector of indexes of events in the `<Events<T>>` list. The first key serves no purpose. This field is declared as double_map just for convenience of using `remove_prefix`. All topic vectors have deterministic storage locations depending on the topic. This allows light-clients to leverage the changes trie storage tracking mechanism and in case of changes fetch the list of events of interest. The value has the type `(T::BlockNumber, EventIndex)` because if we used only just the `EventIndex` then in case if the topic has the same contents on the next block no notification will be triggered thus the event might be lost
       */
      eventTopics: StorageEntryExact<ApiType, (key1: ITuple<[]>, key2: Hash | Uint8Array | string) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>> & QueryableStorageEntry<ApiType>;
    };
    babe: {
      /**
       * current epoch index
       */
      epochIndex: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * current epoch authorities
       */
      authorities: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * the slot at which the first epoch actually started. This is 0 until the first block of the chain
       */
      genesisSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * current slot number
       */
      currentSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * the epoch randomness for the *current* epoch. # Security This MUST NOT be used for gambling, as it can be influenced by a malicious validator in the short term. It MAY be used in many cryptographic protocols, however, so long as one remembers that this (like everything else on-chain) it is public. For example, it can be used where a number is needed that cannot have been chosen by an adversary, for purposes such as public-coin zero-knowledge proofs
       */
      randomness: StorageEntryExact<ApiType, () => Observable<Raw>> & QueryableStorageEntry<ApiType>;
      /**
       * next epoch randomness
       */
      nextRandomness: StorageEntryExact<ApiType, () => Observable<Raw>> & QueryableStorageEntry<ApiType>;
      /**
       * randomness under construction. We make a tradeoff between storage accesses and list length. We store the under-construction randomness in segments of up to `UNDER_CONSTRUCTION_SEGMENT_LENGTH`. Once a segment reaches this length, we begin the next one. We reset all segments and return to `0` at the beginning of every epoch
       */
      segmentIndex: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      underConstruction: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Vec<Raw>>> & QueryableStorageEntry<ApiType>;
      /**
       * temporary value (cleared at block finalization) which is `Some` if per-block initialization has already been called for current block
       */
      initialized: StorageEntryExact<ApiType, () => Observable<Option<MaybeVrf>>> & QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * current time for the current block
       */
      now: StorageEntryExact<ApiType, () => Observable<Moment>> & QueryableStorageEntry<ApiType>;
      /**
       * did the timestamp get updated in this block?
       */
      didUpdate: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    indices: {
      /**
       * the next free enumeration set
       */
      nextEnumSet: StorageEntryExact<ApiType, () => Observable<AccountIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * the enumeration sets
       */
      enumSet: StorageEntryExact<ApiType, (arg: AccountIndex | Uint8Array | number | string) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * the total units issued in the system
       */
      totalIssuance: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * information regarding the vesting of a given account
       */
      vesting: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<VestingSchedule>>> & QueryableStorageEntry<ApiType>;
      /**
       * the 'free' balance of a given account. This is the only balance that matters in terms of most operations on tokens. It alone is used to determine the balance when in the contract execution environment
       */
      freeBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * the amount of the balance of a given account that is externally reserved; this can still get slashed, but gets slashed last of all. This balance is a 'reserve' balance that other subsystems use in order to set aside tokens that are still 'owned' by the account holder, but which are suspendable
       */
      reservedBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * any liquidity locks on some account balances
       */
      locks: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<BalanceLock>>> & QueryableStorageEntry<ApiType>;
      /**
       * balance held by the identity. It can be spent by its signing keys
       */
      identityBalance: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * signing key => Charge Fee to did?. Default is false i.e. the fee will be charged from user balance
       */
      chargeDid: StorageEntryExact<ApiType, (arg: Key | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * uncles
       */
      uncles: StorageEntryExact<ApiType, () => Observable<Vec<UncleEntryItem>>> & QueryableStorageEntry<ApiType>;
      /**
       * author of current block
       */
      author: StorageEntryExact<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * whether uncles were already set in this block
       */
      didSetUncles: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    staking: {
      /**
       * the ideal number of staking participants
       */
      validatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * minimum number of staking participants before emergency conditions are imposed
       */
      minimumValidatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets
       */
      invulnerables: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * map from all locked "stash" accounts to the controller account
       */
      bonded: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * map from all (unlocked) "controller" accounts to the info regarding the staking
       */
      ledger: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<StakingLedger>>> & QueryableStorageEntry<ApiType>;
      /**
       * where the reward payment should be made. Keyed by stash
       */
      payee: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<RewardDestination>> & QueryableStorageEntry<ApiType>;
      /**
       * the map from (wannabe) validator stash key to the preferences of that validator
       */
      validators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ValidatorPrefs>> & QueryableStorageEntry<ApiType>;
      /**
       * the map from nominator stash key to the set of stash keys of all validators to nominate. NOTE: is private so that we can ensure upgraded before all typical accesses. Direct storage APIs can still bypass this protection
       */
      nominators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<Nominations>>> & QueryableStorageEntry<ApiType>;
      /**
       * nominators for a particular account that is in action right now. You can't iterate through validators here, but you can find them in the Session module. This is keyed by the stash account
       */
      stakers: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Exposure>> & QueryableStorageEntry<ApiType>;
      /**
       * the currently elected validator set keyed by stash account ID
       */
      currentElected: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * the current era index
       */
      currentEra: StorageEntryExact<ApiType, () => Observable<EraIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * the start of the current era
       */
      currentEraStart: StorageEntryExact<ApiType, () => Observable<MomentOf>> & QueryableStorageEntry<ApiType>;
      /**
       * the session index at which the current era started
       */
      currentEraStartSessionIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * rewards for the current era. Using indices of current elected set
       */
      currentEraPointsEarned: StorageEntryExact<ApiType, () => Observable<EraPoints>> & QueryableStorageEntry<ApiType>;
      /**
       * the amount of balance actively at stake for each validator slot, currently. This is used to derive rewards and punishments
       */
      slotStake: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * true if the next session change will be a new era regardless of index
       */
      forceEra: StorageEntryExact<ApiType, () => Observable<Forcing>> & QueryableStorageEntry<ApiType>;
      /**
       * the percentage of the slash that is distributed to reporters. The rest of the slashed value is handled by the `Slash`
       */
      slashRewardFraction: StorageEntryExact<ApiType, () => Observable<Perbill>> & QueryableStorageEntry<ApiType>;
      /**
       * the amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance)
       */
      canceledSlashPayout: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * all unapplied slashes that are queued for later
       */
      unappliedSlashes: StorageEntryExact<ApiType, (arg: EraIndex | Uint8Array | number | string) => Observable<Vec<UnappliedSlash>>> & QueryableStorageEntry<ApiType>;
      /**
       * a mapping from still-bonded eras to the first session index of that era
       */
      bondedEras: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * all slashing events on validators, mapped by era to the highest slash proportion and slash value of the era
       */
      validatorSlashInEra: StorageEntryExact<ApiType, (key1: EraIndex | Uint8Array | number | string, key2: AccountId | Uint8Array | string) => Observable<Option<ITuple<[Perbill, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * all slashing events on nominators, mapped by era to the highest slash value of the era
       */
      nominatorSlashInEra: StorageEntryExact<ApiType, (key1: EraIndex | Uint8Array | number | string, key2: AccountId | Uint8Array | string) => Observable<Option<BalanceOf>>> & QueryableStorageEntry<ApiType>;
      /**
       * slashing spans for stash accounts
       */
      slashingSpans: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<SlashingSpans>>> & QueryableStorageEntry<ApiType>;
      /**
       * records information about the maximum slash of a stash within a slashing span, as well as how much reward has been paid out
       */
      spanSlash: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, SpanIndex]>) => Observable<SpanRecord>> & QueryableStorageEntry<ApiType>;
      /**
       * the earliest era for which we have a pending, unapplied slash
       */
      earliestUnappliedSlash: StorageEntryExact<ApiType, () => Observable<Option<EraIndex>>> & QueryableStorageEntry<ApiType>;
      /**
       * the version of storage for upgrade
       */
      storageVersion: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * the map from (wannabe) validators to the status of compliance
       */
      permissionedValidators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<PermissionedValidator>>> & QueryableStorageEntry<ApiType>;
    };
    offences: {
      /**
       * the primary structure that holds all offence records keyed by report identifiers
       */
      reports: StorageEntryExact<ApiType, (arg: ReportIdOf | Uint8Array | string) => Observable<Option<OffenceDetails>>> & QueryableStorageEntry<ApiType>;
      /**
       * a vector of reports of the same kind that happened at the same time slot
       */
      concurrentReportsIndex: StorageEntryExact<ApiType, (key1: Kind | Uint8Array | string, key2: OpaqueTimeSlot | Uint8Array | string) => Observable<Vec<ReportIdOf>>> & QueryableStorageEntry<ApiType>;
      /**
       * enumerates all reports of a kind along with the time they happened. All reports are sorted by the time of offence. Note that the actual type of this mapping is `Vec<u8>`, this is because values of different types are not supported at the moment so we are doing the manual serialization
       */
      reportsByKindIndex: StorageEntryExact<ApiType, (arg: Kind | Uint8Array | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * the current set of validators
       */
      validators: StorageEntryExact<ApiType, () => Observable<Vec<ValidatorId>>> & QueryableStorageEntry<ApiType>;
      /**
       * current index of the session
       */
      currentIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * true if the underlying economic identities or weighting behind the validators has changed in the queued validator set
       */
      queuedChanged: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * the queued keys for the next session. When the next session begins, these keys will be used to determine the validator's session keys
       */
      queuedKeys: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * indices of disabled validators. The set is cleared when `on_session_ending` returns a new set of identities
       */
      disabledValidators: StorageEntryExact<ApiType, () => Observable<Vec<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * the next session keys for a validator. The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries
       */
      nextKeys: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ValidatorId | Uint8Array | string) => Observable<Option<Keys>>> & QueryableStorageEntry<ApiType>;
      /**
       * the owner of a key. The second key is the `KeyTypeId` + the encoded key. The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries
       */
      keyOwner: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ITuple<[KeyTypeId, Bytes]>) => Observable<Option<ValidatorId>>> & QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      /**
       * dEPRECATED This used to store the current authority set, which has been migrated to the well-known GRANDPA_AUTHORITES_KEY unhashed key
       */
      authorities: StorageEntryExact<ApiType, () => Observable<AuthorityList>> & QueryableStorageEntry<ApiType>;
      /**
       * state of the current authority set
       */
      state: StorageEntryExact<ApiType, () => Observable<StoredState>> & QueryableStorageEntry<ApiType>;
      /**
       * pending change: (signaled at, scheduled change)
       */
      pendingChange: StorageEntryExact<ApiType, () => Observable<Option<StoredPendingChange>>> & QueryableStorageEntry<ApiType>;
      /**
       * next block number where we can force a change
       */
      nextForced: StorageEntryExact<ApiType, () => Observable<Option<BlockNumber>>> & QueryableStorageEntry<ApiType>;
      /**
       * `true` if we are currently stalled
       */
      stalled: StorageEntryExact<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * the number of changes (both in terms of keys and underlying economic responsibilities) in the "set" of Grandpa validators from genesis
       */
      currentSetId: StorageEntryExact<ApiType, () => Observable<SetId>> & QueryableStorageEntry<ApiType>;
      /**
       * a mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible
       */
      setIdSession: StorageEntryExact<ApiType, (arg: SetId | Uint8Array | number | string) => Observable<Option<SessionIndex>>> & QueryableStorageEntry<ApiType>;
    };
    imOnline: {
      /**
       * the block number when we should gossip
       */
      gossipAt: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      /**
       * the current set of keys that may issue a heartbeat
       */
      keys: StorageEntryExact<ApiType, () => Observable<Vec<AuthorityId>>> & QueryableStorageEntry<ApiType>;
      /**
       * for each session index, we keep a mapping of `AuthIndex` to `offchain::OpaqueNetworkState`
       */
      receivedHeartbeats: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: AuthIndex | Uint8Array | number | string) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
      /**
       * for each session index, we keep a mapping of `T::ValidatorId` to the number of blocks authored by the given authority
       */
      authoredBlocks: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: ValidatorId | Uint8Array | string) => Observable<u32>> & QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      /**
       * series of block headers from the last 81 blocks that acts as random seed material. This is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of the oldest hash
       */
      randomMaterial: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: StorageEntryExact<ApiType, () => Observable<Multiplier>> & QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * the `AccountId` of the sudo key
       */
      key: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
    };
    multiSig: {
      /**
       * nonce to ensure unique MultiSig addresses are generated. starts from 1
       */
      multiSigNonce: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * signers of a multisig. (mulisig, signer) => true/false
       */
      multiSigSigners: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, Signer]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * confirmations required before processing a multisig tx
       */
      multiSigSignsRequired: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * number of transactions proposed in a multisig. Used as tx id. starts from 0
       */
      multiSigTxDone: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * proposals presented for voting to a multisig (multisig, proposal id) => Option<proposal>. It is deleted after proposal is processed
       */
      proposals: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, u64]>) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * number of votes in favor of a tx. Mapping from (multisig, tx id) => no. of approvals
       */
      txApprovals: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, u64]>) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * individual multisig signer votes. (multi sig, signer, )
       */
      votes: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, Signer, u64]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    contracts: {
      /**
       * gas spent so far in this block
       */
      gasSpent: StorageEntryExact<ApiType, () => Observable<Gas>> & QueryableStorageEntry<ApiType>;
      /**
       * current cost schedule for contracts
       */
      currentSchedule: StorageEntryExact<ApiType, () => Observable<Schedule>> & QueryableStorageEntry<ApiType>;
      /**
       * a mapping from an original code hash to the original code, untouched by instrumentation
       */
      pristineCode: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
      /**
       * a mapping between an original code hash and instrumented wasm code, ready for execution
       */
      codeStorage: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Option<PrefabWasmModule>>> & QueryableStorageEntry<ApiType>;
      /**
       * the subtrie counter
       */
      accountCounter: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * the code associated with a given account
       */
      contractInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<ContractInfo>>> & QueryableStorageEntry<ApiType>;
      /**
       * the price of one unit of gas
       */
      gasPrice: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
    };
    treasury: {
      /**
       * number of proposals that have been made
       */
      proposalCount: StorageEntryExact<ApiType, () => Observable<ProposalIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * proposals that have been made
       */
      proposals: StorageEntryExact<ApiType, (arg: ProposalIndex | Uint8Array | number | string) => Observable<Option<TreasuryProposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * proposal indices that have been approved but not yet awarded
       */
      approvals: StorageEntryExact<ApiType, () => Observable<Vec<ProposalIndex>>> & QueryableStorageEntry<ApiType>;
    };
    polymeshCommittee: {
      /**
       * the hashes of the active proposals
       */
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      /**
       * actual proposal for a given hash
       */
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * votes on a given proposal, if it is ongoing
       */
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      /**
       * proposals so far
       */
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * the current members of the committee
       */
      members: StorageEntryExact<ApiType, () => Observable<Vec<IdentityId>>> & QueryableStorageEntry<ApiType>;
      /**
       * vote threshold for an approval
       */
      voteThreshold: StorageEntryExact<ApiType, () => Observable<ITuple<[ProportionMatch, u32, u32]>>> & QueryableStorageEntry<ApiType>;
    };
    committeeMembership: {
      /**
       * identities that are part of this group
       */
      members: StorageEntryExact<ApiType, () => Observable<Vec<IdentityId>>> & QueryableStorageEntry<ApiType>;
    };
    mIPS: {
      /**
       * the minimum amount to be used as a deposit for a public referendum proposal
       */
      minimumProposalDeposit: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * minimum stake a proposal must gather in order to be considered by the committee
       */
      quorumThreshold: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * how long (in blocks) a ballot runs
       */
      proposalDuration: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      /**
       * proposals so far. Index can be used to keep track of MIPs off-chain
       */
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * the hashes of the active proposals
       */
      proposalMetadata: StorageEntryExact<ApiType, () => Observable<Vec<MipsMetadata>>> & QueryableStorageEntry<ApiType>;
      /**
       * those who have locked a deposit. proposal hash -> (deposit, proposer)
       */
      deposits: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * actual proposal for a given hash, if it's current. proposal hash -> proposal
       */
      proposals: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<MIP>>> & QueryableStorageEntry<ApiType>;
      /**
       * votes on a given proposal, if it is ongoing. proposal hash -> voting info
       */
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      /**
       * active referendums
       */
      referendumMetadata: StorageEntryExact<ApiType, () => Observable<Vec<ReferendumInfo>>> & QueryableStorageEntry<ApiType>;
      /**
       * proposals that have met the quorum threshold to be put forward to a governance committee proposal hash -> proposal
       */
      referendums: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
    };
    asset: {
      /**
       * the DID of the fee collector
       */
      feeCollector: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      /**
       * ticker registration details (ticker) -> TickerRegistration
       */
      tickers: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<TickerRegistration>> & QueryableStorageEntry<ApiType>;
      /**
       * ticker registration config (ticker) -> TickerRegistrationConfig
       */
      tickerConfig: StorageEntryExact<ApiType, () => Observable<TickerRegistrationConfig>> & QueryableStorageEntry<ApiType>;
      /**
       * details of the token corresponding to the token ticker (ticker) -> SecurityToken details [returns SecurityToken struct]
       */
      tokens: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<SecurityToken>> & QueryableStorageEntry<ApiType>;
      /**
       * used to store the securityToken balance corresponds to ticker and Identity (ticker, DID) -> balance
       */
      balanceOf: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * a map of asset identifiers whose keys are pairs of a ticker name and an `IdentifierType` and whose values are byte vectors
       */
      identifiers: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentifierType]>) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      /**
       * (ticker, sender (DID), spender(DID)) -> allowance amount
       */
      allowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * cost in base currency to create a token
       */
      assetCreationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * cost in base currency to register a ticker
       */
      tickerRegistrationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * checkpoints created per token (ticker) -> no. of checkpoints
       */
      totalCheckpoints: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * total supply of the token at the checkpoint (ticker, checkpointId) -> total supply at given checkpoint
       */
      checkpointTotalSupply: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u64]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * balance of a DID at a checkpoint (ticker, DID, checkpoint ID) -> Balance of a DID at a checkpoint
       */
      checkpointBalance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, u64]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * last checkpoint updated for a DID's balance (ticker, DID) -> List of checkpoints where user balance changed
       */
      userCheckpoints: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Vec<u64>>> & QueryableStorageEntry<ApiType>;
      /**
       * the documents attached to the tokens (ticker, document name) -> (URI, document hash)
       */
      documents: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<ITuple<[Bytes, Bytes, Moment]>>> & QueryableStorageEntry<ApiType>;
      /**
       * allowance provided to the custodian (ticker, token holder, custodian) -> balance
       */
      custodianAllowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * total custodian allowance for a given token holder (ticker, token holder) -> balance
       */
      totalCustodyAllowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * store the nonce for off chain signature to increase the custody allowance (ticker, token holder, nonce) -> bool
       */
      authenticationNonce: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, u16]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * the name of the current funding round. ticker -> funding round
       */
      fundingRound: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      /**
       * the total balances of tokens issued in all recorded funding rounds. (ticker, funding round) -> balance
       */
      issuedInFundingRound: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
    };
    dividend: {
      /**
       * dividend records; (ticker, dividend ID) => dividend entry Note: contrary to checkpoint IDs, dividend IDs are 0-indexed
       */
      dividends: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32]>) => Observable<Dividend>> & QueryableStorageEntry<ApiType>;
      /**
       * how many dividends were created for a ticker so far; (ticker) => count
       */
      dividendCount: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * payout flags, decide whether a user already was paid their dividend (DID, ticker, dividend_id) -> whether they got their payout
       */
      userPayoutCompleted: StorageEntryExact<ApiType, (arg: ITuple<[IdentityId, Ticker, u32]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    identity: {
      /**
       * module owner
       */
      owner: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      /**
       * dID -> identity info
       */
      didRecords: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<DidRecord>> & QueryableStorageEntry<ApiType>;
      /**
       * dID -> bool that indicates if signing keys are frozen
       */
      isDidFrozen: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * it stores the current identity for current transaction
       */
      currentDid: StorageEntryExact<ApiType, () => Observable<Option<IdentityId>>> & QueryableStorageEntry<ApiType>;
      /**
       * (DID, claim_key, claim_issuer) -> Associated claims
       */
      claims: StorageEntryExact<ApiType, (arg: ITuple<[IdentityId, ClaimMetaData]>) => Observable<Claim>> & QueryableStorageEntry<ApiType>;
      /**
       * dID -> array of (claim_key and claim_issuer)
       */
      claimKeys: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<Vec<ClaimMetaData>>> & QueryableStorageEntry<ApiType>;
      keyToIdentityIds: StorageEntryExact<ApiType, (arg: Key | Uint8Array | string) => Observable<Option<LinkedKeyInfo>>> & QueryableStorageEntry<ApiType>;
      /**
       * how much does creating a DID cost
       */
      didCreationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * it stores validated identities by any KYC
       */
      kYCValidation: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * nonce to ensure unique actions. starts from 1
       */
      multiPurposeNonce: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * pre-authorize join to Identity
       */
      preAuthorizedJoinDid: StorageEntryExact<ApiType, (arg: Signer) => Observable<Vec<PreAuthorizedKeyInfo>>> & QueryableStorageEntry<ApiType>;
      /**
       * authorization nonce per Identity. Initially is 0
       */
      offChainAuthorizationNonce: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<AuthorizationNonce>> & QueryableStorageEntry<ApiType>;
      /**
       * inmediate revoke of any off-chain authorization
       */
      revokeOffChainAuthorization: StorageEntryExact<ApiType, (arg: ITuple<[Signer, TargetIdAuthorization]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * all authorizations that an identity has
       */
      authorizations: StorageEntryExact<ApiType, (arg: ITuple<[Signer, u64]>) => Observable<Authorization>> & QueryableStorageEntry<ApiType>;
      /**
       * auth id of the latest auth of an identity. Used to allow iterating over auths
       */
      lastAuthorization: StorageEntryExact<ApiType, (arg: Signer) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * all links that an identity/key has
       */
      links: StorageEntryExact<ApiType, (arg: ITuple<[Signer, u64]>) => Observable<Link>> & QueryableStorageEntry<ApiType>;
      /**
       * link id of the latest auth of an identity/key. Used to allow iterating over links
       */
      lastLink: StorageEntryExact<ApiType, (arg: Signer) => Observable<u64>> & QueryableStorageEntry<ApiType>;
    };
    generalTM: {
      /**
       * list of active rules for a ticker (Ticker -> Array of AssetRules)
       */
      activeRules: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<Vec<AssetRule>>> & QueryableStorageEntry<ApiType>;
    };
    voting: {
      /**
       * mapping of ticker and ballot name -> ballot details
       */
      ballots: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<Ballot>> & QueryableStorageEntry<ApiType>;
      /**
       * helper data to make voting cheaper. (ticker, BallotName) -> NoOfChoices
       */
      totalChoices: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * (Ticker, BallotName, DID) -> Vector of vote weights. weight at 0 index means weight for choice 1 of motion 1. weight at 1 index means weight for choice 2 of motion 1. User must enter 0 vote weight if they don't want to vote for a choice
       */
      votes: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes, IdentityId]>) => Observable<Vec<Balance>>> & QueryableStorageEntry<ApiType>;
      /**
       * (Ticker, BallotName) -> Vector of current vote weights. weight at 0 index means weight for choice 1 of motion 1. weight at 1 index means weight for choice 2 of motion 1
       */
      results: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<Vec<Balance>>> & QueryableStorageEntry<ApiType>;
    };
    sTOCapped: {
      /**
       * tokens can have multiple whitelists that (for now) check entries individually within each other (ticker, sto_id) -> STO
       */
      stosByToken: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32]>) => Observable<STO>> & QueryableStorageEntry<ApiType>;
      /**
       * it returns the sto count corresponds to its ticker ticker -> sto count
       */
      stoCount: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * list of SimpleToken tokens which will be accepted as the fund raised type for the STO (asset_ticker, sto_id, index) -> simple_token_ticker
       */
      allowedTokens: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32, u32]>) => Observable<Ticker>> & QueryableStorageEntry<ApiType>;
      /**
       * to track the index of the token address for the given STO (Asset_ticker, sto_id, simple_token_ticker) -> index
       */
      tokenIndexForSTO: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32, Ticker]>) => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * to track the no of different tokens allowed as fund raised type for the given STO (asset_ticker, sto_id) -> count
       */
      tokensCountForSto: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32]>) => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * to track the investment data of the investor corresponds to ticker (asset_ticker, sto_id, DID) -> Investment structure
       */
      investmentData: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32, IdentityId]>) => Observable<Investment>> & QueryableStorageEntry<ApiType>;
      /**
       * to track the investment amount of the investor corresponds to ticker using SimpleToken (asset_ticker, simple_token_ticker, sto_id, accountId) -> Invested balance
       */
      simpleTokenSpent: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Ticker, u32, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
    };
    percentageTM: {
      maximumPercentageEnabledForToken: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u16>> & QueryableStorageEntry<ApiType>;
    };
    exemption: {
      exemptionList: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u16, IdentityId]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    simpleToken: {
      /**
       * mapping from (ticker, owner DID, spender DID) to allowance amount
       */
      allowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * mapping from (ticker, owner DID) to their balance
       */
      balanceOf: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * the cost to create a new simple token
       */
      creationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * the details associated with each simple token
       */
      tokens: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<SimpleTokenRecord>> & QueryableStorageEntry<ApiType>;
    };
    kYCServiceProviders: {
      /**
       * identities that are part of this group
       */
      members: StorageEntryExact<ApiType, () => Observable<Vec<IdentityId>>> & QueryableStorageEntry<ApiType>;
    };
    statistic: {
      investorCountPerAsset: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<Counter>> & QueryableStorageEntry<ApiType>;
    };
  }
}
