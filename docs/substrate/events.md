## Events

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)
- **[asset](#asset)**

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

- **[kycServiceProviders](#kycServiceProviders)**

- **[mips](#mips)**

- **[multiSig](#multiSig)**

- **[offences](#offences)**

- **[percentageTm](#percentageTm)**

- **[polymeshCommittee](#polymeshCommittee)**

- **[session](#session)**

- **[simpleToken](#simpleToken)**

- **[staking](#staking)**

- **[stoCapped](#stoCapped)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[treasury](#treasury)**

- **[voting](#voting)**


___


## asset

### Approval(`Ticker`, `IdentityId`, `IdentityId`, `Balance`)
- **summary**: event when an approval is made ticker, owner DID, spender DID, value

### CanTransfer(`Ticker`, `IdentityId`, `IdentityId`, `Balance`, `Bytes`, `u32`)
- **summary**: can_transfer() output ticker, from_did, to_did, value, data, ERC1066 status 0 - OK 1,2... - Error, meanings TBD

### ControllerRedemption(`Ticker`, `IdentityId`, `IdentityId`, `Balance`, `Bytes`, `Bytes`)
- **summary**: event for when a forced redemption takes place ticker, controller DID, token holder DID, value, data, operator data

### ControllerTransfer(`Ticker`, `IdentityId`, `IdentityId`, `IdentityId`, `Balance`, `Bytes`, `Bytes`)
- **summary**: event for forced transfer of tokens ticker, controller DID, from DID, to DID, value, data, operator data

### CustodyAllowanceChanged(`Ticker`, `IdentityId`, `IdentityId`, `Balance`, `Balance`)
- **summary**: emit when allowance get increased ticker, holder did, custodian did, oldAllowance, newAllowance

### CustodyTransfer(`Ticker`, `IdentityId`, `IdentityId`, `IdentityId`, `Balance`)
- **summary**: emit when tokens transferred by the custodian ticker, custodian did, holder/from did, to did, amount

### DivisibilityChanged(`Ticker`, `bool`)
- **summary**: Event for change in divisibility ticker, divisibility

### FundingRound(`Ticker`, `Bytes`)
- **summary**: An event carrying the name of the current funding round of a ticker. Parameters: ticker, funding round name.

### GetDocument(`Ticker`, `Bytes`, `Bytes`, `Bytes`, `Moment`)
- **summary**: get_document() output ticker, name, uri, hash, last modification date

### IdentifiersUpdated(`Ticker`, `Vec<(IdentifierType,Bytes)>`)
- **summary**: Event emitted when a token identifiers are updated. ticker, a vector of (identifier type, identifier value)

### IsIssuable(`Ticker`, `bool`)
- **summary**: is_issuable() output ticker, return value (true if issuable)

### Issued(`Ticker`, `IdentityId`, `Balance`, `Bytes`, `Balance`)
- **summary**: emit when tokens get issued ticker, beneficiary DID, value, funding round, total issued in this funding round

### IssuedToken(`Ticker`, `Balance`, `IdentityId`, `bool`, `AssetType`)
- **summary**: Event for creation of the asset ticker, total supply, owner DID, divisibility, asset type

### Redeemed(`Ticker`, `IdentityId`, `Balance`)
- **summary**: emit when tokens get redeemed ticker, DID, value

### TickerRegistered(`Ticker`, `IdentityId`, `Option<Moment>`)
- **summary**: emit when ticker is registered ticker, ticker owner, expiry

### TickerTransferApproval(`Ticker`, `IdentityId`, `IdentityId`)
- **summary**: emit when ticker is registered ticker, current owner, approved owner

### TickerTransferApprovalWithdrawal(`Ticker`, `IdentityId`)
- **summary**: ticker transfer approval withdrawal ticker, approved did

### TickerTransferred(`Ticker`, `IdentityId`, `IdentityId`)
- **summary**: emit when ticker is transferred ticker, from, to

### TokenOwnershipTransferred(`Ticker`, `IdentityId`, `IdentityId`)
- **summary**: emit when token ownership is transferred ticker, from, to

### TokenRenamed(`Ticker`, `Bytes`)
- **summary**: An event emitted when a token is renamed. Parameters: ticker, new token name.

### Transfer(`Ticker`, `IdentityId`, `IdentityId`, `Balance`)
- **summary**: event for transfer of tokens ticker, from DID, to DID, value

### TransferWithData(`Ticker`, `IdentityId`, `IdentityId`, `Balance`, `Bytes`)
- **summary**: An additional event to Transfer; emitted when transfer_with_data is called; similar to Transfer with data added at the end. ticker, from DID, to DID, value, data

___


## balances

### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **summary**: A balance was set by root (who, free, reserved).

### Deposit(`AccountId`, `Balance`)
- **summary**: Some amount was deposited (e.g. for transaction fees).

### NewAccount(`AccountId`, `Balance`)
- **summary**: A new account was created.

### ReapedAccount(`AccountId`)
- **summary**: An account was reaped.

### Transfer(`AccountId`, `AccountId`, `Balance`, `Balance`)
- **summary**: Transfer succeeded (from, to, value, fees).

___


## committeeMembership

### Dummy(`PhantomData`)
- **summary**: Phantom member, never used.

### MemberAdded(`IdentityId`)
- **summary**: The given member was added; see the transaction for who.

### MemberRemoved(`IdentityId`)
- **summary**: The given member was removed; see the transaction for who.

### MembersReset(`Vec<IdentityId>`)
- **summary**: The membership was reset; see the transaction for who the new set is.

### MembersSwapped(`IdentityId`, `IdentityId`)
- **summary**: Two members were swapped; see the transaction for who.

___


## contracts

### CodeStored(`Hash`)
- **summary**: Code with the specified hash has been stored.

### Contract(`AccountId`, `Bytes`)
- **summary**: An event from contract of account.

### Dispatched(`AccountId`, `bool`)
- **summary**: A call was dispatched from the given account. The bool signals whether it was successful execution or not.

### Instantiated(`AccountId`, `AccountId`)
- **summary**: Contract deployed by address at the specified address.

### ScheduleUpdated(`u32`)
- **summary**: Triggered when the current schedule is updated.

### Transfer(`AccountId`, `AccountId`, `Balance`)
- **summary**: Transfer happened `from` to `to` with given `value` as part of a `call` or `instantiate`.

___


## dividend

### DividendCanceled(`Ticker`, `u32`)
- **summary**: A dividend was canceled (ticker, dividend ID)

### DividendCreated(`Ticker`, `Balance`, `u32`)
- **summary**: A new dividend was created (ticker, amount, dividend ID)

### DividendPaidOutToUser(`IdentityId`, `Ticker`, `u32`, `Balance`)
- **summary**: Dividend was paid to a user (who, ticker, dividend ID, share)

### DividendRemainingClaimed(`Ticker`, `u32`, `Balance`)
- **summary**: Unclaimed dividend was claimed back (ticker, dividend ID, amount)

___


## exemption

### ModifyExemptionList(`Ticker`, `u16`, `IdentityId`, `bool`)

___


## generalTm

### NewAssetRule(`Ticker`, `AssetRule`)

### RemoveAssetRule(`Ticker`, `AssetRule`)

### ResetAssetRules(`Ticker`)

___


## grandpa

### NewAuthorities(`AuthorityList`)
- **summary**: New authority set has been applied.

### Paused()
- **summary**: Current authority set has been paused.

### Resumed()
- **summary**: Current authority set has been resumed.

___


## identity

### AuthorizationRemoved(`u64`, `Signer`)
- **summary**: Authorization revoked or consumed. (auth_id, authorized_identity)

### DidQuery(`Key`, `IdentityId`)
- **summary**: DID queried

### LinkRemoved(`u64`, `Signer`)
- **summary**: Link removed. (link_id, associated identity or key)

### MyKycStatus(`IdentityId`, `bool`, `Option<IdentityId>`)
- **summary**: To query the status of DID

### NewAuthorization(`u64`, `Signer`, `Signer`, `AuthorizationData`, `Option<Moment>`)
- **summary**: New authorization added (auth_id, from, to, authorization_data, expiry)

### NewClaimIssuer(`IdentityId`, `IdentityId`)
- **summary**: DID, claim issuer DID

### NewClaims(`IdentityId`, `ClaimMetaData`, `Claim`)
- **summary**: DID, claim issuer DID, claims

### NewDid(`IdentityId`, `AccountId`, `Vec<SigningItem>`)
- **summary**: DID, master key account ID, signing keys

### NewIssuer(`IdentityId`)
- **summary**: DID

### NewLink(`u64`, `Signer`, `LinkData`, `Option<Moment>`)
- **summary**: New link added (link_id, associated identity or key, link_data, expiry)

### NewMasterKey(`IdentityId`, `AccountId`, `Key`)
- **summary**: DID, old master key account ID, new key

### NewSigningItems(`IdentityId`, `Vec<SigningItem>`)
- **summary**: DID, new keys

### RemovedClaimIssuer(`IdentityId`, `IdentityId`)
- **summary**: DID, removed claim issuer DID

### RevokedClaim(`IdentityId`, `ClaimMetaData`)
- **summary**: DID, claim issuer DID, claim

### RevokedSigningItems(`IdentityId`, `Vec<Signer>`)
- **summary**: DID, the keys that got removed

### SignerJoinedToIdentityApproved(`Signer`, `IdentityId`)
- **summary**: Signer approved a previous request to join to a target identity.

### SigningPermissionsUpdated(`IdentityId`, `SigningItem`, `Vec<Permission>`)
- **summary**: DID, updated signing key, previous permissions

___


## imOnline

### AllGood()
- **summary**: At the end of the session, no offence was committed.

### HeartbeatReceived(`AuthorityId`)
- **summary**: A new heartbeat was received from `AuthorityId`

### SomeOffline(`Vec<IdentificationTuple>`)
- **summary**: At the end of the session, at least once validator was found to be offline.

___


## indices

### NewAccountIndex(`AccountId`, `AccountIndex`)
- **summary**: A new account index was assigned.  This event is not triggered when an existing index is reassigned to another `AccountId`.

___


## kycServiceProviders

### Dummy(`PhantomData`)
- **summary**: Phantom member, never used.

### MemberAdded(`IdentityId`)
- **summary**: The given member was added; see the transaction for who.

### MemberRemoved(`IdentityId`)
- **summary**: The given member was removed; see the transaction for who.

### MembersReset(`Vec<IdentityId>`)
- **summary**: The membership was reset; see the transaction for who the new set is.

### MembersSwapped(`IdentityId`, `IdentityId`)
- **summary**: Two members were swapped; see the transaction for who.

___


## mips

### ProposalClosed(`MipsIndex`, `Hash`)
- **summary**: Proposal referenced by `Hash` has been closed

### ProposalFastTracked(`MipsIndex`, `Hash`)
- **summary**: Proposal referenced by `Hash` has been closed

### Proposed(`AccountId`, `Balance`, `MipsIndex`, `Hash`)
- **summary**: A Mesh Improvement Proposal was made with a `Balance` stake

### ReferendumCreated(`MipsIndex`, `MipsPriority`, `Hash`)
- **summary**: Referendum created for proposal referenced by `Hash`

### ReferendumEnacted(`Hash`, `bool`)
- **summary**: Proposal referenced by `Hash` was dispatched with the result `bool`

### Voted(`AccountId`, `MipsIndex`, `Hash`, `bool`)
- **summary**: `AccountId` voted `bool` on the proposal referenced by `Hash`

___


## multiSig

### MultiSigCreated(`AccountId`, `AccountId`, `Vec<Signer>`, `u64`)
- **summary**: Event for multi sig creation. (MultiSig address, Creator address, Signers(pending approval), Sigs required)

### MultiSigSignaturesRequiredChanged(`AccountId`, `u64`)
- **summary**: Change in signatures required by a multisig (MultiSig, new_sigs_required)

### MultiSigSignerAdded(`AccountId`, `Signer`)
- **summary**: Signer added (Authorization accepted) (MultiSig, signer_added)

### MultiSigSignerAuthorized(`AccountId`, `Signer`)
- **summary**: Multi Sig Signer Authorized to be added (MultiSig, signer_authorized)

### MultiSigSignerRemoved(`AccountId`, `Signer`)
- **summary**: Multi Sig Signer removed (MultiSig, signer_removed)

### ProposalAdded(`AccountId`, `u64`)
- **summary**: Event for adding a proposal (MultiSig, proposalid)

### ProposalExecuted(`AccountId`, `u64`, `bool`)
- **summary**: Emitted when a proposal is executed. (MultiSig, proposalid, result)

___


## offences

### Offence(`Kind`, `OpaqueTimeSlot`)
- **summary**: There is an offence reported of the given `kind` happened at the `session_index` and (kind-specific) time slot. This event is not deposited for duplicate slashes.

___


## percentageTm

### DoSomething(`Balance`)

### TogglePercentageRestriction(`Ticker`, `u16`, `bool`)

___


## polymeshCommittee

### Approved(`Hash`, `MemberCount`, `MemberCount`, `MemberCount`)
- **summary**: A motion was approved by the required threshold with the following tally (yes votes, no votes and total seats given respectively as `MemberCount`).

### Executed(`Hash`, `bool`)
- **summary**: A motion was executed; `bool` is true if returned without error.

### Proposed(`IdentityId`, `ProposalIndex`, `Hash`)
- **summary**: A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).

### Rejected(`Hash`, `MemberCount`, `MemberCount`, `MemberCount`)
- **summary**: A motion was rejected by the required threshold with the following tally (yes votes, no votes and total seats given respectively as `MemberCount`).

### Voted(`IdentityId`, `Hash`, `bool`, `MemberCount`, `MemberCount`, `MemberCount`)
- **summary**: A motion (given hash) has been voted on by given account, leaving a tally (yes votes, no votes and total seats given respectively as `MemberCount`).

___


## session

### NewSession(`SessionIndex`)
- **summary**: New session has happened. Note that the argument is the session index, not the block number as the type might suggest.

___


## simpleToken

### Approval(`Ticker`, `IdentityId`, `IdentityId`, `Balance`)
- **summary**: ticker, from DID, spender DID, amount

### TokenCreated(`Ticker`, `IdentityId`, `Balance`)
- **summary**: ticker, owner DID, supply

### Transfer(`Ticker`, `IdentityId`, `IdentityId`, `Balance`)
- **summary**: ticker, from DID, to DID, amount

___


## staking

### InvalidatedNominators(`AccountId`, `Vec<AccountId>`)
- **summary**: Remove the nominators from the valid nominators when there KYC expired Caller, Stash accountId of nominators

### OldSlashingReportDiscarded(`SessionIndex`)
- **summary**: An old slashing report from a prior era was discarded because it could not be processed.

### PermissionedValidatorAdded(`AccountId`)
- **summary**: An entity has issued a candidacy. See the transaction for who.

### PermissionedValidatorRemoved(`AccountId`)
- **summary**: The given member was removed. See the transaction for who.

### PermissionedValidatorStatusChanged(`AccountId`)
- **summary**: The given member was removed. See the transaction for who.

### Reward(`Balance`, `Balance`)
- **summary**: All validators have been rewarded by the first balance; the second is the remainder from the maximum amount of reward.

### Slash(`AccountId`, `Balance`)
- **summary**: One validator (and its nominators) has been slashed by the given amount.

___


## stoCapped

### AssetPurchase(`Ticker`, `Ticker`, `u32`, `IdentityId`, `Balance`, `Balance`)
- **summary**: Emit when Asset get purchased by the investor Ticker, SimpleToken token, sto_id, investor DID, amount invested, amount of token purchased

### ModifyAllowedTokens(`Ticker`, `Ticker`, `u32`, `bool`)

___


## sudo

### KeyChanged(`AccountId`)
- **summary**: The sudoer just switched identity; the old key is supplied.

### Sudid(`bool`)
- **summary**: A sudo just took place.

### SudoAsDone(`bool`)
- **summary**: A sudo just took place.

___


## system

### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **summary**: An extrinsic failed.

### ExtrinsicSuccess(`DispatchInfo`)
- **summary**: An extrinsic completed successfully.

___


## treasury

### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **summary**: Some funds have been allocated.

### Burnt(`Balance`)
- **summary**: Some of our funds have been burnt.

### Deposit(`Balance`)
- **summary**: Some funds have been deposited.

### Proposed(`ProposalIndex`)
- **summary**: New proposal.

### Rejected(`ProposalIndex`, `Balance`)
- **summary**: A proposal was rejected; funds were slashed.

### Rollover(`Balance`)
- **summary**: Spending has finished; this is the amount that rolls over until next spend.

### Spending(`Balance`)
- **summary**: We have ended a spend period and will now allocate funds.

___


## voting

### BallotCancelled(`Ticker`, `Bytes`)
- **summary**: An existing ballot is cancelled (Ticker, BallotName)

### BallotCreated(`Ticker`, `Bytes`, `Ballot`)
- **summary**: A new ballot is created (Ticker, BallotName, BallotDetails)

### VoteCast(`Ticker`, `Bytes`, `Vec<Balance>`)
- **summary**: A vote is cast (Ticker, BallotName, Vote)
