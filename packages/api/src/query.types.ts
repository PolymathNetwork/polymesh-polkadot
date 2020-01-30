// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';
import { Option, Raw, Vec } from '@polkadot/types/codec';
import { Bytes, bool, u16, u32, u64 } from '@polkadot/types';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Index, KeyTypeId, Moment, Perbill, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { BabeAuthorityWeight, MaybeVrf } from '@polkadot/types/interfaces/babe';
import { BalanceLock, VestingSchedule } from '@polkadot/types/interfaces/balances';
import { ProposalIndex } from '@polkadot/types/interfaces/collective';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { CodeHash, ContractInfo, Gas, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import { Proposal } from '@polkadot/types/interfaces/democracy';
import { AuthorityList, SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import { Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex, EraPoints, Exposure, Forcing, MomentOf, Nominations, RewardDestination, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { DigestOf, EventIndex, EventRecord } from '@polkadot/types/interfaces/system';
import { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import { Multiplier } from '@polkadot/types/interfaces/txpayment';
import { AssetRule, Authorization, AuthorizationNonce, Ballot, Claim, ClaimMetaData, Counter, DidRecord, Dividend, IdentifierType, IdentityId, Investment, Key, Link, LinkedKeyInfo, MIP, MipsMetadata, PermissionedValidator, PreAuthorizedKeyInfo, ProportionMatch, ReferendumInfo, STO, SecurityToken, Signer, SimpleTokenRecord, TargetIdAuthorization, Ticker, TickerRegistration, TickerRegistrationConfig, Votes } from '@polkadot/types/interfaces/polymesh';
import { ITuple } from '@polkadot/types/types';

declare module './types' {
  export interface QueryableStorageExact<ApiType> {
    system: {
      accountNonce: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Index>> & QueryableStorageEntry<ApiType>;
      extrinsicCount: StorageEntryExact<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      allExtrinsicsWeight: StorageEntryExact<ApiType, () => Observable<Option<Weight>>> & QueryableStorageEntry<ApiType>;
      allExtrinsicsLen: StorageEntryExact<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      blockHash: StorageEntryExact<ApiType, (arg: BlockNumber | Uint8Array | number | string) => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      extrinsicData: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      number: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      parentHash: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      extrinsicsRoot: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      digest: StorageEntryExact<ApiType, () => Observable<DigestOf>> & QueryableStorageEntry<ApiType>;
      events: StorageEntryExact<ApiType, () => Observable<Vec<EventRecord>>> & QueryableStorageEntry<ApiType>;
      eventCount: StorageEntryExact<ApiType, () => Observable<EventIndex>> & QueryableStorageEntry<ApiType>;
      eventTopics: StorageEntryExact<ApiType, (key1: ITuple<[]>, key2: Hash | Uint8Array | string) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>> & QueryableStorageEntry<ApiType>;
    };
    babe: {
      epochIndex: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      authorities: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>> & QueryableStorageEntry<ApiType>;
      genesisSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      currentSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      randomness: StorageEntryExact<ApiType, () => Observable<Raw>> & QueryableStorageEntry<ApiType>;
      nextRandomness: StorageEntryExact<ApiType, () => Observable<Raw>> & QueryableStorageEntry<ApiType>;
      segmentIndex: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      underConstruction: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Vec<Raw>>> & QueryableStorageEntry<ApiType>;
      initialized: StorageEntryExact<ApiType, () => Observable<Option<MaybeVrf>>> & QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      now: StorageEntryExact<ApiType, () => Observable<Moment>> & QueryableStorageEntry<ApiType>;
      didUpdate: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    indices: {
      nextEnumSet: StorageEntryExact<ApiType, () => Observable<AccountIndex>> & QueryableStorageEntry<ApiType>;
      enumSet: StorageEntryExact<ApiType, (arg: AccountIndex | Uint8Array | number | string) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    balances: {
      totalIssuance: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      vesting: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<VestingSchedule>>> & QueryableStorageEntry<ApiType>;
      freeBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      reservedBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      locks: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<BalanceLock>>> & QueryableStorageEntry<ApiType>;
      identityBalance: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      chargeDid: StorageEntryExact<ApiType, (arg: Key | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    authorship: {
      uncles: StorageEntryExact<ApiType, () => Observable<Vec<UncleEntryItem>>> & QueryableStorageEntry<ApiType>;
      author: StorageEntryExact<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      didSetUncles: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    staking: {
      validatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      minimumValidatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      invulnerables: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      bonded: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      ledger: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<StakingLedger>>> & QueryableStorageEntry<ApiType>;
      payee: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<RewardDestination>> & QueryableStorageEntry<ApiType>;
      validators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ValidatorPrefs>> & QueryableStorageEntry<ApiType>;
      nominators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<Nominations>>> & QueryableStorageEntry<ApiType>;
      stakers: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Exposure>> & QueryableStorageEntry<ApiType>;
      currentElected: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      currentEra: StorageEntryExact<ApiType, () => Observable<EraIndex>> & QueryableStorageEntry<ApiType>;
      currentEraStart: StorageEntryExact<ApiType, () => Observable<MomentOf>> & QueryableStorageEntry<ApiType>;
      currentEraStartSessionIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      currentEraPointsEarned: StorageEntryExact<ApiType, () => Observable<EraPoints>> & QueryableStorageEntry<ApiType>;
      slotStake: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      forceEra: StorageEntryExact<ApiType, () => Observable<Forcing>> & QueryableStorageEntry<ApiType>;
      slashRewardFraction: StorageEntryExact<ApiType, () => Observable<Perbill>> & QueryableStorageEntry<ApiType>;
      canceledSlashPayout: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      unappliedSlashes: StorageEntryExact<ApiType, (arg: EraIndex | Uint8Array | number | string) => Observable<Vec<UnappliedSlash>>> & QueryableStorageEntry<ApiType>;
      bondedEras: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>> & QueryableStorageEntry<ApiType>;
      validatorSlashInEra: StorageEntryExact<ApiType, (key1: EraIndex | Uint8Array | number | string, key2: AccountId | Uint8Array | string) => Observable<Option<ITuple<[Perbill, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      nominatorSlashInEra: StorageEntryExact<ApiType, (key1: EraIndex | Uint8Array | number | string, key2: AccountId | Uint8Array | string) => Observable<Option<BalanceOf>>> & QueryableStorageEntry<ApiType>;
      slashingSpans: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<SlashingSpans>>> & QueryableStorageEntry<ApiType>;
      spanSlash: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, SpanIndex]>) => Observable<SpanRecord>> & QueryableStorageEntry<ApiType>;
      earliestUnappliedSlash: StorageEntryExact<ApiType, () => Observable<Option<EraIndex>>> & QueryableStorageEntry<ApiType>;
      storageVersion: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      permissionedValidators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<PermissionedValidator>>> & QueryableStorageEntry<ApiType>;
    };
    offences: {
      reports: StorageEntryExact<ApiType, (arg: ReportIdOf | Uint8Array | string) => Observable<Option<OffenceDetails>>> & QueryableStorageEntry<ApiType>;
      concurrentReportsIndex: StorageEntryExact<ApiType, (key1: Kind | Uint8Array | string, key2: OpaqueTimeSlot | Uint8Array | string) => Observable<Vec<ReportIdOf>>> & QueryableStorageEntry<ApiType>;
      reportsByKindIndex: StorageEntryExact<ApiType, (arg: Kind | Uint8Array | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
    };
    session: {
      validators: StorageEntryExact<ApiType, () => Observable<Vec<ValidatorId>>> & QueryableStorageEntry<ApiType>;
      currentIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      queuedChanged: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      queuedKeys: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>> & QueryableStorageEntry<ApiType>;
      disabledValidators: StorageEntryExact<ApiType, () => Observable<Vec<u32>>> & QueryableStorageEntry<ApiType>;
      nextKeys: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ValidatorId | Uint8Array | string) => Observable<Option<Keys>>> & QueryableStorageEntry<ApiType>;
      keyOwner: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ITuple<[KeyTypeId, Bytes]>) => Observable<Option<ValidatorId>>> & QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      authorities: StorageEntryExact<ApiType, () => Observable<AuthorityList>> & QueryableStorageEntry<ApiType>;
      state: StorageEntryExact<ApiType, () => Observable<StoredState>> & QueryableStorageEntry<ApiType>;
      pendingChange: StorageEntryExact<ApiType, () => Observable<Option<StoredPendingChange>>> & QueryableStorageEntry<ApiType>;
      nextForced: StorageEntryExact<ApiType, () => Observable<Option<BlockNumber>>> & QueryableStorageEntry<ApiType>;
      stalled: StorageEntryExact<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      currentSetId: StorageEntryExact<ApiType, () => Observable<SetId>> & QueryableStorageEntry<ApiType>;
      setIdSession: StorageEntryExact<ApiType, (arg: SetId | Uint8Array | number | string) => Observable<Option<SessionIndex>>> & QueryableStorageEntry<ApiType>;
    };
    imOnline: {
      gossipAt: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      keys: StorageEntryExact<ApiType, () => Observable<Vec<AuthorityId>>> & QueryableStorageEntry<ApiType>;
      receivedHeartbeats: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: AuthIndex | Uint8Array | number | string) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
      authoredBlocks: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: ValidatorId | Uint8Array | string) => Observable<u32>> & QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      randomMaterial: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: StorageEntryExact<ApiType, () => Observable<Multiplier>> & QueryableStorageEntry<ApiType>;
    };
    sudo: {
      key: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
    };
    multiSig: {
      multiSigNonce: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      multiSigSigners: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, Signer]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      multiSigSignsRequired: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      multiSigTxDone: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, u64]>) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      txApprovals: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, u64]>) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      votes: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, Signer, u64]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    contracts: {
      gasSpent: StorageEntryExact<ApiType, () => Observable<Gas>> & QueryableStorageEntry<ApiType>;
      currentSchedule: StorageEntryExact<ApiType, () => Observable<Schedule>> & QueryableStorageEntry<ApiType>;
      pristineCode: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
      codeStorage: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Option<PrefabWasmModule>>> & QueryableStorageEntry<ApiType>;
      accountCounter: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      contractInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<ContractInfo>>> & QueryableStorageEntry<ApiType>;
      gasPrice: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
    };
    treasury: {
      proposalCount: StorageEntryExact<ApiType, () => Observable<ProposalIndex>> & QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, (arg: ProposalIndex | Uint8Array | number | string) => Observable<Option<TreasuryProposal>>> & QueryableStorageEntry<ApiType>;
      approvals: StorageEntryExact<ApiType, () => Observable<Vec<ProposalIndex>>> & QueryableStorageEntry<ApiType>;
    };
    polymeshCommittee: {
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<IdentityId>>> & QueryableStorageEntry<ApiType>;
      voteThreshold: StorageEntryExact<ApiType, () => Observable<ITuple<[ProportionMatch, u32, u32]>>> & QueryableStorageEntry<ApiType>;
    };
    committeeMembership: {
      members: StorageEntryExact<ApiType, () => Observable<Vec<IdentityId>>> & QueryableStorageEntry<ApiType>;
    };
    mIPS: {
      minimumProposalDeposit: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      quorumThreshold: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      proposalDuration: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      proposalMetadata: StorageEntryExact<ApiType, () => Observable<Vec<MipsMetadata>>> & QueryableStorageEntry<ApiType>;
      deposits: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<MIP>>> & QueryableStorageEntry<ApiType>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      referendumMetadata: StorageEntryExact<ApiType, () => Observable<Vec<ReferendumInfo>>> & QueryableStorageEntry<ApiType>;
      referendums: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
    };
    asset: {
      feeCollector: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      tickers: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<TickerRegistration>> & QueryableStorageEntry<ApiType>;
      tickerConfig: StorageEntryExact<ApiType, () => Observable<TickerRegistrationConfig>> & QueryableStorageEntry<ApiType>;
      tokens: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<SecurityToken>> & QueryableStorageEntry<ApiType>;
      balanceOf: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      identifiers: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentifierType]>) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      allowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      assetCreationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      tickerRegistrationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      totalCheckpoints: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      checkpointTotalSupply: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u64]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      checkpointBalance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, u64]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      userCheckpoints: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Vec<u64>>> & QueryableStorageEntry<ApiType>;
      documents: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<ITuple<[Bytes, Bytes, Moment]>>> & QueryableStorageEntry<ApiType>;
      custodianAllowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      totalCustodyAllowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      authenticationNonce: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, u16]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      fundingRound: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      issuedInFundingRound: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
    };
    dividend: {
      dividends: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32]>) => Observable<Dividend>> & QueryableStorageEntry<ApiType>;
      dividendCount: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u32>> & QueryableStorageEntry<ApiType>;
      userPayoutCompleted: StorageEntryExact<ApiType, (arg: ITuple<[IdentityId, Ticker, u32]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    identity: {
      owner: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      didRecords: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<DidRecord>> & QueryableStorageEntry<ApiType>;
      isDidFrozen: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      currentDid: StorageEntryExact<ApiType, () => Observable<Option<IdentityId>>> & QueryableStorageEntry<ApiType>;
      claims: StorageEntryExact<ApiType, (arg: ITuple<[IdentityId, ClaimMetaData]>) => Observable<Claim>> & QueryableStorageEntry<ApiType>;
      claimKeys: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<Vec<ClaimMetaData>>> & QueryableStorageEntry<ApiType>;
      keyToIdentityIds: StorageEntryExact<ApiType, (arg: Key | Uint8Array | string) => Observable<Option<LinkedKeyInfo>>> & QueryableStorageEntry<ApiType>;
      didCreationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      kYCValidation: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      multiPurposeNonce: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      preAuthorizedJoinDid: StorageEntryExact<ApiType, (arg: Signer) => Observable<Vec<PreAuthorizedKeyInfo>>> & QueryableStorageEntry<ApiType>;
      offChainAuthorizationNonce: StorageEntryExact<ApiType, (arg: IdentityId | Uint8Array | string) => Observable<AuthorizationNonce>> & QueryableStorageEntry<ApiType>;
      revokeOffChainAuthorization: StorageEntryExact<ApiType, (arg: ITuple<[Signer, TargetIdAuthorization]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      authorizations: StorageEntryExact<ApiType, (arg: ITuple<[Signer, u64]>) => Observable<Authorization>> & QueryableStorageEntry<ApiType>;
      lastAuthorization: StorageEntryExact<ApiType, (arg: Signer) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      links: StorageEntryExact<ApiType, (arg: ITuple<[Signer, u64]>) => Observable<Link>> & QueryableStorageEntry<ApiType>;
      lastLink: StorageEntryExact<ApiType, (arg: Signer) => Observable<u64>> & QueryableStorageEntry<ApiType>;
    };
    generalTM: {
      activeRules: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<Vec<AssetRule>>> & QueryableStorageEntry<ApiType>;
    };
    voting: {
      ballots: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<Ballot>> & QueryableStorageEntry<ApiType>;
      totalChoices: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<u64>> & QueryableStorageEntry<ApiType>;
      votes: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes, IdentityId]>) => Observable<Vec<Balance>>> & QueryableStorageEntry<ApiType>;
      results: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Bytes]>) => Observable<Vec<Balance>>> & QueryableStorageEntry<ApiType>;
    };
    sTOCapped: {
      stosByToken: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32]>) => Observable<STO>> & QueryableStorageEntry<ApiType>;
      stoCount: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u32>> & QueryableStorageEntry<ApiType>;
      allowedTokens: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32, u32]>) => Observable<Ticker>> & QueryableStorageEntry<ApiType>;
      tokenIndexForSTO: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32, Ticker]>) => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      tokensCountForSto: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32]>) => Observable<u32>> & QueryableStorageEntry<ApiType>;
      investmentData: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u32, IdentityId]>) => Observable<Investment>> & QueryableStorageEntry<ApiType>;
      simpleTokenSpent: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, Ticker, u32, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
    };
    percentageTM: {
      maximumPercentageEnabledForToken: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<u16>> & QueryableStorageEntry<ApiType>;
    };
    exemption: {
      exemptionList: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, u16, IdentityId]>) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    simpleToken: {
      allowance: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      balanceOf: StorageEntryExact<ApiType, (arg: ITuple<[Ticker, IdentityId]>) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      creationFee: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      tokens: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<SimpleTokenRecord>> & QueryableStorageEntry<ApiType>;
    };
    kYCServiceProviders: {
      members: StorageEntryExact<ApiType, () => Observable<Vec<IdentityId>>> & QueryableStorageEntry<ApiType>;
    };
    statistic: {
      investorCountPerAsset: StorageEntryExact<ApiType, (arg: Ticker | Uint8Array | string) => Observable<Counter>> & QueryableStorageEntry<ApiType>;
    };
  }
}
