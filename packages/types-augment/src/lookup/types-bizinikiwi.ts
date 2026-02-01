// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@pezkuwi/types/lookup';

import type { Data } from '@pezkuwi/types';
import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U256, U8aFixed, Vec, bool, i32, i64, u128, u16, u32, u64, u8 } from '@pezkuwi/types-codec';
import type { ITuple } from '@pezkuwi/types-codec/types';
import type { Vote } from '@pezkuwi/types/interfaces/elections';
import type { AccountId32, H160, H256, MultiAddress, RuntimeCall, RuntimeEvent } from '@pezkuwi/types/interfaces/runtime';

declare module '@pezkuwi/types/lookup' {
  /** @name PezspCoreCryptoAccountId32 (0) */
  interface PezspCoreCryptoAccountId32 extends AccountId32 {}

  /** @name PezframeSystemAccountInfo (3) */
  interface PezframeSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PezpalletBalancesAccountData;
  }

  /** @name PezpalletBalancesAccountData (5) */
  interface PezpalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name PezframeSupportDispatchPerDispatchClassWeight (9) */
  interface PezframeSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: PezspWeightsWeightV2Weight;
    readonly operational: PezspWeightsWeightV2Weight;
    readonly mandatory: PezspWeightsWeightV2Weight;
  }

  /** @name PezspWeightsWeightV2Weight (10) */
  interface PezspWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name PezspRuntimeDigest (15) */
  interface PezspRuntimeDigest extends Struct {
    readonly logs: Vec<PezspRuntimeDigestDigestItem>;
  }

  /** @name PezspRuntimeDigestDigestItem (17) */
  interface PezspRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name PezframeSystemEventRecord (20) */
  interface PezframeSystemEventRecord extends Struct {
    readonly phase: PezframeSystemPhase;
    readonly event: RuntimeEvent;
    readonly topics: Vec<H256>;
  }

  /** @name PezframeSystemEvent (22) */
  interface PezframeSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: PezframeSystemDispatchEventInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: PezspRuntimeDispatchError;
      readonly dispatchInfo: PezframeSystemDispatchEventInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: PezspCoreCryptoAccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isRejectedInvalidAuthorizedUpgrade: boolean;
    readonly asRejectedInvalidAuthorizedUpgrade: {
      readonly codeHash: H256;
      readonly error: PezspRuntimeDispatchError;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'UpgradeAuthorized' | 'RejectedInvalidAuthorizedUpgrade';
  }

  /** @name PezframeSystemDispatchEventInfo (23) */
  interface PezframeSystemDispatchEventInfo extends Struct {
    readonly weight: PezspWeightsWeightV2Weight;
    readonly class: PezframeSupportDispatchDispatchClass;
    readonly paysFee: PezframeSupportDispatchPays;
  }

  /** @name PezframeSupportDispatchDispatchClass (24) */
  interface PezframeSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name PezframeSupportDispatchPays (25) */
  interface PezframeSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name PezspRuntimeDispatchError (26) */
  interface PezspRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: PezspRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: PezspRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: PezspArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: PezspRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly isTrie: boolean;
    readonly asTrie: PezspRuntimeProvingTrieTrieError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed' | 'Trie';
  }

  /** @name PezspRuntimeModuleError (27) */
  interface PezspRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name PezspRuntimeTokenError (28) */
  interface PezspRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name PezspArithmeticArithmeticError (29) */
  interface PezspArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name PezspRuntimeTransactionalError (30) */
  interface PezspRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PezspRuntimeProvingTrieTrieError (31) */
  interface PezspRuntimeProvingTrieTrieError extends Enum {
    readonly isInvalidStateRoot: boolean;
    readonly isIncompleteDatabase: boolean;
    readonly isValueAtIncompleteKey: boolean;
    readonly isDecoderError: boolean;
    readonly isInvalidHash: boolean;
    readonly isDuplicateKey: boolean;
    readonly isExtraneousNode: boolean;
    readonly isExtraneousValue: boolean;
    readonly isExtraneousHashReference: boolean;
    readonly isInvalidChildReference: boolean;
    readonly isValueMismatch: boolean;
    readonly isIncompleteProof: boolean;
    readonly isRootMismatch: boolean;
    readonly isDecodeError: boolean;
    readonly type: 'InvalidStateRoot' | 'IncompleteDatabase' | 'ValueAtIncompleteKey' | 'DecoderError' | 'InvalidHash' | 'DuplicateKey' | 'ExtraneousNode' | 'ExtraneousValue' | 'ExtraneousHashReference' | 'InvalidChildReference' | 'ValueMismatch' | 'IncompleteProof' | 'RootMismatch' | 'DecodeError';
  }

  /** @name PezpalletUtilityEvent (32) */
  interface PezpalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: PezspRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: PezspRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isIfElseMainSuccess: boolean;
    readonly isIfElseFallbackCalled: boolean;
    readonly asIfElseFallbackCalled: {
      readonly mainError: PezspRuntimeDispatchError;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs' | 'IfElseMainSuccess' | 'IfElseFallbackCalled';
  }

  /** @name PezpalletIndicesEvent (35) */
  interface PezpalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly index: u32;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u32;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u32;
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDepositPoked: boolean;
    readonly asDepositPoked: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly index: u32;
      readonly oldDeposit: u128;
      readonly newDeposit: u128;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen' | 'DepositPoked';
  }

  /** @name PezpalletBalancesEvent (36) */
  interface PezpalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
      readonly amount: u128;
      readonly destinationStatus: PezframeSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTotalIssuanceForced: boolean;
    readonly asTotalIssuanceForced: {
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed' | 'TotalIssuanceForced';
  }

  /** @name PezframeSupportTokensMiscBalanceStatus (37) */
  interface PezframeSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PezpalletTransactionPaymentEvent (38) */
  interface PezpalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PezpalletAssetConversionTxPaymentEvent (39) */
  interface PezpalletAssetConversionTxPaymentEvent extends Enum {
    readonly isAssetTxFeePaid: boolean;
    readonly asAssetTxFeePaid: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
      readonly assetId: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly isAssetRefundFailed: boolean;
    readonly asAssetRefundFailed: {
      readonly nativeAmountKept: u128;
    } & Struct;
    readonly type: 'AssetTxFeePaid' | 'AssetRefundFailed';
  }

  /** @name PezframeSupportTokensFungibleUnionOfNativeOrWithId (40) */
  interface PezframeSupportTokensFungibleUnionOfNativeOrWithId extends Enum {
    readonly isNative: boolean;
    readonly isWithId: boolean;
    readonly asWithId: u32;
    readonly type: 'Native' | 'WithId';
  }

  /** @name PezpalletElectionProviderMultiPhaseEvent (41) */
  interface PezpalletElectionProviderMultiPhaseEvent extends Enum {
    readonly isSolutionStored: boolean;
    readonly asSolutionStored: {
      readonly compute: PezpalletElectionProviderMultiPhaseElectionCompute;
      readonly origin: Option<PezspCoreCryptoAccountId32>;
      readonly prevEjected: bool;
    } & Struct;
    readonly isElectionFinalized: boolean;
    readonly asElectionFinalized: {
      readonly compute: PezpalletElectionProviderMultiPhaseElectionCompute;
      readonly score: PezspNposElectionsElectionScore;
    } & Struct;
    readonly isElectionFailed: boolean;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly value: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly value: u128;
    } & Struct;
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PezpalletElectionProviderMultiPhasePhase;
      readonly to: PezpalletElectionProviderMultiPhasePhase;
      readonly round: u32;
    } & Struct;
    readonly type: 'SolutionStored' | 'ElectionFinalized' | 'ElectionFailed' | 'Rewarded' | 'Slashed' | 'PhaseTransitioned';
  }

  /** @name PezpalletElectionProviderMultiPhaseElectionCompute (42) */
  interface PezpalletElectionProviderMultiPhaseElectionCompute extends Enum {
    readonly isOnChain: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly isFallback: boolean;
    readonly isEmergency: boolean;
    readonly type: 'OnChain' | 'Signed' | 'Unsigned' | 'Fallback' | 'Emergency';
  }

  /** @name PezspNposElectionsElectionScore (44) */
  interface PezspNposElectionsElectionScore extends Struct {
    readonly minimalStake: u128;
    readonly sumStake: u128;
    readonly sumStakeSquared: u128;
  }

  /** @name PezpalletElectionProviderMultiPhasePhase (45) */
  interface PezpalletElectionProviderMultiPhasePhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly asUnsigned: ITuple<[bool, u32]>;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'Unsigned' | 'Emergency';
  }

  /** @name PezpalletStakingPezpalletEvent (47) */
  interface PezpalletStakingPezpalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly dest: PezpalletStakingRewardDestination;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashReported: boolean;
    readonly asSlashReported: {
      readonly validator: PezspCoreCryptoAccountId32;
      readonly fraction: u32;
      readonly slashEra: u32;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isStakersElected: boolean;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: PezspCoreCryptoAccountId32;
      readonly stash: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: PezspCoreCryptoAccountId32;
      readonly page: u32;
      readonly next: Option<u32>;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly prefs: PezpalletStakingValidatorPrefs;
    } & Struct;
    readonly isSnapshotVotersSizeExceeded: boolean;
    readonly asSnapshotVotersSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isSnapshotTargetsSizeExceeded: boolean;
    readonly asSnapshotTargetsSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isForceEra: boolean;
    readonly asForceEra: {
      readonly mode: PezpalletStakingForcing;
    } & Struct;
    readonly isControllerBatchDeprecated: boolean;
    readonly asControllerBatchDeprecated: {
      readonly failures: u32;
    } & Struct;
    readonly isCurrencyMigrated: boolean;
    readonly asCurrencyMigrated: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly forceWithdraw: u128;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'SlashReported' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra' | 'ControllerBatchDeprecated' | 'CurrencyMigrated';
  }

  /** @name PezpalletStakingRewardDestination (48) */
  interface PezpalletStakingRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: PezspCoreCryptoAccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PezpalletStakingValidatorPrefs (51) */
  interface PezpalletStakingValidatorPrefs extends Struct {
    readonly commission: Compact<u32>;
    readonly blocked: bool;
  }

  /** @name PezpalletStakingForcing (53) */
  interface PezpalletStakingForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PezpalletSessionEvent (54) */
  interface PezpalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isValidatorDisabled: boolean;
    readonly asValidatorDisabled: {
      readonly validator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isValidatorReenabled: boolean;
    readonly asValidatorReenabled: {
      readonly validator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'NewSession' | 'ValidatorDisabled' | 'ValidatorReenabled';
  }

  /** @name PezpalletDemocracyEvent (55) */
  interface PezpalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PezpalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly target: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: PezspCoreCryptoAccountId32;
      readonly refIndex: u32;
      readonly vote: PezpalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: PezspCoreCryptoAccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PezpalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PezpalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PezpalletDemocracyMetadataOwner;
      readonly owner: PezpalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PezpalletDemocracyVoteThreshold (56) */
  interface PezpalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PezpalletDemocracyVoteAccountVote (57) */
  interface PezpalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PezpalletDemocracyMetadataOwner (59) */
  interface PezpalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PezpalletCollectiveEvent (60) */
  interface PezpalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isProposalCostBurned: boolean;
    readonly asProposalCostBurned: {
      readonly proposalHash: H256;
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isProposalCostReleased: boolean;
    readonly asProposalCostReleased: {
      readonly proposalHash: H256;
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed' | 'Killed' | 'ProposalCostBurned' | 'ProposalCostReleased';
  }

  /** @name PezpalletElectionsPhragmenEvent (62) */
  interface PezpalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PezpalletMembershipEvent (65) */
  interface PezpalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PezpalletGrandpaEvent (66) */
  interface PezpalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[PezspConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name PezspConsensusGrandpaAppPublic (69) */
  interface PezspConsensusGrandpaAppPublic extends U8aFixed {}

  /** @name PezpalletTreasuryEvent (70) */
  interface PezpalletTreasuryEvent extends Enum {
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly isAssetSpendApproved: boolean;
    readonly asAssetSpendApproved: {
      readonly index: u32;
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly amount: u128;
      readonly beneficiary: PezspCoreCryptoAccountId32;
      readonly validFrom: u32;
      readonly expireAt: u32;
    } & Struct;
    readonly isAssetSpendVoided: boolean;
    readonly asAssetSpendVoided: {
      readonly index: u32;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isPaymentFailed: boolean;
    readonly asPaymentFailed: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isSpendProcessed: boolean;
    readonly asSpendProcessed: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Spending' | 'Awarded' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive' | 'AssetSpendApproved' | 'AssetSpendVoided' | 'Paid' | 'PaymentFailed' | 'SpendProcessed';
  }

  /** @name PezpalletAssetRateEvent (71) */
  interface PezpalletAssetRateEvent extends Enum {
    readonly isAssetRateCreated: boolean;
    readonly asAssetRateCreated: {
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rate: u128;
    } & Struct;
    readonly isAssetRateRemoved: boolean;
    readonly asAssetRateRemoved: {
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly isAssetRateUpdated: boolean;
    readonly asAssetRateUpdated: {
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'AssetRateCreated' | 'AssetRateRemoved' | 'AssetRateUpdated';
  }

  /** @name PezpalletContractsEvent (73) */
  interface PezpalletContractsEvent extends Enum {
    readonly isInstantiated: boolean;
    readonly asInstantiated: {
      readonly deployer: PezspCoreCryptoAccountId32;
      readonly contract: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly contract: PezspCoreCryptoAccountId32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isCodeStored: boolean;
    readonly asCodeStored: {
      readonly codeHash: H256;
      readonly depositHeld: u128;
      readonly uploader: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: PezspCoreCryptoAccountId32;
      readonly data: Bytes;
    } & Struct;
    readonly isCodeRemoved: boolean;
    readonly asCodeRemoved: {
      readonly codeHash: H256;
      readonly depositReleased: u128;
      readonly remover: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isContractCodeUpdated: boolean;
    readonly asContractCodeUpdated: {
      readonly contract: PezspCoreCryptoAccountId32;
      readonly newCodeHash: H256;
      readonly oldCodeHash: H256;
    } & Struct;
    readonly isCalled: boolean;
    readonly asCalled: {
      readonly caller: PezpalletContractsOrigin;
      readonly contract: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDelegateCalled: boolean;
    readonly asDelegateCalled: {
      readonly contract: PezspCoreCryptoAccountId32;
      readonly codeHash: H256;
    } & Struct;
    readonly isStorageDepositTransferredAndHeld: boolean;
    readonly asStorageDepositTransferredAndHeld: {
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isStorageDepositTransferredAndReleased: boolean;
    readonly asStorageDepositTransferredAndReleased: {
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Instantiated' | 'Terminated' | 'CodeStored' | 'ContractEmitted' | 'CodeRemoved' | 'ContractCodeUpdated' | 'Called' | 'DelegateCalled' | 'StorageDepositTransferredAndHeld' | 'StorageDepositTransferredAndReleased';
  }

  /** @name PezpalletContractsOrigin (74) */
  interface PezpalletContractsOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: PezspCoreCryptoAccountId32;
    readonly type: 'Root' | 'Signed';
  }

  /** @name KitchensinkRuntimeRuntime (75) */
  type KitchensinkRuntimeRuntime = Null;

  /** @name PezpalletSudoEvent (76) */
  interface PezpalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly old: Option<PezspCoreCryptoAccountId32>;
      readonly new_: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isKeyRemoved: boolean;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'KeyRemoved' | 'SudoAsDone';
  }

  /** @name PezpalletImOnlineEvent (77) */
  interface PezpalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PezpalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[PezspCoreCryptoAccountId32, Null]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PezpalletImOnlineSr25519AppSr25519Public (78) */
  interface PezpalletImOnlineSr25519AppSr25519Public extends U8aFixed {}

  /** @name PezpalletOffencesEvent (81) */
  interface PezpalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: {
      readonly kind: U8aFixed;
      readonly timeslot: Bytes;
    } & Struct;
    readonly type: 'Offence';
  }

  /** @name PezpalletIdentityEvent (83) */
  interface PezpalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: PezspCoreCryptoAccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: PezspCoreCryptoAccountId32;
      readonly main: PezspCoreCryptoAccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentitiesSet: boolean;
    readonly asSubIdentitiesSet: {
      readonly main: PezspCoreCryptoAccountId32;
      readonly numberOfSubs: u32;
      readonly newDeposit: u128;
    } & Struct;
    readonly isSubIdentityRenamed: boolean;
    readonly asSubIdentityRenamed: {
      readonly sub: PezspCoreCryptoAccountId32;
      readonly main: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: PezspCoreCryptoAccountId32;
      readonly main: PezspCoreCryptoAccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: PezspCoreCryptoAccountId32;
      readonly main: PezspCoreCryptoAccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isAuthorityAdded: boolean;
    readonly asAuthorityAdded: {
      readonly authority: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isAuthorityRemoved: boolean;
    readonly asAuthorityRemoved: {
      readonly authority: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isUsernameSet: boolean;
    readonly asUsernameSet: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameQueued: boolean;
    readonly asUsernameQueued: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly username: Bytes;
      readonly expiration: u32;
    } & Struct;
    readonly isPreapprovalExpired: boolean;
    readonly asPreapprovalExpired: {
      readonly whose: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPrimaryUsernameSet: boolean;
    readonly asPrimaryUsernameSet: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isDanglingUsernameRemoved: boolean;
    readonly asDanglingUsernameRemoved: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameUnbound: boolean;
    readonly asUsernameUnbound: {
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameRemoved: boolean;
    readonly asUsernameRemoved: {
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameKilled: boolean;
    readonly asUsernameKilled: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentitiesSet' | 'SubIdentityRenamed' | 'SubIdentityRemoved' | 'SubIdentityRevoked' | 'AuthorityAdded' | 'AuthorityRemoved' | 'UsernameSet' | 'UsernameQueued' | 'PreapprovalExpired' | 'PrimaryUsernameSet' | 'DanglingUsernameRemoved' | 'UsernameUnbound' | 'UsernameRemoved' | 'UsernameKilled';
  }

  /** @name PezpalletSocietyEvent (85) */
  interface PezpalletSocietyEvent extends Enum {
    readonly isFounded: boolean;
    readonly asFounded: {
      readonly founder: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isBid: boolean;
    readonly asBid: {
      readonly candidateId: PezspCoreCryptoAccountId32;
      readonly offer: u128;
    } & Struct;
    readonly isVouch: boolean;
    readonly asVouch: {
      readonly candidateId: PezspCoreCryptoAccountId32;
      readonly offer: u128;
      readonly vouching: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isAutoUnbid: boolean;
    readonly asAutoUnbid: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isUnbid: boolean;
    readonly asUnbid: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isUnvouch: boolean;
    readonly asUnvouch: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isInducted: boolean;
    readonly asInducted: {
      readonly primary: PezspCoreCryptoAccountId32;
      readonly candidates: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isSuspendedMemberJudgement: boolean;
    readonly asSuspendedMemberJudgement: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly judged: bool;
    } & Struct;
    readonly isCandidateSuspended: boolean;
    readonly asCandidateSuspended: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isMemberSuspended: boolean;
    readonly asMemberSuspended: {
      readonly member: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isChallenged: boolean;
    readonly asChallenged: {
      readonly member: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly candidate: PezspCoreCryptoAccountId32;
      readonly voter: PezspCoreCryptoAccountId32;
      readonly vote: bool;
    } & Struct;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: {
      readonly voter: PezspCoreCryptoAccountId32;
      readonly vote: bool;
    } & Struct;
    readonly isNewParams: boolean;
    readonly asNewParams: {
      readonly params: PezpalletSocietyGroupParams;
    } & Struct;
    readonly isUnfounded: boolean;
    readonly asUnfounded: {
      readonly founder: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isElevated: boolean;
    readonly asElevated: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly rank: u32;
    } & Struct;
    readonly type: 'Founded' | 'Bid' | 'Vouch' | 'AutoUnbid' | 'Unbid' | 'Unvouch' | 'Inducted' | 'SuspendedMemberJudgement' | 'CandidateSuspended' | 'MemberSuspended' | 'Challenged' | 'Vote' | 'DefenderVote' | 'NewParams' | 'Unfounded' | 'Deposit' | 'Elevated';
  }

  /** @name PezpalletSocietyGroupParams (87) */
  interface PezpalletSocietyGroupParams extends Struct {
    readonly maxMembers: u32;
    readonly maxIntake: u32;
    readonly maxStrikes: u32;
    readonly candidateDeposit: u128;
  }

  /** @name PezpalletRecoveryEvent (88) */
  interface PezpalletRecoveryEvent extends Enum {
    readonly isRecoveryCreated: boolean;
    readonly asRecoveryCreated: {
      readonly account: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRecoveryInitiated: boolean;
    readonly asRecoveryInitiated: {
      readonly lostAccount: PezspCoreCryptoAccountId32;
      readonly rescuerAccount: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRecoveryVouched: boolean;
    readonly asRecoveryVouched: {
      readonly lostAccount: PezspCoreCryptoAccountId32;
      readonly rescuerAccount: PezspCoreCryptoAccountId32;
      readonly sender: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRecoveryClosed: boolean;
    readonly asRecoveryClosed: {
      readonly lostAccount: PezspCoreCryptoAccountId32;
      readonly rescuerAccount: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isAccountRecovered: boolean;
    readonly asAccountRecovered: {
      readonly lostAccount: PezspCoreCryptoAccountId32;
      readonly rescuerAccount: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRecoveryRemoved: boolean;
    readonly asRecoveryRemoved: {
      readonly lostAccount: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'RecoveryCreated' | 'RecoveryInitiated' | 'RecoveryVouched' | 'RecoveryClosed' | 'AccountRecovered' | 'RecoveryRemoved';
  }

  /** @name PezpalletVestingEvent (89) */
  interface PezpalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PezpalletSchedulerEvent (90) */
  interface PezpalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isRetrySet: boolean;
    readonly asRetrySet: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly period: u32;
      readonly retries: u8;
    } & Struct;
    readonly isRetryCancelled: boolean;
    readonly asRetryCancelled: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isRetryFailed: boolean;
    readonly asRetryFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isAgendaIncomplete: boolean;
    readonly asAgendaIncomplete: {
      readonly when: u32;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'RetrySet' | 'RetryCancelled' | 'CallUnavailable' | 'PeriodicFailed' | 'RetryFailed' | 'PermanentlyOverweight' | 'AgendaIncomplete';
  }

  /** @name PezpalletGluttonEvent (93) */
  interface PezpalletGluttonEvent extends Enum {
    readonly isPalletInitialized: boolean;
    readonly asPalletInitialized: {
      readonly reinit: bool;
    } & Struct;
    readonly isComputationLimitSet: boolean;
    readonly asComputationLimitSet: {
      readonly compute: u64;
    } & Struct;
    readonly isStorageLimitSet: boolean;
    readonly asStorageLimitSet: {
      readonly storage: u64;
    } & Struct;
    readonly isBlockLengthLimitSet: boolean;
    readonly asBlockLengthLimitSet: {
      readonly blockLength: u64;
    } & Struct;
    readonly type: 'PalletInitialized' | 'ComputationLimitSet' | 'StorageLimitSet' | 'BlockLengthLimitSet';
  }

  /** @name PezpalletPreimageEvent (95) */
  interface PezpalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PezpalletProxyEvent (96) */
  interface PezpalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: PezspCoreCryptoAccountId32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: PezspCoreCryptoAccountId32;
      readonly proxy: PezspCoreCryptoAccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: PezspCoreCryptoAccountId32;
      readonly delegatee: PezspCoreCryptoAccountId32;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: PezspCoreCryptoAccountId32;
      readonly delegatee: PezspCoreCryptoAccountId32;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isDepositPoked: boolean;
    readonly asDepositPoked: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly kind: PezpalletProxyDepositKind;
      readonly oldDeposit: u128;
      readonly newDeposit: u128;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved' | 'DepositPoked';
  }

  /** @name KitchensinkRuntimeProxyType (97) */
  interface KitchensinkRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking';
  }

  /** @name PezpalletProxyDepositKind (99) */
  interface PezpalletProxyDepositKind extends Enum {
    readonly isProxies: boolean;
    readonly isAnnouncements: boolean;
    readonly type: 'Proxies' | 'Announcements';
  }

  /** @name PezpalletMultisigEvent (100) */
  interface PezpalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: PezspCoreCryptoAccountId32;
      readonly multisig: PezspCoreCryptoAccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: PezspCoreCryptoAccountId32;
      readonly timepoint: PezpalletMultisigTimepoint;
      readonly multisig: PezspCoreCryptoAccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: PezspCoreCryptoAccountId32;
      readonly timepoint: PezpalletMultisigTimepoint;
      readonly multisig: PezspCoreCryptoAccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: PezspCoreCryptoAccountId32;
      readonly timepoint: PezpalletMultisigTimepoint;
      readonly multisig: PezspCoreCryptoAccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isDepositPoked: boolean;
    readonly asDepositPoked: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly callHash: U8aFixed;
      readonly oldDeposit: u128;
      readonly newDeposit: u128;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled' | 'DepositPoked';
  }

  /** @name PezpalletMultisigTimepoint (101) */
  interface PezpalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PezpalletBountiesEvent (102) */
  interface PezpalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly isBountyApproved: boolean;
    readonly asBountyApproved: {
      readonly index: u32;
    } & Struct;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly bountyId: u32;
      readonly curator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isCuratorUnassigned: boolean;
    readonly asCuratorUnassigned: {
      readonly bountyId: u32;
    } & Struct;
    readonly isCuratorAccepted: boolean;
    readonly asCuratorAccepted: {
      readonly bountyId: u32;
      readonly curator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended' | 'BountyApproved' | 'CuratorProposed' | 'CuratorUnassigned' | 'CuratorAccepted';
  }

  /** @name PezpalletTipsEvent (103) */
  interface PezpalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosing: boolean;
    readonly asTipClosing: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosed: boolean;
    readonly asTipClosed: {
      readonly tipHash: H256;
      readonly who: PezspCoreCryptoAccountId32;
      readonly payout: u128;
    } & Struct;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: {
      readonly tipHash: H256;
      readonly finder: PezspCoreCryptoAccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PezpalletAssetsEvent (104) */
  interface PezpalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly creator: PezspCoreCryptoAccountId32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u32;
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u32;
      readonly issuer: PezspCoreCryptoAccountId32;
      readonly admin: PezspCoreCryptoAccountId32;
      readonly freezer: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u32;
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u32;
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u32;
    } & Struct;
    readonly isAccountsDestroyed: boolean;
    readonly asAccountsDestroyed: {
      readonly assetId: u32;
      readonly accountsDestroyed: u32;
      readonly accountsRemaining: u32;
    } & Struct;
    readonly isApprovalsDestroyed: boolean;
    readonly asApprovalsDestroyed: {
      readonly assetId: u32;
      readonly approvalsDestroyed: u32;
      readonly approvalsRemaining: u32;
    } & Struct;
    readonly isDestructionStarted: boolean;
    readonly asDestructionStarted: {
      readonly assetId: u32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u32;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u32;
      readonly source: PezspCoreCryptoAccountId32;
      readonly delegate: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly delegate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly delegate: PezspCoreCryptoAccountId32;
      readonly destination: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetMinBalanceChanged: boolean;
    readonly asAssetMinBalanceChanged: {
      readonly assetId: u32;
      readonly newMinBalance: u128;
    } & Struct;
    readonly isTouched: boolean;
    readonly asTouched: {
      readonly assetId: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly depositor: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isBlocked: boolean;
    readonly asBlocked: {
      readonly assetId: u32;
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly assetId: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly assetId: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'AccountsDestroyed' | 'ApprovalsDestroyed' | 'DestructionStarted' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged' | 'AssetMinBalanceChanged' | 'Touched' | 'Blocked' | 'Deposited' | 'Withdrawn';
  }

  /** @name PezpalletLotteryEvent (106) */
  interface PezpalletLotteryEvent extends Enum {
    readonly isLotteryStarted: boolean;
    readonly isCallsUpdated: boolean;
    readonly isWinner: boolean;
    readonly asWinner: {
      readonly winner: PezspCoreCryptoAccountId32;
      readonly lotteryBalance: u128;
    } & Struct;
    readonly isTicketBought: boolean;
    readonly asTicketBought: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly callIndex: ITuple<[u8, u8]>;
    } & Struct;
    readonly type: 'LotteryStarted' | 'CallsUpdated' | 'Winner' | 'TicketBought';
  }

  /** @name PezpalletNisEvent (108) */
  interface PezpalletNisEvent extends Enum {
    readonly isBidPlaced: boolean;
    readonly asBidPlaced: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
      readonly duration: u32;
    } & Struct;
    readonly isBidRetracted: boolean;
    readonly asBidRetracted: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
      readonly duration: u32;
    } & Struct;
    readonly isBidDropped: boolean;
    readonly asBidDropped: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
      readonly duration: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly index: u32;
      readonly expiry: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly proportion: u64;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly index: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly proportion: u64;
      readonly amount: u128;
      readonly dropped: bool;
    } & Struct;
    readonly isFunded: boolean;
    readonly asFunded: {
      readonly deficit: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
      readonly index: u32;
    } & Struct;
    readonly type: 'BidPlaced' | 'BidRetracted' | 'BidDropped' | 'Issued' | 'Thawed' | 'Funded' | 'Transferred';
  }

  /** @name PezpalletUniquesEvent (110) */
  interface PezpalletUniquesEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u32;
      readonly creator: PezspCoreCryptoAccountId32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u32;
      readonly item: u32;
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isCollectionFrozen: boolean;
    readonly asCollectionFrozen: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionThawed: boolean;
    readonly asCollectionThawed: {
      readonly collection: u32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u32;
      readonly newOwner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u32;
      readonly issuer: PezspCoreCryptoAccountId32;
      readonly admin: PezspCoreCryptoAccountId32;
      readonly freezer: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly delegate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly delegate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isItemStatusChanged: boolean;
    readonly asItemStatusChanged: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u32;
      readonly successfulItems: Vec<u32>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly whitelistedBuyer: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly seller: PezspCoreCryptoAccountId32;
      readonly buyer: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'Frozen' | 'Thawed' | 'CollectionFrozen' | 'CollectionThawed' | 'OwnerChanged' | 'TeamChanged' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'ItemStatusChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'MetadataSet' | 'MetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought';
  }

  /** @name PezpalletNftsEvent (114) */
  interface PezpalletNftsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u32;
      readonly creator: PezspCoreCryptoAccountId32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u32;
      readonly item: u32;
      readonly from: PezspCoreCryptoAccountId32;
      readonly to: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isItemTransferLocked: boolean;
    readonly asItemTransferLocked: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemTransferUnlocked: boolean;
    readonly asItemTransferUnlocked: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemPropertiesLocked: boolean;
    readonly asItemPropertiesLocked: {
      readonly collection: u32;
      readonly item: u32;
      readonly lockMetadata: bool;
      readonly lockAttributes: bool;
    } & Struct;
    readonly isCollectionLocked: boolean;
    readonly asCollectionLocked: {
      readonly collection: u32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u32;
      readonly newOwner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u32;
      readonly issuer: Option<PezspCoreCryptoAccountId32>;
      readonly admin: Option<PezspCoreCryptoAccountId32>;
      readonly freezer: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly delegate: PezspCoreCryptoAccountId32;
      readonly deadline: Option<u32>;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
      readonly delegate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isAllApprovalsCancelled: boolean;
    readonly asAllApprovalsCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isCollectionConfigChanged: boolean;
    readonly asCollectionConfigChanged: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u32;
    } & Struct;
    readonly isItemMetadataSet: boolean;
    readonly asItemMetadataSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isItemMetadataCleared: boolean;
    readonly asItemMetadataCleared: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u32;
      readonly successfulItems: Vec<u32>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
      readonly namespace: PezpalletNftsAttributeNamespace;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly namespace: PezpalletNftsAttributeNamespace;
    } & Struct;
    readonly isItemAttributesApprovalAdded: boolean;
    readonly asItemAttributesApprovalAdded: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isItemAttributesApprovalRemoved: boolean;
    readonly asItemAttributesApprovalRemoved: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isCollectionMintSettingsUpdated: boolean;
    readonly asCollectionMintSettingsUpdated: {
      readonly collection: u32;
    } & Struct;
    readonly isNextCollectionIdIncremented: boolean;
    readonly asNextCollectionIdIncremented: {
      readonly nextId: Option<u32>;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly whitelistedBuyer: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly seller: PezspCoreCryptoAccountId32;
      readonly buyer: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isTipSent: boolean;
    readonly asTipSent: {
      readonly collection: u32;
      readonly item: u32;
      readonly sender: PezspCoreCryptoAccountId32;
      readonly receiver: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSwapCreated: boolean;
    readonly asSwapCreated: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
      readonly desiredCollection: u32;
      readonly desiredItem: Option<u32>;
      readonly price: Option<PezpalletNftsPriceWithDirection>;
      readonly deadline: u32;
    } & Struct;
    readonly isSwapCancelled: boolean;
    readonly asSwapCancelled: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
      readonly desiredCollection: u32;
      readonly desiredItem: Option<u32>;
      readonly price: Option<PezpalletNftsPriceWithDirection>;
      readonly deadline: u32;
    } & Struct;
    readonly isSwapClaimed: boolean;
    readonly asSwapClaimed: {
      readonly sentCollection: u32;
      readonly sentItem: u32;
      readonly sentItemOwner: PezspCoreCryptoAccountId32;
      readonly receivedCollection: u32;
      readonly receivedItem: u32;
      readonly receivedItemOwner: PezspCoreCryptoAccountId32;
      readonly price: Option<PezpalletNftsPriceWithDirection>;
      readonly deadline: u32;
    } & Struct;
    readonly isPreSignedAttributesSet: boolean;
    readonly asPreSignedAttributesSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly namespace: PezpalletNftsAttributeNamespace;
    } & Struct;
    readonly isPalletAttributeSet: boolean;
    readonly asPalletAttributeSet: {
      readonly collection: u32;
      readonly item: Option<u32>;
      readonly attribute: PezpalletNftsPezpalletAttributes;
      readonly value: Bytes;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'ItemTransferLocked' | 'ItemTransferUnlocked' | 'ItemPropertiesLocked' | 'CollectionLocked' | 'OwnerChanged' | 'TeamChanged' | 'TransferApproved' | 'ApprovalCancelled' | 'AllApprovalsCancelled' | 'CollectionConfigChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'ItemMetadataSet' | 'ItemMetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'ItemAttributesApprovalAdded' | 'ItemAttributesApprovalRemoved' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'CollectionMintSettingsUpdated' | 'NextCollectionIdIncremented' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought' | 'TipSent' | 'SwapCreated' | 'SwapCancelled' | 'SwapClaimed' | 'PreSignedAttributesSet' | 'PalletAttributeSet';
  }

  /** @name PezpalletNftsAttributeNamespace (116) */
  interface PezpalletNftsAttributeNamespace extends Enum {
    readonly isPallet: boolean;
    readonly isCollectionOwner: boolean;
    readonly isItemOwner: boolean;
    readonly isAccount: boolean;
    readonly asAccount: PezspCoreCryptoAccountId32;
    readonly type: 'Pallet' | 'CollectionOwner' | 'ItemOwner' | 'Account';
  }

  /** @name PezpalletNftsPriceWithDirection (118) */
  interface PezpalletNftsPriceWithDirection extends Struct {
    readonly amount: u128;
    readonly direction: PezpalletNftsPriceDirection;
  }

  /** @name PezpalletNftsPriceDirection (119) */
  interface PezpalletNftsPriceDirection extends Enum {
    readonly isSend: boolean;
    readonly isReceive: boolean;
    readonly type: 'Send' | 'Receive';
  }

  /** @name PezpalletNftsPezpalletAttributes (120) */
  interface PezpalletNftsPezpalletAttributes extends Enum {
    readonly isUsedToClaim: boolean;
    readonly asUsedToClaim: u32;
    readonly isTransferDisabled: boolean;
    readonly type: 'UsedToClaim' | 'TransferDisabled';
  }

  /** @name PezpalletNftFractionalizationEvent (121) */
  interface PezpalletNftFractionalizationEvent extends Enum {
    readonly isNftFractionalized: boolean;
    readonly asNftFractionalized: {
      readonly nftCollection: u32;
      readonly nft: u32;
      readonly fractions: u128;
      readonly asset: u32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isNftUnified: boolean;
    readonly asNftUnified: {
      readonly nftCollection: u32;
      readonly nft: u32;
      readonly asset: u32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'NftFractionalized' | 'NftUnified';
  }

  /** @name PezpalletSalaryEvent (122) */
  interface PezpalletSalaryEvent extends Enum {
    readonly isInducted: boolean;
    readonly asInducted: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRegistered: boolean;
    readonly asRegistered: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
      readonly amount: u128;
      readonly id: Null;
    } & Struct;
    readonly isCycleStarted: boolean;
    readonly asCycleStarted: {
      readonly index: u32;
    } & Struct;
    readonly isSwapped: boolean;
    readonly asSwapped: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly newWho: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'Inducted' | 'Registered' | 'Paid' | 'CycleStarted' | 'Swapped';
  }

  /** @name PezpalletCoreFellowshipEvent (123) */
  interface PezpalletCoreFellowshipEvent extends Enum {
    readonly isParamsChanged: boolean;
    readonly asParamsChanged: {
      readonly params: PezpalletCoreFellowshipParamsTypeU128;
    } & Struct;
    readonly isActiveChanged: boolean;
    readonly asActiveChanged: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly isActive: bool;
    } & Struct;
    readonly isInducted: boolean;
    readonly asInducted: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isOffboarded: boolean;
    readonly asOffboarded: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPromoted: boolean;
    readonly asPromoted: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isDemoted: boolean;
    readonly asDemoted: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isProven: boolean;
    readonly asProven: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly atRank: u16;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly wish: PezpalletCoreFellowshipWish;
    } & Struct;
    readonly isEvidenceJudged: boolean;
    readonly asEvidenceJudged: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly wish: PezpalletCoreFellowshipWish;
      readonly evidence: Bytes;
      readonly oldRank: u16;
      readonly newRank: Option<u16>;
    } & Struct;
    readonly isImported: boolean;
    readonly asImported: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly rank: u16;
    } & Struct;
    readonly isSwapped: boolean;
    readonly asSwapped: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly newWho: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'ParamsChanged' | 'ActiveChanged' | 'Inducted' | 'Offboarded' | 'Promoted' | 'Demoted' | 'Proven' | 'Requested' | 'EvidenceJudged' | 'Imported' | 'Swapped';
  }

  /** @name PezpalletCoreFellowshipParamsTypeU128 (124) */
  interface PezpalletCoreFellowshipParamsTypeU128 extends Struct {
    readonly activeSalary: Vec<u128>;
    readonly passiveSalary: Vec<u128>;
    readonly demotionPeriod: Vec<u32>;
    readonly minPromotionPeriod: Vec<u32>;
    readonly offboardTimeout: u32;
  }

  /** @name PezpalletCoreFellowshipWish (128) */
  interface PezpalletCoreFellowshipWish extends Enum {
    readonly isRetention: boolean;
    readonly isPromotion: boolean;
    readonly type: 'Retention' | 'Promotion';
  }

  /** @name PezpalletTransactionStorageEvent (131) */
  interface PezpalletTransactionStorageEvent extends Enum {
    readonly isStored: boolean;
    readonly asStored: {
      readonly index: u32;
    } & Struct;
    readonly isRenewed: boolean;
    readonly asRenewed: {
      readonly index: u32;
    } & Struct;
    readonly isProofChecked: boolean;
    readonly type: 'Stored' | 'Renewed' | 'ProofChecked';
  }

  /** @name PezpalletBagsListEvent (132) */
  interface PezpalletBagsListEvent extends Enum {
    readonly isRebagged: boolean;
    readonly asRebagged: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly from: u64;
      readonly to: u64;
    } & Struct;
    readonly isScoreUpdated: boolean;
    readonly asScoreUpdated: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly newScore: u64;
    } & Struct;
    readonly type: 'Rebagged' | 'ScoreUpdated';
  }

  /** @name PezpalletStateTrieMigrationEvent (133) */
  interface PezpalletStateTrieMigrationEvent extends Enum {
    readonly isMigrated: boolean;
    readonly asMigrated: {
      readonly top: u32;
      readonly child: u32;
      readonly compute: PezpalletStateTrieMigrationMigrationCompute;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAutoMigrationFinished: boolean;
    readonly isHalted: boolean;
    readonly asHalted: {
      readonly error: PezpalletStateTrieMigrationError;
    } & Struct;
    readonly type: 'Migrated' | 'Slashed' | 'AutoMigrationFinished' | 'Halted';
  }

  /** @name PezpalletStateTrieMigrationMigrationCompute (134) */
  interface PezpalletStateTrieMigrationMigrationCompute extends Enum {
    readonly isSigned: boolean;
    readonly isAuto: boolean;
    readonly type: 'Signed' | 'Auto';
  }

  /** @name PezpalletStateTrieMigrationError (135) */
  interface PezpalletStateTrieMigrationError extends Enum {
    readonly isMaxSignedLimits: boolean;
    readonly isKeyTooLong: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isBadWitness: boolean;
    readonly isSignedMigrationNotAllowed: boolean;
    readonly isBadChildRoot: boolean;
    readonly type: 'MaxSignedLimits' | 'KeyTooLong' | 'NotEnoughFunds' | 'BadWitness' | 'SignedMigrationNotAllowed' | 'BadChildRoot';
  }

  /** @name PezpalletChildBountiesEvent (136) */
  interface PezpalletChildBountiesEvent extends Enum {
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly payout: u128;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly type: 'Added' | 'Awarded' | 'Claimed' | 'Canceled';
  }

  /** @name PezpalletReferendaEvent (137) */
  interface PezpalletReferendaEvent extends Enum {
    readonly isSubmitted: boolean;
    readonly asSubmitted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: PezframeSupportPreimagesBounded;
    } & Struct;
    readonly isDecisionDepositPlaced: boolean;
    readonly asDecisionDepositPlaced: {
      readonly index: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionDepositRefunded: boolean;
    readonly asDecisionDepositRefunded: {
      readonly index: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionStarted: boolean;
    readonly asDecisionStarted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: PezframeSupportPreimagesBounded;
      readonly tally: PezpalletConvictionVotingTally;
    } & Struct;
    readonly isConfirmStarted: boolean;
    readonly asConfirmStarted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmAborted: boolean;
    readonly asConfirmAborted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmed: boolean;
    readonly asConfirmed: {
      readonly index: u32;
      readonly tally: PezpalletConvictionVotingTally;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly index: u32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly index: u32;
      readonly tally: PezpalletConvictionVotingTally;
    } & Struct;
    readonly isTimedOut: boolean;
    readonly asTimedOut: {
      readonly index: u32;
      readonly tally: PezpalletConvictionVotingTally;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly index: u32;
      readonly tally: PezpalletConvictionVotingTally;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly index: u32;
      readonly tally: PezpalletConvictionVotingTally;
    } & Struct;
    readonly isSubmissionDepositRefunded: boolean;
    readonly asSubmissionDepositRefunded: {
      readonly index: u32;
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Submitted' | 'DecisionDepositPlaced' | 'DecisionDepositRefunded' | 'DepositSlashed' | 'DecisionStarted' | 'ConfirmStarted' | 'ConfirmAborted' | 'Confirmed' | 'Approved' | 'Rejected' | 'TimedOut' | 'Cancelled' | 'Killed' | 'SubmissionDepositRefunded' | 'MetadataSet' | 'MetadataCleared';
  }

  /** @name PezframeSupportPreimagesBounded (138) */
  interface PezframeSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PezframeSystemCall (140) */
  interface PezframeSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isAuthorizeUpgradeWithoutChecks: boolean;
    readonly asAuthorizeUpgradeWithoutChecks: {
      readonly codeHash: H256;
    } & Struct;
    readonly isApplyAuthorizedUpgrade: boolean;
    readonly asApplyAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent' | 'AuthorizeUpgrade' | 'AuthorizeUpgradeWithoutChecks' | 'ApplyAuthorizedUpgrade';
  }

  /** @name PezpalletUtilityCall (144) */
  interface PezpalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<RuntimeCall>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<RuntimeCall>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: KitchensinkRuntimeOriginCaller;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<RuntimeCall>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: RuntimeCall;
      readonly weight: PezspWeightsWeightV2Weight;
    } & Struct;
    readonly isIfElse: boolean;
    readonly asIfElse: {
      readonly main: RuntimeCall;
      readonly fallback: RuntimeCall;
    } & Struct;
    readonly isDispatchAsFallible: boolean;
    readonly asDispatchAsFallible: {
      readonly asOrigin: KitchensinkRuntimeOriginCaller;
      readonly call: RuntimeCall;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight' | 'IfElse' | 'DispatchAsFallible';
  }

  /** @name KitchensinkRuntimeOriginCaller (146) */
  interface KitchensinkRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSupportDispatchRawOrigin;
    readonly isCouncil: boolean;
    readonly asCouncil: PezpalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PezpalletCollectiveRawOrigin;
    readonly isAllianceMotion: boolean;
    readonly asAllianceMotion: PezpalletCollectiveRawOrigin;
    readonly type: 'System' | 'Council' | 'TechnicalCommittee' | 'AllianceMotion';
  }

  /** @name PezframeSupportDispatchRawOrigin (147) */
  interface PezframeSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: PezspCoreCryptoAccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PezpalletCollectiveRawOrigin (148) */
  interface PezpalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: PezspCoreCryptoAccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PezpalletBabeCall (151) */
  interface PezpalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: PezspConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: PezspConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: PezspConsensusBabeDigestsNextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name PezspConsensusSlotsEquivocationProof (152) */
  interface PezspConsensusSlotsEquivocationProof extends Struct {
    readonly offender: PezspConsensusBabeAppPublic;
    readonly slot: u64;
    readonly firstHeader: PezspRuntimeHeader;
    readonly secondHeader: PezspRuntimeHeader;
  }

  /** @name PezspRuntimeHeader (153) */
  interface PezspRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: PezspRuntimeDigest;
  }

  /** @name PezspConsensusBabeAppPublic (155) */
  interface PezspConsensusBabeAppPublic extends U8aFixed {}

  /** @name PezspSessionMembershipProof (157) */
  interface PezspSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name PezspConsensusBabeDigestsNextConfigDescriptor (158) */
  interface PezspConsensusBabeDigestsNextConfigDescriptor extends Enum {
    readonly isV1: boolean;
    readonly asV1: {
      readonly c: ITuple<[u64, u64]>;
      readonly allowedSlots: PezspConsensusBabeAllowedSlots;
    } & Struct;
    readonly type: 'V1';
  }

  /** @name PezspConsensusBabeAllowedSlots (160) */
  interface PezspConsensusBabeAllowedSlots extends Enum {
    readonly isPrimarySlots: boolean;
    readonly isPrimaryAndSecondaryPlainSlots: boolean;
    readonly isPrimaryAndSecondaryVRFSlots: boolean;
    readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
  }

  /** @name PezpalletTimestampCall (161) */
  interface PezpalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PezpalletIndicesCall (162) */
  interface PezpalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: PezspRuntimeMultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u32;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: PezspRuntimeMultiAddress;
      readonly index: u32;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u32;
    } & Struct;
    readonly isPokeDeposit: boolean;
    readonly asPokeDeposit: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze' | 'PokeDeposit';
  }

  /** @name PezspRuntimeMultiAddress (163) */
  interface PezspRuntimeMultiAddress extends MultiAddress {}

  /** @name PezpalletBalancesCall (165) */
  interface PezpalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: PezspRuntimeMultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: PezspRuntimeMultiAddress;
      readonly dest: PezspRuntimeMultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: PezspRuntimeMultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: PezspRuntimeMultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: PezspRuntimeMultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: PezspRuntimeMultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly isForceAdjustTotalIssuance: boolean;
    readonly asForceAdjustTotalIssuance: {
      readonly direction: PezpalletBalancesAdjustmentDirection;
      readonly delta: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly value: Compact<u128>;
      readonly keepAlive: bool;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'ForceSetBalance' | 'ForceAdjustTotalIssuance' | 'Burn';
  }

  /** @name PezpalletBalancesAdjustmentDirection (167) */
  interface PezpalletBalancesAdjustmentDirection extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name PezpalletElectionProviderMultiPhaseCall (168) */
  interface PezpalletElectionProviderMultiPhaseCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly rawSolution: PezpalletElectionProviderMultiPhaseRawSolution;
      readonly witness: PezpalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    } & Struct;
    readonly isSetMinimumUntrustedScore: boolean;
    readonly asSetMinimumUntrustedScore: {
      readonly maybeNextScore: Option<PezspNposElectionsElectionScore>;
    } & Struct;
    readonly isSetEmergencyElectionResult: boolean;
    readonly asSetEmergencyElectionResult: {
      readonly supports: Vec<ITuple<[PezspCoreCryptoAccountId32, PezspNposElectionsSupport]>>;
    } & Struct;
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly rawSolution: PezpalletElectionProviderMultiPhaseRawSolution;
    } & Struct;
    readonly isGovernanceFallback: boolean;
    readonly asGovernanceFallback: {
      readonly maybeMaxVoters: Option<u32>;
      readonly maybeMaxTargets: Option<u32>;
    } & Struct;
    readonly type: 'SubmitUnsigned' | 'SetMinimumUntrustedScore' | 'SetEmergencyElectionResult' | 'Submit' | 'GovernanceFallback';
  }

  /** @name PezpalletElectionProviderMultiPhaseRawSolution (169) */
  interface PezpalletElectionProviderMultiPhaseRawSolution extends Struct {
    readonly solution: KitchensinkRuntimeNposSolution16;
    readonly score: PezspNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name KitchensinkRuntimeNposSolution16 (170) */
  interface KitchensinkRuntimeNposSolution16 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<u16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
  }

  /** @name PezpalletElectionProviderMultiPhaseSolutionOrSnapshotSize (221) */
  interface PezpalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
    readonly voters: Compact<u32>;
    readonly targets: Compact<u32>;
  }

  /** @name PezspNposElectionsSupport (225) */
  interface PezspNposElectionsSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
  }

  /** @name PezpalletStakingPezpalletCall (226) */
  interface PezpalletStakingPezpalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PezpalletStakingRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: PezpalletStakingValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<PezspRuntimeMultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PezpalletStakingRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: u8;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: PezspCoreCryptoAccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<PezspRuntimeMultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PezpalletStakingPezpalletConfigOpU128;
      readonly minValidatorBond: PezpalletStakingPezpalletConfigOpU128;
      readonly maxNominatorCount: PezpalletStakingPezpalletConfigOpU32;
      readonly maxValidatorCount: PezpalletStakingPezpalletConfigOpU32;
      readonly chillThreshold: PezpalletStakingPezpalletConfigOpPercent;
      readonly minCommission: PezpalletStakingPezpalletConfigOpPerbill;
      readonly maxStakedRewards: PezpalletStakingPezpalletConfigOpPercent;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly stash: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: u32;
    } & Struct;
    readonly isPayoutStakersByPage: boolean;
    readonly asPayoutStakersByPage: {
      readonly validatorStash: PezspCoreCryptoAccountId32;
      readonly era: u32;
      readonly page: u32;
    } & Struct;
    readonly isUpdatePayee: boolean;
    readonly asUpdatePayee: {
      readonly controller: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDeprecateControllerBatch: boolean;
    readonly asDeprecateControllerBatch: {
      readonly controllers: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isRestoreLedger: boolean;
    readonly asRestoreLedger: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly maybeController: Option<PezspCoreCryptoAccountId32>;
      readonly maybeTotal: Option<u128>;
      readonly maybeUnlocking: Option<Vec<PezpalletStakingUnlockChunk>>;
    } & Struct;
    readonly isMigrateCurrency: boolean;
    readonly asMigrateCurrency: {
      readonly stash: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isManualSlash: boolean;
    readonly asManualSlash: {
      readonly validatorStash: PezspCoreCryptoAccountId32;
      readonly era: u32;
      readonly slashFraction: u32;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission' | 'PayoutStakersByPage' | 'UpdatePayee' | 'DeprecateControllerBatch' | 'RestoreLedger' | 'MigrateCurrency' | 'ManualSlash';
  }

  /** @name PezpalletStakingPezpalletConfigOpU128 (229) */
  interface PezpalletStakingPezpalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingPezpalletConfigOpU32 (230) */
  interface PezpalletStakingPezpalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingPezpalletConfigOpPercent (231) */
  interface PezpalletStakingPezpalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u8;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingPezpalletConfigOpPerbill (232) */
  interface PezpalletStakingPezpalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingUnlockChunk (237) */
  interface PezpalletStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PezpalletSessionCall (239) */
  interface PezpalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: KitchensinkRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name KitchensinkRuntimeSessionKeys (240) */
  interface KitchensinkRuntimeSessionKeys extends Struct {
    readonly grandpa: PezspConsensusGrandpaAppPublic;
    readonly babe: PezspConsensusBabeAppPublic;
    readonly imOnline: PezpalletImOnlineSr25519AppSr25519Public;
    readonly authorityDiscovery: PezspAuthorityDiscoveryAppPublic;
    readonly mixnet: PezspMixnetAppPublic;
    readonly beefy: PezspConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name PezspAuthorityDiscoveryAppPublic (241) */
  interface PezspAuthorityDiscoveryAppPublic extends U8aFixed {}

  /** @name PezspMixnetAppPublic (242) */
  interface PezspMixnetAppPublic extends U8aFixed {}

  /** @name PezspConsensusBeefyEcdsaCryptoPublic (243) */
  interface PezspConsensusBeefyEcdsaCryptoPublic extends U8aFixed {}

  /** @name PezpalletDemocracyCall (245) */
  interface PezpalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: PezframeSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PezpalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: PezframeSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: PezframeSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: PezframeSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: PezspRuntimeMultiAddress;
      readonly conviction: PezpalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: PezspRuntimeMultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PezpalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name PezpalletDemocracyConviction (246) */
  interface PezpalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PezpalletCollectiveCall (248) */
  interface PezpalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<PezspCoreCryptoAccountId32>;
      readonly prime: Option<PezspCoreCryptoAccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: RuntimeCall;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: RuntimeCall;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: PezspWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isReleaseProposalCost: boolean;
    readonly asReleaseProposalCost: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close' | 'Kill' | 'ReleaseProposalCost';
  }

  /** @name PezpalletElectionsPhragmenCall (250) */
  interface PezpalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<PezspCoreCryptoAccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PezpalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: PezspRuntimeMultiAddress;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PezpalletElectionsPhragmenRenouncing (251) */
  interface PezpalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PezpalletMembershipCall (252) */
  interface PezpalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: PezspRuntimeMultiAddress;
      readonly add: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PezpalletGrandpaCall (253) */
  interface PezpalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: PezspConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: PezspConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name PezspConsensusGrandpaEquivocationProof (254) */
  interface PezspConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: PezspConsensusGrandpaEquivocation;
  }

  /** @name PezspConsensusGrandpaEquivocation (255) */
  interface PezspConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (256) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: PezspConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, PezspConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, PezspConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (257) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name PezspConsensusGrandpaAppSignature (258) */
  interface PezspConsensusGrandpaAppSignature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (261) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: PezspConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, PezspConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, PezspConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (262) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name PezpalletTreasuryCall (264) */
  interface PezpalletTreasuryCall extends Enum {
    readonly isSpendLocal: boolean;
    readonly asSpendLocal: {
      readonly amount: Compact<u128>;
      readonly beneficiary: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly amount: Compact<u128>;
      readonly beneficiary: PezspRuntimeMultiAddress;
      readonly validFrom: Option<u32>;
    } & Struct;
    readonly isPayout: boolean;
    readonly asPayout: {
      readonly index: u32;
    } & Struct;
    readonly isCheckStatus: boolean;
    readonly asCheckStatus: {
      readonly index: u32;
    } & Struct;
    readonly isVoidSpend: boolean;
    readonly asVoidSpend: {
      readonly index: u32;
    } & Struct;
    readonly type: 'SpendLocal' | 'RemoveApproval' | 'Spend' | 'Payout' | 'CheckStatus' | 'VoidSpend';
  }

  /** @name PezpalletAssetRateCall (265) */
  interface PezpalletAssetRateCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rate: u128;
    } & Struct;
    readonly isUpdate: boolean;
    readonly asUpdate: {
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rate: u128;
    } & Struct;
    readonly isRemove: boolean;
    readonly asRemove: {
      readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly type: 'Create' | 'Update' | 'Remove';
  }

  /** @name PezpalletContractsCall (266) */
  interface PezpalletContractsCall extends Enum {
    readonly isCallOldWeight: boolean;
    readonly asCallOldWeight: {
      readonly dest: PezspRuntimeMultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCodeOldWeight: boolean;
    readonly asInstantiateWithCodeOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiateOldWeight: boolean;
    readonly asInstantiateOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly determinism: PezpalletContractsWasmDeterminism;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: PezspRuntimeMultiAddress;
      readonly codeHash: H256;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: PezspRuntimeMultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: PezspWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: PezspWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: PezspWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isMigrate: boolean;
    readonly asMigrate: {
      readonly weightLimit: PezspWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'CallOldWeight' | 'InstantiateWithCodeOldWeight' | 'InstantiateOldWeight' | 'UploadCode' | 'RemoveCode' | 'SetCode' | 'Call' | 'InstantiateWithCode' | 'Instantiate' | 'Migrate';
  }

  /** @name PezpalletContractsWasmDeterminism (268) */
  interface PezpalletContractsWasmDeterminism extends Enum {
    readonly isEnforced: boolean;
    readonly isRelaxed: boolean;
    readonly type: 'Enforced' | 'Relaxed';
  }

  /** @name PezpalletSudoCall (269) */
  interface PezpalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: RuntimeCall;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: RuntimeCall;
      readonly weight: PezspWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: PezspRuntimeMultiAddress;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isRemoveKey: boolean;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs' | 'RemoveKey';
  }

  /** @name PezpalletImOnlineCall (270) */
  interface PezpalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PezpalletImOnlineHeartbeat;
      readonly signature: PezpalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PezpalletImOnlineHeartbeat (271) */
  interface PezpalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u32;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name PezpalletImOnlineSr25519AppSr25519Signature (272) */
  interface PezpalletImOnlineSr25519AppSr25519Signature extends U8aFixed {}

  /** @name PezpalletIdentityCall (273) */
  interface PezpalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PezpalletIdentityLegacyIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[PezspCoreCryptoAccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: u64;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: PezspRuntimeMultiAddress;
      readonly judgement: PezpalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: PezspRuntimeMultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: PezspRuntimeMultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly isAddUsernameAuthority: boolean;
    readonly asAddUsernameAuthority: {
      readonly authority: PezspRuntimeMultiAddress;
      readonly suffix: Bytes;
      readonly allocation: u32;
    } & Struct;
    readonly isRemoveUsernameAuthority: boolean;
    readonly asRemoveUsernameAuthority: {
      readonly suffix: Bytes;
      readonly authority: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetUsernameFor: boolean;
    readonly asSetUsernameFor: {
      readonly who: PezspRuntimeMultiAddress;
      readonly username: Bytes;
      readonly signature: Option<PezspRuntimeMultiSignature>;
      readonly useAllocation: bool;
    } & Struct;
    readonly isAcceptUsername: boolean;
    readonly asAcceptUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveExpiredApproval: boolean;
    readonly asRemoveExpiredApproval: {
      readonly username: Bytes;
    } & Struct;
    readonly isSetPrimaryUsername: boolean;
    readonly asSetPrimaryUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isUnbindUsername: boolean;
    readonly asUnbindUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveUsername: boolean;
    readonly asRemoveUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isKillUsername: boolean;
    readonly asKillUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub' | 'AddUsernameAuthority' | 'RemoveUsernameAuthority' | 'SetUsernameFor' | 'AcceptUsername' | 'RemoveExpiredApproval' | 'SetPrimaryUsername' | 'UnbindUsername' | 'RemoveUsername' | 'KillUsername';
  }

  /** @name PezpalletIdentityLegacyIdentityInfo (274) */
  interface PezpalletIdentityLegacyIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PezpalletIdentityJudgement (311) */
  interface PezpalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PezspRuntimeMultiSignature (313) */
  interface PezspRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: U8aFixed;
    readonly isSr25519: boolean;
    readonly asSr25519: U8aFixed;
    readonly isEcdsa: boolean;
    readonly asEcdsa: U8aFixed;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name PezpalletSocietyCall (315) */
  interface PezpalletSocietyCall extends Enum {
    readonly isBid: boolean;
    readonly asBid: {
      readonly value: u128;
    } & Struct;
    readonly isUnbid: boolean;
    readonly isVouch: boolean;
    readonly asVouch: {
      readonly who: PezspRuntimeMultiAddress;
      readonly value: u128;
      readonly tip: u128;
    } & Struct;
    readonly isUnvouch: boolean;
    readonly isVote: boolean;
    readonly asVote: {
      readonly candidate: PezspRuntimeMultiAddress;
      readonly approve: bool;
    } & Struct;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: {
      readonly approve: bool;
    } & Struct;
    readonly isPayout: boolean;
    readonly isWaiveRepay: boolean;
    readonly asWaiveRepay: {
      readonly amount: u128;
    } & Struct;
    readonly isFoundSociety: boolean;
    readonly asFoundSociety: {
      readonly founder: PezspRuntimeMultiAddress;
      readonly maxMembers: u32;
      readonly maxIntake: u32;
      readonly maxStrikes: u32;
      readonly candidateDeposit: u128;
      readonly rules: Bytes;
    } & Struct;
    readonly isDissolve: boolean;
    readonly isJudgeSuspendedMember: boolean;
    readonly asJudgeSuspendedMember: {
      readonly who: PezspRuntimeMultiAddress;
      readonly forgive: bool;
    } & Struct;
    readonly isSetParameters: boolean;
    readonly asSetParameters: {
      readonly maxMembers: u32;
      readonly maxIntake: u32;
      readonly maxStrikes: u32;
      readonly candidateDeposit: u128;
    } & Struct;
    readonly isPunishSkeptic: boolean;
    readonly isClaimMembership: boolean;
    readonly isBestowMembership: boolean;
    readonly asBestowMembership: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isKickCandidate: boolean;
    readonly asKickCandidate: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isResignCandidacy: boolean;
    readonly isDropCandidate: boolean;
    readonly asDropCandidate: {
      readonly candidate: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isCleanupCandidacy: boolean;
    readonly asCleanupCandidacy: {
      readonly candidate: PezspCoreCryptoAccountId32;
      readonly max: u32;
    } & Struct;
    readonly isCleanupChallenge: boolean;
    readonly asCleanupChallenge: {
      readonly challengeRound: u32;
      readonly max: u32;
    } & Struct;
    readonly type: 'Bid' | 'Unbid' | 'Vouch' | 'Unvouch' | 'Vote' | 'DefenderVote' | 'Payout' | 'WaiveRepay' | 'FoundSociety' | 'Dissolve' | 'JudgeSuspendedMember' | 'SetParameters' | 'PunishSkeptic' | 'ClaimMembership' | 'BestowMembership' | 'KickCandidate' | 'ResignCandidacy' | 'DropCandidate' | 'CleanupCandidacy' | 'CleanupChallenge';
  }

  /** @name PezpalletRecoveryCall (316) */
  interface PezpalletRecoveryCall extends Enum {
    readonly isAsRecovered: boolean;
    readonly asAsRecovered: {
      readonly account: PezspRuntimeMultiAddress;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isSetRecovered: boolean;
    readonly asSetRecovered: {
      readonly lost: PezspRuntimeMultiAddress;
      readonly rescuer: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isCreateRecovery: boolean;
    readonly asCreateRecovery: {
      readonly friends: Vec<PezspCoreCryptoAccountId32>;
      readonly threshold: u16;
      readonly delayPeriod: u32;
    } & Struct;
    readonly isInitiateRecovery: boolean;
    readonly asInitiateRecovery: {
      readonly account: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isVouchRecovery: boolean;
    readonly asVouchRecovery: {
      readonly lost: PezspRuntimeMultiAddress;
      readonly rescuer: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isClaimRecovery: boolean;
    readonly asClaimRecovery: {
      readonly account: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isCloseRecovery: boolean;
    readonly asCloseRecovery: {
      readonly rescuer: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRemoveRecovery: boolean;
    readonly isCancelRecovered: boolean;
    readonly asCancelRecovered: {
      readonly account: PezspRuntimeMultiAddress;
    } & Struct;
    readonly type: 'AsRecovered' | 'SetRecovered' | 'CreateRecovery' | 'InitiateRecovery' | 'VouchRecovery' | 'ClaimRecovery' | 'CloseRecovery' | 'RemoveRecovery' | 'CancelRecovered';
  }

  /** @name PezpalletVestingCall (317) */
  interface PezpalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: PezspRuntimeMultiAddress;
      readonly schedule: PezpalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: PezspRuntimeMultiAddress;
      readonly target: PezspRuntimeMultiAddress;
      readonly schedule: PezpalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly isForceRemoveVestingSchedule: boolean;
    readonly asForceRemoveVestingSchedule: {
      readonly target: PezspRuntimeMultiAddress;
      readonly scheduleIndex: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules' | 'ForceRemoveVestingSchedule';
  }

  /** @name PezpalletVestingVestingInfo (318) */
  interface PezpalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PezpalletSchedulerCall (319) */
  interface PezpalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isSetRetry: boolean;
    readonly asSetRetry: {
      readonly task: ITuple<[u32, u32]>;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isSetRetryNamed: boolean;
    readonly asSetRetryNamed: {
      readonly id: U8aFixed;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isCancelRetry: boolean;
    readonly asCancelRetry: {
      readonly task: ITuple<[u32, u32]>;
    } & Struct;
    readonly isCancelRetryNamed: boolean;
    readonly asCancelRetryNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter' | 'SetRetry' | 'SetRetryNamed' | 'CancelRetry' | 'CancelRetryNamed';
  }

  /** @name PezpalletGluttonCall (321) */
  interface PezpalletGluttonCall extends Enum {
    readonly isInitializePallet: boolean;
    readonly asInitializePallet: {
      readonly newCount: u32;
      readonly witnessCount: Option<u32>;
    } & Struct;
    readonly isSetCompute: boolean;
    readonly asSetCompute: {
      readonly compute: u64;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly storage: u64;
    } & Struct;
    readonly isBloat: boolean;
    readonly asBloat: {
      readonly garbage: Vec<U8aFixed>;
    } & Struct;
    readonly isSetBlockLength: boolean;
    readonly asSetBlockLength: {
      readonly blockLength: u64;
    } & Struct;
    readonly type: 'InitializePallet' | 'SetCompute' | 'SetStorage' | 'Bloat' | 'SetBlockLength';
  }

  /** @name PezpalletPreimageCall (324) */
  interface PezpalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isEnsureUpdated: boolean;
    readonly asEnsureUpdated: {
      readonly hashes: Vec<H256>;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage' | 'EnsureUpdated';
  }

  /** @name PezpalletProxyCall (326) */
  interface PezpalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: PezspRuntimeMultiAddress;
      readonly forceProxyType: Option<KitchensinkRuntimeProxyType>;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: PezspRuntimeMultiAddress;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: PezspRuntimeMultiAddress;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: PezspRuntimeMultiAddress;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: PezspRuntimeMultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: PezspRuntimeMultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: PezspRuntimeMultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: PezspRuntimeMultiAddress;
      readonly real: PezspRuntimeMultiAddress;
      readonly forceProxyType: Option<KitchensinkRuntimeProxyType>;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isPokeDeposit: boolean;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced' | 'PokeDeposit';
  }

  /** @name PezpalletMultisigCall (328) */
  interface PezpalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<PezspCoreCryptoAccountId32>;
      readonly call: RuntimeCall;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<PezspCoreCryptoAccountId32>;
      readonly maybeTimepoint: Option<PezpalletMultisigTimepoint>;
      readonly call: RuntimeCall;
      readonly maxWeight: PezspWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<PezspCoreCryptoAccountId32>;
      readonly maybeTimepoint: Option<PezpalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: PezspWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<PezspCoreCryptoAccountId32>;
      readonly timepoint: PezpalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isPokeDeposit: boolean;
    readonly asPokeDeposit: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<PezspCoreCryptoAccountId32>;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti' | 'PokeDeposit';
  }

  /** @name PezpalletBountiesCall (330) */
  interface PezpalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: PezspRuntimeMultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly isApproveBountyWithCurator: boolean;
    readonly asApproveBountyWithCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: PezspRuntimeMultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry' | 'ApproveBountyWithCurator';
  }

  /** @name PezpalletTipsCall (331) */
  interface PezpalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: PezspRuntimeMultiAddress;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PezpalletAssetsCall (332) */
  interface PezpalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u32>;
      readonly admin: PezspRuntimeMultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u32>;
      readonly owner: PezspRuntimeMultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isStartDestroy: boolean;
    readonly asStartDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyAccounts: boolean;
    readonly asDestroyAccounts: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyApprovals: boolean;
    readonly asDestroyApprovals: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isFinishDestroy: boolean;
    readonly asFinishDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u32>;
      readonly beneficiary: PezspRuntimeMultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u32>;
      readonly who: PezspRuntimeMultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u32>;
      readonly target: PezspRuntimeMultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u32>;
      readonly target: PezspRuntimeMultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u32>;
      readonly source: PezspRuntimeMultiAddress;
      readonly dest: PezspRuntimeMultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u32>;
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u32>;
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u32>;
      readonly owner: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u32>;
      readonly issuer: PezspRuntimeMultiAddress;
      readonly admin: PezspRuntimeMultiAddress;
      readonly freezer: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u32>;
      readonly owner: PezspRuntimeMultiAddress;
      readonly issuer: PezspRuntimeMultiAddress;
      readonly admin: PezspRuntimeMultiAddress;
      readonly freezer: PezspRuntimeMultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u32>;
      readonly delegate: PezspRuntimeMultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u32>;
      readonly delegate: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u32>;
      readonly owner: PezspRuntimeMultiAddress;
      readonly delegate: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u32>;
      readonly owner: PezspRuntimeMultiAddress;
      readonly destination: PezspRuntimeMultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u32>;
      readonly allowBurn: bool;
    } & Struct;
    readonly isSetMinBalance: boolean;
    readonly asSetMinBalance: {
      readonly id: Compact<u32>;
      readonly minBalance: u128;
    } & Struct;
    readonly isTouchOther: boolean;
    readonly asTouchOther: {
      readonly id: Compact<u32>;
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRefundOther: boolean;
    readonly asRefundOther: {
      readonly id: Compact<u32>;
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isBlock: boolean;
    readonly asBlock: {
      readonly id: Compact<u32>;
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly id: Compact<u32>;
      readonly dest: PezspRuntimeMultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'StartDestroy' | 'DestroyAccounts' | 'DestroyApprovals' | 'FinishDestroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund' | 'SetMinBalance' | 'TouchOther' | 'RefundOther' | 'Block' | 'TransferAll';
  }

  /** @name PezpalletBeefyCall (334) */
  interface PezpalletBeefyCall extends Enum {
    readonly isReportDoubleVoting: boolean;
    readonly asReportDoubleVoting: {
      readonly equivocationProof: PezspConsensusBeefyDoubleVotingProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isReportDoubleVotingUnsigned: boolean;
    readonly asReportDoubleVotingUnsigned: {
      readonly equivocationProof: PezspConsensusBeefyDoubleVotingProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isSetNewGenesis: boolean;
    readonly asSetNewGenesis: {
      readonly delayInBlocks: u32;
    } & Struct;
    readonly isReportForkVoting: boolean;
    readonly asReportForkVoting: {
      readonly equivocationProof: PezspConsensusBeefyForkVotingProofAncestryProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isReportForkVotingUnsigned: boolean;
    readonly asReportForkVotingUnsigned: {
      readonly equivocationProof: PezspConsensusBeefyForkVotingProofAncestryProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isReportFutureBlockVoting: boolean;
    readonly asReportFutureBlockVoting: {
      readonly equivocationProof: PezspConsensusBeefyFutureBlockVotingProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly isReportFutureBlockVotingUnsigned: boolean;
    readonly asReportFutureBlockVotingUnsigned: {
      readonly equivocationProof: PezspConsensusBeefyFutureBlockVotingProof;
      readonly keyOwnerProof: PezspSessionMembershipProof;
    } & Struct;
    readonly type: 'ReportDoubleVoting' | 'ReportDoubleVotingUnsigned' | 'SetNewGenesis' | 'ReportForkVoting' | 'ReportForkVotingUnsigned' | 'ReportFutureBlockVoting' | 'ReportFutureBlockVotingUnsigned';
  }

  /** @name PezspConsensusBeefyDoubleVotingProof (335) */
  interface PezspConsensusBeefyDoubleVotingProof extends Struct {
    readonly first: PezspConsensusBeefyVoteMessage;
    readonly second: PezspConsensusBeefyVoteMessage;
  }

  /** @name PezspConsensusBeefyEcdsaCryptoSignature (336) */
  interface PezspConsensusBeefyEcdsaCryptoSignature extends U8aFixed {}

  /** @name PezspConsensusBeefyVoteMessage (337) */
  interface PezspConsensusBeefyVoteMessage extends Struct {
    readonly commitment: PezspConsensusBeefyCommitment;
    readonly id: PezspConsensusBeefyEcdsaCryptoPublic;
    readonly signature: PezspConsensusBeefyEcdsaCryptoSignature;
  }

  /** @name PezspConsensusBeefyCommitment (338) */
  interface PezspConsensusBeefyCommitment extends Struct {
    readonly payload: PezspConsensusBeefyPayload;
    readonly blockNumber: u32;
    readonly validatorSetId: u64;
  }

  /** @name PezspConsensusBeefyPayload (339) */
  interface PezspConsensusBeefyPayload extends Vec<ITuple<[U8aFixed, Bytes]>> {}

  /** @name PezspConsensusBeefyForkVotingProofAncestryProof (342) */
  interface PezspConsensusBeefyForkVotingProofAncestryProof extends Struct {
    readonly vote: PezspConsensusBeefyVoteMessage;
    readonly ancestryProof: PezspMmrPrimitivesAncestryProof;
    readonly header: PezspRuntimeHeader;
  }

  /** @name PezspMmrPrimitivesAncestryProof (343) */
  interface PezspMmrPrimitivesAncestryProof extends Struct {
    readonly prevPeaks: Vec<H256>;
    readonly prevLeafCount: u64;
    readonly leafCount: u64;
    readonly items: Vec<ITuple<[u64, H256]>>;
  }

  /** @name PezspConsensusBeefyFutureBlockVotingProof (346) */
  interface PezspConsensusBeefyFutureBlockVotingProof extends Struct {
    readonly vote: PezspConsensusBeefyVoteMessage;
  }

  /** @name PezpalletLotteryCall (347) */
  interface PezpalletLotteryCall extends Enum {
    readonly isBuyTicket: boolean;
    readonly asBuyTicket: {
      readonly call: RuntimeCall;
    } & Struct;
    readonly isSetCalls: boolean;
    readonly asSetCalls: {
      readonly calls: Vec<RuntimeCall>;
    } & Struct;
    readonly isStartLottery: boolean;
    readonly asStartLottery: {
      readonly price: u128;
      readonly length: u32;
      readonly delay: u32;
      readonly repeat: bool;
    } & Struct;
    readonly isStopRepeat: boolean;
    readonly type: 'BuyTicket' | 'SetCalls' | 'StartLottery' | 'StopRepeat';
  }

  /** @name PezpalletNisCall (348) */
  interface PezpalletNisCall extends Enum {
    readonly isPlaceBid: boolean;
    readonly asPlaceBid: {
      readonly amount: Compact<u128>;
      readonly duration: u32;
    } & Struct;
    readonly isRetractBid: boolean;
    readonly asRetractBid: {
      readonly amount: Compact<u128>;
      readonly duration: u32;
    } & Struct;
    readonly isFundDeficit: boolean;
    readonly isThawPrivate: boolean;
    readonly asThawPrivate: {
      readonly index: Compact<u32>;
      readonly maybeProportion: Option<u64>;
    } & Struct;
    readonly isThawCommunal: boolean;
    readonly asThawCommunal: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isCommunify: boolean;
    readonly asCommunify: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isPrivatize: boolean;
    readonly asPrivatize: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly type: 'PlaceBid' | 'RetractBid' | 'FundDeficit' | 'ThawPrivate' | 'ThawCommunal' | 'Communify' | 'Privatize';
  }

  /** @name PezpalletUniquesCall (350) */
  interface PezpalletUniquesCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly collection: u32;
      readonly admin: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly collection: u32;
      readonly owner: PezspRuntimeMultiAddress;
      readonly freeHolding: bool;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u32;
      readonly witness: PezpalletUniquesDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u32;
      readonly item: u32;
      readonly checkOwner: Option<PezspRuntimeMultiAddress>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly dest: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u32;
      readonly items: Vec<u32>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isFreezeCollection: boolean;
    readonly asFreezeCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isThawCollection: boolean;
    readonly asThawCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u32;
      readonly newOwner: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u32;
      readonly issuer: PezspRuntimeMultiAddress;
      readonly admin: PezspRuntimeMultiAddress;
      readonly freezer: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly maybeCheckDelegate: Option<PezspRuntimeMultiAddress>;
    } & Struct;
    readonly isForceItemStatus: boolean;
    readonly asForceItemStatus: {
      readonly collection: u32;
      readonly owner: PezspRuntimeMultiAddress;
      readonly issuer: PezspRuntimeMultiAddress;
      readonly admin: PezspRuntimeMultiAddress;
      readonly freezer: PezspRuntimeMultiAddress;
      readonly freeHolding: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u32;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<PezspRuntimeMultiAddress>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u32;
      readonly item: u32;
      readonly bidPrice: u128;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'Redeposit' | 'Freeze' | 'Thaw' | 'FreezeCollection' | 'ThawCollection' | 'TransferOwnership' | 'SetTeam' | 'ApproveTransfer' | 'CancelApproval' | 'ForceItemStatus' | 'SetAttribute' | 'ClearAttribute' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'SetPrice' | 'BuyItem';
  }

  /** @name PezpalletUniquesDestroyWitness (351) */
  interface PezpalletUniquesDestroyWitness extends Struct {
    readonly items: Compact<u32>;
    readonly itemMetadatas: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PezpalletNftsCall (353) */
  interface PezpalletNftsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly admin: PezspRuntimeMultiAddress;
      readonly config: PezpalletNftsCollectionConfig;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly owner: PezspRuntimeMultiAddress;
      readonly config: PezpalletNftsCollectionConfig;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u32;
      readonly witness: PezpalletNftsDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly mintTo: PezspRuntimeMultiAddress;
      readonly witnessData: Option<PezpalletNftsMintWitness>;
    } & Struct;
    readonly isForceMint: boolean;
    readonly asForceMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly mintTo: PezspRuntimeMultiAddress;
      readonly itemConfig: PezpalletNftsItemConfig;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly dest: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u32;
      readonly items: Vec<u32>;
    } & Struct;
    readonly isLockItemTransfer: boolean;
    readonly asLockItemTransfer: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isUnlockItemTransfer: boolean;
    readonly asUnlockItemTransfer: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isLockCollection: boolean;
    readonly asLockCollection: {
      readonly collection: u32;
      readonly lockSettings: u64;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u32;
      readonly newOwner: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u32;
      readonly issuer: Option<PezspRuntimeMultiAddress>;
      readonly admin: Option<PezspRuntimeMultiAddress>;
      readonly freezer: Option<PezspRuntimeMultiAddress>;
    } & Struct;
    readonly isForceCollectionOwner: boolean;
    readonly asForceCollectionOwner: {
      readonly collection: u32;
      readonly owner: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isForceCollectionConfig: boolean;
    readonly asForceCollectionConfig: {
      readonly collection: u32;
      readonly config: PezpalletNftsCollectionConfig;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: PezspRuntimeMultiAddress;
      readonly maybeDeadline: Option<u32>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isClearAllTransferApprovals: boolean;
    readonly asClearAllTransferApprovals: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isLockItemProperties: boolean;
    readonly asLockItemProperties: {
      readonly collection: u32;
      readonly item: u32;
      readonly lockMetadata: bool;
      readonly lockAttributes: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly namespace: PezpalletNftsAttributeNamespace;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isForceSetAttribute: boolean;
    readonly asForceSetAttribute: {
      readonly setAs: Option<PezspCoreCryptoAccountId32>;
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly namespace: PezpalletNftsAttributeNamespace;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly namespace: PezpalletNftsAttributeNamespace;
      readonly key: Bytes;
    } & Struct;
    readonly isApproveItemAttributes: boolean;
    readonly asApproveItemAttributes: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isCancelItemAttributesApproval: boolean;
    readonly asCancelItemAttributesApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: PezspRuntimeMultiAddress;
      readonly witness: PezpalletNftsCancelAttributesApprovalWitness;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u32;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isUpdateMintSettings: boolean;
    readonly asUpdateMintSettings: {
      readonly collection: u32;
      readonly mintSettings: PezpalletNftsMintSettings;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<PezspRuntimeMultiAddress>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u32;
      readonly item: u32;
      readonly bidPrice: u128;
    } & Struct;
    readonly isPayTips: boolean;
    readonly asPayTips: {
      readonly tips: Vec<PezpalletNftsItemTip>;
    } & Struct;
    readonly isCreateSwap: boolean;
    readonly asCreateSwap: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
      readonly desiredCollection: u32;
      readonly maybeDesiredItem: Option<u32>;
      readonly maybePrice: Option<PezpalletNftsPriceWithDirection>;
      readonly duration: u32;
    } & Struct;
    readonly isCancelSwap: boolean;
    readonly asCancelSwap: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
    } & Struct;
    readonly isClaimSwap: boolean;
    readonly asClaimSwap: {
      readonly sendCollection: u32;
      readonly sendItem: u32;
      readonly receiveCollection: u32;
      readonly receiveItem: u32;
      readonly witnessPrice: Option<PezpalletNftsPriceWithDirection>;
    } & Struct;
    readonly isMintPreSigned: boolean;
    readonly asMintPreSigned: {
      readonly mintData: PezpalletNftsPreSignedMint;
      readonly signature: PezspRuntimeMultiSignature;
      readonly signer: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSetAttributesPreSigned: boolean;
    readonly asSetAttributesPreSigned: {
      readonly data: PezpalletNftsPreSignedAttributes;
      readonly signature: PezspRuntimeMultiSignature;
      readonly signer: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'ForceMint' | 'Burn' | 'Transfer' | 'Redeposit' | 'LockItemTransfer' | 'UnlockItemTransfer' | 'LockCollection' | 'TransferOwnership' | 'SetTeam' | 'ForceCollectionOwner' | 'ForceCollectionConfig' | 'ApproveTransfer' | 'CancelApproval' | 'ClearAllTransferApprovals' | 'LockItemProperties' | 'SetAttribute' | 'ForceSetAttribute' | 'ClearAttribute' | 'ApproveItemAttributes' | 'CancelItemAttributesApproval' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'UpdateMintSettings' | 'SetPrice' | 'BuyItem' | 'PayTips' | 'CreateSwap' | 'CancelSwap' | 'ClaimSwap' | 'MintPreSigned' | 'SetAttributesPreSigned';
  }

  /** @name PezpalletNftsCollectionConfig (354) */
  interface PezpalletNftsCollectionConfig extends Struct {
    readonly settings: u64;
    readonly maxSupply: Option<u32>;
    readonly mintSettings: PezpalletNftsMintSettings;
  }

  /** @name PezpalletNftsCollectionSetting (356) */
  interface PezpalletNftsCollectionSetting extends Enum {
    readonly isTransferableItems: boolean;
    readonly isUnlockedMetadata: boolean;
    readonly isUnlockedAttributes: boolean;
    readonly isUnlockedMaxSupply: boolean;
    readonly isDepositRequired: boolean;
    readonly type: 'TransferableItems' | 'UnlockedMetadata' | 'UnlockedAttributes' | 'UnlockedMaxSupply' | 'DepositRequired';
  }

  /** @name PezpalletNftsMintSettings (357) */
  interface PezpalletNftsMintSettings extends Struct {
    readonly mintType: PezpalletNftsMintType;
    readonly price: Option<u128>;
    readonly startBlock: Option<u32>;
    readonly endBlock: Option<u32>;
    readonly defaultItemSettings: u64;
  }

  /** @name PezpalletNftsMintType (358) */
  interface PezpalletNftsMintType extends Enum {
    readonly isIssuer: boolean;
    readonly isPublic: boolean;
    readonly isHolderOf: boolean;
    readonly asHolderOf: u32;
    readonly type: 'Issuer' | 'Public' | 'HolderOf';
  }

  /** @name PezpalletNftsItemSetting (360) */
  interface PezpalletNftsItemSetting extends Enum {
    readonly isTransferable: boolean;
    readonly isUnlockedMetadata: boolean;
    readonly isUnlockedAttributes: boolean;
    readonly type: 'Transferable' | 'UnlockedMetadata' | 'UnlockedAttributes';
  }

  /** @name PezpalletNftsDestroyWitness (361) */
  interface PezpalletNftsDestroyWitness extends Struct {
    readonly itemMetadatas: Compact<u32>;
    readonly itemConfigs: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PezpalletNftsMintWitness (363) */
  interface PezpalletNftsMintWitness extends Struct {
    readonly ownedItem: Option<u32>;
    readonly mintPrice: Option<u128>;
  }

  /** @name PezpalletNftsItemConfig (364) */
  interface PezpalletNftsItemConfig extends Struct {
    readonly settings: u64;
  }

  /** @name PezpalletNftsCancelAttributesApprovalWitness (365) */
  interface PezpalletNftsCancelAttributesApprovalWitness extends Struct {
    readonly accountAttributes: u32;
  }

  /** @name PezpalletNftsItemTip (367) */
  interface PezpalletNftsItemTip extends Struct {
    readonly collection: u32;
    readonly item: u32;
    readonly receiver: PezspCoreCryptoAccountId32;
    readonly amount: u128;
  }

  /** @name PezpalletNftsPreSignedMint (369) */
  interface PezpalletNftsPreSignedMint extends Struct {
    readonly collection: u32;
    readonly item: u32;
    readonly attributes: Vec<ITuple<[Bytes, Bytes]>>;
    readonly metadata: Bytes;
    readonly onlyAccount: Option<PezspCoreCryptoAccountId32>;
    readonly deadline: u32;
    readonly mintPrice: Option<u128>;
  }

  /** @name PezpalletNftsPreSignedAttributes (370) */
  interface PezpalletNftsPreSignedAttributes extends Struct {
    readonly collection: u32;
    readonly item: u32;
    readonly attributes: Vec<ITuple<[Bytes, Bytes]>>;
    readonly namespace: PezpalletNftsAttributeNamespace;
    readonly deadline: u32;
  }

  /** @name PezpalletNftFractionalizationCall (371) */
  interface PezpalletNftFractionalizationCall extends Enum {
    readonly isFractionalize: boolean;
    readonly asFractionalize: {
      readonly nftCollectionId: u32;
      readonly nftId: u32;
      readonly assetId: u32;
      readonly beneficiary: PezspRuntimeMultiAddress;
      readonly fractions: u128;
    } & Struct;
    readonly isUnify: boolean;
    readonly asUnify: {
      readonly nftCollectionId: u32;
      readonly nftId: u32;
      readonly assetId: u32;
      readonly beneficiary: PezspRuntimeMultiAddress;
    } & Struct;
    readonly type: 'Fractionalize' | 'Unify';
  }

  /** @name PezpalletSalaryCall (372) */
  interface PezpalletSalaryCall extends Enum {
    readonly isInit: boolean;
    readonly isBump: boolean;
    readonly isInduct: boolean;
    readonly isRegister: boolean;
    readonly isPayout: boolean;
    readonly isPayoutOther: boolean;
    readonly asPayoutOther: {
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isCheckPayment: boolean;
    readonly type: 'Init' | 'Bump' | 'Induct' | 'Register' | 'Payout' | 'PayoutOther' | 'CheckPayment';
  }

  /** @name PezpalletCoreFellowshipCall (373) */
  interface PezpalletCoreFellowshipCall extends Enum {
    readonly isBump: boolean;
    readonly asBump: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSetParams: boolean;
    readonly asSetParams: {
      readonly params: PezpalletCoreFellowshipParamsTypeU128;
    } & Struct;
    readonly isSetActive: boolean;
    readonly asSetActive: {
      readonly isActive: bool;
    } & Struct;
    readonly isApprove: boolean;
    readonly asApprove: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly atRank: u16;
    } & Struct;
    readonly isInduct: boolean;
    readonly asInduct: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPromote: boolean;
    readonly asPromote: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isOffboard: boolean;
    readonly asOffboard: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSubmitEvidence: boolean;
    readonly asSubmitEvidence: {
      readonly wish: PezpalletCoreFellowshipWish;
      readonly evidence: Bytes;
    } & Struct;
    readonly isImport: boolean;
    readonly isSetPartialParams: boolean;
    readonly asSetPartialParams: {
      readonly partialParams: PezpalletCoreFellowshipParamsTypeOption;
    } & Struct;
    readonly isPromoteFast: boolean;
    readonly asPromoteFast: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isImportMember: boolean;
    readonly asImportMember: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'Bump' | 'SetParams' | 'SetActive' | 'Approve' | 'Induct' | 'Promote' | 'Offboard' | 'SubmitEvidence' | 'Import' | 'SetPartialParams' | 'PromoteFast' | 'ImportMember';
  }

  /** @name PezpalletCoreFellowshipParamsTypeOption (374) */
  interface PezpalletCoreFellowshipParamsTypeOption extends Struct {
    readonly activeSalary: Vec<Option<u128>>;
    readonly passiveSalary: Vec<Option<u128>>;
    readonly demotionPeriod: Vec<Option<u32>>;
    readonly minPromotionPeriod: Vec<Option<u32>>;
    readonly offboardTimeout: Option<u32>;
  }

  /** @name PezpalletTransactionStorageCall (379) */
  interface PezpalletTransactionStorageCall extends Enum {
    readonly isStore: boolean;
    readonly asStore: {
      readonly data: Bytes;
    } & Struct;
    readonly isRenew: boolean;
    readonly asRenew: {
      readonly block: u32;
      readonly index: u32;
    } & Struct;
    readonly isCheckProof: boolean;
    readonly asCheckProof: {
      readonly proof: PezspTransactionStorageProofTransactionStorageProof;
    } & Struct;
    readonly type: 'Store' | 'Renew' | 'CheckProof';
  }

  /** @name PezspTransactionStorageProofTransactionStorageProof (380) */
  interface PezspTransactionStorageProofTransactionStorageProof extends Struct {
    readonly chunk: Bytes;
    readonly proof: Vec<Bytes>;
  }

  /** @name PezpalletBagsListCall (381) */
  interface PezpalletBagsListCall extends Enum {
    readonly isRebag: boolean;
    readonly asRebag: {
      readonly dislocated: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isPutInFrontOf: boolean;
    readonly asPutInFrontOf: {
      readonly lighter: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isPutInFrontOfOther: boolean;
    readonly asPutInFrontOfOther: {
      readonly heavier: PezspRuntimeMultiAddress;
      readonly lighter: PezspRuntimeMultiAddress;
    } & Struct;
    readonly type: 'Rebag' | 'PutInFrontOf' | 'PutInFrontOfOther';
  }

  /** @name PezpalletStateTrieMigrationCall (382) */
  interface PezpalletStateTrieMigrationCall extends Enum {
    readonly isControlAutoMigration: boolean;
    readonly asControlAutoMigration: {
      readonly maybeConfig: Option<PezpalletStateTrieMigrationMigrationLimits>;
    } & Struct;
    readonly isContinueMigrate: boolean;
    readonly asContinueMigrate: {
      readonly limits: PezpalletStateTrieMigrationMigrationLimits;
      readonly realSizeUpper: u32;
      readonly witnessTask: PezpalletStateTrieMigrationMigrationTask;
    } & Struct;
    readonly isMigrateCustomTop: boolean;
    readonly asMigrateCustomTop: {
      readonly keys_: Vec<Bytes>;
      readonly witnessSize: u32;
    } & Struct;
    readonly isMigrateCustomChild: boolean;
    readonly asMigrateCustomChild: {
      readonly root: Bytes;
      readonly childKeys: Vec<Bytes>;
      readonly totalSize: u32;
    } & Struct;
    readonly isSetSignedMaxLimits: boolean;
    readonly asSetSignedMaxLimits: {
      readonly limits: PezpalletStateTrieMigrationMigrationLimits;
    } & Struct;
    readonly isForceSetProgress: boolean;
    readonly asForceSetProgress: {
      readonly progressTop: PezpalletStateTrieMigrationProgress;
      readonly progressChild: PezpalletStateTrieMigrationProgress;
    } & Struct;
    readonly type: 'ControlAutoMigration' | 'ContinueMigrate' | 'MigrateCustomTop' | 'MigrateCustomChild' | 'SetSignedMaxLimits' | 'ForceSetProgress';
  }

  /** @name PezpalletStateTrieMigrationMigrationLimits (384) */
  interface PezpalletStateTrieMigrationMigrationLimits extends Struct {
    readonly size_: u32;
    readonly item: u32;
  }

  /** @name PezpalletStateTrieMigrationMigrationTask (385) */
  interface PezpalletStateTrieMigrationMigrationTask extends Struct {
    readonly progressTop: PezpalletStateTrieMigrationProgress;
    readonly progressChild: PezpalletStateTrieMigrationProgress;
    readonly size_: u32;
    readonly topItems: u32;
    readonly childItems: u32;
  }

  /** @name PezpalletStateTrieMigrationProgress (386) */
  interface PezpalletStateTrieMigrationProgress extends Enum {
    readonly isToStart: boolean;
    readonly isLastKey: boolean;
    readonly asLastKey: Bytes;
    readonly isComplete: boolean;
    readonly type: 'ToStart' | 'LastKey' | 'Complete';
  }

  /** @name PezpalletChildBountiesCall (388) */
  interface PezpalletChildBountiesCall extends Enum {
    readonly isAddChildBounty: boolean;
    readonly asAddChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly curator: PezspRuntimeMultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isAwardChildBounty: boolean;
    readonly asAwardChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly beneficiary: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isClaimChildBounty: boolean;
    readonly asClaimChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isCloseChildBounty: boolean;
    readonly asCloseChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly type: 'AddChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardChildBounty' | 'ClaimChildBounty' | 'CloseChildBounty';
  }

  /** @name PezpalletReferendaCall (389) */
  interface PezpalletReferendaCall extends Enum {
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly proposalOrigin: KitchensinkRuntimeOriginCaller;
      readonly proposal: PezframeSupportPreimagesBounded;
      readonly enactmentMoment: PezframeSupportScheduleDispatchTime;
    } & Struct;
    readonly isPlaceDecisionDeposit: boolean;
    readonly asPlaceDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isRefundDecisionDeposit: boolean;
    readonly asRefundDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly index: u32;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly index: u32;
    } & Struct;
    readonly isNudgeReferendum: boolean;
    readonly asNudgeReferendum: {
      readonly index: u32;
    } & Struct;
    readonly isOneFewerDeciding: boolean;
    readonly asOneFewerDeciding: {
      readonly track: u16;
    } & Struct;
    readonly isRefundSubmissionDeposit: boolean;
    readonly asRefundSubmissionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly index: u32;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Submit' | 'PlaceDecisionDeposit' | 'RefundDecisionDeposit' | 'Cancel' | 'Kill' | 'NudgeReferendum' | 'OneFewerDeciding' | 'RefundSubmissionDeposit' | 'SetMetadata';
  }

  /** @name PezframeSupportScheduleDispatchTime (390) */
  interface PezframeSupportScheduleDispatchTime extends Enum {
    readonly isAt: boolean;
    readonly asAt: u32;
    readonly isAfter: boolean;
    readonly asAfter: u32;
    readonly type: 'At' | 'After';
  }

  /** @name PezpalletRemarkCall (391) */
  interface PezpalletRemarkCall extends Enum {
    readonly isStore: boolean;
    readonly asStore: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Store';
  }

  /** @name PezpalletRootTestingCall (392) */
  interface PezpalletRootTestingCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: u32;
    } & Struct;
    readonly isTriggerDefensive: boolean;
    readonly type: 'FillBlock' | 'TriggerDefensive';
  }

  /** @name PezpalletConvictionVotingCall (393) */
  interface PezpalletConvictionVotingCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly pollIndex: Compact<u32>;
      readonly vote: PezpalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly class: u16;
      readonly to: PezspRuntimeMultiAddress;
      readonly conviction: PezpalletConvictionVotingConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly asUndelegate: {
      readonly class: u16;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly class: u16;
      readonly target: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly class: Option<u16>;
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: PezspRuntimeMultiAddress;
      readonly class: u16;
      readonly index: u32;
    } & Struct;
    readonly type: 'Vote' | 'Delegate' | 'Undelegate' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote';
  }

  /** @name PezpalletConvictionVotingVoteAccountVote (394) */
  interface PezpalletConvictionVotingVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly isSplitAbstain: boolean;
    readonly asSplitAbstain: {
      readonly aye: u128;
      readonly nay: u128;
      readonly abstain: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split' | 'SplitAbstain';
  }

  /** @name PezpalletConvictionVotingConviction (396) */
  interface PezpalletConvictionVotingConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PezpalletWhitelistCall (397) */
  interface PezpalletWhitelistCall extends Enum {
    readonly isWhitelistCall: boolean;
    readonly asWhitelistCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveWhitelistedCall: boolean;
    readonly asRemoveWhitelistedCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isDispatchWhitelistedCall: boolean;
    readonly asDispatchWhitelistedCall: {
      readonly callHash: H256;
      readonly callEncodedLen: u32;
      readonly callWeightWitness: PezspWeightsWeightV2Weight;
    } & Struct;
    readonly isDispatchWhitelistedCallWithPreimage: boolean;
    readonly asDispatchWhitelistedCallWithPreimage: {
      readonly call: RuntimeCall;
    } & Struct;
    readonly type: 'WhitelistCall' | 'RemoveWhitelistedCall' | 'DispatchWhitelistedCall' | 'DispatchWhitelistedCallWithPreimage';
  }

  /** @name PezpalletAllianceCall (399) */
  interface PezpalletAllianceCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: RuntimeCall;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isInitMembers: boolean;
    readonly asInitMembers: {
      readonly fellows: Vec<PezspCoreCryptoAccountId32>;
      readonly allies: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isDisband: boolean;
    readonly asDisband: {
      readonly witness: PezpalletAllianceDisbandWitness;
    } & Struct;
    readonly isSetRule: boolean;
    readonly asSetRule: {
      readonly rule: PezpalletAllianceCid;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly announcement: PezpalletAllianceCid;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly announcement: PezpalletAllianceCid;
    } & Struct;
    readonly isJoinAlliance: boolean;
    readonly isNominateAlly: boolean;
    readonly asNominateAlly: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isElevateAlly: boolean;
    readonly asElevateAlly: {
      readonly ally: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isGiveRetirementNotice: boolean;
    readonly isRetire: boolean;
    readonly isKickMember: boolean;
    readonly asKickMember: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isAddUnscrupulousItems: boolean;
    readonly asAddUnscrupulousItems: {
      readonly items: Vec<PezpalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isRemoveUnscrupulousItems: boolean;
    readonly asRemoveUnscrupulousItems: {
      readonly items: Vec<PezpalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: PezspWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isAbdicateFellowStatus: boolean;
    readonly type: 'Propose' | 'Vote' | 'InitMembers' | 'Disband' | 'SetRule' | 'Announce' | 'RemoveAnnouncement' | 'JoinAlliance' | 'NominateAlly' | 'ElevateAlly' | 'GiveRetirementNotice' | 'Retire' | 'KickMember' | 'AddUnscrupulousItems' | 'RemoveUnscrupulousItems' | 'Close' | 'AbdicateFellowStatus';
  }

  /** @name PezpalletAllianceDisbandWitness (400) */
  interface PezpalletAllianceDisbandWitness extends Struct {
    readonly fellowMembers: Compact<u32>;
    readonly allyMembers: Compact<u32>;
  }

  /** @name PezpalletAllianceCid (401) */
  interface PezpalletAllianceCid extends Struct {
    readonly version: PezpalletAllianceVersion;
    readonly codec: u64;
    readonly hash_: PezpalletAllianceMultihash;
  }

  /** @name PezpalletAllianceVersion (402) */
  interface PezpalletAllianceVersion extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PezpalletAllianceMultihash (403) */
  interface PezpalletAllianceMultihash extends Struct {
    readonly code: u64;
    readonly digest: Bytes;
  }

  /** @name PezpalletAllianceUnscrupulousItem (406) */
  interface PezpalletAllianceUnscrupulousItem extends Enum {
    readonly isAccountId: boolean;
    readonly asAccountId: PezspCoreCryptoAccountId32;
    readonly isWebsite: boolean;
    readonly asWebsite: Bytes;
    readonly type: 'AccountId' | 'Website';
  }

  /** @name PezpalletNominationPoolsCall (408) */
  interface PezpalletNominationPoolsCall extends Enum {
    readonly isJoin: boolean;
    readonly asJoin: {
      readonly amount: Compact<u128>;
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly extra: PezpalletNominationPoolsBondExtra;
    } & Struct;
    readonly isClaimPayout: boolean;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly memberAccount: PezspRuntimeMultiAddress;
      readonly unbondingPoints: Compact<u128>;
    } & Struct;
    readonly isPoolWithdrawUnbonded: boolean;
    readonly asPoolWithdrawUnbonded: {
      readonly poolId: u32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly memberAccount: PezspRuntimeMultiAddress;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly amount: Compact<u128>;
      readonly root: PezspRuntimeMultiAddress;
      readonly nominator: PezspRuntimeMultiAddress;
      readonly bouncer: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isCreateWithPoolId: boolean;
    readonly asCreateWithPoolId: {
      readonly amount: Compact<u128>;
      readonly root: PezspRuntimeMultiAddress;
      readonly nominator: PezspRuntimeMultiAddress;
      readonly bouncer: PezspRuntimeMultiAddress;
      readonly poolId: u32;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly poolId: u32;
      readonly validators: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isSetState: boolean;
    readonly asSetState: {
      readonly poolId: u32;
      readonly state: PezpalletNominationPoolsPoolState;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly poolId: u32;
      readonly metadata: Bytes;
    } & Struct;
    readonly isSetConfigs: boolean;
    readonly asSetConfigs: {
      readonly minJoinBond: PezpalletNominationPoolsConfigOpU128;
      readonly minCreateBond: PezpalletNominationPoolsConfigOpU128;
      readonly maxPools: PezpalletNominationPoolsConfigOpU32;
      readonly maxMembers: PezpalletNominationPoolsConfigOpU32;
      readonly maxMembersPerPool: PezpalletNominationPoolsConfigOpU32;
      readonly globalMaxCommission: PezpalletNominationPoolsConfigOpPerbill;
    } & Struct;
    readonly isUpdateRoles: boolean;
    readonly asUpdateRoles: {
      readonly poolId: u32;
      readonly newRoot: PezpalletNominationPoolsConfigOpAccountId32;
      readonly newNominator: PezpalletNominationPoolsConfigOpAccountId32;
      readonly newBouncer: PezpalletNominationPoolsConfigOpAccountId32;
    } & Struct;
    readonly isChill: boolean;
    readonly asChill: {
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtraOther: boolean;
    readonly asBondExtraOther: {
      readonly member: PezspRuntimeMultiAddress;
      readonly extra: PezpalletNominationPoolsBondExtra;
    } & Struct;
    readonly isSetClaimPermission: boolean;
    readonly asSetClaimPermission: {
      readonly permission: PezpalletNominationPoolsClaimPermission;
    } & Struct;
    readonly isClaimPayoutOther: boolean;
    readonly asClaimPayoutOther: {
      readonly other: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSetCommission: boolean;
    readonly asSetCommission: {
      readonly poolId: u32;
      readonly newCommission: Option<ITuple<[u32, PezspCoreCryptoAccountId32]>>;
    } & Struct;
    readonly isSetCommissionMax: boolean;
    readonly asSetCommissionMax: {
      readonly poolId: u32;
      readonly maxCommission: u32;
    } & Struct;
    readonly isSetCommissionChangeRate: boolean;
    readonly asSetCommissionChangeRate: {
      readonly poolId: u32;
      readonly changeRate: PezpalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isClaimCommission: boolean;
    readonly asClaimCommission: {
      readonly poolId: u32;
    } & Struct;
    readonly isAdjustPoolDeposit: boolean;
    readonly asAdjustPoolDeposit: {
      readonly poolId: u32;
    } & Struct;
    readonly isSetCommissionClaimPermission: boolean;
    readonly asSetCommissionClaimPermission: {
      readonly poolId: u32;
      readonly permission: Option<PezpalletNominationPoolsCommissionClaimPermission>;
    } & Struct;
    readonly isApplySlash: boolean;
    readonly asApplySlash: {
      readonly memberAccount: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isMigrateDelegation: boolean;
    readonly asMigrateDelegation: {
      readonly memberAccount: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isMigratePoolToDelegateStake: boolean;
    readonly asMigratePoolToDelegateStake: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'Join' | 'BondExtra' | 'ClaimPayout' | 'Unbond' | 'PoolWithdrawUnbonded' | 'WithdrawUnbonded' | 'Create' | 'CreateWithPoolId' | 'Nominate' | 'SetState' | 'SetMetadata' | 'SetConfigs' | 'UpdateRoles' | 'Chill' | 'BondExtraOther' | 'SetClaimPermission' | 'ClaimPayoutOther' | 'SetCommission' | 'SetCommissionMax' | 'SetCommissionChangeRate' | 'ClaimCommission' | 'AdjustPoolDeposit' | 'SetCommissionClaimPermission' | 'ApplySlash' | 'MigrateDelegation' | 'MigratePoolToDelegateStake';
  }

  /** @name PezpalletNominationPoolsBondExtra (409) */
  interface PezpalletNominationPoolsBondExtra extends Enum {
    readonly isFreeBalance: boolean;
    readonly asFreeBalance: u128;
    readonly isRewards: boolean;
    readonly type: 'FreeBalance' | 'Rewards';
  }

  /** @name PezpalletNominationPoolsPoolState (410) */
  interface PezpalletNominationPoolsPoolState extends Enum {
    readonly isOpen: boolean;
    readonly isBlocked: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Open' | 'Blocked' | 'Destroying';
  }

  /** @name PezpalletNominationPoolsConfigOpU128 (411) */
  interface PezpalletNominationPoolsConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletNominationPoolsConfigOpU32 (412) */
  interface PezpalletNominationPoolsConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletNominationPoolsConfigOpPerbill (413) */
  interface PezpalletNominationPoolsConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletNominationPoolsConfigOpAccountId32 (414) */
  interface PezpalletNominationPoolsConfigOpAccountId32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: PezspCoreCryptoAccountId32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletNominationPoolsClaimPermission (415) */
  interface PezpalletNominationPoolsClaimPermission extends Enum {
    readonly isPermissioned: boolean;
    readonly isPermissionlessCompound: boolean;
    readonly isPermissionlessWithdraw: boolean;
    readonly isPermissionlessAll: boolean;
    readonly type: 'Permissioned' | 'PermissionlessCompound' | 'PermissionlessWithdraw' | 'PermissionlessAll';
  }

  /** @name PezpalletNominationPoolsCommissionChangeRate (418) */
  interface PezpalletNominationPoolsCommissionChangeRate extends Struct {
    readonly maxIncrease: u32;
    readonly minDelay: u32;
  }

  /** @name PezpalletNominationPoolsCommissionClaimPermission (420) */
  interface PezpalletNominationPoolsCommissionClaimPermission extends Enum {
    readonly isPermissionless: boolean;
    readonly isAccount: boolean;
    readonly asAccount: PezspCoreCryptoAccountId32;
    readonly type: 'Permissionless' | 'Account';
  }

  /** @name PezpalletRankedCollectiveCall (422) */
  interface PezpalletRankedCollectiveCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isPromoteMember: boolean;
    readonly asPromoteMember: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isDemoteMember: boolean;
    readonly asDemoteMember: {
      readonly who: PezspRuntimeMultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: PezspRuntimeMultiAddress;
      readonly minRank: u16;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly poll: u32;
      readonly aye: bool;
    } & Struct;
    readonly isCleanupPoll: boolean;
    readonly asCleanupPoll: {
      readonly pollIndex: u32;
      readonly max: u32;
    } & Struct;
    readonly isExchangeMember: boolean;
    readonly asExchangeMember: {
      readonly who: PezspRuntimeMultiAddress;
      readonly newWho: PezspRuntimeMultiAddress;
    } & Struct;
    readonly type: 'AddMember' | 'PromoteMember' | 'DemoteMember' | 'RemoveMember' | 'Vote' | 'CleanupPoll' | 'ExchangeMember';
  }

  /** @name PezpalletAssetConversionCall (423) */
  interface PezpalletAssetConversionCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly asset1: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly asset1: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly amount1Desired: u128;
      readonly amount2Desired: u128;
      readonly amount1Min: u128;
      readonly amount2Min: u128;
      readonly mintTo: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly asset1: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly lpTokenBurn: u128;
      readonly amount1MinReceive: u128;
      readonly amount2MinReceive: u128;
      readonly withdrawTo: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSwapExactTokensForTokens: boolean;
    readonly asSwapExactTokensForTokens: {
      readonly path: Vec<PezframeSupportTokensFungibleUnionOfNativeOrWithId>;
      readonly amountIn: u128;
      readonly amountOutMin: u128;
      readonly sendTo: PezspCoreCryptoAccountId32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isSwapTokensForExactTokens: boolean;
    readonly asSwapTokensForExactTokens: {
      readonly path: Vec<PezframeSupportTokensFungibleUnionOfNativeOrWithId>;
      readonly amountOut: u128;
      readonly amountInMax: u128;
      readonly sendTo: PezspCoreCryptoAccountId32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly asset1: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly type: 'CreatePool' | 'AddLiquidity' | 'RemoveLiquidity' | 'SwapExactTokensForTokens' | 'SwapTokensForExactTokens' | 'Touch';
  }

  /** @name PezpalletFastUnstakeCall (425) */
  interface PezpalletFastUnstakeCall extends Enum {
    readonly isRegisterFastUnstake: boolean;
    readonly isDeregister: boolean;
    readonly isControl: boolean;
    readonly asControl: {
      readonly erasToCheck: u32;
    } & Struct;
    readonly type: 'RegisterFastUnstake' | 'Deregister' | 'Control';
  }

  /** @name PezpalletMessageQueueCall (426) */
  interface PezpalletMessageQueueCall extends Enum {
    readonly isReapPage: boolean;
    readonly asReapPage: {
      readonly messageOrigin: u32;
      readonly pageIndex: u32;
    } & Struct;
    readonly isExecuteOverweight: boolean;
    readonly asExecuteOverweight: {
      readonly messageOrigin: u32;
      readonly page: u32;
      readonly index: u32;
      readonly weightLimit: PezspWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ReapPage' | 'ExecuteOverweight';
  }

  /** @name PezframeBenchmarkingPezpalletPovCall (427) */
  interface PezframeBenchmarkingPezpalletPovCall extends Enum {
    readonly isEmitEvent: boolean;
    readonly isNoop: boolean;
    readonly type: 'EmitEvent' | 'Noop';
  }

  /** @name PezpalletTxPauseCall (428) */
  interface PezpalletTxPauseCall extends Enum {
    readonly isPause: boolean;
    readonly asPause: {
      readonly fullName: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly isUnpause: boolean;
    readonly asUnpause: {
      readonly ident: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly type: 'Pause' | 'Unpause';
  }

  /** @name PezpalletSafeModeCall (430) */
  interface PezpalletSafeModeCall extends Enum {
    readonly isEnter: boolean;
    readonly isForceEnter: boolean;
    readonly isExtend: boolean;
    readonly isForceExtend: boolean;
    readonly isForceExit: boolean;
    readonly isForceSlashDeposit: boolean;
    readonly asForceSlashDeposit: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly block: u32;
    } & Struct;
    readonly isReleaseDeposit: boolean;
    readonly asReleaseDeposit: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly block: u32;
    } & Struct;
    readonly isForceReleaseDeposit: boolean;
    readonly asForceReleaseDeposit: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly block: u32;
    } & Struct;
    readonly type: 'Enter' | 'ForceEnter' | 'Extend' | 'ForceExtend' | 'ForceExit' | 'ForceSlashDeposit' | 'ReleaseDeposit' | 'ForceReleaseDeposit';
  }

  /** @name PezpalletMigrationsCall (431) */
  interface PezpalletMigrationsCall extends Enum {
    readonly isForceSetCursor: boolean;
    readonly asForceSetCursor: {
      readonly cursor: Option<PezpalletMigrationsMigrationCursor>;
    } & Struct;
    readonly isForceSetActiveCursor: boolean;
    readonly asForceSetActiveCursor: {
      readonly index: u32;
      readonly innerCursor: Option<Bytes>;
      readonly startedAt: Option<u32>;
    } & Struct;
    readonly isForceOnboardMbms: boolean;
    readonly isClearHistoric: boolean;
    readonly asClearHistoric: {
      readonly selector: PezpalletMigrationsHistoricCleanupSelector;
    } & Struct;
    readonly type: 'ForceSetCursor' | 'ForceSetActiveCursor' | 'ForceOnboardMbms' | 'ClearHistoric';
  }

  /** @name PezpalletMigrationsMigrationCursor (433) */
  interface PezpalletMigrationsMigrationCursor extends Enum {
    readonly isActive: boolean;
    readonly asActive: PezpalletMigrationsActiveCursor;
    readonly isStuck: boolean;
    readonly type: 'Active' | 'Stuck';
  }

  /** @name PezpalletMigrationsActiveCursor (435) */
  interface PezpalletMigrationsActiveCursor extends Struct {
    readonly index: u32;
    readonly innerCursor: Option<Bytes>;
    readonly startedAt: u32;
  }

  /** @name PezpalletMigrationsHistoricCleanupSelector (437) */
  interface PezpalletMigrationsHistoricCleanupSelector extends Enum {
    readonly isSpecific: boolean;
    readonly asSpecific: Vec<Bytes>;
    readonly isWildcard: boolean;
    readonly asWildcard: {
      readonly limit: Option<u32>;
      readonly previousCursor: Option<Bytes>;
    } & Struct;
    readonly type: 'Specific' | 'Wildcard';
  }

  /** @name PezpalletBrokerCall (440) */
  interface PezpalletBrokerCall extends Enum {
    readonly isConfigure: boolean;
    readonly asConfigure: {
      readonly config: PezpalletBrokerConfigRecord;
    } & Struct;
    readonly isReserve: boolean;
    readonly asReserve: {
      readonly workload: Vec<PezpalletBrokerScheduleItem>;
    } & Struct;
    readonly isUnreserve: boolean;
    readonly asUnreserve: {
      readonly itemIndex: u32;
    } & Struct;
    readonly isSetLease: boolean;
    readonly asSetLease: {
      readonly task: u32;
      readonly until: u32;
    } & Struct;
    readonly isStartSales: boolean;
    readonly asStartSales: {
      readonly endPrice: u128;
      readonly extraCores: u16;
    } & Struct;
    readonly isPurchase: boolean;
    readonly asPurchase: {
      readonly priceLimit: u128;
    } & Struct;
    readonly isRenew: boolean;
    readonly asRenew: {
      readonly core: u16;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly newOwner: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPartition: boolean;
    readonly asPartition: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly pivot: u32;
    } & Struct;
    readonly isInterlace: boolean;
    readonly asInterlace: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly pivot: PezpalletBrokerCoreMask;
    } & Struct;
    readonly isAssign: boolean;
    readonly asAssign: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly task: u32;
      readonly finality: PezpalletBrokerFinality;
    } & Struct;
    readonly isPool: boolean;
    readonly asPool: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly payee: PezspCoreCryptoAccountId32;
      readonly finality: PezpalletBrokerFinality;
    } & Struct;
    readonly isClaimRevenue: boolean;
    readonly asClaimRevenue: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly maxTimeslices: u32;
    } & Struct;
    readonly isPurchaseCredit: boolean;
    readonly asPurchaseCredit: {
      readonly amount: u128;
      readonly beneficiary: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDropRegion: boolean;
    readonly asDropRegion: {
      readonly regionId: PezpalletBrokerRegionId;
    } & Struct;
    readonly isDropContribution: boolean;
    readonly asDropContribution: {
      readonly regionId: PezpalletBrokerRegionId;
    } & Struct;
    readonly isDropHistory: boolean;
    readonly asDropHistory: {
      readonly when: u32;
    } & Struct;
    readonly isDropRenewal: boolean;
    readonly asDropRenewal: {
      readonly core: u16;
      readonly when: u32;
    } & Struct;
    readonly isRequestCoreCount: boolean;
    readonly asRequestCoreCount: {
      readonly coreCount: u16;
    } & Struct;
    readonly isNotifyCoreCount: boolean;
    readonly asNotifyCoreCount: {
      readonly coreCount: u16;
    } & Struct;
    readonly isNotifyRevenue: boolean;
    readonly asNotifyRevenue: {
      readonly revenue: PezpalletBrokerOnDemandRevenueRecord;
    } & Struct;
    readonly isEnableAutoRenew: boolean;
    readonly asEnableAutoRenew: {
      readonly core: u16;
      readonly task: u32;
      readonly workloadEndHint: Option<u32>;
    } & Struct;
    readonly isDisableAutoRenew: boolean;
    readonly asDisableAutoRenew: {
      readonly core: u16;
      readonly task: u32;
    } & Struct;
    readonly isForceReserve: boolean;
    readonly asForceReserve: {
      readonly workload: Vec<PezpalletBrokerScheduleItem>;
      readonly core: u16;
    } & Struct;
    readonly isRemoveLease: boolean;
    readonly asRemoveLease: {
      readonly task: u32;
    } & Struct;
    readonly isRemoveAssignment: boolean;
    readonly asRemoveAssignment: {
      readonly regionId: PezpalletBrokerRegionId;
    } & Struct;
    readonly isSwapLeases: boolean;
    readonly asSwapLeases: {
      readonly id: u32;
      readonly other: u32;
    } & Struct;
    readonly type: 'Configure' | 'Reserve' | 'Unreserve' | 'SetLease' | 'StartSales' | 'Purchase' | 'Renew' | 'Transfer' | 'Partition' | 'Interlace' | 'Assign' | 'Pool' | 'ClaimRevenue' | 'PurchaseCredit' | 'DropRegion' | 'DropContribution' | 'DropHistory' | 'DropRenewal' | 'RequestCoreCount' | 'NotifyCoreCount' | 'NotifyRevenue' | 'EnableAutoRenew' | 'DisableAutoRenew' | 'ForceReserve' | 'RemoveLease' | 'RemoveAssignment' | 'SwapLeases';
  }

  /** @name PezpalletBrokerConfigRecord (441) */
  interface PezpalletBrokerConfigRecord extends Struct {
    readonly advanceNotice: u32;
    readonly interludeLength: u32;
    readonly leadinLength: u32;
    readonly regionLength: u32;
    readonly idealBulkProportion: u32;
    readonly limitCoresOffered: Option<u16>;
    readonly renewalBump: u32;
    readonly contributionTimeout: u32;
  }

  /** @name PezpalletBrokerScheduleItem (443) */
  interface PezpalletBrokerScheduleItem extends Struct {
    readonly mask: PezpalletBrokerCoreMask;
    readonly assignment: PezpalletBrokerCoretimeInterfaceCoreAssignment;
  }

  /** @name PezpalletBrokerCoreMask (444) */
  interface PezpalletBrokerCoreMask extends U8aFixed {}

  /** @name PezpalletBrokerCoretimeInterfaceCoreAssignment (445) */
  interface PezpalletBrokerCoretimeInterfaceCoreAssignment extends Enum {
    readonly isIdle: boolean;
    readonly isPool: boolean;
    readonly isTask: boolean;
    readonly asTask: u32;
    readonly type: 'Idle' | 'Pool' | 'Task';
  }

  /** @name PezpalletBrokerRegionId (447) */
  interface PezpalletBrokerRegionId extends Struct {
    readonly begin: u32;
    readonly core: u16;
    readonly mask: PezpalletBrokerCoreMask;
  }

  /** @name PezpalletBrokerFinality (448) */
  interface PezpalletBrokerFinality extends Enum {
    readonly isProvisional: boolean;
    readonly isFinal: boolean;
    readonly type: 'Provisional' | 'Final';
  }

  /** @name PezpalletBrokerOnDemandRevenueRecord (449) */
  interface PezpalletBrokerOnDemandRevenueRecord extends Struct {
    readonly until: u32;
    readonly amount: u128;
  }

  /** @name PezpalletMixnetCall (450) */
  interface PezpalletMixnetCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly registration: PezpalletMixnetRegistration;
      readonly signature: PezspMixnetAppSignature;
    } & Struct;
    readonly type: 'Register';
  }

  /** @name PezpalletMixnetRegistration (451) */
  interface PezpalletMixnetRegistration extends Struct {
    readonly blockNumber: u32;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly mixnode: PezpalletMixnetBoundedMixnode;
  }

  /** @name PezpalletMixnetBoundedMixnode (452) */
  interface PezpalletMixnetBoundedMixnode extends Struct {
    readonly kxPublic: U8aFixed;
    readonly peerId: U8aFixed;
    readonly externalAddresses: Vec<Bytes>;
  }

  /** @name PezspMixnetAppSignature (455) */
  interface PezspMixnetAppSignature extends U8aFixed {}

  /** @name PezpalletParametersCall (456) */
  interface PezpalletParametersCall extends Enum {
    readonly isSetParameter: boolean;
    readonly asSetParameter: {
      readonly keyValue: KitchensinkRuntimeRuntimeParameters;
    } & Struct;
    readonly type: 'SetParameter';
  }

  /** @name KitchensinkRuntimeRuntimeParameters (457) */
  interface KitchensinkRuntimeRuntimeParameters extends Enum {
    readonly isStorage: boolean;
    readonly asStorage: KitchensinkRuntimeDynamicParamsStorageParameters;
    readonly isReferenda: boolean;
    readonly asReferenda: KitchensinkRuntimeDynamicParamsReferendaParameters;
    readonly type: 'Storage' | 'Referenda';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageParameters (458) */
  interface KitchensinkRuntimeDynamicParamsStorageParameters extends Enum {
    readonly isBaseDeposit: boolean;
    readonly asBaseDeposit: ITuple<[KitchensinkRuntimeDynamicParamsStorageBaseDeposit, Option<u128>]>;
    readonly isByteDeposit: boolean;
    readonly asByteDeposit: ITuple<[KitchensinkRuntimeDynamicParamsStorageByteDeposit, Option<u128>]>;
    readonly type: 'BaseDeposit' | 'ByteDeposit';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageBaseDeposit (459) */
  type KitchensinkRuntimeDynamicParamsStorageBaseDeposit = Null;

  /** @name KitchensinkRuntimeDynamicParamsStorageByteDeposit (460) */
  type KitchensinkRuntimeDynamicParamsStorageByteDeposit = Null;

  /** @name KitchensinkRuntimeDynamicParamsReferendaParameters (461) */
  interface KitchensinkRuntimeDynamicParamsReferendaParameters extends Enum {
    readonly isTracks: boolean;
    readonly asTracks: ITuple<[KitchensinkRuntimeDynamicParamsReferendaTracks, Option<Vec<PezpalletReferendaTrack>>]>;
    readonly isOrigins: boolean;
    readonly asOrigins: ITuple<[KitchensinkRuntimeDynamicParamsReferendaOrigins, Option<Vec<ITuple<[KitchensinkRuntimeOriginCaller, u16]>>>]>;
    readonly type: 'Tracks' | 'Origins';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaTracks (462) */
  type KitchensinkRuntimeDynamicParamsReferendaTracks = Null;

  /** @name PezpalletReferendaTrack (465) */
  interface PezpalletReferendaTrack extends Struct {
    readonly id: u16;
    readonly info: {
      readonly name: U8aFixed;
      readonly maxDeciding: u32;
      readonly decisionDeposit: u128;
      readonly preparePeriod: u32;
      readonly decisionPeriod: u32;
      readonly confirmPeriod: u32;
      readonly minEnactmentPeriod: u32;
      readonly minApproval: PezpalletReferendaCurve;
      readonly minSupport: PezpalletReferendaCurve;
    } & Struct;
  }

  /** @name PezpalletReferendaCurve (467) */
  interface PezpalletReferendaCurve extends Enum {
    readonly isLinearDecreasing: boolean;
    readonly asLinearDecreasing: {
      readonly length: u32;
      readonly floor: u32;
      readonly ceil: u32;
    } & Struct;
    readonly isSteppedDecreasing: boolean;
    readonly asSteppedDecreasing: {
      readonly begin: u32;
      readonly end: u32;
      readonly step: u32;
      readonly period: u32;
    } & Struct;
    readonly isReciprocal: boolean;
    readonly asReciprocal: {
      readonly factor: i64;
      readonly xOffset: i64;
      readonly yOffset: i64;
    } & Struct;
    readonly type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaOrigins (471) */
  type KitchensinkRuntimeDynamicParamsReferendaOrigins = Null;

  /** @name PezpalletAssetConversionOpsCall (476) */
  interface PezpalletAssetConversionOpsCall extends Enum {
    readonly isMigrateToNewAccount: boolean;
    readonly asMigrateToNewAccount: {
      readonly asset1: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly type: 'MigrateToNewAccount';
  }

  /** @name PezpalletReviveCall (477) */
  interface PezpalletReviveCall extends Enum {
    readonly isEthTransact: boolean;
    readonly asEthTransact: {
      readonly payload: Bytes;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: H160;
      readonly value: Compact<u128>;
      readonly gasLimit: PezspWeightsWeightV2Weight;
      readonly storageDepositLimit: Compact<u128>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: PezspWeightsWeightV2Weight;
      readonly storageDepositLimit: Compact<u128>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Option<U8aFixed>;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: PezspWeightsWeightV2Weight;
      readonly storageDepositLimit: Compact<u128>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Option<U8aFixed>;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Compact<u128>;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: H160;
      readonly codeHash: H256;
    } & Struct;
    readonly isMapAccount: boolean;
    readonly isUnmapAccount: boolean;
    readonly isDispatchAsFallbackAccount: boolean;
    readonly asDispatchAsFallbackAccount: {
      readonly call: RuntimeCall;
    } & Struct;
    readonly type: 'EthTransact' | 'Call' | 'Instantiate' | 'InstantiateWithCode' | 'UploadCode' | 'RemoveCode' | 'SetCode' | 'MapAccount' | 'UnmapAccount' | 'DispatchAsFallbackAccount';
  }

  /** @name PezpalletAssetRewardsCall (479) */
  interface PezpalletAssetRewardsCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly stakedAssetId: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardAssetId: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardRatePerBlock: u128;
      readonly expiry: PezframeSupportScheduleDispatchTime;
      readonly admin: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isStake: boolean;
    readonly asStake: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isUnstake: boolean;
    readonly asUnstake: {
      readonly poolId: u32;
      readonly amount: u128;
      readonly staker: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isHarvestRewards: boolean;
    readonly asHarvestRewards: {
      readonly poolId: u32;
      readonly staker: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isSetPoolRewardRatePerBlock: boolean;
    readonly asSetPoolRewardRatePerBlock: {
      readonly poolId: u32;
      readonly newRewardRatePerBlock: u128;
    } & Struct;
    readonly isSetPoolAdmin: boolean;
    readonly asSetPoolAdmin: {
      readonly poolId: u32;
      readonly newAdmin: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isSetPoolExpiryBlock: boolean;
    readonly asSetPoolExpiryBlock: {
      readonly poolId: u32;
      readonly newExpiry: PezframeSupportScheduleDispatchTime;
    } & Struct;
    readonly isDepositRewardTokens: boolean;
    readonly asDepositRewardTokens: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isCleanupPool: boolean;
    readonly asCleanupPool: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'CreatePool' | 'Stake' | 'Unstake' | 'HarvestRewards' | 'SetPoolRewardRatePerBlock' | 'SetPoolAdmin' | 'SetPoolExpiryBlock' | 'DepositRewardTokens' | 'CleanupPool';
  }

  /** @name PezpalletMetaTxCall (480) */
  interface PezpalletMetaTxCall extends Enum {
    readonly isDispatch: boolean;
    readonly asDispatch: {
      readonly metaTx: PezpalletMetaTxMetaTx;
    } & Struct;
    readonly type: 'Dispatch';
  }

  /** @name PezpalletMetaTxMetaTx (481) */
  interface PezpalletMetaTxMetaTx extends Struct {
    readonly call: RuntimeCall;
    readonly extensionVersion: u8;
    readonly extension: ITuple<[PezpalletVerifySignatureExtensionVerifySignature, PezpalletMetaTxExtensionMetaTxMarker, PezframeSystemExtensionsCheckNonZeroSender, PezframeSystemExtensionsCheckSpecVersion, PezframeSystemExtensionsCheckTxVersion, PezframeSystemExtensionsCheckGenesis, PezframeSystemExtensionsCheckMortality, PezframeSystemExtensionsCheckNonce, PezframeMetadataHashExtensionCheckMetadataHash]>;
  }

  /** @name PezpalletVerifySignatureExtensionVerifySignature (483) */
  interface PezpalletVerifySignatureExtensionVerifySignature extends Enum {
    readonly isSigned: boolean;
    readonly asSigned: {
      readonly signature: PezspRuntimeMultiSignature;
      readonly account: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isDisabled: boolean;
    readonly type: 'Signed' | 'Disabled';
  }

  /** @name PezpalletMetaTxExtensionMetaTxMarker (484) */
  type PezpalletMetaTxExtensionMetaTxMarker = Null;

  /** @name PezframeSystemExtensionsCheckNonZeroSender (485) */
  type PezframeSystemExtensionsCheckNonZeroSender = Null;

  /** @name PezframeSystemExtensionsCheckSpecVersion (486) */
  type PezframeSystemExtensionsCheckSpecVersion = Null;

  /** @name PezframeSystemExtensionsCheckTxVersion (487) */
  type PezframeSystemExtensionsCheckTxVersion = Null;

  /** @name PezframeSystemExtensionsCheckGenesis (488) */
  type PezframeSystemExtensionsCheckGenesis = Null;

  /** @name PezframeSystemExtensionsCheckMortality (489) */
  interface PezframeSystemExtensionsCheckMortality extends PezspRuntimeEra {}

  /** @name PezspRuntimeEra (490) */
  interface PezspRuntimeEra extends Enum {
    readonly isImmortal: boolean;
    readonly isMortal1: boolean;
    readonly asMortal1: u8;
    readonly isMortal2: boolean;
    readonly asMortal2: u8;
    readonly isMortal3: boolean;
    readonly asMortal3: u8;
    readonly isMortal4: boolean;
    readonly asMortal4: u8;
    readonly isMortal5: boolean;
    readonly asMortal5: u8;
    readonly isMortal6: boolean;
    readonly asMortal6: u8;
    readonly isMortal7: boolean;
    readonly asMortal7: u8;
    readonly isMortal8: boolean;
    readonly asMortal8: u8;
    readonly isMortal9: boolean;
    readonly asMortal9: u8;
    readonly isMortal10: boolean;
    readonly asMortal10: u8;
    readonly isMortal11: boolean;
    readonly asMortal11: u8;
    readonly isMortal12: boolean;
    readonly asMortal12: u8;
    readonly isMortal13: boolean;
    readonly asMortal13: u8;
    readonly isMortal14: boolean;
    readonly asMortal14: u8;
    readonly isMortal15: boolean;
    readonly asMortal15: u8;
    readonly isMortal16: boolean;
    readonly asMortal16: u8;
    readonly isMortal17: boolean;
    readonly asMortal17: u8;
    readonly isMortal18: boolean;
    readonly asMortal18: u8;
    readonly isMortal19: boolean;
    readonly asMortal19: u8;
    readonly isMortal20: boolean;
    readonly asMortal20: u8;
    readonly isMortal21: boolean;
    readonly asMortal21: u8;
    readonly isMortal22: boolean;
    readonly asMortal22: u8;
    readonly isMortal23: boolean;
    readonly asMortal23: u8;
    readonly isMortal24: boolean;
    readonly asMortal24: u8;
    readonly isMortal25: boolean;
    readonly asMortal25: u8;
    readonly isMortal26: boolean;
    readonly asMortal26: u8;
    readonly isMortal27: boolean;
    readonly asMortal27: u8;
    readonly isMortal28: boolean;
    readonly asMortal28: u8;
    readonly isMortal29: boolean;
    readonly asMortal29: u8;
    readonly isMortal30: boolean;
    readonly asMortal30: u8;
    readonly isMortal31: boolean;
    readonly asMortal31: u8;
    readonly isMortal32: boolean;
    readonly asMortal32: u8;
    readonly isMortal33: boolean;
    readonly asMortal33: u8;
    readonly isMortal34: boolean;
    readonly asMortal34: u8;
    readonly isMortal35: boolean;
    readonly asMortal35: u8;
    readonly isMortal36: boolean;
    readonly asMortal36: u8;
    readonly isMortal37: boolean;
    readonly asMortal37: u8;
    readonly isMortal38: boolean;
    readonly asMortal38: u8;
    readonly isMortal39: boolean;
    readonly asMortal39: u8;
    readonly isMortal40: boolean;
    readonly asMortal40: u8;
    readonly isMortal41: boolean;
    readonly asMortal41: u8;
    readonly isMortal42: boolean;
    readonly asMortal42: u8;
    readonly isMortal43: boolean;
    readonly asMortal43: u8;
    readonly isMortal44: boolean;
    readonly asMortal44: u8;
    readonly isMortal45: boolean;
    readonly asMortal45: u8;
    readonly isMortal46: boolean;
    readonly asMortal46: u8;
    readonly isMortal47: boolean;
    readonly asMortal47: u8;
    readonly isMortal48: boolean;
    readonly asMortal48: u8;
    readonly isMortal49: boolean;
    readonly asMortal49: u8;
    readonly isMortal50: boolean;
    readonly asMortal50: u8;
    readonly isMortal51: boolean;
    readonly asMortal51: u8;
    readonly isMortal52: boolean;
    readonly asMortal52: u8;
    readonly isMortal53: boolean;
    readonly asMortal53: u8;
    readonly isMortal54: boolean;
    readonly asMortal54: u8;
    readonly isMortal55: boolean;
    readonly asMortal55: u8;
    readonly isMortal56: boolean;
    readonly asMortal56: u8;
    readonly isMortal57: boolean;
    readonly asMortal57: u8;
    readonly isMortal58: boolean;
    readonly asMortal58: u8;
    readonly isMortal59: boolean;
    readonly asMortal59: u8;
    readonly isMortal60: boolean;
    readonly asMortal60: u8;
    readonly isMortal61: boolean;
    readonly asMortal61: u8;
    readonly isMortal62: boolean;
    readonly asMortal62: u8;
    readonly isMortal63: boolean;
    readonly asMortal63: u8;
    readonly isMortal64: boolean;
    readonly asMortal64: u8;
    readonly isMortal65: boolean;
    readonly asMortal65: u8;
    readonly isMortal66: boolean;
    readonly asMortal66: u8;
    readonly isMortal67: boolean;
    readonly asMortal67: u8;
    readonly isMortal68: boolean;
    readonly asMortal68: u8;
    readonly isMortal69: boolean;
    readonly asMortal69: u8;
    readonly isMortal70: boolean;
    readonly asMortal70: u8;
    readonly isMortal71: boolean;
    readonly asMortal71: u8;
    readonly isMortal72: boolean;
    readonly asMortal72: u8;
    readonly isMortal73: boolean;
    readonly asMortal73: u8;
    readonly isMortal74: boolean;
    readonly asMortal74: u8;
    readonly isMortal75: boolean;
    readonly asMortal75: u8;
    readonly isMortal76: boolean;
    readonly asMortal76: u8;
    readonly isMortal77: boolean;
    readonly asMortal77: u8;
    readonly isMortal78: boolean;
    readonly asMortal78: u8;
    readonly isMortal79: boolean;
    readonly asMortal79: u8;
    readonly isMortal80: boolean;
    readonly asMortal80: u8;
    readonly isMortal81: boolean;
    readonly asMortal81: u8;
    readonly isMortal82: boolean;
    readonly asMortal82: u8;
    readonly isMortal83: boolean;
    readonly asMortal83: u8;
    readonly isMortal84: boolean;
    readonly asMortal84: u8;
    readonly isMortal85: boolean;
    readonly asMortal85: u8;
    readonly isMortal86: boolean;
    readonly asMortal86: u8;
    readonly isMortal87: boolean;
    readonly asMortal87: u8;
    readonly isMortal88: boolean;
    readonly asMortal88: u8;
    readonly isMortal89: boolean;
    readonly asMortal89: u8;
    readonly isMortal90: boolean;
    readonly asMortal90: u8;
    readonly isMortal91: boolean;
    readonly asMortal91: u8;
    readonly isMortal92: boolean;
    readonly asMortal92: u8;
    readonly isMortal93: boolean;
    readonly asMortal93: u8;
    readonly isMortal94: boolean;
    readonly asMortal94: u8;
    readonly isMortal95: boolean;
    readonly asMortal95: u8;
    readonly isMortal96: boolean;
    readonly asMortal96: u8;
    readonly isMortal97: boolean;
    readonly asMortal97: u8;
    readonly isMortal98: boolean;
    readonly asMortal98: u8;
    readonly isMortal99: boolean;
    readonly asMortal99: u8;
    readonly isMortal100: boolean;
    readonly asMortal100: u8;
    readonly isMortal101: boolean;
    readonly asMortal101: u8;
    readonly isMortal102: boolean;
    readonly asMortal102: u8;
    readonly isMortal103: boolean;
    readonly asMortal103: u8;
    readonly isMortal104: boolean;
    readonly asMortal104: u8;
    readonly isMortal105: boolean;
    readonly asMortal105: u8;
    readonly isMortal106: boolean;
    readonly asMortal106: u8;
    readonly isMortal107: boolean;
    readonly asMortal107: u8;
    readonly isMortal108: boolean;
    readonly asMortal108: u8;
    readonly isMortal109: boolean;
    readonly asMortal109: u8;
    readonly isMortal110: boolean;
    readonly asMortal110: u8;
    readonly isMortal111: boolean;
    readonly asMortal111: u8;
    readonly isMortal112: boolean;
    readonly asMortal112: u8;
    readonly isMortal113: boolean;
    readonly asMortal113: u8;
    readonly isMortal114: boolean;
    readonly asMortal114: u8;
    readonly isMortal115: boolean;
    readonly asMortal115: u8;
    readonly isMortal116: boolean;
    readonly asMortal116: u8;
    readonly isMortal117: boolean;
    readonly asMortal117: u8;
    readonly isMortal118: boolean;
    readonly asMortal118: u8;
    readonly isMortal119: boolean;
    readonly asMortal119: u8;
    readonly isMortal120: boolean;
    readonly asMortal120: u8;
    readonly isMortal121: boolean;
    readonly asMortal121: u8;
    readonly isMortal122: boolean;
    readonly asMortal122: u8;
    readonly isMortal123: boolean;
    readonly asMortal123: u8;
    readonly isMortal124: boolean;
    readonly asMortal124: u8;
    readonly isMortal125: boolean;
    readonly asMortal125: u8;
    readonly isMortal126: boolean;
    readonly asMortal126: u8;
    readonly isMortal127: boolean;
    readonly asMortal127: u8;
    readonly isMortal128: boolean;
    readonly asMortal128: u8;
    readonly isMortal129: boolean;
    readonly asMortal129: u8;
    readonly isMortal130: boolean;
    readonly asMortal130: u8;
    readonly isMortal131: boolean;
    readonly asMortal131: u8;
    readonly isMortal132: boolean;
    readonly asMortal132: u8;
    readonly isMortal133: boolean;
    readonly asMortal133: u8;
    readonly isMortal134: boolean;
    readonly asMortal134: u8;
    readonly isMortal135: boolean;
    readonly asMortal135: u8;
    readonly isMortal136: boolean;
    readonly asMortal136: u8;
    readonly isMortal137: boolean;
    readonly asMortal137: u8;
    readonly isMortal138: boolean;
    readonly asMortal138: u8;
    readonly isMortal139: boolean;
    readonly asMortal139: u8;
    readonly isMortal140: boolean;
    readonly asMortal140: u8;
    readonly isMortal141: boolean;
    readonly asMortal141: u8;
    readonly isMortal142: boolean;
    readonly asMortal142: u8;
    readonly isMortal143: boolean;
    readonly asMortal143: u8;
    readonly isMortal144: boolean;
    readonly asMortal144: u8;
    readonly isMortal145: boolean;
    readonly asMortal145: u8;
    readonly isMortal146: boolean;
    readonly asMortal146: u8;
    readonly isMortal147: boolean;
    readonly asMortal147: u8;
    readonly isMortal148: boolean;
    readonly asMortal148: u8;
    readonly isMortal149: boolean;
    readonly asMortal149: u8;
    readonly isMortal150: boolean;
    readonly asMortal150: u8;
    readonly isMortal151: boolean;
    readonly asMortal151: u8;
    readonly isMortal152: boolean;
    readonly asMortal152: u8;
    readonly isMortal153: boolean;
    readonly asMortal153: u8;
    readonly isMortal154: boolean;
    readonly asMortal154: u8;
    readonly isMortal155: boolean;
    readonly asMortal155: u8;
    readonly isMortal156: boolean;
    readonly asMortal156: u8;
    readonly isMortal157: boolean;
    readonly asMortal157: u8;
    readonly isMortal158: boolean;
    readonly asMortal158: u8;
    readonly isMortal159: boolean;
    readonly asMortal159: u8;
    readonly isMortal160: boolean;
    readonly asMortal160: u8;
    readonly isMortal161: boolean;
    readonly asMortal161: u8;
    readonly isMortal162: boolean;
    readonly asMortal162: u8;
    readonly isMortal163: boolean;
    readonly asMortal163: u8;
    readonly isMortal164: boolean;
    readonly asMortal164: u8;
    readonly isMortal165: boolean;
    readonly asMortal165: u8;
    readonly isMortal166: boolean;
    readonly asMortal166: u8;
    readonly isMortal167: boolean;
    readonly asMortal167: u8;
    readonly isMortal168: boolean;
    readonly asMortal168: u8;
    readonly isMortal169: boolean;
    readonly asMortal169: u8;
    readonly isMortal170: boolean;
    readonly asMortal170: u8;
    readonly isMortal171: boolean;
    readonly asMortal171: u8;
    readonly isMortal172: boolean;
    readonly asMortal172: u8;
    readonly isMortal173: boolean;
    readonly asMortal173: u8;
    readonly isMortal174: boolean;
    readonly asMortal174: u8;
    readonly isMortal175: boolean;
    readonly asMortal175: u8;
    readonly isMortal176: boolean;
    readonly asMortal176: u8;
    readonly isMortal177: boolean;
    readonly asMortal177: u8;
    readonly isMortal178: boolean;
    readonly asMortal178: u8;
    readonly isMortal179: boolean;
    readonly asMortal179: u8;
    readonly isMortal180: boolean;
    readonly asMortal180: u8;
    readonly isMortal181: boolean;
    readonly asMortal181: u8;
    readonly isMortal182: boolean;
    readonly asMortal182: u8;
    readonly isMortal183: boolean;
    readonly asMortal183: u8;
    readonly isMortal184: boolean;
    readonly asMortal184: u8;
    readonly isMortal185: boolean;
    readonly asMortal185: u8;
    readonly isMortal186: boolean;
    readonly asMortal186: u8;
    readonly isMortal187: boolean;
    readonly asMortal187: u8;
    readonly isMortal188: boolean;
    readonly asMortal188: u8;
    readonly isMortal189: boolean;
    readonly asMortal189: u8;
    readonly isMortal190: boolean;
    readonly asMortal190: u8;
    readonly isMortal191: boolean;
    readonly asMortal191: u8;
    readonly isMortal192: boolean;
    readonly asMortal192: u8;
    readonly isMortal193: boolean;
    readonly asMortal193: u8;
    readonly isMortal194: boolean;
    readonly asMortal194: u8;
    readonly isMortal195: boolean;
    readonly asMortal195: u8;
    readonly isMortal196: boolean;
    readonly asMortal196: u8;
    readonly isMortal197: boolean;
    readonly asMortal197: u8;
    readonly isMortal198: boolean;
    readonly asMortal198: u8;
    readonly isMortal199: boolean;
    readonly asMortal199: u8;
    readonly isMortal200: boolean;
    readonly asMortal200: u8;
    readonly isMortal201: boolean;
    readonly asMortal201: u8;
    readonly isMortal202: boolean;
    readonly asMortal202: u8;
    readonly isMortal203: boolean;
    readonly asMortal203: u8;
    readonly isMortal204: boolean;
    readonly asMortal204: u8;
    readonly isMortal205: boolean;
    readonly asMortal205: u8;
    readonly isMortal206: boolean;
    readonly asMortal206: u8;
    readonly isMortal207: boolean;
    readonly asMortal207: u8;
    readonly isMortal208: boolean;
    readonly asMortal208: u8;
    readonly isMortal209: boolean;
    readonly asMortal209: u8;
    readonly isMortal210: boolean;
    readonly asMortal210: u8;
    readonly isMortal211: boolean;
    readonly asMortal211: u8;
    readonly isMortal212: boolean;
    readonly asMortal212: u8;
    readonly isMortal213: boolean;
    readonly asMortal213: u8;
    readonly isMortal214: boolean;
    readonly asMortal214: u8;
    readonly isMortal215: boolean;
    readonly asMortal215: u8;
    readonly isMortal216: boolean;
    readonly asMortal216: u8;
    readonly isMortal217: boolean;
    readonly asMortal217: u8;
    readonly isMortal218: boolean;
    readonly asMortal218: u8;
    readonly isMortal219: boolean;
    readonly asMortal219: u8;
    readonly isMortal220: boolean;
    readonly asMortal220: u8;
    readonly isMortal221: boolean;
    readonly asMortal221: u8;
    readonly isMortal222: boolean;
    readonly asMortal222: u8;
    readonly isMortal223: boolean;
    readonly asMortal223: u8;
    readonly isMortal224: boolean;
    readonly asMortal224: u8;
    readonly isMortal225: boolean;
    readonly asMortal225: u8;
    readonly isMortal226: boolean;
    readonly asMortal226: u8;
    readonly isMortal227: boolean;
    readonly asMortal227: u8;
    readonly isMortal228: boolean;
    readonly asMortal228: u8;
    readonly isMortal229: boolean;
    readonly asMortal229: u8;
    readonly isMortal230: boolean;
    readonly asMortal230: u8;
    readonly isMortal231: boolean;
    readonly asMortal231: u8;
    readonly isMortal232: boolean;
    readonly asMortal232: u8;
    readonly isMortal233: boolean;
    readonly asMortal233: u8;
    readonly isMortal234: boolean;
    readonly asMortal234: u8;
    readonly isMortal235: boolean;
    readonly asMortal235: u8;
    readonly isMortal236: boolean;
    readonly asMortal236: u8;
    readonly isMortal237: boolean;
    readonly asMortal237: u8;
    readonly isMortal238: boolean;
    readonly asMortal238: u8;
    readonly isMortal239: boolean;
    readonly asMortal239: u8;
    readonly isMortal240: boolean;
    readonly asMortal240: u8;
    readonly isMortal241: boolean;
    readonly asMortal241: u8;
    readonly isMortal242: boolean;
    readonly asMortal242: u8;
    readonly isMortal243: boolean;
    readonly asMortal243: u8;
    readonly isMortal244: boolean;
    readonly asMortal244: u8;
    readonly isMortal245: boolean;
    readonly asMortal245: u8;
    readonly isMortal246: boolean;
    readonly asMortal246: u8;
    readonly isMortal247: boolean;
    readonly asMortal247: u8;
    readonly isMortal248: boolean;
    readonly asMortal248: u8;
    readonly isMortal249: boolean;
    readonly asMortal249: u8;
    readonly isMortal250: boolean;
    readonly asMortal250: u8;
    readonly isMortal251: boolean;
    readonly asMortal251: u8;
    readonly isMortal252: boolean;
    readonly asMortal252: u8;
    readonly isMortal253: boolean;
    readonly asMortal253: u8;
    readonly isMortal254: boolean;
    readonly asMortal254: u8;
    readonly isMortal255: boolean;
    readonly asMortal255: u8;
    readonly type: 'Immortal' | 'Mortal1' | 'Mortal2' | 'Mortal3' | 'Mortal4' | 'Mortal5' | 'Mortal6' | 'Mortal7' | 'Mortal8' | 'Mortal9' | 'Mortal10' | 'Mortal11' | 'Mortal12' | 'Mortal13' | 'Mortal14' | 'Mortal15' | 'Mortal16' | 'Mortal17' | 'Mortal18' | 'Mortal19' | 'Mortal20' | 'Mortal21' | 'Mortal22' | 'Mortal23' | 'Mortal24' | 'Mortal25' | 'Mortal26' | 'Mortal27' | 'Mortal28' | 'Mortal29' | 'Mortal30' | 'Mortal31' | 'Mortal32' | 'Mortal33' | 'Mortal34' | 'Mortal35' | 'Mortal36' | 'Mortal37' | 'Mortal38' | 'Mortal39' | 'Mortal40' | 'Mortal41' | 'Mortal42' | 'Mortal43' | 'Mortal44' | 'Mortal45' | 'Mortal46' | 'Mortal47' | 'Mortal48' | 'Mortal49' | 'Mortal50' | 'Mortal51' | 'Mortal52' | 'Mortal53' | 'Mortal54' | 'Mortal55' | 'Mortal56' | 'Mortal57' | 'Mortal58' | 'Mortal59' | 'Mortal60' | 'Mortal61' | 'Mortal62' | 'Mortal63' | 'Mortal64' | 'Mortal65' | 'Mortal66' | 'Mortal67' | 'Mortal68' | 'Mortal69' | 'Mortal70' | 'Mortal71' | 'Mortal72' | 'Mortal73' | 'Mortal74' | 'Mortal75' | 'Mortal76' | 'Mortal77' | 'Mortal78' | 'Mortal79' | 'Mortal80' | 'Mortal81' | 'Mortal82' | 'Mortal83' | 'Mortal84' | 'Mortal85' | 'Mortal86' | 'Mortal87' | 'Mortal88' | 'Mortal89' | 'Mortal90' | 'Mortal91' | 'Mortal92' | 'Mortal93' | 'Mortal94' | 'Mortal95' | 'Mortal96' | 'Mortal97' | 'Mortal98' | 'Mortal99' | 'Mortal100' | 'Mortal101' | 'Mortal102' | 'Mortal103' | 'Mortal104' | 'Mortal105' | 'Mortal106' | 'Mortal107' | 'Mortal108' | 'Mortal109' | 'Mortal110' | 'Mortal111' | 'Mortal112' | 'Mortal113' | 'Mortal114' | 'Mortal115' | 'Mortal116' | 'Mortal117' | 'Mortal118' | 'Mortal119' | 'Mortal120' | 'Mortal121' | 'Mortal122' | 'Mortal123' | 'Mortal124' | 'Mortal125' | 'Mortal126' | 'Mortal127' | 'Mortal128' | 'Mortal129' | 'Mortal130' | 'Mortal131' | 'Mortal132' | 'Mortal133' | 'Mortal134' | 'Mortal135' | 'Mortal136' | 'Mortal137' | 'Mortal138' | 'Mortal139' | 'Mortal140' | 'Mortal141' | 'Mortal142' | 'Mortal143' | 'Mortal144' | 'Mortal145' | 'Mortal146' | 'Mortal147' | 'Mortal148' | 'Mortal149' | 'Mortal150' | 'Mortal151' | 'Mortal152' | 'Mortal153' | 'Mortal154' | 'Mortal155' | 'Mortal156' | 'Mortal157' | 'Mortal158' | 'Mortal159' | 'Mortal160' | 'Mortal161' | 'Mortal162' | 'Mortal163' | 'Mortal164' | 'Mortal165' | 'Mortal166' | 'Mortal167' | 'Mortal168' | 'Mortal169' | 'Mortal170' | 'Mortal171' | 'Mortal172' | 'Mortal173' | 'Mortal174' | 'Mortal175' | 'Mortal176' | 'Mortal177' | 'Mortal178' | 'Mortal179' | 'Mortal180' | 'Mortal181' | 'Mortal182' | 'Mortal183' | 'Mortal184' | 'Mortal185' | 'Mortal186' | 'Mortal187' | 'Mortal188' | 'Mortal189' | 'Mortal190' | 'Mortal191' | 'Mortal192' | 'Mortal193' | 'Mortal194' | 'Mortal195' | 'Mortal196' | 'Mortal197' | 'Mortal198' | 'Mortal199' | 'Mortal200' | 'Mortal201' | 'Mortal202' | 'Mortal203' | 'Mortal204' | 'Mortal205' | 'Mortal206' | 'Mortal207' | 'Mortal208' | 'Mortal209' | 'Mortal210' | 'Mortal211' | 'Mortal212' | 'Mortal213' | 'Mortal214' | 'Mortal215' | 'Mortal216' | 'Mortal217' | 'Mortal218' | 'Mortal219' | 'Mortal220' | 'Mortal221' | 'Mortal222' | 'Mortal223' | 'Mortal224' | 'Mortal225' | 'Mortal226' | 'Mortal227' | 'Mortal228' | 'Mortal229' | 'Mortal230' | 'Mortal231' | 'Mortal232' | 'Mortal233' | 'Mortal234' | 'Mortal235' | 'Mortal236' | 'Mortal237' | 'Mortal238' | 'Mortal239' | 'Mortal240' | 'Mortal241' | 'Mortal242' | 'Mortal243' | 'Mortal244' | 'Mortal245' | 'Mortal246' | 'Mortal247' | 'Mortal248' | 'Mortal249' | 'Mortal250' | 'Mortal251' | 'Mortal252' | 'Mortal253' | 'Mortal254' | 'Mortal255';
  }

  /** @name PezframeSystemExtensionsCheckNonce (491) */
  interface PezframeSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name PezframeMetadataHashExtensionCheckMetadataHash (492) */
  interface PezframeMetadataHashExtensionCheckMetadataHash extends Struct {
    readonly mode: PezframeMetadataHashExtensionMode;
  }

  /** @name PezframeMetadataHashExtensionMode (493) */
  interface PezframeMetadataHashExtensionMode extends Enum {
    readonly isDisabled: boolean;
    readonly isEnabled: boolean;
    readonly type: 'Disabled' | 'Enabled';
  }

  /** @name PezspRuntimeBlakeTwo256 (494) */
  type PezspRuntimeBlakeTwo256 = Null;

  /** @name PezpalletConvictionVotingTally (495) */
  interface PezpalletConvictionVotingTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly support: u128;
  }

  /** @name PezpalletRemarkEvent (496) */
  interface PezpalletRemarkEvent extends Enum {
    readonly isStored: boolean;
    readonly asStored: {
      readonly sender: PezspCoreCryptoAccountId32;
      readonly contentHash: H256;
    } & Struct;
    readonly type: 'Stored';
  }

  /** @name PezpalletRootTestingEvent (497) */
  interface PezpalletRootTestingEvent extends Enum {
    readonly isDefensiveTestCall: boolean;
    readonly type: 'DefensiveTestCall';
  }

  /** @name PezpalletConvictionVotingEvent (498) */
  interface PezpalletConvictionVotingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: ITuple<[PezspCoreCryptoAccountId32, PezspCoreCryptoAccountId32]>;
    readonly isUndelegated: boolean;
    readonly asUndelegated: PezspCoreCryptoAccountId32;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly vote: PezpalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isVoteRemoved: boolean;
    readonly asVoteRemoved: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly vote: PezpalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isVoteUnlocked: boolean;
    readonly asVoteUnlocked: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly class: u16;
    } & Struct;
    readonly type: 'Delegated' | 'Undelegated' | 'Voted' | 'VoteRemoved' | 'VoteUnlocked';
  }

  /** @name PezpalletWhitelistEvent (499) */
  interface PezpalletWhitelistEvent extends Enum {
    readonly isCallWhitelisted: boolean;
    readonly asCallWhitelisted: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallRemoved: boolean;
    readonly asWhitelistedCallRemoved: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallDispatched: boolean;
    readonly asWhitelistedCallDispatched: {
      readonly callHash: H256;
      readonly result: Result<PezframeSupportDispatchPostDispatchInfo, PezspRuntimeDispatchErrorWithPostInfo>;
    } & Struct;
    readonly type: 'CallWhitelisted' | 'WhitelistedCallRemoved' | 'WhitelistedCallDispatched';
  }

  /** @name PezframeSupportDispatchPostDispatchInfo (501) */
  interface PezframeSupportDispatchPostDispatchInfo extends Struct {
    readonly actualWeight: Option<PezspWeightsWeightV2Weight>;
    readonly paysFee: PezframeSupportDispatchPays;
  }

  /** @name PezspRuntimeDispatchErrorWithPostInfo (503) */
  interface PezspRuntimeDispatchErrorWithPostInfo extends Struct {
    readonly postInfo: PezframeSupportDispatchPostDispatchInfo;
    readonly error: PezspRuntimeDispatchError;
  }

  /** @name PezpalletAllianceEvent (505) */
  interface PezpalletAllianceEvent extends Enum {
    readonly isNewRuleSet: boolean;
    readonly asNewRuleSet: {
      readonly rule: PezpalletAllianceCid;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly announcement: PezpalletAllianceCid;
    } & Struct;
    readonly isAnnouncementRemoved: boolean;
    readonly asAnnouncementRemoved: {
      readonly announcement: PezpalletAllianceCid;
    } & Struct;
    readonly isMembersInitialized: boolean;
    readonly asMembersInitialized: {
      readonly fellows: Vec<PezspCoreCryptoAccountId32>;
      readonly allies: Vec<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isNewAllyJoined: boolean;
    readonly asNewAllyJoined: {
      readonly ally: PezspCoreCryptoAccountId32;
      readonly nominator: Option<PezspCoreCryptoAccountId32>;
      readonly reserved: Option<u128>;
    } & Struct;
    readonly isAllyElevated: boolean;
    readonly asAllyElevated: {
      readonly ally: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isMemberRetirementPeriodStarted: boolean;
    readonly asMemberRetirementPeriodStarted: {
      readonly member: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isMemberRetired: boolean;
    readonly asMemberRetired: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly unreserved: Option<u128>;
    } & Struct;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly slashed: Option<u128>;
    } & Struct;
    readonly isUnscrupulousItemAdded: boolean;
    readonly asUnscrupulousItemAdded: {
      readonly items: Vec<PezpalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isUnscrupulousItemRemoved: boolean;
    readonly asUnscrupulousItemRemoved: {
      readonly items: Vec<PezpalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isAllianceDisbanded: boolean;
    readonly asAllianceDisbanded: {
      readonly fellowMembers: u32;
      readonly allyMembers: u32;
      readonly unreserved: u32;
    } & Struct;
    readonly isFellowAbdicated: boolean;
    readonly asFellowAbdicated: {
      readonly fellow: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'NewRuleSet' | 'Announced' | 'AnnouncementRemoved' | 'MembersInitialized' | 'NewAllyJoined' | 'AllyElevated' | 'MemberRetirementPeriodStarted' | 'MemberRetired' | 'MemberKicked' | 'UnscrupulousItemAdded' | 'UnscrupulousItemRemoved' | 'AllianceDisbanded' | 'FellowAbdicated';
  }

  /** @name PezpalletNominationPoolsEvent (506) */
  interface PezpalletNominationPoolsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly depositor: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly bonded: u128;
      readonly joined: bool;
    } & Struct;
    readonly isPaidOut: boolean;
    readonly asPaidOut: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly payout: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
      readonly era: u32;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly poolId: u32;
    } & Struct;
    readonly isStateChanged: boolean;
    readonly asStateChanged: {
      readonly poolId: u32;
      readonly newState: PezpalletNominationPoolsPoolState;
    } & Struct;
    readonly isMemberRemoved: boolean;
    readonly asMemberRemoved: {
      readonly poolId: u32;
      readonly member: PezspCoreCryptoAccountId32;
      readonly releasedBalance: u128;
    } & Struct;
    readonly isRolesUpdated: boolean;
    readonly asRolesUpdated: {
      readonly root: Option<PezspCoreCryptoAccountId32>;
      readonly bouncer: Option<PezspCoreCryptoAccountId32>;
      readonly nominator: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isPoolSlashed: boolean;
    readonly asPoolSlashed: {
      readonly poolId: u32;
      readonly balance: u128;
    } & Struct;
    readonly isUnbondingPoolSlashed: boolean;
    readonly asUnbondingPoolSlashed: {
      readonly poolId: u32;
      readonly era: u32;
      readonly balance: u128;
    } & Struct;
    readonly isPoolCommissionUpdated: boolean;
    readonly asPoolCommissionUpdated: {
      readonly poolId: u32;
      readonly current: Option<ITuple<[u32, PezspCoreCryptoAccountId32]>>;
    } & Struct;
    readonly isPoolMaxCommissionUpdated: boolean;
    readonly asPoolMaxCommissionUpdated: {
      readonly poolId: u32;
      readonly maxCommission: u32;
    } & Struct;
    readonly isPoolCommissionChangeRateUpdated: boolean;
    readonly asPoolCommissionChangeRateUpdated: {
      readonly poolId: u32;
      readonly changeRate: PezpalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isPoolCommissionClaimPermissionUpdated: boolean;
    readonly asPoolCommissionClaimPermissionUpdated: {
      readonly poolId: u32;
      readonly permission: Option<PezpalletNominationPoolsCommissionClaimPermission>;
    } & Struct;
    readonly isPoolCommissionClaimed: boolean;
    readonly asPoolCommissionClaimed: {
      readonly poolId: u32;
      readonly commission: u128;
    } & Struct;
    readonly isMinBalanceDeficitAdjusted: boolean;
    readonly asMinBalanceDeficitAdjusted: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isMinBalanceExcessAdjusted: boolean;
    readonly asMinBalanceExcessAdjusted: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isMemberClaimPermissionUpdated: boolean;
    readonly asMemberClaimPermissionUpdated: {
      readonly member: PezspCoreCryptoAccountId32;
      readonly permission: PezpalletNominationPoolsClaimPermission;
    } & Struct;
    readonly isMetadataUpdated: boolean;
    readonly asMetadataUpdated: {
      readonly poolId: u32;
      readonly caller: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPoolNominationMade: boolean;
    readonly asPoolNominationMade: {
      readonly poolId: u32;
      readonly caller: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPoolNominatorChilled: boolean;
    readonly asPoolNominatorChilled: {
      readonly poolId: u32;
      readonly caller: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isGlobalParamsUpdated: boolean;
    readonly asGlobalParamsUpdated: {
      readonly minJoinBond: u128;
      readonly minCreateBond: u128;
      readonly maxPools: Option<u32>;
      readonly maxMembers: Option<u32>;
      readonly maxMembersPerPool: Option<u32>;
      readonly globalMaxCommission: Option<u32>;
    } & Struct;
    readonly type: 'Created' | 'Bonded' | 'PaidOut' | 'Unbonded' | 'Withdrawn' | 'Destroyed' | 'StateChanged' | 'MemberRemoved' | 'RolesUpdated' | 'PoolSlashed' | 'UnbondingPoolSlashed' | 'PoolCommissionUpdated' | 'PoolMaxCommissionUpdated' | 'PoolCommissionChangeRateUpdated' | 'PoolCommissionClaimPermissionUpdated' | 'PoolCommissionClaimed' | 'MinBalanceDeficitAdjusted' | 'MinBalanceExcessAdjusted' | 'MemberClaimPermissionUpdated' | 'MetadataUpdated' | 'PoolNominationMade' | 'PoolNominatorChilled' | 'GlobalParamsUpdated';
  }

  /** @name PezpalletRankedCollectiveTally (509) */
  interface PezpalletRankedCollectiveTally extends Struct {
    readonly bareAyes: u32;
    readonly ayes: u32;
    readonly nays: u32;
  }

  /** @name PezpalletRankedCollectiveEvent (510) */
  interface PezpalletRankedCollectiveEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly asMemberAdded: {
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isRankChanged: boolean;
    readonly asRankChanged: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly rank: u16;
    } & Struct;
    readonly isMemberRemoved: boolean;
    readonly asMemberRemoved: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly rank: u16;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly poll: u32;
      readonly vote: PezpalletRankedCollectiveVoteRecord;
      readonly tally: PezpalletRankedCollectiveTally;
    } & Struct;
    readonly isMemberExchanged: boolean;
    readonly asMemberExchanged: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly newWho: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'MemberAdded' | 'RankChanged' | 'MemberRemoved' | 'Voted' | 'MemberExchanged';
  }

  /** @name PezpalletRankedCollectiveVoteRecord (511) */
  interface PezpalletRankedCollectiveVoteRecord extends Enum {
    readonly isAye: boolean;
    readonly asAye: u32;
    readonly isNay: boolean;
    readonly asNay: u32;
    readonly type: 'Aye' | 'Nay';
  }

  /** @name PezpalletAssetConversionEvent (512) */
  interface PezpalletAssetConversionEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly creator: PezspCoreCryptoAccountId32;
      readonly poolId: ITuple<[PezframeSupportTokensFungibleUnionOfNativeOrWithId, PezframeSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly poolAccount: PezspCoreCryptoAccountId32;
      readonly lpToken: u32;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly mintTo: PezspCoreCryptoAccountId32;
      readonly poolId: ITuple<[PezframeSupportTokensFungibleUnionOfNativeOrWithId, PezframeSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly amount1Provided: u128;
      readonly amount2Provided: u128;
      readonly lpToken: u32;
      readonly lpTokenMinted: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly withdrawTo: PezspCoreCryptoAccountId32;
      readonly poolId: ITuple<[PezframeSupportTokensFungibleUnionOfNativeOrWithId, PezframeSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly amount1: u128;
      readonly amount2: u128;
      readonly lpToken: u32;
      readonly lpTokenBurned: u128;
      readonly withdrawalFee: u32;
    } & Struct;
    readonly isSwapExecuted: boolean;
    readonly asSwapExecuted: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly sendTo: PezspCoreCryptoAccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly path: Vec<ITuple<[PezframeSupportTokensFungibleUnionOfNativeOrWithId, u128]>>;
    } & Struct;
    readonly isSwapCreditExecuted: boolean;
    readonly asSwapCreditExecuted: {
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly path: Vec<ITuple<[PezframeSupportTokensFungibleUnionOfNativeOrWithId, u128]>>;
    } & Struct;
    readonly isTouched: boolean;
    readonly asTouched: {
      readonly poolId: ITuple<[PezframeSupportTokensFungibleUnionOfNativeOrWithId, PezframeSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly who: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'PoolCreated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'SwapExecuted' | 'SwapCreditExecuted' | 'Touched';
  }

  /** @name PezpalletFastUnstakeEvent (517) */
  interface PezpalletFastUnstakeEvent extends Enum {
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly result: Result<Null, PezspRuntimeDispatchError>;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly stash: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBatchChecked: boolean;
    readonly asBatchChecked: {
      readonly eras: Vec<u32>;
    } & Struct;
    readonly isBatchFinished: boolean;
    readonly asBatchFinished: {
      readonly size_: u32;
    } & Struct;
    readonly isInternalError: boolean;
    readonly type: 'Unstaked' | 'Slashed' | 'BatchChecked' | 'BatchFinished' | 'InternalError';
  }

  /** @name PezpalletMessageQueueEvent (518) */
  interface PezpalletMessageQueueEvent extends Enum {
    readonly isProcessingFailed: boolean;
    readonly asProcessingFailed: {
      readonly id: H256;
      readonly origin: u32;
      readonly error: PezframeSupportMessagesProcessMessageError;
    } & Struct;
    readonly isProcessed: boolean;
    readonly asProcessed: {
      readonly id: H256;
      readonly origin: u32;
      readonly weightUsed: PezspWeightsWeightV2Weight;
      readonly success: bool;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly id: U8aFixed;
      readonly origin: u32;
      readonly pageIndex: u32;
      readonly messageIndex: u32;
    } & Struct;
    readonly isPageReaped: boolean;
    readonly asPageReaped: {
      readonly origin: u32;
      readonly index: u32;
    } & Struct;
    readonly type: 'ProcessingFailed' | 'Processed' | 'OverweightEnqueued' | 'PageReaped';
  }

  /** @name PezframeSupportMessagesProcessMessageError (519) */
  interface PezframeSupportMessagesProcessMessageError extends Enum {
    readonly isBadFormat: boolean;
    readonly isCorrupt: boolean;
    readonly isUnsupported: boolean;
    readonly isOverweight: boolean;
    readonly asOverweight: PezspWeightsWeightV2Weight;
    readonly isYield: boolean;
    readonly isStackLimitReached: boolean;
    readonly type: 'BadFormat' | 'Corrupt' | 'Unsupported' | 'Overweight' | 'Yield' | 'StackLimitReached';
  }

  /** @name PezframeBenchmarkingPezpalletPovEvent (520) */
  interface PezframeBenchmarkingPezpalletPovEvent extends Enum {
    readonly isTestEvent: boolean;
    readonly type: 'TestEvent';
  }

  /** @name PezpalletTxPauseEvent (521) */
  interface PezpalletTxPauseEvent extends Enum {
    readonly isCallPaused: boolean;
    readonly asCallPaused: {
      readonly fullName: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly isCallUnpaused: boolean;
    readonly asCallUnpaused: {
      readonly fullName: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly type: 'CallPaused' | 'CallUnpaused';
  }

  /** @name PezpalletSafeModeEvent (522) */
  interface PezpalletSafeModeEvent extends Enum {
    readonly isEntered: boolean;
    readonly asEntered: {
      readonly until: u32;
    } & Struct;
    readonly isExtended: boolean;
    readonly asExtended: {
      readonly until: u32;
    } & Struct;
    readonly isExited: boolean;
    readonly asExited: {
      readonly reason: PezpalletSafeModeExitReason;
    } & Struct;
    readonly isDepositPlaced: boolean;
    readonly asDepositPlaced: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositReleased: boolean;
    readonly asDepositReleased: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isCannotDeposit: boolean;
    readonly isCannotRelease: boolean;
    readonly type: 'Entered' | 'Extended' | 'Exited' | 'DepositPlaced' | 'DepositReleased' | 'DepositSlashed' | 'CannotDeposit' | 'CannotRelease';
  }

  /** @name PezpalletSafeModeExitReason (523) */
  interface PezpalletSafeModeExitReason extends Enum {
    readonly isTimeout: boolean;
    readonly isForce: boolean;
    readonly type: 'Timeout' | 'Force';
  }

  /** @name PezpalletStatementEvent (524) */
  interface PezpalletStatementEvent extends Enum {
    readonly isNewStatement: boolean;
    readonly asNewStatement: {
      readonly account: PezspCoreCryptoAccountId32;
      readonly statement: PezspStatementStoreStatement;
    } & Struct;
    readonly type: 'NewStatement';
  }

  /** @name PezspStatementStoreStatement (525) */
  interface PezspStatementStoreStatement extends Struct {
    readonly proof: Option<PezspStatementStoreProof>;
    readonly decryptionKey: Option<U8aFixed>;
    readonly channel: Option<U8aFixed>;
    readonly priority: Option<u32>;
    readonly numTopics: u8;
    readonly topics: Vec<U8aFixed>;
    readonly data: Option<Bytes>;
  }

  /** @name PezspStatementStoreProof (527) */
  interface PezspStatementStoreProof extends Enum {
    readonly isSr25519: boolean;
    readonly asSr25519: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isEd25519: boolean;
    readonly asEd25519: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isSecp256k1Ecdsa: boolean;
    readonly asSecp256k1Ecdsa: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isOnChain: boolean;
    readonly asOnChain: {
      readonly who: U8aFixed;
      readonly blockHash: U8aFixed;
      readonly eventIndex: u64;
    } & Struct;
    readonly type: 'Sr25519' | 'Ed25519' | 'Secp256k1Ecdsa' | 'OnChain';
  }

  /** @name PezpalletMigrationsEvent (529) */
  interface PezpalletMigrationsEvent extends Enum {
    readonly isUpgradeStarted: boolean;
    readonly asUpgradeStarted: {
      readonly migrations: u32;
    } & Struct;
    readonly isUpgradeCompleted: boolean;
    readonly isUpgradeFailed: boolean;
    readonly isMigrationSkipped: boolean;
    readonly asMigrationSkipped: {
      readonly index: u32;
    } & Struct;
    readonly isMigrationAdvanced: boolean;
    readonly asMigrationAdvanced: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isMigrationCompleted: boolean;
    readonly asMigrationCompleted: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isMigrationFailed: boolean;
    readonly asMigrationFailed: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isHistoricCleared: boolean;
    readonly asHistoricCleared: {
      readonly nextCursor: Option<Bytes>;
    } & Struct;
    readonly type: 'UpgradeStarted' | 'UpgradeCompleted' | 'UpgradeFailed' | 'MigrationSkipped' | 'MigrationAdvanced' | 'MigrationCompleted' | 'MigrationFailed' | 'HistoricCleared';
  }

  /** @name PezpalletBrokerEvent (530) */
  interface PezpalletBrokerEvent extends Enum {
    readonly isPurchased: boolean;
    readonly asPurchased: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly regionId: PezpalletBrokerRegionId;
      readonly price: u128;
      readonly duration: u32;
    } & Struct;
    readonly isRenewable: boolean;
    readonly asRenewable: {
      readonly core: u16;
      readonly price: u128;
      readonly begin: u32;
      readonly workload: Vec<PezpalletBrokerScheduleItem>;
    } & Struct;
    readonly isRenewed: boolean;
    readonly asRenewed: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly price: u128;
      readonly oldCore: u16;
      readonly core: u16;
      readonly begin: u32;
      readonly duration: u32;
      readonly workload: Vec<PezpalletBrokerScheduleItem>;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly duration: u32;
      readonly oldOwner: Option<PezspCoreCryptoAccountId32>;
      readonly owner: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isPartitioned: boolean;
    readonly asPartitioned: {
      readonly oldRegionId: PezpalletBrokerRegionId;
      readonly newRegionIds: ITuple<[PezpalletBrokerRegionId, PezpalletBrokerRegionId]>;
    } & Struct;
    readonly isInterlaced: boolean;
    readonly asInterlaced: {
      readonly oldRegionId: PezpalletBrokerRegionId;
      readonly newRegionIds: ITuple<[PezpalletBrokerRegionId, PezpalletBrokerRegionId]>;
    } & Struct;
    readonly isAssigned: boolean;
    readonly asAssigned: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly duration: u32;
      readonly task: u32;
    } & Struct;
    readonly isAssignmentRemoved: boolean;
    readonly asAssignmentRemoved: {
      readonly regionId: PezpalletBrokerRegionId;
    } & Struct;
    readonly isPooled: boolean;
    readonly asPooled: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly duration: u32;
    } & Struct;
    readonly isCoreCountRequested: boolean;
    readonly asCoreCountRequested: {
      readonly coreCount: u16;
    } & Struct;
    readonly isCoreCountChanged: boolean;
    readonly asCoreCountChanged: {
      readonly coreCount: u16;
    } & Struct;
    readonly isReservationMade: boolean;
    readonly asReservationMade: {
      readonly index: u32;
      readonly workload: Vec<PezpalletBrokerScheduleItem>;
    } & Struct;
    readonly isReservationCancelled: boolean;
    readonly asReservationCancelled: {
      readonly index: u32;
      readonly workload: Vec<PezpalletBrokerScheduleItem>;
    } & Struct;
    readonly isSaleInitialized: boolean;
    readonly asSaleInitialized: {
      readonly saleStart: u32;
      readonly leadinLength: u32;
      readonly startPrice: u128;
      readonly endPrice: u128;
      readonly regionBegin: u32;
      readonly regionEnd: u32;
      readonly idealCoresSold: u16;
      readonly coresOffered: u16;
    } & Struct;
    readonly isLeased: boolean;
    readonly asLeased: {
      readonly task: u32;
      readonly until: u32;
    } & Struct;
    readonly isLeaseRemoved: boolean;
    readonly asLeaseRemoved: {
      readonly task: u32;
    } & Struct;
    readonly isLeaseEnding: boolean;
    readonly asLeaseEnding: {
      readonly task: u32;
      readonly when: u32;
    } & Struct;
    readonly isSalesStarted: boolean;
    readonly asSalesStarted: {
      readonly price: u128;
      readonly coreCount: u16;
    } & Struct;
    readonly isRevenueClaimBegun: boolean;
    readonly asRevenueClaimBegun: {
      readonly region: PezpalletBrokerRegionId;
      readonly maxTimeslices: u32;
    } & Struct;
    readonly isRevenueClaimItem: boolean;
    readonly asRevenueClaimItem: {
      readonly when: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRevenueClaimPaid: boolean;
    readonly asRevenueClaimPaid: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly amount: u128;
      readonly next: Option<PezpalletBrokerRegionId>;
    } & Struct;
    readonly isCreditPurchased: boolean;
    readonly asCreditPurchased: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRegionDropped: boolean;
    readonly asRegionDropped: {
      readonly regionId: PezpalletBrokerRegionId;
      readonly duration: u32;
    } & Struct;
    readonly isContributionDropped: boolean;
    readonly asContributionDropped: {
      readonly regionId: PezpalletBrokerRegionId;
    } & Struct;
    readonly isHistoryInitialized: boolean;
    readonly asHistoryInitialized: {
      readonly when: u32;
      readonly privatePoolSize: u32;
      readonly systemPoolSize: u32;
    } & Struct;
    readonly isHistoryDropped: boolean;
    readonly asHistoryDropped: {
      readonly when: u32;
      readonly revenue: u128;
    } & Struct;
    readonly isHistoryIgnored: boolean;
    readonly asHistoryIgnored: {
      readonly when: u32;
      readonly revenue: u128;
    } & Struct;
    readonly isClaimsReady: boolean;
    readonly asClaimsReady: {
      readonly when: u32;
      readonly systemPayout: u128;
      readonly privatePayout: u128;
    } & Struct;
    readonly isCoreAssigned: boolean;
    readonly asCoreAssigned: {
      readonly core: u16;
      readonly when: u32;
      readonly assignment: Vec<ITuple<[PezpalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
    } & Struct;
    readonly isPotentialRenewalDropped: boolean;
    readonly asPotentialRenewalDropped: {
      readonly when: u32;
      readonly core: u16;
    } & Struct;
    readonly isAutoRenewalEnabled: boolean;
    readonly asAutoRenewalEnabled: {
      readonly core: u16;
      readonly task: u32;
    } & Struct;
    readonly isAutoRenewalDisabled: boolean;
    readonly asAutoRenewalDisabled: {
      readonly core: u16;
      readonly task: u32;
    } & Struct;
    readonly isAutoRenewalFailed: boolean;
    readonly asAutoRenewalFailed: {
      readonly core: u16;
      readonly payer: Option<PezspCoreCryptoAccountId32>;
    } & Struct;
    readonly isAutoRenewalLimitReached: boolean;
    readonly type: 'Purchased' | 'Renewable' | 'Renewed' | 'Transferred' | 'Partitioned' | 'Interlaced' | 'Assigned' | 'AssignmentRemoved' | 'Pooled' | 'CoreCountRequested' | 'CoreCountChanged' | 'ReservationMade' | 'ReservationCancelled' | 'SaleInitialized' | 'Leased' | 'LeaseRemoved' | 'LeaseEnding' | 'SalesStarted' | 'RevenueClaimBegun' | 'RevenueClaimItem' | 'RevenueClaimPaid' | 'CreditPurchased' | 'RegionDropped' | 'ContributionDropped' | 'HistoryInitialized' | 'HistoryDropped' | 'HistoryIgnored' | 'ClaimsReady' | 'CoreAssigned' | 'PotentialRenewalDropped' | 'AutoRenewalEnabled' | 'AutoRenewalDisabled' | 'AutoRenewalFailed' | 'AutoRenewalLimitReached';
  }

  /** @name PezpalletParametersEvent (535) */
  interface PezpalletParametersEvent extends Enum {
    readonly isUpdated: boolean;
    readonly asUpdated: {
      readonly key: KitchensinkRuntimeRuntimeParametersKey;
      readonly oldValue: Option<KitchensinkRuntimeRuntimeParametersValue>;
      readonly newValue: Option<KitchensinkRuntimeRuntimeParametersValue>;
    } & Struct;
    readonly type: 'Updated';
  }

  /** @name KitchensinkRuntimeRuntimeParametersKey (536) */
  interface KitchensinkRuntimeRuntimeParametersKey extends Enum {
    readonly isStorage: boolean;
    readonly asStorage: KitchensinkRuntimeDynamicParamsStorageParametersKey;
    readonly isReferenda: boolean;
    readonly asReferenda: KitchensinkRuntimeDynamicParamsReferendaParametersKey;
    readonly type: 'Storage' | 'Referenda';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageParametersKey (537) */
  interface KitchensinkRuntimeDynamicParamsStorageParametersKey extends Enum {
    readonly isBaseDeposit: boolean;
    readonly isByteDeposit: boolean;
    readonly type: 'BaseDeposit' | 'ByteDeposit';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaParametersKey (538) */
  interface KitchensinkRuntimeDynamicParamsReferendaParametersKey extends Enum {
    readonly isTracks: boolean;
    readonly isOrigins: boolean;
    readonly type: 'Tracks' | 'Origins';
  }

  /** @name KitchensinkRuntimeRuntimeParametersValue (540) */
  interface KitchensinkRuntimeRuntimeParametersValue extends Enum {
    readonly isStorage: boolean;
    readonly asStorage: KitchensinkRuntimeDynamicParamsStorageParametersValue;
    readonly isReferenda: boolean;
    readonly asReferenda: KitchensinkRuntimeDynamicParamsReferendaParametersValue;
    readonly type: 'Storage' | 'Referenda';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageParametersValue (541) */
  interface KitchensinkRuntimeDynamicParamsStorageParametersValue extends Enum {
    readonly isBaseDeposit: boolean;
    readonly asBaseDeposit: u128;
    readonly isByteDeposit: boolean;
    readonly asByteDeposit: u128;
    readonly type: 'BaseDeposit' | 'ByteDeposit';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaParametersValue (542) */
  interface KitchensinkRuntimeDynamicParamsReferendaParametersValue extends Enum {
    readonly isTracks: boolean;
    readonly asTracks: Vec<PezpalletReferendaTrack>;
    readonly isOrigins: boolean;
    readonly asOrigins: Vec<ITuple<[KitchensinkRuntimeOriginCaller, u16]>>;
    readonly type: 'Tracks' | 'Origins';
  }

  /** @name PezpalletSkipFeelessPaymentEvent (543) */
  interface PezpalletSkipFeelessPaymentEvent extends Enum {
    readonly isFeeSkipped: boolean;
    readonly asFeeSkipped: {
      readonly origin: KitchensinkRuntimeOriginCaller;
    } & Struct;
    readonly type: 'FeeSkipped';
  }

  /** @name PezpalletAssetConversionOpsEvent (544) */
  interface PezpalletAssetConversionOpsEvent extends Enum {
    readonly isMigratedToNewAccount: boolean;
    readonly asMigratedToNewAccount: {
      readonly poolId: ITuple<[PezframeSupportTokensFungibleUnionOfNativeOrWithId, PezframeSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly priorAccount: PezspCoreCryptoAccountId32;
      readonly newAccount: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'MigratedToNewAccount';
  }

  /** @name PezpalletReviveEvent (545) */
  interface PezpalletReviveEvent extends Enum {
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: H160;
      readonly data: Bytes;
      readonly topics: Vec<H256>;
    } & Struct;
    readonly type: 'ContractEmitted';
  }

  /** @name PezpalletDelegatedStakingEvent (546) */
  interface PezpalletDelegatedStakingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly agent: PezspCoreCryptoAccountId32;
      readonly delegator: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReleased: boolean;
    readonly asReleased: {
      readonly agent: PezspCoreCryptoAccountId32;
      readonly delegator: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly agent: PezspCoreCryptoAccountId32;
      readonly delegator: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMigratedDelegation: boolean;
    readonly asMigratedDelegation: {
      readonly agent: PezspCoreCryptoAccountId32;
      readonly delegator: PezspCoreCryptoAccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Delegated' | 'Released' | 'Slashed' | 'MigratedDelegation';
  }

  /** @name PezpalletAssetRewardsEvent (547) */
  interface PezpalletAssetRewardsEvent extends Enum {
    readonly isStaked: boolean;
    readonly asStaked: {
      readonly staker: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly caller: PezspCoreCryptoAccountId32;
      readonly staker: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRewardsHarvested: boolean;
    readonly asRewardsHarvested: {
      readonly caller: PezspCoreCryptoAccountId32;
      readonly staker: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly creator: PezspCoreCryptoAccountId32;
      readonly poolId: u32;
      readonly stakedAssetId: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardAssetId: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardRatePerBlock: u128;
      readonly expiryBlock: u32;
      readonly admin: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPoolRewardRateModified: boolean;
    readonly asPoolRewardRateModified: {
      readonly poolId: u32;
      readonly newRewardRatePerBlock: u128;
    } & Struct;
    readonly isPoolAdminModified: boolean;
    readonly asPoolAdminModified: {
      readonly poolId: u32;
      readonly newAdmin: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPoolExpiryBlockModified: boolean;
    readonly asPoolExpiryBlockModified: {
      readonly poolId: u32;
      readonly newExpiryBlock: u32;
    } & Struct;
    readonly isPoolCleanedUp: boolean;
    readonly asPoolCleanedUp: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'Staked' | 'Unstaked' | 'RewardsHarvested' | 'PoolCreated' | 'PoolRewardRateModified' | 'PoolAdminModified' | 'PoolExpiryBlockModified' | 'PoolCleanedUp';
  }

  /** @name PezpalletAssetsFreezerEvent (548) */
  interface PezpalletAssetsFreezerEvent extends Enum {
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: PezspCoreCryptoAccountId32;
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Frozen' | 'Thawed';
  }

  /** @name PezpalletMetaTxEvent (549) */
  interface PezpalletMetaTxEvent extends Enum {
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly result: Result<PezframeSupportDispatchPostDispatchInfo, PezspRuntimeDispatchErrorWithPostInfo>;
    } & Struct;
    readonly type: 'Dispatched';
  }

  /** @name PezframeSystemPhase (550) */
  interface PezframeSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name PezframeSystemLastRuntimeUpgradeInfo (552) */
  interface PezframeSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name PezframeSystemCodeUpgradeAuthorization (555) */
  interface PezframeSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name PezframeSystemLimitsBlockWeights (556) */
  interface PezframeSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: PezspWeightsWeightV2Weight;
    readonly maxBlock: PezspWeightsWeightV2Weight;
    readonly perClass: PezframeSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name PezframeSupportDispatchPerDispatchClassWeightsPerClass (557) */
  interface PezframeSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: PezframeSystemLimitsWeightsPerClass;
    readonly operational: PezframeSystemLimitsWeightsPerClass;
    readonly mandatory: PezframeSystemLimitsWeightsPerClass;
  }

  /** @name PezframeSystemLimitsWeightsPerClass (558) */
  interface PezframeSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: PezspWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<PezspWeightsWeightV2Weight>;
    readonly maxTotal: Option<PezspWeightsWeightV2Weight>;
    readonly reserved: Option<PezspWeightsWeightV2Weight>;
  }

  /** @name PezframeSystemLimitsBlockLength (559) */
  interface PezframeSystemLimitsBlockLength extends Struct {
    readonly max: PezframeSupportDispatchPerDispatchClassU32;
  }

  /** @name PezframeSupportDispatchPerDispatchClassU32 (560) */
  interface PezframeSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name PezspWeightsRuntimeDbWeight (561) */
  interface PezspWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name PezspVersionRuntimeVersion (562) */
  interface PezspVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly systemVersion: u8;
  }

  /** @name PezframeSystemError (566) */
  interface PezframeSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly isMultiBlockMigrationsOngoing: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'MultiBlockMigrationsOngoing' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PezpalletUtilityError (567) */
  interface PezpalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PezspConsensusBabeDigestsPreDigest (574) */
  interface PezspConsensusBabeDigestsPreDigest extends Enum {
    readonly isPrimary: boolean;
    readonly asPrimary: PezspConsensusBabeDigestsPrimaryPreDigest;
    readonly isSecondaryPlain: boolean;
    readonly asSecondaryPlain: PezspConsensusBabeDigestsSecondaryPlainPreDigest;
    readonly isSecondaryVRF: boolean;
    readonly asSecondaryVRF: PezspConsensusBabeDigestsSecondaryVRFPreDigest;
    readonly type: 'Primary' | 'SecondaryPlain' | 'SecondaryVRF';
  }

  /** @name PezspConsensusBabeDigestsPrimaryPreDigest (575) */
  interface PezspConsensusBabeDigestsPrimaryPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: PezspCoreSr25519VrfVrfSignature;
  }

  /** @name PezspCoreSr25519VrfVrfSignature (576) */
  interface PezspCoreSr25519VrfVrfSignature extends Struct {
    readonly preOutput: U8aFixed;
    readonly proof: U8aFixed;
  }

  /** @name PezspConsensusBabeDigestsSecondaryPlainPreDigest (577) */
  interface PezspConsensusBabeDigestsSecondaryPlainPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
  }

  /** @name PezspConsensusBabeDigestsSecondaryVRFPreDigest (578) */
  interface PezspConsensusBabeDigestsSecondaryVRFPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: PezspCoreSr25519VrfVrfSignature;
  }

  /** @name PezspConsensusBabeBabeEpochConfiguration (579) */
  interface PezspConsensusBabeBabeEpochConfiguration extends Struct {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: PezspConsensusBabeAllowedSlots;
  }

  /** @name PezpalletBabeError (583) */
  interface PezpalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name PezpalletIndicesError (585) */
  interface PezpalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PezpalletBalancesBalanceLock (587) */
  interface PezpalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PezpalletBalancesReasons;
  }

  /** @name PezpalletBalancesReasons (588) */
  interface PezpalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PezpalletBalancesReserveData (591) */
  interface PezpalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PezframeSupportTokensMiscIdAmountRuntimeHoldReason (594) */
  interface PezframeSupportTokensMiscIdAmountRuntimeHoldReason extends Struct {
    readonly id: KitchensinkRuntimeRuntimeHoldReason;
    readonly amount: u128;
  }

  /** @name KitchensinkRuntimeRuntimeHoldReason (595) */
  interface KitchensinkRuntimeRuntimeHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingPezpalletHoldReason;
    readonly isCouncil: boolean;
    readonly asCouncil: PezpalletCollectiveHoldReason;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PezpalletCollectiveHoldReason;
    readonly isContracts: boolean;
    readonly asContracts: PezpalletContractsHoldReason;
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageHoldReason;
    readonly isNis: boolean;
    readonly asNis: PezpalletNisHoldReason;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PezpalletNftFractionalizationHoldReason;
    readonly isTransactionStorage: boolean;
    readonly asTransactionStorage: PezpalletTransactionStorageHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PezpalletStateTrieMigrationHoldReason;
    readonly isAllianceMotion: boolean;
    readonly asAllianceMotion: PezpalletCollectiveHoldReason;
    readonly isSafeMode: boolean;
    readonly asSafeMode: PezpalletSafeModeHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PezpalletReviveHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingHoldReason;
    readonly isAssetRewards: boolean;
    readonly asAssetRewards: PezpalletAssetRewardsHoldReason;
    readonly type: 'Staking' | 'Council' | 'TechnicalCommittee' | 'Contracts' | 'Preimage' | 'Nis' | 'NftFractionalization' | 'TransactionStorage' | 'StateTrieMigration' | 'AllianceMotion' | 'SafeMode' | 'Revive' | 'DelegatedStaking' | 'AssetRewards';
  }

  /** @name PezpalletStakingPezpalletHoldReason (596) */
  interface PezpalletStakingPezpalletHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly type: 'Staking';
  }

  /** @name PezpalletCollectiveHoldReason (597) */
  interface PezpalletCollectiveHoldReason extends Enum {
    readonly isProposalSubmission: boolean;
    readonly type: 'ProposalSubmission';
  }

  /** @name PezpalletContractsHoldReason (599) */
  interface PezpalletContractsHoldReason extends Enum {
    readonly isCodeUploadDepositReserve: boolean;
    readonly isStorageDepositReserve: boolean;
    readonly type: 'CodeUploadDepositReserve' | 'StorageDepositReserve';
  }

  /** @name PezpalletPreimageHoldReason (600) */
  interface PezpalletPreimageHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly type: 'Preimage';
  }

  /** @name PezpalletNisHoldReason (601) */
  interface PezpalletNisHoldReason extends Enum {
    readonly isNftReceipt: boolean;
    readonly type: 'NftReceipt';
  }

  /** @name PezpalletNftFractionalizationHoldReason (602) */
  interface PezpalletNftFractionalizationHoldReason extends Enum {
    readonly isFractionalized: boolean;
    readonly type: 'Fractionalized';
  }

  /** @name PezpalletTransactionStorageHoldReason (603) */
  interface PezpalletTransactionStorageHoldReason extends Enum {
    readonly isStorageFeeHold: boolean;
    readonly type: 'StorageFeeHold';
  }

  /** @name PezpalletStateTrieMigrationHoldReason (604) */
  interface PezpalletStateTrieMigrationHoldReason extends Enum {
    readonly isSlashForMigrate: boolean;
    readonly type: 'SlashForMigrate';
  }

  /** @name PezpalletSafeModeHoldReason (606) */
  interface PezpalletSafeModeHoldReason extends Enum {
    readonly isEnterOrExtend: boolean;
    readonly type: 'EnterOrExtend';
  }

  /** @name PezpalletReviveHoldReason (607) */
  interface PezpalletReviveHoldReason extends Enum {
    readonly isCodeUploadDepositReserve: boolean;
    readonly isStorageDepositReserve: boolean;
    readonly isAddressMapping: boolean;
    readonly type: 'CodeUploadDepositReserve' | 'StorageDepositReserve' | 'AddressMapping';
  }

  /** @name PezpalletDelegatedStakingHoldReason (608) */
  interface PezpalletDelegatedStakingHoldReason extends Enum {
    readonly isStakingDelegation: boolean;
    readonly type: 'StakingDelegation';
  }

  /** @name PezpalletAssetRewardsHoldReason (609) */
  interface PezpalletAssetRewardsHoldReason extends Enum {
    readonly isPoolCreation: boolean;
    readonly type: 'PoolCreation';
  }

  /** @name PezframeSupportTokensMiscIdAmountRuntimeFreezeReason (612) */
  interface PezframeSupportTokensMiscIdAmountRuntimeFreezeReason extends Struct {
    readonly id: KitchensinkRuntimeRuntimeFreezeReason;
    readonly amount: u128;
  }

  /** @name KitchensinkRuntimeRuntimeFreezeReason (613) */
  interface KitchensinkRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsFreezeReason;
    readonly isAssetRewards: boolean;
    readonly asAssetRewards: PezpalletAssetRewardsFreezeReason;
    readonly type: 'NominationPools' | 'AssetRewards';
  }

  /** @name PezpalletNominationPoolsFreezeReason (614) */
  interface PezpalletNominationPoolsFreezeReason extends Enum {
    readonly isPoolMinBalance: boolean;
    readonly type: 'PoolMinBalance';
  }

  /** @name PezpalletAssetRewardsFreezeReason (615) */
  interface PezpalletAssetRewardsFreezeReason extends Enum {
    readonly isStaked: boolean;
    readonly type: 'Staked';
  }

  /** @name PezpalletBalancesError (617) */
  interface PezpalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly isIssuanceDeactivated: boolean;
    readonly isDeltaZero: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes' | 'IssuanceDeactivated' | 'DeltaZero';
  }

  /** @name PezpalletTransactionPaymentReleases (618) */
  interface PezpalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PezpalletElectionProviderMultiPhaseReadySolution (619) */
  interface PezpalletElectionProviderMultiPhaseReadySolution extends Struct {
    readonly supports: Vec<ITuple<[PezspCoreCryptoAccountId32, PezspNposElectionsSupport]>>;
    readonly score: PezspNposElectionsElectionScore;
    readonly compute: PezpalletElectionProviderMultiPhaseElectionCompute;
  }

  /** @name PezpalletElectionProviderMultiPhaseRoundSnapshot (621) */
  interface PezpalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
    readonly voters: Vec<ITuple<[PezspCoreCryptoAccountId32, u64, Vec<PezspCoreCryptoAccountId32>]>>;
    readonly targets: Vec<PezspCoreCryptoAccountId32>;
  }

  /** @name PezpalletElectionProviderMultiPhaseSignedSignedSubmission (628) */
  interface PezpalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly deposit: u128;
    readonly rawSolution: PezpalletElectionProviderMultiPhaseRawSolution;
    readonly callFee: u128;
  }

  /** @name PezpalletElectionProviderMultiPhaseError (629) */
  interface PezpalletElectionProviderMultiPhaseError extends Enum {
    readonly isPreDispatchEarlySubmission: boolean;
    readonly isPreDispatchWrongWinnerCount: boolean;
    readonly isPreDispatchWeakSubmission: boolean;
    readonly isSignedQueueFull: boolean;
    readonly isSignedCannotPayDeposit: boolean;
    readonly isSignedInvalidWitness: boolean;
    readonly isSignedTooMuchWeight: boolean;
    readonly isOcwCallWrongEra: boolean;
    readonly isMissingSnapshotMetadata: boolean;
    readonly isInvalidSubmissionIndex: boolean;
    readonly isCallNotAllowed: boolean;
    readonly isFallbackFailed: boolean;
    readonly isBoundNotMet: boolean;
    readonly isTooManyWinners: boolean;
    readonly isPreDispatchDifferentRound: boolean;
    readonly type: 'PreDispatchEarlySubmission' | 'PreDispatchWrongWinnerCount' | 'PreDispatchWeakSubmission' | 'SignedQueueFull' | 'SignedCannotPayDeposit' | 'SignedInvalidWitness' | 'SignedTooMuchWeight' | 'OcwCallWrongEra' | 'MissingSnapshotMetadata' | 'InvalidSubmissionIndex' | 'CallNotAllowed' | 'FallbackFailed' | 'BoundNotMet' | 'TooManyWinners' | 'PreDispatchDifferentRound';
  }

  /** @name PezpalletStakingStakingLedger (630) */
  interface PezpalletStakingStakingLedger extends Struct {
    readonly stash: PezspCoreCryptoAccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PezpalletStakingUnlockChunk>;
    readonly legacyClaimedRewards: Vec<u32>;
  }

  /** @name PezpalletStakingNominations (632) */
  interface PezpalletStakingNominations extends Struct {
    readonly targets: Vec<PezspCoreCryptoAccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PezpalletStakingActiveEraInfo (633) */
  interface PezpalletStakingActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PezspStakingExposure (636) */
  interface PezspStakingExposure extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly others: Vec<PezspStakingIndividualExposure>;
  }

  /** @name PezspStakingIndividualExposure (638) */
  interface PezspStakingIndividualExposure extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly value: Compact<u128>;
  }

  /** @name PezspStakingPagedExposureMetadata (639) */
  interface PezspStakingPagedExposureMetadata extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly nominatorCount: u32;
    readonly pageCount: u32;
  }

  /** @name PezspStakingExposurePage (641) */
  interface PezspStakingExposurePage extends Struct {
    readonly pageTotal: Compact<u128>;
    readonly others: Vec<PezspStakingIndividualExposure>;
  }

  /** @name PezpalletStakingEraRewardPoints (642) */
  interface PezpalletStakingEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<PezspCoreCryptoAccountId32, u32>;
  }

  /** @name PezpalletStakingUnappliedSlash (647) */
  interface PezpalletStakingUnappliedSlash extends Struct {
    readonly validator: PezspCoreCryptoAccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
    readonly reporters: Vec<PezspCoreCryptoAccountId32>;
    readonly payout: u128;
  }

  /** @name PezpalletStakingSlashingSlashingSpans (649) */
  interface PezpalletStakingSlashingSlashingSpans extends Struct {
    readonly spanIndex: u32;
    readonly lastStart: u32;
    readonly lastNonzeroSlash: u32;
    readonly prior: Vec<u32>;
  }

  /** @name PezpalletStakingSlashingSpanRecord (650) */
  interface PezpalletStakingSlashingSpanRecord extends Struct {
    readonly slashed: u128;
    readonly paidOut: u128;
  }

  /** @name PezpalletStakingPezpalletError (651) */
  interface PezpalletStakingPezpalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isInvalidPage: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isCommissionTooLow: boolean;
    readonly isBoundNotMet: boolean;
    readonly isControllerDeprecated: boolean;
    readonly isCannotRestoreLedger: boolean;
    readonly isRewardDestinationRestricted: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isVirtualStakerNotAllowed: boolean;
    readonly isCannotReapStash: boolean;
    readonly isAlreadyMigrated: boolean;
    readonly isRestricted: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'InvalidPage' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet' | 'ControllerDeprecated' | 'CannotRestoreLedger' | 'RewardDestinationRestricted' | 'NotEnoughFunds' | 'VirtualStakerNotAllowed' | 'CannotReapStash' | 'AlreadyMigrated' | 'Restricted';
  }

  /** @name PezspCoreCryptoKeyTypeId (658) */
  interface PezspCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PezpalletSessionError (659) */
  interface PezpalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PezpalletDemocracyReferendumInfo (665) */
  interface PezpalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PezpalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PezpalletDemocracyReferendumStatus (666) */
  interface PezpalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: PezframeSupportPreimagesBounded;
    readonly threshold: PezpalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PezpalletDemocracyTally;
  }

  /** @name PezpalletDemocracyTally (667) */
  interface PezpalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PezpalletDemocracyVoteVoting (668) */
  interface PezpalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PezpalletDemocracyVoteAccountVote]>>;
      readonly delegations: PezpalletDemocracyDelegations;
      readonly prior: PezpalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: PezspCoreCryptoAccountId32;
      readonly conviction: PezpalletDemocracyConviction;
      readonly delegations: PezpalletDemocracyDelegations;
      readonly prior: PezpalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PezpalletDemocracyDelegations (672) */
  interface PezpalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PezpalletDemocracyVotePriorLock (673) */
  interface PezpalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PezpalletDemocracyError (676) */
  interface PezpalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PezpalletCollectiveVotes (680) */
  interface PezpalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<PezspCoreCryptoAccountId32>;
    readonly nays: Vec<PezspCoreCryptoAccountId32>;
    readonly end: u32;
  }

  /** @name PezpalletCollectiveError (681) */
  interface PezpalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly isProposalActive: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember' | 'ProposalActive';
  }

  /** @name PezpalletElectionsPhragmenSeatHolder (685) */
  interface PezpalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PezpalletElectionsPhragmenVoter (686) */
  interface PezpalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<PezspCoreCryptoAccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PezpalletElectionsPhragmenError (687) */
  interface PezpalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PezpalletMembershipError (689) */
  interface PezpalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PezpalletGrandpaStoredState (690) */
  interface PezpalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PezpalletGrandpaStoredPendingChange (691) */
  interface PezpalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[PezspConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PezpalletGrandpaError (693) */
  interface PezpalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PezpalletTreasuryProposal (694) */
  interface PezpalletTreasuryProposal extends Struct {
    readonly proposer: PezspCoreCryptoAccountId32;
    readonly value: u128;
    readonly beneficiary: PezspCoreCryptoAccountId32;
    readonly bond: u128;
  }

  /** @name PezpalletTreasurySpendStatus (696) */
  interface PezpalletTreasurySpendStatus extends Struct {
    readonly assetKind: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    readonly amount: u128;
    readonly beneficiary: PezspCoreCryptoAccountId32;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PezpalletTreasuryPaymentState;
  }

  /** @name PezpalletTreasuryPaymentState (697) */
  interface PezpalletTreasuryPaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: Null;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name PezframeSupportPezpalletId (698) */
  interface PezframeSupportPezpalletId extends U8aFixed {}

  /** @name PezpalletTreasuryError (699) */
  interface PezpalletTreasuryError extends Enum {
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly isFailedToConvertBalance: boolean;
    readonly isSpendExpired: boolean;
    readonly isEarlyPayout: boolean;
    readonly isAlreadyAttempted: boolean;
    readonly isPayoutError: boolean;
    readonly isNotAttempted: boolean;
    readonly isInconclusive: boolean;
    readonly type: 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved' | 'FailedToConvertBalance' | 'SpendExpired' | 'EarlyPayout' | 'AlreadyAttempted' | 'PayoutError' | 'NotAttempted' | 'Inconclusive';
  }

  /** @name PezpalletAssetRateError (700) */
  interface PezpalletAssetRateError extends Enum {
    readonly isUnknownAssetKind: boolean;
    readonly isAlreadyExists: boolean;
    readonly isOverflow: boolean;
    readonly type: 'UnknownAssetKind' | 'AlreadyExists' | 'Overflow';
  }

  /** @name PezpalletContractsWasmCodeInfo (702) */
  interface PezpalletContractsWasmCodeInfo extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly determinism: PezpalletContractsWasmDeterminism;
    readonly codeLen: u32;
  }

  /** @name PezpalletContractsStorageContractInfo (703) */
  interface PezpalletContractsStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
    readonly delegateDependencies: BTreeMap<H256, u128>;
  }

  /** @name PezpalletContractsStorageDeletionQueueManager (708) */
  interface PezpalletContractsStorageDeletionQueueManager extends Struct {
    readonly insertCounter: u32;
    readonly deleteCounter: u32;
  }

  /** @name PezpalletContractsSchedule (710) */
  interface PezpalletContractsSchedule extends Struct {
    readonly limits: PezpalletContractsScheduleLimits;
    readonly instructionWeights: PezpalletContractsScheduleInstructionWeights;
  }

  /** @name PezpalletContractsScheduleLimits (711) */
  interface PezpalletContractsScheduleLimits extends Struct {
    readonly eventTopics: u32;
    readonly memoryPages: u32;
    readonly subjectLen: u32;
    readonly payloadLen: u32;
    readonly runtimeMemory: u32;
    readonly validatorRuntimeMemory: u32;
    readonly eventRefTime: u64;
  }

  /** @name PezpalletContractsScheduleInstructionWeights (712) */
  interface PezpalletContractsScheduleInstructionWeights extends Struct {
    readonly base: u32;
  }

  /** @name PezpalletContractsEnvironment (713) */
  interface PezpalletContractsEnvironment extends Struct {
    readonly accountId: PezpalletContractsEnvironmentTypeAccountId32;
    readonly balance: PezpalletContractsEnvironmentTypeU128;
    readonly hash_: PezpalletContractsEnvironmentTypeH256;
    readonly hasher: PezpalletContractsEnvironmentTypeBlakeTwo256;
    readonly timestamp: PezpalletContractsEnvironmentTypeU64;
    readonly blockNumber: PezpalletContractsEnvironmentTypeU32;
  }

  /** @name PezpalletContractsEnvironmentTypeAccountId32 (714) */
  type PezpalletContractsEnvironmentTypeAccountId32 = Null;

  /** @name PezpalletContractsEnvironmentTypeU128 (715) */
  type PezpalletContractsEnvironmentTypeU128 = Null;

  /** @name PezpalletContractsEnvironmentTypeH256 (716) */
  type PezpalletContractsEnvironmentTypeH256 = Null;

  /** @name PezpalletContractsEnvironmentTypeBlakeTwo256 (717) */
  type PezpalletContractsEnvironmentTypeBlakeTwo256 = Null;

  /** @name PezpalletContractsEnvironmentTypeU64 (718) */
  type PezpalletContractsEnvironmentTypeU64 = Null;

  /** @name PezpalletContractsEnvironmentTypeU32 (719) */
  type PezpalletContractsEnvironmentTypeU32 = Null;

  /** @name PezpalletContractsError (721) */
  interface PezpalletContractsError extends Enum {
    readonly isInvalidSchedule: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutputBufferTooSmall: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isCodeNotFound: boolean;
    readonly isCodeInfoNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isRandomSubjectTooLong: boolean;
    readonly isTooManyTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isXcmDecodeFailed: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isReentranceDenied: boolean;
    readonly isStateChangeDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly isIndeterministic: boolean;
    readonly isMigrationInProgress: boolean;
    readonly isNoMigrationPerformed: boolean;
    readonly isMaxDelegateDependenciesReached: boolean;
    readonly isDelegateDependencyNotFound: boolean;
    readonly isDelegateDependencyAlreadyExists: boolean;
    readonly isCannotAddSelfAsDelegateDependency: boolean;
    readonly isOutOfTransientStorage: boolean;
    readonly type: 'InvalidSchedule' | 'InvalidCallFlags' | 'OutOfGas' | 'OutputBufferTooSmall' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeTooLarge' | 'CodeNotFound' | 'CodeInfoNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'RandomSubjectTooLong' | 'TooManyTopics' | 'NoChainExtension' | 'XcmDecodeFailed' | 'DuplicateContract' | 'TerminatedInConstructor' | 'ReentranceDenied' | 'StateChangeDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected' | 'Indeterministic' | 'MigrationInProgress' | 'NoMigrationPerformed' | 'MaxDelegateDependenciesReached' | 'DelegateDependencyNotFound' | 'DelegateDependencyAlreadyExists' | 'CannotAddSelfAsDelegateDependency' | 'OutOfTransientStorage';
  }

  /** @name PezpalletSudoError (722) */
  interface PezpalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PezpalletImOnlineError (725) */
  interface PezpalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name PezspStakingOffenceOffenceDetails (728) */
  interface PezspStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[PezspCoreCryptoAccountId32, Null]>;
    readonly reporters: Vec<PezspCoreCryptoAccountId32>;
  }

  /** @name PezpalletIdentityRegistration (732) */
  interface PezpalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PezpalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PezpalletIdentityLegacyIdentityInfo;
  }

  /** @name PezpalletIdentityRegistrarInfo (740) */
  interface PezpalletIdentityRegistrarInfo extends Struct {
    readonly account: PezspCoreCryptoAccountId32;
    readonly fee: u128;
    readonly fields: u64;
  }

  /** @name PezpalletIdentityAuthorityProperties (743) */
  interface PezpalletIdentityAuthorityProperties extends Struct {
    readonly accountId: PezspCoreCryptoAccountId32;
    readonly allocation: u32;
  }

  /** @name PezpalletIdentityUsernameInformation (744) */
  interface PezpalletIdentityUsernameInformation extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly provider: PezpalletIdentityProvider;
  }

  /** @name PezpalletIdentityProvider (745) */
  interface PezpalletIdentityProvider extends Enum {
    readonly isAllocation: boolean;
    readonly isAuthorityDeposit: boolean;
    readonly asAuthorityDeposit: u128;
    readonly isSystem: boolean;
    readonly type: 'Allocation' | 'AuthorityDeposit' | 'System';
  }

  /** @name PezpalletIdentityError (747) */
  interface PezpalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly isInvalidSuffix: boolean;
    readonly isNotUsernameAuthority: boolean;
    readonly isNoAllocation: boolean;
    readonly isInvalidSignature: boolean;
    readonly isRequiresSignature: boolean;
    readonly isInvalidUsername: boolean;
    readonly isUsernameTaken: boolean;
    readonly isNoUsername: boolean;
    readonly isNotExpired: boolean;
    readonly isTooEarly: boolean;
    readonly isNotUnbinding: boolean;
    readonly isAlreadyUnbinding: boolean;
    readonly isInsufficientPrivileges: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed' | 'InvalidSuffix' | 'NotUsernameAuthority' | 'NoAllocation' | 'InvalidSignature' | 'RequiresSignature' | 'InvalidUsername' | 'UsernameTaken' | 'NoUsername' | 'NotExpired' | 'TooEarly' | 'NotUnbinding' | 'AlreadyUnbinding' | 'InsufficientPrivileges';
  }

  /** @name PezpalletSocietyMemberRecord (748) */
  interface PezpalletSocietyMemberRecord extends Struct {
    readonly rank: u32;
    readonly strikes: u32;
    readonly vouching: Option<PezpalletSocietyVouchingStatus>;
    readonly index: u32;
  }

  /** @name PezpalletSocietyVouchingStatus (750) */
  interface PezpalletSocietyVouchingStatus extends Enum {
    readonly isVouching: boolean;
    readonly isBanned: boolean;
    readonly type: 'Vouching' | 'Banned';
  }

  /** @name PezpalletSocietyPayoutRecord (751) */
  interface PezpalletSocietyPayoutRecord extends Struct {
    readonly paid: u128;
    readonly payouts: Vec<ITuple<[u32, u128]>>;
  }

  /** @name PezpalletSocietyBid (756) */
  interface PezpalletSocietyBid extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly kind: PezpalletSocietyBidKind;
    readonly value: u128;
  }

  /** @name PezpalletSocietyBidKind (757) */
  interface PezpalletSocietyBidKind extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[PezspCoreCryptoAccountId32, u128]>;
    readonly type: 'Deposit' | 'Vouch';
  }

  /** @name PezpalletSocietyCandidacy (759) */
  interface PezpalletSocietyCandidacy extends Struct {
    readonly round: u32;
    readonly kind: PezpalletSocietyBidKind;
    readonly bid: u128;
    readonly tally: PezpalletSocietyTally;
    readonly skepticStruck: bool;
  }

  /** @name PezpalletSocietyTally (760) */
  interface PezpalletSocietyTally extends Struct {
    readonly approvals: u32;
    readonly rejections: u32;
  }

  /** @name PezpalletSocietyVote (762) */
  interface PezpalletSocietyVote extends Struct {
    readonly approve: bool;
    readonly weight: u32;
  }

  /** @name PezpalletSocietyIntakeRecord (764) */
  interface PezpalletSocietyIntakeRecord extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly bid: u128;
    readonly round: u32;
  }

  /** @name PezpalletSocietyError (766) */
  interface PezpalletSocietyError extends Enum {
    readonly isNotMember: boolean;
    readonly isAlreadyMember: boolean;
    readonly isSuspended: boolean;
    readonly isNotSuspended: boolean;
    readonly isNoPayout: boolean;
    readonly isAlreadyFounded: boolean;
    readonly isInsufficientPot: boolean;
    readonly isAlreadyVouching: boolean;
    readonly isNotVouchingOnBidder: boolean;
    readonly isHead: boolean;
    readonly isFounder: boolean;
    readonly isAlreadyBid: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isMaxMembers: boolean;
    readonly isNotFounder: boolean;
    readonly isNotHead: boolean;
    readonly isNotApproved: boolean;
    readonly isNotRejected: boolean;
    readonly isApproved: boolean;
    readonly isRejected: boolean;
    readonly isInProgress: boolean;
    readonly isTooEarly: boolean;
    readonly isVoted: boolean;
    readonly isExpired: boolean;
    readonly isNotBidder: boolean;
    readonly isNoDefender: boolean;
    readonly isNotGroup: boolean;
    readonly isAlreadyElevated: boolean;
    readonly isAlreadyPunished: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNoVotes: boolean;
    readonly type: 'NotMember' | 'AlreadyMember' | 'Suspended' | 'NotSuspended' | 'NoPayout' | 'AlreadyFounded' | 'InsufficientPot' | 'AlreadyVouching' | 'NotVouchingOnBidder' | 'Head' | 'Founder' | 'AlreadyBid' | 'AlreadyCandidate' | 'NotCandidate' | 'MaxMembers' | 'NotFounder' | 'NotHead' | 'NotApproved' | 'NotRejected' | 'Approved' | 'Rejected' | 'InProgress' | 'TooEarly' | 'Voted' | 'Expired' | 'NotBidder' | 'NoDefender' | 'NotGroup' | 'AlreadyElevated' | 'AlreadyPunished' | 'InsufficientFunds' | 'NoVotes';
  }

  /** @name PezpalletRecoveryRecoveryConfig (767) */
  interface PezpalletRecoveryRecoveryConfig extends Struct {
    readonly delayPeriod: u32;
    readonly deposit: u128;
    readonly friends: Vec<PezspCoreCryptoAccountId32>;
    readonly threshold: u16;
  }

  /** @name PezpalletRecoveryActiveRecovery (769) */
  interface PezpalletRecoveryActiveRecovery extends Struct {
    readonly created: u32;
    readonly deposit: u128;
    readonly friends: Vec<PezspCoreCryptoAccountId32>;
  }

  /** @name PezpalletRecoveryError (770) */
  interface PezpalletRecoveryError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isZeroThreshold: boolean;
    readonly isNotEnoughFriends: boolean;
    readonly isMaxFriends: boolean;
    readonly isNotSorted: boolean;
    readonly isNotRecoverable: boolean;
    readonly isAlreadyRecoverable: boolean;
    readonly isAlreadyStarted: boolean;
    readonly isNotStarted: boolean;
    readonly isNotFriend: boolean;
    readonly isDelayPeriod: boolean;
    readonly isAlreadyVouched: boolean;
    readonly isThreshold: boolean;
    readonly isStillActive: boolean;
    readonly isAlreadyProxy: boolean;
    readonly isBadState: boolean;
    readonly type: 'NotAllowed' | 'ZeroThreshold' | 'NotEnoughFriends' | 'MaxFriends' | 'NotSorted' | 'NotRecoverable' | 'AlreadyRecoverable' | 'AlreadyStarted' | 'NotStarted' | 'NotFriend' | 'DelayPeriod' | 'AlreadyVouched' | 'Threshold' | 'StillActive' | 'AlreadyProxy' | 'BadState';
  }

  /** @name PezpalletVestingReleases (773) */
  interface PezpalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PezpalletVestingError (774) */
  interface PezpalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PezpalletSchedulerScheduled (777) */
  interface PezpalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: PezframeSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: KitchensinkRuntimeOriginCaller;
  }

  /** @name PezpalletSchedulerRetryConfig (779) */
  interface PezpalletSchedulerRetryConfig extends Struct {
    readonly totalRetries: u8;
    readonly remaining: u8;
    readonly period: u32;
  }

  /** @name PezpalletSchedulerError (780) */
  interface PezpalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PezpalletGluttonError (781) */
  interface PezpalletGluttonError extends Enum {
    readonly isAlreadyInitialized: boolean;
    readonly isInsaneLimit: boolean;
    readonly type: 'AlreadyInitialized' | 'InsaneLimit';
  }

  /** @name PezpalletPreimageOldRequestStatus (782) */
  interface PezpalletPreimageOldRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[PezspCoreCryptoAccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PezpalletPreimageRequestStatus (784) */
  interface PezpalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[PezspCoreCryptoAccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PezpalletPreimageError (789) */
  interface PezpalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly isTooMany: boolean;
    readonly isTooFew: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested' | 'TooMany' | 'TooFew';
  }

  /** @name PezpalletProxyProxyDefinition (792) */
  interface PezpalletProxyProxyDefinition extends Struct {
    readonly delegate: PezspCoreCryptoAccountId32;
    readonly proxyType: KitchensinkRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PezpalletProxyAnnouncement (796) */
  interface PezpalletProxyAnnouncement extends Struct {
    readonly real: PezspCoreCryptoAccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PezpalletProxyError (798) */
  interface PezpalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PezpalletMultisigMultisig (800) */
  interface PezpalletMultisigMultisig extends Struct {
    readonly when: PezpalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: PezspCoreCryptoAccountId32;
    readonly approvals: Vec<PezspCoreCryptoAccountId32>;
  }

  /** @name PezpalletMultisigError (801) */
  interface PezpalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PezpalletBountiesBounty (802) */
  interface PezpalletBountiesBounty extends Struct {
    readonly proposer: PezspCoreCryptoAccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PezpalletBountiesBountyStatus;
  }

  /** @name PezpalletBountiesBountyStatus (803) */
  interface PezpalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: PezspCoreCryptoAccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: PezspCoreCryptoAccountId32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly isApprovedWithCurator: boolean;
    readonly asApprovedWithCurator: {
      readonly curator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout' | 'ApprovedWithCurator';
  }

  /** @name PezpalletBountiesError (805) */
  interface PezpalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PezpalletTipsOpenTip (806) */
  interface PezpalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: PezspCoreCryptoAccountId32;
    readonly finder: PezspCoreCryptoAccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PezpalletTipsError (807) */
  interface PezpalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isMaxTipAmountExceeded: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'MaxTipAmountExceeded' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PezpalletAssetsAssetDetails (808) */
  interface PezpalletAssetsAssetDetails extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly issuer: PezspCoreCryptoAccountId32;
    readonly admin: PezspCoreCryptoAccountId32;
    readonly freezer: PezspCoreCryptoAccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly status: PezpalletAssetsAssetStatus;
  }

  /** @name PezpalletAssetsAssetStatus (809) */
  interface PezpalletAssetsAssetStatus extends Enum {
    readonly isLive: boolean;
    readonly isFrozen: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Live' | 'Frozen' | 'Destroying';
  }

  /** @name PezpalletAssetsAssetAccount (810) */
  interface PezpalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly status: PezpalletAssetsAccountStatus;
    readonly reason: PezpalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PezpalletAssetsAccountStatus (811) */
  interface PezpalletAssetsAccountStatus extends Enum {
    readonly isLiquid: boolean;
    readonly isFrozen: boolean;
    readonly isBlocked: boolean;
    readonly type: 'Liquid' | 'Frozen' | 'Blocked';
  }

  /** @name PezpalletAssetsExistenceReason (812) */
  interface PezpalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly isDepositFrom: boolean;
    readonly asDepositFrom: ITuple<[PezspCoreCryptoAccountId32, u128]>;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded' | 'DepositFrom';
  }

  /** @name PezpalletAssetsApproval (814) */
  interface PezpalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PezpalletAssetsAssetMetadata (815) */
  interface PezpalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PezpalletAssetsError (817) */
  interface PezpalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isUnavailableConsumer: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isLiveAsset: boolean;
    readonly isAssetNotLive: boolean;
    readonly isIncorrectStatus: boolean;
    readonly isNotFrozen: boolean;
    readonly isCallbackFailed: boolean;
    readonly isBadAssetId: boolean;
    readonly isContainsFreezes: boolean;
    readonly isContainsHolds: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'UnavailableConsumer' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn' | 'LiveAsset' | 'AssetNotLive' | 'IncorrectStatus' | 'NotFrozen' | 'CallbackFailed' | 'BadAssetId' | 'ContainsFreezes' | 'ContainsHolds';
  }

  /** @name PezpalletBeefyError (821) */
  interface PezpalletBeefyError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidDoubleVotingProof: boolean;
    readonly isInvalidForkVotingProof: boolean;
    readonly isInvalidFutureBlockVotingProof: boolean;
    readonly isInvalidEquivocationProofSession: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidDoubleVotingProof' | 'InvalidForkVotingProof' | 'InvalidFutureBlockVotingProof' | 'InvalidEquivocationProofSession' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name PezspConsensusBeefyMmrBeefyAuthoritySet (822) */
  interface PezspConsensusBeefyMmrBeefyAuthoritySet extends Struct {
    readonly id: u64;
    readonly len: u32;
    readonly keysetCommitment: H256;
  }

  /** @name PezpalletLotteryLotteryConfig (823) */
  interface PezpalletLotteryLotteryConfig extends Struct {
    readonly price: u128;
    readonly start: u32;
    readonly length: u32;
    readonly delay: u32;
    readonly repeat: bool;
  }

  /** @name PezpalletLotteryError (827) */
  interface PezpalletLotteryError extends Enum {
    readonly isNotConfigured: boolean;
    readonly isInProgress: boolean;
    readonly isAlreadyEnded: boolean;
    readonly isInvalidCall: boolean;
    readonly isAlreadyParticipating: boolean;
    readonly isTooManyCalls: boolean;
    readonly isEncodingFailed: boolean;
    readonly type: 'NotConfigured' | 'InProgress' | 'AlreadyEnded' | 'InvalidCall' | 'AlreadyParticipating' | 'TooManyCalls' | 'EncodingFailed';
  }

  /** @name PezpalletNisBid (830) */
  interface PezpalletNisBid extends Struct {
    readonly amount: u128;
    readonly who: PezspCoreCryptoAccountId32;
  }

  /** @name PezpalletNisSummaryRecord (832) */
  interface PezpalletNisSummaryRecord extends Struct {
    readonly proportionOwed: u64;
    readonly index: u32;
    readonly thawed: u64;
    readonly lastPeriod: u32;
    readonly receiptsOnHold: u128;
  }

  /** @name PezpalletNisReceiptRecord (833) */
  interface PezpalletNisReceiptRecord extends Struct {
    readonly proportion: u64;
    readonly owner: Option<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
    readonly expiry: u32;
  }

  /** @name PezpalletNisError (835) */
  interface PezpalletNisError extends Enum {
    readonly isDurationTooSmall: boolean;
    readonly isDurationTooBig: boolean;
    readonly isAmountTooSmall: boolean;
    readonly isBidTooLow: boolean;
    readonly isUnknownReceipt: boolean;
    readonly isNotOwner: boolean;
    readonly isNotExpired: boolean;
    readonly isUnknownBid: boolean;
    readonly isPortionTooBig: boolean;
    readonly isUnfunded: boolean;
    readonly isAlreadyFunded: boolean;
    readonly isThrottled: boolean;
    readonly isMakesDust: boolean;
    readonly isAlreadyCommunal: boolean;
    readonly isAlreadyPrivate: boolean;
    readonly type: 'DurationTooSmall' | 'DurationTooBig' | 'AmountTooSmall' | 'BidTooLow' | 'UnknownReceipt' | 'NotOwner' | 'NotExpired' | 'UnknownBid' | 'PortionTooBig' | 'Unfunded' | 'AlreadyFunded' | 'Throttled' | 'MakesDust' | 'AlreadyCommunal' | 'AlreadyPrivate';
  }

  /** @name PezpalletUniquesCollectionDetails (836) */
  interface PezpalletUniquesCollectionDetails extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly issuer: PezspCoreCryptoAccountId32;
    readonly admin: PezspCoreCryptoAccountId32;
    readonly freezer: PezspCoreCryptoAccountId32;
    readonly totalDeposit: u128;
    readonly freeHolding: bool;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly attributes: u32;
    readonly isFrozen: bool;
  }

  /** @name PezpalletUniquesItemDetails (838) */
  interface PezpalletUniquesItemDetails extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly approved: Option<PezspCoreCryptoAccountId32>;
    readonly isFrozen: bool;
    readonly deposit: u128;
  }

  /** @name PezpalletUniquesCollectionMetadata (839) */
  interface PezpalletUniquesCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PezpalletUniquesItemMetadata (840) */
  interface PezpalletUniquesItemMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PezpalletUniquesError (844) */
  interface PezpalletUniquesError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isInUse: boolean;
    readonly isFrozen: boolean;
    readonly isWrongDelegate: boolean;
    readonly isNoDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isLocked: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyAlreadySet: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'WrongOwner' | 'BadWitness' | 'InUse' | 'Frozen' | 'WrongDelegate' | 'NoDelegate' | 'Unapproved' | 'Unaccepted' | 'Locked' | 'MaxSupplyReached' | 'MaxSupplyAlreadySet' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'NotForSale' | 'BidTooLow';
  }

  /** @name PezpalletNftsCollectionDetails (845) */
  interface PezpalletNftsCollectionDetails extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly ownerDeposit: u128;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly itemConfigs: u32;
    readonly attributes: u32;
  }

  /** @name PezpalletNftsCollectionRole (847) */
  interface PezpalletNftsCollectionRole extends Enum {
    readonly isIssuer: boolean;
    readonly isFreezer: boolean;
    readonly isAdmin: boolean;
    readonly type: 'Issuer' | 'Freezer' | 'Admin';
  }

  /** @name PezpalletNftsItemDetails (848) */
  interface PezpalletNftsItemDetails extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly approvals: BTreeMap<PezspCoreCryptoAccountId32, Option<u32>>;
    readonly deposit: PezpalletNftsItemDeposit;
  }

  /** @name PezpalletNftsItemDeposit (849) */
  interface PezpalletNftsItemDeposit extends Struct {
    readonly account: PezspCoreCryptoAccountId32;
    readonly amount: u128;
  }

  /** @name PezpalletNftsCollectionMetadata (854) */
  interface PezpalletNftsCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
  }

  /** @name PezpalletNftsItemMetadata (855) */
  interface PezpalletNftsItemMetadata extends Struct {
    readonly deposit: PezpalletNftsItemMetadataDeposit;
    readonly data: Bytes;
  }

  /** @name PezpalletNftsItemMetadataDeposit (856) */
  interface PezpalletNftsItemMetadataDeposit extends Struct {
    readonly account: Option<PezspCoreCryptoAccountId32>;
    readonly amount: u128;
  }

  /** @name PezpalletNftsAttributeDeposit (859) */
  interface PezpalletNftsAttributeDeposit extends Struct {
    readonly account: Option<PezspCoreCryptoAccountId32>;
    readonly amount: u128;
  }

  /** @name PezpalletNftsPendingSwap (862) */
  interface PezpalletNftsPendingSwap extends Struct {
    readonly desiredCollection: u32;
    readonly desiredItem: Option<u32>;
    readonly price: Option<PezpalletNftsPriceWithDirection>;
    readonly deadline: u32;
  }

  /** @name PezpalletNftsPezpalletFeature (864) */
  interface PezpalletNftsPezpalletFeature extends Enum {
    readonly isTrading: boolean;
    readonly isAttributes: boolean;
    readonly isApprovals: boolean;
    readonly isSwaps: boolean;
    readonly type: 'Trading' | 'Attributes' | 'Approvals' | 'Swaps';
  }

  /** @name PezpalletNftsError (865) */
  interface PezpalletNftsError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isApprovalExpired: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isCollectionIdInUse: boolean;
    readonly isItemsNonTransferable: boolean;
    readonly isNotDelegate: boolean;
    readonly isWrongDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isItemLocked: boolean;
    readonly isLockedItemAttributes: boolean;
    readonly isLockedCollectionAttributes: boolean;
    readonly isLockedItemMetadata: boolean;
    readonly isLockedCollectionMetadata: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyLocked: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isUnknownSwap: boolean;
    readonly isMetadataNotFound: boolean;
    readonly isAttributeNotFound: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly isReachedApprovalLimit: boolean;
    readonly isDeadlineExpired: boolean;
    readonly isWrongDuration: boolean;
    readonly isMethodDisabled: boolean;
    readonly isWrongSetting: boolean;
    readonly isInconsistentItemConfig: boolean;
    readonly isNoConfig: boolean;
    readonly isRolesNotCleared: boolean;
    readonly isMintNotStarted: boolean;
    readonly isMintEnded: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isIncorrectData: boolean;
    readonly isWrongOrigin: boolean;
    readonly isWrongSignature: boolean;
    readonly isIncorrectMetadata: boolean;
    readonly isMaxAttributesLimitReached: boolean;
    readonly isWrongNamespace: boolean;
    readonly isCollectionNotEmpty: boolean;
    readonly isWitnessRequired: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'ApprovalExpired' | 'WrongOwner' | 'BadWitness' | 'CollectionIdInUse' | 'ItemsNonTransferable' | 'NotDelegate' | 'WrongDelegate' | 'Unapproved' | 'Unaccepted' | 'ItemLocked' | 'LockedItemAttributes' | 'LockedCollectionAttributes' | 'LockedItemMetadata' | 'LockedCollectionMetadata' | 'MaxSupplyReached' | 'MaxSupplyLocked' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'UnknownSwap' | 'MetadataNotFound' | 'AttributeNotFound' | 'NotForSale' | 'BidTooLow' | 'ReachedApprovalLimit' | 'DeadlineExpired' | 'WrongDuration' | 'MethodDisabled' | 'WrongSetting' | 'InconsistentItemConfig' | 'NoConfig' | 'RolesNotCleared' | 'MintNotStarted' | 'MintEnded' | 'AlreadyClaimed' | 'IncorrectData' | 'WrongOrigin' | 'WrongSignature' | 'IncorrectMetadata' | 'MaxAttributesLimitReached' | 'WrongNamespace' | 'CollectionNotEmpty' | 'WitnessRequired';
  }

  /** @name PezpalletNftFractionalizationDetails (866) */
  interface PezpalletNftFractionalizationDetails extends Struct {
    readonly asset: u32;
    readonly fractions: u128;
    readonly deposit: u128;
    readonly assetCreator: PezspCoreCryptoAccountId32;
  }

  /** @name PezpalletNftFractionalizationError (867) */
  interface PezpalletNftFractionalizationError extends Enum {
    readonly isIncorrectAssetId: boolean;
    readonly isNoPermission: boolean;
    readonly isNftNotFound: boolean;
    readonly isNftNotFractionalized: boolean;
    readonly type: 'IncorrectAssetId' | 'NoPermission' | 'NftNotFound' | 'NftNotFractionalized';
  }

  /** @name PezpalletSalaryStatusType (868) */
  interface PezpalletSalaryStatusType extends Struct {
    readonly cycleIndex: u32;
    readonly cycleStart: u32;
    readonly budget: u128;
    readonly totalRegistrations: u128;
    readonly totalUnregisteredPaid: u128;
  }

  /** @name PezpalletSalaryClaimantStatus (869) */
  interface PezpalletSalaryClaimantStatus extends Struct {
    readonly lastActive: u32;
    readonly status: PezpalletSalaryClaimState;
  }

  /** @name PezpalletSalaryClaimState (870) */
  interface PezpalletSalaryClaimState extends Enum {
    readonly isNothing: boolean;
    readonly isRegistered: boolean;
    readonly asRegistered: u128;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly registered: Option<u128>;
      readonly id: Null;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Nothing' | 'Registered' | 'Attempted';
  }

  /** @name PezpalletSalaryError (871) */
  interface PezpalletSalaryError extends Enum {
    readonly isAlreadyStarted: boolean;
    readonly isNotMember: boolean;
    readonly isAlreadyInducted: boolean;
    readonly isNotInducted: boolean;
    readonly isNoClaim: boolean;
    readonly isClaimZero: boolean;
    readonly isTooLate: boolean;
    readonly isTooEarly: boolean;
    readonly isNotYet: boolean;
    readonly isNotStarted: boolean;
    readonly isBankrupt: boolean;
    readonly isPayError: boolean;
    readonly isInconclusive: boolean;
    readonly isNotCurrent: boolean;
    readonly type: 'AlreadyStarted' | 'NotMember' | 'AlreadyInducted' | 'NotInducted' | 'NoClaim' | 'ClaimZero' | 'TooLate' | 'TooEarly' | 'NotYet' | 'NotStarted' | 'Bankrupt' | 'PayError' | 'Inconclusive' | 'NotCurrent';
  }

  /** @name PezpalletCoreFellowshipMemberStatus (872) */
  interface PezpalletCoreFellowshipMemberStatus extends Struct {
    readonly isActive: bool;
    readonly lastPromotion: u32;
    readonly lastProof: u32;
  }

  /** @name PezpalletCoreFellowshipError (874) */
  interface PezpalletCoreFellowshipError extends Enum {
    readonly isUnranked: boolean;
    readonly isRanked: boolean;
    readonly isUnexpectedRank: boolean;
    readonly isInvalidRank: boolean;
    readonly isNoPermission: boolean;
    readonly isNothingDoing: boolean;
    readonly isAlreadyInducted: boolean;
    readonly isNotTracked: boolean;
    readonly isTooSoon: boolean;
    readonly type: 'Unranked' | 'Ranked' | 'UnexpectedRank' | 'InvalidRank' | 'NoPermission' | 'NothingDoing' | 'AlreadyInducted' | 'NotTracked' | 'TooSoon';
  }

  /** @name PezpalletTransactionStorageTransactionInfo (876) */
  interface PezpalletTransactionStorageTransactionInfo extends Struct {
    readonly chunkRoot: H256;
    readonly contentHash: H256;
    readonly size_: u32;
    readonly blockChunks: u32;
  }

  /** @name PezpalletTransactionStorageError (878) */
  interface PezpalletTransactionStorageError extends Enum {
    readonly isNotConfigured: boolean;
    readonly isRenewedNotFound: boolean;
    readonly isEmptyTransaction: boolean;
    readonly isUnexpectedProof: boolean;
    readonly isInvalidProof: boolean;
    readonly isMissingProof: boolean;
    readonly isMissingStateData: boolean;
    readonly isDoubleCheck: boolean;
    readonly isProofNotChecked: boolean;
    readonly isTransactionTooLarge: boolean;
    readonly isTooManyTransactions: boolean;
    readonly isBadContext: boolean;
    readonly type: 'NotConfigured' | 'RenewedNotFound' | 'EmptyTransaction' | 'UnexpectedProof' | 'InvalidProof' | 'MissingProof' | 'MissingStateData' | 'DoubleCheck' | 'ProofNotChecked' | 'TransactionTooLarge' | 'TooManyTransactions' | 'BadContext';
  }

  /** @name PezpalletBagsListListNode (879) */
  interface PezpalletBagsListListNode extends Struct {
    readonly id: PezspCoreCryptoAccountId32;
    readonly prev: Option<PezspCoreCryptoAccountId32>;
    readonly next: Option<PezspCoreCryptoAccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PezpalletBagsListListBag (880) */
  interface PezpalletBagsListListBag extends Struct {
    readonly head: Option<PezspCoreCryptoAccountId32>;
    readonly tail: Option<PezspCoreCryptoAccountId32>;
  }

  /** @name PezpalletBagsListError (882) */
  interface PezpalletBagsListError extends Enum {
    readonly isList: boolean;
    readonly asList: PezpalletBagsListListListError;
    readonly type: 'List';
  }

  /** @name PezpalletBagsListListListError (883) */
  interface PezpalletBagsListListListError extends Enum {
    readonly isDuplicate: boolean;
    readonly isNotHeavier: boolean;
    readonly isNotInSameBag: boolean;
    readonly isNodeNotFound: boolean;
    readonly type: 'Duplicate' | 'NotHeavier' | 'NotInSameBag' | 'NodeNotFound';
  }

  /** @name PezpalletChildBountiesChildBounty (884) */
  interface PezpalletChildBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PezpalletChildBountiesChildBountyStatus;
  }

  /** @name PezpalletChildBountiesChildBountyStatus (885) */
  interface PezpalletChildBountiesChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: PezspCoreCryptoAccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: PezspCoreCryptoAccountId32;
      readonly beneficiary: PezspCoreCryptoAccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PezpalletChildBountiesError (886) */
  interface PezpalletChildBountiesError extends Enum {
    readonly isParentBountyNotActive: boolean;
    readonly isInsufficientBountyBalance: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly type: 'ParentBountyNotActive' | 'InsufficientBountyBalance' | 'TooManyChildBounties';
  }

  /** @name PezpalletReferendaReferendumInfoConvictionVotingTally (887) */
  interface PezpalletReferendaReferendumInfoConvictionVotingTally extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PezpalletReferendaReferendumStatusConvictionVotingTally;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PezpalletReferendaReferendumStatusConvictionVotingTally (888) */
  interface PezpalletReferendaReferendumStatusConvictionVotingTally extends Struct {
    readonly track: u16;
    readonly origin: KitchensinkRuntimeOriginCaller;
    readonly proposal: PezframeSupportPreimagesBounded;
    readonly enactment: PezframeSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PezpalletReferendaDeposit;
    readonly decisionDeposit: Option<PezpalletReferendaDeposit>;
    readonly deciding: Option<PezpalletReferendaDecidingStatus>;
    readonly tally: PezpalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PezpalletReferendaDeposit (889) */
  interface PezpalletReferendaDeposit extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly amount: u128;
  }

  /** @name PezpalletReferendaDecidingStatus (892) */
  interface PezpalletReferendaDecidingStatus extends Struct {
    readonly since: u32;
    readonly confirming: Option<u32>;
  }

  /** @name PezpalletReferendaTrackDetails (898) */
  interface PezpalletReferendaTrackDetails extends Struct {
    readonly name: Text;
    readonly maxDeciding: u32;
    readonly decisionDeposit: u128;
    readonly preparePeriod: u32;
    readonly decisionPeriod: u32;
    readonly confirmPeriod: u32;
    readonly minEnactmentPeriod: u32;
    readonly minApproval: PezpalletReferendaCurve;
    readonly minSupport: PezpalletReferendaCurve;
  }

  /** @name PezpalletReferendaError (899) */
  interface PezpalletReferendaError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isHasDeposit: boolean;
    readonly isBadTrack: boolean;
    readonly isFull: boolean;
    readonly isQueueEmpty: boolean;
    readonly isBadReferendum: boolean;
    readonly isNothingToDo: boolean;
    readonly isNoTrack: boolean;
    readonly isUnfinished: boolean;
    readonly isNoPermission: boolean;
    readonly isNoDeposit: boolean;
    readonly isBadStatus: boolean;
    readonly isPreimageNotExist: boolean;
    readonly isPreimageStoredWithDifferentLength: boolean;
    readonly type: 'NotOngoing' | 'HasDeposit' | 'BadTrack' | 'Full' | 'QueueEmpty' | 'BadReferendum' | 'NothingToDo' | 'NoTrack' | 'Unfinished' | 'NoPermission' | 'NoDeposit' | 'BadStatus' | 'PreimageNotExist' | 'PreimageStoredWithDifferentLength';
  }

  /** @name PezpalletRemarkError (900) */
  interface PezpalletRemarkError extends Enum {
    readonly isEmpty: boolean;
    readonly isBadContext: boolean;
    readonly type: 'Empty' | 'BadContext';
  }

  /** @name PezpalletConvictionVotingVoteVoting (902) */
  interface PezpalletConvictionVotingVoteVoting extends Enum {
    readonly isCasting: boolean;
    readonly asCasting: PezpalletConvictionVotingVoteCasting;
    readonly isDelegating: boolean;
    readonly asDelegating: PezpalletConvictionVotingVoteDelegating;
    readonly type: 'Casting' | 'Delegating';
  }

  /** @name PezpalletConvictionVotingVoteCasting (903) */
  interface PezpalletConvictionVotingVoteCasting extends Struct {
    readonly votes: Vec<ITuple<[u32, PezpalletConvictionVotingVoteAccountVote]>>;
    readonly delegations: PezpalletConvictionVotingDelegations;
    readonly prior: PezpalletConvictionVotingVotePriorLock;
  }

  /** @name PezpalletConvictionVotingDelegations (907) */
  interface PezpalletConvictionVotingDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PezpalletConvictionVotingVotePriorLock (908) */
  interface PezpalletConvictionVotingVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PezpalletConvictionVotingVoteDelegating (909) */
  interface PezpalletConvictionVotingVoteDelegating extends Struct {
    readonly balance: u128;
    readonly target: PezspCoreCryptoAccountId32;
    readonly conviction: PezpalletConvictionVotingConviction;
    readonly delegations: PezpalletConvictionVotingDelegations;
    readonly prior: PezpalletConvictionVotingVotePriorLock;
  }

  /** @name PezpalletConvictionVotingError (913) */
  interface PezpalletConvictionVotingError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isNoPermissionYet: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isAlreadyVoting: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isNonsense: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isClassNeeded: boolean;
    readonly isBadClass: boolean;
    readonly type: 'NotOngoing' | 'NotVoter' | 'NoPermission' | 'NoPermissionYet' | 'AlreadyDelegating' | 'AlreadyVoting' | 'InsufficientFunds' | 'NotDelegating' | 'Nonsense' | 'MaxVotesReached' | 'ClassNeeded' | 'BadClass';
  }

  /** @name PezpalletWhitelistError (914) */
  interface PezpalletWhitelistError extends Enum {
    readonly isUnavailablePreImage: boolean;
    readonly isUndecodableCall: boolean;
    readonly isInvalidCallWeightWitness: boolean;
    readonly isCallIsNotWhitelisted: boolean;
    readonly isCallAlreadyWhitelisted: boolean;
    readonly type: 'UnavailablePreImage' | 'UndecodableCall' | 'InvalidCallWeightWitness' | 'CallIsNotWhitelisted' | 'CallAlreadyWhitelisted';
  }

  /** @name PezpalletAllianceMemberRole (919) */
  interface PezpalletAllianceMemberRole extends Enum {
    readonly isFellow: boolean;
    readonly isAlly: boolean;
    readonly isRetiring: boolean;
    readonly type: 'Fellow' | 'Ally' | 'Retiring';
  }

  /** @name PezpalletAllianceError (923) */
  interface PezpalletAllianceError extends Enum {
    readonly isAllianceNotYetInitialized: boolean;
    readonly isAllianceAlreadyInitialized: boolean;
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isNotAlly: boolean;
    readonly isNoVotingRights: boolean;
    readonly isAlreadyElevated: boolean;
    readonly isAlreadyUnscrupulous: boolean;
    readonly isAccountNonGrata: boolean;
    readonly isNotListedAsUnscrupulous: boolean;
    readonly isTooManyUnscrupulousItems: boolean;
    readonly isTooLongWebsiteUrl: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isWithoutRequiredIdentityFields: boolean;
    readonly isWithoutGoodIdentityJudgement: boolean;
    readonly isMissingProposalHash: boolean;
    readonly isMissingAnnouncement: boolean;
    readonly isTooManyMembers: boolean;
    readonly isTooManyAnnouncements: boolean;
    readonly isBadWitness: boolean;
    readonly isAlreadyRetiring: boolean;
    readonly isRetirementNoticeNotGiven: boolean;
    readonly isRetirementPeriodNotPassed: boolean;
    readonly isFellowsMissing: boolean;
    readonly type: 'AllianceNotYetInitialized' | 'AllianceAlreadyInitialized' | 'AlreadyMember' | 'NotMember' | 'NotAlly' | 'NoVotingRights' | 'AlreadyElevated' | 'AlreadyUnscrupulous' | 'AccountNonGrata' | 'NotListedAsUnscrupulous' | 'TooManyUnscrupulousItems' | 'TooLongWebsiteUrl' | 'InsufficientFunds' | 'WithoutRequiredIdentityFields' | 'WithoutGoodIdentityJudgement' | 'MissingProposalHash' | 'MissingAnnouncement' | 'TooManyMembers' | 'TooManyAnnouncements' | 'BadWitness' | 'AlreadyRetiring' | 'RetirementNoticeNotGiven' | 'RetirementPeriodNotPassed' | 'FellowsMissing';
  }

  /** @name PezpalletNominationPoolsPoolMember (924) */
  interface PezpalletNominationPoolsPoolMember extends Struct {
    readonly poolId: u32;
    readonly points: u128;
    readonly lastRecordedRewardCounter: u128;
    readonly unbondingEras: BTreeMap<u32, u128>;
  }

  /** @name PezpalletNominationPoolsBondedPoolInner (927) */
  interface PezpalletNominationPoolsBondedPoolInner extends Struct {
    readonly commission: PezpalletNominationPoolsCommission;
    readonly memberCounter: u32;
    readonly points: u128;
    readonly roles: PezpalletNominationPoolsPoolRoles;
    readonly state: PezpalletNominationPoolsPoolState;
  }

  /** @name PezpalletNominationPoolsCommission (928) */
  interface PezpalletNominationPoolsCommission extends Struct {
    readonly current: Option<ITuple<[u32, PezspCoreCryptoAccountId32]>>;
    readonly max: Option<u32>;
    readonly changeRate: Option<PezpalletNominationPoolsCommissionChangeRate>;
    readonly throttleFrom: Option<u32>;
    readonly claimPermission: Option<PezpalletNominationPoolsCommissionClaimPermission>;
  }

  /** @name PezpalletNominationPoolsPoolRoles (930) */
  interface PezpalletNominationPoolsPoolRoles extends Struct {
    readonly depositor: PezspCoreCryptoAccountId32;
    readonly root: Option<PezspCoreCryptoAccountId32>;
    readonly nominator: Option<PezspCoreCryptoAccountId32>;
    readonly bouncer: Option<PezspCoreCryptoAccountId32>;
  }

  /** @name PezpalletNominationPoolsRewardPool (931) */
  interface PezpalletNominationPoolsRewardPool extends Struct {
    readonly lastRecordedRewardCounter: u128;
    readonly lastRecordedTotalPayouts: u128;
    readonly totalRewardsClaimed: u128;
    readonly totalCommissionPending: u128;
    readonly totalCommissionClaimed: u128;
  }

  /** @name PezpalletNominationPoolsSubPools (932) */
  interface PezpalletNominationPoolsSubPools extends Struct {
    readonly noEra: PezpalletNominationPoolsUnbondPool;
    readonly withEra: BTreeMap<u32, PezpalletNominationPoolsUnbondPool>;
  }

  /** @name PezpalletNominationPoolsUnbondPool (933) */
  interface PezpalletNominationPoolsUnbondPool extends Struct {
    readonly points: u128;
    readonly balance: u128;
  }

  /** @name PezpalletNominationPoolsError (938) */
  interface PezpalletNominationPoolsError extends Enum {
    readonly isPoolNotFound: boolean;
    readonly isPoolMemberNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isAccountBelongsToOtherPool: boolean;
    readonly isFullyUnbonding: boolean;
    readonly isMaxUnbondingLimit: boolean;
    readonly isCannotWithdrawAny: boolean;
    readonly isMinimumBondNotMet: boolean;
    readonly isOverflowRisk: boolean;
    readonly isNotDestroying: boolean;
    readonly isNotNominator: boolean;
    readonly isNotKickerOrDestroying: boolean;
    readonly isNotOpen: boolean;
    readonly isMaxPools: boolean;
    readonly isMaxPoolMembers: boolean;
    readonly isCanNotChangeState: boolean;
    readonly isDoesNotHavePermission: boolean;
    readonly isMetadataExceedsMaxLen: boolean;
    readonly isDefensive: boolean;
    readonly asDefensive: PezpalletNominationPoolsDefensiveError;
    readonly isPartialUnbondNotAllowedPermissionlessly: boolean;
    readonly isMaxCommissionRestricted: boolean;
    readonly isCommissionExceedsMaximum: boolean;
    readonly isCommissionExceedsGlobalMaximum: boolean;
    readonly isCommissionChangeThrottled: boolean;
    readonly isCommissionChangeRateNotAllowed: boolean;
    readonly isNoPendingCommission: boolean;
    readonly isNoCommissionCurrentSet: boolean;
    readonly isPoolIdInUse: boolean;
    readonly isInvalidPoolId: boolean;
    readonly isBondExtraRestricted: boolean;
    readonly isNothingToAdjust: boolean;
    readonly isNothingToSlash: boolean;
    readonly isSlashTooLow: boolean;
    readonly isAlreadyMigrated: boolean;
    readonly isNotMigrated: boolean;
    readonly isNotSupported: boolean;
    readonly isRestricted: boolean;
    readonly type: 'PoolNotFound' | 'PoolMemberNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'AccountBelongsToOtherPool' | 'FullyUnbonding' | 'MaxUnbondingLimit' | 'CannotWithdrawAny' | 'MinimumBondNotMet' | 'OverflowRisk' | 'NotDestroying' | 'NotNominator' | 'NotKickerOrDestroying' | 'NotOpen' | 'MaxPools' | 'MaxPoolMembers' | 'CanNotChangeState' | 'DoesNotHavePermission' | 'MetadataExceedsMaxLen' | 'Defensive' | 'PartialUnbondNotAllowedPermissionlessly' | 'MaxCommissionRestricted' | 'CommissionExceedsMaximum' | 'CommissionExceedsGlobalMaximum' | 'CommissionChangeThrottled' | 'CommissionChangeRateNotAllowed' | 'NoPendingCommission' | 'NoCommissionCurrentSet' | 'PoolIdInUse' | 'InvalidPoolId' | 'BondExtraRestricted' | 'NothingToAdjust' | 'NothingToSlash' | 'SlashTooLow' | 'AlreadyMigrated' | 'NotMigrated' | 'NotSupported' | 'Restricted';
  }

  /** @name PezpalletNominationPoolsDefensiveError (939) */
  interface PezpalletNominationPoolsDefensiveError extends Enum {
    readonly isNotEnoughSpaceInUnbondPool: boolean;
    readonly isPoolNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isBondedStashKilledPrematurely: boolean;
    readonly isDelegationUnsupported: boolean;
    readonly isSlashNotApplied: boolean;
    readonly type: 'NotEnoughSpaceInUnbondPool' | 'PoolNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'BondedStashKilledPrematurely' | 'DelegationUnsupported' | 'SlashNotApplied';
  }

  /** @name PezpalletReferendaReferendumInfoRankedCollectiveTally (940) */
  interface PezpalletReferendaReferendumInfoRankedCollectiveTally extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PezpalletReferendaReferendumStatusRankedCollectiveTally;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PezpalletReferendaDeposit>, Option<PezpalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PezpalletReferendaReferendumStatusRankedCollectiveTally (941) */
  interface PezpalletReferendaReferendumStatusRankedCollectiveTally extends Struct {
    readonly track: u16;
    readonly origin: KitchensinkRuntimeOriginCaller;
    readonly proposal: PezframeSupportPreimagesBounded;
    readonly enactment: PezframeSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PezpalletReferendaDeposit;
    readonly decisionDeposit: Option<PezpalletReferendaDeposit>;
    readonly deciding: Option<PezpalletReferendaDecidingStatus>;
    readonly tally: PezpalletRankedCollectiveTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PezpalletRankedCollectiveMemberRecord (944) */
  interface PezpalletRankedCollectiveMemberRecord extends Struct {
    readonly rank: u16;
  }

  /** @name PezpalletRankedCollectiveError (948) */
  interface PezpalletRankedCollectiveError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isNotPolling: boolean;
    readonly isOngoing: boolean;
    readonly isNoneRemaining: boolean;
    readonly isCorruption: boolean;
    readonly isRankTooLow: boolean;
    readonly isInvalidWitness: boolean;
    readonly isNoPermission: boolean;
    readonly isSameMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'NotPolling' | 'Ongoing' | 'NoneRemaining' | 'Corruption' | 'RankTooLow' | 'InvalidWitness' | 'NoPermission' | 'SameMember' | 'TooManyMembers';
  }

  /** @name PezpalletAssetConversionPoolInfo (949) */
  interface PezpalletAssetConversionPoolInfo extends Struct {
    readonly lpToken: u32;
  }

  /** @name PezpalletAssetConversionError (950) */
  interface PezpalletAssetConversionError extends Enum {
    readonly isInvalidAssetPair: boolean;
    readonly isPoolExists: boolean;
    readonly isWrongDesiredAmount: boolean;
    readonly isAmountOneLessThanMinimal: boolean;
    readonly isAmountTwoLessThanMinimal: boolean;
    readonly isReserveLeftLessThanMinimal: boolean;
    readonly isAmountOutTooHigh: boolean;
    readonly isPoolNotFound: boolean;
    readonly isOverflow: boolean;
    readonly isAssetOneDepositDidNotMeetMinimum: boolean;
    readonly isAssetTwoDepositDidNotMeetMinimum: boolean;
    readonly isAssetOneWithdrawalDidNotMeetMinimum: boolean;
    readonly isAssetTwoWithdrawalDidNotMeetMinimum: boolean;
    readonly isOptimalAmountLessThanDesired: boolean;
    readonly isInsufficientLiquidityMinted: boolean;
    readonly isZeroLiquidity: boolean;
    readonly isZeroAmount: boolean;
    readonly isProvidedMinimumNotSufficientForSwap: boolean;
    readonly isProvidedMaximumNotSufficientForSwap: boolean;
    readonly isInvalidPath: boolean;
    readonly isNonUniquePath: boolean;
    readonly isIncorrectPoolAssetId: boolean;
    readonly isBelowMinimum: boolean;
    readonly type: 'InvalidAssetPair' | 'PoolExists' | 'WrongDesiredAmount' | 'AmountOneLessThanMinimal' | 'AmountTwoLessThanMinimal' | 'ReserveLeftLessThanMinimal' | 'AmountOutTooHigh' | 'PoolNotFound' | 'Overflow' | 'AssetOneDepositDidNotMeetMinimum' | 'AssetTwoDepositDidNotMeetMinimum' | 'AssetOneWithdrawalDidNotMeetMinimum' | 'AssetTwoWithdrawalDidNotMeetMinimum' | 'OptimalAmountLessThanDesired' | 'InsufficientLiquidityMinted' | 'ZeroLiquidity' | 'ZeroAmount' | 'ProvidedMinimumNotSufficientForSwap' | 'ProvidedMaximumNotSufficientForSwap' | 'InvalidPath' | 'NonUniquePath' | 'IncorrectPoolAssetId' | 'BelowMinimum';
  }

  /** @name PezpalletFastUnstakeUnstakeRequest (951) */
  interface PezpalletFastUnstakeUnstakeRequest extends Struct {
    readonly stashes: Vec<ITuple<[PezspCoreCryptoAccountId32, u128]>>;
    readonly checked: Vec<u32>;
  }

  /** @name PezpalletFastUnstakeError (954) */
  interface PezpalletFastUnstakeError extends Enum {
    readonly isNotController: boolean;
    readonly isAlreadyQueued: boolean;
    readonly isNotFullyBonded: boolean;
    readonly isNotQueued: boolean;
    readonly isAlreadyHead: boolean;
    readonly isCallNotAllowed: boolean;
    readonly type: 'NotController' | 'AlreadyQueued' | 'NotFullyBonded' | 'NotQueued' | 'AlreadyHead' | 'CallNotAllowed';
  }

  /** @name PezpalletMessageQueueBookState (955) */
  interface PezpalletMessageQueueBookState extends Struct {
    readonly begin: u32;
    readonly end: u32;
    readonly count: u32;
    readonly readyNeighbours: Option<PezpalletMessageQueueNeighbours>;
    readonly messageCount: u64;
    readonly size_: u64;
  }

  /** @name PezpalletMessageQueueNeighbours (957) */
  interface PezpalletMessageQueueNeighbours extends Struct {
    readonly prev: u32;
    readonly next: u32;
  }

  /** @name PezpalletMessageQueuePage (958) */
  interface PezpalletMessageQueuePage extends Struct {
    readonly remaining: u32;
    readonly remainingSize: u32;
    readonly firstIndex: u32;
    readonly first: u32;
    readonly last: u32;
    readonly heap: Bytes;
  }

  /** @name PezpalletMessageQueueError (960) */
  interface PezpalletMessageQueueError extends Enum {
    readonly isNotReapable: boolean;
    readonly isNoPage: boolean;
    readonly isNoMessage: boolean;
    readonly isAlreadyProcessed: boolean;
    readonly isQueued: boolean;
    readonly isInsufficientWeight: boolean;
    readonly isTemporarilyUnprocessable: boolean;
    readonly isQueuePaused: boolean;
    readonly isRecursiveDisallowed: boolean;
    readonly type: 'NotReapable' | 'NoPage' | 'NoMessage' | 'AlreadyProcessed' | 'Queued' | 'InsufficientWeight' | 'TemporarilyUnprocessable' | 'QueuePaused' | 'RecursiveDisallowed';
  }

  /** @name PezpalletTxPauseError (961) */
  interface PezpalletTxPauseError extends Enum {
    readonly isIsPaused: boolean;
    readonly isIsUnpaused: boolean;
    readonly isUnpausable: boolean;
    readonly isNotFound: boolean;
    readonly type: 'IsPaused' | 'IsUnpaused' | 'Unpausable' | 'NotFound';
  }

  /** @name PezpalletSafeModeError (962) */
  interface PezpalletSafeModeError extends Enum {
    readonly isEntered: boolean;
    readonly isExited: boolean;
    readonly isNotConfigured: boolean;
    readonly isNoDeposit: boolean;
    readonly isAlreadyDeposited: boolean;
    readonly isCannotReleaseYet: boolean;
    readonly isCurrencyError: boolean;
    readonly type: 'Entered' | 'Exited' | 'NotConfigured' | 'NoDeposit' | 'AlreadyDeposited' | 'CannotReleaseYet' | 'CurrencyError';
  }

  /** @name PezpalletMigrationsError (963) */
  interface PezpalletMigrationsError extends Enum {
    readonly isOngoing: boolean;
    readonly type: 'Ongoing';
  }

  /** @name PezpalletBrokerLeaseRecordItem (967) */
  interface PezpalletBrokerLeaseRecordItem extends Struct {
    readonly until: u32;
    readonly task: u32;
  }

  /** @name PezpalletBrokerStatusRecord (969) */
  interface PezpalletBrokerStatusRecord extends Struct {
    readonly coreCount: u16;
    readonly privatePoolSize: u32;
    readonly systemPoolSize: u32;
    readonly lastCommittedTimeslice: u32;
    readonly lastTimeslice: u32;
  }

  /** @name PezpalletBrokerSaleInfoRecord (970) */
  interface PezpalletBrokerSaleInfoRecord extends Struct {
    readonly saleStart: u32;
    readonly leadinLength: u32;
    readonly endPrice: u128;
    readonly regionBegin: u32;
    readonly regionEnd: u32;
    readonly idealCoresSold: u16;
    readonly coresOffered: u16;
    readonly firstCore: u16;
    readonly selloutPrice: Option<u128>;
    readonly coresSold: u16;
  }

  /** @name PezpalletBrokerPotentialRenewalId (971) */
  interface PezpalletBrokerPotentialRenewalId extends Struct {
    readonly core: u16;
    readonly when: u32;
  }

  /** @name PezpalletBrokerPotentialRenewalRecord (972) */
  interface PezpalletBrokerPotentialRenewalRecord extends Struct {
    readonly price: u128;
    readonly completion: PezpalletBrokerCompletionStatus;
  }

  /** @name PezpalletBrokerCompletionStatus (973) */
  interface PezpalletBrokerCompletionStatus extends Enum {
    readonly isPartial: boolean;
    readonly asPartial: PezpalletBrokerCoreMask;
    readonly isComplete: boolean;
    readonly asComplete: Vec<PezpalletBrokerScheduleItem>;
    readonly type: 'Partial' | 'Complete';
  }

  /** @name PezpalletBrokerRegionRecord (974) */
  interface PezpalletBrokerRegionRecord extends Struct {
    readonly end: u32;
    readonly owner: Option<PezspCoreCryptoAccountId32>;
    readonly paid: Option<u128>;
  }

  /** @name PezpalletBrokerContributionRecord (976) */
  interface PezpalletBrokerContributionRecord extends Struct {
    readonly length: u32;
    readonly payee: PezspCoreCryptoAccountId32;
  }

  /** @name PezpalletBrokerPoolIoRecord (977) */
  interface PezpalletBrokerPoolIoRecord extends Struct {
    readonly private: i32;
    readonly system: i32;
  }

  /** @name PezpalletBrokerInstaPoolHistoryRecord (979) */
  interface PezpalletBrokerInstaPoolHistoryRecord extends Struct {
    readonly privateContributions: u32;
    readonly systemContributions: u32;
    readonly maybePayout: Option<u128>;
  }

  /** @name PezpalletBrokerAutoRenewalRecord (981) */
  interface PezpalletBrokerAutoRenewalRecord extends Struct {
    readonly core: u16;
    readonly task: u32;
    readonly nextRenewal: u32;
  }

  /** @name PezpalletBrokerError (983) */
  interface PezpalletBrokerError extends Enum {
    readonly isUnknownRegion: boolean;
    readonly isNotOwner: boolean;
    readonly isPivotTooLate: boolean;
    readonly isPivotTooEarly: boolean;
    readonly isExteriorPivot: boolean;
    readonly isVoidPivot: boolean;
    readonly isCompletePivot: boolean;
    readonly isCorruptWorkplan: boolean;
    readonly isNoSales: boolean;
    readonly isOverpriced: boolean;
    readonly isUnavailable: boolean;
    readonly isSoldOut: boolean;
    readonly isWrongTime: boolean;
    readonly isNotAllowed: boolean;
    readonly isUninitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isNothingToDo: boolean;
    readonly isTooManyReservations: boolean;
    readonly isTooManyLeases: boolean;
    readonly isLeaseNotFound: boolean;
    readonly isUnknownRevenue: boolean;
    readonly isUnknownContribution: boolean;
    readonly isIncompleteAssignment: boolean;
    readonly isStillValid: boolean;
    readonly isNoHistory: boolean;
    readonly isUnknownReservation: boolean;
    readonly isUnknownRenewal: boolean;
    readonly isAlreadyExpired: boolean;
    readonly isInvalidConfig: boolean;
    readonly isNoClaimTimeslices: boolean;
    readonly isNoPermission: boolean;
    readonly isTooManyAutoRenewals: boolean;
    readonly isNonTaskAutoRenewal: boolean;
    readonly isSovereignAccountNotFound: boolean;
    readonly isAutoRenewalNotEnabled: boolean;
    readonly isAssignmentNotFound: boolean;
    readonly isCreditPurchaseTooSmall: boolean;
    readonly type: 'UnknownRegion' | 'NotOwner' | 'PivotTooLate' | 'PivotTooEarly' | 'ExteriorPivot' | 'VoidPivot' | 'CompletePivot' | 'CorruptWorkplan' | 'NoSales' | 'Overpriced' | 'Unavailable' | 'SoldOut' | 'WrongTime' | 'NotAllowed' | 'Uninitialized' | 'TooEarly' | 'NothingToDo' | 'TooManyReservations' | 'TooManyLeases' | 'LeaseNotFound' | 'UnknownRevenue' | 'UnknownContribution' | 'IncompleteAssignment' | 'StillValid' | 'NoHistory' | 'UnknownReservation' | 'UnknownRenewal' | 'AlreadyExpired' | 'InvalidConfig' | 'NoClaimTimeslices' | 'NoPermission' | 'TooManyAutoRenewals' | 'NonTaskAutoRenewal' | 'SovereignAccountNotFound' | 'AutoRenewalNotEnabled' | 'AssignmentNotFound' | 'CreditPurchaseTooSmall';
  }

  /** @name PezpalletExampleTasksError (984) */
  interface PezpalletExampleTasksError extends Enum {
    readonly isNotFound: boolean;
    readonly type: 'NotFound';
  }

  /** @name PezpalletAssetConversionOpsError (985) */
  interface PezpalletAssetConversionOpsError extends Enum {
    readonly isInvalidAssetPair: boolean;
    readonly isPoolNotFound: boolean;
    readonly isZeroBalance: boolean;
    readonly isPartialTransfer: boolean;
    readonly type: 'InvalidAssetPair' | 'PoolNotFound' | 'ZeroBalance' | 'PartialTransfer';
  }

  /** @name PezpalletReviveWasmCodeInfo (987) */
  interface PezpalletReviveWasmCodeInfo extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly codeLen: u32;
    readonly behaviourVersion: u32;
  }

  /** @name PezpalletReviveStorageContractInfo (988) */
  interface PezpalletReviveStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
    readonly immutableDataLen: u32;
  }

  /** @name PezpalletReviveStorageDeletionQueueManager (990) */
  interface PezpalletReviveStorageDeletionQueueManager extends Struct {
    readonly insertCounter: u32;
    readonly deleteCounter: u32;
  }

  /** @name PezpalletReviveError (991) */
  interface PezpalletReviveError extends Enum {
    readonly isInvalidSchedule: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeNotFound: boolean;
    readonly isCodeInfoNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isTooManyTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isXcmDecodeFailed: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isReentranceDenied: boolean;
    readonly isReenteredPallet: boolean;
    readonly isStateChangeDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly isBlobTooLarge: boolean;
    readonly isStaticMemoryTooLarge: boolean;
    readonly isBasicBlockTooLarge: boolean;
    readonly isInvalidInstruction: boolean;
    readonly isMaxDelegateDependenciesReached: boolean;
    readonly isDelegateDependencyNotFound: boolean;
    readonly isDelegateDependencyAlreadyExists: boolean;
    readonly isCannotAddSelfAsDelegateDependency: boolean;
    readonly isOutOfTransientStorage: boolean;
    readonly isInvalidSyscall: boolean;
    readonly isInvalidStorageFlags: boolean;
    readonly isExecutionFailed: boolean;
    readonly isBalanceConversionFailed: boolean;
    readonly isDecimalPrecisionLoss: boolean;
    readonly isInvalidImmutableAccess: boolean;
    readonly isAccountUnmapped: boolean;
    readonly isAccountAlreadyMapped: boolean;
    readonly isInvalidGenericTransaction: boolean;
    readonly isRefcountOverOrUnderflow: boolean;
    readonly isUnsupportedPrecompileAddress: boolean;
    readonly isPrecompileFailure: boolean;
    readonly type: 'InvalidSchedule' | 'InvalidCallFlags' | 'OutOfGas' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeNotFound' | 'CodeInfoNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'TooManyTopics' | 'NoChainExtension' | 'XcmDecodeFailed' | 'DuplicateContract' | 'TerminatedInConstructor' | 'ReentranceDenied' | 'ReenteredPallet' | 'StateChangeDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected' | 'BlobTooLarge' | 'StaticMemoryTooLarge' | 'BasicBlockTooLarge' | 'InvalidInstruction' | 'MaxDelegateDependenciesReached' | 'DelegateDependencyNotFound' | 'DelegateDependencyAlreadyExists' | 'CannotAddSelfAsDelegateDependency' | 'OutOfTransientStorage' | 'InvalidSyscall' | 'InvalidStorageFlags' | 'ExecutionFailed' | 'BalanceConversionFailed' | 'DecimalPrecisionLoss' | 'InvalidImmutableAccess' | 'AccountUnmapped' | 'AccountAlreadyMapped' | 'InvalidGenericTransaction' | 'RefcountOverOrUnderflow' | 'UnsupportedPrecompileAddress' | 'PrecompileFailure';
  }

  /** @name PezpalletDelegatedStakingDelegation (992) */
  interface PezpalletDelegatedStakingDelegation extends Struct {
    readonly agent: PezspCoreCryptoAccountId32;
    readonly amount: u128;
  }

  /** @name PezpalletDelegatedStakingAgentLedger (993) */
  interface PezpalletDelegatedStakingAgentLedger extends Struct {
    readonly payee: PezspCoreCryptoAccountId32;
    readonly totalDelegated: Compact<u128>;
    readonly unclaimedWithdrawals: Compact<u128>;
    readonly pendingSlash: Compact<u128>;
  }

  /** @name PezpalletDelegatedStakingError (994) */
  interface PezpalletDelegatedStakingError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isAlreadyStaking: boolean;
    readonly isInvalidRewardDestination: boolean;
    readonly isInvalidDelegation: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isNotAgent: boolean;
    readonly isNotDelegator: boolean;
    readonly isBadState: boolean;
    readonly isUnappliedSlash: boolean;
    readonly isNothingToSlash: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isNotSupported: boolean;
    readonly type: 'NotAllowed' | 'AlreadyStaking' | 'InvalidRewardDestination' | 'InvalidDelegation' | 'NotEnoughFunds' | 'NotAgent' | 'NotDelegator' | 'BadState' | 'UnappliedSlash' | 'NothingToSlash' | 'WithdrawFailed' | 'NotSupported';
  }

  /** @name PezpalletAssetRewardsPoolStakerInfo (995) */
  interface PezpalletAssetRewardsPoolStakerInfo extends Struct {
    readonly amount: u128;
    readonly rewards: u128;
    readonly rewardPerTokenPaid: u128;
  }

  /** @name PezpalletAssetRewardsPoolInfo (996) */
  interface PezpalletAssetRewardsPoolInfo extends Struct {
    readonly stakedAssetId: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    readonly rewardAssetId: PezframeSupportTokensFungibleUnionOfNativeOrWithId;
    readonly rewardRatePerBlock: u128;
    readonly expiryBlock: u32;
    readonly admin: PezspCoreCryptoAccountId32;
    readonly totalTokensStaked: u128;
    readonly rewardPerTokenStored: u128;
    readonly lastUpdateBlock: u32;
    readonly account: PezspCoreCryptoAccountId32;
  }

  /** @name PezpalletAssetRewardsError (999) */
  interface PezpalletAssetRewardsError extends Enum {
    readonly isNotEnoughTokens: boolean;
    readonly isNonExistentPool: boolean;
    readonly isNonExistentStaker: boolean;
    readonly isNonExistentAsset: boolean;
    readonly isBlockNumberConversionError: boolean;
    readonly isExpiryBlockMustBeInTheFuture: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isExpiryCut: boolean;
    readonly isRewardRateCut: boolean;
    readonly isNonEmptyPool: boolean;
    readonly type: 'NotEnoughTokens' | 'NonExistentPool' | 'NonExistentStaker' | 'NonExistentAsset' | 'BlockNumberConversionError' | 'ExpiryBlockMustBeInTheFuture' | 'InsufficientFunds' | 'ExpiryCut' | 'RewardRateCut' | 'NonEmptyPool';
  }

  /** @name PezpalletAssetsFreezerError (1000) */
  interface PezpalletAssetsFreezerError extends Enum {
    readonly isTooManyFreezes: boolean;
    readonly type: 'TooManyFreezes';
  }

  /** @name PezpalletMetaTxError (1001) */
  interface PezpalletMetaTxError extends Enum {
    readonly isBadProof: boolean;
    readonly isFuture: boolean;
    readonly isStale: boolean;
    readonly isAncientBirthBlock: boolean;
    readonly isUnknownOrigin: boolean;
    readonly isInvalid: boolean;
    readonly type: 'BadProof' | 'Future' | 'Stale' | 'AncientBirthBlock' | 'UnknownOrigin' | 'Invalid';
  }

  /** @name PezframeSystemExtensionsCheckWeight (1003) */
  type PezframeSystemExtensionsCheckWeight = Null;

  /** @name PezpalletAssetConversionTxPaymentChargeAssetTxPayment (1004) */
  interface PezpalletAssetConversionTxPaymentChargeAssetTxPayment extends Struct {
    readonly tip: Compact<u128>;
    readonly assetId: Option<PezframeSupportTokensFungibleUnionOfNativeOrWithId>;
  }

  /** @name PezframeSystemExtensionsWeightReclaim (1006) */
  type PezframeSystemExtensionsWeightReclaim = Null;

  /** @name PezspRuntimeBlock (1007) */
  interface PezspRuntimeBlock extends Struct {
    readonly header: PezspRuntimeHeader;
    readonly extrinsics: Vec<Bytes>;
  }

  /** @name PezspRuntimeExtrinsicInclusionMode (1010) */
  interface PezspRuntimeExtrinsicInclusionMode extends Enum {
    readonly isAllExtrinsics: boolean;
    readonly isOnlyInherents: boolean;
    readonly type: 'AllExtrinsics' | 'OnlyInherents';
  }

  /** @name PezframeSupportViewFunctionsViewFunctionId (1013) */
  interface PezframeSupportViewFunctionsViewFunctionId extends Struct {
    readonly prefix: U8aFixed;
    readonly suffix: U8aFixed;
  }

  /** @name PezframeSupportViewFunctionsViewFunctionDispatchError (1015) */
  interface PezframeSupportViewFunctionsViewFunctionDispatchError extends Enum {
    readonly isNotImplemented: boolean;
    readonly isNotFound: boolean;
    readonly asNotFound: PezframeSupportViewFunctionsViewFunctionId;
    readonly isCodec: boolean;
    readonly type: 'NotImplemented' | 'NotFound' | 'Codec';
  }

  /** @name PezspRuntimeTransactionValidityTransactionValidityError (1017) */
  interface PezspRuntimeTransactionValidityTransactionValidityError extends Enum {
    readonly isInvalid: boolean;
    readonly asInvalid: PezspRuntimeTransactionValidityInvalidTransaction;
    readonly isUnknown: boolean;
    readonly asUnknown: PezspRuntimeTransactionValidityUnknownTransaction;
    readonly type: 'Invalid' | 'Unknown';
  }

  /** @name PezspRuntimeTransactionValidityInvalidTransaction (1018) */
  interface PezspRuntimeTransactionValidityInvalidTransaction extends Enum {
    readonly isCall: boolean;
    readonly isPayment: boolean;
    readonly isFuture: boolean;
    readonly isStale: boolean;
    readonly isBadProof: boolean;
    readonly isAncientBirthBlock: boolean;
    readonly isExhaustsResources: boolean;
    readonly isCustom: boolean;
    readonly asCustom: u8;
    readonly isBadMandatory: boolean;
    readonly isMandatoryValidation: boolean;
    readonly isBadSigner: boolean;
    readonly isIndeterminateImplicit: boolean;
    readonly isUnknownOrigin: boolean;
    readonly type: 'Call' | 'Payment' | 'Future' | 'Stale' | 'BadProof' | 'AncientBirthBlock' | 'ExhaustsResources' | 'Custom' | 'BadMandatory' | 'MandatoryValidation' | 'BadSigner' | 'IndeterminateImplicit' | 'UnknownOrigin';
  }

  /** @name PezspRuntimeTransactionValidityUnknownTransaction (1019) */
  interface PezspRuntimeTransactionValidityUnknownTransaction extends Enum {
    readonly isCannotLookup: boolean;
    readonly isNoUnsignedValidator: boolean;
    readonly isCustom: boolean;
    readonly asCustom: u8;
    readonly type: 'CannotLookup' | 'NoUnsignedValidator' | 'Custom';
  }

  /** @name PezspInherentsInherentData (1020) */
  interface PezspInherentsInherentData extends Struct {
    readonly data: BTreeMap<U8aFixed, Bytes>;
  }

  /** @name PezspInherentsCheckInherentsResult (1024) */
  interface PezspInherentsCheckInherentsResult extends Struct {
    readonly okay: bool;
    readonly fatalError: bool;
    readonly errors: PezspInherentsInherentData;
  }

  /** @name PezspRuntimeTransactionValidityTransactionSource (1025) */
  interface PezspRuntimeTransactionValidityTransactionSource extends Enum {
    readonly isInBlock: boolean;
    readonly isLocal: boolean;
    readonly isExternal: boolean;
    readonly type: 'InBlock' | 'Local' | 'External';
  }

  /** @name PezspRuntimeTransactionValidityValidTransaction (1027) */
  interface PezspRuntimeTransactionValidityValidTransaction extends Struct {
    readonly priority: u64;
    readonly requires: Vec<Bytes>;
    readonly provides: Vec<Bytes>;
    readonly longevity: u64;
    readonly propagate: bool;
  }

  /** @name PezspStatementStoreRuntimeApiStatementSource (1028) */
  interface PezspStatementStoreRuntimeApiStatementSource extends Enum {
    readonly isChain: boolean;
    readonly isNetwork: boolean;
    readonly isLocal: boolean;
    readonly type: 'Chain' | 'Network' | 'Local';
  }

  /** @name PezspStatementStoreRuntimeApiValidStatement (1030) */
  interface PezspStatementStoreRuntimeApiValidStatement extends Struct {
    readonly maxCount: u32;
    readonly maxSize: u32;
  }

  /** @name PezspStatementStoreRuntimeApiInvalidStatement (1031) */
  interface PezspStatementStoreRuntimeApiInvalidStatement extends Enum {
    readonly isBadProof: boolean;
    readonly isNoProof: boolean;
    readonly isInternalError: boolean;
    readonly type: 'BadProof' | 'NoProof' | 'InternalError';
  }

  /** @name PezspConsensusBabeBabeConfiguration (1035) */
  interface PezspConsensusBabeBabeConfiguration extends Struct {
    readonly slotDuration: u64;
    readonly epochLength: u64;
    readonly c: ITuple<[u64, u64]>;
    readonly authorities: Vec<ITuple<[PezspConsensusBabeAppPublic, u64]>>;
    readonly randomness: U8aFixed;
    readonly allowedSlots: PezspConsensusBabeAllowedSlots;
  }

  /** @name PezspConsensusBabeEpoch (1036) */
  interface PezspConsensusBabeEpoch extends Struct {
    readonly epochIndex: u64;
    readonly startSlot: u64;
    readonly duration: u64;
    readonly authorities: Vec<ITuple<[PezspConsensusBabeAppPublic, u64]>>;
    readonly randomness: U8aFixed;
    readonly config: PezspConsensusBabeBabeEpochConfiguration;
  }

  /** @name PezpalletContractsPrimitivesExecReturnValue (1041) */
  interface PezpalletContractsPrimitivesExecReturnValue extends Struct {
    readonly flags: PezpalletContractsUapiFlagsReturnFlags;
    readonly data: Bytes;
  }

  /** @name PezpalletContractsUapiFlagsReturnFlags (1042) */
  interface PezpalletContractsUapiFlagsReturnFlags extends Struct {
    readonly bits: u32;
  }

  /** @name PezpalletContractsPrimitivesStorageDeposit (1043) */
  interface PezpalletContractsPrimitivesStorageDeposit extends Enum {
    readonly isRefund: boolean;
    readonly asRefund: u128;
    readonly isCharge: boolean;
    readonly asCharge: u128;
    readonly type: 'Refund' | 'Charge';
  }

  /** @name PezpalletContractsPrimitivesCode (1046) */
  interface PezpalletContractsPrimitivesCode extends Enum {
    readonly isUpload: boolean;
    readonly asUpload: Bytes;
    readonly isExisting: boolean;
    readonly asExisting: H256;
    readonly type: 'Upload' | 'Existing';
  }

  /** @name PezpalletContractsPrimitivesContractResult (1047) */
  interface PezpalletContractsPrimitivesContractResult extends Struct {
    readonly gasConsumed: PezspWeightsWeightV2Weight;
    readonly gasRequired: PezspWeightsWeightV2Weight;
    readonly storageDeposit: PezpalletContractsPrimitivesStorageDeposit;
    readonly debugMessage: Bytes;
    readonly result: Result<PezpalletContractsPrimitivesInstantiateReturnValue, PezspRuntimeDispatchError>;
    readonly events: Option<Vec<PezframeSystemEventRecord>>;
  }

  /** @name PezpalletContractsPrimitivesInstantiateReturnValue (1049) */
  interface PezpalletContractsPrimitivesInstantiateReturnValue extends Struct {
    readonly result: PezpalletContractsPrimitivesExecReturnValue;
    readonly accountId: PezspCoreCryptoAccountId32;
  }

  /** @name PezpalletContractsPrimitivesCodeUploadReturnValue (1051) */
  interface PezpalletContractsPrimitivesCodeUploadReturnValue extends Struct {
    readonly codeHash: H256;
    readonly deposit: u128;
  }

  /** @name PezpalletContractsPrimitivesContractAccessError (1053) */
  interface PezpalletContractsPrimitivesContractAccessError extends Enum {
    readonly isDoesntExist: boolean;
    readonly isKeyDecodingFailed: boolean;
    readonly isMigrationInProgress: boolean;
    readonly type: 'DoesntExist' | 'KeyDecodingFailed' | 'MigrationInProgress';
  }

  /** @name PezpalletRevivePrimitivesContractResultExecReturnValue (1056) */
  interface PezpalletRevivePrimitivesContractResultExecReturnValue extends Struct {
    readonly gasConsumed: PezspWeightsWeightV2Weight;
    readonly gasRequired: PezspWeightsWeightV2Weight;
    readonly storageDeposit: PezpalletRevivePrimitivesStorageDeposit;
    readonly result: Result<PezpalletRevivePrimitivesExecReturnValue, PezspRuntimeDispatchError>;
  }

  /** @name PezpalletRevivePrimitivesExecReturnValue (1057) */
  interface PezpalletRevivePrimitivesExecReturnValue extends Struct {
    readonly flags: PezpalletReviveUapiFlagsReturnFlags;
    readonly data: Bytes;
  }

  /** @name PezpalletReviveUapiFlagsReturnFlags (1058) */
  interface PezpalletReviveUapiFlagsReturnFlags extends Struct {
    readonly bits: u32;
  }

  /** @name PezpalletRevivePrimitivesStorageDeposit (1059) */
  interface PezpalletRevivePrimitivesStorageDeposit extends Enum {
    readonly isRefund: boolean;
    readonly asRefund: u128;
    readonly isCharge: boolean;
    readonly asCharge: u128;
    readonly type: 'Refund' | 'Charge';
  }

  /** @name PezpalletRevivePrimitivesCode (1061) */
  interface PezpalletRevivePrimitivesCode extends Enum {
    readonly isUpload: boolean;
    readonly asUpload: Bytes;
    readonly isExisting: boolean;
    readonly asExisting: H256;
    readonly type: 'Upload' | 'Existing';
  }

  /** @name PezpalletRevivePrimitivesContractResultInstantiateReturnValue (1062) */
  interface PezpalletRevivePrimitivesContractResultInstantiateReturnValue extends Struct {
    readonly gasConsumed: PezspWeightsWeightV2Weight;
    readonly gasRequired: PezspWeightsWeightV2Weight;
    readonly storageDeposit: PezpalletRevivePrimitivesStorageDeposit;
    readonly result: Result<PezpalletRevivePrimitivesInstantiateReturnValue, PezspRuntimeDispatchError>;
  }

  /** @name PezpalletRevivePrimitivesInstantiateReturnValue (1063) */
  interface PezpalletRevivePrimitivesInstantiateReturnValue extends Struct {
    readonly result: PezpalletRevivePrimitivesExecReturnValue;
    readonly addr: H160;
  }

  /** @name PezpalletReviveEvmApiRpcTypesGenGenericTransaction (1065) */
  interface PezpalletReviveEvmApiRpcTypesGenGenericTransaction extends Struct {
    readonly accessList: Option<Vec<PezpalletReviveEvmApiRpcTypesGenAccessListEntry>>;
    readonly blobVersionedHashes: Vec<H256>;
    readonly blobs: Vec<Bytes>;
    readonly chainId: Option<U256>;
    readonly from: Option<H160>;
    readonly gas: Option<U256>;
    readonly gasPrice: Option<U256>;
    readonly input: PezpalletReviveEvmApiRpcTypesGenInputOrData;
    readonly maxFeePerBlobGas: Option<U256>;
    readonly maxFeePerGas: Option<U256>;
    readonly maxPriorityFeePerGas: Option<U256>;
    readonly nonce: Option<U256>;
    readonly to: Option<H160>;
    readonly r_type: Option<u8>;
    readonly value: Option<U256>;
  }

  /** @name PezpalletReviveEvmApiRpcTypesGenAccessListEntry (1068) */
  interface PezpalletReviveEvmApiRpcTypesGenAccessListEntry extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name PezpalletReviveEvmApiRpcTypesGenInputOrData (1073) */
  interface PezpalletReviveEvmApiRpcTypesGenInputOrData extends Struct {
    readonly input: Option<Bytes>;
    readonly data: Option<Bytes>;
  }

  /** @name PezpalletRevivePrimitivesEthTransactInfo (1078) */
  interface PezpalletRevivePrimitivesEthTransactInfo extends Struct {
    readonly gasRequired: PezspWeightsWeightV2Weight;
    readonly storageDeposit: u128;
    readonly ethGas: U256;
    readonly data: Bytes;
  }

  /** @name PezpalletRevivePrimitivesEthTransactError (1079) */
  interface PezpalletRevivePrimitivesEthTransactError extends Enum {
    readonly isData: boolean;
    readonly asData: Bytes;
    readonly isMessage: boolean;
    readonly asMessage: Text;
    readonly type: 'Data' | 'Message';
  }

  /** @name PezpalletRevivePrimitivesCodeUploadReturnValue (1081) */
  interface PezpalletRevivePrimitivesCodeUploadReturnValue extends Struct {
    readonly codeHash: H256;
    readonly deposit: u128;
  }

  /** @name PezpalletRevivePrimitivesContractAccessError (1083) */
  interface PezpalletRevivePrimitivesContractAccessError extends Enum {
    readonly isDoesntExist: boolean;
    readonly isKeyDecodingFailed: boolean;
    readonly type: 'DoesntExist' | 'KeyDecodingFailed';
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesTracerType (1084) */
  interface PezpalletReviveEvmApiDebugRpcTypesTracerType extends Enum {
    readonly isCallTracer: boolean;
    readonly asCallTracer: Option<PezpalletReviveEvmApiDebugRpcTypesCallTracerConfig>;
    readonly type: 'CallTracer';
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesCallTracerConfig (1086) */
  interface PezpalletReviveEvmApiDebugRpcTypesCallTracerConfig extends Struct {
    readonly withLogs: bool;
    readonly onlyTopCall: bool;
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesTrace (1089) */
  interface PezpalletReviveEvmApiDebugRpcTypesTrace extends Enum {
    readonly isCall: boolean;
    readonly asCall: PezpalletReviveEvmApiDebugRpcTypesCallTrace;
    readonly type: 'Call';
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesCallTrace (1090) */
  interface PezpalletReviveEvmApiDebugRpcTypesCallTrace extends Struct {
    readonly from: H160;
    readonly gas: U256;
    readonly gasUsed: U256;
    readonly to: H160;
    readonly input: Bytes;
    readonly output: Bytes;
    readonly error: Option<Text>;
    readonly revertReason: Option<Text>;
    readonly calls: Vec<PezpalletReviveEvmApiDebugRpcTypesCallTrace>;
    readonly logs: Vec<PezpalletReviveEvmApiDebugRpcTypesCallLog>;
    readonly value: Option<U256>;
    readonly callType: PezpalletReviveEvmApiDebugRpcTypesCallType;
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesCallLog (1094) */
  interface PezpalletReviveEvmApiDebugRpcTypesCallLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
    readonly position: u32;
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesCallType (1095) */
  interface PezpalletReviveEvmApiDebugRpcTypesCallType extends Enum {
    readonly isCall: boolean;
    readonly isStaticCall: boolean;
    readonly isDelegateCall: boolean;
    readonly type: 'Call' | 'StaticCall' | 'DelegateCall';
  }

  /** @name PezpalletTransactionPaymentRuntimeDispatchInfo (1098) */
  interface PezpalletTransactionPaymentRuntimeDispatchInfo extends Struct {
    readonly weight: PezspWeightsWeightV2Weight;
    readonly class: PezframeSupportDispatchDispatchClass;
    readonly partialFee: u128;
  }

  /** @name PezpalletTransactionPaymentFeeDetails (1099) */
  interface PezpalletTransactionPaymentFeeDetails extends Struct {
    readonly inclusionFee: Option<PezpalletTransactionPaymentInclusionFee>;
    readonly tip: u128;
  }

  /** @name PezpalletTransactionPaymentInclusionFee (1101) */
  interface PezpalletTransactionPaymentInclusionFee extends Struct {
    readonly baseFee: u128;
    readonly lenFee: u128;
    readonly adjustedWeightFee: u128;
  }

  /** @name PezspConsensusBeefyValidatorSet (1105) */
  interface PezspConsensusBeefyValidatorSet extends Struct {
    readonly validators: Vec<PezspConsensusBeefyEcdsaCryptoPublic>;
    readonly id: u64;
  }

  /** @name PezspConsensusBeefyForkVotingProofOpaqueValue (1106) */
  interface PezspConsensusBeefyForkVotingProofOpaqueValue extends Struct {
    readonly vote: PezspConsensusBeefyVoteMessage;
    readonly ancestryProof: Bytes;
    readonly header: PezspRuntimeHeader;
  }

  /** @name PezspMmrPrimitivesError (1108) */
  interface PezspMmrPrimitivesError extends Enum {
    readonly isInvalidNumericOp: boolean;
    readonly isPush: boolean;
    readonly isGetRoot: boolean;
    readonly isCommit: boolean;
    readonly isGenerateProof: boolean;
    readonly isVerify: boolean;
    readonly isLeafNotFound: boolean;
    readonly isPalletNotIncluded: boolean;
    readonly isInvalidLeafIndex: boolean;
    readonly isInvalidBestKnownBlock: boolean;
    readonly type: 'InvalidNumericOp' | 'Push' | 'GetRoot' | 'Commit' | 'GenerateProof' | 'Verify' | 'LeafNotFound' | 'PalletNotIncluded' | 'InvalidLeafIndex' | 'InvalidBestKnownBlock';
  }

  /** @name PezspMmrPrimitivesLeafProof (1114) */
  interface PezspMmrPrimitivesLeafProof extends Struct {
    readonly leafIndices: Vec<u64>;
    readonly leafCount: u64;
    readonly items: Vec<H256>;
  }

  /** @name PezspMixnetSessionStatus (1116) */
  interface PezspMixnetSessionStatus extends Struct {
    readonly currentIndex: u32;
    readonly phase: PezspMixnetSessionPhase;
  }

  /** @name PezspMixnetSessionPhase (1117) */
  interface PezspMixnetSessionPhase extends Enum {
    readonly isCoverToCurrent: boolean;
    readonly isRequestsToCurrent: boolean;
    readonly isCoverToPrev: boolean;
    readonly isDisconnectFromPrev: boolean;
    readonly type: 'CoverToCurrent' | 'RequestsToCurrent' | 'CoverToPrev' | 'DisconnectFromPrev';
  }

  /** @name PezspMixnetMixnode (1120) */
  interface PezspMixnetMixnode extends Struct {
    readonly kxPublic: U8aFixed;
    readonly peerId: U8aFixed;
    readonly externalAddresses: Vec<Bytes>;
  }

  /** @name PezspMixnetMixnodesErr (1121) */
  interface PezspMixnetMixnodesErr extends Enum {
    readonly isInsufficientRegistrations: boolean;
    readonly asInsufficientRegistrations: {
      readonly num: u32;
      readonly min: u32;
    } & Struct;
    readonly type: 'InsufficientRegistrations';
  }

  /** @name KitchensinkRuntimeRuntimeError (1127) */
  interface KitchensinkRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSystemError;
    readonly isUtility: boolean;
    readonly asUtility: PezpalletUtilityError;
    readonly isBabe: boolean;
    readonly asBabe: PezpalletBabeError;
    readonly isIndices: boolean;
    readonly asIndices: PezpalletIndicesError;
    readonly isBalances: boolean;
    readonly asBalances: PezpalletBalancesError;
    readonly isElectionProviderMultiPhase: boolean;
    readonly asElectionProviderMultiPhase: PezpalletElectionProviderMultiPhaseError;
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingPezpalletError;
    readonly isSession: boolean;
    readonly asSession: PezpalletSessionError;
    readonly isDemocracy: boolean;
    readonly asDemocracy: PezpalletDemocracyError;
    readonly isCouncil: boolean;
    readonly asCouncil: PezpalletCollectiveError;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PezpalletCollectiveError;
    readonly isElections: boolean;
    readonly asElections: PezpalletElectionsPhragmenError;
    readonly isTechnicalMembership: boolean;
    readonly asTechnicalMembership: PezpalletMembershipError;
    readonly isGrandpa: boolean;
    readonly asGrandpa: PezpalletGrandpaError;
    readonly isTreasury: boolean;
    readonly asTreasury: PezpalletTreasuryError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PezpalletAssetRateError;
    readonly isContracts: boolean;
    readonly asContracts: PezpalletContractsError;
    readonly isSudo: boolean;
    readonly asSudo: PezpalletSudoError;
    readonly isImOnline: boolean;
    readonly asImOnline: PezpalletImOnlineError;
    readonly isIdentity: boolean;
    readonly asIdentity: PezpalletIdentityError;
    readonly isSociety: boolean;
    readonly asSociety: PezpalletSocietyError;
    readonly isRecovery: boolean;
    readonly asRecovery: PezpalletRecoveryError;
    readonly isVesting: boolean;
    readonly asVesting: PezpalletVestingError;
    readonly isScheduler: boolean;
    readonly asScheduler: PezpalletSchedulerError;
    readonly isGlutton: boolean;
    readonly asGlutton: PezpalletGluttonError;
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageError;
    readonly isProxy: boolean;
    readonly asProxy: PezpalletProxyError;
    readonly isMultisig: boolean;
    readonly asMultisig: PezpalletMultisigError;
    readonly isBounties: boolean;
    readonly asBounties: PezpalletBountiesError;
    readonly isTips: boolean;
    readonly asTips: PezpalletTipsError;
    readonly isAssets: boolean;
    readonly asAssets: PezpalletAssetsError;
    readonly isPoolAssets: boolean;
    readonly asPoolAssets: PezpalletAssetsError;
    readonly isBeefy: boolean;
    readonly asBeefy: PezpalletBeefyError;
    readonly isLottery: boolean;
    readonly asLottery: PezpalletLotteryError;
    readonly isNis: boolean;
    readonly asNis: PezpalletNisError;
    readonly isUniques: boolean;
    readonly asUniques: PezpalletUniquesError;
    readonly isNfts: boolean;
    readonly asNfts: PezpalletNftsError;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PezpalletNftFractionalizationError;
    readonly isSalary: boolean;
    readonly asSalary: PezpalletSalaryError;
    readonly isCoreFellowship: boolean;
    readonly asCoreFellowship: PezpalletCoreFellowshipError;
    readonly isTransactionStorage: boolean;
    readonly asTransactionStorage: PezpalletTransactionStorageError;
    readonly isVoterList: boolean;
    readonly asVoterList: PezpalletBagsListError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PezpalletStateTrieMigrationError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PezpalletChildBountiesError;
    readonly isReferenda: boolean;
    readonly asReferenda: PezpalletReferendaError;
    readonly isRemark: boolean;
    readonly asRemark: PezpalletRemarkError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PezpalletConvictionVotingError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PezpalletWhitelistError;
    readonly isAllianceMotion: boolean;
    readonly asAllianceMotion: PezpalletCollectiveError;
    readonly isAlliance: boolean;
    readonly asAlliance: PezpalletAllianceError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsError;
    readonly isRankedPolls: boolean;
    readonly asRankedPolls: PezpalletReferendaError;
    readonly isRankedCollective: boolean;
    readonly asRankedCollective: PezpalletRankedCollectiveError;
    readonly isAssetConversion: boolean;
    readonly asAssetConversion: PezpalletAssetConversionError;
    readonly isFastUnstake: boolean;
    readonly asFastUnstake: PezpalletFastUnstakeError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PezpalletMessageQueueError;
    readonly isTxPause: boolean;
    readonly asTxPause: PezpalletTxPauseError;
    readonly isSafeMode: boolean;
    readonly asSafeMode: PezpalletSafeModeError;
    readonly isMultiBlockMigrations: boolean;
    readonly asMultiBlockMigrations: PezpalletMigrationsError;
    readonly isBroker: boolean;
    readonly asBroker: PezpalletBrokerError;
    readonly isTasksExample: boolean;
    readonly asTasksExample: PezpalletExampleTasksError;
    readonly isAssetConversionMigration: boolean;
    readonly asAssetConversionMigration: PezpalletAssetConversionOpsError;
    readonly isRevive: boolean;
    readonly asRevive: PezpalletReviveError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingError;
    readonly isAssetRewards: boolean;
    readonly asAssetRewards: PezpalletAssetRewardsError;
    readonly isAssetsFreezer: boolean;
    readonly asAssetsFreezer: PezpalletAssetsFreezerError;
    readonly isMetaTx: boolean;
    readonly asMetaTx: PezpalletMetaTxError;
    readonly type: 'System' | 'Utility' | 'Babe' | 'Indices' | 'Balances' | 'ElectionProviderMultiPhase' | 'Staking' | 'Session' | 'Democracy' | 'Council' | 'TechnicalCommittee' | 'Elections' | 'TechnicalMembership' | 'Grandpa' | 'Treasury' | 'AssetRate' | 'Contracts' | 'Sudo' | 'ImOnline' | 'Identity' | 'Society' | 'Recovery' | 'Vesting' | 'Scheduler' | 'Glutton' | 'Preimage' | 'Proxy' | 'Multisig' | 'Bounties' | 'Tips' | 'Assets' | 'PoolAssets' | 'Beefy' | 'Lottery' | 'Nis' | 'Uniques' | 'Nfts' | 'NftFractionalization' | 'Salary' | 'CoreFellowship' | 'TransactionStorage' | 'VoterList' | 'StateTrieMigration' | 'ChildBounties' | 'Referenda' | 'Remark' | 'ConvictionVoting' | 'Whitelist' | 'AllianceMotion' | 'Alliance' | 'NominationPools' | 'RankedPolls' | 'RankedCollective' | 'AssetConversion' | 'FastUnstake' | 'MessageQueue' | 'TxPause' | 'SafeMode' | 'MultiBlockMigrations' | 'Broker' | 'TasksExample' | 'AssetConversionMigration' | 'Revive' | 'DelegatedStaking' | 'AssetRewards' | 'AssetsFreezer' | 'MetaTx';
  }

} // declare module
