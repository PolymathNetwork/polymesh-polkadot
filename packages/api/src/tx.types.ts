// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';

declare module './types' {
  export interface SubmittableExtrinsicsExact<ApiType> {
    system: {
      fill_block: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      remark: ((_remark: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_heap_pages: ((pages: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_code: ((new: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_storage: ((items: Vec<KeyValue>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      kill_storage: ((keys: Vec<Key>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      kill_prefix: ((prefix: Key) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    timestamp: {
      set: ((now: Compact<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    balances: {
      transfer: ((dest: Address, value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      top_up_identity_balance: ((did: IdentityId, value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      reclaim_identity_balance: ((did: IdentityId, value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      change_charge_did_flag: ((charge_did: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_balance: ((who: Address, new_free: Compact<Balance>, new_reserved: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      force_transfer: ((source: Address, dest: Address, value: Compact<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    authorship: {
      set_uncles: ((new_uncles: Vec<Header>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    staking: {
      bond: ((controller: Address, value: Compact<BalanceOf>, payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      bond_extra: ((max_additional: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unbond: ((value: Compact<BalanceOf>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      withdraw_unbonded: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      validate: ((prefs: ValidatorPrefs) => SubmittableExtrinsic<ApiType>) & CallFunction;
      nominate: ((targets: Vec<Address>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      chill: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_payee: ((payee: RewardDestination) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_controller: ((controller: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_validator_count: ((new: Compact<u32>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_potential_validator: ((controller: AccountId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_validator: ((controller: AccountId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      compliance_failed: ((controller: AccountId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      compliance_passed: ((controller: AccountId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      validate_kyc_expiry_nominators: ((targets: Vec<AccountId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      force_no_eras: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      force_new_era: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_invulnerables: ((validators: Vec<AccountId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      force_unstake: ((stash: AccountId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      force_new_era_always: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      cancel_deferred_slash: ((era: EraIndex, slash_indices: Vec<u32>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    session: {
      set_keys: ((keys: Keys, proof: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    finalityTracker: {
      final_hint: ((hint: Compact<BlockNumber>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    grandpa: {
      report_misbehavior: ((_report: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    imOnline: {
      heartbeat: ((heartbeat: Heartbeat, _signature: Signature) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sudo: {
      sudo: ((proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_key: ((new: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      sudo_as: ((who: Address, proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    multiSig: {
      create_multisig: ((signers: Vec<Signer>, sigs_required: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      create_proposal_as_identity: ((multisig: AccountId, proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      create_proposal_as_key: ((multisig: AccountId, proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approve_as_identity: ((multisig: AccountId, proposal_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approve_as_key: ((multisig: AccountId, proposal_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      accept_multisig_signer_as_identity: ((auth_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      accept_multisig_signer_as_key: ((auth_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_multisig_signer: ((signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_multisig_signer: ((signer: Signer) => SubmittableExtrinsic<ApiType>) & CallFunction;
      change_sigs_required: ((sigs_required: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    contracts: {
      update_schedule: ((schedule: Schedule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      put_code: ((gas_limit: Compact<Gas>, code: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      call: ((dest: Address, value: Compact<BalanceOf>, gas_limit: Compact<Gas>, data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      instantiate: ((endowment: Compact<BalanceOf>, gas_limit: Compact<Gas>, code_hash: CodeHash, data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      claim_surcharge: ((dest: AccountId, aux_sender: Option<AccountId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    treasury: {
      propose_spend: ((value: Compact<BalanceOf>, beneficiary: Address) => SubmittableExtrinsic<ApiType>) & CallFunction;
      reject_proposal: ((proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approve_proposal: ((proposal_id: Compact<ProposalIndex>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    polymeshCommittee: {
      set_vote_threshold: ((match_criteria: ProportionMatch, n: u32, d: u32) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_members: ((new_members: Vec<IdentityId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      propose: ((did: IdentityId, proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      vote: ((did: IdentityId, proposal: Hash, index: Compact<ProposalIndex>, approve: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    committeeMembership: {
      add_member: ((who: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_member: ((who: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      swap_member: ((remove: IdentityId, add: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      reset_members: ((members: Vec<IdentityId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    mIPS: {
      set_min_proposal_deposit: ((deposit: BalanceOf) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_quorum_threshold: ((threshold: BalanceOf) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_proposal_duration: ((duration: BlockNumber) => SubmittableExtrinsic<ApiType>) & CallFunction;
      propose: ((proposal: Proposal, deposit: BalanceOf) => SubmittableExtrinsic<ApiType>) & CallFunction;
      vote: ((proposal_hash: Hash, index: MipsIndex, aye_or_nay: bool, deposit: BalanceOf) => SubmittableExtrinsic<ApiType>) & CallFunction;
      kill_proposal: ((index: MipsIndex, proposal_hash: Hash) => SubmittableExtrinsic<ApiType>) & CallFunction;
      fast_track_proposal: ((index: MipsIndex, proposal_hash: Hash) => SubmittableExtrinsic<ApiType>) & CallFunction;
      emergency_referendum: ((proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      enact_referendum: ((proposal_hash: Hash) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    asset: {
      register_ticker: ((ticker: Ticker) => SubmittableExtrinsic<ApiType>) & CallFunction;
      accept_ticker_transfer: ((auth_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      accept_token_ownership_transfer: ((auth_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      create_token: ((did: IdentityId, name: Bytes, ticker: Ticker, total_supply: Balance, divisible: bool, asset_type: AssetType, identifiers: Vec<(IdentifierType,Bytes)>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      rename_token: ((ticker: Ticker, name: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer: ((did: IdentityId, ticker: Ticker, to_did: IdentityId, value: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      controller_transfer: ((did: IdentityId, ticker: Ticker, from_did: IdentityId, to_did: IdentityId, value: Balance, data: Bytes, operator_data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approve: ((did: IdentityId, ticker: Ticker, spender_did: IdentityId, value: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer_from: ((did: IdentityId, ticker: Ticker, from_did: IdentityId, to_did: IdentityId, value: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      create_checkpoint: ((did: IdentityId, ticker: Ticker) => SubmittableExtrinsic<ApiType>) & CallFunction;
      issue: ((did: IdentityId, ticker: Ticker, to_did: IdentityId, value: Balance, _data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batch_issue: ((did: IdentityId, ticker: Ticker, investor_dids: Vec<IdentityId>, values: Vec<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      redeem: ((did: IdentityId, ticker: Ticker, value: Balance, _data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      redeem_from: ((did: IdentityId, ticker: Ticker, from_did: IdentityId, value: Balance, _data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      controller_redeem: ((did: IdentityId, ticker: Ticker, token_holder_did: IdentityId, value: Balance, data: Bytes, operator_data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      make_divisible: ((did: IdentityId, ticker: Ticker) => SubmittableExtrinsic<ApiType>) & CallFunction;
      can_transfer: ((ticker: Ticker, from_did: IdentityId, to_did: IdentityId, value: Balance, data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer_with_data: ((did: IdentityId, ticker: Ticker, to_did: IdentityId, value: Balance, data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer_from_with_data: ((did: IdentityId, ticker: Ticker, from_did: IdentityId, to_did: IdentityId, value: Balance, data: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      is_issuable: ((ticker: Ticker) => SubmittableExtrinsic<ApiType>) & CallFunction;
      get_document: ((ticker: Ticker, name: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_document: ((did: IdentityId, ticker: Ticker, name: Bytes, uri: Bytes, document_hash: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_document: ((did: IdentityId, ticker: Ticker, name: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      increase_custody_allowance: ((ticker: Ticker, holder_did: IdentityId, custodian_did: IdentityId, value: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      increase_custody_allowance_of: ((ticker: Ticker, holder_did: IdentityId, holder_account_id: AccountId, custodian_did: IdentityId, caller_did: IdentityId, value: Balance, nonce: u16, signature: OffChainSignature) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer_by_custodian: ((ticker: Ticker, holder_did: IdentityId, custodian_did: IdentityId, receiver_did: IdentityId, value: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_funding_round: ((did: IdentityId, ticker: Ticker, name: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
      update_identifiers: ((did: IdentityId, ticker: Ticker, identifiers: Vec<(IdentifierType,Bytes)>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    dividend: {
      new: ((did: IdentityId, amount: Balance, ticker: Ticker, matures_at: Moment, expires_at: Moment, payout_ticker: Ticker, checkpoint_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      cancel: ((did: IdentityId, ticker: Ticker, dividend_id: u32) => SubmittableExtrinsic<ApiType>) & CallFunction;
      claim: ((did: IdentityId, ticker: Ticker, dividend_id: u32) => SubmittableExtrinsic<ApiType>) & CallFunction;
      claim_unclaimed: ((did: IdentityId, ticker: Ticker, dividend_id: u32) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    identity: {
      register_did: ((signing_items: Vec<SigningItem>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_signing_items: ((did: IdentityId, signing_items: Vec<SigningItem>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_signing_items: ((did: IdentityId, signers_to_remove: Vec<Signer>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_master_key: ((did: IdentityId, new_key: Key) => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_claim: ((did: IdentityId, claim_key: Bytes, did_issuer: IdentityId, expiry: Moment, claim_value: ClaimValue) => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_claims_batch: ((did_issuer: IdentityId, claims: Vec<ClaimRecord>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      forwarded_call: ((target_did: IdentityId, proposal: Proposal) => SubmittableExtrinsic<ApiType>) & CallFunction;
      revoke_claim: ((did: IdentityId, claim_key: Bytes, did_issuer: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      set_permission_to_signer: ((did: IdentityId, signer: Signer, permissions: Vec<Permission>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      freeze_signing_keys: ((did: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unfreeze_signing_keys: ((did: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      get_my_did: (() => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_authorization: ((target: Signer, authorization_data: AuthorizationData, expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_authorization_as_key: ((target: Signer, authorization_data: AuthorizationData, expiry: Option<Moment>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batch_add_authorization: ((auths: Vec<(Signer,AuthorizationData,Option<Moment>)>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_authorization: ((target: Signer, auth_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batch_remove_authorization: ((auth_identifiers: Vec<(Signer,u64)>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      accept_authorization: ((auth_id: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
      batch_accept_authorization: ((auth_ids: Vec<u64>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      authorize_join_to_identity: ((target_id: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unauthorized_join_to_identity: ((signer: Signer, target_id: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      add_signing_items_with_authorization: ((id: IdentityId, expires_at: Moment, additional_keys: Vec<SigningItemWithAuth>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      revoke_offchain_authorization: ((signer: Signer, auth: TargetIdAuthorization) => SubmittableExtrinsic<ApiType>) & CallFunction;
      is_my_identity_has_valid_kyc: ((buffer_time: u64) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    generalTM: {
      add_active_rule: ((did: IdentityId, ticker: Ticker, asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_active_rule: ((did: IdentityId, ticker: Ticker, asset_rule: AssetRule) => SubmittableExtrinsic<ApiType>) & CallFunction;
      reset_active_rules: ((did: IdentityId, ticker: Ticker) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    voting: {
      add_ballot: ((did: IdentityId, ticker: Ticker, ballot_name: Bytes, ballot_details: Ballot) => SubmittableExtrinsic<ApiType>) & CallFunction;
      vote: ((did: IdentityId, ticker: Ticker, ballot_name: Bytes, votes: Vec<Balance>) => SubmittableExtrinsic<ApiType>) & CallFunction;
      cancel_ballot: ((did: IdentityId, ticker: Ticker, ballot_name: Bytes) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    sTOCapped: {
      launch_sto: ((did: IdentityId, ticker: Ticker, beneficiary_did: IdentityId, cap: Balance, rate: u128, start_date: Moment, end_date: Moment, simple_token_ticker: Ticker) => SubmittableExtrinsic<ApiType>) & CallFunction;
      buy_tokens: ((did: IdentityId, ticker: Ticker, sto_id: u32, value: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      modify_allowed_tokens: ((did: IdentityId, ticker: Ticker, sto_id: u32, simple_token_ticker: Ticker, modify_status: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
      buy_tokens_by_simple_token: ((did: IdentityId, ticker: Ticker, sto_id: u32, value: Balance, simple_token_ticker: Ticker) => SubmittableExtrinsic<ApiType>) & CallFunction;
      pause_sto: ((did: IdentityId, ticker: Ticker, sto_id: u32) => SubmittableExtrinsic<ApiType>) & CallFunction;
      unpause_sto: ((did: IdentityId, ticker: Ticker, sto_id: u32) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    percentageTM: {
      toggle_maximum_percentage_restriction: ((did: IdentityId, ticker: Ticker, max_percentage: u16) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    exemption: {
      modify_exemption_list: ((did: IdentityId, ticker: Ticker, _tm: u16, asset_holder_did: IdentityId, exempted: bool) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    simpleToken: {
      create_token: ((did: IdentityId, ticker: Ticker, total_supply: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      approve: ((did: IdentityId, ticker: Ticker, spender_did: IdentityId, value: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer: ((did: IdentityId, ticker: Ticker, to_did: IdentityId, amount: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
      transfer_from: ((did: IdentityId, ticker: Ticker, from_did: IdentityId, to_did: IdentityId, amount: Balance) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
    kYCServiceProviders: {
      add_member: ((who: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      remove_member: ((who: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      swap_member: ((remove: IdentityId, add: IdentityId) => SubmittableExtrinsic<ApiType>) & CallFunction;
      reset_members: ((members: Vec<IdentityId>) => SubmittableExtrinsic<ApiType>) & CallFunction;
    };
  }
}
