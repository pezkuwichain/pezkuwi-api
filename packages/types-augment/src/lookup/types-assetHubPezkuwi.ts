// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@pezkuwi/types/lookup';

import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@pezkuwi/types-codec';
import type { ITuple } from '@pezkuwi/types-codec/types';
import type { AccountId32, H256, MultiAddress, PerU16, Perbill, Percent } from '@pezkuwi/types/interfaces/runtime';

declare module '@pezkuwi/types/lookup' {
  /** @name AssetHubPezkuwiRuntimeRuntimeTask (32) */
  type AssetHubPezkuwiRuntimeRuntimeTask = Null;

  /** @name PezcumulusPezpalletTeyrchainSystemEvent (33) */
  interface PezcumulusPezpalletTeyrchainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: PezspWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name AssetHubPezkuwiRuntimeRuntimeParametersKey (41) */
  interface AssetHubPezkuwiRuntimeRuntimeParametersKey extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParametersKey;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPezkuwiRuntimeDynamicParamsSchedulerParametersKey;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParametersKey;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParametersKey (42) */
  interface AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParametersKey extends Enum {
    readonly isSignedPhase: boolean;
    readonly isMaxSignedSubmissions: boolean;
    readonly isUnsignedPhase: boolean;
    readonly isMinerPages: boolean;
    readonly isMaxElectingVoters: boolean;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly isMaxEraDuration: boolean;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionSignedPhase (43) */
  type AssetHubPezkuwiRuntimeDynamicParamsStakingElectionSignedPhase = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxSignedSubmissions (44) */
  type AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxSignedSubmissions = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionUnsignedPhase (45) */
  type AssetHubPezkuwiRuntimeDynamicParamsStakingElectionUnsignedPhase = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMinerPages (46) */
  type AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMinerPages = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxElectingVoters (47) */
  type AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxElectingVoters = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock (48) */
  type AssetHubPezkuwiRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxEraDuration (49) */
  type AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxEraDuration = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsSchedulerParametersKey (50) */
  interface AssetHubPezkuwiRuntimeDynamicParamsSchedulerParametersKey extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly isMaximumWeight: boolean;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsSchedulerMaxScheduledPerBlock (51) */
  type AssetHubPezkuwiRuntimeDynamicParamsSchedulerMaxScheduledPerBlock = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsSchedulerMaximumWeight (52) */
  type AssetHubPezkuwiRuntimeDynamicParamsSchedulerMaximumWeight = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParametersKey (53) */
  interface AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParametersKey extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly isMaxOnIdleWeight: boolean;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsMessageQueueMaxOnInitWeight (54) */
  type AssetHubPezkuwiRuntimeDynamicParamsMessageQueueMaxOnInitWeight = Null;

  /** @name AssetHubPezkuwiRuntimeDynamicParamsMessageQueueMaxOnIdleWeight (55) */
  type AssetHubPezkuwiRuntimeDynamicParamsMessageQueueMaxOnIdleWeight = Null;

  /** @name AssetHubPezkuwiRuntimeRuntimeParametersValue (57) */
  interface AssetHubPezkuwiRuntimeRuntimeParametersValue extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParametersValue;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPezkuwiRuntimeDynamicParamsSchedulerParametersValue;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParametersValue;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParametersValue (58) */
  interface AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParametersValue extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: u32;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: u32;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: u32;
    readonly isMinerPages: boolean;
    readonly asMinerPages: u32;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: u32;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: u32;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: u64;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsSchedulerParametersValue (59) */
  interface AssetHubPezkuwiRuntimeDynamicParamsSchedulerParametersValue extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: u32;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: PezspWeightsWeightV2Weight;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParametersValue (60) */
  interface AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParametersValue extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: Option<PezspWeightsWeightV2Weight>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: Option<PezspWeightsWeightV2Weight>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name PezpalletCollatorSelectionEvent (88) */
  interface PezpalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isInvulnerableAdded: boolean;
    readonly asInvulnerableAdded: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isInvulnerableRemoved: boolean;
    readonly asInvulnerableRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly desiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly bondAmount: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateBondUpdated: boolean;
    readonly asCandidateBondUpdated: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isCandidateReplaced: boolean;
    readonly asCandidateReplaced: {
      readonly old: AccountId32;
      readonly new_: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isInvalidInvulnerableSkipped: boolean;
    readonly asInvalidInvulnerableSkipped: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'InvulnerableAdded' | 'InvulnerableRemoved' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateBondUpdated' | 'CandidateRemoved' | 'CandidateReplaced' | 'InvalidInvulnerableSkipped';
  }

  /** @name PezcumulusPezpalletXcmpQueueEvent (91) */
  interface PezcumulusPezpalletXcmpQueueEvent extends Enum {
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'XcmpMessageSent';
  }

  /** @name PezcumulusPezpalletXcmEvent (166) */
  interface PezcumulusPezpalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV5TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name PezpalletXcmBridgeHubRouterEvent (167) */
  interface PezpalletXcmBridgeHubRouterEvent extends Enum {
    readonly isDeliveryFeeFactorDecreased: boolean;
    readonly asDeliveryFeeFactorDecreased: {
      readonly newValue: u128;
    } & Struct;
    readonly isDeliveryFeeFactorIncreased: boolean;
    readonly asDeliveryFeeFactorIncreased: {
      readonly newValue: u128;
    } & Struct;
    readonly type: 'DeliveryFeeFactorDecreased' | 'DeliveryFeeFactorIncreased';
  }

  /** @name PezcumulusPrimitivesCoreAggregateMessageOrigin (170) */
  interface PezcumulusPrimitivesCoreAggregateMessageOrigin extends Enum {
    readonly isHere: boolean;
    readonly isParent: boolean;
    readonly isSibling: boolean;
    readonly asSibling: u32;
    readonly type: 'Here' | 'Parent' | 'Sibling';
  }

  /** @name SnowbridgePezpalletSystemFrontendEvent (173) */
  interface SnowbridgePezpalletSystemFrontendEvent extends Enum {
    readonly isMessageSent: boolean;
    readonly asMessageSent: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly message: StagingXcmV5Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExportOperatingModeChanged: boolean;
    readonly asExportOperatingModeChanged: {
      readonly mode: SnowbridgeCoreOperatingModeBasicOperatingMode;
    } & Struct;
    readonly type: 'MessageSent' | 'ExportOperatingModeChanged';
  }

  /** @name SnowbridgeCoreOperatingModeBasicOperatingMode (174) */
  interface SnowbridgeCoreOperatingModeBasicOperatingMode extends Enum {
    readonly isNormal: boolean;
    readonly isHalted: boolean;
    readonly type: 'Normal' | 'Halted';
  }

  /** @name AssetHubPezkuwiRuntimeProxyType (179) */
  interface AssetHubPezkuwiRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isCancelProxy: boolean;
    readonly isAssets: boolean;
    readonly isAssetOwner: boolean;
    readonly isAssetManager: boolean;
    readonly isCollator: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isNominationPools: boolean;
    readonly isAuction: boolean;
    readonly isParaRegistration: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration';
  }

  /** @name TeyrchainsCommonPayVersionedLocatableAccount (207) */
  interface TeyrchainsCommonPayVersionedLocatableAccount extends Enum {
    readonly isV4: boolean;
    readonly asV4: {
      readonly location: StagingXcmV4Location;
      readonly accountId: StagingXcmV4Location;
    } & Struct;
    readonly isV5: boolean;
    readonly asV5: {
      readonly location: StagingXcmV5Location;
      readonly accountId: StagingXcmV5Location;
    } & Struct;
    readonly type: 'V4' | 'V5';
  }

  /** @name PezcumulusPezpalletTeyrchainSystemCall (218) */
  interface PezcumulusPezpalletTeyrchainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: PezcumulusPezpalletTeyrchainSystemTeyrchainInherentBasicTeyrchainInherentData;
      readonly inboundMessagesData: PezcumulusPezpalletTeyrchainSystemTeyrchainInherentInboundMessagesData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage';
  }

  /** @name PezcumulusPezpalletTeyrchainSystemTeyrchainInherentBasicTeyrchainInherentData (219) */
  interface PezcumulusPezpalletTeyrchainSystemTeyrchainInherentBasicTeyrchainInherentData extends Struct {
    readonly validationData: PezkuwiPrimitivesV8PersistedValidationData;
    readonly relayChainState: PezspTrieStorageProof;
    readonly relayParentDescendants: Vec<PezspRuntimeHeader>;
    readonly collatorPeerId: Option<Bytes>;
  }

  /** @name PezspTrieStorageProof (222) */
  interface PezspTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemTeyrchainInherentInboundMessagesData (227) */
  interface PezcumulusPezpalletTeyrchainSystemTeyrchainInherentInboundMessagesData extends Struct {
    readonly downwardMessages: {
      readonly fullMessages: Vec<PezkuwiCorePrimitivesInboundDownwardMessage>;
      readonly hashedMessages: Vec<PezcumulusPrimitivesTeyrchainInherentHashedMessage>;
    } & Struct;
    readonly horizontalMessages: PezcumulusPezpalletTeyrchainSystemTeyrchainInherentAbridgedInboundMessagesCollection;
  }

  /** @name PezcumulusPrimitivesTeyrchainInherentHashedMessage (232) */
  interface PezcumulusPrimitivesTeyrchainInherentHashedMessage extends Struct {
    readonly sentAt: u32;
    readonly msgHash: H256;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemTeyrchainInherentAbridgedInboundMessagesCollection (233) */
  interface PezcumulusPezpalletTeyrchainSystemTeyrchainInherentAbridgedInboundMessagesCollection extends Struct {
    readonly fullMessages: Vec<ITuple<[u32, PezkuwiCorePrimitivesInboundHrmpMessage]>>;
    readonly hashedMessages: Vec<ITuple<[u32, PezcumulusPrimitivesTeyrchainInherentHashedMessage]>>;
  }

  /** @name StagingTeyrchainInfoCall (240) */
  type StagingTeyrchainInfoCall = Null;

  /** @name AssetHubPezkuwiRuntimeRuntimeParameters (246) */
  interface AssetHubPezkuwiRuntimeRuntimeParameters extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParameters;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPezkuwiRuntimeDynamicParamsSchedulerParameters;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParameters;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParameters (247) */
  interface AssetHubPezkuwiRuntimeDynamicParamsStakingElectionParameters extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsStakingElectionSignedPhase, Option<u32>]>;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxSignedSubmissions, Option<u32>]>;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsStakingElectionUnsignedPhase, Option<u32>]>;
    readonly isMinerPages: boolean;
    readonly asMinerPages: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMinerPages, Option<u32>]>;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxElectingVoters, Option<u32>]>;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock, Option<u32>]>;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsStakingElectionMaxEraDuration, Option<u64>]>;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsSchedulerParameters (248) */
  interface AssetHubPezkuwiRuntimeDynamicParamsSchedulerParameters extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsSchedulerMaxScheduledPerBlock, Option<u32>]>;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsSchedulerMaximumWeight, Option<PezspWeightsWeightV2Weight>]>;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParameters (249) */
  interface AssetHubPezkuwiRuntimeDynamicParamsMessageQueueParameters extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsMessageQueueMaxOnInitWeight, Option<Option<PezspWeightsWeightV2Weight>>]>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: ITuple<[AssetHubPezkuwiRuntimeDynamicParamsMessageQueueMaxOnIdleWeight, Option<Option<PezspWeightsWeightV2Weight>>]>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name PezpalletCollatorSelectionCall (264) */
  interface PezpalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly isAddInvulnerable: boolean;
    readonly asAddInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveInvulnerable: boolean;
    readonly asRemoveInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly isUpdateBond: boolean;
    readonly asUpdateBond: {
      readonly newDeposit: u128;
    } & Struct;
    readonly isTakeCandidateSlot: boolean;
    readonly asTakeCandidateSlot: {
      readonly deposit: u128;
      readonly target: AccountId32;
    } & Struct;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'LeaveIntent' | 'AddInvulnerable' | 'RemoveInvulnerable' | 'UpdateBond' | 'TakeCandidateSlot';
  }

  /** @name AssetHubPezkuwiRuntimeSessionKeys (266) */
  interface AssetHubPezkuwiRuntimeSessionKeys extends Struct {
    readonly aura: PezspConsensusAuraEd25519AppEd25519Public;
  }

  /** @name PezspConsensusAuraEd25519AppEd25519Public (267) */
  interface PezspConsensusAuraEd25519AppEd25519Public extends U8aFixed {}

  /** @name PezcumulusPezpalletXcmpQueueCall (268) */
  interface PezcumulusPezpalletXcmpQueueCall extends Enum {
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold';
  }

  /** @name PezcumulusPezpalletXcmCall (313) */
  type PezcumulusPezpalletXcmCall = Null;

  /** @name PezpalletXcmBridgeHubRouterCall (314) */
  interface PezpalletXcmBridgeHubRouterCall extends Enum {
    readonly isReportBridgeStatus: boolean;
    readonly asReportBridgeStatus: {
      readonly bridgeId: H256;
      readonly isCongested: bool;
    } & Struct;
    readonly type: 'ReportBridgeStatus';
  }

  /** @name SnowbridgePezpalletSystemFrontendCall (316) */
  interface SnowbridgePezpalletSystemFrontendCall extends Enum {
    readonly isSetOperatingMode: boolean;
    readonly asSetOperatingMode: {
      readonly mode: SnowbridgeCoreOperatingModeBasicOperatingMode;
    } & Struct;
    readonly isRegisterToken: boolean;
    readonly asRegisterToken: {
      readonly assetId: XcmVersionedLocation;
      readonly metadata: SnowbridgeCoreAssetMetadata;
      readonly feeAsset: StagingXcmV5Asset;
    } & Struct;
    readonly isAddTip: boolean;
    readonly asAddTip: {
      readonly messageId: SnowbridgeCoreRewardMessageId;
      readonly asset: StagingXcmV5Asset;
    } & Struct;
    readonly type: 'SetOperatingMode' | 'RegisterToken' | 'AddTip';
  }

  /** @name SnowbridgeCoreAssetMetadata (317) */
  interface SnowbridgeCoreAssetMetadata extends Struct {
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
  }

  /** @name SnowbridgeCoreRewardMessageId (318) */
  interface SnowbridgeCoreRewardMessageId extends Enum {
    readonly isInbound: boolean;
    readonly asInbound: u64;
    readonly isOutbound: boolean;
    readonly asOutbound: u64;
    readonly type: 'Inbound' | 'Outbound';
  }

  /** @name AssetHubPezkuwiRuntimeOriginCaller (321) */
  interface AssetHubPezkuwiRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PezpalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: PezcumulusPezpalletXcmOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubPezkuwiRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm' | 'Origins';
  }

  /** @name PezcumulusPezpalletXcmOrigin (324) */
  interface PezcumulusPezpalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name AssetHubPezkuwiRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin (325) */
  interface AssetHubPezkuwiRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin extends Enum {
    readonly isStakingAdmin: boolean;
    readonly isTreasurer: boolean;
    readonly isFellowshipAdmin: boolean;
    readonly isGeneralAdmin: boolean;
    readonly isAuctionAdmin: boolean;
    readonly isLeaseAdmin: boolean;
    readonly isReferendumCanceller: boolean;
    readonly isReferendumKiller: boolean;
    readonly isSmallTipper: boolean;
    readonly isBigTipper: boolean;
    readonly isSmallSpender: boolean;
    readonly isMediumSpender: boolean;
    readonly isBigSpender: boolean;
    readonly isWhitelistedCaller: boolean;
    readonly isWishForChange: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller' | 'WishForChange';
  }

  /** @name PezpalletStakingAsyncRcClientCall (392) */
  interface PezpalletStakingAsyncRcClientCall extends Enum {
    readonly isRelaySessionReport: boolean;
    readonly asRelaySessionReport: {
      readonly report: PezpalletStakingAsyncRcClientSessionReport;
    } & Struct;
    readonly isRelayNewOffencePaged: boolean;
    readonly asRelayNewOffencePaged: {
      readonly offences: Vec<ITuple<[u32, PezpalletStakingAsyncRcClientOffence]>>;
    } & Struct;
    readonly type: 'RelaySessionReport' | 'RelayNewOffencePaged';
  }

  /** @name PezpalletElectionProviderMultiBlockCall (401) */
  interface PezpalletElectionProviderMultiBlockCall extends Enum {
    readonly isManage: boolean;
    readonly asManage: {
      readonly op: PezpalletElectionProviderMultiBlockAdminOperation;
    } & Struct;
    readonly type: 'Manage';
  }

  /** @name PezpalletElectionProviderMultiBlockAdminOperation (402) */
  interface PezpalletElectionProviderMultiBlockAdminOperation extends Enum {
    readonly isForceRotateRound: boolean;
    readonly isForceSetPhase: boolean;
    readonly asForceSetPhase: PezpalletElectionProviderMultiBlockPhase;
    readonly isEmergencySetSolution: boolean;
    readonly asEmergencySetSolution: ITuple<[PezframeElectionProviderSupportBoundedSupports, PezspNposElectionsElectionScore]>;
    readonly isEmergencyFallback: boolean;
    readonly isSetMinUntrustedScore: boolean;
    readonly asSetMinUntrustedScore: PezspNposElectionsElectionScore;
    readonly type: 'ForceRotateRound' | 'ForceSetPhase' | 'EmergencySetSolution' | 'EmergencyFallback' | 'SetMinUntrustedScore';
  }

  /** @name PezpalletElectionProviderMultiBlockPhase (403) */
  interface PezpalletElectionProviderMultiBlockPhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly asSigned: u32;
    readonly isSignedValidation: boolean;
    readonly asSignedValidation: u32;
    readonly isUnsigned: boolean;
    readonly asUnsigned: u32;
    readonly isSnapshot: boolean;
    readonly asSnapshot: u32;
    readonly isDone: boolean;
    readonly isExport: boolean;
    readonly asExport: u32;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'SignedValidation' | 'Unsigned' | 'Snapshot' | 'Done' | 'Export' | 'Emergency';
  }

  /** @name PezpalletElectionProviderMultiBlockVerifierImplsPezpalletCall (413) */
  type PezpalletElectionProviderMultiBlockVerifierImplsPezpalletCall = Null;

  /** @name PezpalletElectionProviderMultiBlockUnsignedPezpalletCall (414) */
  interface PezpalletElectionProviderMultiBlockUnsignedPezpalletCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly pagedSolution: PezpalletElectionProviderMultiBlockPagedRawSolution;
    } & Struct;
    readonly type: 'SubmitUnsigned';
  }

  /** @name PezpalletElectionProviderMultiBlockPagedRawSolution (415) */
  interface PezpalletElectionProviderMultiBlockPagedRawSolution extends Struct {
    readonly solutionPages: Vec<AssetHubPezkuwiRuntimeStakingNposCompactSolution16>;
    readonly score: PezspNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name AssetHubPezkuwiRuntimeStakingNposCompactSolution16 (417) */
  interface AssetHubPezkuwiRuntimeStakingNposCompactSolution16 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PezpalletElectionProviderMultiBlockSignedPezpalletCall (468) */
  interface PezpalletElectionProviderMultiBlockSignedPezpalletCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly claimedScore: PezspNposElectionsElectionScore;
    } & Struct;
    readonly isSubmitPage: boolean;
    readonly asSubmitPage: {
      readonly page: u32;
      readonly maybeSolution: Option<AssetHubPezkuwiRuntimeStakingNposCompactSolution16>;
    } & Struct;
    readonly isBail: boolean;
    readonly isClearOldRoundData: boolean;
    readonly asClearOldRoundData: {
      readonly round: u32;
      readonly witnessPages: u32;
    } & Struct;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly inv: Vec<AccountId32>;
    } & Struct;
    readonly type: 'Register' | 'SubmitPage' | 'Bail' | 'ClearOldRoundData' | 'SetInvulnerables';
  }

  /** @name PezpalletStakingAsyncPezpalletCall (470) */
  interface PezpalletStakingAsyncPezpalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PezpalletStakingAsyncRewardDestination;
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
      readonly prefs: PezpalletStakingAsyncValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PezpalletStakingAsyncRewardDestination;
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
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly validatorSlashes: Vec<ITuple<[AccountId32, Perbill]>>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PezpalletStakingAsyncPezpalletConfigOpU128;
      readonly minValidatorBond: PezpalletStakingAsyncPezpalletConfigOpU128;
      readonly maxNominatorCount: PezpalletStakingAsyncPezpalletConfigOpU32;
      readonly maxValidatorCount: PezpalletStakingAsyncPezpalletConfigOpU32;
      readonly chillThreshold: PezpalletStakingAsyncPezpalletConfigOpPercent;
      readonly minCommission: PezpalletStakingAsyncPezpalletConfigOpPerbill;
      readonly maxStakedRewards: PezpalletStakingAsyncPezpalletConfigOpPercent;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isPayoutStakersByPage: boolean;
    readonly asPayoutStakersByPage: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
      readonly page: u32;
    } & Struct;
    readonly isUpdatePayee: boolean;
    readonly asUpdatePayee: {
      readonly controller: AccountId32;
    } & Struct;
    readonly isDeprecateControllerBatch: boolean;
    readonly asDeprecateControllerBatch: {
      readonly controllers: Vec<AccountId32>;
    } & Struct;
    readonly isRestoreLedger: boolean;
    readonly asRestoreLedger: {
      readonly stash: AccountId32;
      readonly maybeController: Option<AccountId32>;
      readonly maybeTotal: Option<u128>;
      readonly maybeUnlocking: Option<Vec<PezpalletStakingAsyncLedgerUnlockChunk>>;
    } & Struct;
    readonly isMigrateCurrency: boolean;
    readonly asMigrateCurrency: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isApplySlash: boolean;
    readonly asApplySlash: {
      readonly slashEra: u32;
      readonly slashKey: ITuple<[AccountId32, Perbill, u32]>;
    } & Struct;
    readonly isPruneEraStep: boolean;
    readonly asPruneEraStep: {
      readonly era: u32;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission' | 'PayoutStakersByPage' | 'UpdatePayee' | 'DeprecateControllerBatch' | 'RestoreLedger' | 'MigrateCurrency' | 'ApplySlash' | 'PruneEraStep';
  }

  /** @name PezpalletStakingAsyncRewardDestination (471) */
  interface PezpalletStakingAsyncRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PezpalletStakingAsyncValidatorPrefs (472) */
  interface PezpalletStakingAsyncValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PezpalletStakingAsyncPezpalletConfigOpU128 (478) */
  interface PezpalletStakingAsyncPezpalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingAsyncPezpalletConfigOpU32 (479) */
  interface PezpalletStakingAsyncPezpalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingAsyncPezpalletConfigOpPercent (480) */
  interface PezpalletStakingAsyncPezpalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingAsyncPezpalletConfigOpPerbill (481) */
  interface PezpalletStakingAsyncPezpalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PezpalletStakingAsyncLedgerUnlockChunk (485) */
  interface PezpalletStakingAsyncLedgerUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PezpalletAhOpsCall (488) */
  interface PezpalletAhOpsCall extends Enum {
    readonly isUnreserveLeaseDeposit: boolean;
    readonly asUnreserveLeaseDeposit: {
      readonly block: u32;
      readonly depositor: Option<AccountId32>;
      readonly paraId: u32;
    } & Struct;
    readonly isWithdrawCrowdloanContribution: boolean;
    readonly asWithdrawCrowdloanContribution: {
      readonly block: u32;
      readonly depositor: Option<AccountId32>;
      readonly paraId: u32;
    } & Struct;
    readonly isUnreserveCrowdloanReserve: boolean;
    readonly asUnreserveCrowdloanReserve: {
      readonly block: u32;
      readonly depositor: Option<AccountId32>;
      readonly paraId: u32;
    } & Struct;
    readonly isTransferToPostMigrationTreasury: boolean;
    readonly asTransferToPostMigrationTreasury: {
      readonly assetId: StagingXcmV5Location;
    } & Struct;
    readonly type: 'UnreserveLeaseDeposit' | 'WithdrawCrowdloanContribution' | 'UnreserveCrowdloanReserve' | 'TransferToPostMigrationTreasury';
  }

  /** @name PezpalletAhMigratorCall (489) */
  interface PezpalletAhMigratorCall extends Enum {
    readonly isReceiveAccounts: boolean;
    readonly asReceiveAccounts: {
      readonly accounts: Vec<PezpalletRcMigratorAccountsAccount>;
    } & Struct;
    readonly isReceiveMultisigs: boolean;
    readonly asReceiveMultisigs: {
      readonly accounts: Vec<PezpalletRcMigratorMultisigRcMultisig>;
    } & Struct;
    readonly isReceiveProxyProxies: boolean;
    readonly asReceiveProxyProxies: {
      readonly proxies: Vec<PezpalletRcMigratorProxyRcProxy>;
    } & Struct;
    readonly isReceiveProxyAnnouncements: boolean;
    readonly asReceiveProxyAnnouncements: {
      readonly announcements: Vec<PezpalletRcMigratorProxyRcProxyAnnouncement>;
    } & Struct;
    readonly isReceivePreimageChunks: boolean;
    readonly asReceivePreimageChunks: {
      readonly chunks: Vec<PezpalletRcMigratorPreimageChunksRcPreimageChunk>;
    } & Struct;
    readonly isReceivePreimageRequestStatus: boolean;
    readonly asReceivePreimageRequestStatus: {
      readonly requestStatus: Vec<PezpalletRcMigratorPreimageRequestStatusPortableRequestStatus>;
    } & Struct;
    readonly isReceivePreimageLegacyStatus: boolean;
    readonly asReceivePreimageLegacyStatus: {
      readonly legacyStatus: Vec<PezpalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus>;
    } & Struct;
    readonly isReceiveNomPoolsMessages: boolean;
    readonly asReceiveNomPoolsMessages: {
      readonly messages: Vec<PezpalletRcMigratorStakingNomPoolsRcNomPoolsMessage>;
    } & Struct;
    readonly isReceiveVestingSchedules: boolean;
    readonly asReceiveVestingSchedules: {
      readonly schedules: Vec<PezpalletRcMigratorVestingRcVestingSchedule>;
    } & Struct;
    readonly isReceiveReferendaValues: boolean;
    readonly asReceiveReferendaValues: {
      readonly values: Vec<PezpalletRcMigratorReferendaReferendaMessage>;
    } & Struct;
    readonly isReceiveReferendums: boolean;
    readonly asReceiveReferendums: {
      readonly referendums: Vec<ITuple<[u32, PezpalletReferendaReferendumInfoRcPalletsOrigin]>>;
    } & Struct;
    readonly isReceiveClaims: boolean;
    readonly asReceiveClaims: {
      readonly messages: Vec<PezpalletRcMigratorClaimsRcClaimsMessage>;
    } & Struct;
    readonly isReceiveBagsListMessages: boolean;
    readonly asReceiveBagsListMessages: {
      readonly messages: Vec<PezpalletRcMigratorStakingBagsListPortableBagsListMessage>;
    } & Struct;
    readonly isReceiveSchedulerMessages: boolean;
    readonly asReceiveSchedulerMessages: {
      readonly messages: Vec<PezpalletRcMigratorSchedulerRcSchedulerMessage>;
    } & Struct;
    readonly isReceiveIndices: boolean;
    readonly asReceiveIndices: {
      readonly indices: Vec<PezpalletRcMigratorIndicesRcIndicesIndex>;
    } & Struct;
    readonly isReceiveConvictionVotingMessages: boolean;
    readonly asReceiveConvictionVotingMessages: {
      readonly messages: Vec<PezpalletRcMigratorConvictionVotingRcConvictionVotingMessage>;
    } & Struct;
    readonly isReceiveBountiesMessages: boolean;
    readonly asReceiveBountiesMessages: {
      readonly messages: Vec<PezpalletRcMigratorBountiesRcBountiesMessage>;
    } & Struct;
    readonly isReceiveAssetRates: boolean;
    readonly asReceiveAssetRates: {
      readonly rates: Vec<ITuple<[PezkuwiRuntimeCommonImplsVersionedLocatableAsset, u128]>>;
    } & Struct;
    readonly isReceiveCrowdloanMessages: boolean;
    readonly asReceiveCrowdloanMessages: {
      readonly messages: Vec<PezpalletRcMigratorCrowdloanRcCrowdloanMessage>;
    } & Struct;
    readonly isReceiveReferendaMetadata: boolean;
    readonly asReceiveReferendaMetadata: {
      readonly metadata: Vec<ITuple<[u32, H256]>>;
    } & Struct;
    readonly isReceiveTreasuryMessages: boolean;
    readonly asReceiveTreasuryMessages: {
      readonly messages: Vec<PezpalletRcMigratorTreasuryPortableTreasuryMessage>;
    } & Struct;
    readonly isReceiveSchedulerAgendaMessages: boolean;
    readonly asReceiveSchedulerAgendaMessages: {
      readonly messages: Vec<PezpalletRcMigratorSchedulerSchedulerAgendaMessage>;
    } & Struct;
    readonly isReceiveDelegatedStakingMessages: boolean;
    readonly asReceiveDelegatedStakingMessages: {
      readonly messages: Vec<PezpalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage>;
    } & Struct;
    readonly isReceiveChildBountiesMessages: boolean;
    readonly asReceiveChildBountiesMessages: {
      readonly messages: Vec<PezpalletRcMigratorChildBountiesPortableChildBountiesMessage>;
    } & Struct;
    readonly isReceiveStakingMessages: boolean;
    readonly asReceiveStakingMessages: {
      readonly messages: Vec<PezpalletRcMigratorStakingMessagePortableStakingMessage>;
    } & Struct;
    readonly isForceSetStage: boolean;
    readonly asForceSetStage: {
      readonly stage: PezpalletAhMigratorMigrationStage;
    } & Struct;
    readonly isStartMigration: boolean;
    readonly isSetDmpQueuePriority: boolean;
    readonly asSetDmpQueuePriority: {
      readonly new_: PezpalletRcMigratorQueuePriority;
    } & Struct;
    readonly isSetManager: boolean;
    readonly asSetManager: {
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isFinishMigration: boolean;
    readonly asFinishMigration: {
      readonly data: Option<PezpalletRcMigratorMigrationFinishedData>;
      readonly coolOffEndAt: u32;
    } & Struct;
    readonly isSendXcmMessage: boolean;
    readonly asSendXcmMessage: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'ReceiveAccounts' | 'ReceiveMultisigs' | 'ReceiveProxyProxies' | 'ReceiveProxyAnnouncements' | 'ReceivePreimageChunks' | 'ReceivePreimageRequestStatus' | 'ReceivePreimageLegacyStatus' | 'ReceiveNomPoolsMessages' | 'ReceiveVestingSchedules' | 'ReceiveReferendaValues' | 'ReceiveReferendums' | 'ReceiveClaims' | 'ReceiveBagsListMessages' | 'ReceiveSchedulerMessages' | 'ReceiveIndices' | 'ReceiveConvictionVotingMessages' | 'ReceiveBountiesMessages' | 'ReceiveAssetRates' | 'ReceiveCrowdloanMessages' | 'ReceiveReferendaMetadata' | 'ReceiveTreasuryMessages' | 'ReceiveSchedulerAgendaMessages' | 'ReceiveDelegatedStakingMessages' | 'ReceiveChildBountiesMessages' | 'ReceiveStakingMessages' | 'ForceSetStage' | 'StartMigration' | 'SetDmpQueuePriority' | 'SetManager' | 'FinishMigration' | 'SendXcmMessage';
  }

  /** @name PezpalletRcMigratorAccountsAccount (491) */
  interface PezpalletRcMigratorAccountsAccount extends Struct {
    readonly who: AccountId32;
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly holds: Vec<PezframeSupportTokensMiscIdAmountPortableHoldReason>;
    readonly freezes: Vec<PezframeSupportTokensMiscIdAmountPortableFreezeReason>;
    readonly locks: Vec<PezpalletBalancesBalanceLock>;
    readonly unnamedReserve: u128;
    readonly consumers: u8;
    readonly providers: u8;
  }

  /** @name PezpalletRcMigratorPortableHoldReason (492) */
  interface PezpalletRcMigratorPortableHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingPezpalletHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PezpalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingHoldReason;
    readonly isSession: boolean;
    readonly asSession: PezpalletSessionHoldReason;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PezpalletXcmHoldReason;
    readonly type: 'Preimage' | 'Staking' | 'StateTrieMigration' | 'DelegatedStaking' | 'Session' | 'XcmPallet';
  }

  /** @name PezpalletRcMigratorPortableFreezeReason (499) */
  interface PezpalletRcMigratorPortableFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PezframeSupportTokensMiscIdAmountPortableHoldReason (502) */
  interface PezframeSupportTokensMiscIdAmountPortableHoldReason extends Struct {
    readonly id: PezpalletRcMigratorPortableHoldReason;
    readonly amount: u128;
  }

  /** @name PezframeSupportTokensMiscIdAmountPortableFreezeReason (505) */
  interface PezframeSupportTokensMiscIdAmountPortableFreezeReason extends Struct {
    readonly id: PezpalletRcMigratorPortableFreezeReason;
    readonly amount: u128;
  }

  /** @name PezpalletRcMigratorMultisigRcMultisig (512) */
  interface PezpalletRcMigratorMultisigRcMultisig extends Struct {
    readonly creator: AccountId32;
    readonly deposit: u128;
  }

  /** @name PezpalletRcMigratorProxyRcProxy (514) */
  interface PezpalletRcMigratorProxyRcProxy extends Struct {
    readonly delegator: AccountId32;
    readonly deposit: u128;
    readonly proxies: Vec<PezpalletProxyProxyDefinitionPezkuwiRuntimeConstantsProxyProxyType>;
  }

  /** @name PezpalletProxyProxyDefinitionPezkuwiRuntimeConstantsProxyProxyType (517) */
  interface PezpalletProxyProxyDefinitionPezkuwiRuntimeConstantsProxyProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: PezkuwiRuntimeConstantsProxyProxyType;
    readonly delay: u32;
  }

  /** @name PezpalletRcMigratorProxyRcProxyAnnouncement (519) */
  interface PezpalletRcMigratorProxyRcProxyAnnouncement extends Struct {
    readonly depositor: AccountId32;
    readonly deposit: u128;
  }

  /** @name PezpalletRcMigratorPreimageChunksRcPreimageChunk (521) */
  interface PezpalletRcMigratorPreimageChunksRcPreimageChunk extends Struct {
    readonly preimageHash: H256;
    readonly preimageLen: u32;
    readonly chunkByteOffset: u32;
    readonly chunkBytes: Bytes;
  }

  /** @name PezpalletRcMigratorPreimageRequestStatusPortableRequestStatus (524) */
  interface PezpalletRcMigratorPreimageRequestStatusPortableRequestStatus extends Struct {
    readonly hash_: H256;
    readonly requestStatus: PezpalletRcMigratorPreimageRequestStatusPortableRequestStatusInner;
  }

  /** @name PezpalletRcMigratorPreimageRequestStatusPortableRequestStatusInner (525) */
  interface PezpalletRcMigratorPreimageRequestStatusPortableRequestStatusInner extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[AccountId32, Bytes]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[AccountId32, Bytes]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PezpalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus (530) */
  interface PezpalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus extends Struct {
    readonly hash_: H256;
    readonly depositor: AccountId32;
    readonly deposit: u128;
  }

  /** @name PezpalletRcMigratorStakingNomPoolsRcNomPoolsMessage (532) */
  interface PezpalletRcMigratorStakingNomPoolsRcNomPoolsMessage extends Enum {
    readonly isStorageValues: boolean;
    readonly asStorageValues: {
      readonly values: PezpalletRcMigratorStakingNomPoolsNomPoolsStorageValues;
    } & Struct;
    readonly isPoolMembers: boolean;
    readonly asPoolMembers: {
      readonly member: ITuple<[AccountId32, PezpalletNominationPoolsPoolMember]>;
    } & Struct;
    readonly isBondedPools: boolean;
    readonly asBondedPools: {
      readonly pool: ITuple<[u32, PezpalletNominationPoolsBondedPoolInner]>;
    } & Struct;
    readonly isRewardPools: boolean;
    readonly asRewardPools: {
      readonly rewards: ITuple<[u32, PezpalletRcMigratorStakingNomPoolsAliasRewardPool]>;
    } & Struct;
    readonly isSubPoolsStorage: boolean;
    readonly asSubPoolsStorage: {
      readonly subPools: ITuple<[u32, PezpalletRcMigratorStakingNomPoolsAliasSubPools]>;
    } & Struct;
    readonly isMetadata: boolean;
    readonly asMetadata: {
      readonly meta: ITuple<[u32, Bytes]>;
    } & Struct;
    readonly isReversePoolIdLookup: boolean;
    readonly asReversePoolIdLookup: {
      readonly lookups: ITuple<[AccountId32, u32]>;
    } & Struct;
    readonly isClaimPermissions: boolean;
    readonly asClaimPermissions: {
      readonly perms: ITuple<[AccountId32, PezpalletNominationPoolsClaimPermission]>;
    } & Struct;
    readonly type: 'StorageValues' | 'PoolMembers' | 'BondedPools' | 'RewardPools' | 'SubPoolsStorage' | 'Metadata' | 'ReversePoolIdLookup' | 'ClaimPermissions';
  }

  /** @name PezpalletRcMigratorStakingNomPoolsNomPoolsStorageValues (533) */
  interface PezpalletRcMigratorStakingNomPoolsNomPoolsStorageValues extends Struct {
    readonly totalValueLocked: Option<u128>;
    readonly minJoinBond: Option<u128>;
    readonly minCreateBond: Option<u128>;
    readonly maxPools: Option<u32>;
    readonly maxPoolMembers: Option<u32>;
    readonly maxPoolMembersPerPool: Option<u32>;
    readonly globalMaxCommission: Option<Perbill>;
    readonly lastPoolId: Option<u32>;
  }

  /** @name PezpalletRcMigratorStakingNomPoolsAliasRewardPool (547) */
  interface PezpalletRcMigratorStakingNomPoolsAliasRewardPool extends Struct {
    readonly lastRecordedRewardCounter: u128;
    readonly lastRecordedTotalPayouts: u128;
    readonly totalRewardsClaimed: u128;
    readonly totalCommissionPending: u128;
    readonly totalCommissionClaimed: u128;
  }

  /** @name PezpalletRcMigratorStakingNomPoolsAliasSubPools (549) */
  interface PezpalletRcMigratorStakingNomPoolsAliasSubPools extends Struct {
    readonly noEra: PezpalletRcMigratorStakingNomPoolsAliasUnbondPool;
    readonly withEra: BTreeMap<u32, PezpalletRcMigratorStakingNomPoolsAliasUnbondPool>;
  }

  /** @name PezpalletRcMigratorStakingNomPoolsAliasUnbondPool (550) */
  interface PezpalletRcMigratorStakingNomPoolsAliasUnbondPool extends Struct {
    readonly points: u128;
    readonly balance: u128;
  }

  /** @name PezpalletRcMigratorVestingRcVestingSchedule (558) */
  interface PezpalletRcMigratorVestingRcVestingSchedule extends Struct {
    readonly who: AccountId32;
    readonly schedules: Vec<PezpalletVestingVestingInfo>;
  }

  /** @name PezpalletRcMigratorReferendaReferendaMessage (562) */
  interface PezpalletRcMigratorReferendaReferendaMessage extends Struct {
    readonly referendumCount: Option<u32>;
    readonly decidingCount: Vec<ITuple<[u16, u32]>>;
    readonly trackQueue: Vec<ITuple<[u16, Vec<ITuple<[u32, u128]>>]>>;
  }

  /** @name PezpalletReferendaReferendumInfoRcPalletsOrigin (569) */
  interface PezpalletReferendaReferendumInfoRcPalletsOrigin extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PezpalletReferendaReferendumStatusRcPalletsOrigin;
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

  /** @name AssetHubPezkuwiRuntimeAhMigrationRcPalletsOrigin (570) */
  interface AssetHubPezkuwiRuntimeAhMigrationRcPalletsOrigin extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubPezkuwiRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin;
    readonly type: 'System' | 'Origins';
  }

  /** @name PezpalletReferendaReferendumStatusRcPalletsOrigin (572) */
  interface PezpalletReferendaReferendumStatusRcPalletsOrigin extends Struct {
    readonly track: u16;
    readonly origin: AssetHubPezkuwiRuntimeAhMigrationRcPalletsOrigin;
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

  /** @name PezpalletRcMigratorClaimsRcClaimsMessage (580) */
  interface PezpalletRcMigratorClaimsRcClaimsMessage extends Enum {
    readonly isStorageValues: boolean;
    readonly asStorageValues: {
      readonly total: u128;
    } & Struct;
    readonly isClaims: boolean;
    readonly asClaims: ITuple<[PezkuwiRuntimeCommonClaimsEthereumAddress, u128]>;
    readonly isVesting: boolean;
    readonly asVesting: {
      readonly who: PezkuwiRuntimeCommonClaimsEthereumAddress;
      readonly schedule: ITuple<[u128, u128, u32]>;
    } & Struct;
    readonly isSigning: boolean;
    readonly asSigning: ITuple<[PezkuwiRuntimeCommonClaimsEthereumAddress, PezkuwiRuntimeCommonClaimsStatementKind]>;
    readonly isPreclaims: boolean;
    readonly asPreclaims: ITuple<[AccountId32, PezkuwiRuntimeCommonClaimsEthereumAddress]>;
    readonly type: 'StorageValues' | 'Claims' | 'Vesting' | 'Signing' | 'Preclaims';
  }

  /** @name PezpalletRcMigratorStakingBagsListPortableBagsListMessage (585) */
  interface PezpalletRcMigratorStakingBagsListPortableBagsListMessage extends Enum {
    readonly isNode: boolean;
    readonly asNode: {
      readonly id: AccountId32;
      readonly node: PezpalletRcMigratorStakingBagsListPortableNode;
    } & Struct;
    readonly isBag: boolean;
    readonly asBag: {
      readonly score: u64;
      readonly bag: PezpalletRcMigratorStakingBagsListPortableBag;
    } & Struct;
    readonly type: 'Node' | 'Bag';
  }

  /** @name PezpalletRcMigratorStakingBagsListPortableNode (586) */
  interface PezpalletRcMigratorStakingBagsListPortableNode extends Struct {
    readonly id: AccountId32;
    readonly prev: Option<AccountId32>;
    readonly next: Option<AccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PezpalletRcMigratorStakingBagsListPortableBag (587) */
  interface PezpalletRcMigratorStakingBagsListPortableBag extends Struct {
    readonly head: Option<AccountId32>;
    readonly tail: Option<AccountId32>;
    readonly bagUpper: u64;
  }

  /** @name PezpalletRcMigratorSchedulerRcSchedulerMessage (589) */
  interface PezpalletRcMigratorSchedulerRcSchedulerMessage extends Enum {
    readonly isIncompleteSince: boolean;
    readonly asIncompleteSince: u32;
    readonly isRetries: boolean;
    readonly asRetries: ITuple<[ITuple<[u32, u32]>, PezpalletSchedulerRetryConfig]>;
    readonly isLookup: boolean;
    readonly asLookup: ITuple<[U8aFixed, ITuple<[u32, u32]>]>;
    readonly type: 'IncompleteSince' | 'Retries' | 'Lookup';
  }

  /** @name PezpalletRcMigratorIndicesRcIndicesIndex (594) */
  interface PezpalletRcMigratorIndicesRcIndicesIndex extends Struct {
    readonly index: u32;
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly frozen: bool;
  }

  /** @name PezpalletRcMigratorConvictionVotingRcConvictionVotingMessage (596) */
  interface PezpalletRcMigratorConvictionVotingRcConvictionVotingMessage extends Enum {
    readonly isVotingFor: boolean;
    readonly asVotingFor: ITuple<[AccountId32, u16, PezpalletConvictionVotingVoteVoting]>;
    readonly isClassLocksFor: boolean;
    readonly asClassLocksFor: ITuple<[AccountId32, Vec<ITuple<[u16, u128]>>]>;
    readonly type: 'VotingFor' | 'ClassLocksFor';
  }

  /** @name PezpalletRcMigratorBountiesRcBountiesMessage (608) */
  interface PezpalletRcMigratorBountiesRcBountiesMessage extends Enum {
    readonly isBountyCount: boolean;
    readonly asBountyCount: u32;
    readonly isBountyApprovals: boolean;
    readonly asBountyApprovals: Vec<u32>;
    readonly isBountyDescriptions: boolean;
    readonly asBountyDescriptions: ITuple<[u32, Bytes]>;
    readonly isBounties: boolean;
    readonly asBounties: ITuple<[u32, PezpalletRcMigratorBountiesAliasBounty]>;
    readonly type: 'BountyCount' | 'BountyApprovals' | 'BountyDescriptions' | 'Bounties';
  }

  /** @name PezpalletRcMigratorBountiesAliasBounty (611) */
  interface PezpalletRcMigratorBountiesAliasBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PezpalletBountiesBountyStatus;
  }

  /** @name PezpalletRcMigratorCrowdloanRcCrowdloanMessage (616) */
  interface PezpalletRcMigratorCrowdloanRcCrowdloanMessage extends Enum {
    readonly isLeaseReserve: boolean;
    readonly asLeaseReserve: {
      readonly unreserveBlock: u32;
      readonly account: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isCrowdloanContribution: boolean;
    readonly asCrowdloanContribution: {
      readonly withdrawBlock: u32;
      readonly contributor: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
      readonly crowdloanAccount: AccountId32;
    } & Struct;
    readonly isCrowdloanReserve: boolean;
    readonly asCrowdloanReserve: {
      readonly unreserveBlock: u32;
      readonly depositor: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'LeaseReserve' | 'CrowdloanContribution' | 'CrowdloanReserve';
  }

  /** @name PezpalletRcMigratorTreasuryPortableTreasuryMessage (620) */
  interface PezpalletRcMigratorTreasuryPortableTreasuryMessage extends Enum {
    readonly isProposalCount: boolean;
    readonly asProposalCount: u32;
    readonly isProposals: boolean;
    readonly asProposals: ITuple<[u32, PezpalletTreasuryProposal]>;
    readonly isApprovals: boolean;
    readonly asApprovals: Vec<u32>;
    readonly isSpendCount: boolean;
    readonly asSpendCount: u32;
    readonly isSpends: boolean;
    readonly asSpends: {
      readonly id: u32;
      readonly status: PezpalletRcMigratorTreasuryPortableSpendStatus;
    } & Struct;
    readonly isLastSpendPeriod: boolean;
    readonly asLastSpendPeriod: Option<u32>;
    readonly isFunds: boolean;
    readonly type: 'ProposalCount' | 'Proposals' | 'Approvals' | 'SpendCount' | 'Spends' | 'LastSpendPeriod' | 'Funds';
  }

  /** @name PezpalletRcMigratorTreasuryPortableSpendStatus (623) */
  interface PezpalletRcMigratorTreasuryPortableSpendStatus extends Struct {
    readonly assetKind: PezkuwiRuntimeCommonImplsVersionedLocatableAsset;
    readonly amount: u128;
    readonly beneficiary: XcmVersionedLocation;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PezpalletRcMigratorTreasuryPortablePaymentState;
  }

  /** @name PezpalletRcMigratorTreasuryPortablePaymentState (624) */
  interface PezpalletRcMigratorTreasuryPortablePaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: u64;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name PezpalletRcMigratorSchedulerSchedulerAgendaMessage (626) */
  interface PezpalletRcMigratorSchedulerSchedulerAgendaMessage extends Struct {
    readonly block: u32;
    readonly agenda: Vec<Option<PezpalletRcMigratorSchedulerAliasScheduled>>;
  }

  /** @name PezpalletRcMigratorSchedulerAliasScheduled (627) */
  interface PezpalletRcMigratorSchedulerAliasScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: PezframeSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: AssetHubPezkuwiRuntimeAhMigrationRcPalletsOrigin;
  }

  /** @name PezpalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage (631) */
  interface PezpalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage extends Enum {
    readonly isDelegators: boolean;
    readonly asDelegators: {
      readonly delegator: AccountId32;
      readonly agent: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAgents: boolean;
    readonly asAgents: {
      readonly agent: AccountId32;
      readonly payee: AccountId32;
      readonly totalDelegated: u128;
      readonly unclaimedWithdrawals: u128;
      readonly pendingSlash: u128;
    } & Struct;
    readonly type: 'Delegators' | 'Agents';
  }

  /** @name PezpalletRcMigratorChildBountiesPortableChildBountiesMessage (633) */
  interface PezpalletRcMigratorChildBountiesPortableChildBountiesMessage extends Enum {
    readonly isChildBountyCount: boolean;
    readonly asChildBountyCount: u32;
    readonly isParentChildBounties: boolean;
    readonly asParentChildBounties: ITuple<[u32, u32]>;
    readonly isParentTotalChildBounties: boolean;
    readonly asParentTotalChildBounties: ITuple<[u32, u32]>;
    readonly isChildBounty: boolean;
    readonly asChildBounty: {
      readonly parentId: u32;
      readonly childId: u32;
      readonly childBounty: PezpalletRcMigratorChildBountiesPortableChildBounty;
    } & Struct;
    readonly isChildBountyDescriptionsV1: boolean;
    readonly asChildBountyDescriptionsV1: {
      readonly parentId: u32;
      readonly childId: u32;
      readonly description: Bytes;
    } & Struct;
    readonly isV0ToV1ChildBountyIds: boolean;
    readonly asV0ToV1ChildBountyIds: {
      readonly v0ChildId: u32;
      readonly parentId: u32;
      readonly v1ChildId: u32;
    } & Struct;
    readonly isChildrenCuratorFees: boolean;
    readonly asChildrenCuratorFees: {
      readonly childId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'ChildBountyCount' | 'ParentChildBounties' | 'ParentTotalChildBounties' | 'ChildBounty' | 'ChildBountyDescriptionsV1' | 'V0ToV1ChildBountyIds' | 'ChildrenCuratorFees';
  }

  /** @name PezpalletRcMigratorChildBountiesPortableChildBounty (634) */
  interface PezpalletRcMigratorChildBountiesPortableChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PezpalletRcMigratorChildBountiesPortableChildBountyStatus;
  }

  /** @name PezpalletRcMigratorChildBountiesPortableChildBountyStatus (635) */
  interface PezpalletRcMigratorChildBountiesPortableChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PezpalletRcMigratorStakingMessagePortableStakingMessage (638) */
  interface PezpalletRcMigratorStakingMessagePortableStakingMessage extends Enum {
    readonly isValues: boolean;
    readonly asValues: PezpalletRcMigratorStakingMessageStakingValues;
    readonly isInvulnerables: boolean;
    readonly asInvulnerables: Vec<AccountId32>;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly controller: AccountId32;
    } & Struct;
    readonly isLedger: boolean;
    readonly asLedger: {
      readonly controller: AccountId32;
      readonly ledger: PezpalletRcMigratorStakingMessagePortableStakingLedger;
    } & Struct;
    readonly isPayee: boolean;
    readonly asPayee: {
      readonly stash: AccountId32;
      readonly payment: PezpalletRcMigratorStakingMessagePortableRewardDestination;
    } & Struct;
    readonly isValidators: boolean;
    readonly asValidators: {
      readonly stash: AccountId32;
      readonly validators: PezpalletRcMigratorStakingMessagePortableValidatorPrefs;
    } & Struct;
    readonly isNominators: boolean;
    readonly asNominators: {
      readonly stash: AccountId32;
      readonly nominations: PezpalletRcMigratorStakingMessagePortableNominations;
    } & Struct;
    readonly isVirtualStakers: boolean;
    readonly asVirtualStakers: AccountId32;
    readonly isErasStakersOverview: boolean;
    readonly asErasStakersOverview: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly exposure: PezpalletRcMigratorStakingMessagePortablePagedExposureMetadata;
    } & Struct;
    readonly isErasStakersPaged: boolean;
    readonly asErasStakersPaged: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly page: u32;
      readonly exposure: PezpalletRcMigratorStakingMessagePortableExposurePage;
    } & Struct;
    readonly isClaimedRewards: boolean;
    readonly asClaimedRewards: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly rewards: Vec<u32>;
    } & Struct;
    readonly isErasValidatorPrefs: boolean;
    readonly asErasValidatorPrefs: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly prefs: PezpalletRcMigratorStakingMessagePortableValidatorPrefs;
    } & Struct;
    readonly isErasValidatorReward: boolean;
    readonly asErasValidatorReward: {
      readonly era: u32;
      readonly reward: u128;
    } & Struct;
    readonly isErasRewardPoints: boolean;
    readonly asErasRewardPoints: {
      readonly era: u32;
      readonly points: PezpalletRcMigratorStakingMessagePortableEraRewardPoints;
    } & Struct;
    readonly isErasTotalStake: boolean;
    readonly asErasTotalStake: {
      readonly era: u32;
      readonly totalStake: u128;
    } & Struct;
    readonly isUnappliedSlashes: boolean;
    readonly asUnappliedSlashes: {
      readonly era: u32;
      readonly slash: PezpalletRcMigratorStakingMessagePortableUnappliedSlash;
    } & Struct;
    readonly isBondedEras: boolean;
    readonly asBondedEras: Vec<ITuple<[u32, u32]>>;
    readonly isValidatorSlashInEra: boolean;
    readonly asValidatorSlashInEra: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly slash: ITuple<[Perbill, u128]>;
    } & Struct;
    readonly type: 'Values' | 'Invulnerables' | 'Bonded' | 'Ledger' | 'Payee' | 'Validators' | 'Nominators' | 'VirtualStakers' | 'ErasStakersOverview' | 'ErasStakersPaged' | 'ClaimedRewards' | 'ErasValidatorPrefs' | 'ErasValidatorReward' | 'ErasRewardPoints' | 'ErasTotalStake' | 'UnappliedSlashes' | 'BondedEras' | 'ValidatorSlashInEra';
  }

  /** @name PezpalletRcMigratorStakingMessageStakingValues (639) */
  interface PezpalletRcMigratorStakingMessageStakingValues extends Struct {
    readonly validatorCount: Option<u32>;
    readonly minValidatorCount: Option<u32>;
    readonly minNominatorBond: Option<u128>;
    readonly minValidatorBond: Option<u128>;
    readonly minActiveStake: Option<u128>;
    readonly minCommission: Option<Perbill>;
    readonly maxValidatorsCount: Option<u32>;
    readonly maxNominatorsCount: Option<u32>;
    readonly currentEra: Option<u32>;
    readonly activeEra: Option<PezpalletRcMigratorStakingMessagePortableActiveEraInfo>;
    readonly forceEra: Option<PezpalletRcMigratorStakingMessagePortableForcing>;
    readonly maxStakedRewards: Option<Percent>;
    readonly slashRewardFraction: Option<Perbill>;
    readonly canceledSlashPayout: Option<u128>;
    readonly currentPlannedSession: Option<u32>;
    readonly chillThreshold: Option<Percent>;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableActiveEraInfo (641) */
  interface PezpalletRcMigratorStakingMessagePortableActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableForcing (643) */
  interface PezpalletRcMigratorStakingMessagePortableForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PezpalletRcMigratorStakingMessagePortableStakingLedger (645) */
  interface PezpalletRcMigratorStakingMessagePortableStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: u128;
    readonly active: u128;
    readonly unlocking: Vec<PezpalletRcMigratorStakingMessagePortableUnlockChunk>;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableUnlockChunk (647) */
  interface PezpalletRcMigratorStakingMessagePortableUnlockChunk extends Struct {
    readonly value: u128;
    readonly era: u32;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableRewardDestination (649) */
  interface PezpalletRcMigratorStakingMessagePortableRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PezpalletRcMigratorStakingMessagePortableValidatorPrefs (650) */
  interface PezpalletRcMigratorStakingMessagePortableValidatorPrefs extends Struct {
    readonly commission: Perbill;
    readonly blocked: bool;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableNominations (651) */
  interface PezpalletRcMigratorStakingMessagePortableNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PezpalletRcMigratorStakingMessagePortablePagedExposureMetadata (653) */
  interface PezpalletRcMigratorStakingMessagePortablePagedExposureMetadata extends Struct {
    readonly total: u128;
    readonly own: u128;
    readonly nominatorCount: u32;
    readonly pageCount: u32;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableExposurePage (654) */
  interface PezpalletRcMigratorStakingMessagePortableExposurePage extends Struct {
    readonly pageTotal: u128;
    readonly others: Vec<PezpalletRcMigratorStakingMessagePortableIndividualExposure>;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableIndividualExposure (656) */
  interface PezpalletRcMigratorStakingMessagePortableIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: u128;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableEraRewardPoints (658) */
  interface PezpalletRcMigratorStakingMessagePortableEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: Vec<ITuple<[AccountId32, u32]>>;
  }

  /** @name PezpalletRcMigratorStakingMessagePortableUnappliedSlash (660) */
  interface PezpalletRcMigratorStakingMessagePortableUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PezpalletAhMigratorMigrationStage (665) */
  interface PezpalletAhMigratorMigrationStage extends Enum {
    readonly isPending: boolean;
    readonly isDataMigrationOngoing: boolean;
    readonly isMigrationDone: boolean;
    readonly isCoolOff: boolean;
    readonly asCoolOff: {
      readonly endAt: u32;
    } & Struct;
    readonly type: 'Pending' | 'DataMigrationOngoing' | 'MigrationDone' | 'CoolOff';
  }

  /** @name PezpalletRcMigratorMigrationFinishedData (668) */
  interface PezpalletRcMigratorMigrationFinishedData extends Struct {
    readonly rcBalanceKept: u128;
  }

  /** @name PezpalletStakingAsyncRcClientEvent (683) */
  interface PezpalletStakingAsyncRcClientEvent extends Enum {
    readonly isSessionReportReceived: boolean;
    readonly asSessionReportReceived: {
      readonly endIndex: u32;
      readonly activationTimestamp: Option<ITuple<[u64, u32]>>;
      readonly validatorPointsCounts: u32;
      readonly leftover: bool;
    } & Struct;
    readonly isOffenceReceived: boolean;
    readonly asOffenceReceived: {
      readonly slashSession: u32;
      readonly offencesCount: u32;
    } & Struct;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PezpalletStakingAsyncRcClientUnexpectedKind;
    readonly type: 'SessionReportReceived' | 'OffenceReceived' | 'Unexpected';
  }

  /** @name PezpalletStakingAsyncRcClientUnexpectedKind (684) */
  interface PezpalletStakingAsyncRcClientUnexpectedKind extends Enum {
    readonly isSessionReportIntegrityFailed: boolean;
    readonly isValidatorSetIntegrityFailed: boolean;
    readonly isSessionSkipped: boolean;
    readonly isSessionAlreadyProcessed: boolean;
    readonly isValidatorSetSendFailed: boolean;
    readonly isValidatorSetDropped: boolean;
    readonly type: 'SessionReportIntegrityFailed' | 'ValidatorSetIntegrityFailed' | 'SessionSkipped' | 'SessionAlreadyProcessed' | 'ValidatorSetSendFailed' | 'ValidatorSetDropped';
  }

  /** @name PezpalletElectionProviderMultiBlockEvent (685) */
  interface PezpalletElectionProviderMultiBlockEvent extends Enum {
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PezpalletElectionProviderMultiBlockPhase;
      readonly to: PezpalletElectionProviderMultiBlockPhase;
    } & Struct;
    readonly isUnexpectedTargetSnapshotFailed: boolean;
    readonly isUnexpectedVoterSnapshotFailed: boolean;
    readonly type: 'PhaseTransitioned' | 'UnexpectedTargetSnapshotFailed' | 'UnexpectedVoterSnapshotFailed';
  }

  /** @name PezpalletElectionProviderMultiBlockVerifierImplsPezpalletEvent (686) */
  interface PezpalletElectionProviderMultiBlockVerifierImplsPezpalletEvent extends Enum {
    readonly isVerificationFailed: boolean;
    readonly asVerificationFailed: ITuple<[u32, PezpalletElectionProviderMultiBlockVerifierFeasibilityError]>;
    readonly isVerified: boolean;
    readonly asVerified: ITuple<[u32, u32]>;
    readonly isQueued: boolean;
    readonly asQueued: ITuple<[PezspNposElectionsElectionScore, Option<PezspNposElectionsElectionScore>]>;
    readonly type: 'VerificationFailed' | 'Verified' | 'Queued';
  }

  /** @name PezpalletElectionProviderMultiBlockVerifierFeasibilityError (687) */
  interface PezpalletElectionProviderMultiBlockVerifierFeasibilityError extends Enum {
    readonly isWrongWinnerCount: boolean;
    readonly isSnapshotUnavailable: boolean;
    readonly isInvalidVote: boolean;
    readonly isInvalidVoter: boolean;
    readonly isInvalidWinner: boolean;
    readonly isInvalidScore: boolean;
    readonly isInvalidRound: boolean;
    readonly isScoreTooLow: boolean;
    readonly isFailedToBoundSupport: boolean;
    readonly isNposElection: boolean;
    readonly asNposElection: PezspNposElectionsError;
    readonly isIncomplete: boolean;
    readonly type: 'WrongWinnerCount' | 'SnapshotUnavailable' | 'InvalidVote' | 'InvalidVoter' | 'InvalidWinner' | 'InvalidScore' | 'InvalidRound' | 'ScoreTooLow' | 'FailedToBoundSupport' | 'NposElection' | 'Incomplete';
  }

  /** @name PezspNposElectionsError (688) */
  interface PezspNposElectionsError extends Enum {
    readonly isSolutionWeightOverflow: boolean;
    readonly isSolutionTargetOverflow: boolean;
    readonly isSolutionInvalidIndex: boolean;
    readonly isSolutionInvalidPageIndex: boolean;
    readonly isArithmeticError: boolean;
    readonly isInvalidSupportEdge: boolean;
    readonly isTooManyVoters: boolean;
    readonly isBoundsExceeded: boolean;
    readonly isDuplicateVoter: boolean;
    readonly isDuplicateTarget: boolean;
    readonly type: 'SolutionWeightOverflow' | 'SolutionTargetOverflow' | 'SolutionInvalidIndex' | 'SolutionInvalidPageIndex' | 'ArithmeticError' | 'InvalidSupportEdge' | 'TooManyVoters' | 'BoundsExceeded' | 'DuplicateVoter' | 'DuplicateTarget';
  }

  /** @name PezpalletElectionProviderMultiBlockSignedPezpalletEvent (690) */
  interface PezpalletElectionProviderMultiBlockSignedPezpalletEvent extends Enum {
    readonly isRegistered: boolean;
    readonly asRegistered: ITuple<[u32, AccountId32, PezspNposElectionsElectionScore]>;
    readonly isStored: boolean;
    readonly asStored: ITuple<[u32, AccountId32, u32]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[u32, AccountId32, u128]>;
    readonly isSlashed: boolean;
    readonly asSlashed: ITuple<[u32, AccountId32, u128]>;
    readonly isEjected: boolean;
    readonly asEjected: ITuple<[u32, AccountId32]>;
    readonly isDiscarded: boolean;
    readonly asDiscarded: ITuple<[u32, AccountId32]>;
    readonly isBailed: boolean;
    readonly asBailed: ITuple<[u32, AccountId32]>;
    readonly type: 'Registered' | 'Stored' | 'Rewarded' | 'Slashed' | 'Ejected' | 'Discarded' | 'Bailed';
  }

  /** @name PezpalletStakingAsyncPezpalletEvent (691) */
  interface PezpalletStakingAsyncPezpalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly dest: PezpalletStakingAsyncRewardDestination;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isStakerRemoved: boolean;
    readonly asStakerRemoved: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: AccountId32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: AccountId32;
      readonly page: u32;
      readonly next: Option<u32>;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: AccountId32;
      readonly prefs: PezpalletStakingAsyncValidatorPrefs;
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
      readonly mode: PezpalletStakingAsyncForcing;
    } & Struct;
    readonly isControllerBatchDeprecated: boolean;
    readonly asControllerBatchDeprecated: {
      readonly failures: u32;
    } & Struct;
    readonly isCurrencyMigrated: boolean;
    readonly asCurrencyMigrated: {
      readonly stash: AccountId32;
      readonly forceWithdraw: u128;
    } & Struct;
    readonly isPagedElectionProceeded: boolean;
    readonly asPagedElectionProceeded: {
      readonly page: u32;
      readonly result: Result<u32, u32>;
    } & Struct;
    readonly isOffenceReported: boolean;
    readonly asOffenceReported: {
      readonly offenceEra: u32;
      readonly validator: AccountId32;
      readonly fraction: Perbill;
    } & Struct;
    readonly isSlashComputed: boolean;
    readonly asSlashComputed: {
      readonly offenceEra: u32;
      readonly slashEra: u32;
      readonly offender: AccountId32;
      readonly page: u32;
    } & Struct;
    readonly isSlashCancelled: boolean;
    readonly asSlashCancelled: {
      readonly slashEra: u32;
      readonly validator: AccountId32;
    } & Struct;
    readonly isSessionRotated: boolean;
    readonly asSessionRotated: {
      readonly startingSession: u32;
      readonly activeEra: u32;
      readonly plannedEra: u32;
    } & Struct;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PezpalletStakingAsyncPezpalletUnexpectedKind;
    readonly isOffenceTooOld: boolean;
    readonly asOffenceTooOld: {
      readonly offenceEra: u32;
      readonly validator: AccountId32;
      readonly fraction: Perbill;
    } & Struct;
    readonly isEraPruned: boolean;
    readonly asEraPruned: {
      readonly index: u32;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'OldSlashingReportDiscarded' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'StakerRemoved' | 'Kicked' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra' | 'ControllerBatchDeprecated' | 'CurrencyMigrated' | 'PagedElectionProceeded' | 'OffenceReported' | 'SlashComputed' | 'SlashCancelled' | 'SessionRotated' | 'Unexpected' | 'OffenceTooOld' | 'EraPruned';
  }

  /** @name PezpalletStakingAsyncForcing (692) */
  interface PezpalletStakingAsyncForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PezpalletStakingAsyncPezpalletUnexpectedKind (694) */
  interface PezpalletStakingAsyncPezpalletUnexpectedKind extends Enum {
    readonly isEraDurationBoundExceeded: boolean;
    readonly isUnknownValidatorActivation: boolean;
    readonly type: 'EraDurationBoundExceeded' | 'UnknownValidatorActivation';
  }

  /** @name PezpalletAhOpsEvent (695) */
  interface PezpalletAhOpsEvent extends Enum {
    readonly isLeaseUnreserveRemaining: boolean;
    readonly asLeaseUnreserveRemaining: {
      readonly depositor: AccountId32;
      readonly paraId: u32;
      readonly remaining: u128;
    } & Struct;
    readonly isCrowdloanUnreserveRemaining: boolean;
    readonly asCrowdloanUnreserveRemaining: {
      readonly depositor: AccountId32;
      readonly paraId: u32;
      readonly remaining: u128;
    } & Struct;
    readonly isSovereignMigrated: boolean;
    readonly asSovereignMigrated: {
      readonly paraId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly derivationIndex: Option<u16>;
    } & Struct;
    readonly type: 'LeaseUnreserveRemaining' | 'CrowdloanUnreserveRemaining' | 'SovereignMigrated';
  }

  /** @name PezpalletAhMigratorEvent (696) */
  interface PezpalletAhMigratorEvent extends Enum {
    readonly isStageTransition: boolean;
    readonly asStageTransition: {
      readonly old: PezpalletAhMigratorMigrationStage;
      readonly new_: PezpalletAhMigratorMigrationStage;
    } & Struct;
    readonly isBatchReceived: boolean;
    readonly asBatchReceived: {
      readonly pallet: PezpalletAhMigratorPezpalletEventName;
      readonly count: u32;
    } & Struct;
    readonly isBatchProcessed: boolean;
    readonly asBatchProcessed: {
      readonly pallet: PezpalletAhMigratorPezpalletEventName;
      readonly countGood: u32;
      readonly countBad: u32;
    } & Struct;
    readonly isAssetHubMigrationStarted: boolean;
    readonly isAssetHubMigrationFinished: boolean;
    readonly isDmpQueuePrioritySet: boolean;
    readonly asDmpQueuePrioritySet: {
      readonly prioritized: bool;
      readonly cycleBlock: u32;
      readonly cyclePeriod: u32;
    } & Struct;
    readonly isDmpQueuePriorityConfigSet: boolean;
    readonly asDmpQueuePriorityConfigSet: {
      readonly old: PezpalletRcMigratorQueuePriority;
      readonly new_: PezpalletRcMigratorQueuePriority;
    } & Struct;
    readonly isBalancesBeforeRecordSet: boolean;
    readonly asBalancesBeforeRecordSet: {
      readonly checkingAccount: u128;
      readonly totalIssuance: u128;
    } & Struct;
    readonly isBalancesBeforeRecordConsumed: boolean;
    readonly asBalancesBeforeRecordConsumed: {
      readonly checkingAccount: u128;
      readonly totalIssuance: u128;
    } & Struct;
    readonly isReferendumCanceled: boolean;
    readonly asReferendumCanceled: {
      readonly id: u32;
    } & Struct;
    readonly isManagerSet: boolean;
    readonly asManagerSet: {
      readonly old: Option<AccountId32>;
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isAccountTranslatedParachainSovereign: boolean;
    readonly asAccountTranslatedParachainSovereign: {
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isAccountTranslatedParachainSovereignDerived: boolean;
    readonly asAccountTranslatedParachainSovereignDerived: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly derivationIndex: u16;
    } & Struct;
    readonly isXcmSent: boolean;
    readonly asXcmSent: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly message: StagingXcmV5Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFailedToUnreserveMultisigDeposit: boolean;
    readonly asFailedToUnreserveMultisigDeposit: {
      readonly expectedAmount: u128;
      readonly missingAmount: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isFailedToUnreservePreimageDeposit: boolean;
    readonly asFailedToUnreservePreimageDeposit: {
      readonly expectedAmount: u128;
      readonly missingAmount: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'StageTransition' | 'BatchReceived' | 'BatchProcessed' | 'AssetHubMigrationStarted' | 'AssetHubMigrationFinished' | 'DmpQueuePrioritySet' | 'DmpQueuePriorityConfigSet' | 'BalancesBeforeRecordSet' | 'BalancesBeforeRecordConsumed' | 'ReferendumCanceled' | 'ManagerSet' | 'AccountTranslatedParachainSovereign' | 'AccountTranslatedParachainSovereignDerived' | 'XcmSent' | 'FailedToUnreserveMultisigDeposit' | 'FailedToUnreservePreimageDeposit';
  }

  /** @name PezpalletAhMigratorPezpalletEventName (697) */
  interface PezpalletAhMigratorPezpalletEventName extends Enum {
    readonly isAssetRates: boolean;
    readonly isBagsList: boolean;
    readonly isBalances: boolean;
    readonly isBounties: boolean;
    readonly isChildBounties: boolean;
    readonly isClaims: boolean;
    readonly isConvictionVoting: boolean;
    readonly isCrowdloan: boolean;
    readonly isDelegatedStaking: boolean;
    readonly isIndices: boolean;
    readonly isMultisig: boolean;
    readonly isNomPools: boolean;
    readonly isPreimageChunk: boolean;
    readonly isPreimageLegacyStatus: boolean;
    readonly isPreimageRequestStatus: boolean;
    readonly isProxyAnnouncements: boolean;
    readonly isProxyProxies: boolean;
    readonly isRecovery: boolean;
    readonly isReferendaMetadata: boolean;
    readonly isReferendaReferendums: boolean;
    readonly isReferendaValues: boolean;
    readonly isScheduler: boolean;
    readonly isSchedulerAgenda: boolean;
    readonly isStaking: boolean;
    readonly isTreasury: boolean;
    readonly isVesting: boolean;
    readonly isSociety: boolean;
    readonly type: 'AssetRates' | 'BagsList' | 'Balances' | 'Bounties' | 'ChildBounties' | 'Claims' | 'ConvictionVoting' | 'Crowdloan' | 'DelegatedStaking' | 'Indices' | 'Multisig' | 'NomPools' | 'PreimageChunk' | 'PreimageLegacyStatus' | 'PreimageRequestStatus' | 'ProxyAnnouncements' | 'ProxyProxies' | 'Recovery' | 'ReferendaMetadata' | 'ReferendaReferendums' | 'ReferendaValues' | 'Scheduler' | 'SchedulerAgenda' | 'Staking' | 'Treasury' | 'Vesting' | 'Society';
  }

  /** @name PezcumulusPezpalletTeyrchainSystemUnincludedSegmentAncestor (715) */
  interface PezcumulusPezpalletTeyrchainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: PezcumulusPezpalletTeyrchainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PezkuwiPrimitivesV8UpgradeGoAhead>;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemUnincludedSegmentUsedBandwidth (716) */
  interface PezcumulusPezpalletTeyrchainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, PezcumulusPezpalletTeyrchainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemUnincludedSegmentHrmpChannelUpdate (718) */
  interface PezcumulusPezpalletTeyrchainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemUnincludedSegmentSegmentTracker (723) */
  interface PezcumulusPezpalletTeyrchainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: PezcumulusPezpalletTeyrchainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PezkuwiPrimitivesV8UpgradeGoAhead>;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemRelayStateSnapshotMessagingStateSnapshot (726) */
  interface PezcumulusPezpalletTeyrchainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: PezcumulusPezpalletTeyrchainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PezkuwiPrimitivesV8AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PezkuwiPrimitivesV8AbridgedHrmpChannel]>>;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (727) */
  interface PezcumulusPezpalletTeyrchainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PezkuwiPrimitivesV8AbridgedHrmpChannel (730) */
  interface PezkuwiPrimitivesV8AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PezkuwiPrimitivesV8AbridgedHostConfiguration (731) */
  interface PezkuwiPrimitivesV8AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PezkuwiPrimitivesV8AsyncBackingAsyncBackingParams;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemTeyrchainInherentInboundMessageId (737) */
  interface PezcumulusPezpalletTeyrchainSystemTeyrchainInherentInboundMessageId extends Struct {
    readonly sentAt: u32;
    readonly reverseIdx: u32;
  }

  /** @name PezcumulusPezpalletTeyrchainSystemError (740) */
  interface PezcumulusPezpalletTeyrchainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled';
  }

  /** @name AssetHubPezkuwiRuntimeRuntimeHoldReason (761) */
  interface AssetHubPezkuwiRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageHoldReason;
    readonly isSession: boolean;
    readonly asSession: PezpalletSessionHoldReason;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PezpalletXcmHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PezpalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingHoldReason;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PezpalletElectionProviderMultiBlockSignedPezpalletHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingAsyncPezpalletHoldReason;
    readonly type: 'Preimage' | 'Session' | 'PolkadotXcm' | 'StateTrieMigration' | 'DelegatedStaking' | 'MultiBlockElectionSigned' | 'Staking';
  }

  /** @name PezpalletElectionProviderMultiBlockSignedPezpalletHoldReason (762) */
  interface PezpalletElectionProviderMultiBlockSignedPezpalletHoldReason extends Enum {
    readonly isSignedSubmission: boolean;
    readonly type: 'SignedSubmission';
  }

  /** @name PezpalletStakingAsyncPezpalletHoldReason (763) */
  interface PezpalletStakingAsyncPezpalletHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly type: 'Staking';
  }

  /** @name AssetHubPezkuwiRuntimeRuntimeFreezeReason (767) */
  interface AssetHubPezkuwiRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PezpalletCollatorSelectionCandidateInfo (776) */
  interface PezpalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PezpalletCollatorSelectionError (779) */
  interface PezpalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewEligibleCollators: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNotInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly isInsertToCandidateListFailed: boolean;
    readonly isRemoveFromCandidateListFailed: boolean;
    readonly isDepositTooLow: boolean;
    readonly isUpdateCandidateListFailed: boolean;
    readonly isInsufficientBond: boolean;
    readonly isTargetIsNotCandidate: boolean;
    readonly isIdenticalDeposit: boolean;
    readonly isInvalidUnreserve: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewEligibleCollators' | 'AlreadyCandidate' | 'NotCandidate' | 'TooManyInvulnerables' | 'AlreadyInvulnerable' | 'NotInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered' | 'InsertToCandidateListFailed' | 'RemoveFromCandidateListFailed' | 'DepositTooLow' | 'UpdateCandidateListFailed' | 'InsufficientBond' | 'TargetIsNotCandidate' | 'IdenticalDeposit' | 'InvalidUnreserve';
  }

  /** @name PezcumulusPezpalletXcmpQueueOutboundChannelDetails (796) */
  interface PezcumulusPezpalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: PezcumulusPezpalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name PezcumulusPezpalletXcmpQueueOutboundState (797) */
  interface PezcumulusPezpalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PezcumulusPezpalletXcmpQueueQueueConfigData (801) */
  interface PezcumulusPezpalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
  }

  /** @name PezcumulusPezpalletXcmpQueueError (802) */
  interface PezcumulusPezpalletXcmpQueueError extends Enum {
    readonly isBadQueueConfig: boolean;
    readonly isAlreadySuspended: boolean;
    readonly isAlreadyResumed: boolean;
    readonly isTooManyActiveOutboundChannels: boolean;
    readonly isTooBig: boolean;
    readonly type: 'BadQueueConfig' | 'AlreadySuspended' | 'AlreadyResumed' | 'TooManyActiveOutboundChannels' | 'TooBig';
  }

  /** @name BpXcmBridgeHubRouterBridgeState (831) */
  interface BpXcmBridgeHubRouterBridgeState extends Struct {
    readonly deliveryFeeFactor: u128;
    readonly isCongested: bool;
  }

  /** @name SnowbridgePezpalletSystemFrontendError (839) */
  interface SnowbridgePezpalletSystemFrontendError extends Enum {
    readonly isUnsupportedLocationVersion: boolean;
    readonly isInvalidAssetOwner: boolean;
    readonly isSendFailure: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLocationConversionFailed: boolean;
    readonly isHalted: boolean;
    readonly isUnreachable: boolean;
    readonly isUnsupportedAsset: boolean;
    readonly isWithdrawError: boolean;
    readonly isInvalidAccount: boolean;
    readonly isSwapError: boolean;
    readonly isBurnError: boolean;
    readonly isTipAmountZero: boolean;
    readonly type: 'UnsupportedLocationVersion' | 'InvalidAssetOwner' | 'SendFailure' | 'FeesNotMet' | 'LocationConversionFailed' | 'Halted' | 'Unreachable' | 'UnsupportedAsset' | 'WithdrawError' | 'InvalidAccount' | 'SwapError' | 'BurnError' | 'TipAmountZero';
  }

  /** @name PezpalletProxyProxyDefinitionAssetHubPezkuwiRuntimeProxyType (847) */
  interface PezpalletProxyProxyDefinitionAssetHubPezkuwiRuntimeProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: AssetHubPezkuwiRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PezpalletReferendaReferendumInfoOriginCaller (917) */
  interface PezpalletReferendaReferendumInfoOriginCaller extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PezpalletReferendaReferendumStatusOriginCaller;
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

  /** @name PezpalletReferendaReferendumStatusOriginCaller (918) */
  interface PezpalletReferendaReferendumStatusOriginCaller extends Struct {
    readonly track: u16;
    readonly origin: AssetHubPezkuwiRuntimeOriginCaller;
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

  /** @name PezpalletElectionProviderMultiBlockError (959) */
  interface PezpalletElectionProviderMultiBlockError extends Enum {
    readonly isFallback: boolean;
    readonly isUnexpectedPhase: boolean;
    readonly isSnapshot: boolean;
    readonly type: 'Fallback' | 'UnexpectedPhase' | 'Snapshot';
  }

  /** @name PezpalletElectionProviderMultiBlockVerifierImplsValidSolution (960) */
  interface PezpalletElectionProviderMultiBlockVerifierImplsValidSolution extends Enum {
    readonly isX: boolean;
    readonly isY: boolean;
    readonly type: 'X' | 'Y';
  }

  /** @name PezpalletElectionProviderMultiBlockVerifierImplsPartialBackings (963) */
  interface PezpalletElectionProviderMultiBlockVerifierImplsPartialBackings extends Struct {
    readonly total: u128;
    readonly backers: u32;
  }

  /** @name PezpalletElectionProviderMultiBlockVerifierImplsStatus (965) */
  interface PezpalletElectionProviderMultiBlockVerifierImplsStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: u32;
    readonly isNothing: boolean;
    readonly type: 'Ongoing' | 'Nothing';
  }

  /** @name PezpalletElectionProviderMultiBlockSignedSubmissionMetadata (970) */
  interface PezpalletElectionProviderMultiBlockSignedSubmissionMetadata extends Struct {
    readonly deposit: u128;
    readonly fee: u128;
    readonly reward: u128;
    readonly claimedScore: PezspNposElectionsElectionScore;
    readonly pages: Vec<bool>;
  }

  /** @name PezpalletElectionProviderMultiBlockSignedPezpalletError (973) */
  interface PezpalletElectionProviderMultiBlockSignedPezpalletError extends Enum {
    readonly isPhaseNotSigned: boolean;
    readonly isDuplicate: boolean;
    readonly isQueueFull: boolean;
    readonly isBadPageIndex: boolean;
    readonly isNotRegistered: boolean;
    readonly isNoSubmission: boolean;
    readonly isRoundNotOver: boolean;
    readonly isBadWitnessData: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly type: 'PhaseNotSigned' | 'Duplicate' | 'QueueFull' | 'BadPageIndex' | 'NotRegistered' | 'NoSubmission' | 'RoundNotOver' | 'BadWitnessData' | 'TooManyInvulnerables';
  }

  /** @name PezpalletStakingAsyncLedgerStakingLedger (974) */
  interface PezpalletStakingAsyncLedgerStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PezpalletStakingAsyncLedgerUnlockChunk>;
  }

  /** @name PezpalletStakingAsyncNominations (975) */
  interface PezpalletStakingAsyncNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PezpalletStakingAsyncActiveEraInfo (976) */
  interface PezpalletStakingAsyncActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PezpalletStakingAsyncPezpalletBoundedExposurePage (979) */
  interface PezpalletStakingAsyncPezpalletBoundedExposurePage extends PezspStakingExposurePage {}

  /** @name PezpalletStakingAsyncEraRewardPoints (984) */
  interface PezpalletStakingAsyncEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PezpalletStakingAsyncSlashingOffenceRecord (987) */
  interface PezpalletStakingAsyncSlashingOffenceRecord extends Struct {
    readonly reporter: Option<AccountId32>;
    readonly reportedEra: u32;
    readonly exposurePage: u32;
    readonly slashFraction: Perbill;
    readonly priorSlashFraction: Perbill;
  }

  /** @name PezpalletStakingAsyncUnappliedSlash (991) */
  interface PezpalletStakingAsyncUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporter: Option<AccountId32>;
    readonly payout: u128;
  }

  /** @name PezpalletStakingAsyncSnapshotStatus (994) */
  interface PezpalletStakingAsyncSnapshotStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: AccountId32;
    readonly isConsumed: boolean;
    readonly isWaiting: boolean;
    readonly type: 'Ongoing' | 'Consumed' | 'Waiting';
  }

  /** @name PezpalletStakingAsyncPezpalletPruningStep (996) */
  interface PezpalletStakingAsyncPezpalletPruningStep extends Enum {
    readonly isErasStakersPaged: boolean;
    readonly isErasStakersOverview: boolean;
    readonly isErasValidatorPrefs: boolean;
    readonly isClaimedRewards: boolean;
    readonly isErasValidatorReward: boolean;
    readonly isErasRewardPoints: boolean;
    readonly isErasTotalStake: boolean;
    readonly type: 'ErasStakersPaged' | 'ErasStakersOverview' | 'ErasValidatorPrefs' | 'ClaimedRewards' | 'ErasValidatorReward' | 'ErasRewardPoints' | 'ErasTotalStake';
  }

  /** @name PezpalletStakingAsyncPezpalletError (997) */
  interface PezpalletStakingAsyncPezpalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashRecord: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isInvalidPage: boolean;
    readonly isIncorrectHistoryDepth: boolean;
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
    readonly isEraNotStarted: boolean;
    readonly isRestricted: boolean;
    readonly isUnappliedSlashesInPreviousEra: boolean;
    readonly isEraNotPrunable: boolean;
    readonly isCancelledSlash: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashRecord' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'AlreadyClaimed' | 'InvalidPage' | 'IncorrectHistoryDepth' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet' | 'ControllerDeprecated' | 'CannotRestoreLedger' | 'RewardDestinationRestricted' | 'NotEnoughFunds' | 'VirtualStakerNotAllowed' | 'CannotReapStash' | 'AlreadyMigrated' | 'EraNotStarted' | 'Restricted' | 'UnappliedSlashesInPreviousEra' | 'EraNotPrunable' | 'CancelledSlash';
  }

  /** @name PezpalletAhOpsError (999) */
  interface PezpalletAhOpsError extends Enum {
    readonly isNoLeaseReserve: boolean;
    readonly isNoCrowdloanContribution: boolean;
    readonly isNoCrowdloanReserve: boolean;
    readonly isFailedToWithdrawCrowdloanContribution: boolean;
    readonly isNotYet: boolean;
    readonly isContributionsRemaining: boolean;
    readonly isWrongDerivedTranslation: boolean;
    readonly isNotSovereign: boolean;
    readonly isInternalError: boolean;
    readonly isMigrationNotCompleted: boolean;
    readonly isZeroBalance: boolean;
    readonly type: 'NoLeaseReserve' | 'NoCrowdloanContribution' | 'NoCrowdloanReserve' | 'FailedToWithdrawCrowdloanContribution' | 'NotYet' | 'ContributionsRemaining' | 'WrongDerivedTranslation' | 'NotSovereign' | 'InternalError' | 'MigrationNotCompleted' | 'ZeroBalance';
  }

  /** @name PezpalletAhMigratorBalancesBefore (1000) */
  interface PezpalletAhMigratorBalancesBefore extends Struct {
    readonly checkingAccount: u128;
    readonly totalIssuance: u128;
  }

  /** @name PezpalletAhMigratorError (1001) */
  interface PezpalletAhMigratorError extends Enum {
    readonly isFailedToUnreserveDeposit: boolean;
    readonly isFailedToProcessAccount: boolean;
    readonly isInsertConflict: boolean;
    readonly isFailedToConvertType: boolean;
    readonly isPreimageNotFound: boolean;
    readonly isFailedToConvertCall: boolean;
    readonly isFailedToBoundCall: boolean;
    readonly isXcmError: boolean;
    readonly isFailedToIntegrateVestingSchedule: boolean;
    readonly isFailedToCalculateCheckingAccount: boolean;
    readonly isFailedToBoundVector: boolean;
    readonly isDmpQueuePriorityAlreadySet: boolean;
    readonly isInvalidParameter: boolean;
    readonly isPreimageMissing: boolean;
    readonly isPreimageTooBig: boolean;
    readonly isPreimageChunkMissing: boolean;
    readonly isPreimageStatusInvalid: boolean;
    readonly isBadXcmVersion: boolean;
    readonly isInvalidOrigin: boolean;
    readonly type: 'FailedToUnreserveDeposit' | 'FailedToProcessAccount' | 'InsertConflict' | 'FailedToConvertType' | 'PreimageNotFound' | 'FailedToConvertCall' | 'FailedToBoundCall' | 'XcmError' | 'FailedToIntegrateVestingSchedule' | 'FailedToCalculateCheckingAccount' | 'FailedToBoundVector' | 'DmpQueuePriorityAlreadySet' | 'InvalidParameter' | 'PreimageMissing' | 'PreimageTooBig' | 'PreimageChunkMissing' | 'PreimageStatusInvalid' | 'BadXcmVersion' | 'InvalidOrigin';
  }

  /** @name AssetHubPezkuwiRuntimeRuntime (1014) */
  type AssetHubPezkuwiRuntimeRuntime = Null;

  /** @name XcmVersionedAsset (1062) */
  interface XcmVersionedAsset extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Asset;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5Asset;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name XcmRuntimeApisTrustedQueryError (1064) */
  interface XcmRuntimeApisTrustedQueryError extends Enum {
    readonly isVersionedAssetConversionFailed: boolean;
    readonly isVersionedLocationConversionFailed: boolean;
    readonly type: 'VersionedAssetConversionFailed' | 'VersionedLocationConversionFailed';
  }

  /** @name XcmRuntimeApisAuthorizedAliasesError (1066) */
  interface XcmRuntimeApisAuthorizedAliasesError extends Enum {
    readonly isLocationVersionConversionFailed: boolean;
    readonly type: 'LocationVersionConversionFailed';
  }

  /** @name AssetsCommonRuntimeApiFungiblesAccessError (1069) */
  interface AssetsCommonRuntimeApiFungiblesAccessError extends Enum {
    readonly isAssetIdConversionFailed: boolean;
    readonly isAmountToBalanceConversionFailed: boolean;
    readonly type: 'AssetIdConversionFailed' | 'AmountToBalanceConversionFailed';
  }

  /** @name PezcumulusPrimitivesCoreCollationInfo (1070) */
  interface PezcumulusPrimitivesCoreCollationInfo extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PezkuwiCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
    readonly headData: Bytes;
  }

  /** @name AssetHubPezkuwiRuntimeRuntimeError (1079) */
  interface AssetHubPezkuwiRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSystemError;
    readonly isParachainSystem: boolean;
    readonly asParachainSystem: PezcumulusPezpalletTeyrchainSystemError;
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageError;
    readonly isScheduler: boolean;
    readonly asScheduler: PezpalletSchedulerError;
    readonly isBalances: boolean;
    readonly asBalances: PezpalletBalancesError;
    readonly isVesting: boolean;
    readonly asVesting: PezpalletVestingError;
    readonly isClaims: boolean;
    readonly asClaims: PezkuwiRuntimeCommonClaimsPezpalletError;
    readonly isCollatorSelection: boolean;
    readonly asCollatorSelection: PezpalletCollatorSelectionError;
    readonly isSession: boolean;
    readonly asSession: PezpalletSessionError;
    readonly isXcmpQueue: boolean;
    readonly asXcmpQueue: PezcumulusPezpalletXcmpQueueError;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PezpalletXcmError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PezpalletMessageQueueError;
    readonly isSnowbridgeSystemFrontend: boolean;
    readonly asSnowbridgeSystemFrontend: SnowbridgePezpalletSystemFrontendError;
    readonly isUtility: boolean;
    readonly asUtility: PezpalletUtilityError;
    readonly isMultisig: boolean;
    readonly asMultisig: PezpalletMultisigError;
    readonly isProxy: boolean;
    readonly asProxy: PezpalletProxyError;
    readonly isIndices: boolean;
    readonly asIndices: PezpalletIndicesError;
    readonly isAssets: boolean;
    readonly asAssets: PezpalletAssetsError;
    readonly isUniques: boolean;
    readonly asUniques: PezpalletUniquesError;
    readonly isNfts: boolean;
    readonly asNfts: PezpalletNftsError;
    readonly isForeignAssets: boolean;
    readonly asForeignAssets: PezpalletAssetsError;
    readonly isPoolAssets: boolean;
    readonly asPoolAssets: PezpalletAssetsError;
    readonly isAssetConversion: boolean;
    readonly asAssetConversion: PezpalletAssetConversionError;
    readonly isTreasury: boolean;
    readonly asTreasury: PezpalletTreasuryError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PezpalletConvictionVotingError;
    readonly isReferenda: boolean;
    readonly asReferenda: PezpalletReferendaError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PezpalletWhitelistError;
    readonly isBounties: boolean;
    readonly asBounties: PezpalletBountiesError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PezpalletChildBountiesError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PezpalletAssetRateError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PezpalletStateTrieMigrationError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsError;
    readonly isVoterList: boolean;
    readonly asVoterList: PezpalletBagsListError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingError;
    readonly isMultiBlockElection: boolean;
    readonly asMultiBlockElection: PezpalletElectionProviderMultiBlockError;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PezpalletElectionProviderMultiBlockSignedPezpalletError;
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingAsyncPezpalletError;
    readonly isAhOps: boolean;
    readonly asAhOps: PezpalletAhOpsError;
    readonly isAhMigrator: boolean;
    readonly asAhMigrator: PezpalletAhMigratorError;
    readonly type: 'System' | 'ParachainSystem' | 'Preimage' | 'Scheduler' | 'Balances' | 'Vesting' | 'Claims' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'SnowbridgeSystemFrontend' | 'Utility' | 'Multisig' | 'Proxy' | 'Indices' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'PoolAssets' | 'AssetConversion' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Bounties' | 'ChildBounties' | 'AssetRate' | 'StateTrieMigration' | 'NominationPools' | 'VoterList' | 'DelegatedStaking' | 'MultiBlockElection' | 'MultiBlockElectionSigned' | 'Staking' | 'AhOps' | 'AhMigrator';
  }

} // declare module
