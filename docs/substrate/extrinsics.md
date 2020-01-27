## Extrinsics

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)
- **[asset](#asset)**

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[committeeMembership](#committeeMembership)**

- **[contracts](#contracts)**

- **[dividend](#dividend)**

- **[exemption](#exemption)**

- **[finalityTracker](#finalityTracker)**

- **[generalTm](#generalTm)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imOnline)**

- **[kycServiceProviders](#kycServiceProviders)**

- **[mips](#mips)**

- **[multiSig](#multiSig)**

- **[percentageTm](#percentageTm)**

- **[polymeshCommittee](#polymeshCommittee)**

- **[session](#session)**

- **[simpleToken](#simpleToken)**

- **[staking](#staking)**

- **[stoCapped](#stoCapped)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[voting](#voting)**


___


## asset

### acceptTickerTransfer(auth_id: `u64`)
- **interface**: api.tx.asset.acceptTickerTransfer
- **summary**: This function is used to accept a ticker transfer NB: To reject the transfer, call remove auth function in identity module.  # Arguments * `origin` It contains the signing key of the caller (i.e who signed the transaction to execute this function) * `auth_id` Authorization ID of ticker transfer authorization

### acceptTokenOwnershipTransfer(auth_id: `u64`)
- **interface**: api.tx.asset.acceptTokenOwnershipTransfer
- **summary**: This function is used to accept a token ownership transfer NB: To reject the transfer, call remove auth function in identity module.  # Arguments * `origin` It contains the signing key of the caller (i.e who signed the transaction to execute this function) * `auth_id` Authorization ID of the token ownership transfer authorization

### approve(did: `IdentityId`, ticker: `Ticker`, spender_did: `IdentityId`, value: `Balance`)
- **interface**: api.tx.asset.approve
- **summary**: approve token transfer from one DID to DID once this is done, transfer_from can be called with corresponding values  # Arguments * `_origin` Signing key of the token owner (i.e sender) * `did` DID of the sender * `spender_did` DID of the spender * `value` Amount of the tokens approved

### batchIssue(did: `IdentityId`, ticker: `Ticker`, investor_dids: `Vec<IdentityId>`, values: `Vec<Balance>`)
- **interface**: api.tx.asset.batchIssue
- **summary**: Function is used issue(or mint) new tokens for the given DIDs can only be executed by the token owner  # Arguments * `origin` Signing key of token owner * `did` DID of the token owner * `ticker` Ticker of the token * `investor_dids` Array of the DID of the token holders to whom new tokens get issued. * `values` Array of the Amount of tokens that get issued

### canTransfer(ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`)
- **interface**: api.tx.asset.canTransfer
- **summary**: Checks whether a transaction with given parameters can take place or not This function is state less function and used to validate the transfer before actual transfer call.  # Arguments * `_origin` Signing Key of the caller * `ticker` Ticker of the token * `from_did` DID from whom tokens will be transferred * `to_did` DID to whom tokens will be transferred * `value` Amount of the tokens * `data` Off chain data blob to validate the transfer.

### controllerRedeem(did: `IdentityId`, ticker: `Ticker`, token_holder_did: `IdentityId`, value: `Balance`, data: `Bytes`, operator_data: `Bytes`)
- **interface**: api.tx.asset.controllerRedeem
- **summary**: Forces a redemption of an DID's tokens. Can only be called by token owner  # Arguments * `_origin` Signing key of the token owner * `did` DID of the token holder * `ticker` Ticker of the token * `token_holder_did` DID from whom balance get reduced * `value` Amount of the tokens needs to redeem * `data` An off chain data blob used to validate the redeem functionality. * `operator_data` Any data blob that defines the reason behind the force redeem.

### controllerTransfer(did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`, operator_data: `Bytes`)
- **interface**: api.tx.asset.controllerTransfer
- **summary**: Forces a transfer between two DIDs & This can only be called by security token owner. This function doesn't validate any type of restriction beside a valid KYC check  # Arguments * `_origin` signing key of the token owner DID. * `did` Token owner DID. * `ticker` symbol of the token * `from_did` DID of the token holder from whom balance token will be transferred. * `to_did` DID of token holder to whom token balance will be transferred. * `value` Amount of tokens. * `data` Some off chain data to validate the restriction. * `operator_data` It is a string which describes the reason of this control transfer call.

### createCheckpoint(did: `IdentityId`, ticker: `Ticker`)
- **interface**: api.tx.asset.createCheckpoint
- **summary**: Function used to create the checkpoint  # Arguments * `_origin` Signing key of the token owner. (Only token owner can call this function). * `did` DID of the token owner * `_ticker` Ticker of the token

### createToken(did: `IdentityId`, name: `Bytes`, ticker: `Ticker`, total_supply: `Balance`, divisible: `bool`, asset_type: `AssetType`, identifiers: `Vec<(IdentifierType,Bytes)>`)
- **interface**: api.tx.asset.createToken
- **summary**: Initializes a new security token makes the initiating account the owner of the security token & the balance of the owner is set to total supply  # Arguments * `origin` - contains the signing key of the caller (i.e who signed the transaction to execute this function). * `did` - the DID of the creator of the token or the owner of the token. * `name` - the name of the token. * `ticker` - the ticker symbol of the token. * `total_supply` - the total supply of the token. * `divisible` - a boolean to identify the divisibility status of the token. * `asset_type` - the asset type. * `identifiers` - a vector of asset identifiers.

### getDocument(ticker: `Ticker`, name: `Bytes`)
- **interface**: api.tx.asset.getDocument
- **summary**: Used to get the documents details attach with the token  # Arguments * `_origin` Caller signing key * `ticker` Ticker of the token * `name` Name of the document

### increaseCustodyAllowance(ticker: `Ticker`, holder_did: `IdentityId`, custodian_did: `IdentityId`, value: `Balance`)
- **interface**: api.tx.asset.increaseCustodyAllowance
- **summary**: ERC-2258 Implementation Used to increase the allowance for a given custodian Any investor/token holder can add a custodian and transfer the token transfer ownership to the custodian Through that investor balance will remain the same but the given token are only transfer by the custodian. This implementation make sure to have an accurate investor count from omnibus wallets.  # Arguments * `origin` Signing key of the token holder * `ticker` Ticker of the token * `holder_did` DID of the token holder (i.e who wants to increase the custody allowance) * `custodian_did` DID of the custodian (i.e whom allowance provided) * `value` Allowance amount

### increaseCustodyAllowanceOf(ticker: `Ticker`, holder_did: `IdentityId`, holder_account_id: `AccountId`, custodian_did: `IdentityId`, caller_did: `IdentityId`, value: `Balance`, nonce: `u16`, signature: `OffChainSignature`)
- **interface**: api.tx.asset.increaseCustodyAllowanceOf
- **summary**: Used to increase the allowance for a given custodian by providing the off chain signature  # Arguments * `origin` Signing key of a DID who posses off chain signature * `ticker` Ticker of the token * `holder_did` DID of the token holder (i.e who wants to increase the custody allowance) * `holder_account_id` Signing key which signs the off chain data blob. * `custodian_did` DID of the custodian (i.e whom allowance provided) * `caller_did` DID of the caller * `value` Allowance amount * `nonce` A u16 number which avoid the replay attack * `signature` Signature provided by the holder_did

### isIssuable(ticker: `Ticker`)
- **interface**: api.tx.asset.isIssuable
- **summary**: Used to know whether the given token will issue new tokens or not  # Arguments * `_origin` Signing key * `ticker` Ticker of the token whose issuance status need to know

### issue(did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, value: `Balance`, _data: `Bytes`)
- **interface**: api.tx.asset.issue
- **summary**: Function is used to issue(or mint) new tokens for the given DID can only be executed by the token owner  # Arguments * `origin` Signing key of token owner * `did` DID of the token owner * `ticker` Ticker of the token * `to_did` DID of the token holder to whom new tokens get issued. * `value` Amount of tokens that get issued

### makeDivisible(did: `IdentityId`, ticker: `Ticker`)
- **interface**: api.tx.asset.makeDivisible
- **summary**: Makes an indivisible token divisible. Only called by the token owner  # Arguments * `origin` Signing key of the token owner. * `did` DID of the token owner * `ticker` Ticker of the token

### redeem(did: `IdentityId`, ticker: `Ticker`, value: `Balance`, _data: `Bytes`)
- **interface**: api.tx.asset.redeem
- **summary**: Used to redeem the security tokens  # Arguments * `_origin` Signing key of the token holder who wants to redeem the tokens * `did` DID of the token holder * `ticker` Ticker of the token * `value` Amount of the tokens needs to redeem * `_data` An off chain data blob used to validate the redeem functionality.

### redeemFrom(did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, value: `Balance`, _data: `Bytes`)
- **interface**: api.tx.asset.redeemFrom
- **summary**: Used to redeem the security tokens by some other DID who has approval  # Arguments * `_origin` Signing key of the spender who has valid approval to redeem the tokens * `did` DID of the spender * `ticker` Ticker of the token * `from_did` DID from whom balance get reduced * `value` Amount of the tokens needs to redeem * `_data` An off chain data blob used to validate the redeem functionality.

### registerTicker(ticker: `Ticker`)
- **interface**: api.tx.asset.registerTicker
- **summary**: This function is used to either register a new ticker or extend validity of an exisitng ticker NB Ticker validity does not get carryforward when renewing ticker  # Arguments * `origin` It contains the signing key of the caller (i.e who signed the transaction to execute this function) * `ticker` ticker to register

### removeDocument(did: `IdentityId`, ticker: `Ticker`, name: `Bytes`)
- **interface**: api.tx.asset.removeDocument
- **summary**: Used to remove the document details for the given token, Only be called by the token owner  # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `name` Name of the document

### renameToken(ticker: `Ticker`, name: `Bytes`)
- **interface**: api.tx.asset.renameToken
- **summary**: Renames a given token.  # Arguments * `origin` - the signing key of the sender * `ticker` - the ticker of the token * `name` - the new name of the token

### setDocument(did: `IdentityId`, ticker: `Ticker`, name: `Bytes`, uri: `Bytes`, document_hash: `Bytes`)
- **interface**: api.tx.asset.setDocument
- **summary**: Used to set the details of the document, Only be called by the token owner  # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `name` Name of the document * `uri` Off chain URL of the document * `document_hash` Hash of the document to proof the incorruptibility of the document

### setFundingRound(did: `IdentityId`, ticker: `Ticker`, name: `Bytes`)
- **interface**: api.tx.asset.setFundingRound
- **summary**: Sets the name of the current funding round.  # Arguments * `origin` - the signing key of the token owner DID. * `did` - the token owner DID. * `ticker` - the ticker of the token. * `name` - the desired name of the current funding round.

### transfer(did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, value: `Balance`)
- **interface**: api.tx.asset.transfer
- **summary**: Transfer tokens from one DID to another DID as tokens are stored/managed on the DID level  # Arguments * `_origin` signing key of the sender * `did` DID of the `from` token holder, from whom tokens needs to transferred * `ticker` Ticker of the token * `to_did` DID of the `to` token holder, to whom token needs to transferred * `value` Value that needs to transferred

### transferByCustodian(ticker: `Ticker`, holder_did: `IdentityId`, custodian_did: `IdentityId`, receiver_did: `IdentityId`, value: `Balance`)
- **interface**: api.tx.asset.transferByCustodian
- **summary**: Used to transfer the tokens by the approved custodian  # Arguments * `origin` Signing key of the custodian * `ticker` Ticker of the token * `holder_did` DID of the token holder (i.e whom balance get reduced) * `custodian_did` DID of the custodian (i.e who has the valid approved allowance) * `receiver_did` DID of the receiver * `value` Amount of tokens need to transfer

### transferFrom(did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`)
- **interface**: api.tx.asset.transferFrom
- **summary**: If sufficient allowance provided, transfer from a DID to another DID without token owner's signature.  # Arguments * `_origin` Signing key of spender * `did` DID of the spender * `_ticker` Ticker of the token * `from_did` DID from whom token is being transferred * `to_did` DID to whom token is being transferred * `value` Amount of the token for transfer

### transferFromWithData(did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`)
- **interface**: api.tx.asset.transferFromWithData
- **summary**: An ERC1594 transfer_from with data This function can be used by the exchanges of other third parties to dynamically validate the transaction by passing the data blob  # Arguments * `origin` Signing key of the spender * `did` DID of spender * `ticker` Ticker of the token * `from_did` DID from whom tokens will be transferred * `to_did` DID to whom tokens will be transferred * `value` Amount of the tokens * `data` Off chain data blob to validate the transfer.

### transferWithData(did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, value: `Balance`, data: `Bytes`)
- **interface**: api.tx.asset.transferWithData
- **summary**: An ERC1594 transfer with data This function can be used by the exchanges of other third parties to dynamically validate the transaction by passing the data blob  # Arguments * `origin` Signing key of the sender * `did` DID from whom tokens will be transferred * `ticker` Ticker of the token * `to_did` DID to whom tokens will be transferred * `value` Amount of the tokens * `data` Off chain data blob to validate the transfer.

### updateIdentifiers(did: `IdentityId`, ticker: `Ticker`, identifiers: `Vec<(IdentifierType,Bytes)>`)
- **interface**: api.tx.asset.updateIdentifiers
- **summary**: Updates the asset identifiers. Can only be called by the token owner.  # Arguments * `origin` - the signing key of the token owner * `did` - the DID of the token owner * `ticker` - the ticker of the token * `identifiers` - the asset identifiers to be updated in the form of a vector of pairs of `IdentifierType` and `Vec<u8>` value.

___


## authorship

### setUncles(new_uncles: `Vec<Header>`)
- **interface**: api.tx.authorship.setUncles
- **summary**: Provide a set of uncles.

___


## balances

### changeChargeDidFlag(charge_did: `bool`)
- **interface**: api.tx.balances.changeChargeDidFlag
- **summary**: Change setting that governs if user pays fee via their own balance or identity's balance.

### forceTransfer(source: `Address`, dest: `Address`, value: `Compact<Balance>`)
- **interface**: api.tx.balances.forceTransfer
- **summary**: Exactly as `transfer`, except the origin must be root and the source account may be specified.

### reclaimIdentityBalance(did: `IdentityId`, value: `Compact<Balance>`)
- **interface**: api.tx.balances.reclaimIdentityBalance
- **summary**: Claim back poly from an identity. Can only be called by master key of the identity.

### setBalance(who: `Address`, new_free: `Compact<Balance>`, new_reserved: `Compact<Balance>`)
- **interface**: api.tx.balances.setBalance
- **summary**: Set the balances of a given account.  This will alter `FreeBalance` and `ReservedBalance` in storage. it will also decrease the total issuance of the system (`TotalIssuance`).  The dispatch origin for this call is `root`.  # <weight> - Independent of the arguments. - Contains a limited number of reads and writes. # </weight>

### topUpIdentityBalance(did: `IdentityId`, value: `Compact<Balance>`)
- **interface**: api.tx.balances.topUpIdentityBalance
- **summary**: Move some poly from balance of self to balance of an identity.

### transfer(dest: `Address`, value: `Compact<Balance>`)
- **interface**: api.tx.balances.transfer
- **summary**: Transfer some liquid free balance to another account.  `transfer` will set the `FreeBalance` of the sender and receiver. It will decrease the total issuance of the system by the `TransferFee`.  The dispatch origin for this call must be `Signed` by the transactor.  # <weight> - Dependent on arguments but not critical, given proper implementations for input config types. See related functions below. - It contains a limited number of reads and writes internally and no complex computation.  Related functions:  - `ensure_can_withdraw` is always called internally but has a bounded complexity. - Transferring balances to accounts that did not exist before will cause `T::OnNewAccount::on_new_account` to be called.  # </weight>

___


## committeeMembership

### addMember(who: `IdentityId`)
- **interface**: api.tx.committeeMembership.addMember
- **summary**: Add a member `who` to the set. May only be called from `AddOrigin` or root.  # Arguments * `origin` Origin representing `AddOrigin` or root * `who` IdentityId to be added to the group.

### removeMember(who: `IdentityId`)
- **interface**: api.tx.committeeMembership.removeMember
- **summary**: Remove a member `who` from the set. May only be called from `RemoveOrigin` or root.  # Arguments * `origin` Origin representing `RemoveOrigin` or root * `who` IdentityId to be removed from the group.

### resetMembers(members: `Vec<IdentityId>`)
- **interface**: api.tx.committeeMembership.resetMembers
- **summary**: Change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root.  # Arguments * `origin` Origin representing `ResetOrigin` or root * `members` New set of identities

### swapMember(remove: `IdentityId`, add: `IdentityId`)
- **interface**: api.tx.committeeMembership.swapMember
- **summary**: Swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root.  # Arguments * `origin` Origin representing `SwapOrigin` or root * `remove` IdentityId to be removed from the group. * `add` IdentityId to be added in place of `remove`.

___


## contracts

### call(dest: `Address`, value: `Compact<BalanceOf>`, gas_limit: `Compact<Gas>`, data: `Bytes`)
- **interface**: api.tx.contracts.call
- **summary**: Makes a call to an account, optionally transferring some balance.  * If the account is a smart-contract account, the associated code will be executed and any value will be transferred. * If the account is a regular account, any value will be transferred. * If no account exists and the call value is not less than `existential_deposit`, a regular account will be created and any value will be transferred.

### claimSurcharge(dest: `AccountId`, aux_sender: `Option<AccountId>`)
- **interface**: api.tx.contracts.claimSurcharge
- **summary**: Allows block producers to claim a small reward for evicting a contract. If a block producer fails to do so, a regular users will be allowed to claim the reward.  If contract is not evicted as a result of this call, no actions are taken and the sender is not eligible for the reward.

### instantiate(endowment: `Compact<BalanceOf>`, gas_limit: `Compact<Gas>`, code_hash: `CodeHash`, data: `Bytes`)
- **interface**: api.tx.contracts.instantiate
- **summary**: Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance.  Instantiation is executed as follows:  - The destination address is computed based on the sender and hash of the code. - The smart-contract account is created at the computed address. - The `ctor_code` is executed in the context of the newly-created account. Buffer returned after the execution is saved as the `code` of the account. That code will be invoked upon any call received by this account. - The contract is initialized.

### putCode(gas_limit: `Compact<Gas>`, code: `Bytes`)
- **interface**: api.tx.contracts.putCode
- **summary**: Stores the given binary Wasm code into the chain's storage and returns its `codehash`. You can instantiate contracts only with stored code.

### updateSchedule(schedule: `Schedule`)
- **interface**: api.tx.contracts.updateSchedule
- **summary**: Updates the schedule for metering contracts.  The schedule must have a greater version than the stored schedule.

___


## dividend

### cancel(did: `IdentityId`, ticker: `Ticker`, dividend_id: `u32`)
- **interface**: api.tx.dividend.cancel
- **summary**: Lets the owner cancel a dividend before start/maturity date

### claim(did: `IdentityId`, ticker: `Ticker`, dividend_id: `u32`)
- **interface**: api.tx.dividend.claim
- **summary**: Withdraws from a dividend the adequate share of the `amount` field. All dividend shares are rounded by truncation (down to first integer below)

### claimUnclaimed(did: `IdentityId`, ticker: `Ticker`, dividend_id: `u32`)
- **interface**: api.tx.dividend.claimUnclaimed
- **summary**: After a dividend had expired, collect the remaining amount to owner address

### new(did: `IdentityId`, amount: `Balance`, ticker: `Ticker`, matures_at: `Moment`, expires_at: `Moment`, payout_ticker: `Ticker`, checkpoint_id: `u64`)
- **interface**: api.tx.dividend.new
- **summary**: Creates a new dividend entry without payout. Token must have at least one checkpoint.

___


## exemption

### modifyExemptionList(did: `IdentityId`, ticker: `Ticker`, _tm: `u16`, asset_holder_did: `IdentityId`, exempted: `bool`)
- **interface**: api.tx.exemption.modifyExemptionList

___


## finalityTracker

### finalHint(hint: `Compact<BlockNumber>`)
- **interface**: api.tx.finalityTracker.finalHint
- **summary**: Hint that the author of this block thinks the best finalized block is the given number.

___


## generalTm

### addActiveRule(did: `IdentityId`, ticker: `Ticker`, asset_rule: `AssetRule`)
- **interface**: api.tx.generalTm.addActiveRule
- **summary**: Adds an asset rule to active rules for a ticker

### removeActiveRule(did: `IdentityId`, ticker: `Ticker`, asset_rule: `AssetRule`)
- **interface**: api.tx.generalTm.removeActiveRule
- **summary**: Removes a rule from active asset rules

### resetActiveRules(did: `IdentityId`, ticker: `Ticker`)
- **interface**: api.tx.generalTm.resetActiveRules
- **summary**: Removes all active rules of a ticker

___


## grandpa

### reportMisbehavior(_report: `Bytes`)
- **interface**: api.tx.grandpa.reportMisbehavior
- **summary**: Report some misbehavior.

___


## identity

### acceptAuthorization(auth_id: `u64`)
- **interface**: api.tx.identity.acceptAuthorization
- **summary**: Accepts an authorization

### addAuthorization(target: `Signer`, authorization_data: `AuthorizationData`, expiry: `Option<Moment>`)
- **interface**: api.tx.identity.addAuthorization
- **summary**: Adds an authorization

### addAuthorizationAsKey(target: `Signer`, authorization_data: `AuthorizationData`, expiry: `Option<Moment>`)
- **interface**: api.tx.identity.addAuthorizationAsKey
- **summary**: Adds an authorization as a key. To be used by signing keys that don't have an identity

### addClaim(did: `IdentityId`, claim_key: `Bytes`, did_issuer: `IdentityId`, expiry: `Moment`, claim_value: `ClaimValue`)
- **interface**: api.tx.identity.addClaim
- **summary**: Adds new claim record or edits an existing one. Only called by did_issuer's signing key

### addClaimsBatch(did_issuer: `IdentityId`, claims: `Vec<ClaimRecord>`)
- **interface**: api.tx.identity.addClaimsBatch
- **summary**: Adds a new batch of claim records or edits an existing one. Only called by `did_issuer`'s signing key.

### addSigningItems(did: `IdentityId`, signing_items: `Vec<SigningItem>`)
- **interface**: api.tx.identity.addSigningItems
- **summary**: Adds new signing keys for a DID. Only called by master key owner.  # Failure - It can only called by master key owner. - If any signing key is already linked to any identity, it will fail. - If any signing key is already

### addSigningItemsWithAuthorization(id: `IdentityId`, expires_at: `Moment`, additional_keys: `Vec<SigningItemWithAuth>`)
- **interface**: api.tx.identity.addSigningItemsWithAuthorization
- **summary**: It adds signing keys to target identity `id`. Keys are directly added to identity because each of them has an authorization.  Arguments: - `origin` Master key of `id` identity. - `id` Identity where new signing keys will be added. - `additional_keys` New signing items (and their authorization data) to add to target identity.  Failure - It can only called by master key owner. - Keys should be able to linked to any identity.

### authorizeJoinToIdentity(target_id: `IdentityId`)
- **interface**: api.tx.identity.authorizeJoinToIdentity
- **summary**: The key designated by `origin` accepts the authorization to join to `target_id` Identity.  # Errors - Key should be authorized previously to join to that target identity. - Key is not linked to any other identity.

### batchAcceptAuthorization(auth_ids: `Vec<u64>`)
- **interface**: api.tx.identity.batchAcceptAuthorization
- **summary**: Accepts an array of authorizations

### batchAddAuthorization(auths: `Vec<(Signer,AuthorizationData,Option<Moment>)>`)
- **interface**: api.tx.identity.batchAddAuthorization
- **summary**: Adds an array of authorization

### batchRemoveAuthorization(auth_identifiers: `Vec<(Signer,u64)>`)
- **interface**: api.tx.identity.batchRemoveAuthorization
- **summary**: Removes an array of authorizations

### forwardedCall(target_did: `IdentityId`, proposal: `Proposal`)
- **interface**: api.tx.identity.forwardedCall

### freezeSigningKeys(did: `IdentityId`)
- **interface**: api.tx.identity.freezeSigningKeys
- **summary**: It disables all signing keys at `did` identity.  # Errors 

### getMyDid()
- **interface**: api.tx.identity.getMyDid

### isMyIdentityHasValidKyc(buffer_time: `u64`)
- **interface**: api.tx.identity.isMyIdentityHasValidKyc
- **summary**: Query whether given signer identity has valid KYC or not  # Arguments * `origin` Signer whose identity get checked * `buffer_time` Buffer time corresponds to which kyc expiry need to check

### registerDid(signing_items: `Vec<SigningItem>`)
- **interface**: api.tx.identity.registerDid
- **summary**: Register signing keys for a new DID. Uses origin key as the master key.  # TODO Signing keys should authorize its use in this identity.  # Failure - Master key (administrator) can be linked to just one identity. - External signing keys can be linked to just one identity.

### removeAuthorization(target: `Signer`, auth_id: `u64`)
- **interface**: api.tx.identity.removeAuthorization
- **summary**: Removes an authorization

### removeSigningItems(did: `IdentityId`, signers_to_remove: `Vec<Signer>`)
- **interface**: api.tx.identity.removeSigningItems
- **summary**: Removes specified signing keys of a DID if present.  # Failure It can only called by master key owner.

### revokeClaim(did: `IdentityId`, claim_key: `Bytes`, did_issuer: `IdentityId`)
- **interface**: api.tx.identity.revokeClaim
- **summary**: Marks the specified claim as revoked

### revokeOffchainAuthorization(signer: `Signer`, auth: `TargetIdAuthorization`)
- **interface**: api.tx.identity.revokeOffchainAuthorization
- **summary**: It revokes the `auth` off-chain authorization of `signer`. It only takes effect if the authorized transaction is not yet executed.

### setMasterKey(did: `IdentityId`, new_key: `Key`)
- **interface**: api.tx.identity.setMasterKey
- **summary**: Sets a new master key for a DID.  # Failure Only called by master key owner.

### setPermissionToSigner(did: `IdentityId`, signer: `Signer`, permissions: `Vec<Permission>`)
- **interface**: api.tx.identity.setPermissionToSigner
- **summary**: It sets permissions for an specific `target_key` key. Only the master key of an identity is able to set signing key permissions.

### unauthorizedJoinToIdentity(signer: `Signer`, target_id: `IdentityId`)
- **interface**: api.tx.identity.unauthorizedJoinToIdentity
- **summary**: Identity's master key or target key are allowed to reject a pre authorization to join. It only affects the authorization: if key accepted it previously, then this transaction shall have no effect.

### unfreezeSigningKeys(did: `IdentityId`)
- **interface**: api.tx.identity.unfreezeSigningKeys

___


## imOnline

### heartbeat(heartbeat: `Heartbeat`, _signature: `Signature`)
- **interface**: api.tx.imOnline.heartbeat

___


## kycServiceProviders

### addMember(who: `IdentityId`)
- **interface**: api.tx.kycServiceProviders.addMember
- **summary**: Add a member `who` to the set. May only be called from `AddOrigin` or root.  # Arguments * `origin` Origin representing `AddOrigin` or root * `who` IdentityId to be added to the group.

### removeMember(who: `IdentityId`)
- **interface**: api.tx.kycServiceProviders.removeMember
- **summary**: Remove a member `who` from the set. May only be called from `RemoveOrigin` or root.  # Arguments * `origin` Origin representing `RemoveOrigin` or root * `who` IdentityId to be removed from the group.

### resetMembers(members: `Vec<IdentityId>`)
- **interface**: api.tx.kycServiceProviders.resetMembers
- **summary**: Change the membership to a new set, disregarding the existing membership. May only be called from `ResetOrigin` or root.  # Arguments * `origin` Origin representing `ResetOrigin` or root * `members` New set of identities

### swapMember(remove: `IdentityId`, add: `IdentityId`)
- **interface**: api.tx.kycServiceProviders.swapMember
- **summary**: Swap out one member `remove` for another `add`. May only be called from `SwapOrigin` or root.  # Arguments * `origin` Origin representing `SwapOrigin` or root * `remove` IdentityId to be removed from the group. * `add` IdentityId to be added in place of `remove`.

___


## mips

### emergencyReferendum(proposal: `Proposal`)
- **interface**: api.tx.mips.emergencyReferendum
- **summary**: An emergency proposal that bypasses network voting process. Governance committee can make a proposal that automatically becomes a referendum on which the committee can vote on.

### enactReferendum(proposal_hash: `Hash`)
- **interface**: api.tx.mips.enactReferendum
- **summary**: Moves a referendum instance into dispatch queue.

### fastTrackProposal(index: `MipsIndex`, proposal_hash: `Hash`)
- **interface**: api.tx.mips.fastTrackProposal
- **summary**: An emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time.

### killProposal(index: `MipsIndex`, proposal_hash: `Hash`)
- **interface**: api.tx.mips.killProposal
- **summary**: An emergency stop measure to kill a proposal. Governance committee can kill a proposal at any time.

### propose(proposal: `Proposal`, deposit: `BalanceOf`)
- **interface**: api.tx.mips.propose
- **summary**: A network member creates a Mesh Improvement Proposal by submitting a dispatchable which changes the network in someway. A minimum deposit is required to open a new proposal.  # Arguments * `proposal` a dispatchable call * `deposit` minimum deposit value

### setMinProposalDeposit(deposit: `BalanceOf`)
- **interface**: api.tx.mips.setMinProposalDeposit
- **summary**: Change the minimum proposal deposit amount required to start a proposal. Only Governance committee is allowed to change this value.  # Arguments * `deposit` the new min deposit required to start a proposal

### setProposalDuration(duration: `BlockNumber`)
- **interface**: api.tx.mips.setProposalDuration
- **summary**: Change the proposal duration value. This is the number of blocks for which votes are accepted on a proposal. Only Governance committee is allowed to change this value.  # Arguments * `duration` proposal duration in blocks

### setQuorumThreshold(threshold: `BalanceOf`)
- **interface**: api.tx.mips.setQuorumThreshold
- **summary**: Change the quorum threshold amount. This is the amount which a proposal must gather so as to be considered by a committee. Only Governance committee is allowed to change this value.  # Arguments * `threshold` the new quorum threshold amount value

### vote(proposal_hash: `Hash`, index: `MipsIndex`, aye_or_nay: `bool`, deposit: `BalanceOf`)
- **interface**: api.tx.mips.vote
- **summary**: A network member can vote on any Mesh Improvement Proposal by selecting the hash that corresponds ot the dispatchable action and vote with some balance.  # Arguments * `proposal` a dispatchable call * `index` proposal index * `aye_or_nay` a bool representing for or against vote * `deposit` minimum deposit value

___


## multiSig

### acceptMultisigSignerAsIdentity(auth_id: `u64`)
- **interface**: api.tx.multiSig.acceptMultisigSignerAsIdentity
- **summary**: Accept a multisig signer authorization given to signer's identity  # Arguments * `multisig` - MultiSig address. * `proposal_id` - Auth id of the authorization.

### acceptMultisigSignerAsKey(auth_id: `u64`)
- **interface**: api.tx.multiSig.acceptMultisigSignerAsKey
- **summary**: Accept a multisig signer authorization given to signer's key (AccountId)  # Arguments * `multisig` - MultiSig address. * `proposal_id` - Auth id of the authorization.

### addMultisigSigner(signer: `Signer`)
- **interface**: api.tx.multiSig.addMultisigSigner
- **summary**: Add a signer to the multisig. This must be called by the multisig itself.  # Arguments * `multisig` - MultiSig address. * `signer` - Signer to add.

### approveAsIdentity(multisig: `AccountId`, proposal_id: `u64`)
- **interface**: api.tx.multiSig.approveAsIdentity
- **summary**: Approves a multisig proposal using caller's identity  # Arguments * `multisig` - MultiSig address. * `proposal_id` - Proposal id to approve. If quorum is reached, the proposal will be immediately executed.

### approveAsKey(multisig: `AccountId`, proposal_id: `u64`)
- **interface**: api.tx.multiSig.approveAsKey
- **summary**: Approves a multisig proposal using caller's signing key (AccountId)  # Arguments * `multisig` - MultiSig address. * `proposal_id` - Proposal id to approve. If quorum is reached, the proposal will be immediately executed.

### changeSigsRequired(sigs_required: `u64`)
- **interface**: api.tx.multiSig.changeSigsRequired
- **summary**: Change number of sigs required by a multisig. This must be called by the multisig itself.  # Arguments * `multisig` - MultiSig address. * `sigs_required` - New number os sigs required.

### createMultisig(signers: `Vec<Signer>`, sigs_required: `u64`)
- **interface**: api.tx.multiSig.createMultisig
- **summary**: Creates a multisig  # Arguments * `signers` - Signers of the multisig (They need to accept authorization before they are actually added). * `sigs_required` - Number of sigs required to process a multi-sig tx.

### createProposalAsIdentity(multisig: `AccountId`, proposal: `Proposal`)
- **interface**: api.tx.multiSig.createProposalAsIdentity
- **summary**: Creates a multisig proposal  # Arguments * `multisig` - MultiSig address. * `proposal` - Proposal to be voted on. If this is 1 of m multisig, the proposal will be immediately executed.

### createProposalAsKey(multisig: `AccountId`, proposal: `Proposal`)
- **interface**: api.tx.multiSig.createProposalAsKey
- **summary**: Creates a multisig proposal  # Arguments * `multisig` - MultiSig address. * `proposal` - Proposal to be voted on. If this is 1 of m multisig, the proposal will be immediately executed.

### removeMultisigSigner(signer: `Signer`)
- **interface**: api.tx.multiSig.removeMultisigSigner
- **summary**: Remove a signer from the multisig. This must be called by the multisig itself.  # Arguments * `multisig` - MultiSig address. * `signer` - Signer to remove.

___


## percentageTm

### toggleMaximumPercentageRestriction(did: `IdentityId`, ticker: `Ticker`, max_percentage: `u16`)
- **interface**: api.tx.percentageTm.toggleMaximumPercentageRestriction
- **summary**: Set a maximum percentage that can be owned by a single investor

___


## polymeshCommittee

### propose(did: `IdentityId`, proposal: `Proposal`)
- **interface**: api.tx.polymeshCommittee.propose
- **summary**: Any committee member proposes a dispatchable.  # Arguments * `did` Identity of the proposer * `proposal` A dispatchable call

### setMembers(new_members: `Vec<IdentityId>`)
- **interface**: api.tx.polymeshCommittee.setMembers
- **summary**: Set the committee's membership manually to `new_members`. Requires root origin.  # Arguments * `origin` Root * `new_members` Members to be initialized as committee.

### setVoteThreshold(match_criteria: `ProportionMatch`, n: `u32`, d: `u32`)
- **interface**: api.tx.polymeshCommittee.setVoteThreshold
- **summary**: Change the vote threshold the determines the winning proposal. For e.g., for a simple majority use (ProportionMatch.AtLeast, 1, 2) which represents the inequation ">= 1/2"  # Arguments * `match_criteria` One of {AtLeast, MoreThan} * `n` Numerator of the fraction representing vote threshold * `d` Denominator of the fraction representing vote threshold * `match_criteria` One of {AtLeast, MoreThan}

### vote(did: `IdentityId`, proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: api.tx.polymeshCommittee.vote
- **summary**: Member casts a vote.  # Arguments * `did` Identity of the proposer * `proposal` Hash of proposal to be voted on * `index` Proposal index * `approve` Represents a `for` or `against` vote

___


## session

### setKeys(keys: `Keys`, proof: `Bytes`)
- **interface**: api.tx.session.setKeys
- **summary**: Sets the session key(s) of the function caller to `key`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session.  The dispatch origin of this function must be signed.  # <weight> - O(log n) in number of accounts. - One extra DB entry. # </weight>

___


## simpleToken

### approve(did: `IdentityId`, ticker: `Ticker`, spender_did: `IdentityId`, value: `Balance`)
- **interface**: api.tx.simpleToken.approve
- **summary**: Approve another identity to transfer tokens on behalf of the caller

### createToken(did: `IdentityId`, ticker: `Ticker`, total_supply: `Balance`)
- **interface**: api.tx.simpleToken.createToken
- **summary**: Create a new token and mint a balance to the issuing identity

### transfer(did: `IdentityId`, ticker: `Ticker`, to_did: `IdentityId`, amount: `Balance`)
- **interface**: api.tx.simpleToken.transfer
- **summary**: Transfer tokens to another identity

### transferFrom(did: `IdentityId`, ticker: `Ticker`, from_did: `IdentityId`, to_did: `IdentityId`, amount: `Balance`)
- **interface**: api.tx.simpleToken.transferFrom
- **summary**: Transfer tokens to another identity using the approval mechanic

___


## staking

### addPotentialValidator(controller: `AccountId`)
- **interface**: api.tx.staking.addPotentialValidator
- **summary**: Governance committee on 2/3 rds majority can introduce a new potential validator to the pool of validators. Staking module uses `PermissionedValidators` to ensure validators have completed KYB compliance and considers them for validation.

### bond(controller: `Address`, value: `Compact<BalanceOf>`, payee: `RewardDestination`)
- **interface**: api.tx.staking.bond
- **summary**: Take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it.  `value` must be more than the `minimum_balance` specified by `T::Currency`.  The dispatch origin for this call must be _Signed_ by the stash account.  # <weight> - Independent of the arguments. Moderate complexity. - O(1). - Three extra DB entries.  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless the `origin` falls below _existential deposit_ and gets removed as dust. # </weight>

### bondExtra(max_additional: `Compact<BalanceOf>`)
- **interface**: api.tx.staking.bondExtra
- **summary**: Add some extra amount that have appeared in the stash `free_balance` into the balance up for staking.  Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added.  The dispatch origin for this call must be _Signed_ by the stash, not the controller.  # <weight> - Independent of the arguments. Insignificant complexity. - O(1). - One DB entry. # </weight>

### cancelDeferredSlash(era: `EraIndex`, slash_indices: `Vec<u32>`)
- **interface**: api.tx.staking.cancelDeferredSlash
- **summary**: Cancel enactment of a deferred slash. Can be called by either the root origin or the `T::SlashCancelOrigin`. passing the era and indices of the slashes for that era to kill.  # <weight> - One storage write. # </weight>

### chill()
- **interface**: api.tx.staking.chill
- **summary**: Declare no desire to either validate or nominate.  Effects will be felt at the beginning of the next era.  The dispatch origin for this call must be _Signed_ by the controller, not the stash.  # <weight> - Independent of the arguments. Insignificant complexity. - Contains one read. - Writes are limited to the `origin` account key. # </weight>

### complianceFailed(controller: `AccountId`)
- **interface**: api.tx.staking.complianceFailed
- **summary**: Governance committee on 2/3 rds majority can update the compliance status of a validator as `Pending`.

### compliancePassed(controller: `AccountId`)
- **interface**: api.tx.staking.compliancePassed
- **summary**: Governance committee on 2/3 rds majority can update the compliance status of a validator as `Active`.

### forceNewEra()
- **interface**: api.tx.staking.forceNewEra
- **summary**: Force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour.  # <weight> - No arguments. # </weight>

### forceNewEraAlways()
- **interface**: api.tx.staking.forceNewEraAlways
- **summary**: Force there to be a new era at the end of sessions indefinitely.  # <weight> - One storage write # </weight>

### forceNoEras()
- **interface**: api.tx.staking.forceNoEras
- **summary**: Force there to be no new eras indefinitely.  # <weight> - No arguments. # </weight>

### forceUnstake(stash: `AccountId`)
- **interface**: api.tx.staking.forceUnstake
- **summary**: Force a current staker to become completely unstaked, immediately.

### nominate(targets: `Vec<Address>`)
- **interface**: api.tx.staking.nominate
- **summary**: Declare the desire to nominate `targets` for the origin controller.  Effects will be felt at the beginning of the next era.  The dispatch origin for this call must be _Signed_ by the controller, not the stash.  # <weight> - The transaction's complexity is proportional to the size of `targets`, which is capped at `MAX_NOMINATIONS`. - It also depends upon the no. of claim issuers for a given stash account. - Both the reads and writes follow a similar pattern. # </weight>

### removeValidator(controller: `AccountId`)
- **interface**: api.tx.staking.removeValidator
- **summary**: Remove a validator from the pool of validators. Effects are known in the next session. Staking module checks `PermissionedValidators` to ensure validators have completed KYB compliance

### setController(controller: `Address`)
- **interface**: api.tx.staking.setController
- **summary**: (Re-)set the controller of a stash.  Effects will be felt at the beginning of the next era.  The dispatch origin for this call must be _Signed_ by the stash, not the controller.  # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key. # </weight>

### setInvulnerables(validators: `Vec<AccountId>`)
- **interface**: api.tx.staking.setInvulnerables
- **summary**: Set the validators who cannot be slashed (if any).

### setPayee(payee: `RewardDestination`)
- **interface**: api.tx.staking.setPayee
- **summary**: (Re-)set the payment target for a controller.  Effects will be felt at the beginning of the next era.  The dispatch origin for this call must be _Signed_ by the controller, not the stash.  # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key. # </weight>

### setValidatorCount(new: `Compact<u32>`)
- **interface**: api.tx.staking.setValidatorCount
- **summary**: The ideal number of validators.

### unbond(value: `Compact<BalanceOf>`)
- **interface**: api.tx.staking.unbond
- **summary**: Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount.  Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer.  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible).  The dispatch origin for this call must be _Signed_ by the controller, not the stash.  See also [`Call::withdraw_unbonded`].  # <weight> - Independent of the arguments. Limited but potentially exploitable complexity. - Contains a limited number of reads. - Each call (requires the remainder of the bonded balance to be above `minimum_balance`) will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage. The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`. - One DB entry. </weight>

### validate(prefs: `ValidatorPrefs`)
- **interface**: api.tx.staking.validate
- **summary**: Declare the desire to validate for the origin controller.  Effects will be felt at the beginning of the next era.  The dispatch origin for this call must be _Signed_ by the controller, not the stash.  # <weight> - Independent of the arguments. Insignificant complexity. - Contains a limited number of reads. - Writes are limited to the `origin` account key. # </weight>

### validateKycExpiryNominators(targets: `Vec<AccountId>`)
- **interface**: api.tx.staking.validateKycExpiryNominators
- **summary**: Validate the nominators KYC expiry time  If an account from a given set of address is nominating then check the KYC expiry time of it and if it is expired then the account should be unbonded and removed from the nominating process.  #<weight> - Depends on passed list of AccountId - Depends on the no. of claim issuers an accountId has for the KYC expiry #</weight>

### withdrawUnbonded()
- **interface**: api.tx.staking.withdrawUnbonded
- **summary**: Remove any unlocked chunks from the `unlocking` queue from our management.  This essentially frees up that balance to be used by the stash account to do whatever it wants.  The dispatch origin for this call must be _Signed_ by the controller, not the stash.  See also [`Call::unbond`].  # <weight> - Could be dependent on the `origin` argument and how much `unlocking` chunks exist. It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is indirectly user-controlled. See [`unbond`] for more detail. - Contains a limited number of reads, yet the size of which could be large based on `ledger`. - Writes are limited to the `origin` account key. # </weight>

___


## stoCapped

### buyTokens(did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`, value: `Balance`)
- **interface**: api.tx.stoCapped.buyTokens
- **summary**: Used to buy tokens  # Arguments * `origin` Signing key of the investor * `did` DID of the investor * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO investor wants to invest in * `value` Amount of POLY wants to invest in

### buyTokensBySimpleToken(did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`, value: `Balance`, simple_token_ticker: `Ticker`)
- **interface**: api.tx.stoCapped.buyTokensBySimpleToken
- **summary**: Used to buy tokens using stable coins  # Arguments * `origin` Signing key of the investor * `did` DID of the investor * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO investor wants to invest in * `value` Amount of POLY wants to invest in * `simple_token_ticker` Ticker of the simple token

### launchSto(did: `IdentityId`, ticker: `Ticker`, beneficiary_did: `IdentityId`, cap: `Balance`, rate: `u128`, start_date: `Moment`, end_date: `Moment`, simple_token_ticker: `Ticker`)
- **interface**: api.tx.stoCapped.launchSto
- **summary**: Used to initialize the STO for a given asset  # Arguments * `origin` Signing key of the token owner who wants to initialize the sto * `did` DID of the token owner * `ticker` Ticker of the token * `beneficiary_did` DID which holds all the funds collected * `cap` Total amount of tokens allowed for sale * `rate` Rate of asset in terms of native currency * `start_date` Unix timestamp at when STO starts * `end_date` Unix timestamp at when STO ends * `simple_token_ticker` Ticker of the simple token

### modifyAllowedTokens(did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`, simple_token_ticker: `Ticker`, modify_status: `bool`)
- **interface**: api.tx.stoCapped.modifyAllowedTokens
- **summary**: Modify the list of allowed tokens (stable coins) corresponds to given token/asset  # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO investor wants to invest in. * `simple_token_ticker` Ticker of the stable coin * `modify_status` Boolean to know whether the provided simple token ticker will be used or not.

### pauseSto(did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`)
- **interface**: api.tx.stoCapped.pauseSto
- **summary**: Pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get freezed like buy_tokens  # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO needs to paused

### unpauseSto(did: `IdentityId`, ticker: `Ticker`, sto_id: `u32`)
- **interface**: api.tx.stoCapped.unpauseSto
- **summary**: Un-pause the STO, Can only be called by the token owner By doing this every operations on given sto_id would get un freezed.  # Arguments * `origin` Signing key of the token owner * `did` DID of the token owner * `ticker` Ticker of the token * `sto_id` A unique identifier to know which STO needs to un paused

___


## sudo

### setKey(new: `Address`)
- **interface**: api.tx.sudo.setKey
- **summary**: Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.  The dispatch origin for this call must be _Signed_.  # <weight> - O(1). - Limited storage reads. - One DB change. # </weight>

### sudo(proposal: `Proposal`)
- **interface**: api.tx.sudo.sudo
- **summary**: Authenticates the sudo key and dispatches a function call with `Root` origin.  The dispatch origin for this call must be _Signed_.  # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution. # </weight>

### sudoAs(who: `Address`, proposal: `Proposal`)
- **interface**: api.tx.sudo.sudoAs
- **summary**: Authenticates the sudo key and dispatches a function call with `Signed` origin from a given account.  The dispatch origin for this call must be _Signed_.  # <weight> - O(1). - Limited storage reads. - One DB write (event). - Unknown weight of derivative `proposal` execution. # </weight>

___


## system

### fillBlock()
- **interface**: api.tx.system.fillBlock
- **summary**: A big dispatch that will disallow any other transaction to be included.

### killPrefix(prefix: `Key`)
- **interface**: api.tx.system.killPrefix
- **summary**: Kill all storage items with a key that starts with the given prefix.

### killStorage(keys: `Vec<Key>`)
- **interface**: api.tx.system.killStorage
- **summary**: Kill some items from storage.

### remark(_remark: `Bytes`)
- **interface**: api.tx.system.remark
- **summary**: Make some on-chain remark.

### setCode(new: `Bytes`)
- **interface**: api.tx.system.setCode
- **summary**: Set the new code.

### setHeapPages(pages: `u64`)
- **interface**: api.tx.system.setHeapPages
- **summary**: Set the number of pages in the WebAssembly environment's heap.

### setStorage(items: `Vec<KeyValue>`)
- **interface**: api.tx.system.setStorage
- **summary**: Set some items of storage.

___


## timestamp

### set(now: `Compact<Moment>`)
- **interface**: api.tx.timestamp.set
- **summary**: Set the current time.  This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time.  The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`.  The dispatch origin for this call must be `Inherent`.

___


## treasury

### approveProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: api.tx.treasury.approveProposal
- **summary**: Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned.  # <weight> - O(1). - Limited storage reads. - One DB change. # </weight>

### proposeSpend(value: `Compact<BalanceOf>`, beneficiary: `Address`)
- **interface**: api.tx.treasury.proposeSpend
- **summary**: Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded.  # <weight> - O(1). - Limited storage reads. - One DB change, one extra DB entry. # </weight>

### rejectProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: api.tx.treasury.rejectProposal
- **summary**: Reject a proposed spend. The original deposit will be slashed.  # <weight> - O(1). - Limited storage reads. - One DB clear. # </weight>

___


## voting

### addBallot(did: `IdentityId`, ticker: `Ticker`, ballot_name: `Bytes`, ballot_details: `Ballot`)
- **interface**: api.tx.voting.addBallot
- **summary**: Adds a ballot  # Arguments * `did` - DID of the token owner. Sender must be a signing key or master key of this DID * `ticker` - Ticker of the token for which ballot is to be created * `ballot_name` - Name of the ballot * `ballot_details` - Other details of the ballot

### cancelBallot(did: `IdentityId`, ticker: `Ticker`, ballot_name: `Bytes`)
- **interface**: api.tx.voting.cancelBallot
- **summary**: Cancels a vote by setting it as expired  # Arguments * `did` - DID of the token owner. Sender must be a signing key or master key of this DID * `ticker` - Ticker of the token for which ballot is to be cancelled * `ballot_name` - Name of the ballot

### vote(did: `IdentityId`, ticker: `Ticker`, ballot_name: `Bytes`, votes: `Vec<Balance>`)
- **interface**: api.tx.voting.vote
- **summary**: Casts a vote  # Arguments * `did` - DID of the voter. Sender must be a signing key or master key of this DID * `ticker` - Ticker of the token for which vote is to be cast * `ballot_name` - Name of the ballot * `votes` - The actual vote to be cast
