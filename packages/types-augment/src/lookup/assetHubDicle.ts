// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup32: asset_hub_kusama_runtime::RuntimeTask
   **/
  AssetHubDicleRuntimeRuntimeTask: 'Null',
  /**
   * Lookup43: asset_hub_kusama_runtime::RuntimeParametersKey
   **/
  AssetHubDicleRuntimeRuntimeParametersKey: {
    _enum: {
      Issuance: 'AssetHubDicleRuntimeDynamicParamsIssuanceParametersKey',
      Treasury: 'AssetHubDicleRuntimeDynamicParamsTreasuryParametersKey',
      StakingElection: 'AssetHubDicleRuntimeDynamicParamsStakingElectionParametersKey',
      Scheduler: 'AssetHubDicleRuntimeDynamicParamsSchedulerParametersKey',
      MessageQueue: 'AssetHubDicleRuntimeDynamicParamsMessageQueueParametersKey'
    }
  },
  /**
   * Lookup44: asset_hub_kusama_runtime::dynamic_params::issuance::ParametersKey
   **/
  AssetHubDicleRuntimeDynamicParamsIssuanceParametersKey: {
    _enum: ['MinInflation', 'MaxInflation', 'IdealStake', 'Falloff']
  },
  /**
   * Lookup45: asset_hub_kusama_runtime::dynamic_params::issuance::MinInflation
   **/
  AssetHubDicleRuntimeDynamicParamsIssuanceMinInflation: 'Null',
  /**
   * Lookup46: asset_hub_kusama_runtime::dynamic_params::issuance::MaxInflation
   **/
  AssetHubDicleRuntimeDynamicParamsIssuanceMaxInflation: 'Null',
  /**
   * Lookup47: asset_hub_kusama_runtime::dynamic_params::issuance::IdealStake
   **/
  AssetHubDicleRuntimeDynamicParamsIssuanceIdealStake: 'Null',
  /**
   * Lookup48: asset_hub_kusama_runtime::dynamic_params::issuance::Falloff
   **/
  AssetHubDicleRuntimeDynamicParamsIssuanceFalloff: 'Null',
  /**
   * Lookup49: asset_hub_kusama_runtime::dynamic_params::treasury::ParametersKey
   **/
  AssetHubDicleRuntimeDynamicParamsTreasuryParametersKey: {
    _enum: ['BurnPortion', 'BurnDestination']
  },
  /**
   * Lookup50: asset_hub_kusama_runtime::dynamic_params::treasury::BurnPortion
   **/
  AssetHubDicleRuntimeDynamicParamsTreasuryBurnPortion: 'Null',
  /**
   * Lookup51: asset_hub_kusama_runtime::dynamic_params::treasury::BurnDestination
   **/
  AssetHubDicleRuntimeDynamicParamsTreasuryBurnDestination: 'Null',
  /**
   * Lookup52: asset_hub_kusama_runtime::dynamic_params::staking_election::ParametersKey
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionParametersKey: {
    _enum: ['SignedPhase', 'MaxSignedSubmissions', 'UnsignedPhase', 'MinerPages', 'MaxElectingVoters', 'TargetSnapshotPerBlock', 'MaxEraDuration']
  },
  /**
   * Lookup53: asset_hub_kusama_runtime::dynamic_params::staking_election::SignedPhase
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionSignedPhase: 'Null',
  /**
   * Lookup54: asset_hub_kusama_runtime::dynamic_params::staking_election::MaxSignedSubmissions
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionMaxSignedSubmissions: 'Null',
  /**
   * Lookup55: asset_hub_kusama_runtime::dynamic_params::staking_election::UnsignedPhase
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionUnsignedPhase: 'Null',
  /**
   * Lookup56: asset_hub_kusama_runtime::dynamic_params::staking_election::MinerPages
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionMinerPages: 'Null',
  /**
   * Lookup57: asset_hub_kusama_runtime::dynamic_params::staking_election::MaxElectingVoters
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionMaxElectingVoters: 'Null',
  /**
   * Lookup58: asset_hub_kusama_runtime::dynamic_params::staking_election::TargetSnapshotPerBlock
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock: 'Null',
  /**
   * Lookup59: asset_hub_kusama_runtime::dynamic_params::staking_election::MaxEraDuration
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionMaxEraDuration: 'Null',
  /**
   * Lookup60: asset_hub_kusama_runtime::dynamic_params::scheduler::ParametersKey
   **/
  AssetHubDicleRuntimeDynamicParamsSchedulerParametersKey: {
    _enum: ['MaxScheduledPerBlock', 'MaximumWeight']
  },
  /**
   * Lookup61: asset_hub_kusama_runtime::dynamic_params::scheduler::MaxScheduledPerBlock
   **/
  AssetHubDicleRuntimeDynamicParamsSchedulerMaxScheduledPerBlock: 'Null',
  /**
   * Lookup62: asset_hub_kusama_runtime::dynamic_params::scheduler::MaximumWeight
   **/
  AssetHubDicleRuntimeDynamicParamsSchedulerMaximumWeight: 'Null',
  /**
   * Lookup63: asset_hub_kusama_runtime::dynamic_params::message_queue::ParametersKey
   **/
  AssetHubDicleRuntimeDynamicParamsMessageQueueParametersKey: {
    _enum: ['MaxOnInitWeight', 'MaxOnIdleWeight']
  },
  /**
   * Lookup64: asset_hub_kusama_runtime::dynamic_params::message_queue::MaxOnInitWeight
   **/
  AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnInitWeight: 'Null',
  /**
   * Lookup65: asset_hub_kusama_runtime::dynamic_params::message_queue::MaxOnIdleWeight
   **/
  AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnIdleWeight: 'Null',
  /**
   * Lookup67: asset_hub_kusama_runtime::RuntimeParametersValue
   **/
  AssetHubDicleRuntimeRuntimeParametersValue: {
    _enum: {
      Issuance: 'AssetHubDicleRuntimeDynamicParamsIssuanceParametersValue',
      Treasury: 'AssetHubDicleRuntimeDynamicParamsTreasuryParametersValue',
      StakingElection: 'AssetHubDicleRuntimeDynamicParamsStakingElectionParametersValue',
      Scheduler: 'AssetHubDicleRuntimeDynamicParamsSchedulerParametersValue',
      MessageQueue: 'AssetHubDicleRuntimeDynamicParamsMessageQueueParametersValue'
    }
  },
  /**
   * Lookup68: asset_hub_kusama_runtime::dynamic_params::issuance::ParametersValue
   **/
  AssetHubDicleRuntimeDynamicParamsIssuanceParametersValue: {
    _enum: {
      MinInflation: 'u64',
      MaxInflation: 'u64',
      IdealStake: 'u64',
      Falloff: 'u64'
    }
  },
  /**
   * Lookup70: asset_hub_kusama_runtime::dynamic_params::treasury::ParametersValue
   **/
  AssetHubDicleRuntimeDynamicParamsTreasuryParametersValue: {
    _enum: {
      BurnPortion: 'u32',
      BurnDestination: 'AssetHubDicleRuntimeTreasuryBurnDestinationAccount'
    }
  },
  /**
   * Lookup72: asset_hub_kusama_runtime::treasury::BurnDestinationAccount
   **/
  AssetHubDicleRuntimeTreasuryBurnDestinationAccount: 'Option<PezspCoreCryptoAccountId32>',
  /**
   * Lookup74: asset_hub_kusama_runtime::dynamic_params::staking_election::ParametersValue
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionParametersValue: {
    _enum: {
      SignedPhase: 'u32',
      MaxSignedSubmissions: 'u32',
      UnsignedPhase: 'u32',
      MinerPages: 'u32',
      MaxElectingVoters: 'u32',
      TargetSnapshotPerBlock: 'u32',
      MaxEraDuration: 'u64'
    }
  },
  /**
   * Lookup75: asset_hub_kusama_runtime::dynamic_params::scheduler::ParametersValue
   **/
  AssetHubDicleRuntimeDynamicParamsSchedulerParametersValue: {
    _enum: {
      MaxScheduledPerBlock: 'u32',
      MaximumWeight: 'PezspWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup76: asset_hub_kusama_runtime::dynamic_params::message_queue::ParametersValue
   **/
  AssetHubDicleRuntimeDynamicParamsMessageQueueParametersValue: {
    _enum: {
      MaxOnInitWeight: 'Option<PezspWeightsWeightV2Weight>',
      MaxOnIdleWeight: 'Option<PezspWeightsWeightV2Weight>'
    }
  },
  /**
   * Lookup193: asset_hub_kusama_runtime::ProxyType
   **/
  AssetHubDicleRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'CancelProxy', 'Assets', 'AssetOwner', 'AssetManager', 'Collator', 'Governance', 'Staking', 'NominationPools', 'Auction', 'ParaRegistration', 'Society', 'Spokesperson']
  },
  /**
   * Lookup220: asset_hub_kusama_runtime::Runtime
   **/
  AssetHubDicleRuntimeRuntime: 'Null',
  /**
   * Lookup308: asset_hub_kusama_runtime::RuntimeParameters
   **/
  AssetHubDicleRuntimeRuntimeParameters: {
    _enum: {
      Issuance: 'AssetHubDicleRuntimeDynamicParamsIssuanceParameters',
      Treasury: 'AssetHubDicleRuntimeDynamicParamsTreasuryParameters',
      StakingElection: 'AssetHubDicleRuntimeDynamicParamsStakingElectionParameters',
      Scheduler: 'AssetHubDicleRuntimeDynamicParamsSchedulerParameters',
      MessageQueue: 'AssetHubDicleRuntimeDynamicParamsMessageQueueParameters'
    }
  },
  /**
   * Lookup309: asset_hub_kusama_runtime::dynamic_params::issuance::Parameters
   **/
  AssetHubDicleRuntimeDynamicParamsIssuanceParameters: {
    _enum: {
      MinInflation: '(AssetHubDicleRuntimeDynamicParamsIssuanceMinInflation,Option<u64>)',
      MaxInflation: '(AssetHubDicleRuntimeDynamicParamsIssuanceMaxInflation,Option<u64>)',
      IdealStake: '(AssetHubDicleRuntimeDynamicParamsIssuanceIdealStake,Option<u64>)',
      Falloff: '(AssetHubDicleRuntimeDynamicParamsIssuanceFalloff,Option<u64>)'
    }
  },
  /**
   * Lookup311: asset_hub_kusama_runtime::dynamic_params::treasury::Parameters
   **/
  AssetHubDicleRuntimeDynamicParamsTreasuryParameters: {
    _enum: {
      BurnPortion: '(AssetHubDicleRuntimeDynamicParamsTreasuryBurnPortion,Option<u32>)',
      BurnDestination: '(AssetHubDicleRuntimeDynamicParamsTreasuryBurnDestination,Option<AssetHubDicleRuntimeTreasuryBurnDestinationAccount>)'
    }
  },
  /**
   * Lookup314: asset_hub_kusama_runtime::dynamic_params::staking_election::Parameters
   **/
  AssetHubDicleRuntimeDynamicParamsStakingElectionParameters: {
    _enum: {
      SignedPhase: '(AssetHubDicleRuntimeDynamicParamsStakingElectionSignedPhase,Option<u32>)',
      MaxSignedSubmissions: '(AssetHubDicleRuntimeDynamicParamsStakingElectionMaxSignedSubmissions,Option<u32>)',
      UnsignedPhase: '(AssetHubDicleRuntimeDynamicParamsStakingElectionUnsignedPhase,Option<u32>)',
      MinerPages: '(AssetHubDicleRuntimeDynamicParamsStakingElectionMinerPages,Option<u32>)',
      MaxElectingVoters: '(AssetHubDicleRuntimeDynamicParamsStakingElectionMaxElectingVoters,Option<u32>)',
      TargetSnapshotPerBlock: '(AssetHubDicleRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock,Option<u32>)',
      MaxEraDuration: '(AssetHubDicleRuntimeDynamicParamsStakingElectionMaxEraDuration,Option<u64>)'
    }
  },
  /**
   * Lookup315: asset_hub_kusama_runtime::dynamic_params::scheduler::Parameters
   **/
  AssetHubDicleRuntimeDynamicParamsSchedulerParameters: {
    _enum: {
      MaxScheduledPerBlock: '(AssetHubDicleRuntimeDynamicParamsSchedulerMaxScheduledPerBlock,Option<u32>)',
      MaximumWeight: '(AssetHubDicleRuntimeDynamicParamsSchedulerMaximumWeight,Option<PezspWeightsWeightV2Weight>)'
    }
  },
  /**
   * Lookup316: asset_hub_kusama_runtime::dynamic_params::message_queue::Parameters
   **/
  AssetHubDicleRuntimeDynamicParamsMessageQueueParameters: {
    _enum: {
      MaxOnInitWeight: '(AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnInitWeight,Option<Option<PezspWeightsWeightV2Weight>>)',
      MaxOnIdleWeight: '(AssetHubDicleRuntimeDynamicParamsMessageQueueMaxOnIdleWeight,Option<Option<PezspWeightsWeightV2Weight>>)'
    }
  },
  /**
   * Lookup333: asset_hub_kusama_runtime::SessionKeys
   **/
  AssetHubDicleRuntimeSessionKeys: {
    aura: 'PezspConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup334: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  PezspConsensusAuraSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup385: asset_hub_kusama_runtime::OriginCaller
   **/
  AssetHubDicleRuntimeOriginCaller: {
    _enum: {
      system: 'PezframeSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      PolkadotXcm: 'PezpalletXcmOrigin',
      CumulusXcm: 'PezcumulusPezpalletXcmOrigin',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      Origins: 'AssetHubDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin'
    }
  },
  /**
   * Lookup389: asset_hub_kusama_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  AssetHubDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'FellowshipInitiates', 'Fellows', 'FellowshipExperts', 'FellowshipMasters', 'Fellowship1Dan', 'Fellowship2Dan', 'Fellowship3Dan', 'Fellowship4Dan', 'Fellowship5Dan', 'Fellowship6Dan', 'Fellowship7Dan', 'Fellowship8Dan', 'Fellowship9Dan', 'WishForChange']
  },
  /**
   * Lookup394: pallet_remote_proxy::pallet::Call<T, I>
   **/
  PezpalletRemoteProxyCall: {
    _enum: {
      remote_proxy: {
        real: 'PezspRuntimeMultiAddress',
        forceProxyType: 'Option<AssetHubDicleRuntimeProxyType>',
        call: 'RuntimeCall',
        proof: 'PezpalletRemoteProxyRemoteProxyProof',
      },
      register_remote_proxy_proof: {
        proof: 'PezpalletRemoteProxyRemoteProxyProof',
      },
      remote_proxy_with_registered_proof: {
        real: 'PezspRuntimeMultiAddress',
        forceProxyType: 'Option<AssetHubDicleRuntimeProxyType>',
        call: 'RuntimeCall'
      }
    }
  },
  /**
   * Lookup395: pallet_remote_proxy::pallet::RemoteProxyProof<RemoteBlockNumber>
   **/
  PezpalletRemoteProxyRemoteProxyProof: {
    _enum: {
      RelayChain: {
        proof: 'Vec<Bytes>',
        block: 'u32'
      }
    }
  },
  /**
   * Lookup466: asset_hub_kusama_runtime::staking::NposCompactSolution24
   **/
  AssetHubDicleRuntimeStakingNposCompactSolution24: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<u16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);15],Compact<u16>)>',
    votes17: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);16],Compact<u16>)>',
    votes18: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);17],Compact<u16>)>',
    votes19: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);18],Compact<u16>)>',
    votes20: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);19],Compact<u16>)>',
    votes21: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);20],Compact<u16>)>',
    votes22: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);21],Compact<u16>)>',
    votes23: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);22],Compact<u16>)>',
    votes24: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);23],Compact<u16>)>'
  },
  /**
   * Lookup598: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, kusama_runtime_constants::proxy::ProxyType, BlockNumber>
   **/
  PezpalletProxyProxyDefinitionDicleRuntimeConstantsProxyProxyType: {
    delegate: 'PezspCoreCryptoAccountId32',
    proxyType: 'DicleRuntimeConstantsProxyProxyType',
    delay: 'u32'
  },
  /**
   * Lookup650: asset_hub_kusama_runtime::ah_migration::RcPalletsOrigin
   **/
  AssetHubDicleRuntimeAhMigrationRcPalletsOrigin: {
    _enum: {
      system: 'PezframeSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      Origins: 'AssetHubDicleRuntimeGovernanceOriginsPezpalletCustomOriginsOrigin'
    }
  },
  /**
   * Lookup746: pallet_rc_migrator::recovery::PortableRecoveryMessage
   **/
  PezpalletRcMigratorRecoveryPortableRecoveryMessage: {
    _enum: {
      Recoverable: '(PezspCoreCryptoAccountId32,PezpalletRcMigratorRecoveryPortableRecoveryConfig)',
      ActiveRecoveries: '(PezspCoreCryptoAccountId32,PezspCoreCryptoAccountId32,PezpalletRcMigratorRecoveryPortableActiveRecovery)',
      Proxy: '(PezspCoreCryptoAccountId32,PezspCoreCryptoAccountId32)'
    }
  },
  /**
   * Lookup748: pallet_rc_migrator::recovery::PortableRecoveryConfig
   **/
  PezpalletRcMigratorRecoveryPortableRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'PezpalletRcMigratorRecoveryPortableRecoveryFriends',
    threshold: 'u16'
  },
  /**
   * Lookup749: pallet_rc_migrator::recovery::PortableRecoveryFriends
   **/
  PezpalletRcMigratorRecoveryPortableRecoveryFriends: {
    friends: 'Vec<PezspCoreCryptoAccountId32>'
  },
  /**
   * Lookup752: pallet_rc_migrator::recovery::PortableActiveRecovery
   **/
  PezpalletRcMigratorRecoveryPortableActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'PezpalletRcMigratorRecoveryPortableRecoveryFriends'
  },
  /**
   * Lookup755: pallet_rc_migrator::society::PortableSocietyMessage
   **/
  PezpalletRcMigratorSocietyPortableSocietyMessage: {
    _enum: {
      Values: 'PezpalletRcMigratorSocietySocietyValues',
      Member: '(PezspCoreCryptoAccountId32,PezpalletRcMigratorSocietyPortableMemberRecord)',
      Payout: '(PezspCoreCryptoAccountId32,PezpalletRcMigratorSocietyPortablePayoutRecord)',
      MemberByIndex: '(u32,PezspCoreCryptoAccountId32)',
      SuspendedMembers: '(PezspCoreCryptoAccountId32,PezpalletRcMigratorSocietyPortableMemberRecord)',
      Candidates: '(PezspCoreCryptoAccountId32,PezpalletRcMigratorSocietyPortableCandidacy)',
      Votes: '(PezspCoreCryptoAccountId32,PezspCoreCryptoAccountId32,PezpalletRcMigratorSocietyPortableVote)',
      VoteClearCursor: '(PezspCoreCryptoAccountId32,Bytes)',
      DefenderVotes: '(u32,PezspCoreCryptoAccountId32,PezpalletRcMigratorSocietyPortableVote)'
    }
  },
  /**
   * Lookup756: pallet_rc_migrator::society::SocietyValues
   **/
  PezpalletRcMigratorSocietySocietyValues: {
    parameters: 'Option<PezpalletRcMigratorSocietyPortableGroupParams>',
    pot: 'Option<u128>',
    founder: 'Option<PezspCoreCryptoAccountId32>',
    head: 'Option<PezspCoreCryptoAccountId32>',
    rules: 'Option<H256>',
    memberCount: 'Option<u32>',
    roundCount: 'Option<u32>',
    bids: 'Option<Vec<PezpalletRcMigratorSocietyPortableBid>>',
    sceptic: 'Option<PezspCoreCryptoAccountId32>',
    nextHead: 'Option<PezpalletRcMigratorSocietyPortableIntakeRecord>',
    challengeRoundCount: 'Option<u32>',
    defending: 'Option<(PezspCoreCryptoAccountId32,PezspCoreCryptoAccountId32,PezpalletRcMigratorSocietyPortableTally)>',
    nextIntakeAt: 'Option<u32>',
    nextChallengeAt: 'Option<u32>'
  },
  /**
   * Lookup758: pallet_rc_migrator::society::PortableGroupParams
   **/
  PezpalletRcMigratorSocietyPortableGroupParams: {
    maxMembers: 'u32',
    maxIntake: 'u32',
    maxStrikes: 'u32',
    candidateDeposit: 'u128'
  },
  /**
   * Lookup761: pallet_rc_migrator::society::PortableBid
   **/
  PezpalletRcMigratorSocietyPortableBid: {
    who: 'PezspCoreCryptoAccountId32',
    kind: 'PezpalletRcMigratorSocietyPortableBidKind',
    value: 'u128'
  },
  /**
   * Lookup762: pallet_rc_migrator::society::PortableBidKind
   **/
  PezpalletRcMigratorSocietyPortableBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(PezspCoreCryptoAccountId32,u128)'
    }
  },
  /**
   * Lookup764: pallet_rc_migrator::society::PortableIntakeRecord
   **/
  PezpalletRcMigratorSocietyPortableIntakeRecord: {
    who: 'PezspCoreCryptoAccountId32',
    bid: 'u128',
    round: 'u32'
  },
  /**
   * Lookup767: pallet_rc_migrator::society::PortableTally
   **/
  PezpalletRcMigratorSocietyPortableTally: {
    approvals: 'u32',
    rejections: 'u32'
  },
  /**
   * Lookup768: pallet_rc_migrator::society::PortableMemberRecord
   **/
  PezpalletRcMigratorSocietyPortableMemberRecord: {
    rank: 'u32',
    strikes: 'u32',
    vouching: 'Option<PezpalletRcMigratorSocietyPortableVouchingStatus>',
    index: 'u32'
  },
  /**
   * Lookup770: pallet_rc_migrator::society::PortableVouchingStatus
   **/
  PezpalletRcMigratorSocietyPortableVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup771: pallet_rc_migrator::society::PortablePayoutRecord
   **/
  PezpalletRcMigratorSocietyPortablePayoutRecord: {
    paid: 'u128',
    payouts: 'Vec<(u32,u128)>'
  },
  /**
   * Lookup772: pallet_rc_migrator::society::PortableCandidacy
   **/
  PezpalletRcMigratorSocietyPortableCandidacy: {
    round: 'u32',
    kind: 'PezpalletRcMigratorSocietyPortableBidKind',
    bid: 'u128',
    tally: 'PezpalletRcMigratorSocietyPortableTally',
    skepticStruck: 'bool'
  },
  /**
   * Lookup773: pallet_rc_migrator::society::PortableVote
   **/
  PezpalletRcMigratorSocietyPortableVote: {
    approve: 'bool',
    weight: 'u32'
  },
  /**
   * Lookup853: asset_hub_kusama_runtime::RuntimeHoldReason
   **/
  AssetHubDicleRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Preimage: 'PezpalletPreimageHoldReason',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      Session: 'PezpalletSessionHoldReason',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      PolkadotXcm: 'PezpalletXcmHoldReason',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      NftFractionalization: 'PezpalletNftFractionalizationHoldReason',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      Revive: 'PezpalletReviveHoldReason',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      StateTrieMigration: 'PezpalletStateTrieMigrationHoldReason',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      DelegatedStaking: 'PezpalletDelegatedStakingHoldReason',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      MultiBlockElectionSigned: 'PezpalletElectionProviderMultiBlockSignedPezpalletHoldReason',
      Staking: 'PezpalletStakingAsyncPezpalletHoldReason'
    }
  },
  /**
   * Lookup861: asset_hub_kusama_runtime::RuntimeFreezeReason
   **/
  AssetHubDicleRuntimeRuntimeFreezeReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      NominationPools: 'PezpalletNominationPoolsFreezeReason'
    }
  },
  /**
   * Lookup939: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, asset_hub_kusama_runtime::ProxyType, BlockNumber>
   **/
  PezpalletProxyProxyDefinitionAssetHubDicleRuntimeProxyType: {
    delegate: 'PezspCoreCryptoAccountId32',
    proxyType: 'AssetHubDicleRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup947: pallet_remote_proxy::pallet::Error<T, I>
   **/
  PezpalletRemoteProxyError: {
    _enum: ['CouldNotConvertLocalToRemoteAccountId', 'UnknownProofAnchorBlock', 'InvalidProof', 'ProxyDefinitionDecodingFailed', 'Unannounced', 'DidNotFindMatchingProxyDefinition', 'ProxyProofNotRegistered']
  },
  /**
   * Lookup1023: pallet_revive::vm::CodeInfo<T>
   **/
  PezpalletReviveVmCodeInfo: {
    owner: 'PezspCoreCryptoAccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    codeLen: 'u32',
    behaviourVersion: 'u32'
  },
  /**
   * Lookup1024: pallet_revive::storage::AccountInfo<T>
   **/
  PezpalletReviveStorageAccountInfo: {
    accountType: 'PezpalletReviveStorageAccountType',
    dust: 'u32'
  },
  /**
   * Lookup1025: pallet_revive::storage::AccountType<T>
   **/
  PezpalletReviveStorageAccountType: {
    _enum: {
      Contract: 'PezpalletReviveStorageContractInfo',
      EOA: 'Null'
    }
  },
  /**
   * Lookup1233: pallet_revive::evm::api::debug_rpc_types::PrestateTracerConfig
   **/
  PezpalletReviveEvmApiDebugRpcTypesPrestateTracerConfig: {
    diffMode: 'bool',
    disableStorage: 'bool',
    disableCode: 'bool'
  },
  /**
   * Lookup1242: pallet_revive::evm::api::debug_rpc_types::PrestateTrace
   **/
  PezpalletReviveEvmApiDebugRpcTypesPrestateTrace: {
    _enum: {
      Prestate: 'BTreeMap<H160, PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>',
      DiffMode: {
        pre: 'BTreeMap<H160, PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>',
        post: 'BTreeMap<H160, PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>'
      }
    }
  },
  /**
   * Lookup1244: pallet_revive::evm::api::debug_rpc_types::PrestateTraceInfo
   **/
  PezpalletReviveEvmApiDebugRpcTypesPrestateTraceInfo: {
    balance: 'Option<U256>',
    nonce: 'Option<u32>',
    code: 'Option<Bytes>',
    storage: 'BTreeMap<Bytes, Option<Bytes>>'
  },
  /**
   * Lookup1252: asset_hub_kusama_runtime::RuntimeError
   **/
  AssetHubDicleRuntimeRuntimeError: {
    _enum: {
      System: 'PezframeSystemError',
      ParachainSystem: 'PezcumulusPezpalletTeyrchainSystemError',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      MultiBlockMigrations: 'PezpalletMigrationsError',
      Preimage: 'PezpalletPreimageError',
      Scheduler: 'PezpalletSchedulerError',
      __Unused8: 'Null',
      __Unused9: 'Null',
      Balances: 'PezpalletBalancesError',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Vesting: 'PezpalletVestingError',
      Claims: 'PezkuwiRuntimeCommonClaimsPezpalletError',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      CollatorSelection: 'PezpalletCollatorSelectionError',
      Session: 'PezpalletSessionError',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      XcmpQueue: 'PezcumulusPezpalletXcmpQueueError',
      PolkadotXcm: 'PezpalletXcmError',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      MessageQueue: 'PezpalletMessageQueueError',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      Utility: 'PezpalletUtilityError',
      Multisig: 'PezpalletMultisigError',
      Proxy: 'PezpalletProxyError',
      RemoteProxyRelayChain: 'PezpalletRemoteProxyError',
      Indices: 'PezpalletIndicesError',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      Assets: 'PezpalletAssetsError',
      Uniques: 'PezpalletUniquesError',
      Nfts: 'PezpalletNftsError',
      ForeignAssets: 'PezpalletAssetsError',
      NftFractionalization: 'PezpalletNftFractionalizationError',
      PoolAssets: 'PezpalletAssetsError',
      AssetConversion: 'PezpalletAssetConversionError',
      Recovery: 'PezpalletRecoveryError',
      Society: 'PezpalletSocietyError',
      __Unused59: 'Null',
      Revive: 'PezpalletReviveError',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      StateTrieMigration: 'PezpalletStateTrieMigrationError',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      NominationPools: 'PezpalletNominationPoolsError',
      __Unused81: 'Null',
      VoterList: 'PezpalletBagsListError',
      DelegatedStaking: 'PezpalletDelegatedStakingError',
      __Unused84: 'Null',
      MultiBlockElection: 'PezpalletElectionProviderMultiBlockError',
      __Unused86: 'Null',
      __Unused87: 'Null',
      MultiBlockElectionSigned: 'PezpalletElectionProviderMultiBlockSignedPezpalletError',
      Staking: 'PezpalletStakingAsyncPezpalletError',
      Treasury: 'PezpalletTreasuryError',
      ConvictionVoting: 'PezpalletConvictionVotingError',
      Referenda: 'PezpalletReferendaError',
      __Unused93: 'Null',
      Whitelist: 'PezpalletWhitelistError',
      Bounties: 'PezpalletBountiesError',
      ChildBounties: 'PezpalletChildBountiesError',
      AssetRate: 'PezpalletAssetRateError',
      __Unused98: 'Null',
      __Unused99: 'Null',
      __Unused100: 'Null',
      __Unused101: 'Null',
      __Unused102: 'Null',
      __Unused103: 'Null',
      __Unused104: 'Null',
      __Unused105: 'Null',
      __Unused106: 'Null',
      __Unused107: 'Null',
      __Unused108: 'Null',
      __Unused109: 'Null',
      __Unused110: 'Null',
      __Unused111: 'Null',
      __Unused112: 'Null',
      __Unused113: 'Null',
      __Unused114: 'Null',
      __Unused115: 'Null',
      __Unused116: 'Null',
      __Unused117: 'Null',
      __Unused118: 'Null',
      __Unused119: 'Null',
      __Unused120: 'Null',
      __Unused121: 'Null',
      __Unused122: 'Null',
      __Unused123: 'Null',
      __Unused124: 'Null',
      __Unused125: 'Null',
      __Unused126: 'Null',
      __Unused127: 'Null',
      __Unused128: 'Null',
      __Unused129: 'Null',
      __Unused130: 'Null',
      __Unused131: 'Null',
      __Unused132: 'Null',
      __Unused133: 'Null',
      __Unused134: 'Null',
      __Unused135: 'Null',
      __Unused136: 'Null',
      __Unused137: 'Null',
      __Unused138: 'Null',
      __Unused139: 'Null',
      __Unused140: 'Null',
      __Unused141: 'Null',
      __Unused142: 'Null',
      __Unused143: 'Null',
      __Unused144: 'Null',
      __Unused145: 'Null',
      __Unused146: 'Null',
      __Unused147: 'Null',
      __Unused148: 'Null',
      __Unused149: 'Null',
      __Unused150: 'Null',
      __Unused151: 'Null',
      __Unused152: 'Null',
      __Unused153: 'Null',
      __Unused154: 'Null',
      __Unused155: 'Null',
      __Unused156: 'Null',
      __Unused157: 'Null',
      __Unused158: 'Null',
      __Unused159: 'Null',
      __Unused160: 'Null',
      __Unused161: 'Null',
      __Unused162: 'Null',
      __Unused163: 'Null',
      __Unused164: 'Null',
      __Unused165: 'Null',
      __Unused166: 'Null',
      __Unused167: 'Null',
      __Unused168: 'Null',
      __Unused169: 'Null',
      __Unused170: 'Null',
      __Unused171: 'Null',
      __Unused172: 'Null',
      __Unused173: 'Null',
      __Unused174: 'Null',
      __Unused175: 'Null',
      __Unused176: 'Null',
      __Unused177: 'Null',
      __Unused178: 'Null',
      __Unused179: 'Null',
      __Unused180: 'Null',
      __Unused181: 'Null',
      __Unused182: 'Null',
      __Unused183: 'Null',
      __Unused184: 'Null',
      __Unused185: 'Null',
      __Unused186: 'Null',
      __Unused187: 'Null',
      __Unused188: 'Null',
      __Unused189: 'Null',
      __Unused190: 'Null',
      __Unused191: 'Null',
      __Unused192: 'Null',
      __Unused193: 'Null',
      __Unused194: 'Null',
      __Unused195: 'Null',
      __Unused196: 'Null',
      __Unused197: 'Null',
      __Unused198: 'Null',
      __Unused199: 'Null',
      __Unused200: 'Null',
      __Unused201: 'Null',
      __Unused202: 'Null',
      __Unused203: 'Null',
      __Unused204: 'Null',
      __Unused205: 'Null',
      __Unused206: 'Null',
      __Unused207: 'Null',
      __Unused208: 'Null',
      __Unused209: 'Null',
      __Unused210: 'Null',
      __Unused211: 'Null',
      __Unused212: 'Null',
      __Unused213: 'Null',
      __Unused214: 'Null',
      __Unused215: 'Null',
      __Unused216: 'Null',
      __Unused217: 'Null',
      __Unused218: 'Null',
      __Unused219: 'Null',
      __Unused220: 'Null',
      __Unused221: 'Null',
      __Unused222: 'Null',
      __Unused223: 'Null',
      __Unused224: 'Null',
      __Unused225: 'Null',
      __Unused226: 'Null',
      __Unused227: 'Null',
      __Unused228: 'Null',
      __Unused229: 'Null',
      __Unused230: 'Null',
      __Unused231: 'Null',
      __Unused232: 'Null',
      __Unused233: 'Null',
      __Unused234: 'Null',
      __Unused235: 'Null',
      __Unused236: 'Null',
      __Unused237: 'Null',
      __Unused238: 'Null',
      __Unused239: 'Null',
      __Unused240: 'Null',
      __Unused241: 'Null',
      __Unused242: 'Null',
      __Unused243: 'Null',
      __Unused244: 'Null',
      __Unused245: 'Null',
      __Unused246: 'Null',
      __Unused247: 'Null',
      __Unused248: 'Null',
      __Unused249: 'Null',
      __Unused250: 'Null',
      __Unused251: 'Null',
      __Unused252: 'Null',
      __Unused253: 'Null',
      AhOps: 'PezpalletAhOpsError',
      AhMigrator: 'PezpalletAhMigratorError'
    }
  }
};
