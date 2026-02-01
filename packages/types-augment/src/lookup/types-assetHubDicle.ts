// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@pezkuwi/types/lookup';

import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Struct, U256, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@pezkuwi/types-codec';
import type { ITuple } from '@pezkuwi/types-codec/types';
import type { AccountId32, H160, H256, MultiAddress, RuntimeCall } from '@pezkuwi/types/interfaces/runtime';

declare module '@pezkuwi/types/lookup' {
    /** @name PezspCoreCryptoAccountId32 (0) */
    interface PezspCoreCryptoAccountId32 extends AccountId32 {}

    /** @name PezspRuntimeMultiAddress (1) */
    interface PezspRuntimeMultiAddress extends MultiAddress {}

  /** @name AssetHubDicleRuntimeRuntimeTask (32) */
  type AssetHubDicleRuntimeRuntimeTask = Null;

  /** @name AssetHubDicleRuntimeRuntimeParametersKey (43) */
  interface AssetHubDicleRuntimeRuntimeParametersKey extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubDicleRuntimeDynamicParamsIssuanceParametersKey;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubDicleRuntimeDynamicParamsTreasuryParametersKey;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubDicleRuntimeDynamicParamsStakingElectionParametersKey;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubDicleRuntimeDynamicParamsSchedulerParametersKey;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubDicleRuntimeDynamicParamsMessageQueueParametersKey;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsIssuanceParametersKey (44) */
  interface AssetHubDicleRuntimeDynamicParamsIssuanceParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsIssuanceMinInflation (45) */
  type AssetHubDicleRuntimeDynamicParamsIssuanceMinInflation = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsIssuanceMaxInflation (46) */
  type AssetHubDicleRuntimeDynamicParamsIssuanceMaxInflation = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsIssuanceIdealStake (47) */
  type AssetHubDicleRuntimeDynamicParamsIssuanceIdealStake = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsIssuanceFalloff (48) */
  type AssetHubDicleRuntimeDynamicParamsIssuanceFalloff = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsTreasuryParametersKey (49) */
  interface AssetHubDicleRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsTreasuryBurnPortion (50) */
  type AssetHubDicleRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsTreasuryBurnDestination (51) */
  type AssetHubDicleRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionParametersKey (52) */
  interface AssetHubDicleRuntimeDynamicParamsStakingElectionParametersKey extends Enum {
    readonly isSignedPhase: boolean;
    readonly isMaxSignedSubmissions: boolean;
    readonly isUnsignedPhase: boolean;
    readonly isMinerPages: boolean;
    readonly isMaxElectingVoters: boolean;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly isMaxEraDuration: boolean;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionSignedPhase (53) */
  type AssetHubDicleRuntimeDynamicParamsStakingElectionSignedPhase = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionMaxSignedSubmissions (54) */
  type AssetHubDicleRuntimeDynamicParamsStakingElectionMaxSignedSubmissions = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionUnsignedPhase (55) */
  type AssetHubDicleRuntimeDynamicParamsStakingElectionUnsignedPhase = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionMinerPages (56) */
  type AssetHubDicleRuntimeDynamicParamsStakingElectionMinerPages = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionMaxElectingVoters (57) */
  type AssetHubDicleRuntimeDynamicParamsStakingElectionMaxElectingVoters = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock (58) */
  type AssetHubDicleRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionMaxEraDuration (59) */
  type AssetHubDicleRuntimeDynamicParamsStakingElectionMaxEraDuration = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsSchedulerParametersKey (60) */
  interface AssetHubDicleRuntimeDynamicParamsSchedulerParametersKey extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly isMaximumWeight: boolean;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsSchedulerMaxScheduledPerBlock (61) */
  type AssetHubDicleRuntimeDynamicParamsSchedulerMaxScheduledPerBlock = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsSchedulerMaximumWeight (62) */
  type AssetHubDicleRuntimeDynamicParamsSchedulerMaximumWeight = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsMessageQueueParametersKey (63) */
  interface AssetHubDicleRuntimeDynamicParamsMessageQueueParametersKey extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly isMaxOnIdleWeight: boolean;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnInitWeight (64) */
  type AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnInitWeight = Null;

  /** @name AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnIdleWeight (65) */
  type AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnIdleWeight = Null;

  /** @name AssetHubDicleRuntimeRuntimeParametersValue (67) */
  interface AssetHubDicleRuntimeRuntimeParametersValue extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubDicleRuntimeDynamicParamsIssuanceParametersValue;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubDicleRuntimeDynamicParamsTreasuryParametersValue;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubDicleRuntimeDynamicParamsStakingElectionParametersValue;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubDicleRuntimeDynamicParamsSchedulerParametersValue;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubDicleRuntimeDynamicParamsMessageQueueParametersValue;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsIssuanceParametersValue (68) */
  interface AssetHubDicleRuntimeDynamicParamsIssuanceParametersValue extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: u64;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: u64;
    readonly isIdealStake: boolean;
    readonly asIdealStake: u64;
    readonly isFalloff: boolean;
    readonly asFalloff: u64;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsTreasuryParametersValue (70) */
  interface AssetHubDicleRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: u32;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: AssetHubDicleRuntimeTreasuryBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubDicleRuntimeTreasuryBurnDestinationAccount (72) */
  interface AssetHubDicleRuntimeTreasuryBurnDestinationAccount extends Option<PezspCoreCryptoAccountId32> {}

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionParametersValue (74) */
  interface AssetHubDicleRuntimeDynamicParamsStakingElectionParametersValue extends Enum {
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

  /** @name AssetHubDicleRuntimeDynamicParamsSchedulerParametersValue (75) */
  interface AssetHubDicleRuntimeDynamicParamsSchedulerParametersValue extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: u32;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: PezspWeightsWeightV2Weight;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsMessageQueueParametersValue (76) */
  interface AssetHubDicleRuntimeDynamicParamsMessageQueueParametersValue extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: Option<PezspWeightsWeightV2Weight>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: Option<PezspWeightsWeightV2Weight>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubDicleRuntimeProxyType (193) */
  interface AssetHubDicleRuntimeProxyType extends Enum {
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
    readonly isSociety: boolean;
    readonly isSpokesperson: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson';
  }

  /** @name AssetHubDicleRuntimeRuntime (220) */
  type AssetHubDicleRuntimeRuntime = Null;

  /** @name AssetHubDicleRuntimeRuntimeParameters (308) */
  interface AssetHubDicleRuntimeRuntimeParameters extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubDicleRuntimeDynamicParamsIssuanceParameters;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubDicleRuntimeDynamicParamsTreasuryParameters;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubDicleRuntimeDynamicParamsStakingElectionParameters;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubDicleRuntimeDynamicParamsSchedulerParameters;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubDicleRuntimeDynamicParamsMessageQueueParameters;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsIssuanceParameters (309) */
  interface AssetHubDicleRuntimeDynamicParamsIssuanceParameters extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: ITuple<[AssetHubDicleRuntimeDynamicParamsIssuanceMinInflation, Option<u64>]>;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: ITuple<[AssetHubDicleRuntimeDynamicParamsIssuanceMaxInflation, Option<u64>]>;
    readonly isIdealStake: boolean;
    readonly asIdealStake: ITuple<[AssetHubDicleRuntimeDynamicParamsIssuanceIdealStake, Option<u64>]>;
    readonly isFalloff: boolean;
    readonly asFalloff: ITuple<[AssetHubDicleRuntimeDynamicParamsIssuanceFalloff, Option<u64>]>;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsTreasuryParameters (311) */
  interface AssetHubDicleRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[AssetHubDicleRuntimeDynamicParamsTreasuryBurnPortion, Option<u32>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[AssetHubDicleRuntimeDynamicParamsTreasuryBurnDestination, Option<AssetHubDicleRuntimeTreasuryBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsStakingElectionParameters (314) */
  interface AssetHubDicleRuntimeDynamicParamsStakingElectionParameters extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: ITuple<[AssetHubDicleRuntimeDynamicParamsStakingElectionSignedPhase, Option<u32>]>;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: ITuple<[AssetHubDicleRuntimeDynamicParamsStakingElectionMaxSignedSubmissions, Option<u32>]>;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: ITuple<[AssetHubDicleRuntimeDynamicParamsStakingElectionUnsignedPhase, Option<u32>]>;
    readonly isMinerPages: boolean;
    readonly asMinerPages: ITuple<[AssetHubDicleRuntimeDynamicParamsStakingElectionMinerPages, Option<u32>]>;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: ITuple<[AssetHubDicleRuntimeDynamicParamsStakingElectionMaxElectingVoters, Option<u32>]>;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: ITuple<[AssetHubDicleRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock, Option<u32>]>;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: ITuple<[AssetHubDicleRuntimeDynamicParamsStakingElectionMaxEraDuration, Option<u64>]>;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsSchedulerParameters (315) */
  interface AssetHubDicleRuntimeDynamicParamsSchedulerParameters extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: ITuple<[AssetHubDicleRuntimeDynamicParamsSchedulerMaxScheduledPerBlock, Option<u32>]>;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: ITuple<[AssetHubDicleRuntimeDynamicParamsSchedulerMaximumWeight, Option<PezspWeightsWeightV2Weight>]>;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubDicleRuntimeDynamicParamsMessageQueueParameters (316) */
  interface AssetHubDicleRuntimeDynamicParamsMessageQueueParameters extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: ITuple<[AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnInitWeight, Option<Option<PezspWeightsWeightV2Weight>>]>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: ITuple<[AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnIdleWeight, Option<Option<PezspWeightsWeightV2Weight>>]>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubDicleRuntimeSessionKeys (333) */
  interface AssetHubDicleRuntimeSessionKeys extends Struct {
    readonly aura: PezspConsensusAuraSr25519AppSr25519Public;
  }

  /** @name PezspConsensusAuraSr25519AppSr25519Public (334) */
  interface PezspConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name AssetHubDicleRuntimeOriginCaller (385) */
  interface AssetHubDicleRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PezpalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: PezcumulusPezpalletXcmOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm' | 'Origins';
  }

  /** @name AssetHubDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin (389) */
  interface AssetHubDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin extends Enum {
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
    readonly isFellowshipInitiates: boolean;
    readonly isFellows: boolean;
    readonly isFellowshipExperts: boolean;
    readonly isFellowshipMasters: boolean;
    readonly isFellowship1Dan: boolean;
    readonly isFellowship2Dan: boolean;
    readonly isFellowship3Dan: boolean;
    readonly isFellowship4Dan: boolean;
    readonly isFellowship5Dan: boolean;
    readonly isFellowship6Dan: boolean;
    readonly isFellowship7Dan: boolean;
    readonly isFellowship8Dan: boolean;
    readonly isFellowship9Dan: boolean;
    readonly isWishForChange: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller' | 'FellowshipInitiates' | 'Fellows' | 'FellowshipExperts' | 'FellowshipMasters' | 'Fellowship1Dan' | 'Fellowship2Dan' | 'Fellowship3Dan' | 'Fellowship4Dan' | 'Fellowship5Dan' | 'Fellowship6Dan' | 'Fellowship7Dan' | 'Fellowship8Dan' | 'Fellowship9Dan' | 'WishForChange';
  }

  /** @name PezpalletRemoteProxyCall (394) */
  interface PezpalletRemoteProxyCall extends Enum {
    readonly isRemoteProxy: boolean;
    readonly asRemoteProxy: {
      readonly real: PezspRuntimeMultiAddress;
      readonly forceProxyType: Option<AssetHubDicleRuntimeProxyType>;
      readonly call: RuntimeCall;
      readonly proof: PezpalletRemoteProxyRemoteProxyProof;
    } & Struct;
    readonly isRegisterRemoteProxyProof: boolean;
    readonly asRegisterRemoteProxyProof: {
      readonly proof: PezpalletRemoteProxyRemoteProxyProof;
    } & Struct;
    readonly isRemoteProxyWithRegisteredProof: boolean;
    readonly asRemoteProxyWithRegisteredProof: {
      readonly real: PezspRuntimeMultiAddress;
      readonly forceProxyType: Option<AssetHubDicleRuntimeProxyType>;
      readonly call: RuntimeCall;
    } & Struct;
    readonly type: 'RemoteProxy' | 'RegisterRemoteProxyProof' | 'RemoteProxyWithRegisteredProof';
  }

  /** @name PezpalletRemoteProxyRemoteProxyProof (395) */
  interface PezpalletRemoteProxyRemoteProxyProof extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: {
      readonly proof: Vec<Bytes>;
      readonly block: u32;
    } & Struct;
    readonly type: 'RelayChain';
  }

  /** @name AssetHubDicleRuntimeStakingNposCompactSolution24 (466) */
  interface AssetHubDicleRuntimeStakingNposCompactSolution24 extends Struct {
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
    readonly votes17: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes18: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes19: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes20: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes21: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes22: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes23: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
    readonly votes24: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<u16>]>>, Compact<u16>]>>;
  }

  /** @name PezpalletProxyProxyDefinitionDicleRuntimeConstantsProxyProxyType (598) */
  interface PezpalletProxyProxyDefinitionDicleRuntimeConstantsProxyProxyType extends Struct {
    readonly delegate: PezspCoreCryptoAccountId32;
    readonly proxyType: DicleRuntimeConstantsProxyProxyType;
    readonly delay: u32;
  }

  /** @name AssetHubDicleRuntimeAhMigrationRcPalletsOrigin (650) */
  interface AssetHubDicleRuntimeAhMigrationRcPalletsOrigin extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin;
    readonly type: 'System' | 'Origins';
  }

  /** @name PezpalletRcMigratorRecoveryPortableRecoveryMessage (746) */
  interface PezpalletRcMigratorRecoveryPortableRecoveryMessage extends Enum {
    readonly isRecoverable: boolean;
    readonly asRecoverable: ITuple<[PezspCoreCryptoAccountId32, PezpalletRcMigratorRecoveryPortableRecoveryConfig]>;
    readonly isActiveRecoveries: boolean;
    readonly asActiveRecoveries: ITuple<[PezspCoreCryptoAccountId32, PezspCoreCryptoAccountId32, PezpalletRcMigratorRecoveryPortableActiveRecovery]>;
    readonly isProxy: boolean;
    readonly asProxy: ITuple<[PezspCoreCryptoAccountId32, PezspCoreCryptoAccountId32]>;
    readonly type: 'Recoverable' | 'ActiveRecoveries' | 'Proxy';
  }

  /** @name PezpalletRcMigratorRecoveryPortableRecoveryConfig (748) */
  interface PezpalletRcMigratorRecoveryPortableRecoveryConfig extends Struct {
    readonly delayPeriod: u32;
    readonly deposit: u128;
    readonly friends: PezpalletRcMigratorRecoveryPortableRecoveryFriends;
    readonly threshold: u16;
  }

  /** @name PezpalletRcMigratorRecoveryPortableRecoveryFriends (749) */
  interface PezpalletRcMigratorRecoveryPortableRecoveryFriends extends Struct {
    readonly friends: Vec<PezspCoreCryptoAccountId32>;
  }

  /** @name PezpalletRcMigratorRecoveryPortableActiveRecovery (752) */
  interface PezpalletRcMigratorRecoveryPortableActiveRecovery extends Struct {
    readonly created: u32;
    readonly deposit: u128;
    readonly friends: PezpalletRcMigratorRecoveryPortableRecoveryFriends;
  }

  /** @name PezpalletRcMigratorSocietyPortableSocietyMessage (755) */
  interface PezpalletRcMigratorSocietyPortableSocietyMessage extends Enum {
    readonly isValues: boolean;
    readonly asValues: PezpalletRcMigratorSocietySocietyValues;
    readonly isMember: boolean;
    readonly asMember: ITuple<[PezspCoreCryptoAccountId32, PezpalletRcMigratorSocietyPortableMemberRecord]>;
    readonly isPayout: boolean;
    readonly asPayout: ITuple<[PezspCoreCryptoAccountId32, PezpalletRcMigratorSocietyPortablePayoutRecord]>;
    readonly isMemberByIndex: boolean;
    readonly asMemberByIndex: ITuple<[u32, PezspCoreCryptoAccountId32]>;
    readonly isSuspendedMembers: boolean;
    readonly asSuspendedMembers: ITuple<[PezspCoreCryptoAccountId32, PezpalletRcMigratorSocietyPortableMemberRecord]>;
    readonly isCandidates: boolean;
    readonly asCandidates: ITuple<[PezspCoreCryptoAccountId32, PezpalletRcMigratorSocietyPortableCandidacy]>;
    readonly isVotes: boolean;
    readonly asVotes: ITuple<[PezspCoreCryptoAccountId32, PezspCoreCryptoAccountId32, PezpalletRcMigratorSocietyPortableVote]>;
    readonly isVoteClearCursor: boolean;
    readonly asVoteClearCursor: ITuple<[PezspCoreCryptoAccountId32, Bytes]>;
    readonly isDefenderVotes: boolean;
    readonly asDefenderVotes: ITuple<[u32, PezspCoreCryptoAccountId32, PezpalletRcMigratorSocietyPortableVote]>;
    readonly type: 'Values' | 'Member' | 'Payout' | 'MemberByIndex' | 'SuspendedMembers' | 'Candidates' | 'Votes' | 'VoteClearCursor' | 'DefenderVotes';
  }

  /** @name PezpalletRcMigratorSocietySocietyValues (756) */
  interface PezpalletRcMigratorSocietySocietyValues extends Struct {
    readonly parameters: Option<PezpalletRcMigratorSocietyPortableGroupParams>;
    readonly pot: Option<u128>;
    readonly founder: Option<PezspCoreCryptoAccountId32>;
    readonly head: Option<PezspCoreCryptoAccountId32>;
    readonly rules: Option<H256>;
    readonly memberCount: Option<u32>;
    readonly roundCount: Option<u32>;
    readonly bids: Option<Vec<PezpalletRcMigratorSocietyPortableBid>>;
    readonly sceptic: Option<PezspCoreCryptoAccountId32>;
    readonly nextHead: Option<PezpalletRcMigratorSocietyPortableIntakeRecord>;
    readonly challengeRoundCount: Option<u32>;
    readonly defending: Option<ITuple<[PezspCoreCryptoAccountId32, PezspCoreCryptoAccountId32, PezpalletRcMigratorSocietyPortableTally]>>;
    readonly nextIntakeAt: Option<u32>;
    readonly nextChallengeAt: Option<u32>;
  }

  /** @name PezpalletRcMigratorSocietyPortableGroupParams (758) */
  interface PezpalletRcMigratorSocietyPortableGroupParams extends Struct {
    readonly maxMembers: u32;
    readonly maxIntake: u32;
    readonly maxStrikes: u32;
    readonly candidateDeposit: u128;
  }

  /** @name PezpalletRcMigratorSocietyPortableBid (761) */
  interface PezpalletRcMigratorSocietyPortableBid extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly kind: PezpalletRcMigratorSocietyPortableBidKind;
    readonly value: u128;
  }

  /** @name PezpalletRcMigratorSocietyPortableBidKind (762) */
  interface PezpalletRcMigratorSocietyPortableBidKind extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[PezspCoreCryptoAccountId32, u128]>;
    readonly type: 'Deposit' | 'Vouch';
  }

  /** @name PezpalletRcMigratorSocietyPortableIntakeRecord (764) */
  interface PezpalletRcMigratorSocietyPortableIntakeRecord extends Struct {
    readonly who: PezspCoreCryptoAccountId32;
    readonly bid: u128;
    readonly round: u32;
  }

  /** @name PezpalletRcMigratorSocietyPortableTally (767) */
  interface PezpalletRcMigratorSocietyPortableTally extends Struct {
    readonly approvals: u32;
    readonly rejections: u32;
  }

  /** @name PezpalletRcMigratorSocietyPortableMemberRecord (768) */
  interface PezpalletRcMigratorSocietyPortableMemberRecord extends Struct {
    readonly rank: u32;
    readonly strikes: u32;
    readonly vouching: Option<PezpalletRcMigratorSocietyPortableVouchingStatus>;
    readonly index: u32;
  }

  /** @name PezpalletRcMigratorSocietyPortableVouchingStatus (770) */
  interface PezpalletRcMigratorSocietyPortableVouchingStatus extends Enum {
    readonly isVouching: boolean;
    readonly isBanned: boolean;
    readonly type: 'Vouching' | 'Banned';
  }

  /** @name PezpalletRcMigratorSocietyPortablePayoutRecord (771) */
  interface PezpalletRcMigratorSocietyPortablePayoutRecord extends Struct {
    readonly paid: u128;
    readonly payouts: Vec<ITuple<[u32, u128]>>;
  }

  /** @name PezpalletRcMigratorSocietyPortableCandidacy (772) */
  interface PezpalletRcMigratorSocietyPortableCandidacy extends Struct {
    readonly round: u32;
    readonly kind: PezpalletRcMigratorSocietyPortableBidKind;
    readonly bid: u128;
    readonly tally: PezpalletRcMigratorSocietyPortableTally;
    readonly skepticStruck: bool;
  }

  /** @name PezpalletRcMigratorSocietyPortableVote (773) */
  interface PezpalletRcMigratorSocietyPortableVote extends Struct {
    readonly approve: bool;
    readonly weight: u32;
  }

  /** @name AssetHubDicleRuntimeRuntimeHoldReason (853) */
  interface AssetHubDicleRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageHoldReason;
    readonly isSession: boolean;
    readonly asSession: PezpalletSessionHoldReason;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PezpalletXcmHoldReason;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PezpalletNftFractionalizationHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PezpalletReviveHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PezpalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingHoldReason;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PezpalletElectionProviderMultiBlockSignedPezpalletHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingAsyncPezpalletHoldReason;
    readonly type: 'Preimage' | 'Session' | 'PolkadotXcm' | 'NftFractionalization' | 'Revive' | 'StateTrieMigration' | 'DelegatedStaking' | 'MultiBlockElectionSigned' | 'Staking';
  }

  /** @name AssetHubDicleRuntimeRuntimeFreezeReason (861) */
  interface AssetHubDicleRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PezpalletProxyProxyDefinitionAssetHubDicleRuntimeProxyType (939) */
  interface PezpalletProxyProxyDefinitionAssetHubDicleRuntimeProxyType extends Struct {
    readonly delegate: PezspCoreCryptoAccountId32;
    readonly proxyType: AssetHubDicleRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PezpalletRemoteProxyError (947) */
  interface PezpalletRemoteProxyError extends Enum {
    readonly isCouldNotConvertLocalToRemoteAccountId: boolean;
    readonly isUnknownProofAnchorBlock: boolean;
    readonly isInvalidProof: boolean;
    readonly isProxyDefinitionDecodingFailed: boolean;
    readonly isUnannounced: boolean;
    readonly isDidNotFindMatchingProxyDefinition: boolean;
    readonly isProxyProofNotRegistered: boolean;
    readonly type: 'CouldNotConvertLocalToRemoteAccountId' | 'UnknownProofAnchorBlock' | 'InvalidProof' | 'ProxyDefinitionDecodingFailed' | 'Unannounced' | 'DidNotFindMatchingProxyDefinition' | 'ProxyProofNotRegistered';
  }

  /** @name PezpalletReviveVmCodeInfo (1023) */
  interface PezpalletReviveVmCodeInfo extends Struct {
    readonly owner: PezspCoreCryptoAccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly codeLen: u32;
    readonly behaviourVersion: u32;
  }

  /** @name PezpalletReviveStorageAccountInfo (1024) */
  interface PezpalletReviveStorageAccountInfo extends Struct {
    readonly accountType: PezpalletReviveStorageAccountType;
    readonly dust: u32;
  }

  /** @name PezpalletReviveStorageAccountType (1025) */
  interface PezpalletReviveStorageAccountType extends Enum {
    readonly isContract: boolean;
    readonly asContract: PezpalletReviveStorageContractInfo;
    readonly isEoa: boolean;
    readonly type: 'Contract' | 'Eoa';
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesPrestateTracerConfig (1233) */
  interface PezpalletReviveEvmApiDebugRpcTypesPrestateTracerConfig extends Struct {
    readonly diffMode: bool;
    readonly disableStorage: bool;
    readonly disableCode: bool;
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesPrestateTrace (1242) */
  interface PezpalletReviveEvmApiDebugRpcTypesPrestateTrace extends Enum {
    readonly isPrestate: boolean;
    readonly asPrestate: BTreeMap<H160, PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
    readonly isDiffMode: boolean;
    readonly asDiffMode: {
      readonly pre: BTreeMap<H160, PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
      readonly post: BTreeMap<H160, PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
    } & Struct;
    readonly type: 'Prestate' | 'DiffMode';
  }

  /** @name PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo (1244) */
  interface PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo extends Struct {
    readonly balance: Option<U256>;
    readonly nonce: Option<u32>;
    readonly code: Option<Bytes>;
    readonly storage: BTreeMap<Bytes, Option<Bytes>>;
  }

  /** @name AssetHubDicleRuntimeRuntimeError (1252) */
  interface AssetHubDicleRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSystemError;
    readonly isParachainSystem: boolean;
    readonly asParachainSystem: PezcumulusPezpalletTeyrchainSystemError;
    readonly isMultiBlockMigrations: boolean;
    readonly asMultiBlockMigrations: PezpalletMigrationsError;
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
    readonly isUtility: boolean;
    readonly asUtility: PezpalletUtilityError;
    readonly isMultisig: boolean;
    readonly asMultisig: PezpalletMultisigError;
    readonly isProxy: boolean;
    readonly asProxy: PezpalletProxyError;
    readonly isRemoteProxyRelayChain: boolean;
    readonly asRemoteProxyRelayChain: PezpalletRemoteProxyError;
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
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PezpalletNftFractionalizationError;
    readonly isPoolAssets: boolean;
    readonly asPoolAssets: PezpalletAssetsError;
    readonly isAssetConversion: boolean;
    readonly asAssetConversion: PezpalletAssetConversionError;
    readonly isRecovery: boolean;
    readonly asRecovery: PezpalletRecoveryError;
    readonly isSociety: boolean;
    readonly asSociety: PezpalletSocietyError;
    readonly isRevive: boolean;
    readonly asRevive: PezpalletReviveError;
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
    readonly isAhOps: boolean;
    readonly asAhOps: PezpalletAhOpsError;
    readonly isAhMigrator: boolean;
    readonly asAhMigrator: PezpalletAhMigratorError;
    readonly type: 'System' | 'ParachainSystem' | 'MultiBlockMigrations' | 'Preimage' | 'Scheduler' | 'Balances' | 'Vesting' | 'Claims' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'Utility' | 'Multisig' | 'Proxy' | 'RemoteProxyRelayChain' | 'Indices' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'NftFractionalization' | 'PoolAssets' | 'AssetConversion' | 'Recovery' | 'Society' | 'Revive' | 'StateTrieMigration' | 'NominationPools' | 'VoterList' | 'DelegatedStaking' | 'MultiBlockElection' | 'MultiBlockElectionSigned' | 'Staking' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Bounties' | 'ChildBounties' | 'AssetRate' | 'AhOps' | 'AhMigrator';
  }

} // declare module
