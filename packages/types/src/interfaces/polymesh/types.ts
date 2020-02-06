// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, H256, H512, bool, u16, u32, u64, u8 } from '@polkadot/types/primitive';
import { Balance, Call, Hash, Moment, Signature } from '@polkadot/types/interfaces/runtime';

/** @name AccountKey */
export interface AccountKey extends Uint8Array, Codec {}

/** @name AssetRule */
export interface AssetRule extends Struct {
  readonly sender_rules: Vec<RuleData>;
  readonly receiver_rules: Vec<RuleData>;
}

/** @name AssetType */
export interface AssetType extends Enum {
  readonly isEquity: boolean;
  readonly isDebt: boolean;
  readonly isCommodity: boolean;
  readonly isStructuredProduct: boolean;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
}

/** @name Authorization */
export interface Authorization extends Struct {
  readonly authorization_data: AuthorizationData;
  readonly authorized_by: IdentityId;
  readonly expiry: Option<Moment>;
  readonly next_authorization: u64;
  readonly previous_authorization: u64;
}

/** @name AuthorizationData */
export interface AuthorizationData extends Enum {
  readonly isAttestMasterKeyRotation: boolean;
  readonly asAttestMasterKeyRotation: IdentityId;
  readonly isRotateMasterKey: boolean;
  readonly asRotateMasterKey: IdentityId;
  readonly isTransferTicker: boolean;
  readonly asTransferTicker: Ticker;
  readonly isAddMultiSigSigner: boolean;
  readonly isTransferTokenOwnership: boolean;
  readonly asTransferTokenOwnership: Ticker;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
  readonly isNoData: boolean;
}

/** @name AuthorizationNonce */
export interface AuthorizationNonce extends u64 {}

/** @name Ballot */
export interface Ballot extends Struct {
  readonly checkpoint_id: u64;
  readonly voting_start: Moment;
  readonly voting_end: Moment;
  readonly motions: Vec<Motion>;
}

/** @name Claim */
export interface Claim extends Struct {
  readonly issuance_date: Moment;
  readonly expiry: Moment;
  readonly claim_value: ClaimValue;
}

/** @name ClaimMetaData */
export interface ClaimMetaData extends Struct {
  readonly claim_key: Bytes;
  readonly claim_issuer: IdentityId;
}

/** @name ClaimRecord */
export interface ClaimRecord extends Struct {
  readonly did: IdentityId;
  readonly claim_key: Bytes;
  readonly expiry: Moment;
  readonly claim_value: ClaimValue;
}

/** @name ClaimValue */
export interface ClaimValue extends Struct {
  readonly data_type: DataTypes;
  readonly value: Bytes;
}

/** @name Compliance */
export interface Compliance extends Enum {
  readonly isPending: boolean;
  readonly isActive: boolean;
}

/** @name Counter */
export interface Counter extends u64 {}

/** @name DataTypes */
export interface DataTypes extends Enum {
  readonly isU8: boolean;
  readonly isU16: boolean;
  readonly isU32: boolean;
  readonly isU64: boolean;
  readonly isU128: boolean;
  readonly isBool: boolean;
  readonly isVecU8: boolean;
}

/** @name DidRecord */
export interface DidRecord extends Struct {
  readonly roles: Vec<IdentityRole>;
  readonly master_key: AccountKey;
  readonly signing_items: Vec<SigningItem>;
}

/** @name Dividend */
export interface Dividend extends Struct {
  readonly amount: Balance;
  readonly active: bool;
  readonly maturates_at: Option<u64>;
  readonly expires_at: Option<u64>;
  readonly payout_currency: Option<Bytes>;
  readonly checkpoint_id: u64;
}

/** @name Document */
export interface Document extends Struct {
  readonly name: Bytes;
  readonly uri: Bytes;
  readonly hash: Bytes;
}

/** @name FeeOf */
export interface FeeOf extends Balance {}

/** @name IdentifierType */
export interface IdentifierType extends Enum {
  readonly isIsin: boolean;
  readonly isCusip: boolean;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
}

/** @name IdentityId */
export interface IdentityId extends H256 {}

/** @name IdentityRole */
export interface IdentityRole extends Enum {
  readonly isIssuer: boolean;
  readonly isSimpleTokenIssuer: boolean;
  readonly isValidator: boolean;
  readonly isClaimIssuer: boolean;
  readonly isInvestor: boolean;
  readonly isNodeRunner: boolean;
  readonly isPm: boolean;
  readonly isKycamlClaimIssuer: boolean;
  readonly isAccreditedInvestorClaimIssuer: boolean;
  readonly isVerifiedIdentityClaimIssuer: boolean;
}

/** @name Investment */
export interface Investment extends Struct {
  readonly investor_did: IdentityId;
  readonly amount_paid: Balance;
  readonly tokens_purchased: Balance;
  readonly last_purchase_date: Moment;
}

/** @name Link */
export interface Link extends Struct {
  readonly link_data: LinkData;
  readonly expiry: Option<Moment>;
  readonly next_link: u64;
  readonly previous_link: u64;
}

/** @name LinkData */
export interface LinkData extends Enum {
  readonly isTickerOwned: boolean;
  readonly asTickerOwned: Ticker;
  readonly isTokenOwned: boolean;
  readonly asTokenOwned: Ticker;
}

/** @name LinkedKeyInfo */
export interface LinkedKeyInfo extends Enum {
  readonly isUnique: boolean;
  readonly asUnique: IdentityId;
  readonly isGroup: boolean;
  readonly asGroup: Vec<IdentityId>;
}

/** @name MIP */
export interface MIP extends Struct {
  readonly index: MipsIndex;
  readonly proposal: Call;
}

/** @name MipsIndex */
export interface MipsIndex extends u32 {}

/** @name MipsMetadata */
export interface MipsMetadata extends Struct {
  readonly index: u32;
  readonly end: u64;
  readonly proposal_hash: Hash;
}

/** @name MipsPriority */
export interface MipsPriority extends Enum {
  readonly isHigh: boolean;
  readonly isNormal: boolean;
}

/** @name Motion */
export interface Motion extends Struct {
  readonly title: Bytes;
  readonly info_link: Bytes;
  readonly choices: Vec<Bytes>;
}

/** @name OffChainSignature */
export interface OffChainSignature extends H512 {}

/** @name Operators */
export interface Operators extends Enum {
  readonly isEqualTo: boolean;
  readonly isNotEqualTo: boolean;
  readonly isLessThan: boolean;
  readonly isGreaterThan: boolean;
  readonly isLessOrEqualTo: boolean;
  readonly isGreaterOrEqualTo: boolean;
}

/** @name Permission */
export interface Permission extends Enum {
  readonly isFull: boolean;
  readonly isAdmin: boolean;
  readonly isOperator: boolean;
  readonly isSpendFunds: boolean;
}

/** @name PermissionedValidator */
export interface PermissionedValidator extends Struct {
  readonly compliance: Compliance;
}

/** @name PolymeshReferendumInfo */
export interface PolymeshReferendumInfo extends Struct {
  readonly index: MipsIndex;
  readonly priority: MipsPriority;
  readonly proposal_hash: Hash;
}

/** @name PolymeshVotes */
export interface PolymeshVotes extends Struct {
  readonly index: u32;
  readonly ayes: Vec<ITuple<[IdentityId, Balance]>>;
  readonly nays: Vec<ITuple<[IdentityId, Balance]>>;
}

/** @name PreAuthorizedKeyInfo */
export interface PreAuthorizedKeyInfo extends Struct {
  readonly target_id: IdentityId;
  readonly signing_item: SigningItem;
}

/** @name ProportionMatch */
export interface ProportionMatch extends Enum {
  readonly isAtLeast: boolean;
  readonly isMoreThan: boolean;
}

/** @name RuleData */
export interface RuleData extends Struct {
  readonly key: Bytes;
  readonly value: Bytes;
  readonly trusted_issuers: Vec<IdentityId>;
  readonly operator: Operators;
}

/** @name SecurityToken */
export interface SecurityToken extends Struct {
  readonly name: Bytes;
  readonly total_supply: Balance;
  readonly owner_did: IdentityId;
  readonly divisible: bool;
  readonly asset_type: AssetType;
}

/** @name SignData */
export interface SignData extends Struct {
  readonly custodian_did: IdentityId;
  readonly holder_did: IdentityId;
  readonly ticker: Ticker;
  readonly value: Balance;
  readonly nonce: u16;
}

/** @name Signer */
export interface Signer extends Enum {
  readonly isIdentity: boolean;
  readonly asIdentity: IdentityId;
  readonly isAccountKey: boolean;
  readonly asAccountKey: AccountKey;
}

/** @name SignerType */
export interface SignerType extends Enum {
  readonly isExternal: boolean;
  readonly isIdentity: boolean;
  readonly isMultiSig: boolean;
  readonly isRelayer: boolean;
}

/** @name SigningItem */
export interface SigningItem extends Struct {
  readonly signer: Signer;
  readonly signer_type: SignerType;
  readonly permissions: Vec<Permission>;
}

/** @name SigningItemWithAuth */
export interface SigningItemWithAuth extends Struct {
  readonly signing_item: SigningItem;
  readonly auth_signature: Signature;
}

/** @name SimpleTokenRecord */
export interface SimpleTokenRecord extends Struct {
  readonly ticker: Ticker;
  readonly total_supply: Balance;
  readonly owner_did: IdentityId;
}

/** @name SmartExtension */
export interface SmartExtension extends Struct {
  readonly extension_type: SmartExtensionType;
  readonly extension_name: Bytes;
  readonly extension_id: IdentityId;
  readonly is_archive: bool;
}

/** @name SmartExtensionType */
export interface SmartExtensionType extends Enum {
  readonly isTransferManager: boolean;
  readonly isOfferings: boolean;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
}

/** @name STO */
export interface STO extends Struct {
  readonly beneficiary_did: IdentityId;
  readonly cap: Balance;
  readonly sold: Balance;
  readonly rate: u64;
  readonly start_date: Moment;
  readonly end_date: Moment;
  readonly active: bool;
}

/** @name TargetIdAuthorization */
export interface TargetIdAuthorization extends Struct {
  readonly target_id: IdentityId;
  readonly nonce: u64;
  readonly expires_at: Moment;
}

/** @name Ticker */
export interface Ticker extends Uint8Array, Codec {}

/** @name TickerRegistration */
export interface TickerRegistration extends Struct {
  readonly owner: IdentityId;
  readonly expiry: Option<Moment>;
}

/** @name TickerRegistrationConfig */
export interface TickerRegistrationConfig extends Struct {
  readonly max_ticker_length: u8;
  readonly registration_length: Option<Moment>;
}

/** @name TickerTransferApproval */
export interface TickerTransferApproval extends Struct {
  readonly authorized_by: IdentityId;
  readonly next_ticker: Option<Ticker>;
  readonly previous_ticker: Option<Ticker>;
}
