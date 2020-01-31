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
      fillBlock: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      remark: ((__remark: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setHeapPages: ((_pages: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setCode: ((_new: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setStorage: ((_items: KeyValue[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      killStorage: ((_keys: Key|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      killPrefix: ((_prefix: Key | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    timestamp: {
      set: ((_now: Compact<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    balances: {
      transfer: ((_dest: Address, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      topUpIdentityBalance: ((_did: IdentityId | Uint8Array | string, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      reclaimIdentityBalance: ((_did: IdentityId | Uint8Array | string, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      changeChargeDidFlag: ((_charge_did: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setBalance: ((_who: Address, _new_free: Compact<Balance>, _new_reserved: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forceTransfer: ((_source: Address, _dest: Address, _value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    authorship: {
      setUncles: ((_new_uncles: Header[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    staking: {
      bond: ((_controller: Address, _value: Compact<BalanceOf>, _payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      bondExtra: ((_max_additional: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unbond: ((_value: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      withdrawUnbonded: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      validate: ((_prefs: ValidatorPrefs) => SubmittableExtrinsic<ApiType>) & CallFunction;
      nominate: ((_targets: Address[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      chill: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      setPayee: ((_payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setController: ((_controller: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setValidatorCount: ((_new: Compact<u32>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      addPotentialValidator: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeValidator: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      complianceFailed: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      compliancePassed: ((_controller: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      validateKycExpiryNominators: ((_targets: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forceNoEras: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      forceNewEra: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      setInvulnerables: ((_validators: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forceUnstake: ((_stash: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forceNewEraAlways: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      cancelDeferredSlash: ((_era: EraIndex | Uint8Array | number | string, _slash_indices: u32|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    session: {
      setKeys: ((_keys: Keys, _proof: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    finalityTracker: {
      finalHint: ((_hint: Compact<BlockNumber>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    grandpa: {
      reportMisbehavior: ((__report: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    imOnline: {
      heartbeat: ((_heartbeat: Heartbeat, __signature: Signature | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sudo: {
      sudo: ((_proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setKey: ((_new: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      sudoAs: ((_who: Address, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    multiSig: {
      createMultisig: ((_signers: Signer[], _sigs_required: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      createProposalAsIdentity: ((_multisig: AccountId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      createProposalAsKey: ((_multisig: AccountId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approveAsIdentity: ((_multisig: AccountId | Uint8Array | string, _proposal_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approveAsKey: ((_multisig: AccountId | Uint8Array | string, _proposal_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      acceptMultisigSignerAsIdentity: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      acceptMultisigSignerAsKey: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      addMultisigSigner: ((_signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeMultisigSigner: ((_signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      changeSigsRequired: ((_sigs_required: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    contracts: {
      updateSchedule: ((_schedule: Schedule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      putCode: ((_gas_limit: Compact<Gas>, _code: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      call: ((_dest: Address, _value: Compact<BalanceOf>, _gas_limit: Compact<Gas>, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      instantiate: ((_endowment: Compact<BalanceOf>, _gas_limit: Compact<Gas>, _code_hash: CodeHash | Uint8Array | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      claimSurcharge: ((_dest: AccountId | Uint8Array | string, _aux_sender: Option<AccountId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    treasury: {
      proposeSpend: ((_value: Compact<BalanceOf>, _beneficiary: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      rejectProposal: ((_proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approveProposal: ((_proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    polymeshCommittee: {
      setVoteThreshold: ((_match_criteria: ProportionMatch, _n: u32 | Uint8Array | number | string, _d: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setMembers: ((_new_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      propose: ((_did: IdentityId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      vote: ((_did: IdentityId | Uint8Array | string, _proposal: Hash | Uint8Array | string, _index: Compact<ProposalIndex>, _approve: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    committeeMembership: {
      addMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      swapMember: ((_remove: IdentityId | Uint8Array | string, _add: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      resetMembers: ((_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    mIPS: {
      setMinProposalDeposit: ((_deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setQuorumThreshold: ((_threshold: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setProposalDuration: ((_duration: BlockNumber | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      propose: ((_proposal: Proposal, _deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      vote: ((_proposal_hash: Hash | Uint8Array | string, _index: MipsIndex | Uint8Array | number | string, _aye_or_nay: bool, _deposit: BalanceOf | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      killProposal: ((_index: MipsIndex | Uint8Array | number | string, _proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      fastTrackProposal: ((_index: MipsIndex | Uint8Array | number | string, _proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      emergencyReferendum: ((_proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      enactReferendum: ((_proposal_hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    asset: {
      registerTicker: ((_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      acceptTickerTransfer: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      acceptTokenOwnershipTransfer: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      createToken: ((_did: IdentityId | Uint8Array | string, _name: Bytes | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _total_supply: Balance | Uint8Array | number | string, _divisible: bool, _asset_type: AssetType, _identifiers: Vec<ITuple<[IdentifierType,Bytes]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      renameToken: ((_ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      controllerTransfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string, _operator_data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approve: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _spender_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transferFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      createCheckpoint: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      issue: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batchIssue: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _investor_dids: IdentityId|Uint8Array|string[], _values: Balance|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      redeem: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      redeemFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, __data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      controllerRedeem: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _token_holder_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string, _operator_data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      makeDivisible: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      canTransfer: ((_ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transferWithData: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transferFromWithData: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      isIssuable: ((_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      getDocument: ((_ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setDocument: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string, _uri: Bytes | Uint8Array | string, _document_hash: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeDocument: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      increaseCustodyAllowance: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      increaseCustodyAllowanceOf: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _holder_account_id: AccountId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _caller_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string, _nonce: u16 | Uint8Array | number | string, _signature: OffChainSignature | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transferByCustodian: ((_ticker: Ticker | Uint8Array | string, _holder_did: IdentityId | Uint8Array | string, _custodian_did: IdentityId | Uint8Array | string, _receiver_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setFundingRound: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      updateIdentifiers: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _identifiers: Vec<ITuple<[IdentifierType,Bytes]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    dividend: {
      new: ((_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string, _ticker: Ticker | Uint8Array | string, _matures_at: Moment | Uint8Array | number | string, _expires_at: Moment | Uint8Array | number | string, _payout_ticker: Ticker | Uint8Array | string, _checkpoint_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      cancel: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      claim: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      claimUnclaimed: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _dividend_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    identity: {
      registerDid: ((_signing_items: SigningItem[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      addSigningItems: ((_did: IdentityId | Uint8Array | string, _signing_items: SigningItem[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeSigningItems: ((_did: IdentityId | Uint8Array | string, _signers_to_remove: Signer[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setMasterKey: ((_did: IdentityId | Uint8Array | string, _new_key: Key | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      addClaim: ((_did: IdentityId | Uint8Array | string, _claim_key: Bytes | Uint8Array | string, _did_issuer: IdentityId | Uint8Array | string, _expiry: Moment | Uint8Array | number | string, _claim_value: ClaimValue) => SubmittableExtrinsic<ApiType>) & CallFunction;
      addClaimsBatch: ((_did_issuer: IdentityId | Uint8Array | string, _claims: ClaimRecord[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forwardedCall: ((_target_did: IdentityId | Uint8Array | string, _proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      revokeClaim: ((_did: IdentityId | Uint8Array | string, _claim_key: Bytes | Uint8Array | string, _did_issuer: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      setPermissionToSigner: ((_did: IdentityId | Uint8Array | string, _signer: Signer, _permissions: Permission[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      freezeSigningKeys: ((_did: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unfreezeSigningKeys: ((_did: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      getMyDid: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      addAuthorization: ((_target: Signer, _authorization_data: AuthorizationData, _expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      addAuthorizationAsKey: ((_target: Signer, _authorization_data: AuthorizationData, _expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batchAddAuthorization: ((_auths: Vec<ITuple<[Signer,AuthorizationData,Option<Moment>]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeAuthorization: ((_target: Signer, _auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batchRemoveAuthorization: ((_auth_identifiers: Vec<ITuple<[Signer,u64]>>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      acceptAuthorization: ((_auth_id: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batchAcceptAuthorization: ((_auth_ids: u64|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      authorizeJoinToIdentity: ((_target_id: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unauthorizedJoinToIdentity: ((_signer: Signer, _target_id: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      addSigningItemsWithAuthorization: ((_id: IdentityId | Uint8Array | string, _expires_at: Moment | Uint8Array | number | string, _additional_keys: SigningItemWithAuth[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      revokeOffchainAuthorization: ((_signer: Signer, _auth: TargetIdAuthorization) => SubmittableExtrinsic<ApiType>) & CallFunction;
      isMyIdentityHasValidKyc: ((_buffer_time: u64 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    generalTM: {
      addActiveRule: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeActiveRule: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      resetActiveRules: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    voting: {
      addBallot: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string, _ballot_details: Ballot) => SubmittableExtrinsic<ApiType>) & CallFunction;
      vote: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string, _votes: Balance|Uint8Array|number|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
      cancelBallot: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _ballot_name: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sTOCapped: {
      launchSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _beneficiary_did: IdentityId | Uint8Array | string, _cap: Balance | Uint8Array | number | string, _rate: u128 | Uint8Array | number | string, _start_date: Moment | Uint8Array | number | string, _end_date: Moment | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      buyTokens: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      modifyAllowedTokens: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string, _modify_status: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      buyTokensBySimpleToken: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string, _value: Balance | Uint8Array | number | string, _simple_token_ticker: Ticker | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      pauseSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unpauseSto: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _sto_id: u32 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    percentageTM: {
      toggleMaximumPercentageRestriction: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _max_percentage: u16 | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    exemption: {
      modifyExemptionList: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, __tm: u16 | Uint8Array | number | string, _asset_holder_did: IdentityId | Uint8Array | string, _exempted: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    simpleToken: {
      createToken: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _total_supply: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approve: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _spender_did: IdentityId | Uint8Array | string, _value: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transferFrom: ((_did: IdentityId | Uint8Array | string, _ticker: Ticker | Uint8Array | string, _from_did: IdentityId | Uint8Array | string, _to_did: IdentityId | Uint8Array | string, _amount: Balance | Uint8Array | number | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    kYCServiceProviders: {
      addMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      removeMember: ((_who: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      swapMember: ((_remove: IdentityId | Uint8Array | string, _add: IdentityId | Uint8Array | string) => SubmittableExtrinsic<ApiType>) & CallFunction;
      resetMembers: ((_members: IdentityId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
  }
}
