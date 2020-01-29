// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */


declare module './types' {
  export interface SubmittableExtrinsic<ApiType> {
    system: {
      fill_block: SubmittableExtrinsicFunction<ApiType, ()>;
      remark: SubmittableExtrinsicFunction<ApiType, (_remark: `Bytes`)>;
      set_heap_pages: SubmittableExtrinsicFunction<ApiType, (pages: `u64`)>;
      set_code: SubmittableExtrinsicFunction<ApiType, (new: `Bytes`)>;
      set_storage: SubmittableExtrinsicFunction<ApiType, (items: `Vec<KeyValue>`)>;
      kill_storage: SubmittableExtrinsicFunction<ApiType, (keys: `Vec<Key>`)>;
      kill_prefix: SubmittableExtrinsicFunction<ApiType, (prefix: `Key`)>;
    };
    timestamp: {
      set: SubmittableExtrinsicFunction<ApiType, (now: `Compact<Moment>`)>;
    };
    balances: {
      transfer: SubmittableExtrinsicFunction<ApiType, (dest: `Address`, value: `Compact<Balance>`)>;
      top_up_identity_balance: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, value: `Compact<Balance>`)>;
      reclaim_identity_balance: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, value: `Compact<Balance>`)>;
      change_charge_did_flag: SubmittableExtrinsicFunction<ApiType, (charge_did: `bool`)>;
      set_balance: SubmittableExtrinsicFunction<ApiType, (who: `Address`, new_free: `Compact<Balance>`, new_reserved: `Compact<Balance>`)>;
      force_transfer: SubmittableExtrinsicFunction<ApiType, (source: `Address`, dest: `Address`, value: `Compact<Balance>`)>;
    };
    authorship: {
      set_uncles: SubmittableExtrinsicFunction<ApiType, (new_uncles: `Vec<Header>`)>;
    };
    staking: {
      bond: SubmittableExtrinsicFunction<ApiType, (controller: `Address`, value: `Compact<BalanceOf>`, payee: `RewardDestination`)>;
      bond_extra: SubmittableExtrinsicFunction<ApiType, (max_additional: `Compact<BalanceOf>`)>;
      unbond: SubmittableExtrinsicFunction<ApiType, (value: `Compact<BalanceOf>`)>;
      withdraw_unbonded: SubmittableExtrinsicFunction<ApiType, ()>;
      validate: SubmittableExtrinsicFunction<ApiType, (prefs: `ValidatorPrefs`)>;
      nominate: SubmittableExtrinsicFunction<ApiType, (targets: `Vec<Address>`)>;
      chill: SubmittableExtrinsicFunction<ApiType, ()>;
      set_payee: SubmittableExtrinsicFunction<ApiType, (payee: `RewardDestination`)>;
      set_controller: SubmittableExtrinsicFunction<ApiType, (controller: `Address`)>;
      set_validator_count: SubmittableExtrinsicFunction<ApiType, (new: `Compact<u32>`)>;
      add_potential_validator: SubmittableExtrinsicFunction<ApiType, (controller: `AccountId`)>;
      remove_validator: SubmittableExtrinsicFunction<ApiType, (controller: `AccountId`)>;
      compliance_failed: SubmittableExtrinsicFunction<ApiType, (controller: `AccountId`)>;
      compliance_passed: SubmittableExtrinsicFunction<ApiType, (controller: `AccountId`)>;
      validate_kyc_expiry_nominators: SubmittableExtrinsicFunction<ApiType, (targets: `Vec<AccountId>`)>;
      force_no_eras: SubmittableExtrinsicFunction<ApiType, ()>;
      force_new_era: SubmittableExtrinsicFunction<ApiType, ()>;
      set_invulnerables: SubmittableExtrinsicFunction<ApiType, (validators: `Vec<AccountId>`)>;
      force_unstake: SubmittableExtrinsicFunction<ApiType, (stash: `AccountId`)>;
      force_new_era_always: SubmittableExtrinsicFunction<ApiType, ()>;
      cancel_deferred_slash: SubmittableExtrinsicFunction<ApiType, (era: `EraIndex`, slash_indices: `Vec<u32>`)>;
    };
    session: {
      set_keys: SubmittableExtrinsicFunction<ApiType, (keys: `Keys`, proof: `Bytes`)>;
    };
    finalityTracker: {
      final_hint: SubmittableExtrinsicFunction<ApiType, (hint: `Compact<BlockNumber>`)>;
    };
    grandpa: {
      report_misbehavior: SubmittableExtrinsicFunction<ApiType, (_report: `Bytes`)>;
    };
    imOnline: {
      heartbeat: SubmittableExtrinsicFunction<ApiType, (heartbeat: `Heartbeat`, _signature: `Signature`)>;
    };
    sudo: {
      sudo: SubmittableExtrinsicFunction<ApiType, (proposal: `Proposal`)>;
      set_key: SubmittableExtrinsicFunction<ApiType, (new: `Address`)>;
      sudo_as: SubmittableExtrinsicFunction<ApiType, (who: `Address`, proposal: `Proposal`)>;
    };
    multiSig: {
      create_multisig: SubmittableExtrinsicFunction<ApiType, (signers: `Vec<Signer>`, sigs_required: `u64`)>;
      create_proposal_as_identity: SubmittableExtrinsicFunction<ApiType, (multisig: `AccountId`, proposal: `Proposal`)>;
      create_proposal_as_key: SubmittableExtrinsicFunction<ApiType, (multisig: `AccountId`, proposal: `Proposal`)>;
      approve_as_identity: SubmittableExtrinsicFunction<ApiType, (multisig: `AccountId`, proposal_id: `u64`)>;
      approve_as_key: SubmittableExtrinsicFunction<ApiType, (multisig: `AccountId`, proposal_id: `u64`)>;
      accept_multisig_signer_as_identity: SubmittableExtrinsicFunction<ApiType, (auth_id: `u64`)>;
      accept_multisig_signer_as_key: SubmittableExtrinsicFunction<ApiType, (auth_id: `u64`)>;
      add_multisig_signer: SubmittableExtrinsicFunction<ApiType, (signer: `Signer`)>;
      remove_multisig_signer: SubmittableExtrinsicFunction<ApiType, (signer: `Signer`)>;
      change_sigs_required: SubmittableExtrinsicFunction<ApiType, (sigs_required: `u64`)>;
    };
    contracts: {
      update_schedule: SubmittableExtrinsicFunction<ApiType, (schedule: `Schedule`)>;
      put_code: SubmittableExtrinsicFunction<ApiType, (gas_limit: `Compact<Gas>`, code: `Bytes`)>;
      call: SubmittableExtrinsicFunction<ApiType, (dest: `Address`, value: `Compact<BalanceOf>`, gas_limit: `Compact<Gas>`, data: `Bytes`)>;
      instantiate: SubmittableExtrinsicFunction<ApiType, (endowment: `Compact<BalanceOf>`, gas_limit: `Compact<Gas>`, code_hash: `CodeHash`, data: `Bytes`)>;
      claim_surcharge: SubmittableExtrinsicFunction<ApiType, (dest: `AccountId`, aux_sender: `Option<AccountId>`)>;
    };
    treasury: {
      propose_spend: SubmittableExtrinsicFunction<ApiType, (value: `Compact<BalanceOf>`, beneficiary: `Address`)>;
      reject_proposal: SubmittableExtrinsicFunction<ApiType, (proposal_id: `Compact<ProposalIndex>`)>;
      approve_proposal: SubmittableExtrinsicFunction<ApiType, (proposal_id: `Compact<ProposalIndex>`)>;
    };
    polymeshCommittee: {
      set_vote_threshold: SubmittableExtrinsicFunction<ApiType, (match_criteria: `ProportionMatch`, n: `u32`, d: `u32`)>;
      set_members: SubmittableExtrinsicFunction<ApiType, (new_members: `Vec<IdentityId>`)>;
      propose: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, proposal: `Proposal`)>;
      vote: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)>;
    };
    committeeMembership: {
      add_member: SubmittableExtrinsicFunction<ApiType, (who: `IdentityId`)>;
      remove_member: SubmittableExtrinsicFunction<ApiType, (who: `IdentityId`)>;
      swap_member: SubmittableExtrinsicFunction<ApiType, (remove: `IdentityId`, add: `IdentityId`)>;
      reset_members: SubmittableExtrinsicFunction<ApiType, (members: `Vec<IdentityId>`)>;
    };
    mIPS: {
      set_min_proposal_deposit: SubmittableExtrinsicFunction<ApiType, (deposit: `BalanceOf`)>;
      set_quorum_threshold: SubmittableExtrinsicFunction<ApiType, (threshold: `BalanceOf`)>;
      set_proposal_duration: SubmittableExtrinsicFunction<ApiType, (duration: `BlockNumber`)>;
      propose: SubmittableExtrinsicFunction<ApiType, (proposal: `Proposal`, deposit: `BalanceOf`)>;
      vote: SubmittableExtrinsicFunction<ApiType, (proposal_hash: `Hash`, index: `MipsIndex`, aye_or_nay: `bool`, deposit: `BalanceOf`)>;
      kill_proposal: SubmittableExtrinsicFunction<ApiType, (index: `MipsIndex`, proposal_hash: `Hash`)>;
      fast_track_proposal: SubmittableExtrinsicFunction<ApiType, (index: `MipsIndex`, proposal_hash: `Hash`)>;
      emergency_referendum: SubmittableExtrinsicFunction<ApiType, (proposal: `Proposal`)>;
      enact_referendum: SubmittableExtrinsicFunction<ApiType, (proposal_hash: `Hash`)>;
    };
    asset: {
      register_ticker: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`)>;
      accept_ticker_transfer: SubmittableExtrinsicFunction<ApiType, (auth_id: `u64`)>;
      accept_token_ownership_transfer: SubmittableExtrinsicFunction<ApiType, (auth_id: `u64`)>;
      create_token: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, name: `Bytes`, ticker: `Ticker`, total_supply: `Balance`, divisible: `bool`, asset_type: `AssetType`, identifiers: `Vec<(IdentifierType,Bytes)>`)>;
      rename_token: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`, name: `Bytes`)>;
      transfer: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, value: `Balance`)>;
      controller_transfer: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`, operator_data: `Bytes`)>;
      approve: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, spender_did: `IdentityId`, value: `Balance`)>;
      transfer_from: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`)>;
      create_checkpoint: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`)>;
      issue: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, value: `Balance`, _data: `Bytes`)>;
      batch_issue: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, investor_dids: `Vec<IdentityId>`, values: `Vec<Balance>`)>;
      redeem: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, value: `Balance`, _data: `Bytes`)>;
      redeem_from: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, value: `Balance`, _data: `Bytes`)>;
      controller_redeem: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, token_holder_did: `IdentityId`, value: `Balance`, data: `Bytes`, operator_data: `Bytes`)>;
      make_divisible: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`)>;
      can_transfer: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`)>;
      transfer_with_data: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`)>;
      transfer_from_with_data: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`)>;
      is_issuable: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`)>;
      get_document: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`, name: `Bytes`)>;
      set_document: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, name: `Bytes`, uri: `Bytes`, document_hash: `Bytes`)>;
      remove_document: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, name: `Bytes`)>;
      increase_custody_allowance: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`, holder_did: `IdentityId`, custodian_did: `IdentityId`, value: `Balance`)>;
      increase_custody_allowance_of: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`, holder_did: `IdentityId`, holder_account_id: `AccountId`, custodian_did: `IdentityId`, caller_did: `IdentityId`, value: `Balance`, nonce: `u16`, signature: `OffChainSignature`)>;
      transfer_by_custodian: SubmittableExtrinsicFunction<ApiType, (ticker: `Ticker`, holder_did: `IdentityId`, custodian_did: `IdentityId`, receiver_did: `IdentityId`, value: `Balance`)>;
      set_funding_round: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, name: `Bytes`)>;
      update_identifiers: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, identifiers: `Vec<(IdentifierType,Bytes)>`)>;
    };
    dividend: {
      new: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, amount: `Balance`, ticker: `Ticker`, matures_at: `Moment`, expires_at: `Moment`, payout_ticker: `Ticker`, checkpoint_id: `u64`)>;
      cancel: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, dividend_id: `u32`)>;
      claim: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, dividend_id: `u32`)>;
      claim_unclaimed: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, dividend_id: `u32`)>;
    };
    identity: {
      register_did: SubmittableExtrinsicFunction<ApiType, (signing_items: `Vec<SigningItem>`)>;
      add_signing_items: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, signing_items: `Vec<SigningItem>`)>;
      remove_signing_items: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, signers_to_remove: `Vec<Signer>`)>;
      set_master_key: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, new_key: `Key`)>;
      add_claim: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, claim_key: `Bytes`, did_issuer: `IdentityId`, expiry: `Moment`, claim_value: `ClaimValue`)>;
      add_claims_batch: SubmittableExtrinsicFunction<ApiType, (did_issuer: `IdentityId`, claims: `Vec<ClaimRecord>`)>;
      forwarded_call: SubmittableExtrinsicFunction<ApiType, (target_did: `IdentityId`, proposal: `Proposal`)>;
      revoke_claim: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, claim_key: `Bytes`, did_issuer: `IdentityId`)>;
      set_permission_to_signer: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, signer: `Signer`, permissions: `Vec<Permission>`)>;
      freeze_signing_keys: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`)>;
      unfreeze_signing_keys: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`)>;
      get_my_did: SubmittableExtrinsicFunction<ApiType, ()>;
      add_authorization: SubmittableExtrinsicFunction<ApiType, (target: `Signer`, authorization_data: `AuthorizationData`, expiry: `Option<Moment>`)>;
      add_authorization_as_key: SubmittableExtrinsicFunction<ApiType, (target: `Signer`, authorization_data: `AuthorizationData`, expiry: `Option<Moment>`)>;
      batch_add_authorization: SubmittableExtrinsicFunction<ApiType, (auths: `Vec<(Signer,AuthorizationData,Option<Moment>)>`)>;
      remove_authorization: SubmittableExtrinsicFunction<ApiType, (target: `Signer`, auth_id: `u64`)>;
      batch_remove_authorization: SubmittableExtrinsicFunction<ApiType, (auth_identifiers: `Vec<(Signer,u64)>`)>;
      accept_authorization: SubmittableExtrinsicFunction<ApiType, (auth_id: `u64`)>;
      batch_accept_authorization: SubmittableExtrinsicFunction<ApiType, (auth_ids: `Vec<u64>`)>;
      authorize_join_to_identity: SubmittableExtrinsicFunction<ApiType, (target_id: `IdentityId`)>;
      unauthorized_join_to_identity: SubmittableExtrinsicFunction<ApiType, (signer: `Signer`, target_id: `IdentityId`)>;
      add_signing_items_with_authorization: SubmittableExtrinsicFunction<ApiType, (id: `IdentityId`, expires_at: `Moment`, additional_keys: `Vec<SigningItemWithAuth>`)>;
      revoke_offchain_authorization: SubmittableExtrinsicFunction<ApiType, (signer: `Signer`, auth: `TargetIdAuthorization`)>;
      is_my_identity_has_valid_kyc: SubmittableExtrinsicFunction<ApiType, (buffer_time: `u64`)>;
    };
    generalTM: {
      add_active_rule: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, asset_rule: `AssetRule`)>;
      remove_active_rule: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, asset_rule: `AssetRule`)>;
      reset_active_rules: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`)>;
    };
    voting: {
      add_ballot: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, ballot_name: `Bytes`, ballot_details: `Ballot`)>;
      vote: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, ballot_name: `Bytes`, votes: `Vec<Balance>`)>;
      cancel_ballot: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, ballot_name: `Bytes`)>;
    };
    sTOCapped: {
      launch_sto: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, beneficiary_did: `IdentityId`, cap: `Balance`, rate: `u128`, start_date: `Moment`, end_date: `Moment`, simple_token_ticker: `Ticker`)>;
      buy_tokens: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`, value: `Balance`)>;
      modify_allowed_tokens: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`, simple_token_ticker: `Ticker`, modify_status: `bool`)>;
      buy_tokens_by_simple_token: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`, value: `Balance`, simple_token_ticker: `Ticker`)>;
      pause_sto: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`)>;
      unpause_sto: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`)>;
    };
    percentageTM: {
      toggle_maximum_percentage_restriction: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, max_percentage: `u16`)>;
    };
    exemption: {
      modify_exemption_list: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, _tm: `u16`, asset_holder_did: `IdentityId`, exempted: `bool`)>;
    };
    simpleToken: {
      create_token: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, total_supply: `Balance`)>;
      approve: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, spender_did: `IdentityId`, value: `Balance`)>;
      transfer: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, amount: `Balance`)>;
      transfer_from: SubmittableExtrinsicFunction<ApiType, (did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, amount: `Balance`)>;
    };
    kYCServiceProviders: {
      add_member: SubmittableExtrinsicFunction<ApiType, (who: `IdentityId`)>;
      remove_member: SubmittableExtrinsicFunction<ApiType, (who: `IdentityId`)>;
      swap_member: SubmittableExtrinsicFunction<ApiType, (remove: `IdentityId`, add: `IdentityId`)>;
      reset_members: SubmittableExtrinsicFunction<ApiType, (members: `Vec<IdentityId>`)>;
    };
  }
}
