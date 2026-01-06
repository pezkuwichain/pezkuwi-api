// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@pezkuwi/types/lookup';

import type { Compact, Enum, Null, Option, Struct, Vec, bool, u16, u32 } from '@pezkuwi/types-codec';
import type { ITuple } from '@pezkuwi/types-codec/types';
import type { AccountId32, PerU16, Permill, Perquintill } from '@pezkuwi/types/interfaces/runtime';

declare module '@pezkuwi/types/lookup' {
  /** @name StagingDicleRuntimeSessionKeys (138) */
  interface StagingDicleRuntimeSessionKeys extends Struct {
    readonly grandpa: PezspConsensusGrandpaAppPublic;
    readonly babe: PezspConsensusBabeAppPublic;
    readonly paraValidator: PezkuwiPrimitivesV8ValidatorAppPublic;
    readonly paraAssignment: PezkuwiPrimitivesV8AssignmentAppPublic;
    readonly authorityDiscovery: PezspAuthorityDiscoveryAppPublic;
    readonly beefy: PezspConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name StagingDicleRuntimeOriginCaller (160) */
  interface StagingDicleRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: StagingDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PezkuwiRuntimeTeyrchainsOriginPezpalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PezpalletXcmOrigin;
    readonly type: 'System' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name StagingDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin (162) */
  interface StagingDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin extends Enum {
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

  /** @name StagingDicleRuntimeRuntimeParameters (172) */
  interface StagingDicleRuntimeRuntimeParameters extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingDicleRuntimeDynamicParamsInflationParameters;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingDicleRuntimeDynamicParamsTreasuryParameters;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingDicleRuntimeDynamicParamsInflationParameters (173) */
  interface StagingDicleRuntimeDynamicParamsInflationParameters extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: ITuple<[StagingDicleRuntimeDynamicParamsInflationMinInflation, Option<Perquintill>]>;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: ITuple<[StagingDicleRuntimeDynamicParamsInflationMaxInflation, Option<Perquintill>]>;
    readonly isIdealStake: boolean;
    readonly asIdealStake: ITuple<[StagingDicleRuntimeDynamicParamsInflationIdealStake, Option<Perquintill>]>;
    readonly isFalloff: boolean;
    readonly asFalloff: ITuple<[StagingDicleRuntimeDynamicParamsInflationFalloff, Option<Perquintill>]>;
    readonly isUseAuctionSlots: boolean;
    readonly asUseAuctionSlots: ITuple<[StagingDicleRuntimeDynamicParamsInflationUseAuctionSlots, Option<bool>]>;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingDicleRuntimeDynamicParamsInflationMinInflation (174) */
  type StagingDicleRuntimeDynamicParamsInflationMinInflation = Null;

  /** @name StagingDicleRuntimeDynamicParamsInflationMaxInflation (177) */
  type StagingDicleRuntimeDynamicParamsInflationMaxInflation = Null;

  /** @name StagingDicleRuntimeDynamicParamsInflationIdealStake (178) */
  type StagingDicleRuntimeDynamicParamsInflationIdealStake = Null;

  /** @name StagingDicleRuntimeDynamicParamsInflationFalloff (179) */
  type StagingDicleRuntimeDynamicParamsInflationFalloff = Null;

  /** @name StagingDicleRuntimeDynamicParamsInflationUseAuctionSlots (180) */
  type StagingDicleRuntimeDynamicParamsInflationUseAuctionSlots = Null;

  /** @name StagingDicleRuntimeDynamicParamsTreasuryParameters (182) */
  interface StagingDicleRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[StagingDicleRuntimeDynamicParamsTreasuryBurnPortion, Option<Permill>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[StagingDicleRuntimeDynamicParamsTreasuryBurnDestination, Option<StagingDicleRuntimeBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingDicleRuntimeDynamicParamsTreasuryBurnPortion (183) */
  type StagingDicleRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name StagingDicleRuntimeDynamicParamsTreasuryBurnDestination (186) */
  type StagingDicleRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name StagingDicleRuntimeBurnDestinationAccount (188) */
  interface StagingDicleRuntimeBurnDestinationAccount extends Option<AccountId32> {}

  /** @name DicleRuntimeConstantsProxyProxyType (209) */
  interface DicleRuntimeConstantsProxyProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
    readonly isSociety: boolean;
    readonly isNominationPools: boolean;
    readonly isSpokesperson: boolean;
    readonly isParaRegistration: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | 'Spokesperson' | 'ParaRegistration';
  }

  /** @name StagingDicleRuntimeNposCompactSolution24 (219) */
  interface StagingDicleRuntimeNposCompactSolution24 extends Struct {
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
    readonly votes17: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes18: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes19: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes20: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes21: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes22: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes23: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes24: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PezpalletRcMigratorRecoveryRecoveryStage (539) */
  interface PezpalletRcMigratorRecoveryRecoveryStage extends Enum {
    readonly isRecoverable: boolean;
    readonly asRecoverable: Option<AccountId32>;
    readonly isActiveRecoveries: boolean;
    readonly asActiveRecoveries: Option<ITuple<[AccountId32, AccountId32]>>;
    readonly isProxy: boolean;
    readonly asProxy: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'Recoverable' | 'ActiveRecoveries' | 'Proxy' | 'Finished';
  }

  /** @name PezpalletRcMigratorSocietySocietyStage (543) */
  interface PezpalletRcMigratorSocietySocietyStage extends Enum {
    readonly isValues: boolean;
    readonly isMembers: boolean;
    readonly asMembers: Option<AccountId32>;
    readonly isPayouts: boolean;
    readonly asPayouts: Option<AccountId32>;
    readonly isMemberByIndex: boolean;
    readonly asMemberByIndex: Option<u32>;
    readonly isSuspendedMembers: boolean;
    readonly asSuspendedMembers: Option<AccountId32>;
    readonly isCandidates: boolean;
    readonly asCandidates: Option<AccountId32>;
    readonly isVotes: boolean;
    readonly asVotes: Option<ITuple<[AccountId32, AccountId32]>>;
    readonly isVoteClearCursor: boolean;
    readonly asVoteClearCursor: Option<AccountId32>;
    readonly isDefenderVotes: boolean;
    readonly asDefenderVotes: Option<ITuple<[u32, AccountId32]>>;
    readonly isFinished: boolean;
    readonly type: 'Values' | 'Members' | 'Payouts' | 'MemberByIndex' | 'SuspendedMembers' | 'Candidates' | 'Votes' | 'VoteClearCursor' | 'DefenderVotes' | 'Finished';
  }

  /** @name StagingDicleRuntimeRuntimeParametersKey (566) */
  interface StagingDicleRuntimeRuntimeParametersKey extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingDicleRuntimeDynamicParamsInflationParametersKey;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingDicleRuntimeDynamicParamsTreasuryParametersKey;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingDicleRuntimeDynamicParamsInflationParametersKey (567) */
  interface StagingDicleRuntimeDynamicParamsInflationParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly isUseAuctionSlots: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingDicleRuntimeDynamicParamsTreasuryParametersKey (568) */
  interface StagingDicleRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingDicleRuntimeRuntimeParametersValue (570) */
  interface StagingDicleRuntimeRuntimeParametersValue extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingDicleRuntimeDynamicParamsInflationParametersValue;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingDicleRuntimeDynamicParamsTreasuryParametersValue;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingDicleRuntimeDynamicParamsInflationParametersValue (571) */
  interface StagingDicleRuntimeDynamicParamsInflationParametersValue extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: Perquintill;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: Perquintill;
    readonly isIdealStake: boolean;
    readonly asIdealStake: Perquintill;
    readonly isFalloff: boolean;
    readonly asFalloff: Perquintill;
    readonly isUseAuctionSlots: boolean;
    readonly asUseAuctionSlots: bool;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingDicleRuntimeDynamicParamsTreasuryParametersValue (572) */
  interface StagingDicleRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: Permill;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: StagingDicleRuntimeBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name PezpalletRecoveryDepositKind (579) */
  interface PezpalletRecoveryDepositKind extends Enum {
    readonly isRecoveryConfig: boolean;
    readonly isActiveRecoveryFor: boolean;
    readonly asActiveRecoveryFor: AccountId32;
    readonly type: 'RecoveryConfig' | 'ActiveRecoveryFor';
  }

  /** @name StagingDicleRuntimeRuntime (580) */
  type StagingDicleRuntimeRuntime = Null;

  /** @name StagingDicleRuntimeRuntimeHoldReason (668) */
  interface StagingDicleRuntimeRuntimeHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingPezpalletHoldReason;
    readonly isSession: boolean;
    readonly asSession: PezpalletSessionHoldReason;
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingHoldReason;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PezpalletXcmHoldReason;
    readonly type: 'Staking' | 'Session' | 'Preimage' | 'DelegatedStaking' | 'XcmPallet';
  }

  /** @name StagingDicleRuntimeRuntimeFreezeReason (677) */
  interface StagingDicleRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name StagingDicleRuntimeRuntimeError (1159) */
  interface StagingDicleRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: PezframeSystemError;
    readonly isBabe: boolean;
    readonly asBabe: PezpalletBabeError;
    readonly isIndices: boolean;
    readonly asIndices: PezpalletIndicesError;
    readonly isBalances: boolean;
    readonly asBalances: PezpalletBalancesError;
    readonly isStaking: boolean;
    readonly asStaking: PezpalletStakingPezpalletError;
    readonly isSession: boolean;
    readonly asSession: PezpalletSessionError;
    readonly isGrandpa: boolean;
    readonly asGrandpa: PezpalletGrandpaError;
    readonly isTreasury: boolean;
    readonly asTreasury: PezpalletTreasuryError;
    readonly isClaims: boolean;
    readonly asClaims: PezkuwiRuntimeCommonClaimsPezpalletError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PezpalletConvictionVotingError;
    readonly isReferenda: boolean;
    readonly asReferenda: PezpalletReferendaError;
    readonly isFellowshipCollective: boolean;
    readonly asFellowshipCollective: PezpalletRankedCollectiveError;
    readonly isFellowshipReferenda: boolean;
    readonly asFellowshipReferenda: PezpalletReferendaError;
    readonly isUtility: boolean;
    readonly asUtility: PezpalletUtilityError;
    readonly isSociety: boolean;
    readonly asSociety: PezpalletSocietyError;
    readonly isRecovery: boolean;
    readonly asRecovery: PezpalletRecoveryError;
    readonly isVesting: boolean;
    readonly asVesting: PezpalletVestingError;
    readonly isScheduler: boolean;
    readonly asScheduler: PezpalletSchedulerError;
    readonly isProxy: boolean;
    readonly asProxy: PezpalletProxyError;
    readonly isMultisig: boolean;
    readonly asMultisig: PezpalletMultisigError;
    readonly isPreimage: boolean;
    readonly asPreimage: PezpalletPreimageError;
    readonly isBounties: boolean;
    readonly asBounties: PezpalletBountiesError;
    readonly isElectionProviderMultiPhase: boolean;
    readonly asElectionProviderMultiPhase: PezpalletElectionProviderMultiPhaseError;
    readonly isVoterList: boolean;
    readonly asVoterList: PezpalletBagsListError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PezpalletChildBountiesError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PezpalletNominationPoolsError;
    readonly isFastUnstake: boolean;
    readonly asFastUnstake: PezpalletFastUnstakeError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PezpalletWhitelistError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PezpalletDelegatedStakingError;
    readonly isStakingAhClient: boolean;
    readonly asStakingAhClient: PezpalletStakingAsyncAhClientError;
    readonly isConfiguration: boolean;
    readonly asConfiguration: PezkuwiRuntimeTeyrchainsConfigurationPezpalletError;
    readonly isParaInclusion: boolean;
    readonly asParaInclusion: PezkuwiRuntimeTeyrchainsInclusionPezpalletError;
    readonly isParaInherent: boolean;
    readonly asParaInherent: PezkuwiRuntimeTeyrchainsParasInherentPezpalletError;
    readonly isParas: boolean;
    readonly asParas: PezkuwiRuntimeTeyrchainsParasPezpalletError;
    readonly isHrmp: boolean;
    readonly asHrmp: PezkuwiRuntimeTeyrchainsHrmpPezpalletError;
    readonly isParasDisputes: boolean;
    readonly asParasDisputes: PezkuwiRuntimeTeyrchainsDisputesPezpalletError;
    readonly isParasSlashing: boolean;
    readonly asParasSlashing: PezkuwiRuntimeTeyrchainsDisputesSlashingPezpalletError;
    readonly isOnDemandAssignmentProvider: boolean;
    readonly asOnDemandAssignmentProvider: PezkuwiRuntimeTeyrchainsOnDemandPezpalletError;
    readonly isCoretimeAssignmentProvider: boolean;
    readonly asCoretimeAssignmentProvider: PezkuwiRuntimeTeyrchainsAssignerCoretimePezpalletError;
    readonly isRegistrar: boolean;
    readonly asRegistrar: PezkuwiRuntimeCommonParasRegistrarPezpalletError;
    readonly isSlots: boolean;
    readonly asSlots: PezkuwiRuntimeCommonSlotsPezpalletError;
    readonly isAuctions: boolean;
    readonly asAuctions: PezkuwiRuntimeCommonAuctionsPezpalletError;
    readonly isCrowdloan: boolean;
    readonly asCrowdloan: PezkuwiRuntimeCommonCrowdloanPezpalletError;
    readonly isCoretime: boolean;
    readonly asCoretime: PezkuwiRuntimeTeyrchainsCoretimePezpalletError;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PezpalletXcmError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PezpalletMessageQueueError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PezpalletAssetRateError;
    readonly isBeefy: boolean;
    readonly asBeefy: PezpalletBeefyError;
    readonly isRcMigrator: boolean;
    readonly asRcMigrator: PezpalletRcMigratorError;
    readonly type: 'System' | 'Babe' | 'Indices' | 'Balances' | 'Staking' | 'Session' | 'Grandpa' | 'Treasury' | 'Claims' | 'ConvictionVoting' | 'Referenda' | 'FellowshipCollective' | 'FellowshipReferenda' | 'Utility' | 'Society' | 'Recovery' | 'Vesting' | 'Scheduler' | 'Proxy' | 'Multisig' | 'Preimage' | 'Bounties' | 'ElectionProviderMultiPhase' | 'VoterList' | 'ChildBounties' | 'NominationPools' | 'FastUnstake' | 'Whitelist' | 'DelegatedStaking' | 'StakingAhClient' | 'Configuration' | 'ParaInclusion' | 'ParaInherent' | 'Paras' | 'Hrmp' | 'ParasDisputes' | 'ParasSlashing' | 'OnDemandAssignmentProvider' | 'CoretimeAssignmentProvider' | 'Registrar' | 'Slots' | 'Auctions' | 'Crowdloan' | 'Coretime' | 'XcmPallet' | 'MessageQueue' | 'AssetRate' | 'Beefy' | 'RcMigrator';
  }

} // declare module
