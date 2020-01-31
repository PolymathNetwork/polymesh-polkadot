export default { types: {
    "IdentityId":"H256",
    "Ticker": "[u8; 12]",
    "AssetType": {
        "_enum": {
            "Equity": "",
            "Debt": "",
            "Commodity": "",
            "StructuredProduct": "",
            "Custom": "Vec<u8>"
        }
    },
    "IdentifierType": {
        "_enum": {
            "Isin": "",
            "Cusip": "",
            "Custom": "Vec<u8>"
        }
    },
    "SecurityToken": {
        "name": "Vec<u8>",
        "total_supply": "Balance",
        "owner_did": "IdentityId",
        "divisible": "bool",
        "asset_type": "AssetType"
    },
    "LinkedKeyInfo": {
        "_enum": {
            "Unique": "IdentityId",
            "Group": "Vec<IdentityId>"
        }
    },
    "Key": "[u8;32]",
    "Permission": {
        "_enum": [
            "Full",
            "Admin",
            "Operator",
            "SpendFunds"
       ]
    },
    "Link": {
        "link_data": "LinkData",
        "expiry": "Option<Moment>",
        "next_link": "u64",
        "previous_link": "u64"
    },
    "LinkData": {
       "_enum": {
            "TickerOwned": "Ticker",
            "TokenOwned": "Ticker"
       }
    },
    "SignerType": {
        "_enum": [
            "External",
            "Identity",
            "MultiSig",
            "Relayer"
        ]
    },
    "Signer":{
       "_enum": {
            "Identity": "IdentityId",
            "Key": "Key"
        }
    },
    "SigningItem": {
        "signer": "Signer",
        "signer_type": "SignerType",
        "permissions": "Vec<Permission>"
    },
    "SigningItemWithAuth":{
        "signing_item": "SigningItem",
        "auth_signature": "Signature"
    },
    "IdentityRole": {
        "_enum": [
            "Issuer",
            "SimpleTokenIssuer",
            "Validator",
            "ClaimIssuer",
            "Investor",
            "NodeRunner",
            "PM",
            "KYCAMLClaimIssuer",
            "AccreditedInvestorClaimIssuer",
            "VerifiedIdentityClaimIssuer"
        ]
    },
    "PreAuthorizedKeyInfo": {
        "target_id": "IdentityId",
        "signing_item": "SigningItem"
    },
    "DidRecord": {
        "roles": "Vec<IdentityRole>",
        "master_key": "Key",
        "signing_items": "Vec<SigningItem>"
    },
    "Claim": {
        "issuance_date": "Moment",
        "expiry": "Moment",
        "claim_value": "ClaimValue"
    },
    "ClaimMetaData": {
        "claim_key": "Vec<u8>",
        "claim_issuer": "IdentityId"
    },
    "ClaimValue": {
        "data_type": "DataTypes",
        "value": "Vec<u8>"
    },
    "ClaimRecord": {
        "did": "IdentityId",
        "claim_key": "Vec<u8>",
        "expiry": "Moment",
        "claim_value": "ClaimValue"
    },
    "DataTypes": {
        "_enum": [
            "U8",
            "U16",
            "U32",
            "U64",
            "U128",
            "Bool",
            "VecU8"
        ]
    },
    "AssetRule": {
        "sender_rules": "Vec<RuleData>",
        "receiver_rules":"Vec<RuleData>"
    },
    "Operators": {
        "_enum": [
            "EqualTo",
            "NotEqualTo",
            "LessThan",
            "GreaterThan",
            "LessOrEqualTo",
            "GreaterOrEqualTo"
        ]
    },
    "RuleData": {
        "key": "Vec<u8>",
        "value": "Vec<u8>",
        "trusted_issuers": "Vec<IdentityId>",
        "operator": "Operators"
    },
    "STO": {
        "beneficiary_did": "IdentityId",
        "cap": "Balance",
        "sold": "Balance",
        "rate": "u64",
        "start_date": "Moment",
        "end_date": "Moment",
        "active": "bool"
    },
    "Investment": {
        "investor_did": "IdentityId",
        "amount_paid": "Balance",
        "tokens_purchased": "Balance",
        "last_purchase_date": "Moment"
    },
    "SimpleTokenRecord": {
        "ticker": "Ticker",
        "total_supply": "Balance",
        "owner_did": "IdentityId"
    },
    "FeeOf": "Balance",
    "Dividend": {
        "amount": "Balance",
        "active": "bool",
        "maturates_at": "Option<u64>",
        "expires_at": "Option<u64>",
        "payout_currency": "Option<Vec<u8>>",
        "checkpoint_id": "u64"
    },
    "TargetIdAuthorization": {
        "target_id": "IdentityId",
        "nonce": "u64",
        "expires_at": "Moment"
    },
    "TickerRegistration": {
        "owner": "IdentityId",
        "expiry": "Option<Moment>"
    },
    "TickerRegistrationConfig": {
        "max_ticker_length": "u8",
        "registration_length": "Option<Moment>"
    },
    "SignData": {
        "custodian_did": "IdentityId",
        "holder_did": "IdentityId",
        "ticker": "Ticker",
        "value": "Balance",
        "nonce": "u16"
    },
    "Motion": {
        "title": "Vec<u8>",
        "info_link": "Vec<u8>",
        "choices": "Vec<Vec<u8>>"
    },
    "Ballot": {
        "checkpoint_id": "u64",
        "voting_start": "Moment",
        "voting_end": "Moment",
        "motions": "Vec<Motion>"
    },
    "MipsMetadata": {
        "index": "u32",
        "end": "u64",
        "proposal_hash": "Hash"
    },
    "Votes": {
        "index": "u32",
        "ayes": "Vec<(IdentityId, Balance)>",
        "nays": "Vec<(IdentityId, Balance)>"
    },
    "MipsIndex": "u32",
    "MipsPriority": {
        "_enum": [
            "High",
            "Normal"
        ]
    },
    "MIP": {
        "index": "MipsIndex",
        "proposal":"Call"
    },
    "ReferendumInfo": {
        "index": "MipsIndex",
        "priority": "MipsPriority",
        "proposal_hash": "Hash"
    },
    "TickerTransferApproval": {
        "authorized_by": "IdentityId",
        "next_ticker": "Option<Ticker>",
        "previous_ticker": "Option<Ticker>"
    },
    "OffChainSignature": "H512",
    "PermissionedValidator": {
        "compliance": "Compliance"
    },
    "Authorization": {
        "authorization_data": "AuthorizationData",
        "authorized_by": "IdentityId",
        "expiry": "Option<Moment>",
        "next_authorization": "u64",
        "previous_authorization": "u64"
    },
    "AuthorizationData": {
        "_enum": {
            "AttestMasterKeyRotation": "IdentityId",
            "RotateMasterKey": "IdentityId",
            "TransferTicker": "Ticker",
            "AddMultiSigSigner": "",
            "TransferTokenOwnership": "Ticker",
            "Custom": "Vec<u8>",
            "NoData": ""
        }
    },
    "Compliance": {
        "_enum": [
            "Pending",
            "Active"
        ]
    },
    "ProportionMatch": {
        "_enum": [ 
            "AtLeast",
            "MoreThan"
        ]
    },
    "AuthorizationNonce": "u64",
    "Counter": "u64"
}
 }