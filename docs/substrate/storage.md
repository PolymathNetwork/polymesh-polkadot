## Storage

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)
- **[asset](#asset)**

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[committeeMembership](#committeeMembership)**

- **[contracts](#contracts)**

- **[dividend](#dividend)**

- **[exemption](#exemption)**

- **[generalTm](#generalTm)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imOnline)**

- **[indices](#indices)**

- **[kYcServiceProviders](#kYcServiceProviders)**

- **[mIps](#mIps)**

- **[multiSig](#multiSig)**

- **[offences](#offences)**

- **[percentageTm](#percentageTm)**

- **[polymeshCommittee](#polymeshCommittee)**

- **[randomnessCollectiveFlip](#randomnessCollectiveFlip)**

- **[session](#session)**

- **[simpleToken](#simpleToken)**

- **[staking](#staking)**

- **[sToCapped](#sToCapped)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionPayment)**

- **[treasury](#treasury)**

- **[voting](#voting)**

- **[substrate](#substrate)**


___


## asset

### allowance(`(Ticker,IdentityId,IdentityId)`): `Balance`
- **interface**: api.query.asset.allowance
- **summary**: (ticker, sender (DID), spender(DID)) -> allowance amount

### assetCreationFee(): `Balance`
- **interface**: api.query.asset.assetCreationFee
- **summary**: cost in base currency to create a token

### authenticationNonce(`(Ticker,IdentityId,u16)`): `bool`
- **interface**: api.query.asset.authenticationNonce
- **summary**: Store the nonce for off chain signature to increase the custody allowance (ticker, token holder, nonce) -> bool

### balanceOf(`(Ticker,IdentityId)`): `Balance`
- **interface**: api.query.asset.balanceOf
- **summary**: Used to store the securityToken balance corresponds to ticker and Identity (ticker, DID) -> balance

### checkpointBalance(`(Ticker,IdentityId,u64)`): `Balance`
- **interface**: api.query.asset.checkpointBalance
- **summary**: Balance of a DID at a checkpoint (ticker, DID, checkpoint ID) -> Balance of a DID at a checkpoint

### checkpointTotalSupply(`(Ticker,u64)`): `Balance`
- **interface**: api.query.asset.checkpointTotalSupply
- **summary**: Total supply of the token at the checkpoint (ticker, checkpointId) -> total supply at given checkpoint

### custodianAllowance(`(Ticker,IdentityId,IdentityId)`): `Balance`
- **interface**: api.query.asset.custodianAllowance
- **summary**: Allowance provided to the custodian (ticker, token holder, custodian) -> balance

### documents(`(Ticker,Bytes)`): `(Bytes,Bytes,Moment)`
- **interface**: api.query.asset.documents
- **summary**: The documents attached to the tokens (ticker, document name) -> (URI, document hash)

### feeCollector(): `AccountId`
- **interface**: api.query.asset.feeCollector
- **summary**: The DID of the fee collector

### fundingRound(`Ticker`): `Bytes`
- **interface**: api.query.asset.fundingRound
- **summary**: The name of the current funding round. ticker -> funding round

### identifiers(`(Ticker,IdentifierType)`): `Bytes`
- **interface**: api.query.asset.identifiers
- **summary**: A map of asset identifiers whose keys are pairs of a ticker name and an `IdentifierType` and whose values are byte vectors.

### issuedInFundingRound(`(Ticker,Bytes)`): `Balance`
- **interface**: api.query.asset.issuedInFundingRound
- **summary**: The total balances of tokens issued in all recorded funding rounds. (ticker, funding round) -> balance

### tickerConfig(): `TickerRegistrationConfig`
- **interface**: api.query.asset.tickerConfig
- **summary**: Ticker registration config (ticker) -> TickerRegistrationConfig

### tickerRegistrationFee(): `Balance`
- **interface**: api.query.asset.tickerRegistrationFee
- **summary**: cost in base currency to register a ticker

### tickers(`Ticker`): `TickerRegistration`
- **interface**: api.query.asset.tickers
- **summary**: Ticker registration details (ticker) -> TickerRegistration

### tokens(`Ticker`): `SecurityToken`
- **interface**: api.query.asset.tokens
- **summary**: details of the token corresponding to the token ticker (ticker) -> SecurityToken details [returns SecurityToken struct]

### totalCheckpoints(`Ticker`): `u64`
- **interface**: api.query.asset.totalCheckpoints
- **summary**: Checkpoints created per token (ticker) -> no. of checkpoints

### totalCustodyAllowance(`(Ticker,IdentityId)`): `Balance`
- **interface**: api.query.asset.totalCustodyAllowance
- **summary**: Total custodian allowance for a given token holder (ticker, token holder) -> balance

### userCheckpoints(`(Ticker,IdentityId)`): `Vec<u64>`
- **interface**: api.query.asset.userCheckpoints
- **summary**: Last checkpoint updated for a DID's balance (ticker, DID) -> List of checkpoints where user balance changed

___


## authorship

### author(): `Option<AccountId>`
- **interface**: api.query.authorship.author
- **summary**: Author of current block.

### didSetUncles(): `bool`
- **interface**: api.query.authorship.didSetUncles
- **summary**: Whether uncles were already set in this block.

### uncles(): `Vec<UncleEntryItem>`
- **interface**: api.query.authorship.uncles
- **summary**: Uncles

___


## babe

### authorities(): `Vec<(AuthorityId,BabeAuthorityWeight)>`
- **interface**: api.query.babe.authorities
- **summary**: Current epoch authorities.

### currentSlot(): `u64`
- **interface**: api.query.babe.currentSlot
- **summary**: Current slot number.

### epochIndex(): `u64`
- **interface**: api.query.babe.epochIndex
- **summary**: Current epoch index.

### genesisSlot(): `u64`
- **interface**: api.query.babe.genesisSlot
- **summary**: The slot at which the first epoch actually started. This is 0 until the first block of the chain.

### initialized(): `Option<MaybeVrf>`
- **interface**: api.query.babe.initialized
- **summary**: Temporary value (cleared at block finalization) which is `Some` if per-block initialization has already been called for current block.

### nextRandomness(): `[u8;32]`
- **interface**: api.query.babe.nextRandomness
- **summary**: Next epoch randomness.

### randomness(): `[u8;32]`
- **interface**: api.query.babe.randomness
- **summary**: The epoch randomness for the *current* epoch.  # Security  This MUST NOT be used for gambling, as it can be influenced by a malicious validator in the short term. It MAY be used in many cryptographic protocols, however, so long as one remembers that this (like everything else on-chain) it is public. For example, it can be used where a number is needed that cannot have been chosen by an adversary, for purposes such as public-coin zero-knowledge proofs.

### segmentIndex(): `u32`
- **interface**: api.query.babe.segmentIndex
- **summary**: Randomness under construction.  We make a tradeoff between storage accesses and list length. We store the under-construction randomness in segments of up to `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.  Once a segment reaches this length, we begin the next one. We reset all segments and return to `0` at the beginning of every epoch.

### underConstruction(`u32`): `Vec<[u8;32]>`
- **interface**: api.query.babe.underConstruction

___


## balances

### chargeDid(`Key`): `bool`
- **interface**: api.query.balances.chargeDid
- **summary**: Signing key => Charge Fee to did?. Default is false i.e. the fee will be charged from user balance

### freeBalance(`AccountId`): `Balance`
- **interface**: api.query.balances.freeBalance
- **summary**: The 'free' balance of a given account.  This is the only balance that matters in terms of most operations on tokens. It alone is used to determine the balance when in the contract execution environment.

### identityBalance(`IdentityId`): `Balance`
- **interface**: api.query.balances.identityBalance
- **summary**: Balance held by the identity. It can be spent by its signing keys.

### locks(`AccountId`): `Vec<BalanceLock>`
- **interface**: api.query.balances.locks
- **summary**: Any liquidity locks on some account balances.

### reservedBalance(`AccountId`): `Balance`
- **interface**: api.query.balances.reservedBalance
- **summary**: The amount of the balance of a given account that is externally reserved; this can still get slashed, but gets slashed last of all.  This balance is a 'reserve' balance that other subsystems use in order to set aside tokens that are still 'owned' by the account holder, but which are suspendable.

### totalIssuance(): `Balance`
- **interface**: api.query.balances.totalIssuance
- **summary**: The total units issued in the system.

### vesting(`AccountId`): `Option<VestingSchedule>`
- **interface**: api.query.balances.vesting
- **summary**: Information regarding the vesting of a given account.

___


## committeeMembership

### members(): `Vec<IdentityId>`
- **interface**: api.query.committeeMembership.members
- **summary**: Identities that are part of this group

___


## contracts

### accountCounter(): `u64`
- **interface**: api.query.contracts.accountCounter
- **summary**: The subtrie counter.

### codeStorage(`CodeHash`): `Option<PrefabWasmModule>`
- **interface**: api.query.contracts.codeStorage
- **summary**: A mapping between an original code hash and instrumented wasm code, ready for execution.

### contractInfoOf(`AccountId`): `Option<ContractInfo>`
- **interface**: api.query.contracts.contractInfoOf
- **summary**: The code associated with a given account.

### currentSchedule(): `Schedule`
- **interface**: api.query.contracts.currentSchedule
- **summary**: Current cost schedule for contracts.

### gasPrice(): `BalanceOf`
- **interface**: api.query.contracts.gasPrice
- **summary**: The price of one unit of gas.

### gasSpent(): `Gas`
- **interface**: api.query.contracts.gasSpent
- **summary**: Gas spent so far in this block.

### pristineCode(`CodeHash`): `Option<Bytes>`
- **interface**: api.query.contracts.pristineCode
- **summary**: A mapping from an original code hash to the original code, untouched by instrumentation.

___


## dividend

### dividendCount(`Ticker`): `u32`
- **interface**: api.query.dividend.dividendCount
- **summary**: How many dividends were created for a ticker so far; (ticker) => count

### dividends(`(Ticker,u32)`): `Dividend`
- **interface**: api.query.dividend.dividends
- **summary**: Dividend records; (ticker, dividend ID) => dividend entry Note: contrary to checkpoint IDs, dividend IDs are 0-indexed.

### userPayoutCompleted(`(IdentityId,Ticker,u32)`): `bool`
- **interface**: api.query.dividend.userPayoutCompleted
- **summary**: Payout flags, decide whether a user already was paid their dividend (DID, ticker, dividend_id) -> whether they got their payout

___


## exemption

### exemptionList(`(Ticker,u16,IdentityId)`): `bool`
- **interface**: api.query.exemption.exemptionList

___


## generalTM

### activeRules(`Ticker`): `Vec<AssetRule>`
- **interface**: api.query.generalTM.activeRules
- **summary**: List of active rules for a ticker (Ticker -> Array of AssetRules)

___


## grandpa

### authorities(): `AuthorityList`
- **interface**: api.query.grandpa.authorities
- **summary**: DEPRECATED  This used to store the current authority set, which has been migrated to the well-known GRANDPA_AUTHORITES_KEY unhashed key.

### currentSetId(): `SetId`
- **interface**: api.query.grandpa.currentSetId
- **summary**: The number of changes (both in terms of keys and underlying economic responsibilities) in the "set" of Grandpa validators from genesis.

### nextForced(): `Option<BlockNumber>`
- **interface**: api.query.grandpa.nextForced
- **summary**: next block number where we can force a change.

### pendingChange(): `Option<StoredPendingChange>`
- **interface**: api.query.grandpa.pendingChange
- **summary**: Pending change: (signaled at, scheduled change).

### setIdSession(`SetId`): `Option<SessionIndex>`
- **interface**: api.query.grandpa.setIdSession
- **summary**: A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.

### stalled(): `Option<(BlockNumber,BlockNumber)>`
- **interface**: api.query.grandpa.stalled
- **summary**: `true` if we are currently stalled.

### state(): `StoredState`
- **interface**: api.query.grandpa.state
- **summary**: State of the current authority set.

___


## identity

### authorizations(`(Signer,u64)`): `Authorization`
- **interface**: api.query.identity.authorizations
- **summary**: All authorizations that an identity has

### claimKeys(`IdentityId`): `Vec<ClaimMetaData>`
- **interface**: api.query.identity.claimKeys
- **summary**: DID -> array of (claim_key and claim_issuer)

### claims(`(IdentityId,ClaimMetaData)`): `Claim`
- **interface**: api.query.identity.claims
- **summary**: (DID, claim_key, claim_issuer) -> Associated claims

### currentDid(): `Option<IdentityId>`
- **interface**: api.query.identity.currentDid
- **summary**: It stores the current identity for current transaction.

### didCreationFee(): `Balance`
- **interface**: api.query.identity.didCreationFee
- **summary**: How much does creating a DID cost

### didRecords(`IdentityId`): `DidRecord`
- **interface**: api.query.identity.didRecords
- **summary**: DID -> identity info

### isDidFrozen(`IdentityId`): `bool`
- **interface**: api.query.identity.isDidFrozen
- **summary**: DID -> bool that indicates if signing keys are frozen.

### keyToIdentityIds(`Key`): `Option<LinkedKeyInfo>`
- **interface**: api.query.identity.keyToIdentityIds

### kYCValidation(`IdentityId`): `bool`
- **interface**: api.query.identity.kYCValidation
- **summary**: It stores validated identities by any KYC.

### lastAuthorization(`Signer`): `u64`
- **interface**: api.query.identity.lastAuthorization
- **summary**: Auth id of the latest auth of an identity. Used to allow iterating over auths

### lastLink(`Signer`): `u64`
- **interface**: api.query.identity.lastLink
- **summary**: Link id of the latest auth of an identity/key. Used to allow iterating over links

### links(`(Signer,u64)`): `Link`
- **interface**: api.query.identity.links
- **summary**: All links that an identity/key has

### multiPurposeNonce(): `u64`
- **interface**: api.query.identity.multiPurposeNonce
- **summary**: Nonce to ensure unique actions. starts from 1.

### offChainAuthorizationNonce(`IdentityId`): `AuthorizationNonce`
- **interface**: api.query.identity.offChainAuthorizationNonce
- **summary**: Authorization nonce per Identity. Initially is 0.

### owner(): `AccountId`
- **interface**: api.query.identity.owner
- **summary**: Module owner.

### preAuthorizedJoinDid(`Signer`): `Vec<PreAuthorizedKeyInfo>`
- **interface**: api.query.identity.preAuthorizedJoinDid
- **summary**: Pre-authorize join to Identity.

### revokeOffChainAuthorization(`(Signer,TargetIdAuthorization)`): `bool`
- **interface**: api.query.identity.revokeOffChainAuthorization
- **summary**: Inmediate revoke of any off-chain authorization.

___


## imOnline

### authoredBlocks(`SessionIndex, ValidatorId`): `u32`
- **interface**: api.query.imOnline.authoredBlocks
- **summary**: For each session index, we keep a mapping of `T::ValidatorId` to the number of blocks authored by the given authority.

### gossipAt(): `BlockNumber`
- **interface**: api.query.imOnline.gossipAt
- **summary**: The block number when we should gossip.

### keys(): `Vec<AuthorityId>`
- **interface**: api.query.imOnline.keys
- **summary**: The current set of keys that may issue a heartbeat.

### receivedHeartbeats(`SessionIndex, AuthIndex`): `Option<Bytes>`
- **interface**: api.query.imOnline.receivedHeartbeats
- **summary**: For each session index, we keep a mapping of `AuthIndex` to `offchain::OpaqueNetworkState`.

___


## indices

### enumSet(`AccountIndex`): `Vec<AccountId>`
- **interface**: api.query.indices.enumSet
- **summary**: The enumeration sets.

### nextEnumSet(): `AccountIndex`
- **interface**: api.query.indices.nextEnumSet
- **summary**: The next free enumeration set.

___


## kYCServiceProviders

### members(): `Vec<IdentityId>`
- **interface**: api.query.kYCServiceProviders.members
- **summary**: Identities that are part of this group

___


## mIPS

### deposits(`Hash`): `Vec<(AccountId,BalanceOf)>`
- **interface**: api.query.mIPS.deposits
- **summary**: Those who have locked a deposit. proposal hash -> (deposit, proposer)

### minimumProposalDeposit(): `BalanceOf`
- **interface**: api.query.mIPS.minimumProposalDeposit
- **summary**: The minimum amount to be used as a deposit for a public referendum proposal.

### proposalCount(): `u32`
- **interface**: api.query.mIPS.proposalCount
- **summary**: Proposals so far. Index can be used to keep track of MIPs off-chain.

### proposalDuration(): `BlockNumber`
- **interface**: api.query.mIPS.proposalDuration
- **summary**: How long (in blocks) a ballot runs

### proposalMetadata(): `Vec<MipsMetadata>`
- **interface**: api.query.mIPS.proposalMetadata
- **summary**: The hashes of the active proposals.

### proposals(`Hash`): `Option<MIP>`
- **interface**: api.query.mIPS.proposals
- **summary**: Actual proposal for a given hash, if it's current. proposal hash -> proposal

### quorumThreshold(): `BalanceOf`
- **interface**: api.query.mIPS.quorumThreshold
- **summary**: Minimum stake a proposal must gather in order to be considered by the committee.

### referendumMetadata(): `Vec<ReferendumInfo>`
- **interface**: api.query.mIPS.referendumMetadata
- **summary**: Active referendums.

### referendums(`Hash`): `Option<Proposal>`
- **interface**: api.query.mIPS.referendums
- **summary**: Proposals that have met the quorum threshold to be put forward to a governance committee proposal hash -> proposal

### voting(`Hash`): `Option<Votes>`
- **interface**: api.query.mIPS.voting
- **summary**: Votes on a given proposal, if it is ongoing. proposal hash -> voting info

___


## multiSig

### multiSigNonce(): `u64`
- **interface**: api.query.multiSig.multiSigNonce
- **summary**: Nonce to ensure unique MultiSig addresses are generated. starts from 1.

### multiSigSigners(`(AccountId,Signer)`): `bool`
- **interface**: api.query.multiSig.multiSigSigners
- **summary**: Signers of a multisig. (mulisig, signer) => true/false

### multiSigSignsRequired(`AccountId`): `u64`
- **interface**: api.query.multiSig.multiSigSignsRequired
- **summary**: Confirmations required before processing a multisig tx

### multiSigTxDone(`AccountId`): `u64`
- **interface**: api.query.multiSig.multiSigTxDone
- **summary**: Number of transactions proposed in a multisig. Used as tx id. starts from 0

### proposals(`(AccountId,u64)`): `Option<Proposal>`
- **interface**: api.query.multiSig.proposals
- **summary**: Proposals presented for voting to a multisig (multisig, proposal id) => Option<proposal>. It is deleted after proposal is processed

### txApprovals(`(AccountId,u64)`): `u64`
- **interface**: api.query.multiSig.txApprovals
- **summary**: Number of votes in favor of a tx. Mapping from (multisig, tx id) => no. of approvals.

### votes(`(AccountId,Signer,u64)`): `bool`
- **interface**: api.query.multiSig.votes
- **summary**: Individual multisig signer votes. (multi sig, signer, )

___


## offences

### concurrentReportsIndex(`Kind, OpaqueTimeSlot`): `Vec<ReportIdOf>`
- **interface**: api.query.offences.concurrentReportsIndex
- **summary**: A vector of reports of the same kind that happened at the same time slot.

### reports(`ReportIdOf`): `Option<OffenceDetails>`
- **interface**: api.query.offences.reports
- **summary**: The primary structure that holds all offence records keyed by report identifiers.

### reportsByKindIndex(`Kind`): `Bytes`
- **interface**: api.query.offences.reportsByKindIndex
- **summary**: Enumerates all reports of a kind along with the time they happened.  All reports are sorted by the time of offence.  Note that the actual type of this mapping is `Vec<u8>`, this is because values of different types are not supported at the moment so we are doing the manual serialization.

___


## percentageTM

### maximumPercentageEnabledForToken(`Ticker`): `u16`
- **interface**: api.query.percentageTM.maximumPercentageEnabledForToken

___


## polymeshCommittee

### members(): `Vec<IdentityId>`
- **interface**: api.query.polymeshCommittee.members
- **summary**: The current members of the committee.

### proposalCount(): `u32`
- **interface**: api.query.polymeshCommittee.proposalCount
- **summary**: Proposals so far.

### proposalOf(`Hash`): `Option<Proposal>`
- **interface**: api.query.polymeshCommittee.proposalOf
- **summary**: Actual proposal for a given hash.

### proposals(): `Vec<Hash>`
- **interface**: api.query.polymeshCommittee.proposals
- **summary**: The hashes of the active proposals.

### voteThreshold(): `(ProportionMatch,u32,u32)`
- **interface**: api.query.polymeshCommittee.voteThreshold
- **summary**: Vote threshold for an approval.

### voting(`Hash`): `Option<Votes>`
- **interface**: api.query.polymeshCommittee.voting
- **summary**: Votes on a given proposal, if it is ongoing.

___


## randomnessCollectiveFlip

### randomMaterial(): `Vec<Hash>`
- **interface**: api.query.randomnessCollectiveFlip.randomMaterial
- **summary**: Series of block headers from the last 81 blocks that acts as random seed material. This is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of the oldest hash.

___


## session

### currentIndex(): `SessionIndex`
- **interface**: api.query.session.currentIndex
- **summary**: Current index of the session.

### disabledValidators(): `Vec<u32>`
- **interface**: api.query.session.disabledValidators
- **summary**: Indices of disabled validators.  The set is cleared when `on_session_ending` returns a new set of identities.

### keyOwner(`Bytes, (KeyTypeId,Bytes)`): `Option<ValidatorId>`
- **interface**: api.query.session.keyOwner
- **summary**: The owner of a key. The second key is the `KeyTypeId` + the encoded key.  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries.

### nextKeys(`Bytes, ValidatorId`): `Option<Keys>`
- **interface**: api.query.session.nextKeys
- **summary**: The next session keys for a validator.  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries.

### queuedChanged(): `bool`
- **interface**: api.query.session.queuedChanged
- **summary**: True if the underlying economic identities or weighting behind the validators has changed in the queued validator set.

### queuedKeys(): `Vec<(ValidatorId,Keys)>`
- **interface**: api.query.session.queuedKeys
- **summary**: The queued keys for the next session. When the next session begins, these keys will be used to determine the validator's session keys.

### validators(): `Vec<ValidatorId>`
- **interface**: api.query.session.validators
- **summary**: The current set of validators.

___


## simpleToken

### allowance(`(Ticker,IdentityId,IdentityId)`): `Balance`
- **interface**: api.query.simpleToken.allowance
- **summary**: Mapping from (ticker, owner DID, spender DID) to allowance amount

### balanceOf(`(Ticker,IdentityId)`): `Balance`
- **interface**: api.query.simpleToken.balanceOf
- **summary**: Mapping from (ticker, owner DID) to their balance

### creationFee(): `Balance`
- **interface**: api.query.simpleToken.creationFee
- **summary**: The cost to create a new simple token

### tokens(`Ticker`): `SimpleTokenRecord`
- **interface**: api.query.simpleToken.tokens
- **summary**: The details associated with each simple token

___


## staking

### bonded(`AccountId`): `Option<AccountId>`
- **interface**: api.query.staking.bonded
- **summary**: Map from all locked "stash" accounts to the controller account.

### bondedEras(): `Vec<(EraIndex,SessionIndex)>`
- **interface**: api.query.staking.bondedEras
- **summary**: A mapping from still-bonded eras to the first session index of that era.

### canceledSlashPayout(): `BalanceOf`
- **interface**: api.query.staking.canceledSlashPayout
- **summary**: The amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance).

### currentElected(): `Vec<AccountId>`
- **interface**: api.query.staking.currentElected
- **summary**: The currently elected validator set keyed by stash account ID.

### currentEra(): `EraIndex`
- **interface**: api.query.staking.currentEra
- **summary**: The current era index.

### currentEraPointsEarned(): `EraPoints`
- **interface**: api.query.staking.currentEraPointsEarned
- **summary**: Rewards for the current era. Using indices of current elected set.

### currentEraStart(): `MomentOf`
- **interface**: api.query.staking.currentEraStart
- **summary**: The start of the current era.

### currentEraStartSessionIndex(): `SessionIndex`
- **interface**: api.query.staking.currentEraStartSessionIndex
- **summary**: The session index at which the current era started.

### earliestUnappliedSlash(): `Option<EraIndex>`
- **interface**: api.query.staking.earliestUnappliedSlash
- **summary**: The earliest era for which we have a pending, unapplied slash.

### forceEra(): `Forcing`
- **interface**: api.query.staking.forceEra
- **summary**: True if the next session change will be a new era regardless of index.

### invulnerables(): `Vec<AccountId>`
- **interface**: api.query.staking.invulnerables
- **summary**: Any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets.

### ledger(`AccountId`): `Option<StakingLedger>`
- **interface**: api.query.staking.ledger
- **summary**: Map from all (unlocked) "controller" accounts to the info regarding the staking.

### minimumValidatorCount(): `u32`
- **interface**: api.query.staking.minimumValidatorCount
- **summary**: Minimum number of staking participants before emergency conditions are imposed.

### nominators(`AccountId`): `Option<(Nominations, Linkage<AccountId>)>`
- **interface**: api.query.staking.nominators
- **summary**: The map from nominator stash key to the set of stash keys of all validators to nominate.  NOTE: is private so that we can ensure upgraded before all typical accesses. Direct storage APIs can still bypass this protection.

### nominatorSlashInEra(`EraIndex, AccountId`): `Option<BalanceOf>`
- **interface**: api.query.staking.nominatorSlashInEra
- **summary**: All slashing events on nominators, mapped by era to the highest slash value of the era.

### payee(`AccountId`): `RewardDestination`
- **interface**: api.query.staking.payee
- **summary**: Where the reward payment should be made. Keyed by stash.

### permissionedValidators(`AccountId`): `Option<(PermissionedValidator, Linkage<AccountId>)>`
- **interface**: api.query.staking.permissionedValidators
- **summary**: The map from (wannabe) validators to the status of compliance

### slashingSpans(`AccountId`): `Option<SlashingSpans>`
- **interface**: api.query.staking.slashingSpans
- **summary**: Slashing spans for stash accounts.

### slashRewardFraction(): `Perbill`
- **interface**: api.query.staking.slashRewardFraction
- **summary**: The percentage of the slash that is distributed to reporters.  The rest of the slashed value is handled by the `Slash`.

### slotStake(): `BalanceOf`
- **interface**: api.query.staking.slotStake
- **summary**: The amount of balance actively at stake for each validator slot, currently.  This is used to derive rewards and punishments.

### spanSlash(`(AccountId,SpanIndex)`): `SpanRecord`
- **interface**: api.query.staking.spanSlash
- **summary**: Records information about the maximum slash of a stash within a slashing span, as well as how much reward has been paid out.

### stakers(`AccountId`): `Exposure`
- **interface**: api.query.staking.stakers
- **summary**: Nominators for a particular account that is in action right now. You can't iterate through validators here, but you can find them in the Session module.  This is keyed by the stash account.

### storageVersion(): `u32`
- **interface**: api.query.staking.storageVersion
- **summary**: The version of storage for upgrade.

### unappliedSlashes(`EraIndex`): `Vec<UnappliedSlash>`
- **interface**: api.query.staking.unappliedSlashes
- **summary**: All unapplied slashes that are queued for later.

### validatorCount(): `u32`
- **interface**: api.query.staking.validatorCount
- **summary**: The ideal number of staking participants.

### validators(`AccountId`): `(ValidatorPrefs, Linkage<AccountId>)`
- **interface**: api.query.staking.validators
- **summary**: The map from (wannabe) validator stash key to the preferences of that validator.

### validatorSlashInEra(`EraIndex, AccountId`): `Option<(Perbill,BalanceOf)>`
- **interface**: api.query.staking.validatorSlashInEra
- **summary**: All slashing events on validators, mapped by era to the highest slash proportion and slash value of the era.

___


## sTOCapped

### allowedTokens(`(Ticker,u32,u32)`): `Ticker`
- **interface**: api.query.sTOCapped.allowedTokens
- **summary**: List of SimpleToken tokens which will be accepted as the fund raised type for the STO (asset_ticker, sto_id, index) -> simple_token_ticker

### investmentData(`(Ticker,u32,IdentityId)`): `Investment`
- **interface**: api.query.sTOCapped.investmentData
- **summary**: To track the investment data of the investor corresponds to ticker (asset_ticker, sto_id, DID) -> Investment structure

### simpleTokenSpent(`(Ticker,Ticker,u32,IdentityId)`): `Balance`
- **interface**: api.query.sTOCapped.simpleTokenSpent
- **summary**: To track the investment amount of the investor corresponds to ticker using SimpleToken (asset_ticker, simple_token_ticker, sto_id, accountId) -> Invested balance

### stoCount(`Ticker`): `u32`
- **interface**: api.query.sTOCapped.stoCount
- **summary**: It returns the sto count corresponds to its ticker ticker -> sto count

### stosByToken(`(Ticker,u32)`): `STO`
- **interface**: api.query.sTOCapped.stosByToken
- **summary**: Tokens can have multiple whitelists that (for now) check entries individually within each other (ticker, sto_id) -> STO

### tokenIndexForSTO(`(Ticker,u32,Ticker)`): `Option<u32>`
- **interface**: api.query.sTOCapped.tokenIndexForSTO
- **summary**: To track the index of the token address for the given STO (Asset_ticker, sto_id, simple_token_ticker) -> index

### tokensCountForSto(`(Ticker,u32)`): `u32`
- **interface**: api.query.sTOCapped.tokensCountForSto
- **summary**: To track the no of different tokens allowed as fund raised type for the given STO (asset_ticker, sto_id) -> count

___


## sudo

### key(): `AccountId`
- **interface**: api.query.sudo.key
- **summary**: The `AccountId` of the sudo key.

___


## system

### accountNonce(`AccountId`): `Index`
- **interface**: api.query.system.accountNonce
- **summary**: Extrinsics nonce for accounts.

### allExtrinsicsLen(): `Option<u32>`
- **interface**: api.query.system.allExtrinsicsLen
- **summary**: Total length (in bytes) for all extrinsics put together, for the current block.

### allExtrinsicsWeight(): `Option<Weight>`
- **interface**: api.query.system.allExtrinsicsWeight
- **summary**: Total weight for all extrinsics put together, for the current block.

### blockHash(`BlockNumber`): `Hash`
- **interface**: api.query.system.blockHash
- **summary**: Map of block numbers to block hashes.

### digest(): `DigestOf`
- **interface**: api.query.system.digest
- **summary**: Digest of the current block, also part of the block header.

### eventCount(): `EventIndex`
- **interface**: api.query.system.eventCount
- **summary**: The number of events in the `Events<T>` list.

### events(): `Vec<EventRecord>`
- **interface**: api.query.system.events
- **summary**: Events deposited for the current block.

### eventTopics(`(), Hash`): `Vec<(BlockNumber,EventIndex)>`
- **interface**: api.query.system.eventTopics
- **summary**: Mapping between a topic (represented by T::Hash) and a vector of indexes of events in the `<Events<T>>` list.  The first key serves no purpose. This field is declared as double_map just for convenience of using `remove_prefix`.  All topic vectors have deterministic storage locations depending on the topic. This allows light-clients to leverage the changes trie storage tracking mechanism and in case of changes fetch the list of events of interest.  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just the `EventIndex` then in case if the topic has the same contents on the next block no notification will be triggered thus the event might be lost.

### extrinsicCount(): `Option<u32>`
- **interface**: api.query.system.extrinsicCount
- **summary**: Total extrinsics count for the current block.

### extrinsicData(`u32`): `Bytes`
- **interface**: api.query.system.extrinsicData
- **summary**: Extrinsics data for the current block (maps an extrinsic's index to its data).

### extrinsicsRoot(): `Hash`
- **interface**: api.query.system.extrinsicsRoot
- **summary**: Extrinsics root of the current block, also part of the block header.

### number(): `BlockNumber`
- **interface**: api.query.system.number
- **summary**: The current block number being processed. Set by `execute_block`.

### parentHash(): `Hash`
- **interface**: api.query.system.parentHash
- **summary**: Hash of the previous block.

___


## timestamp

### didUpdate(): `bool`
- **interface**: api.query.timestamp.didUpdate
- **summary**: Did the timestamp get updated in this block?

### now(): `Moment`
- **interface**: api.query.timestamp.now
- **summary**: Current time for the current block.

___


## transactionPayment

### nextFeeMultiplier(): `Multiplier`
- **interface**: api.query.transactionPayment.nextFeeMultiplier

___


## treasury

### approvals(): `Vec<ProposalIndex>`
- **interface**: api.query.treasury.approvals
- **summary**: Proposal indices that have been approved but not yet awarded.

### proposalCount(): `ProposalIndex`
- **interface**: api.query.treasury.proposalCount
- **summary**: Number of proposals that have been made.

### proposals(`ProposalIndex`): `Option<TreasuryProposal>`
- **interface**: api.query.treasury.proposals
- **summary**: Proposals that have been made.

___


## voting

### ballots(`(Ticker,Bytes)`): `(Ballot, Linkage<(Ticker,Bytes)>)`
- **interface**: api.query.voting.ballots
- **summary**: Mapping of ticker and ballot name -> ballot details

### results(`(Ticker,Bytes)`): `Vec<Balance>`
- **interface**: api.query.voting.results
- **summary**: (Ticker, BallotName) -> Vector of current vote weights. weight at 0 index means weight for choice 1 of motion 1. weight at 1 index means weight for choice 2 of motion 1.

### totalChoices(`(Ticker,Bytes)`): `u64`
- **interface**: api.query.voting.totalChoices
- **summary**: Helper data to make voting cheaper. (ticker, BallotName) -> NoOfChoices

### votes(`(Ticker,Bytes,IdentityId)`): `Vec<Balance>`
- **interface**: api.query.voting.votes
- **summary**: (Ticker, BallotName, DID) -> Vector of vote weights. weight at 0 index means weight for choice 1 of motion 1. weight at 1 index means weight for choice 2 of motion 1. User must enter 0 vote weight if they don't want to vote for a choice.

---

### substrate

_These are keys that are always available to the runtime implementation_

▸ **changesTrieConfig**(): `u32`
- **summary**: Changes trie configuration is stored under this key.

▸ **childStorageKeyPrefix**(): `u32`
- **summary**: Prefix of child storage keys.

▸ **code**(): `Bytes`
- **summary**: Wasm code of the runtime.

▸ **extrinsicIndex**(): `u32`
- **summary**: Current extrinsic index (u32) is stored under this key.

▸ **heapPages**(): `u64`
- **summary**: Number of wasm linear memory pages required for execution of the runtime.

---
