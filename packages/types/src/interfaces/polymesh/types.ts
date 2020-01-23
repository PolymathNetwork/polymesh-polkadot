// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, H512, bool, u128, u16, u32, u64 } from '@polkadot/types/primitive';
import { Hash, Signature } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface AssetRule extends Struct {
  /** Vec<RuleData> */
  readonly sender_rules: Vec<RuleData>;
  /** Vec<RuleData> */
  readonly receiver_rules: Vec<RuleData>;
}

/** Struct */
export interface Authorization extends Struct {
  /** AuthorizationData */
  readonly authorization_data: AuthorizationData;
  /** IdentityId */
  readonly authorized_by: IdentityId;
  /** Option<Moment> */
  readonly expiry: Option<Moment>;
  /** u64 */
  readonly next_authorization: u64;
  /** u64 */
  readonly previous_authorization: u64;
}

/** Enum */
export interface AuthorizationData extends Enum {
  /** 0:: TransferTicker(Bytes) */
  readonly isTransferTicker: boolean;
  /** Bytes */
  readonly asTransferTicker: Bytes;
  /** 1:: Custom(Bytes) */
  readonly isCustom: boolean;
  /** Bytes */
  readonly asCustom: Bytes;
}

/** u64 */
export interface AuthorizationNonce extends u64 {}

/** u128 */
export interface Balance extends u128 {}

/** Struct */
export interface Ballot extends Struct {
  /** u64 */
  readonly checkpoint_id: u64;
  /** Moment */
  readonly voting_start: Moment;
  /** Moment */
  readonly voting_end: Moment;
  /** Vec<Motion> */
  readonly motions: Vec<Motion>;
}

/** Struct */
export interface Claim extends Struct {
  /** Moment */
  readonly issuance_date: Moment;
  /** Moment */
  readonly expiry: Moment;
  /** ClaimValue */
  readonly claim_value: ClaimValue;
}

/** Struct */
export interface ClaimMetaData extends Struct {
  /** Bytes */
  readonly claim_key: Bytes;
  /** IdentityId */
  readonly claim_issuer: IdentityId;
}

/** Struct */
export interface ClaimRecord extends Struct {
  /** IdentityId */
  readonly did: IdentityId;
  /** Bytes */
  readonly claim_key: Bytes;
  /** Moment */
  readonly expiry: Moment;
  /** ClaimValue */
  readonly claim_value: ClaimValue;
}

/** Struct */
export interface ClaimValue extends Struct {
  /** DataTypes */
  readonly data_type: DataTypes;
  /** Bytes */
  readonly value: Bytes;
}

/** Enum */
export interface Compliance extends Enum {
  /** 0:: Pending */
  readonly isPending: boolean;
  /** 1:: Active */
  readonly isActive: boolean;
}

/** Enum */
export interface DataTypes extends Enum {
  /** 0:: U8 */
  readonly isU8: boolean;
  /** 1:: U16 */
  readonly isU16: boolean;
  /** 2:: U32 */
  readonly isU32: boolean;
  /** 3:: U64 */
  readonly isU64: boolean;
  /** 4:: U128 */
  readonly isU128: boolean;
  /** 5:: Bool */
  readonly isBool: boolean;
  /** 6:: VecU8 */
  readonly isVecU8: boolean;
}

/** Struct */
export interface DidRecord extends Struct {
  /** Vec<IdentityRole> */
  readonly roles: Vec<IdentityRole>;
  /** Key */
  readonly master_key: Key;
  /** Vec<SigningItem> */
  readonly signing_items: Vec<SigningItem>;
}

/** Struct */
export interface Dividend extends Struct {
  /** Balance */
  readonly amount: Balance;
  /** bool */
  readonly active: bool;
  /** Option<u64> */
  readonly maturates_at: Option<u64>;
  /** Option<u64> */
  readonly expires_at: Option<u64>;
  /** Option<Bytes> */
  readonly payout_currency: Option<Bytes>;
  /** u64 */
  readonly checkpoint_id: u64;
}

/** Balance */
export interface FeeOf extends Balance {}

/** Uint8Array, Codec */
export interface IdentityId extends Uint8Array, Codec {}

/** Enum */
export interface IdentityRole extends Enum {
  /** 0:: Issuer */
  readonly isIssuer: boolean;
  /** 1:: SimpleTokenIssuer */
  readonly isSimpleTokenIssuer: boolean;
  /** 2:: Validator */
  readonly isValidator: boolean;
  /** 3:: ClaimIssuer */
  readonly isClaimIssuer: boolean;
  /** 4:: Investor */
  readonly isInvestor: boolean;
  /** 5:: NodeRunner */
  readonly isNodeRunner: boolean;
  /** 6:: PM */
  readonly isPm: boolean;
  /** 7:: KYCAMLClaimIssuer */
  readonly isKycamlClaimIssuer: boolean;
  /** 8:: AccreditedInvestorClaimIssuer */
  readonly isAccreditedInvestorClaimIssuer: boolean;
  /** 9:: VerifiedIdentityClaimIssuer */
  readonly isVerifiedIdentityClaimIssuer: boolean;
}

/** Struct */
export interface Investment extends Struct {
  /** IdentityId */
  readonly investor_did: IdentityId;
  /** Balance */
  readonly amount_paid: Balance;
  /** Balance */
  readonly tokens_purchased: Balance;
  /** Moment */
  readonly last_purchase_date: Moment;
}

/** Struct */
export interface Investor extends Struct {
  /** IdentityId */
  readonly did: IdentityId;
  /** u16 */
  readonly access_level: u16;
  /** bool */
  readonly active: bool;
  /** u16 */
  readonly jurisdiction: u16;
}

/** Struct */
export interface Issuer extends Struct {
  /** IdentityId */
  readonly did: IdentityId;
  /** u16 */
  readonly access_level: u16;
  /** bool */
  readonly active: bool;
}

/** Uint8Array, Codec */
export interface Key extends Uint8Array, Codec {}

/** Struct */
export interface Link extends Struct {
  /** LinkData */
  readonly link_data: LinkData;
  /** Option<Moment> */
  readonly expiry: Option<Moment>;
  /** u64 */
  readonly next_link: u64;
  /** u64 */
  readonly previous_link: u64;
}

/** Enum */
export interface LinkData extends Enum {
  /** 0:: TickerOwned(Bytes) */
  readonly isTickerOwned: boolean;
  /** Bytes */
  readonly asTickerOwned: Bytes;
  /** 1:: TokenOwned(Bytes) */
  readonly isTokenOwned: boolean;
  /** Bytes */
  readonly asTokenOwned: Bytes;
}

/** Enum */
export interface LinkedKeyInfo extends Enum {
  /** 0:: Unique(IdentityId) */
  readonly isUnique: boolean;
  /** IdentityId */
  readonly asUnique: IdentityId;
  /** 1:: Group(Vec<IdentityId>) */
  readonly isGroup: boolean;
  /** Vec<IdentityId> */
  readonly asGroup: Vec<IdentityId>;
}

/** u32 */
export interface MipsIndex extends u32 {}

/** Struct */
export interface MipsMetadata extends Struct {
  /** u32 */
  readonly index: u32;
  /** u64 */
  readonly end: u64;
  /** Hash */
  readonly proposal_hash: Hash;
}

/** u64 */
export interface Moment extends u64 {}

/** Struct */
export interface Motion extends Struct {
  /** Bytes */
  readonly title: Bytes;
  /** Bytes */
  readonly info_link: Bytes;
  /** Vec<Bytes> */
  readonly choices: Vec<Bytes>;
}

/** H512 */
export interface OffChainSignature extends H512 {}

/** Enum */
export interface Operators extends Enum {
  /** 0:: EqualTo */
  readonly isEqualTo: boolean;
  /** 1:: NotEqualTo */
  readonly isNotEqualTo: boolean;
  /** 2:: LessThan */
  readonly isLessThan: boolean;
  /** 3:: GreaterThan */
  readonly isGreaterThan: boolean;
  /** 4:: LessOrEqualTo */
  readonly isLessOrEqualTo: boolean;
  /** 5:: GreaterOrEqualTo */
  readonly isGreaterOrEqualTo: boolean;
}

/** Enum */
export interface Permission extends Enum {
  /** 0:: Full */
  readonly isFull: boolean;
  /** 1:: Admin */
  readonly isAdmin: boolean;
  /** 2:: Operator */
  readonly isOperator: boolean;
  /** 3:: SpendFunds */
  readonly isSpendFunds: boolean;
}

/** Struct */
export interface PermissionedValidator extends Struct {
  /** Compliance */
  readonly compliance: Compliance;
}

/** Struct */
export interface PreAuthorizedKeyInfo extends Struct {
  /** IdentityId */
  readonly target_id: IdentityId;
  /** SigningItem */
  readonly signing_item: SigningItem;
}

/** Struct */
export interface Restriction extends Struct {
  /** Bytes */
  readonly name: Bytes;
  /** u32 */
  readonly token_id: u32;
  /** bool */
  readonly can_transfer: bool;
}

/** Struct */
export interface RuleData extends Struct {
  /** Bytes */
  readonly key: Bytes;
  /** Bytes */
  readonly value: Bytes;
  /** Vec<IdentityId> */
  readonly trusted_issuers: Vec<IdentityId>;
  /** Operators */
  readonly operator: Operators;
}

/** Struct */
export interface SecurityToken extends Struct {
  /** Bytes */
  readonly name: Bytes;
  /** Balance */
  readonly total_supply: Balance;
  /** IdentityId */
  readonly owner_did: IdentityId;
  /** bool */
  readonly divisible: bool;
}

/** Struct */
export interface SignData extends Struct {
  /** IdentityId */
  readonly custodian_did: IdentityId;
  /** IdentityId */
  readonly holder_did: IdentityId;
  /** Bytes */
  readonly ticker: Bytes;
  /** Balance */
  readonly value: Balance;
  /** u16 */
  readonly nonce: u16;
}

/** Enum */
export interface Signer extends Enum {
  /** 0:: Identity(IdentityId) */
  readonly isIdentity: boolean;
  /** IdentityId */
  readonly asIdentity: IdentityId;
  /** 1:: Key(Key) */
  readonly isKey: boolean;
  /** Key */
  readonly asKey: Key;
}

/** Enum */
export interface SignerType extends Enum {
  /** 0:: External */
  readonly isExternal: boolean;
  /** 1:: Identity */
  readonly isIdentity: boolean;
  /** 2:: Multisig */
  readonly isMultisig: boolean;
  /** 3:: Relayer */
  readonly isRelayer: boolean;
}

/** Struct */
export interface SigningItem extends Struct {
  /** Signer */
  readonly signer: Signer;
  /** SignerType */
  readonly signer_type: SignerType;
  /** Vec<Permission> */
  readonly permissions: Vec<Permission>;
}

/** Struct */
export interface SigningItemWithAuth extends Struct {
  /** SigningItem */
  readonly signing_item: SigningItem;
  /** Signature */
  readonly auth_signature: Signature;
}

/** Struct */
export interface SimpleTokenRecord extends Struct {
  /** Bytes */
  readonly ticker: Bytes;
  /** Balance */
  readonly total_supply: Balance;
  /** IdentityId */
  readonly owner_did: IdentityId;
}

/** Struct */
export interface STO extends Struct {
  /** IdentityId */
  readonly beneficiary_did: IdentityId;
  /** Balance */
  readonly cap: Balance;
  /** Balance */
  readonly sold: Balance;
  /** u64 */
  readonly rate: u64;
  /** Moment */
  readonly start_date: Moment;
  /** Moment */
  readonly end_date: Moment;
  /** bool */
  readonly active: bool;
}

/** Struct */
export interface TargetIdAuthorization extends Struct {
  /** IdentityId */
  readonly target_id: IdentityId;
  /** u64 */
  readonly nonce: u64;
  /** Moment */
  readonly expires_at: Moment;
}

/** Struct */
export interface TickerRegistration extends Struct {
  /** IdentityId */
  readonly owner: IdentityId;
  /** Option<Moment> */
  readonly expiry: Option<Moment>;
}

/** Struct */
export interface TickerRegistrationConfig extends Struct {
  /** u32 */
  readonly max_ticker_length: u32;
  /** Option<Moment> */
  readonly registration_length: Option<Moment>;
}

/** Struct */
export interface TickerTransferApproval extends Struct {
  /** IdentityId */
  readonly authorized_by: IdentityId;
  /** Option<Bytes> */
  readonly next_ticker: Option<Bytes>;
  /** Option<Bytes> */
  readonly previous_ticker: Option<Bytes>;
}

/** u64 */
export interface TSMoment extends u64 {}

/** Struct */
export interface Votes extends Struct {
  /** u32 */
  readonly index: u32;
  /** Vec<ITuple<[IdentityId, Balance]>> */
  readonly ayes: Vec<ITuple<[IdentityId, Balance]>>;
  /** Vec<ITuple<[IdentityId, Balance]>> */
  readonly nays: Vec<ITuple<[IdentityId, Balance]>>;
}

/** Struct */
export interface Whitelist extends Struct {
  /** IdentityId */
  readonly investor_did: IdentityId;
  /** Moment */
  readonly canSendAfter: Moment;
  /** Moment */
  readonly canReceiveAfter: Moment;
}
