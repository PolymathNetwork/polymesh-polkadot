export enum SystemTx {
  FillBlock = 'FillBlock',
  Remark = 'Remark',
  SetHeapPages = 'SetHeapPages',
  SetCode = 'SetCode',
  SetStorage = 'SetStorage',
  KillStorage = 'KillStorage',
  KillPrefix = 'KillPrefix',
}

export enum TimestampTx {
  Set = 'Set',
}

export enum BalancesTx {
  Transfer = 'Transfer',
  TopUpIdentityBalance = 'TopUpIdentityBalance',
  ReclaimIdentityBalance = 'ReclaimIdentityBalance',
  ChangeChargeDidFlag = 'ChangeChargeDidFlag',
  SetBalance = 'SetBalance',
  ForceTransfer = 'ForceTransfer',
}

export enum AuthorshipTx {
  SetUncles = 'SetUncles',
}

export enum StakingTx {
  Bond = 'Bond',
  BondExtra = 'BondExtra',
  Unbond = 'Unbond',
  WithdrawUnbonded = 'WithdrawUnbonded',
  Validate = 'Validate',
  Nominate = 'Nominate',
  Chill = 'Chill',
  SetPayee = 'SetPayee',
  SetController = 'SetController',
  SetValidatorCount = 'SetValidatorCount',
  AddPotentialValidator = 'AddPotentialValidator',
  RemoveValidator = 'RemoveValidator',
  ComplianceFailed = 'ComplianceFailed',
  CompliancePassed = 'CompliancePassed',
  ValidateKycExpiryNominators = 'ValidateKycExpiryNominators',
  EnableIndividualCommissions = 'EnableIndividualCommissions',
  SetGlobalComission = 'SetGlobalComission',
  SetMinBondThreshold = 'SetMinBondThreshold',
  ForceNoEras = 'ForceNoEras',
  ForceNewEra = 'ForceNewEra',
  SetInvulnerables = 'SetInvulnerables',
  ForceUnstake = 'ForceUnstake',
  ForceNewEraAlways = 'ForceNewEraAlways',
  CancelDeferredSlash = 'CancelDeferredSlash',
}

export enum SessionTx {
  SetKeys = 'SetKeys',
}

export enum FinalityTrackerTx {
  FinalHint = 'FinalHint',
}

export enum GrandpaTx {
  ReportMisbehavior = 'ReportMisbehavior',
}

export enum ImOnlineTx {
  Heartbeat = 'Heartbeat',
}

export enum SudoTx {
  Sudo = 'Sudo',
  SetKey = 'SetKey',
  SudoAs = 'SudoAs',
}

export enum MultiSigTx {
  CreateMultisig = 'CreateMultisig',
  CreateProposalAsIdentity = 'CreateProposalAsIdentity',
  CreateProposalAsKey = 'CreateProposalAsKey',
  ApproveAsIdentity = 'ApproveAsIdentity',
  ApproveAsKey = 'ApproveAsKey',
  AcceptMultisigSignerAsIdentity = 'AcceptMultisigSignerAsIdentity',
  AcceptMultisigSignerAsKey = 'AcceptMultisigSignerAsKey',
  AddMultisigSigner = 'AddMultisigSigner',
  RemoveMultisigSigner = 'RemoveMultisigSigner',
  ChangeSigsRequired = 'ChangeSigsRequired',
}

export enum ContractsTx {
  UpdateSchedule = 'UpdateSchedule',
  PutCode = 'PutCode',
  Call = 'Call',
  Instantiate = 'Instantiate',
  ClaimSurcharge = 'ClaimSurcharge',
}

export enum TreasuryTx {
  ProposeSpend = 'ProposeSpend',
  RejectProposal = 'RejectProposal',
  ApproveProposal = 'ApproveProposal',
}

export enum PolymeshCommitteeTx {
  SetVoteThreshold = 'SetVoteThreshold',
  SetMembers = 'SetMembers',
  Propose = 'Propose',
  Vote = 'Vote',
}

export enum CommitteeMembershipTx {
  AddMember = 'AddMember',
  RemoveMember = 'RemoveMember',
  SwapMember = 'SwapMember',
  ResetMembers = 'ResetMembers',
}

export enum MipsTx {
  SetMinProposalDeposit = 'SetMinProposalDeposit',
  SetQuorumThreshold = 'SetQuorumThreshold',
  SetProposalDuration = 'SetProposalDuration',
  Propose = 'Propose',
  Vote = 'Vote',
  KillProposal = 'KillProposal',
  FastTrackProposal = 'FastTrackProposal',
  EmergencyReferendum = 'EmergencyReferendum',
  EnactReferendum = 'EnactReferendum',
}

export enum AssetTx {
  RegisterTicker = 'RegisterTicker',
  AcceptTickerTransfer = 'AcceptTickerTransfer',
  AcceptTokenOwnershipTransfer = 'AcceptTokenOwnershipTransfer',
  CreateToken = 'CreateToken',
  Freeze = 'Freeze',
  Unfreeze = 'Unfreeze',
  RenameToken = 'RenameToken',
  Transfer = 'Transfer',
  ControllerTransfer = 'ControllerTransfer',
  Approve = 'Approve',
  TransferFrom = 'TransferFrom',
  CreateCheckpoint = 'CreateCheckpoint',
  Issue = 'Issue',
  BatchIssue = 'BatchIssue',
  Redeem = 'Redeem',
  RedeemFrom = 'RedeemFrom',
  ControllerRedeem = 'ControllerRedeem',
  MakeDivisible = 'MakeDivisible',
  CanTransfer = 'CanTransfer',
  TransferWithData = 'TransferWithData',
  TransferFromWithData = 'TransferFromWithData',
  IsIssuable = 'IsIssuable',
  AddDocuments = 'AddDocuments',
  RemoveDocuments = 'RemoveDocuments',
  UpdateDocuments = 'UpdateDocuments',
  IncreaseCustodyAllowance = 'IncreaseCustodyAllowance',
  IncreaseCustodyAllowanceOf = 'IncreaseCustodyAllowanceOf',
  TransferByCustodian = 'TransferByCustodian',
  SetFundingRound = 'SetFundingRound',
  UpdateIdentifiers = 'UpdateIdentifiers',
  AddExtension = 'AddExtension',
  ArchiveExtension = 'ArchiveExtension',
  UnarchiveExtension = 'UnarchiveExtension',
}

export enum BridgeTx {
  ChangeRelayers = 'ChangeRelayers',
  ProposeBridgeTx = 'ProposeBridgeTx',
  FinalizePending = 'FinalizePending',
  HandleRelayers = 'HandleRelayers',
  HandleBridgeTx = 'HandleBridgeTx',
}

export enum DividendTx {
  New = 'New',
  Cancel = 'Cancel',
  Claim = 'Claim',
  ClaimUnclaimed = 'ClaimUnclaimed',
}

export enum IdentityTx {
  RegisterDid = 'RegisterDid',
  AddSigningItems = 'AddSigningItems',
  RemoveSigningItems = 'RemoveSigningItems',
  SetMasterKey = 'SetMasterKey',
  AcceptMasterKey = 'AcceptMasterKey',
  AddClaim = 'AddClaim',
  AddClaimsBatch = 'AddClaimsBatch',
  ForwardedCall = 'ForwardedCall',
  RevokeClaim = 'RevokeClaim',
  SetPermissionToSigner = 'SetPermissionToSigner',
  FreezeSigningKeys = 'FreezeSigningKeys',
  UnfreezeSigningKeys = 'UnfreezeSigningKeys',
  GetMyDid = 'GetMyDid',
  GetAssetDid = 'GetAssetDid',
  AddAuthorization = 'AddAuthorization',
  AddAuthorizationAsKey = 'AddAuthorizationAsKey',
  BatchAddAuthorization = 'BatchAddAuthorization',
  RemoveAuthorization = 'RemoveAuthorization',
  BatchRemoveAuthorization = 'BatchRemoveAuthorization',
  AcceptAuthorization = 'AcceptAuthorization',
  BatchAcceptAuthorization = 'BatchAcceptAuthorization',
  AuthorizeJoinToIdentity = 'AuthorizeJoinToIdentity',
  UnauthorizedJoinToIdentity = 'UnauthorizedJoinToIdentity',
  AddSigningItemsWithAuthorization = 'AddSigningItemsWithAuthorization',
  RevokeOffchainAuthorization = 'RevokeOffchainAuthorization',
  IsMyIdentityHasValidKyc = 'IsMyIdentityHasValidKyc',
}

export enum GeneralTmTx {
  AddActiveRule = 'AddActiveRule',
  RemoveActiveRule = 'RemoveActiveRule',
  ResetActiveRules = 'ResetActiveRules',
}

export enum VotingTx {
  AddBallot = 'AddBallot',
  Vote = 'Vote',
  CancelBallot = 'CancelBallot',
}

export enum StoCappedTx {
  LaunchSto = 'LaunchSto',
  BuyTokens = 'BuyTokens',
  ModifyAllowedTokens = 'ModifyAllowedTokens',
  BuyTokensBySimpleToken = 'BuyTokensBySimpleToken',
  PauseSto = 'PauseSto',
  UnpauseSto = 'UnpauseSto',
}

export enum PercentageTmTx {
  ToggleMaximumPercentageRestriction = 'ToggleMaximumPercentageRestriction',
}

export enum ExemptionTx {
  ModifyExemptionList = 'ModifyExemptionList',
}

export enum SimpleTokenTx {
  CreateToken = 'CreateToken',
  Approve = 'Approve',
  Transfer = 'Transfer',
  TransferFrom = 'TransferFrom',
}

export enum KycServiceProvidersTx {
  AddMember = 'AddMember',
  RemoveMember = 'RemoveMember',
  SwapMember = 'SwapMember',
  ResetMembers = 'ResetMembers',
}

export type TxTag = SystemTx | TimestampTx | BalancesTx | AuthorshipTx | StakingTx | SessionTx | FinalityTrackerTx | GrandpaTx | ImOnlineTx | SudoTx | MultiSigTx | ContractsTx | TreasuryTx | PolymeshCommitteeTx | CommitteeMembershipTx | MipsTx | AssetTx | BridgeTx | DividendTx | IdentityTx | GeneralTmTx | VotingTx | StoCappedTx | PercentageTmTx | ExemptionTx | SimpleTokenTx | KycServiceProvidersTx;

export const TxTags = {
  system: SystemTx,
  timestamp: TimestampTx,
  balances: BalancesTx,
  authorship: AuthorshipTx,
  staking: StakingTx,
  session: SessionTx,
  finalityTracker: FinalityTrackerTx,
  grandpa: GrandpaTx,
  imOnline: ImOnlineTx,
  sudo: SudoTx,
  multiSig: MultiSigTx,
  contracts: ContractsTx,
  treasury: TreasuryTx,
  polymeshCommittee: PolymeshCommitteeTx,
  committeeMembership: CommitteeMembershipTx,
  mips: MipsTx,
  asset: AssetTx,
  bridge: BridgeTx,
  dividend: DividendTx,
  identity: IdentityTx,
  generalTM: GeneralTmTx,
  voting: VotingTx,
  stoCapped: StoCappedTx,
  percentageTM: PercentageTmTx,
  exemption: ExemptionTx,
  simpleToken: SimpleTokenTx,
  kycServiceProviders: KycServiceProvidersTx,
};
