// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup0: sp_core::crypto::AccountId32
   **/
  PezspCoreCryptoAccountId32: '[u8;32]',
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  PezframeSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PezpalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PezpalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup9: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  PezframeSupportDispatchPerDispatchClassWeight: {
    normal: 'PezspWeightsWeightV2Weight',
    operational: 'PezspWeightsWeightV2Weight',
    mandatory: 'PezspWeightsWeightV2Weight'
  },
  /**
   * Lookup10: sp_weights::weight_v2::Weight
   **/
  PezspWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::Digest
   **/
  PezspRuntimeDigest: {
    logs: 'Vec<PezspRuntimeDigestDigestItem>'
  },
  /**
   * Lookup17: sp_runtime::generic::digest::DigestItem
   **/
  PezspRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup20: frame_system::EventRecord<kitchensink_runtime::RuntimeEvent, primitive_types::H256>
   **/
  PezframeSystemEventRecord: {
    phase: 'PezframeSystemPhase',
    event: 'RuntimeEvent',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup22: frame_system::pallet::Event<T>
   **/
  PezframeSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'PezframeSystemDispatchEventInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'PezspRuntimeDispatchError',
        dispatchInfo: 'PezframeSystemDispatchEventInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'PezspCoreCryptoAccountId32',
      },
      KilledAccount: {
        account: 'PezspCoreCryptoAccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'PezspCoreCryptoAccountId32',
        hash_: 'H256',
      },
      UpgradeAuthorized: {
        codeHash: 'H256',
        checkVersion: 'bool',
      },
      RejectedInvalidAuthorizedUpgrade: {
        codeHash: 'H256',
        error: 'PezspRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup23: frame_system::DispatchEventInfo
   **/
  PezframeSystemDispatchEventInfo: {
    weight: 'PezspWeightsWeightV2Weight',
    class: 'PezframeSupportDispatchDispatchClass',
    paysFee: 'PezframeSupportDispatchPays'
  },
  /**
   * Lookup24: frame_support::dispatch::DispatchClass
   **/
  PezframeSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup25: frame_support::dispatch::Pays
   **/
  PezframeSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup26: sp_runtime::DispatchError
   **/
  PezspRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'PezspRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'PezspRuntimeTokenError',
      Arithmetic: 'PezspArithmeticArithmeticError',
      Transactional: 'PezspRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null',
      Trie: 'PezspRuntimeProvingTrieTrieError'
    }
  },
  /**
   * Lookup27: sp_runtime::ModuleError
   **/
  PezspRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup28: sp_runtime::TokenError
   **/
  PezspRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup29: sp_arithmetic::ArithmeticError
   **/
  PezspArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup30: sp_runtime::TransactionalError
   **/
  PezspRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup31: sp_runtime::proving_trie::TrieError
   **/
  PezspRuntimeProvingTrieTrieError: {
    _enum: ['InvalidStateRoot', 'IncompleteDatabase', 'ValueAtIncompleteKey', 'DecoderError', 'InvalidHash', 'DuplicateKey', 'ExtraneousNode', 'ExtraneousValue', 'ExtraneousHashReference', 'InvalidChildReference', 'ValueMismatch', 'IncompleteProof', 'RootMismatch', 'DecodeError']
  },
  /**
   * Lookup32: pallet_utility::pallet::Event
   **/
  PezpalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'PezspRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'PezspRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, PezspRuntimeDispatchError>',
      },
      IfElseMainSuccess: 'Null',
      IfElseFallbackCalled: {
        mainError: 'PezspRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup35: pallet_indices::pallet::Event<T>
   **/
  PezpalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'PezspCoreCryptoAccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'PezspCoreCryptoAccountId32',
      },
      DepositPoked: {
        who: 'PezspCoreCryptoAccountId32',
        index: 'u32',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup36: pallet_balances::pallet::Event<T, I>
   **/
  PezpalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'PezspCoreCryptoAccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'PezspCoreCryptoAccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
        destinationStatus: 'PezframeSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'PezspCoreCryptoAccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      TotalIssuanceForced: {
        _alias: {
          new_: 'new',
        },
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup37: frame_support::traits::tokens::misc::BalanceStatus
   **/
  PezframeSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup38: pallet_transaction_payment::pallet::Event<T>
   **/
  PezpalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'PezspCoreCryptoAccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup39: pallet_asset_conversion_tx_payment::pallet::Event<T>
   **/
  PezpalletAssetConversionTxPaymentEvent: {
    _enum: {
      AssetTxFeePaid: {
        who: 'PezspCoreCryptoAccountId32',
        actualFee: 'u128',
        tip: 'u128',
        assetId: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
      },
      AssetRefundFailed: {
        nativeAmountKept: 'u128'
      }
    }
  },
  /**
   * Lookup40: frame_support::traits::tokens::fungible::union_of::NativeOrWithId<AssetId>
   **/
  PezframeSupportTokensFungibleUnionOfNativeOrWithId: {
    _enum: {
      Native: 'Null',
      WithId: 'u32'
    }
  },
  /**
   * Lookup41: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PezpalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        compute: 'PezpalletElectionProviderMultiPhaseElectionCompute',
        origin: 'Option<PezspCoreCryptoAccountId32>',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        compute: 'PezpalletElectionProviderMultiPhaseElectionCompute',
        score: 'PezspNposElectionsElectionScore',
      },
      ElectionFailed: 'Null',
      Rewarded: {
        account: 'PezspCoreCryptoAccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'PezspCoreCryptoAccountId32',
        value: 'u128',
      },
      PhaseTransitioned: {
        from: 'PezpalletElectionProviderMultiPhasePhase',
        to: 'PezpalletElectionProviderMultiPhasePhase',
        round: 'u32'
      }
    }
  },
  /**
   * Lookup42: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PezpalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup44: sp_npos_elections::ElectionScore
   **/
  PezspNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup45: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PezpalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup47: pallet_staking::pallet::pallet::Event<T>
   **/
  PezpalletStakingPezpalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'PezspCoreCryptoAccountId32',
        dest: 'PezpalletStakingRewardDestination',
        amount: 'u128',
      },
      Slashed: {
        staker: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      SlashReported: {
        validator: 'PezspCoreCryptoAccountId32',
        fraction: 'u32',
        slashEra: 'u32',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      StakersElected: 'Null',
      Bonded: {
        stash: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Unbonded: {
        stash: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Kicked: {
        nominator: 'PezspCoreCryptoAccountId32',
        stash: 'PezspCoreCryptoAccountId32',
      },
      StakingElectionFailed: 'Null',
      Chilled: {
        stash: 'PezspCoreCryptoAccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'PezspCoreCryptoAccountId32',
        page: 'u32',
        next: 'Option<u32>',
      },
      ValidatorPrefsSet: {
        stash: 'PezspCoreCryptoAccountId32',
        prefs: 'PezpalletStakingValidatorPrefs',
      },
      SnapshotVotersSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      SnapshotTargetsSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      ForceEra: {
        mode: 'PezpalletStakingForcing',
      },
      ControllerBatchDeprecated: {
        failures: 'u32',
      },
      CurrencyMigrated: {
        stash: 'PezspCoreCryptoAccountId32',
        forceWithdraw: 'u128'
      }
    }
  },
  /**
   * Lookup48: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PezpalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'PezspCoreCryptoAccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup51: pallet_staking::ValidatorPrefs
   **/
  PezpalletStakingValidatorPrefs: {
    commission: 'Compact<u32>',
    blocked: 'bool'
  },
  /**
   * Lookup53: pallet_staking::Forcing
   **/
  PezpalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup54: pallet_session::pallet::Event<T>
   **/
  PezpalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32',
      },
      ValidatorDisabled: {
        validator: 'PezspCoreCryptoAccountId32',
      },
      ValidatorReenabled: {
        validator: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup55: pallet_democracy::pallet::Event<T>
   **/
  PezpalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PezpalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'PezspCoreCryptoAccountId32',
        target: 'PezspCoreCryptoAccountId32',
      },
      Undelegated: {
        account: 'PezspCoreCryptoAccountId32',
      },
      Vetoed: {
        who: 'PezspCoreCryptoAccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'PezspCoreCryptoAccountId32',
        refIndex: 'u32',
        vote: 'PezpalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'PezspCoreCryptoAccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PezpalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PezpalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PezpalletDemocracyMetadataOwner',
        owner: 'PezpalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup56: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PezpalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup57: pallet_democracy::vote::AccountVote<Balance>
   **/
  PezpalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup59: pallet_democracy::types::MetadataOwner
   **/
  PezpalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup60: pallet_collective::pallet::Event<T, I>
   **/
  PezpalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'PezspCoreCryptoAccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'PezspCoreCryptoAccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, PezspRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, PezspRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32',
      },
      Killed: {
        proposalHash: 'H256',
      },
      ProposalCostBurned: {
        proposalHash: 'H256',
        who: 'PezspCoreCryptoAccountId32',
      },
      ProposalCostReleased: {
        proposalHash: 'H256',
        who: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup62: pallet_elections_phragmen::pallet::Event<T>
   **/
  PezpalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(PezspCoreCryptoAccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'PezspCoreCryptoAccountId32',
      },
      Renounced: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      CandidateSlashed: {
        candidate: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'PezspCoreCryptoAccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup65: pallet_membership::pallet::Event<T, I>
   **/
  PezpalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup66: pallet_grandpa::pallet::Event
   **/
  PezpalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(PezspConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup69: sp_consensus_grandpa::app::Public
   **/
  PezspConsensusGrandpaAppPublic: '[u8;32]',
  /**
   * Lookup70: pallet_treasury::pallet::Event<T, I>
   **/
  PezpalletTreasuryEvent: {
    _enum: {
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'PezspCoreCryptoAccountId32',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128',
      },
      AssetSpendApproved: {
        index: 'u32',
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        amount: 'u128',
        beneficiary: 'PezspCoreCryptoAccountId32',
        validFrom: 'u32',
        expireAt: 'u32',
      },
      AssetSpendVoided: {
        index: 'u32',
      },
      Paid: {
        index: 'u32',
        paymentId: 'Null',
      },
      PaymentFailed: {
        index: 'u32',
        paymentId: 'Null',
      },
      SpendProcessed: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup71: pallet_asset_rate::pallet::Event<T>
   **/
  PezpalletAssetRateEvent: {
    _enum: {
      AssetRateCreated: {
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        rate: 'u128',
      },
      AssetRateRemoved: {
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
      },
      AssetRateUpdated: {
        _alias: {
          new_: 'new',
        },
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup73: pallet_contracts::pallet::Event<T>
   **/
  PezpalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'PezspCoreCryptoAccountId32',
        contract: 'PezspCoreCryptoAccountId32',
      },
      Terminated: {
        contract: 'PezspCoreCryptoAccountId32',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
        depositHeld: 'u128',
        uploader: 'PezspCoreCryptoAccountId32',
      },
      ContractEmitted: {
        contract: 'PezspCoreCryptoAccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
        depositReleased: 'u128',
        remover: 'PezspCoreCryptoAccountId32',
      },
      ContractCodeUpdated: {
        contract: 'PezspCoreCryptoAccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'PezpalletContractsOrigin',
        contract: 'PezspCoreCryptoAccountId32',
      },
      DelegateCalled: {
        contract: 'PezspCoreCryptoAccountId32',
        codeHash: 'H256',
      },
      StorageDepositTransferredAndHeld: {
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      StorageDepositTransferredAndReleased: {
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup74: pallet_contracts::Origin<kitchensink_runtime::Runtime>
   **/
  PezpalletContractsOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'PezspCoreCryptoAccountId32'
    }
  },
  /**
   * Lookup75: kitchensink_runtime::Runtime
   **/
  KitchensinkRuntimeRuntime: 'Null',
  /**
   * Lookup76: pallet_sudo::pallet::Event<T>
   **/
  PezpalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, PezspRuntimeDispatchError>',
      },
      KeyChanged: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<PezspCoreCryptoAccountId32>',
        new_: 'PezspCoreCryptoAccountId32',
      },
      KeyRemoved: 'Null',
      SudoAsDone: {
        sudoResult: 'Result<Null, PezspRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup77: pallet_im_online::pallet::Event<T>
   **/
  PezpalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PezpalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(PezspCoreCryptoAccountId32,Null)>'
      }
    }
  },
  /**
   * Lookup78: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PezpalletImOnlineSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup81: pallet_offences::pallet::Event
   **/
  PezpalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup83: pallet_identity::pallet::Event<T>
   **/
  PezpalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'PezspCoreCryptoAccountId32',
      },
      IdentityCleared: {
        who: 'PezspCoreCryptoAccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'PezspCoreCryptoAccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'PezspCoreCryptoAccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'PezspCoreCryptoAccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'PezspCoreCryptoAccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'PezspCoreCryptoAccountId32',
        main: 'PezspCoreCryptoAccountId32',
        deposit: 'u128',
      },
      SubIdentitiesSet: {
        main: 'PezspCoreCryptoAccountId32',
        numberOfSubs: 'u32',
        newDeposit: 'u128',
      },
      SubIdentityRenamed: {
        sub: 'PezspCoreCryptoAccountId32',
        main: 'PezspCoreCryptoAccountId32',
      },
      SubIdentityRemoved: {
        sub: 'PezspCoreCryptoAccountId32',
        main: 'PezspCoreCryptoAccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'PezspCoreCryptoAccountId32',
        main: 'PezspCoreCryptoAccountId32',
        deposit: 'u128',
      },
      AuthorityAdded: {
        authority: 'PezspCoreCryptoAccountId32',
      },
      AuthorityRemoved: {
        authority: 'PezspCoreCryptoAccountId32',
      },
      UsernameSet: {
        who: 'PezspCoreCryptoAccountId32',
        username: 'Bytes',
      },
      UsernameQueued: {
        who: 'PezspCoreCryptoAccountId32',
        username: 'Bytes',
        expiration: 'u32',
      },
      PreapprovalExpired: {
        whose: 'PezspCoreCryptoAccountId32',
      },
      PrimaryUsernameSet: {
        who: 'PezspCoreCryptoAccountId32',
        username: 'Bytes',
      },
      DanglingUsernameRemoved: {
        who: 'PezspCoreCryptoAccountId32',
        username: 'Bytes',
      },
      UsernameUnbound: {
        username: 'Bytes',
      },
      UsernameRemoved: {
        username: 'Bytes',
      },
      UsernameKilled: {
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup85: pallet_society::pallet::Event<T, I>
   **/
  PezpalletSocietyEvent: {
    _enum: {
      Founded: {
        founder: 'PezspCoreCryptoAccountId32',
      },
      Bid: {
        candidateId: 'PezspCoreCryptoAccountId32',
        offer: 'u128',
      },
      Vouch: {
        candidateId: 'PezspCoreCryptoAccountId32',
        offer: 'u128',
        vouching: 'PezspCoreCryptoAccountId32',
      },
      AutoUnbid: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      Unbid: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      Unvouch: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      Inducted: {
        primary: 'PezspCoreCryptoAccountId32',
        candidates: 'Vec<PezspCoreCryptoAccountId32>',
      },
      SuspendedMemberJudgement: {
        who: 'PezspCoreCryptoAccountId32',
        judged: 'bool',
      },
      CandidateSuspended: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      MemberSuspended: {
        member: 'PezspCoreCryptoAccountId32',
      },
      Challenged: {
        member: 'PezspCoreCryptoAccountId32',
      },
      Vote: {
        candidate: 'PezspCoreCryptoAccountId32',
        voter: 'PezspCoreCryptoAccountId32',
        vote: 'bool',
      },
      DefenderVote: {
        voter: 'PezspCoreCryptoAccountId32',
        vote: 'bool',
      },
      NewParams: {
        params: 'PezpalletSocietyGroupParams',
      },
      Unfounded: {
        founder: 'PezspCoreCryptoAccountId32',
      },
      Deposit: {
        value: 'u128',
      },
      Elevated: {
        member: 'PezspCoreCryptoAccountId32',
        rank: 'u32'
      }
    }
  },
  /**
   * Lookup87: pallet_society::GroupParams<Balance>
   **/
  PezpalletSocietyGroupParams: {
    maxMembers: 'u32',
    maxIntake: 'u32',
    maxStrikes: 'u32',
    candidateDeposit: 'u128'
  },
  /**
   * Lookup88: pallet_recovery::pallet::Event<T>
   **/
  PezpalletRecoveryEvent: {
    _enum: {
      RecoveryCreated: {
        account: 'PezspCoreCryptoAccountId32',
      },
      RecoveryInitiated: {
        lostAccount: 'PezspCoreCryptoAccountId32',
        rescuerAccount: 'PezspCoreCryptoAccountId32',
      },
      RecoveryVouched: {
        lostAccount: 'PezspCoreCryptoAccountId32',
        rescuerAccount: 'PezspCoreCryptoAccountId32',
        sender: 'PezspCoreCryptoAccountId32',
      },
      RecoveryClosed: {
        lostAccount: 'PezspCoreCryptoAccountId32',
        rescuerAccount: 'PezspCoreCryptoAccountId32',
      },
      AccountRecovered: {
        lostAccount: 'PezspCoreCryptoAccountId32',
        rescuerAccount: 'PezspCoreCryptoAccountId32',
      },
      RecoveryRemoved: {
        lostAccount: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup89: pallet_vesting::pallet::Event<T>
   **/
  PezpalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'PezspCoreCryptoAccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup90: pallet_scheduler::pallet::Event<T>
   **/
  PezpalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, PezspRuntimeDispatchError>',
      },
      RetrySet: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        period: 'u32',
        retries: 'u8',
      },
      RetryCancelled: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      RetryFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      AgendaIncomplete: {
        when: 'u32'
      }
    }
  },
  /**
   * Lookup93: pallet_glutton::pallet::Event
   **/
  PezpalletGluttonEvent: {
    _enum: {
      PalletInitialized: {
        reinit: 'bool',
      },
      ComputationLimitSet: {
        compute: 'u64',
      },
      StorageLimitSet: {
        storage: 'u64',
      },
      BlockLengthLimitSet: {
        blockLength: 'u64'
      }
    }
  },
  /**
   * Lookup95: pallet_preimage::pallet::Event<T>
   **/
  PezpalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup96: pallet_proxy::pallet::Event<T>
   **/
  PezpalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, PezspRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'PezspCoreCryptoAccountId32',
        who: 'PezspCoreCryptoAccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'PezspCoreCryptoAccountId32',
        proxy: 'PezspCoreCryptoAccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'PezspCoreCryptoAccountId32',
        delegatee: 'PezspCoreCryptoAccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'PezspCoreCryptoAccountId32',
        delegatee: 'PezspCoreCryptoAccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      DepositPoked: {
        who: 'PezspCoreCryptoAccountId32',
        kind: 'PezpalletProxyDepositKind',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup97: kitchensink_runtime::ProxyType
   **/
  KitchensinkRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
  },
  /**
   * Lookup99: pallet_proxy::DepositKind
   **/
  PezpalletProxyDepositKind: {
    _enum: ['Proxies', 'Announcements']
  },
  /**
   * Lookup100: pallet_multisig::pallet::Event<T>
   **/
  PezpalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'PezspCoreCryptoAccountId32',
        multisig: 'PezspCoreCryptoAccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'PezspCoreCryptoAccountId32',
        timepoint: 'PezpalletMultisigTimepoint',
        multisig: 'PezspCoreCryptoAccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'PezspCoreCryptoAccountId32',
        timepoint: 'PezpalletMultisigTimepoint',
        multisig: 'PezspCoreCryptoAccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, PezspRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'PezspCoreCryptoAccountId32',
        timepoint: 'PezpalletMultisigTimepoint',
        multisig: 'PezspCoreCryptoAccountId32',
        callHash: '[u8;32]',
      },
      DepositPoked: {
        who: 'PezspCoreCryptoAccountId32',
        callHash: '[u8;32]',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup101: pallet_multisig::Timepoint<BlockNumber>
   **/
  PezpalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup102: pallet_bounties::pallet::Event<T, I>
   **/
  PezpalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32',
      },
      BountyApproved: {
        index: 'u32',
      },
      CuratorProposed: {
        bountyId: 'u32',
        curator: 'PezspCoreCryptoAccountId32',
      },
      CuratorUnassigned: {
        bountyId: 'u32',
      },
      CuratorAccepted: {
        bountyId: 'u32',
        curator: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup103: pallet_tips::pallet::Event<T, I>
   **/
  PezpalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: 'H256',
      },
      TipClosing: {
        tipHash: 'H256',
      },
      TipClosed: {
        tipHash: 'H256',
        who: 'PezspCoreCryptoAccountId32',
        payout: 'u128',
      },
      TipRetracted: {
        tipHash: 'H256',
      },
      TipSlashed: {
        tipHash: 'H256',
        finder: 'PezspCoreCryptoAccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup104: pallet_assets::pallet::Event<T, I>
   **/
  PezpalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'u32',
        creator: 'PezspCoreCryptoAccountId32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      Issued: {
        assetId: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Transferred: {
        assetId: 'u32',
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Burned: {
        assetId: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        balance: 'u128',
      },
      TeamChanged: {
        assetId: 'u32',
        issuer: 'PezspCoreCryptoAccountId32',
        admin: 'PezspCoreCryptoAccountId32',
        freezer: 'PezspCoreCryptoAccountId32',
      },
      OwnerChanged: {
        assetId: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      Frozen: {
        assetId: 'u32',
        who: 'PezspCoreCryptoAccountId32',
      },
      Thawed: {
        assetId: 'u32',
        who: 'PezspCoreCryptoAccountId32',
      },
      AssetFrozen: {
        assetId: 'u32',
      },
      AssetThawed: {
        assetId: 'u32',
      },
      AccountsDestroyed: {
        assetId: 'u32',
        accountsDestroyed: 'u32',
        accountsRemaining: 'u32',
      },
      ApprovalsDestroyed: {
        assetId: 'u32',
        approvalsDestroyed: 'u32',
        approvalsRemaining: 'u32',
      },
      DestructionStarted: {
        assetId: 'u32',
      },
      Destroyed: {
        assetId: 'u32',
      },
      ForceCreated: {
        assetId: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      MetadataSet: {
        assetId: 'u32',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        assetId: 'u32',
      },
      ApprovedTransfer: {
        assetId: 'u32',
        source: 'PezspCoreCryptoAccountId32',
        delegate: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      ApprovalCancelled: {
        assetId: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        delegate: 'PezspCoreCryptoAccountId32',
      },
      TransferredApproved: {
        assetId: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        delegate: 'PezspCoreCryptoAccountId32',
        destination: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      AssetStatusChanged: {
        assetId: 'u32',
      },
      AssetMinBalanceChanged: {
        assetId: 'u32',
        newMinBalance: 'u128',
      },
      Touched: {
        assetId: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        depositor: 'PezspCoreCryptoAccountId32',
      },
      Blocked: {
        assetId: 'u32',
        who: 'PezspCoreCryptoAccountId32',
      },
      Deposited: {
        assetId: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        assetId: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup106: pallet_lottery::pallet::Event<T>
   **/
  PezpalletLotteryEvent: {
    _enum: {
      LotteryStarted: 'Null',
      CallsUpdated: 'Null',
      Winner: {
        winner: 'PezspCoreCryptoAccountId32',
        lotteryBalance: 'u128',
      },
      TicketBought: {
        who: 'PezspCoreCryptoAccountId32',
        callIndex: '(u8,u8)'
      }
    }
  },
  /**
   * Lookup108: pallet_nis::pallet::Event<T>
   **/
  PezpalletNisEvent: {
    _enum: {
      BidPlaced: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidRetracted: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidDropped: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      Issued: {
        index: 'u32',
        expiry: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        proportion: 'u64',
        amount: 'u128',
      },
      Thawed: {
        index: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        proportion: 'u64',
        amount: 'u128',
        dropped: 'bool',
      },
      Funded: {
        deficit: 'u128',
      },
      Transferred: {
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup110: pallet_uniques::pallet::Event<T, I>
   **/
  PezpalletUniquesEvent: {
    _enum: {
      Created: {
        collection: 'u32',
        creator: 'PezspCoreCryptoAccountId32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      ForceCreated: {
        collection: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      Destroyed: {
        collection: 'u32',
      },
      Issued: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      Transferred: {
        collection: 'u32',
        item: 'u32',
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
      },
      Burned: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      Frozen: {
        collection: 'u32',
        item: 'u32',
      },
      Thawed: {
        collection: 'u32',
        item: 'u32',
      },
      CollectionFrozen: {
        collection: 'u32',
      },
      CollectionThawed: {
        collection: 'u32',
      },
      OwnerChanged: {
        collection: 'u32',
        newOwner: 'PezspCoreCryptoAccountId32',
      },
      TeamChanged: {
        collection: 'u32',
        issuer: 'PezspCoreCryptoAccountId32',
        admin: 'PezspCoreCryptoAccountId32',
        freezer: 'PezspCoreCryptoAccountId32',
      },
      ApprovedTransfer: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        delegate: 'PezspCoreCryptoAccountId32',
      },
      ApprovalCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        delegate: 'PezspCoreCryptoAccountId32',
      },
      ItemStatusChanged: {
        collection: 'u32',
      },
      CollectionMetadataSet: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      CollectionMetadataCleared: {
        collection: 'u32',
      },
      MetadataSet: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        collection: 'u32',
        item: 'u32',
      },
      Redeposited: {
        collection: 'u32',
        successfulItems: 'Vec<u32>',
      },
      AttributeSet: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      AttributeCleared: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      OwnershipAcceptanceChanged: {
        who: 'PezspCoreCryptoAccountId32',
        maybeCollection: 'Option<u32>',
      },
      CollectionMaxSupplySet: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      ItemPriceSet: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        whitelistedBuyer: 'Option<PezspCoreCryptoAccountId32>',
      },
      ItemPriceRemoved: {
        collection: 'u32',
        item: 'u32',
      },
      ItemBought: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        seller: 'PezspCoreCryptoAccountId32',
        buyer: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup114: pallet_nfts::pallet::Event<T, I>
   **/
  PezpalletNftsEvent: {
    _enum: {
      Created: {
        collection: 'u32',
        creator: 'PezspCoreCryptoAccountId32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      ForceCreated: {
        collection: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      Destroyed: {
        collection: 'u32',
      },
      Issued: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      Transferred: {
        collection: 'u32',
        item: 'u32',
        from: 'PezspCoreCryptoAccountId32',
        to: 'PezspCoreCryptoAccountId32',
      },
      Burned: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      ItemTransferLocked: {
        collection: 'u32',
        item: 'u32',
      },
      ItemTransferUnlocked: {
        collection: 'u32',
        item: 'u32',
      },
      ItemPropertiesLocked: {
        collection: 'u32',
        item: 'u32',
        lockMetadata: 'bool',
        lockAttributes: 'bool',
      },
      CollectionLocked: {
        collection: 'u32',
      },
      OwnerChanged: {
        collection: 'u32',
        newOwner: 'PezspCoreCryptoAccountId32',
      },
      TeamChanged: {
        collection: 'u32',
        issuer: 'Option<PezspCoreCryptoAccountId32>',
        admin: 'Option<PezspCoreCryptoAccountId32>',
        freezer: 'Option<PezspCoreCryptoAccountId32>',
      },
      TransferApproved: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        delegate: 'PezspCoreCryptoAccountId32',
        deadline: 'Option<u32>',
      },
      ApprovalCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
        delegate: 'PezspCoreCryptoAccountId32',
      },
      AllApprovalsCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspCoreCryptoAccountId32',
      },
      CollectionConfigChanged: {
        collection: 'u32',
      },
      CollectionMetadataSet: {
        collection: 'u32',
        data: 'Bytes',
      },
      CollectionMetadataCleared: {
        collection: 'u32',
      },
      ItemMetadataSet: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
      },
      ItemMetadataCleared: {
        collection: 'u32',
        item: 'u32',
      },
      Redeposited: {
        collection: 'u32',
        successfulItems: 'Vec<u32>',
      },
      AttributeSet: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
        namespace: 'PezpalletNftsAttributeNamespace',
      },
      AttributeCleared: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        namespace: 'PezpalletNftsAttributeNamespace',
      },
      ItemAttributesApprovalAdded: {
        collection: 'u32',
        item: 'u32',
        delegate: 'PezspCoreCryptoAccountId32',
      },
      ItemAttributesApprovalRemoved: {
        collection: 'u32',
        item: 'u32',
        delegate: 'PezspCoreCryptoAccountId32',
      },
      OwnershipAcceptanceChanged: {
        who: 'PezspCoreCryptoAccountId32',
        maybeCollection: 'Option<u32>',
      },
      CollectionMaxSupplySet: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      CollectionMintSettingsUpdated: {
        collection: 'u32',
      },
      NextCollectionIdIncremented: {
        nextId: 'Option<u32>',
      },
      ItemPriceSet: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        whitelistedBuyer: 'Option<PezspCoreCryptoAccountId32>',
      },
      ItemPriceRemoved: {
        collection: 'u32',
        item: 'u32',
      },
      ItemBought: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        seller: 'PezspCoreCryptoAccountId32',
        buyer: 'PezspCoreCryptoAccountId32',
      },
      TipSent: {
        collection: 'u32',
        item: 'u32',
        sender: 'PezspCoreCryptoAccountId32',
        receiver: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      SwapCreated: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        desiredItem: 'Option<u32>',
        price: 'Option<PezpalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      SwapCancelled: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        desiredItem: 'Option<u32>',
        price: 'Option<PezpalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      SwapClaimed: {
        sentCollection: 'u32',
        sentItem: 'u32',
        sentItemOwner: 'PezspCoreCryptoAccountId32',
        receivedCollection: 'u32',
        receivedItem: 'u32',
        receivedItemOwner: 'PezspCoreCryptoAccountId32',
        price: 'Option<PezpalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      PreSignedAttributesSet: {
        collection: 'u32',
        item: 'u32',
        namespace: 'PezpalletNftsAttributeNamespace',
      },
      PalletAttributeSet: {
        collection: 'u32',
        item: 'Option<u32>',
        attribute: 'PezpalletNftsPezpalletAttributes',
        value: 'Bytes'
      }
    }
  },
  /**
   * Lookup116: pallet_nfts::types::AttributeNamespace<sp_core::crypto::AccountId32>
   **/
  PezpalletNftsAttributeNamespace: {
    _enum: {
      Pallet: 'Null',
      CollectionOwner: 'Null',
      ItemOwner: 'Null',
      Account: 'PezspCoreCryptoAccountId32'
    }
  },
  /**
   * Lookup118: pallet_nfts::types::PriceWithDirection<Amount>
   **/
  PezpalletNftsPriceWithDirection: {
    amount: 'u128',
    direction: 'PezpalletNftsPriceDirection'
  },
  /**
   * Lookup119: pallet_nfts::types::PriceDirection
   **/
  PezpalletNftsPriceDirection: {
    _enum: ['Send', 'Receive']
  },
  /**
   * Lookup120: pallet_nfts::types::PalletAttributes<CollectionId>
   **/
  PezpalletNftsPezpalletAttributes: {
    _enum: {
      UsedToClaim: 'u32',
      TransferDisabled: 'Null'
    }
  },
  /**
   * Lookup121: pallet_nft_fractionalization::pallet::Event<T>
   **/
  PezpalletNftFractionalizationEvent: {
    _enum: {
      NftFractionalized: {
        nftCollection: 'u32',
        nft: 'u32',
        fractions: 'u128',
        asset: 'u32',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      NftUnified: {
        nftCollection: 'u32',
        nft: 'u32',
        asset: 'u32',
        beneficiary: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup122: pallet_salary::pallet::Event<T, I>
   **/
  PezpalletSalaryEvent: {
    _enum: {
      Inducted: {
        who: 'PezspCoreCryptoAccountId32',
      },
      Registered: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Paid: {
        who: 'PezspCoreCryptoAccountId32',
        beneficiary: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
        id: 'Null',
      },
      CycleStarted: {
        index: 'u32',
      },
      Swapped: {
        who: 'PezspCoreCryptoAccountId32',
        newWho: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup123: pallet_core_fellowship::pallet::Event<T, I>
   **/
  PezpalletCoreFellowshipEvent: {
    _enum: {
      ParamsChanged: {
        params: 'PezpalletCoreFellowshipParamsTypeU128',
      },
      ActiveChanged: {
        who: 'PezspCoreCryptoAccountId32',
        isActive: 'bool',
      },
      Inducted: {
        who: 'PezspCoreCryptoAccountId32',
      },
      Offboarded: {
        who: 'PezspCoreCryptoAccountId32',
      },
      Promoted: {
        who: 'PezspCoreCryptoAccountId32',
        toRank: 'u16',
      },
      Demoted: {
        who: 'PezspCoreCryptoAccountId32',
        toRank: 'u16',
      },
      Proven: {
        who: 'PezspCoreCryptoAccountId32',
        atRank: 'u16',
      },
      Requested: {
        who: 'PezspCoreCryptoAccountId32',
        wish: 'PezpalletCoreFellowshipWish',
      },
      EvidenceJudged: {
        who: 'PezspCoreCryptoAccountId32',
        wish: 'PezpalletCoreFellowshipWish',
        evidence: 'Bytes',
        oldRank: 'u16',
        newRank: 'Option<u16>',
      },
      Imported: {
        who: 'PezspCoreCryptoAccountId32',
        rank: 'u16',
      },
      Swapped: {
        who: 'PezspCoreCryptoAccountId32',
        newWho: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup124: pallet_core_fellowship::ParamsType<Balance, BlockNumber, Ranks>
   **/
  PezpalletCoreFellowshipParamsTypeU128: {
    activeSalary: 'Vec<u128>',
    passiveSalary: 'Vec<u128>',
    demotionPeriod: 'Vec<u32>',
    minPromotionPeriod: 'Vec<u32>',
    offboardTimeout: 'u32'
  },
  /**
   * Lookup128: pallet_core_fellowship::Wish
   **/
  PezpalletCoreFellowshipWish: {
    _enum: ['Retention', 'Promotion']
  },
  /**
   * Lookup131: pallet_transaction_storage::pallet::Event<T>
   **/
  PezpalletTransactionStorageEvent: {
    _enum: {
      Stored: {
        index: 'u32',
      },
      Renewed: {
        index: 'u32',
      },
      ProofChecked: 'Null'
    }
  },
  /**
   * Lookup132: pallet_bags_list::pallet::Event<T, I>
   **/
  PezpalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'PezspCoreCryptoAccountId32',
        from: 'u64',
        to: 'u64',
      },
      ScoreUpdated: {
        who: 'PezspCoreCryptoAccountId32',
        newScore: 'u64'
      }
    }
  },
  /**
   * Lookup133: pallet_state_trie_migration::pallet::Event<T>
   **/
  PezpalletStateTrieMigrationEvent: {
    _enum: {
      Migrated: {
        top: 'u32',
        child: 'u32',
        compute: 'PezpalletStateTrieMigrationMigrationCompute',
      },
      Slashed: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      AutoMigrationFinished: 'Null',
      Halted: {
        error: 'PezpalletStateTrieMigrationError'
      }
    }
  },
  /**
   * Lookup134: pallet_state_trie_migration::pallet::MigrationCompute
   **/
  PezpalletStateTrieMigrationMigrationCompute: {
    _enum: ['Signed', 'Auto']
  },
  /**
   * Lookup135: pallet_state_trie_migration::pallet::Error<T>
   **/
  PezpalletStateTrieMigrationError: {
    _enum: ['MaxSignedLimits', 'KeyTooLong', 'NotEnoughFunds', 'BadWitness', 'SignedMigrationNotAllowed', 'BadChildRoot']
  },
  /**
   * Lookup136: pallet_child_bounties::pallet::Event<T>
   **/
  PezpalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup137: pallet_referenda::pallet::Event<T, I>
   **/
  PezpalletReferendaEvent: {
    _enum: {
      Submitted: {
        index: 'u32',
        track: 'u16',
        proposal: 'PezframeSupportPreimagesBounded',
      },
      DecisionDepositPlaced: {
        index: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      DecisionDepositRefunded: {
        index: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      DecisionStarted: {
        index: 'u32',
        track: 'u16',
        proposal: 'PezframeSupportPreimagesBounded',
        tally: 'PezpalletConvictionVotingTally',
      },
      ConfirmStarted: {
        index: 'u32',
      },
      ConfirmAborted: {
        index: 'u32',
      },
      Confirmed: {
        index: 'u32',
        tally: 'PezpalletConvictionVotingTally',
      },
      Approved: {
        index: 'u32',
      },
      Rejected: {
        index: 'u32',
        tally: 'PezpalletConvictionVotingTally',
      },
      TimedOut: {
        index: 'u32',
        tally: 'PezpalletConvictionVotingTally',
      },
      Cancelled: {
        index: 'u32',
        tally: 'PezpalletConvictionVotingTally',
      },
      Killed: {
        index: 'u32',
        tally: 'PezpalletConvictionVotingTally',
      },
      SubmissionDepositRefunded: {
        index: 'u32',
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup138: frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
   **/
  PezframeSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup140: frame_system::pallet::Call<T>
   **/
  PezframeSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes',
      },
      __Unused8: 'Null',
      authorize_upgrade: {
        codeHash: 'H256',
      },
      authorize_upgrade_without_checks: {
        codeHash: 'H256',
      },
      apply_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup144: pallet_utility::pallet::Call<T>
   **/
  PezpalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<RuntimeCall>',
      },
      as_derivative: {
        index: 'u16',
        call: 'RuntimeCall',
      },
      batch_all: {
        calls: 'Vec<RuntimeCall>',
      },
      dispatch_as: {
        asOrigin: 'KitchensinkRuntimeOriginCaller',
        call: 'RuntimeCall',
      },
      force_batch: {
        calls: 'Vec<RuntimeCall>',
      },
      with_weight: {
        call: 'RuntimeCall',
        weight: 'PezspWeightsWeightV2Weight',
      },
      if_else: {
        main: 'RuntimeCall',
        fallback: 'RuntimeCall',
      },
      dispatch_as_fallible: {
        asOrigin: 'KitchensinkRuntimeOriginCaller',
        call: 'RuntimeCall'
      }
    }
  },
  /**
   * Lookup146: kitchensink_runtime::OriginCaller
   **/
  KitchensinkRuntimeOriginCaller: {
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
      Council: 'PezpalletCollectiveRawOrigin',
      TechnicalCommittee: 'PezpalletCollectiveRawOrigin',
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
      AllianceMotion: 'PezpalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup147: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  PezframeSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'PezspCoreCryptoAccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup148: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PezpalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'PezspCoreCryptoAccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup151: pallet_babe::pallet::Call<T>
   **/
  PezpalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'PezspConsensusSlotsEquivocationProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'PezspConsensusSlotsEquivocationProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      plan_config_change: {
        config: 'PezspConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup152: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_babe::app::Public>
   **/
  PezspConsensusSlotsEquivocationProof: {
    offender: 'PezspConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'PezspRuntimeHeader',
    secondHeader: 'PezspRuntimeHeader'
  },
  /**
   * Lookup153: sp_runtime::generic::header::Header<Number, Hash>
   **/
  PezspRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'PezspRuntimeDigest'
  },
  /**
   * Lookup155: sp_consensus_babe::app::Public
   **/
  PezspConsensusBabeAppPublic: '[u8;32]',
  /**
   * Lookup157: sp_session::MembershipProof
   **/
  PezspSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup158: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  PezspConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'PezspConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup160: sp_consensus_babe::AllowedSlots
   **/
  PezspConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup161: pallet_timestamp::pallet::Call<T>
   **/
  PezpalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup162: pallet_indices::pallet::Call<T>
   **/
  PezpalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'PezspRuntimeMultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'PezspRuntimeMultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32',
      },
      poke_deposit: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup163: sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>
   **/
  PezspRuntimeMultiAddress: {
    _enum: {
      Id: 'PezspCoreCryptoAccountId32',
      Index: 'Compact<u32>',
      Raw: 'Bytes',
      Address32: '[u8;32]',
      Address20: '[u8;20]'
    }
  },
  /**
   * Lookup165: pallet_balances::pallet::Call<T, I>
   **/
  PezpalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'PezspRuntimeMultiAddress',
        value: 'Compact<u128>',
      },
      __Unused1: 'Null',
      force_transfer: {
        source: 'PezspRuntimeMultiAddress',
        dest: 'PezspRuntimeMultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'PezspRuntimeMultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'PezspRuntimeMultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'PezspRuntimeMultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<PezspCoreCryptoAccountId32>',
      },
      __Unused7: 'Null',
      force_set_balance: {
        who: 'PezspRuntimeMultiAddress',
        newFree: 'Compact<u128>',
      },
      force_adjust_total_issuance: {
        direction: 'PezpalletBalancesAdjustmentDirection',
        delta: 'Compact<u128>',
      },
      burn: {
        value: 'Compact<u128>',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup167: pallet_balances::types::AdjustmentDirection
   **/
  PezpalletBalancesAdjustmentDirection: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup168: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PezpalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PezpalletElectionProviderMultiPhaseRawSolution',
        witness: 'PezpalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<PezspNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(PezspCoreCryptoAccountId32,PezspNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PezpalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup169: pallet_election_provider_multi_phase::RawSolution<kitchensink_runtime::NposSolution16>
   **/
  PezpalletElectionProviderMultiPhaseRawSolution: {
    solution: 'KitchensinkRuntimeNposSolution16',
    score: 'PezspNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup170: kitchensink_runtime::NposSolution16
   **/
  KitchensinkRuntimeNposSolution16: {
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
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<u16>);15],Compact<u16>)>'
  },
  /**
   * Lookup221: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PezpalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup225: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  PezspNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(PezspCoreCryptoAccountId32,u128)>'
  },
  /**
   * Lookup226: pallet_staking::pallet::pallet::Call<T>
   **/
  PezpalletStakingPezpalletCall: {
    _enum: {
      bond: {
        value: 'Compact<u128>',
        payee: 'PezpalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PezpalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<PezspRuntimeMultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PezpalletStakingRewardDestination',
      },
      set_controller: 'Null',
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'u8',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<PezspCoreCryptoAccountId32>',
      },
      force_unstake: {
        stash: 'PezspCoreCryptoAccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'PezspCoreCryptoAccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'PezspCoreCryptoAccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<PezspRuntimeMultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PezpalletStakingPezpalletConfigOpU128',
        minValidatorBond: 'PezpalletStakingPezpalletConfigOpU128',
        maxNominatorCount: 'PezpalletStakingPezpalletConfigOpU32',
        maxValidatorCount: 'PezpalletStakingPezpalletConfigOpU32',
        chillThreshold: 'PezpalletStakingPezpalletConfigOpPercent',
        minCommission: 'PezpalletStakingPezpalletConfigOpPerbill',
        maxStakedRewards: 'PezpalletStakingPezpalletConfigOpPercent',
      },
      chill_other: {
        stash: 'PezspCoreCryptoAccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'PezspCoreCryptoAccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      payout_stakers_by_page: {
        validatorStash: 'PezspCoreCryptoAccountId32',
        era: 'u32',
        page: 'u32',
      },
      update_payee: {
        controller: 'PezspCoreCryptoAccountId32',
      },
      deprecate_controller_batch: {
        controllers: 'Vec<PezspCoreCryptoAccountId32>',
      },
      restore_ledger: {
        stash: 'PezspCoreCryptoAccountId32',
        maybeController: 'Option<PezspCoreCryptoAccountId32>',
        maybeTotal: 'Option<u128>',
        maybeUnlocking: 'Option<Vec<PezpalletStakingUnlockChunk>>',
      },
      migrate_currency: {
        stash: 'PezspCoreCryptoAccountId32',
      },
      __Unused31: 'Null',
      __Unused32: 'Null',
      manual_slash: {
        validatorStash: 'PezspCoreCryptoAccountId32',
        era: 'u32',
        slashFraction: 'u32'
      }
    }
  },
  /**
   * Lookup229: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PezpalletStakingPezpalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup230: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PezpalletStakingPezpalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup231: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PezpalletStakingPezpalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'u8',
      Remove: 'Null'
    }
  },
  /**
   * Lookup232: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PezpalletStakingPezpalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup237: pallet_staking::UnlockChunk<Balance>
   **/
  PezpalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup239: pallet_session::pallet::Call<T>
   **/
  PezpalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'KitchensinkRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup240: kitchensink_runtime::SessionKeys
   **/
  KitchensinkRuntimeSessionKeys: {
    grandpa: 'PezspConsensusGrandpaAppPublic',
    babe: 'PezspConsensusBabeAppPublic',
    imOnline: 'PezpalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'PezspAuthorityDiscoveryAppPublic',
    mixnet: 'PezspMixnetAppPublic',
    beefy: 'PezspConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup241: sp_authority_discovery::app::Public
   **/
  PezspAuthorityDiscoveryAppPublic: '[u8;32]',
  /**
   * Lookup242: sp_mixnet::types::app::Public
   **/
  PezspMixnetAppPublic: '[u8;32]',
  /**
   * Lookup243: sp_consensus_beefy::ecdsa_crypto::Public
   **/
  PezspConsensusBeefyEcdsaCryptoPublic: '[u8;33]',
  /**
   * Lookup245: pallet_democracy::pallet::Call<T>
   **/
  PezpalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'PezframeSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PezpalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'PezframeSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'PezframeSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'PezframeSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'PezspRuntimeMultiAddress',
        conviction: 'PezpalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'PezspRuntimeMultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'PezspRuntimeMultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PezpalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup246: pallet_democracy::conviction::Conviction
   **/
  PezpalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup248: pallet_collective::pallet::Call<T, I>
   **/
  PezpalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<PezspCoreCryptoAccountId32>',
        prime: 'Option<PezspCoreCryptoAccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'RuntimeCall',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'RuntimeCall',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'PezspWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      kill: {
        proposalHash: 'H256',
      },
      release_proposal_cost: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup250: pallet_elections_phragmen::pallet::Call<T>
   **/
  PezpalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<PezspCoreCryptoAccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PezpalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'PezspRuntimeMultiAddress',
        slashBond: 'bool',
        rerunElection: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup251: pallet_elections_phragmen::Renouncing
   **/
  PezpalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup252: pallet_membership::pallet::Call<T, I>
   **/
  PezpalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'PezspRuntimeMultiAddress',
      },
      remove_member: {
        who: 'PezspRuntimeMultiAddress',
      },
      swap_member: {
        remove: 'PezspRuntimeMultiAddress',
        add: 'PezspRuntimeMultiAddress',
      },
      reset_members: {
        members: 'Vec<PezspCoreCryptoAccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'PezspRuntimeMultiAddress',
      },
      set_prime: {
        who: 'PezspRuntimeMultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup253: pallet_grandpa::pallet::Call<T>
   **/
  PezpalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'PezspConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'PezspConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup254: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  PezspConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'PezspConsensusGrandpaEquivocation'
  },
  /**
   * Lookup255: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  PezspConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup256: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'PezspConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,PezspConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,PezspConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup257: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup258: sp_consensus_grandpa::app::Signature
   **/
  PezspConsensusGrandpaAppSignature: '[u8;64]',
  /**
   * Lookup261: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'PezspConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,PezspConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,PezspConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup262: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup264: pallet_treasury::pallet::Call<T, I>
   **/
  PezpalletTreasuryCall: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      spend_local: {
        amount: 'Compact<u128>',
        beneficiary: 'PezspRuntimeMultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        amount: 'Compact<u128>',
        beneficiary: 'PezspRuntimeMultiAddress',
        validFrom: 'Option<u32>',
      },
      payout: {
        index: 'u32',
      },
      check_status: {
        index: 'u32',
      },
      void_spend: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup265: pallet_asset_rate::pallet::Call<T>
   **/
  PezpalletAssetRateCall: {
    _enum: {
      create: {
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        rate: 'u128',
      },
      update: {
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        rate: 'u128',
      },
      remove: {
        assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId'
      }
    }
  },
  /**
   * Lookup266: pallet_contracts::pallet::Call<T>
   **/
  PezpalletContractsCall: {
    _enum: {
      call_old_weight: {
        dest: 'PezspRuntimeMultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
        determinism: 'PezpalletContractsWasmDeterminism',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'PezspRuntimeMultiAddress',
        codeHash: 'H256',
      },
      call: {
        dest: 'PezspRuntimeMultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'PezspWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'PezspWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'PezspWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      migrate: {
        weightLimit: 'PezspWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup268: pallet_contracts::wasm::Determinism
   **/
  PezpalletContractsWasmDeterminism: {
    _enum: ['Enforced', 'Relaxed']
  },
  /**
   * Lookup269: pallet_sudo::pallet::Call<T>
   **/
  PezpalletSudoCall: {
    _enum: {
      sudo: {
        call: 'RuntimeCall',
      },
      sudo_unchecked_weight: {
        call: 'RuntimeCall',
        weight: 'PezspWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'PezspRuntimeMultiAddress',
      },
      sudo_as: {
        who: 'PezspRuntimeMultiAddress',
        call: 'RuntimeCall',
      },
      remove_key: 'Null'
    }
  },
  /**
   * Lookup270: pallet_im_online::pallet::Call<T>
   **/
  PezpalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PezpalletImOnlineHeartbeat',
        signature: 'PezpalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup271: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PezpalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup272: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PezpalletImOnlineSr25519AppSr25519Signature: '[u8;64]',
  /**
   * Lookup273: pallet_identity::pallet::Call<T>
   **/
  PezpalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'PezspRuntimeMultiAddress',
      },
      set_identity: {
        info: 'PezpalletIdentityLegacyIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(PezspCoreCryptoAccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'PezspRuntimeMultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'u64',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'PezspRuntimeMultiAddress',
        judgement: 'PezpalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'PezspRuntimeMultiAddress',
      },
      add_sub: {
        sub: 'PezspRuntimeMultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'PezspRuntimeMultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'PezspRuntimeMultiAddress',
      },
      quit_sub: 'Null',
      add_username_authority: {
        authority: 'PezspRuntimeMultiAddress',
        suffix: 'Bytes',
        allocation: 'u32',
      },
      remove_username_authority: {
        suffix: 'Bytes',
        authority: 'PezspRuntimeMultiAddress',
      },
      set_username_for: {
        who: 'PezspRuntimeMultiAddress',
        username: 'Bytes',
        signature: 'Option<PezspRuntimeMultiSignature>',
        useAllocation: 'bool',
      },
      accept_username: {
        username: 'Bytes',
      },
      remove_expired_approval: {
        username: 'Bytes',
      },
      set_primary_username: {
        username: 'Bytes',
      },
      unbind_username: {
        username: 'Bytes',
      },
      remove_username: {
        username: 'Bytes',
      },
      kill_username: {
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup274: pallet_identity::legacy::IdentityInfo<FieldLimit>
   **/
  PezpalletIdentityLegacyIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup311: pallet_identity::types::Judgement<Balance>
   **/
  PezpalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup313: sp_runtime::MultiSignature
   **/
  PezspRuntimeMultiSignature: {
    _enum: {
      Ed25519: '[u8;64]',
      Sr25519: '[u8;64]',
      Ecdsa: '[u8;65]'
    }
  },
  /**
   * Lookup315: pallet_society::pallet::Call<T, I>
   **/
  PezpalletSocietyCall: {
    _enum: {
      bid: {
        value: 'u128',
      },
      unbid: 'Null',
      vouch: {
        who: 'PezspRuntimeMultiAddress',
        value: 'u128',
        tip: 'u128',
      },
      unvouch: 'Null',
      vote: {
        candidate: 'PezspRuntimeMultiAddress',
        approve: 'bool',
      },
      defender_vote: {
        approve: 'bool',
      },
      payout: 'Null',
      waive_repay: {
        amount: 'u128',
      },
      found_society: {
        founder: 'PezspRuntimeMultiAddress',
        maxMembers: 'u32',
        maxIntake: 'u32',
        maxStrikes: 'u32',
        candidateDeposit: 'u128',
        rules: 'Bytes',
      },
      dissolve: 'Null',
      judge_suspended_member: {
        who: 'PezspRuntimeMultiAddress',
        forgive: 'bool',
      },
      set_parameters: {
        maxMembers: 'u32',
        maxIntake: 'u32',
        maxStrikes: 'u32',
        candidateDeposit: 'u128',
      },
      punish_skeptic: 'Null',
      claim_membership: 'Null',
      bestow_membership: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      kick_candidate: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      resign_candidacy: 'Null',
      drop_candidate: {
        candidate: 'PezspCoreCryptoAccountId32',
      },
      cleanup_candidacy: {
        candidate: 'PezspCoreCryptoAccountId32',
        max: 'u32',
      },
      cleanup_challenge: {
        challengeRound: 'u32',
        max: 'u32'
      }
    }
  },
  /**
   * Lookup316: pallet_recovery::pallet::Call<T>
   **/
  PezpalletRecoveryCall: {
    _enum: {
      as_recovered: {
        account: 'PezspRuntimeMultiAddress',
        call: 'RuntimeCall',
      },
      set_recovered: {
        lost: 'PezspRuntimeMultiAddress',
        rescuer: 'PezspRuntimeMultiAddress',
      },
      create_recovery: {
        friends: 'Vec<PezspCoreCryptoAccountId32>',
        threshold: 'u16',
        delayPeriod: 'u32',
      },
      initiate_recovery: {
        account: 'PezspRuntimeMultiAddress',
      },
      vouch_recovery: {
        lost: 'PezspRuntimeMultiAddress',
        rescuer: 'PezspRuntimeMultiAddress',
      },
      claim_recovery: {
        account: 'PezspRuntimeMultiAddress',
      },
      close_recovery: {
        rescuer: 'PezspRuntimeMultiAddress',
      },
      remove_recovery: 'Null',
      cancel_recovered: {
        account: 'PezspRuntimeMultiAddress'
      }
    }
  },
  /**
   * Lookup317: pallet_vesting::pallet::Call<T>
   **/
  PezpalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'PezspRuntimeMultiAddress',
      },
      vested_transfer: {
        target: 'PezspRuntimeMultiAddress',
        schedule: 'PezpalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'PezspRuntimeMultiAddress',
        target: 'PezspRuntimeMultiAddress',
        schedule: 'PezpalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32',
      },
      force_remove_vesting_schedule: {
        target: 'PezspRuntimeMultiAddress',
        scheduleIndex: 'u32'
      }
    }
  },
  /**
   * Lookup318: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PezpalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup319: pallet_scheduler::pallet::Call<T>
   **/
  PezpalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'RuntimeCall',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'RuntimeCall',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'RuntimeCall',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'RuntimeCall',
      },
      set_retry: {
        task: '(u32,u32)',
        retries: 'u8',
        period: 'u32',
      },
      set_retry_named: {
        id: '[u8;32]',
        retries: 'u8',
        period: 'u32',
      },
      cancel_retry: {
        task: '(u32,u32)',
      },
      cancel_retry_named: {
        id: '[u8;32]'
      }
    }
  },
  /**
   * Lookup321: pallet_glutton::pallet::Call<T>
   **/
  PezpalletGluttonCall: {
    _enum: {
      initialize_pallet: {
        newCount: 'u32',
        witnessCount: 'Option<u32>',
      },
      set_compute: {
        compute: 'u64',
      },
      set_storage: {
        storage: 'u64',
      },
      bloat: {
        garbage: 'Vec<[u8;1024]>',
      },
      set_block_length: {
        blockLength: 'u64'
      }
    }
  },
  /**
   * Lookup324: pallet_preimage::pallet::Call<T>
   **/
  PezpalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ensure_updated: {
        hashes: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup326: pallet_proxy::pallet::Call<T>
   **/
  PezpalletProxyCall: {
    _enum: {
      proxy: {
        real: 'PezspRuntimeMultiAddress',
        forceProxyType: 'Option<KitchensinkRuntimeProxyType>',
        call: 'RuntimeCall',
      },
      add_proxy: {
        delegate: 'PezspRuntimeMultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'PezspRuntimeMultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'PezspRuntimeMultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'PezspRuntimeMultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'PezspRuntimeMultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'PezspRuntimeMultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'PezspRuntimeMultiAddress',
        real: 'PezspRuntimeMultiAddress',
        forceProxyType: 'Option<KitchensinkRuntimeProxyType>',
        call: 'RuntimeCall',
      },
      poke_deposit: 'Null'
    }
  },
  /**
   * Lookup328: pallet_multisig::pallet::Call<T>
   **/
  PezpalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<PezspCoreCryptoAccountId32>',
        call: 'RuntimeCall',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<PezspCoreCryptoAccountId32>',
        maybeTimepoint: 'Option<PezpalletMultisigTimepoint>',
        call: 'RuntimeCall',
        maxWeight: 'PezspWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<PezspCoreCryptoAccountId32>',
        maybeTimepoint: 'Option<PezpalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'PezspWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<PezspCoreCryptoAccountId32>',
        timepoint: 'PezpalletMultisigTimepoint',
        callHash: '[u8;32]',
      },
      poke_deposit: {
        threshold: 'u16',
        otherSignatories: 'Vec<PezspCoreCryptoAccountId32>',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup330: pallet_bounties::pallet::Call<T, I>
   **/
  PezpalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'PezspRuntimeMultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'PezspRuntimeMultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes',
      },
      approve_bounty_with_curator: {
        bountyId: 'Compact<u32>',
        curator: 'PezspRuntimeMultiAddress',
        fee: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup331: pallet_tips::pallet::Call<T, I>
   **/
  PezpalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'PezspRuntimeMultiAddress',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'PezspRuntimeMultiAddress',
        tipValue: 'Compact<u128>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        tipValue: 'Compact<u128>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup332: pallet_assets::pallet::Call<T, I>
   **/
  PezpalletAssetsCall: {
    _enum: {
      create: {
        id: 'Compact<u32>',
        admin: 'PezspRuntimeMultiAddress',
        minBalance: 'u128',
      },
      force_create: {
        id: 'Compact<u32>',
        owner: 'PezspRuntimeMultiAddress',
        isSufficient: 'bool',
        minBalance: 'Compact<u128>',
      },
      start_destroy: {
        id: 'Compact<u32>',
      },
      destroy_accounts: {
        id: 'Compact<u32>',
      },
      destroy_approvals: {
        id: 'Compact<u32>',
      },
      finish_destroy: {
        id: 'Compact<u32>',
      },
      mint: {
        id: 'Compact<u32>',
        beneficiary: 'PezspRuntimeMultiAddress',
        amount: 'Compact<u128>',
      },
      burn: {
        id: 'Compact<u32>',
        who: 'PezspRuntimeMultiAddress',
        amount: 'Compact<u128>',
      },
      transfer: {
        id: 'Compact<u32>',
        target: 'PezspRuntimeMultiAddress',
        amount: 'Compact<u128>',
      },
      transfer_keep_alive: {
        id: 'Compact<u32>',
        target: 'PezspRuntimeMultiAddress',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        id: 'Compact<u32>',
        source: 'PezspRuntimeMultiAddress',
        dest: 'PezspRuntimeMultiAddress',
        amount: 'Compact<u128>',
      },
      freeze: {
        id: 'Compact<u32>',
        who: 'PezspRuntimeMultiAddress',
      },
      thaw: {
        id: 'Compact<u32>',
        who: 'PezspRuntimeMultiAddress',
      },
      freeze_asset: {
        id: 'Compact<u32>',
      },
      thaw_asset: {
        id: 'Compact<u32>',
      },
      transfer_ownership: {
        id: 'Compact<u32>',
        owner: 'PezspRuntimeMultiAddress',
      },
      set_team: {
        id: 'Compact<u32>',
        issuer: 'PezspRuntimeMultiAddress',
        admin: 'PezspRuntimeMultiAddress',
        freezer: 'PezspRuntimeMultiAddress',
      },
      set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      clear_metadata: {
        id: 'Compact<u32>',
      },
      force_set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      force_clear_metadata: {
        id: 'Compact<u32>',
      },
      force_asset_status: {
        id: 'Compact<u32>',
        owner: 'PezspRuntimeMultiAddress',
        issuer: 'PezspRuntimeMultiAddress',
        admin: 'PezspRuntimeMultiAddress',
        freezer: 'PezspRuntimeMultiAddress',
        minBalance: 'Compact<u128>',
        isSufficient: 'bool',
        isFrozen: 'bool',
      },
      approve_transfer: {
        id: 'Compact<u32>',
        delegate: 'PezspRuntimeMultiAddress',
        amount: 'Compact<u128>',
      },
      cancel_approval: {
        id: 'Compact<u32>',
        delegate: 'PezspRuntimeMultiAddress',
      },
      force_cancel_approval: {
        id: 'Compact<u32>',
        owner: 'PezspRuntimeMultiAddress',
        delegate: 'PezspRuntimeMultiAddress',
      },
      transfer_approved: {
        id: 'Compact<u32>',
        owner: 'PezspRuntimeMultiAddress',
        destination: 'PezspRuntimeMultiAddress',
        amount: 'Compact<u128>',
      },
      touch: {
        id: 'Compact<u32>',
      },
      refund: {
        id: 'Compact<u32>',
        allowBurn: 'bool',
      },
      set_min_balance: {
        id: 'Compact<u32>',
        minBalance: 'u128',
      },
      touch_other: {
        id: 'Compact<u32>',
        who: 'PezspRuntimeMultiAddress',
      },
      refund_other: {
        id: 'Compact<u32>',
        who: 'PezspRuntimeMultiAddress',
      },
      block: {
        id: 'Compact<u32>',
        who: 'PezspRuntimeMultiAddress',
      },
      transfer_all: {
        id: 'Compact<u32>',
        dest: 'PezspRuntimeMultiAddress',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup334: pallet_beefy::pallet::Call<T>
   **/
  PezpalletBeefyCall: {
    _enum: {
      report_double_voting: {
        equivocationProof: 'PezspConsensusBeefyDoubleVotingProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      report_double_voting_unsigned: {
        equivocationProof: 'PezspConsensusBeefyDoubleVotingProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      set_new_genesis: {
        delayInBlocks: 'u32',
      },
      report_fork_voting: {
        equivocationProof: 'PezspConsensusBeefyForkVotingProofAncestryProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      report_fork_voting_unsigned: {
        equivocationProof: 'PezspConsensusBeefyForkVotingProofAncestryProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      report_future_block_voting: {
        equivocationProof: 'PezspConsensusBeefyFutureBlockVotingProof',
        keyOwnerProof: 'PezspSessionMembershipProof',
      },
      report_future_block_voting_unsigned: {
        equivocationProof: 'PezspConsensusBeefyFutureBlockVotingProof',
        keyOwnerProof: 'PezspSessionMembershipProof'
      }
    }
  },
  /**
   * Lookup335: sp_consensus_beefy::DoubleVotingProof<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  PezspConsensusBeefyDoubleVotingProof: {
    first: 'PezspConsensusBeefyVoteMessage',
    second: 'PezspConsensusBeefyVoteMessage'
  },
  /**
   * Lookup336: sp_consensus_beefy::ecdsa_crypto::Signature
   **/
  PezspConsensusBeefyEcdsaCryptoSignature: '[u8;65]',
  /**
   * Lookup337: sp_consensus_beefy::VoteMessage<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  PezspConsensusBeefyVoteMessage: {
    commitment: 'PezspConsensusBeefyCommitment',
    id: 'PezspConsensusBeefyEcdsaCryptoPublic',
    signature: 'PezspConsensusBeefyEcdsaCryptoSignature'
  },
  /**
   * Lookup338: sp_consensus_beefy::commitment::Commitment<TBlockNumber>
   **/
  PezspConsensusBeefyCommitment: {
    payload: 'PezspConsensusBeefyPayload',
    blockNumber: 'u32',
    validatorSetId: 'u64'
  },
  /**
   * Lookup339: sp_consensus_beefy::payload::Payload
   **/
  PezspConsensusBeefyPayload: 'Vec<([u8;2],Bytes)>',
  /**
   * Lookup342: sp_consensus_beefy::ForkVotingProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_beefy::ecdsa_crypto::Public, sp_mmr_primitives::AncestryProof<primitive_types::H256>>
   **/
  PezspConsensusBeefyForkVotingProofAncestryProof: {
    vote: 'PezspConsensusBeefyVoteMessage',
    ancestryProof: 'PezspMmrPrimitivesAncestryProof',
    header: 'PezspRuntimeHeader'
  },
  /**
   * Lookup343: sp_mmr_primitives::AncestryProof<primitive_types::H256>
   **/
  PezspMmrPrimitivesAncestryProof: {
    prevPeaks: 'Vec<H256>',
    prevLeafCount: 'u64',
    leafCount: 'u64',
    items: 'Vec<(u64,H256)>'
  },
  /**
   * Lookup346: sp_consensus_beefy::FutureBlockVotingProof<Number, sp_consensus_beefy::ecdsa_crypto::Public>
   **/
  PezspConsensusBeefyFutureBlockVotingProof: {
    vote: 'PezspConsensusBeefyVoteMessage'
  },
  /**
   * Lookup347: pallet_lottery::pallet::Call<T>
   **/
  PezpalletLotteryCall: {
    _enum: {
      buy_ticket: {
        call: 'RuntimeCall',
      },
      set_calls: {
        calls: 'Vec<RuntimeCall>',
      },
      start_lottery: {
        price: 'u128',
        length: 'u32',
        delay: 'u32',
        repeat: 'bool',
      },
      stop_repeat: 'Null'
    }
  },
  /**
   * Lookup348: pallet_nis::pallet::Call<T>
   **/
  PezpalletNisCall: {
    _enum: {
      place_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      retract_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      fund_deficit: 'Null',
      thaw_private: {
        index: 'Compact<u32>',
        maybeProportion: 'Option<u64>',
      },
      thaw_communal: {
        index: 'Compact<u32>',
      },
      communify: {
        index: 'Compact<u32>',
      },
      privatize: {
        index: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup350: pallet_uniques::pallet::Call<T, I>
   **/
  PezpalletUniquesCall: {
    _enum: {
      create: {
        collection: 'u32',
        admin: 'PezspRuntimeMultiAddress',
      },
      force_create: {
        collection: 'u32',
        owner: 'PezspRuntimeMultiAddress',
        freeHolding: 'bool',
      },
      destroy: {
        collection: 'u32',
        witness: 'PezpalletUniquesDestroyWitness',
      },
      mint: {
        collection: 'u32',
        item: 'u32',
        owner: 'PezspRuntimeMultiAddress',
      },
      burn: {
        collection: 'u32',
        item: 'u32',
        checkOwner: 'Option<PezspRuntimeMultiAddress>',
      },
      transfer: {
        collection: 'u32',
        item: 'u32',
        dest: 'PezspRuntimeMultiAddress',
      },
      redeposit: {
        collection: 'u32',
        items: 'Vec<u32>',
      },
      freeze: {
        collection: 'u32',
        item: 'u32',
      },
      thaw: {
        collection: 'u32',
        item: 'u32',
      },
      freeze_collection: {
        collection: 'u32',
      },
      thaw_collection: {
        collection: 'u32',
      },
      transfer_ownership: {
        collection: 'u32',
        newOwner: 'PezspRuntimeMultiAddress',
      },
      set_team: {
        collection: 'u32',
        issuer: 'PezspRuntimeMultiAddress',
        admin: 'PezspRuntimeMultiAddress',
        freezer: 'PezspRuntimeMultiAddress',
      },
      approve_transfer: {
        collection: 'u32',
        item: 'u32',
        delegate: 'PezspRuntimeMultiAddress',
      },
      cancel_approval: {
        collection: 'u32',
        item: 'u32',
        maybeCheckDelegate: 'Option<PezspRuntimeMultiAddress>',
      },
      force_item_status: {
        collection: 'u32',
        owner: 'PezspRuntimeMultiAddress',
        issuer: 'PezspRuntimeMultiAddress',
        admin: 'PezspRuntimeMultiAddress',
        freezer: 'PezspRuntimeMultiAddress',
        freeHolding: 'bool',
        isFrozen: 'bool',
      },
      set_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      set_metadata: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_metadata: {
        collection: 'u32',
        item: 'u32',
      },
      set_collection_metadata: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_collection_metadata: {
        collection: 'u32',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u32>',
      },
      set_collection_max_supply: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      set_price: {
        collection: 'u32',
        item: 'u32',
        price: 'Option<u128>',
        whitelistedBuyer: 'Option<PezspRuntimeMultiAddress>',
      },
      buy_item: {
        collection: 'u32',
        item: 'u32',
        bidPrice: 'u128'
      }
    }
  },
  /**
   * Lookup351: pallet_uniques::types::DestroyWitness
   **/
  PezpalletUniquesDestroyWitness: {
    items: 'Compact<u32>',
    itemMetadatas: 'Compact<u32>',
    attributes: 'Compact<u32>'
  },
  /**
   * Lookup353: pallet_nfts::pallet::Call<T, I>
   **/
  PezpalletNftsCall: {
    _enum: {
      create: {
        admin: 'PezspRuntimeMultiAddress',
        config: 'PezpalletNftsCollectionConfig',
      },
      force_create: {
        owner: 'PezspRuntimeMultiAddress',
        config: 'PezpalletNftsCollectionConfig',
      },
      destroy: {
        collection: 'u32',
        witness: 'PezpalletNftsDestroyWitness',
      },
      mint: {
        collection: 'u32',
        item: 'u32',
        mintTo: 'PezspRuntimeMultiAddress',
        witnessData: 'Option<PezpalletNftsMintWitness>',
      },
      force_mint: {
        collection: 'u32',
        item: 'u32',
        mintTo: 'PezspRuntimeMultiAddress',
        itemConfig: 'PezpalletNftsItemConfig',
      },
      burn: {
        collection: 'u32',
        item: 'u32',
      },
      transfer: {
        collection: 'u32',
        item: 'u32',
        dest: 'PezspRuntimeMultiAddress',
      },
      redeposit: {
        collection: 'u32',
        items: 'Vec<u32>',
      },
      lock_item_transfer: {
        collection: 'u32',
        item: 'u32',
      },
      unlock_item_transfer: {
        collection: 'u32',
        item: 'u32',
      },
      lock_collection: {
        collection: 'u32',
        lockSettings: 'u64',
      },
      transfer_ownership: {
        collection: 'u32',
        newOwner: 'PezspRuntimeMultiAddress',
      },
      set_team: {
        collection: 'u32',
        issuer: 'Option<PezspRuntimeMultiAddress>',
        admin: 'Option<PezspRuntimeMultiAddress>',
        freezer: 'Option<PezspRuntimeMultiAddress>',
      },
      force_collection_owner: {
        collection: 'u32',
        owner: 'PezspRuntimeMultiAddress',
      },
      force_collection_config: {
        collection: 'u32',
        config: 'PezpalletNftsCollectionConfig',
      },
      approve_transfer: {
        collection: 'u32',
        item: 'u32',
        delegate: 'PezspRuntimeMultiAddress',
        maybeDeadline: 'Option<u32>',
      },
      cancel_approval: {
        collection: 'u32',
        item: 'u32',
        delegate: 'PezspRuntimeMultiAddress',
      },
      clear_all_transfer_approvals: {
        collection: 'u32',
        item: 'u32',
      },
      lock_item_properties: {
        collection: 'u32',
        item: 'u32',
        lockMetadata: 'bool',
        lockAttributes: 'bool',
      },
      set_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PezpalletNftsAttributeNamespace',
        key: 'Bytes',
        value: 'Bytes',
      },
      force_set_attribute: {
        setAs: 'Option<PezspCoreCryptoAccountId32>',
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PezpalletNftsAttributeNamespace',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PezpalletNftsAttributeNamespace',
        key: 'Bytes',
      },
      approve_item_attributes: {
        collection: 'u32',
        item: 'u32',
        delegate: 'PezspRuntimeMultiAddress',
      },
      cancel_item_attributes_approval: {
        collection: 'u32',
        item: 'u32',
        delegate: 'PezspRuntimeMultiAddress',
        witness: 'PezpalletNftsCancelAttributesApprovalWitness',
      },
      set_metadata: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
      },
      clear_metadata: {
        collection: 'u32',
        item: 'u32',
      },
      set_collection_metadata: {
        collection: 'u32',
        data: 'Bytes',
      },
      clear_collection_metadata: {
        collection: 'u32',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u32>',
      },
      set_collection_max_supply: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      update_mint_settings: {
        collection: 'u32',
        mintSettings: 'PezpalletNftsMintSettings',
      },
      set_price: {
        collection: 'u32',
        item: 'u32',
        price: 'Option<u128>',
        whitelistedBuyer: 'Option<PezspRuntimeMultiAddress>',
      },
      buy_item: {
        collection: 'u32',
        item: 'u32',
        bidPrice: 'u128',
      },
      pay_tips: {
        tips: 'Vec<PezpalletNftsItemTip>',
      },
      create_swap: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        maybeDesiredItem: 'Option<u32>',
        maybePrice: 'Option<PezpalletNftsPriceWithDirection>',
        duration: 'u32',
      },
      cancel_swap: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
      },
      claim_swap: {
        sendCollection: 'u32',
        sendItem: 'u32',
        receiveCollection: 'u32',
        receiveItem: 'u32',
        witnessPrice: 'Option<PezpalletNftsPriceWithDirection>',
      },
      mint_pre_signed: {
        mintData: 'PezpalletNftsPreSignedMint',
        signature: 'PezspRuntimeMultiSignature',
        signer: 'PezspCoreCryptoAccountId32',
      },
      set_attributes_pre_signed: {
        data: 'PezpalletNftsPreSignedAttributes',
        signature: 'PezspRuntimeMultiSignature',
        signer: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup354: pallet_nfts::types::CollectionConfig<Price, BlockNumber, CollectionId>
   **/
  PezpalletNftsCollectionConfig: {
    settings: 'u64',
    maxSupply: 'Option<u32>',
    mintSettings: 'PezpalletNftsMintSettings'
  },
  /**
   * Lookup356: pallet_nfts::types::CollectionSetting
   **/
  PezpalletNftsCollectionSetting: {
    _enum: ['__Unused0', 'TransferableItems', 'UnlockedMetadata', '__Unused3', 'UnlockedAttributes', '__Unused5', '__Unused6', '__Unused7', 'UnlockedMaxSupply', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'DepositRequired']
  },
  /**
   * Lookup357: pallet_nfts::types::MintSettings<Price, BlockNumber, CollectionId>
   **/
  PezpalletNftsMintSettings: {
    mintType: 'PezpalletNftsMintType',
    price: 'Option<u128>',
    startBlock: 'Option<u32>',
    endBlock: 'Option<u32>',
    defaultItemSettings: 'u64'
  },
  /**
   * Lookup358: pallet_nfts::types::MintType<CollectionId>
   **/
  PezpalletNftsMintType: {
    _enum: {
      Issuer: 'Null',
      Public: 'Null',
      HolderOf: 'u32'
    }
  },
  /**
   * Lookup360: pallet_nfts::types::ItemSetting
   **/
  PezpalletNftsItemSetting: {
    _enum: ['__Unused0', 'Transferable', 'UnlockedMetadata', '__Unused3', 'UnlockedAttributes']
  },
  /**
   * Lookup361: pallet_nfts::types::DestroyWitness
   **/
  PezpalletNftsDestroyWitness: {
    itemMetadatas: 'Compact<u32>',
    itemConfigs: 'Compact<u32>',
    attributes: 'Compact<u32>'
  },
  /**
   * Lookup363: pallet_nfts::types::MintWitness<ItemId, Balance>
   **/
  PezpalletNftsMintWitness: {
    ownedItem: 'Option<u32>',
    mintPrice: 'Option<u128>'
  },
  /**
   * Lookup364: pallet_nfts::types::ItemConfig
   **/
  PezpalletNftsItemConfig: {
    settings: 'u64'
  },
  /**
   * Lookup365: pallet_nfts::types::CancelAttributesApprovalWitness
   **/
  PezpalletNftsCancelAttributesApprovalWitness: {
    accountAttributes: 'u32'
  },
  /**
   * Lookup367: pallet_nfts::types::ItemTip<CollectionId, ItemId, sp_core::crypto::AccountId32, Amount>
   **/
  PezpalletNftsItemTip: {
    collection: 'u32',
    item: 'u32',
    receiver: 'PezspCoreCryptoAccountId32',
    amount: 'u128'
  },
  /**
   * Lookup369: pallet_nfts::types::PreSignedMint<CollectionId, ItemId, sp_core::crypto::AccountId32, Deadline, Balance>
   **/
  PezpalletNftsPreSignedMint: {
    collection: 'u32',
    item: 'u32',
    attributes: 'Vec<(Bytes,Bytes)>',
    metadata: 'Bytes',
    onlyAccount: 'Option<PezspCoreCryptoAccountId32>',
    deadline: 'u32',
    mintPrice: 'Option<u128>'
  },
  /**
   * Lookup370: pallet_nfts::types::PreSignedAttributes<CollectionId, ItemId, sp_core::crypto::AccountId32, Deadline>
   **/
  PezpalletNftsPreSignedAttributes: {
    collection: 'u32',
    item: 'u32',
    attributes: 'Vec<(Bytes,Bytes)>',
    namespace: 'PezpalletNftsAttributeNamespace',
    deadline: 'u32'
  },
  /**
   * Lookup371: pallet_nft_fractionalization::pallet::Call<T>
   **/
  PezpalletNftFractionalizationCall: {
    _enum: {
      fractionalize: {
        nftCollectionId: 'u32',
        nftId: 'u32',
        assetId: 'u32',
        beneficiary: 'PezspRuntimeMultiAddress',
        fractions: 'u128',
      },
      unify: {
        nftCollectionId: 'u32',
        nftId: 'u32',
        assetId: 'u32',
        beneficiary: 'PezspRuntimeMultiAddress'
      }
    }
  },
  /**
   * Lookup372: pallet_salary::pallet::Call<T, I>
   **/
  PezpalletSalaryCall: {
    _enum: {
      init: 'Null',
      bump: 'Null',
      induct: 'Null',
      register: 'Null',
      payout: 'Null',
      payout_other: {
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      check_payment: 'Null'
    }
  },
  /**
   * Lookup373: pallet_core_fellowship::pallet::Call<T, I>
   **/
  PezpalletCoreFellowshipCall: {
    _enum: {
      bump: {
        who: 'PezspCoreCryptoAccountId32',
      },
      set_params: {
        params: 'PezpalletCoreFellowshipParamsTypeU128',
      },
      set_active: {
        isActive: 'bool',
      },
      approve: {
        who: 'PezspCoreCryptoAccountId32',
        atRank: 'u16',
      },
      induct: {
        who: 'PezspCoreCryptoAccountId32',
      },
      promote: {
        who: 'PezspCoreCryptoAccountId32',
        toRank: 'u16',
      },
      offboard: {
        who: 'PezspCoreCryptoAccountId32',
      },
      submit_evidence: {
        wish: 'PezpalletCoreFellowshipWish',
        evidence: 'Bytes',
      },
      import: 'Null',
      set_partial_params: {
        partialParams: 'PezpalletCoreFellowshipParamsTypeOption',
      },
      promote_fast: {
        who: 'PezspCoreCryptoAccountId32',
        toRank: 'u16',
      },
      import_member: {
        who: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup374: pallet_core_fellowship::ParamsType<Option<T>, Option<T>, Ranks>
   **/
  PezpalletCoreFellowshipParamsTypeOption: {
    activeSalary: 'Vec<Option<u128>>',
    passiveSalary: 'Vec<Option<u128>>',
    demotionPeriod: 'Vec<Option<u32>>',
    minPromotionPeriod: 'Vec<Option<u32>>',
    offboardTimeout: 'Option<u32>'
  },
  /**
   * Lookup379: pallet_transaction_storage::pallet::Call<T>
   **/
  PezpalletTransactionStorageCall: {
    _enum: {
      store: {
        data: 'Bytes',
      },
      renew: {
        block: 'u32',
        index: 'u32',
      },
      check_proof: {
        proof: 'PezspTransactionStorageProofTransactionStorageProof'
      }
    }
  },
  /**
   * Lookup380: sp_transaction_storage_proof::TransactionStorageProof
   **/
  PezspTransactionStorageProofTransactionStorageProof: {
    chunk: 'Bytes',
    proof: 'Vec<Bytes>'
  },
  /**
   * Lookup381: pallet_bags_list::pallet::Call<T, I>
   **/
  PezpalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'PezspRuntimeMultiAddress',
      },
      put_in_front_of: {
        lighter: 'PezspRuntimeMultiAddress',
      },
      put_in_front_of_other: {
        heavier: 'PezspRuntimeMultiAddress',
        lighter: 'PezspRuntimeMultiAddress'
      }
    }
  },
  /**
   * Lookup382: pallet_state_trie_migration::pallet::Call<T>
   **/
  PezpalletStateTrieMigrationCall: {
    _enum: {
      control_auto_migration: {
        maybeConfig: 'Option<PezpalletStateTrieMigrationMigrationLimits>',
      },
      continue_migrate: {
        limits: 'PezpalletStateTrieMigrationMigrationLimits',
        realSizeUpper: 'u32',
        witnessTask: 'PezpalletStateTrieMigrationMigrationTask',
      },
      migrate_custom_top: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
        witnessSize: 'u32',
      },
      migrate_custom_child: {
        root: 'Bytes',
        childKeys: 'Vec<Bytes>',
        totalSize: 'u32',
      },
      set_signed_max_limits: {
        limits: 'PezpalletStateTrieMigrationMigrationLimits',
      },
      force_set_progress: {
        progressTop: 'PezpalletStateTrieMigrationProgress',
        progressChild: 'PezpalletStateTrieMigrationProgress'
      }
    }
  },
  /**
   * Lookup384: pallet_state_trie_migration::pallet::MigrationLimits
   **/
  PezpalletStateTrieMigrationMigrationLimits: {
    _alias: {
      size_: 'size'
    },
    size_: 'u32',
    item: 'u32'
  },
  /**
   * Lookup385: pallet_state_trie_migration::pallet::MigrationTask<T>
   **/
  PezpalletStateTrieMigrationMigrationTask: {
    _alias: {
      size_: 'size'
    },
    progressTop: 'PezpalletStateTrieMigrationProgress',
    progressChild: 'PezpalletStateTrieMigrationProgress',
    size_: 'u32',
    topItems: 'u32',
    childItems: 'u32'
  },
  /**
   * Lookup386: pallet_state_trie_migration::pallet::Progress<MaxKeyLen>
   **/
  PezpalletStateTrieMigrationProgress: {
    _enum: {
      ToStart: 'Null',
      LastKey: 'Bytes',
      Complete: 'Null'
    }
  },
  /**
   * Lookup388: pallet_child_bounties::pallet::Call<T>
   **/
  PezpalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'PezspRuntimeMultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'PezspRuntimeMultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup389: pallet_referenda::pallet::Call<T, I>
   **/
  PezpalletReferendaCall: {
    _enum: {
      submit: {
        proposalOrigin: 'KitchensinkRuntimeOriginCaller',
        proposal: 'PezframeSupportPreimagesBounded',
        enactmentMoment: 'PezframeSupportScheduleDispatchTime',
      },
      place_decision_deposit: {
        index: 'u32',
      },
      refund_decision_deposit: {
        index: 'u32',
      },
      cancel: {
        index: 'u32',
      },
      kill: {
        index: 'u32',
      },
      nudge_referendum: {
        index: 'u32',
      },
      one_fewer_deciding: {
        track: 'u16',
      },
      refund_submission_deposit: {
        index: 'u32',
      },
      set_metadata: {
        index: 'u32',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup390: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  PezframeSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup391: pallet_remark::pallet::Call<T>
   **/
  PezpalletRemarkCall: {
    _enum: {
      store: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup392: pallet_root_testing::pallet::Call<T>
   **/
  PezpalletRootTestingCall: {
    _enum: {
      fill_block: {
        ratio: 'u32',
      },
      trigger_defensive: 'Null'
    }
  },
  /**
   * Lookup393: pallet_conviction_voting::pallet::Call<T, I>
   **/
  PezpalletConvictionVotingCall: {
    _enum: {
      vote: {
        pollIndex: 'Compact<u32>',
        vote: 'PezpalletConvictionVotingVoteAccountVote',
      },
      delegate: {
        class: 'u16',
        to: 'PezspRuntimeMultiAddress',
        conviction: 'PezpalletConvictionVotingConviction',
        balance: 'u128',
      },
      undelegate: {
        class: 'u16',
      },
      unlock: {
        class: 'u16',
        target: 'PezspRuntimeMultiAddress',
      },
      remove_vote: {
        class: 'Option<u16>',
        index: 'u32',
      },
      remove_other_vote: {
        target: 'PezspRuntimeMultiAddress',
        class: 'u16',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup394: pallet_conviction_voting::vote::AccountVote<Balance>
   **/
  PezpalletConvictionVotingVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128',
      },
      SplitAbstain: {
        aye: 'u128',
        nay: 'u128',
        abstain: 'u128'
      }
    }
  },
  /**
   * Lookup396: pallet_conviction_voting::conviction::Conviction
   **/
  PezpalletConvictionVotingConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup397: pallet_whitelist::pallet::Call<T>
   **/
  PezpalletWhitelistCall: {
    _enum: {
      whitelist_call: {
        callHash: 'H256',
      },
      remove_whitelisted_call: {
        callHash: 'H256',
      },
      dispatch_whitelisted_call: {
        callHash: 'H256',
        callEncodedLen: 'u32',
        callWeightWitness: 'PezspWeightsWeightV2Weight',
      },
      dispatch_whitelisted_call_with_preimage: {
        call: 'RuntimeCall'
      }
    }
  },
  /**
   * Lookup399: pallet_alliance::pallet::Call<T, I>
   **/
  PezpalletAllianceCall: {
    _enum: {
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'RuntimeCall',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused2: 'Null',
      init_members: {
        fellows: 'Vec<PezspCoreCryptoAccountId32>',
        allies: 'Vec<PezspCoreCryptoAccountId32>',
      },
      disband: {
        witness: 'PezpalletAllianceDisbandWitness',
      },
      set_rule: {
        rule: 'PezpalletAllianceCid',
      },
      announce: {
        announcement: 'PezpalletAllianceCid',
      },
      remove_announcement: {
        announcement: 'PezpalletAllianceCid',
      },
      join_alliance: 'Null',
      nominate_ally: {
        who: 'PezspRuntimeMultiAddress',
      },
      elevate_ally: {
        ally: 'PezspRuntimeMultiAddress',
      },
      give_retirement_notice: 'Null',
      retire: 'Null',
      kick_member: {
        who: 'PezspRuntimeMultiAddress',
      },
      add_unscrupulous_items: {
        items: 'Vec<PezpalletAllianceUnscrupulousItem>',
      },
      remove_unscrupulous_items: {
        items: 'Vec<PezpalletAllianceUnscrupulousItem>',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'PezspWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      abdicate_fellow_status: 'Null'
    }
  },
  /**
   * Lookup400: pallet_alliance::types::DisbandWitness
   **/
  PezpalletAllianceDisbandWitness: {
    fellowMembers: 'Compact<u32>',
    allyMembers: 'Compact<u32>'
  },
  /**
   * Lookup401: pallet_alliance::types::Cid
   **/
  PezpalletAllianceCid: {
    _alias: {
      hash_: 'hash'
    },
    version: 'PezpalletAllianceVersion',
    codec: 'u64',
    hash_: 'PezpalletAllianceMultihash'
  },
  /**
   * Lookup402: pallet_alliance::types::Version
   **/
  PezpalletAllianceVersion: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup403: pallet_alliance::types::Multihash
   **/
  PezpalletAllianceMultihash: {
    code: 'u64',
    digest: 'Bytes'
  },
  /**
   * Lookup406: pallet_alliance::UnscrupulousItem<sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PezpalletAllianceUnscrupulousItem: {
    _enum: {
      AccountId: 'PezspCoreCryptoAccountId32',
      Website: 'Bytes'
    }
  },
  /**
   * Lookup408: pallet_nomination_pools::pallet::Call<T>
   **/
  PezpalletNominationPoolsCall: {
    _enum: {
      join: {
        amount: 'Compact<u128>',
        poolId: 'u32',
      },
      bond_extra: {
        extra: 'PezpalletNominationPoolsBondExtra',
      },
      claim_payout: 'Null',
      unbond: {
        memberAccount: 'PezspRuntimeMultiAddress',
        unbondingPoints: 'Compact<u128>',
      },
      pool_withdraw_unbonded: {
        poolId: 'u32',
        numSlashingSpans: 'u32',
      },
      withdraw_unbonded: {
        memberAccount: 'PezspRuntimeMultiAddress',
        numSlashingSpans: 'u32',
      },
      create: {
        amount: 'Compact<u128>',
        root: 'PezspRuntimeMultiAddress',
        nominator: 'PezspRuntimeMultiAddress',
        bouncer: 'PezspRuntimeMultiAddress',
      },
      create_with_pool_id: {
        amount: 'Compact<u128>',
        root: 'PezspRuntimeMultiAddress',
        nominator: 'PezspRuntimeMultiAddress',
        bouncer: 'PezspRuntimeMultiAddress',
        poolId: 'u32',
      },
      nominate: {
        poolId: 'u32',
        validators: 'Vec<PezspCoreCryptoAccountId32>',
      },
      set_state: {
        poolId: 'u32',
        state: 'PezpalletNominationPoolsPoolState',
      },
      set_metadata: {
        poolId: 'u32',
        metadata: 'Bytes',
      },
      set_configs: {
        minJoinBond: 'PezpalletNominationPoolsConfigOpU128',
        minCreateBond: 'PezpalletNominationPoolsConfigOpU128',
        maxPools: 'PezpalletNominationPoolsConfigOpU32',
        maxMembers: 'PezpalletNominationPoolsConfigOpU32',
        maxMembersPerPool: 'PezpalletNominationPoolsConfigOpU32',
        globalMaxCommission: 'PezpalletNominationPoolsConfigOpPerbill',
      },
      update_roles: {
        poolId: 'u32',
        newRoot: 'PezpalletNominationPoolsConfigOpAccountId32',
        newNominator: 'PezpalletNominationPoolsConfigOpAccountId32',
        newBouncer: 'PezpalletNominationPoolsConfigOpAccountId32',
      },
      chill: {
        poolId: 'u32',
      },
      bond_extra_other: {
        member: 'PezspRuntimeMultiAddress',
        extra: 'PezpalletNominationPoolsBondExtra',
      },
      set_claim_permission: {
        permission: 'PezpalletNominationPoolsClaimPermission',
      },
      claim_payout_other: {
        other: 'PezspCoreCryptoAccountId32',
      },
      set_commission: {
        poolId: 'u32',
        newCommission: 'Option<(u32,PezspCoreCryptoAccountId32)>',
      },
      set_commission_max: {
        poolId: 'u32',
        maxCommission: 'u32',
      },
      set_commission_change_rate: {
        poolId: 'u32',
        changeRate: 'PezpalletNominationPoolsCommissionChangeRate',
      },
      claim_commission: {
        poolId: 'u32',
      },
      adjust_pool_deposit: {
        poolId: 'u32',
      },
      set_commission_claim_permission: {
        poolId: 'u32',
        permission: 'Option<PezpalletNominationPoolsCommissionClaimPermission>',
      },
      apply_slash: {
        memberAccount: 'PezspRuntimeMultiAddress',
      },
      migrate_delegation: {
        memberAccount: 'PezspRuntimeMultiAddress',
      },
      migrate_pool_to_delegate_stake: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup409: pallet_nomination_pools::BondExtra<Balance>
   **/
  PezpalletNominationPoolsBondExtra: {
    _enum: {
      FreeBalance: 'u128',
      Rewards: 'Null'
    }
  },
  /**
   * Lookup410: pallet_nomination_pools::PoolState
   **/
  PezpalletNominationPoolsPoolState: {
    _enum: ['Open', 'Blocked', 'Destroying']
  },
  /**
   * Lookup411: pallet_nomination_pools::ConfigOp<T>
   **/
  PezpalletNominationPoolsConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup412: pallet_nomination_pools::ConfigOp<T>
   **/
  PezpalletNominationPoolsConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup413: pallet_nomination_pools::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PezpalletNominationPoolsConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup414: pallet_nomination_pools::ConfigOp<sp_core::crypto::AccountId32>
   **/
  PezpalletNominationPoolsConfigOpAccountId32: {
    _enum: {
      Noop: 'Null',
      Set: 'PezspCoreCryptoAccountId32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup415: pallet_nomination_pools::ClaimPermission
   **/
  PezpalletNominationPoolsClaimPermission: {
    _enum: ['Permissioned', 'PermissionlessCompound', 'PermissionlessWithdraw', 'PermissionlessAll']
  },
  /**
   * Lookup418: pallet_nomination_pools::CommissionChangeRate<BlockNumber>
   **/
  PezpalletNominationPoolsCommissionChangeRate: {
    maxIncrease: 'u32',
    minDelay: 'u32'
  },
  /**
   * Lookup420: pallet_nomination_pools::CommissionClaimPermission<sp_core::crypto::AccountId32>
   **/
  PezpalletNominationPoolsCommissionClaimPermission: {
    _enum: {
      Permissionless: 'Null',
      Account: 'PezspCoreCryptoAccountId32'
    }
  },
  /**
   * Lookup422: pallet_ranked_collective::pallet::Call<T, I>
   **/
  PezpalletRankedCollectiveCall: {
    _enum: {
      add_member: {
        who: 'PezspRuntimeMultiAddress',
      },
      promote_member: {
        who: 'PezspRuntimeMultiAddress',
      },
      demote_member: {
        who: 'PezspRuntimeMultiAddress',
      },
      remove_member: {
        who: 'PezspRuntimeMultiAddress',
        minRank: 'u16',
      },
      vote: {
        poll: 'u32',
        aye: 'bool',
      },
      cleanup_poll: {
        pollIndex: 'u32',
        max: 'u32',
      },
      exchange_member: {
        who: 'PezspRuntimeMultiAddress',
        newWho: 'PezspRuntimeMultiAddress'
      }
    }
  },
  /**
   * Lookup423: pallet_asset_conversion::pallet::Call<T>
   **/
  PezpalletAssetConversionCall: {
    _enum: {
      create_pool: {
        asset1: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
      },
      add_liquidity: {
        asset1: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        amount1Desired: 'u128',
        amount2Desired: 'u128',
        amount1Min: 'u128',
        amount2Min: 'u128',
        mintTo: 'PezspCoreCryptoAccountId32',
      },
      remove_liquidity: {
        asset1: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        lpTokenBurn: 'u128',
        amount1MinReceive: 'u128',
        amount2MinReceive: 'u128',
        withdrawTo: 'PezspCoreCryptoAccountId32',
      },
      swap_exact_tokens_for_tokens: {
        path: 'Vec<PezframeSupportTokensFungibleUnionOfNativeOrWithId>',
        amountIn: 'u128',
        amountOutMin: 'u128',
        sendTo: 'PezspCoreCryptoAccountId32',
        keepAlive: 'bool',
      },
      swap_tokens_for_exact_tokens: {
        path: 'Vec<PezframeSupportTokensFungibleUnionOfNativeOrWithId>',
        amountOut: 'u128',
        amountInMax: 'u128',
        sendTo: 'PezspCoreCryptoAccountId32',
        keepAlive: 'bool',
      },
      touch: {
        asset1: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId'
      }
    }
  },
  /**
   * Lookup425: pallet_fast_unstake::pallet::Call<T>
   **/
  PezpalletFastUnstakeCall: {
    _enum: {
      register_fast_unstake: 'Null',
      deregister: 'Null',
      control: {
        erasToCheck: 'u32'
      }
    }
  },
  /**
   * Lookup426: pallet_message_queue::pallet::Call<T>
   **/
  PezpalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: 'u32',
        pageIndex: 'u32',
      },
      execute_overweight: {
        messageOrigin: 'u32',
        page: 'u32',
        index: 'u32',
        weightLimit: 'PezspWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup427: frame_benchmarking_pallet_pov::pallet::Call<T>
   **/
  PezframeBenchmarkingPezpalletPovCall: {
    _enum: ['emit_event', 'noop']
  },
  /**
   * Lookup428: pallet_tx_pause::pallet::Call<T>
   **/
  PezpalletTxPauseCall: {
    _enum: {
      pause: {
        fullName: '(Bytes,Bytes)',
      },
      unpause: {
        ident: '(Bytes,Bytes)'
      }
    }
  },
  /**
   * Lookup430: pallet_safe_mode::pallet::Call<T>
   **/
  PezpalletSafeModeCall: {
    _enum: {
      enter: 'Null',
      force_enter: 'Null',
      extend: 'Null',
      force_extend: 'Null',
      force_exit: 'Null',
      force_slash_deposit: {
        account: 'PezspCoreCryptoAccountId32',
        block: 'u32',
      },
      release_deposit: {
        account: 'PezspCoreCryptoAccountId32',
        block: 'u32',
      },
      force_release_deposit: {
        account: 'PezspCoreCryptoAccountId32',
        block: 'u32'
      }
    }
  },
  /**
   * Lookup431: pallet_migrations::pallet::Call<T>
   **/
  PezpalletMigrationsCall: {
    _enum: {
      force_set_cursor: {
        cursor: 'Option<PezpalletMigrationsMigrationCursor>',
      },
      force_set_active_cursor: {
        index: 'u32',
        innerCursor: 'Option<Bytes>',
        startedAt: 'Option<u32>',
      },
      force_onboard_mbms: 'Null',
      clear_historic: {
        selector: 'PezpalletMigrationsHistoricCleanupSelector'
      }
    }
  },
  /**
   * Lookup433: pallet_migrations::MigrationCursor<bounded_collections::bounded_vec::BoundedVec<T, S>, BlockNumber>
   **/
  PezpalletMigrationsMigrationCursor: {
    _enum: {
      Active: 'PezpalletMigrationsActiveCursor',
      Stuck: 'Null'
    }
  },
  /**
   * Lookup435: pallet_migrations::ActiveCursor<bounded_collections::bounded_vec::BoundedVec<T, S>, BlockNumber>
   **/
  PezpalletMigrationsActiveCursor: {
    index: 'u32',
    innerCursor: 'Option<Bytes>',
    startedAt: 'u32'
  },
  /**
   * Lookup437: pallet_migrations::HistoricCleanupSelector<bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PezpalletMigrationsHistoricCleanupSelector: {
    _enum: {
      Specific: 'Vec<Bytes>',
      Wildcard: {
        limit: 'Option<u32>',
        previousCursor: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup440: pallet_broker::pallet::Call<T>
   **/
  PezpalletBrokerCall: {
    _enum: {
      configure: {
        config: 'PezpalletBrokerConfigRecord',
      },
      reserve: {
        workload: 'Vec<PezpalletBrokerScheduleItem>',
      },
      unreserve: {
        itemIndex: 'u32',
      },
      set_lease: {
        task: 'u32',
        until: 'u32',
      },
      start_sales: {
        endPrice: 'u128',
        extraCores: 'u16',
      },
      purchase: {
        priceLimit: 'u128',
      },
      renew: {
        core: 'u16',
      },
      transfer: {
        regionId: 'PezpalletBrokerRegionId',
        newOwner: 'PezspCoreCryptoAccountId32',
      },
      partition: {
        regionId: 'PezpalletBrokerRegionId',
        pivot: 'u32',
      },
      interlace: {
        regionId: 'PezpalletBrokerRegionId',
        pivot: 'PezpalletBrokerCoreMask',
      },
      assign: {
        regionId: 'PezpalletBrokerRegionId',
        task: 'u32',
        finality: 'PezpalletBrokerFinality',
      },
      pool: {
        regionId: 'PezpalletBrokerRegionId',
        payee: 'PezspCoreCryptoAccountId32',
        finality: 'PezpalletBrokerFinality',
      },
      claim_revenue: {
        regionId: 'PezpalletBrokerRegionId',
        maxTimeslices: 'u32',
      },
      purchase_credit: {
        amount: 'u128',
        beneficiary: 'PezspCoreCryptoAccountId32',
      },
      drop_region: {
        regionId: 'PezpalletBrokerRegionId',
      },
      drop_contribution: {
        regionId: 'PezpalletBrokerRegionId',
      },
      drop_history: {
        when: 'u32',
      },
      drop_renewal: {
        core: 'u16',
        when: 'u32',
      },
      request_core_count: {
        coreCount: 'u16',
      },
      notify_core_count: {
        coreCount: 'u16',
      },
      notify_revenue: {
        revenue: 'PezpalletBrokerOnDemandRevenueRecord',
      },
      enable_auto_renew: {
        core: 'u16',
        task: 'u32',
        workloadEndHint: 'Option<u32>',
      },
      disable_auto_renew: {
        core: 'u16',
        task: 'u32',
      },
      force_reserve: {
        workload: 'Vec<PezpalletBrokerScheduleItem>',
        core: 'u16',
      },
      remove_lease: {
        task: 'u32',
      },
      __Unused25: 'Null',
      remove_assignment: {
        regionId: 'PezpalletBrokerRegionId',
      },
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
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      swap_leases: {
        id: 'u32',
        other: 'u32'
      }
    }
  },
  /**
   * Lookup441: pallet_broker::types::ConfigRecord<RelayBlockNumber>
   **/
  PezpalletBrokerConfigRecord: {
    advanceNotice: 'u32',
    interludeLength: 'u32',
    leadinLength: 'u32',
    regionLength: 'u32',
    idealBulkProportion: 'u32',
    limitCoresOffered: 'Option<u16>',
    renewalBump: 'u32',
    contributionTimeout: 'u32'
  },
  /**
   * Lookup443: pallet_broker::types::ScheduleItem
   **/
  PezpalletBrokerScheduleItem: {
    mask: 'PezpalletBrokerCoreMask',
    assignment: 'PezpalletBrokerCoretimeInterfaceCoreAssignment'
  },
  /**
   * Lookup444: pallet_broker::core_mask::CoreMask
   **/
  PezpalletBrokerCoreMask: '[u8;10]',
  /**
   * Lookup445: pallet_broker::coretime_interface::CoreAssignment
   **/
  PezpalletBrokerCoretimeInterfaceCoreAssignment: {
    _enum: {
      Idle: 'Null',
      Pool: 'Null',
      Task: 'u32'
    }
  },
  /**
   * Lookup447: pallet_broker::types::RegionId
   **/
  PezpalletBrokerRegionId: {
    begin: 'u32',
    core: 'u16',
    mask: 'PezpalletBrokerCoreMask'
  },
  /**
   * Lookup448: pallet_broker::types::Finality
   **/
  PezpalletBrokerFinality: {
    _enum: ['Provisional', 'Final']
  },
  /**
   * Lookup449: pallet_broker::types::OnDemandRevenueRecord<RelayBlockNumber, RelayBalance>
   **/
  PezpalletBrokerOnDemandRevenueRecord: {
    until: 'u32',
    amount: 'u128'
  },
  /**
   * Lookup450: pallet_mixnet::pallet::Call<T>
   **/
  PezpalletMixnetCall: {
    _enum: {
      register: {
        registration: 'PezpalletMixnetRegistration',
        signature: 'PezspMixnetAppSignature'
      }
    }
  },
  /**
   * Lookup451: pallet_mixnet::Registration<BlockNumber, pallet_mixnet::BoundedMixnode<bounded_collections::bounded_vec::BoundedVec<bounded_collections::bounded_vec::BoundedVec<T, S>, S>>>
   **/
  PezpalletMixnetRegistration: {
    blockNumber: 'u32',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    mixnode: 'PezpalletMixnetBoundedMixnode'
  },
  /**
   * Lookup452: pallet_mixnet::BoundedMixnode<bounded_collections::bounded_vec::BoundedVec<bounded_collections::bounded_vec::BoundedVec<T, S>, S>>
   **/
  PezpalletMixnetBoundedMixnode: {
    kxPublic: '[u8;32]',
    peerId: '[u8;32]',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup455: sp_mixnet::types::app::Signature
   **/
  PezspMixnetAppSignature: '[u8;64]',
  /**
   * Lookup456: pallet_parameters::pallet::Call<T>
   **/
  PezpalletParametersCall: {
    _enum: {
      set_parameter: {
        keyValue: 'KitchensinkRuntimeRuntimeParameters'
      }
    }
  },
  /**
   * Lookup457: kitchensink_runtime::RuntimeParameters
   **/
  KitchensinkRuntimeRuntimeParameters: {
    _enum: {
      Storage: 'KitchensinkRuntimeDynamicParamsStorageParameters',
      Referenda: 'KitchensinkRuntimeDynamicParamsReferendaParameters'
    }
  },
  /**
   * Lookup458: kitchensink_runtime::dynamic_params::storage::Parameters
   **/
  KitchensinkRuntimeDynamicParamsStorageParameters: {
    _enum: {
      BaseDeposit: '(KitchensinkRuntimeDynamicParamsStorageBaseDeposit,Option<u128>)',
      ByteDeposit: '(KitchensinkRuntimeDynamicParamsStorageByteDeposit,Option<u128>)'
    }
  },
  /**
   * Lookup459: kitchensink_runtime::dynamic_params::storage::BaseDeposit
   **/
  KitchensinkRuntimeDynamicParamsStorageBaseDeposit: 'Null',
  /**
   * Lookup460: kitchensink_runtime::dynamic_params::storage::ByteDeposit
   **/
  KitchensinkRuntimeDynamicParamsStorageByteDeposit: 'Null',
  /**
   * Lookup461: kitchensink_runtime::dynamic_params::referenda::Parameters
   **/
  KitchensinkRuntimeDynamicParamsReferendaParameters: {
    _enum: {
      Tracks: '(KitchensinkRuntimeDynamicParamsReferendaTracks,Option<Vec<PezpalletReferendaTrack>>)',
      Origins: '(KitchensinkRuntimeDynamicParamsReferendaOrigins,Option<Vec<(KitchensinkRuntimeOriginCaller,u16)>>)'
    }
  },
  /**
   * Lookup462: kitchensink_runtime::dynamic_params::referenda::Tracks
   **/
  KitchensinkRuntimeDynamicParamsReferendaTracks: 'Null',
  /**
   * Lookup465: pallet_referenda::types::Track<Id, Balance, Moment>
   **/
  PezpalletReferendaTrack: {
    id: 'u16',
    info: {
      name: '[u8;25]',
      maxDeciding: 'u32',
      decisionDeposit: 'u128',
      preparePeriod: 'u32',
      decisionPeriod: 'u32',
      confirmPeriod: 'u32',
      minEnactmentPeriod: 'u32',
      minApproval: 'PezpalletReferendaCurve',
      minSupport: 'PezpalletReferendaCurve'
    }
  },
  /**
   * Lookup467: pallet_referenda::types::Curve
   **/
  PezpalletReferendaCurve: {
    _enum: {
      LinearDecreasing: {
        length: 'u32',
        floor: 'u32',
        ceil: 'u32',
      },
      SteppedDecreasing: {
        begin: 'u32',
        end: 'u32',
        step: 'u32',
        period: 'u32',
      },
      Reciprocal: {
        factor: 'i64',
        xOffset: 'i64',
        yOffset: 'i64'
      }
    }
  },
  /**
   * Lookup471: kitchensink_runtime::dynamic_params::referenda::Origins
   **/
  KitchensinkRuntimeDynamicParamsReferendaOrigins: 'Null',
  /**
   * Lookup476: pallet_asset_conversion_ops::pallet::Call<T>
   **/
  PezpalletAssetConversionOpsCall: {
    _enum: {
      migrate_to_new_account: {
        asset1: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId'
      }
    }
  },
  /**
   * Lookup477: pallet_revive::pallet::Call<T>
   **/
  PezpalletReviveCall: {
    _enum: {
      eth_transact: {
        payload: 'Bytes',
      },
      call: {
        dest: 'H160',
        value: 'Compact<u128>',
        gasLimit: 'PezspWeightsWeightV2Weight',
        storageDepositLimit: 'Compact<u128>',
        data: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'PezspWeightsWeightV2Weight',
        storageDepositLimit: 'Compact<u128>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Option<[u8;32]>',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'PezspWeightsWeightV2Weight',
        storageDepositLimit: 'Compact<u128>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Option<[u8;32]>',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Compact<u128>',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'H160',
        codeHash: 'H256',
      },
      map_account: 'Null',
      unmap_account: 'Null',
      dispatch_as_fallback_account: {
        call: 'RuntimeCall'
      }
    }
  },
  /**
   * Lookup479: pallet_asset_rewards::pallet::Call<T>
   **/
  PezpalletAssetRewardsCall: {
    _enum: {
      create_pool: {
        stakedAssetId: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        rewardAssetId: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        rewardRatePerBlock: 'u128',
        expiry: 'PezframeSupportScheduleDispatchTime',
        admin: 'Option<PezspCoreCryptoAccountId32>',
      },
      stake: {
        poolId: 'u32',
        amount: 'u128',
      },
      unstake: {
        poolId: 'u32',
        amount: 'u128',
        staker: 'Option<PezspCoreCryptoAccountId32>',
      },
      harvest_rewards: {
        poolId: 'u32',
        staker: 'Option<PezspCoreCryptoAccountId32>',
      },
      set_pool_reward_rate_per_block: {
        poolId: 'u32',
        newRewardRatePerBlock: 'u128',
      },
      set_pool_admin: {
        poolId: 'u32',
        newAdmin: 'PezspCoreCryptoAccountId32',
      },
      set_pool_expiry_block: {
        poolId: 'u32',
        newExpiry: 'PezframeSupportScheduleDispatchTime',
      },
      deposit_reward_tokens: {
        poolId: 'u32',
        amount: 'u128',
      },
      cleanup_pool: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup480: pallet_meta_tx::pallet::Call<T>
   **/
  PezpalletMetaTxCall: {
    _enum: {
      dispatch: {
        metaTx: 'PezpalletMetaTxMetaTx'
      }
    }
  },
  /**
   * Lookup481: pallet_meta_tx::MetaTx<kitchensink_runtime::RuntimeCall, Extension>
   **/
  PezpalletMetaTxMetaTx: {
    call: 'RuntimeCall',
    extensionVersion: 'u8',
    extension: '(PezpalletVerifySignatureExtensionVerifySignature,PezpalletMetaTxExtensionMetaTxMarker,PezframeSystemExtensionsCheckNonZeroSender,PezframeSystemExtensionsCheckSpecVersion,PezframeSystemExtensionsCheckTxVersion,PezframeSystemExtensionsCheckGenesis,PezframeSystemExtensionsCheckMortality,PezframeSystemExtensionsCheckNonce,PezframeMetadataHashExtensionCheckMetadataHash)'
  },
  /**
   * Lookup483: pallet_verify_signature::extension::VerifySignature<T>
   **/
  PezpalletVerifySignatureExtensionVerifySignature: {
    _enum: {
      Signed: {
        signature: 'PezspRuntimeMultiSignature',
        account: 'PezspCoreCryptoAccountId32',
      },
      Disabled: 'Null'
    }
  },
  /**
   * Lookup484: pallet_meta_tx::extension::MetaTxMarker<T>
   **/
  PezpalletMetaTxExtensionMetaTxMarker: 'Null',
  /**
   * Lookup485: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  PezframeSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup486: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  PezframeSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup487: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  PezframeSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup488: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  PezframeSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup489: frame_system::extensions::check_mortality::CheckMortality<T>
   **/
  PezframeSystemExtensionsCheckMortality: 'PezspRuntimeEra',
  /**
   * Lookup490: sp_runtime::generic::era::Era
   **/
  PezspRuntimeEra: {
    _enum: {
      Immortal: 'Null',
      Mortal1: 'u8',
      Mortal2: 'u8',
      Mortal3: 'u8',
      Mortal4: 'u8',
      Mortal5: 'u8',
      Mortal6: 'u8',
      Mortal7: 'u8',
      Mortal8: 'u8',
      Mortal9: 'u8',
      Mortal10: 'u8',
      Mortal11: 'u8',
      Mortal12: 'u8',
      Mortal13: 'u8',
      Mortal14: 'u8',
      Mortal15: 'u8',
      Mortal16: 'u8',
      Mortal17: 'u8',
      Mortal18: 'u8',
      Mortal19: 'u8',
      Mortal20: 'u8',
      Mortal21: 'u8',
      Mortal22: 'u8',
      Mortal23: 'u8',
      Mortal24: 'u8',
      Mortal25: 'u8',
      Mortal26: 'u8',
      Mortal27: 'u8',
      Mortal28: 'u8',
      Mortal29: 'u8',
      Mortal30: 'u8',
      Mortal31: 'u8',
      Mortal32: 'u8',
      Mortal33: 'u8',
      Mortal34: 'u8',
      Mortal35: 'u8',
      Mortal36: 'u8',
      Mortal37: 'u8',
      Mortal38: 'u8',
      Mortal39: 'u8',
      Mortal40: 'u8',
      Mortal41: 'u8',
      Mortal42: 'u8',
      Mortal43: 'u8',
      Mortal44: 'u8',
      Mortal45: 'u8',
      Mortal46: 'u8',
      Mortal47: 'u8',
      Mortal48: 'u8',
      Mortal49: 'u8',
      Mortal50: 'u8',
      Mortal51: 'u8',
      Mortal52: 'u8',
      Mortal53: 'u8',
      Mortal54: 'u8',
      Mortal55: 'u8',
      Mortal56: 'u8',
      Mortal57: 'u8',
      Mortal58: 'u8',
      Mortal59: 'u8',
      Mortal60: 'u8',
      Mortal61: 'u8',
      Mortal62: 'u8',
      Mortal63: 'u8',
      Mortal64: 'u8',
      Mortal65: 'u8',
      Mortal66: 'u8',
      Mortal67: 'u8',
      Mortal68: 'u8',
      Mortal69: 'u8',
      Mortal70: 'u8',
      Mortal71: 'u8',
      Mortal72: 'u8',
      Mortal73: 'u8',
      Mortal74: 'u8',
      Mortal75: 'u8',
      Mortal76: 'u8',
      Mortal77: 'u8',
      Mortal78: 'u8',
      Mortal79: 'u8',
      Mortal80: 'u8',
      Mortal81: 'u8',
      Mortal82: 'u8',
      Mortal83: 'u8',
      Mortal84: 'u8',
      Mortal85: 'u8',
      Mortal86: 'u8',
      Mortal87: 'u8',
      Mortal88: 'u8',
      Mortal89: 'u8',
      Mortal90: 'u8',
      Mortal91: 'u8',
      Mortal92: 'u8',
      Mortal93: 'u8',
      Mortal94: 'u8',
      Mortal95: 'u8',
      Mortal96: 'u8',
      Mortal97: 'u8',
      Mortal98: 'u8',
      Mortal99: 'u8',
      Mortal100: 'u8',
      Mortal101: 'u8',
      Mortal102: 'u8',
      Mortal103: 'u8',
      Mortal104: 'u8',
      Mortal105: 'u8',
      Mortal106: 'u8',
      Mortal107: 'u8',
      Mortal108: 'u8',
      Mortal109: 'u8',
      Mortal110: 'u8',
      Mortal111: 'u8',
      Mortal112: 'u8',
      Mortal113: 'u8',
      Mortal114: 'u8',
      Mortal115: 'u8',
      Mortal116: 'u8',
      Mortal117: 'u8',
      Mortal118: 'u8',
      Mortal119: 'u8',
      Mortal120: 'u8',
      Mortal121: 'u8',
      Mortal122: 'u8',
      Mortal123: 'u8',
      Mortal124: 'u8',
      Mortal125: 'u8',
      Mortal126: 'u8',
      Mortal127: 'u8',
      Mortal128: 'u8',
      Mortal129: 'u8',
      Mortal130: 'u8',
      Mortal131: 'u8',
      Mortal132: 'u8',
      Mortal133: 'u8',
      Mortal134: 'u8',
      Mortal135: 'u8',
      Mortal136: 'u8',
      Mortal137: 'u8',
      Mortal138: 'u8',
      Mortal139: 'u8',
      Mortal140: 'u8',
      Mortal141: 'u8',
      Mortal142: 'u8',
      Mortal143: 'u8',
      Mortal144: 'u8',
      Mortal145: 'u8',
      Mortal146: 'u8',
      Mortal147: 'u8',
      Mortal148: 'u8',
      Mortal149: 'u8',
      Mortal150: 'u8',
      Mortal151: 'u8',
      Mortal152: 'u8',
      Mortal153: 'u8',
      Mortal154: 'u8',
      Mortal155: 'u8',
      Mortal156: 'u8',
      Mortal157: 'u8',
      Mortal158: 'u8',
      Mortal159: 'u8',
      Mortal160: 'u8',
      Mortal161: 'u8',
      Mortal162: 'u8',
      Mortal163: 'u8',
      Mortal164: 'u8',
      Mortal165: 'u8',
      Mortal166: 'u8',
      Mortal167: 'u8',
      Mortal168: 'u8',
      Mortal169: 'u8',
      Mortal170: 'u8',
      Mortal171: 'u8',
      Mortal172: 'u8',
      Mortal173: 'u8',
      Mortal174: 'u8',
      Mortal175: 'u8',
      Mortal176: 'u8',
      Mortal177: 'u8',
      Mortal178: 'u8',
      Mortal179: 'u8',
      Mortal180: 'u8',
      Mortal181: 'u8',
      Mortal182: 'u8',
      Mortal183: 'u8',
      Mortal184: 'u8',
      Mortal185: 'u8',
      Mortal186: 'u8',
      Mortal187: 'u8',
      Mortal188: 'u8',
      Mortal189: 'u8',
      Mortal190: 'u8',
      Mortal191: 'u8',
      Mortal192: 'u8',
      Mortal193: 'u8',
      Mortal194: 'u8',
      Mortal195: 'u8',
      Mortal196: 'u8',
      Mortal197: 'u8',
      Mortal198: 'u8',
      Mortal199: 'u8',
      Mortal200: 'u8',
      Mortal201: 'u8',
      Mortal202: 'u8',
      Mortal203: 'u8',
      Mortal204: 'u8',
      Mortal205: 'u8',
      Mortal206: 'u8',
      Mortal207: 'u8',
      Mortal208: 'u8',
      Mortal209: 'u8',
      Mortal210: 'u8',
      Mortal211: 'u8',
      Mortal212: 'u8',
      Mortal213: 'u8',
      Mortal214: 'u8',
      Mortal215: 'u8',
      Mortal216: 'u8',
      Mortal217: 'u8',
      Mortal218: 'u8',
      Mortal219: 'u8',
      Mortal220: 'u8',
      Mortal221: 'u8',
      Mortal222: 'u8',
      Mortal223: 'u8',
      Mortal224: 'u8',
      Mortal225: 'u8',
      Mortal226: 'u8',
      Mortal227: 'u8',
      Mortal228: 'u8',
      Mortal229: 'u8',
      Mortal230: 'u8',
      Mortal231: 'u8',
      Mortal232: 'u8',
      Mortal233: 'u8',
      Mortal234: 'u8',
      Mortal235: 'u8',
      Mortal236: 'u8',
      Mortal237: 'u8',
      Mortal238: 'u8',
      Mortal239: 'u8',
      Mortal240: 'u8',
      Mortal241: 'u8',
      Mortal242: 'u8',
      Mortal243: 'u8',
      Mortal244: 'u8',
      Mortal245: 'u8',
      Mortal246: 'u8',
      Mortal247: 'u8',
      Mortal248: 'u8',
      Mortal249: 'u8',
      Mortal250: 'u8',
      Mortal251: 'u8',
      Mortal252: 'u8',
      Mortal253: 'u8',
      Mortal254: 'u8',
      Mortal255: 'u8'
    }
  },
  /**
   * Lookup491: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  PezframeSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup492: frame_metadata_hash_extension::CheckMetadataHash<T>
   **/
  PezframeMetadataHashExtensionCheckMetadataHash: {
    mode: 'PezframeMetadataHashExtensionMode'
  },
  /**
   * Lookup493: frame_metadata_hash_extension::Mode
   **/
  PezframeMetadataHashExtensionMode: {
    _enum: ['Disabled', 'Enabled']
  },
  /**
   * Lookup494: sp_runtime::traits::BlakeTwo256
   **/
  PezspRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup495: pallet_conviction_voting::types::Tally<Votes, Total>
   **/
  PezpalletConvictionVotingTally: {
    ayes: 'u128',
    nays: 'u128',
    support: 'u128'
  },
  /**
   * Lookup496: pallet_remark::pallet::Event<T>
   **/
  PezpalletRemarkEvent: {
    _enum: {
      Stored: {
        sender: 'PezspCoreCryptoAccountId32',
        contentHash: 'H256'
      }
    }
  },
  /**
   * Lookup497: pallet_root_testing::pallet::Event<T>
   **/
  PezpalletRootTestingEvent: {
    _enum: ['DefensiveTestCall']
  },
  /**
   * Lookup498: pallet_conviction_voting::pallet::Event<T, I>
   **/
  PezpalletConvictionVotingEvent: {
    _enum: {
      Delegated: '(PezspCoreCryptoAccountId32,PezspCoreCryptoAccountId32)',
      Undelegated: 'PezspCoreCryptoAccountId32',
      Voted: {
        who: 'PezspCoreCryptoAccountId32',
        vote: 'PezpalletConvictionVotingVoteAccountVote',
      },
      VoteRemoved: {
        who: 'PezspCoreCryptoAccountId32',
        vote: 'PezpalletConvictionVotingVoteAccountVote',
      },
      VoteUnlocked: {
        who: 'PezspCoreCryptoAccountId32',
        class: 'u16'
      }
    }
  },
  /**
   * Lookup499: pallet_whitelist::pallet::Event<T>
   **/
  PezpalletWhitelistEvent: {
    _enum: {
      CallWhitelisted: {
        callHash: 'H256',
      },
      WhitelistedCallRemoved: {
        callHash: 'H256',
      },
      WhitelistedCallDispatched: {
        callHash: 'H256',
        result: 'Result<PezframeSupportDispatchPostDispatchInfo, PezspRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup501: frame_support::dispatch::PostDispatchInfo
   **/
  PezframeSupportDispatchPostDispatchInfo: {
    actualWeight: 'Option<PezspWeightsWeightV2Weight>',
    paysFee: 'PezframeSupportDispatchPays'
  },
  /**
   * Lookup503: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
   **/
  PezspRuntimeDispatchErrorWithPostInfo: {
    postInfo: 'PezframeSupportDispatchPostDispatchInfo',
    error: 'PezspRuntimeDispatchError'
  },
  /**
   * Lookup505: pallet_alliance::pallet::Event<T, I>
   **/
  PezpalletAllianceEvent: {
    _enum: {
      NewRuleSet: {
        rule: 'PezpalletAllianceCid',
      },
      Announced: {
        announcement: 'PezpalletAllianceCid',
      },
      AnnouncementRemoved: {
        announcement: 'PezpalletAllianceCid',
      },
      MembersInitialized: {
        fellows: 'Vec<PezspCoreCryptoAccountId32>',
        allies: 'Vec<PezspCoreCryptoAccountId32>',
      },
      NewAllyJoined: {
        ally: 'PezspCoreCryptoAccountId32',
        nominator: 'Option<PezspCoreCryptoAccountId32>',
        reserved: 'Option<u128>',
      },
      AllyElevated: {
        ally: 'PezspCoreCryptoAccountId32',
      },
      MemberRetirementPeriodStarted: {
        member: 'PezspCoreCryptoAccountId32',
      },
      MemberRetired: {
        member: 'PezspCoreCryptoAccountId32',
        unreserved: 'Option<u128>',
      },
      MemberKicked: {
        member: 'PezspCoreCryptoAccountId32',
        slashed: 'Option<u128>',
      },
      UnscrupulousItemAdded: {
        items: 'Vec<PezpalletAllianceUnscrupulousItem>',
      },
      UnscrupulousItemRemoved: {
        items: 'Vec<PezpalletAllianceUnscrupulousItem>',
      },
      AllianceDisbanded: {
        fellowMembers: 'u32',
        allyMembers: 'u32',
        unreserved: 'u32',
      },
      FellowAbdicated: {
        fellow: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup506: pallet_nomination_pools::pallet::Event<T>
   **/
  PezpalletNominationPoolsEvent: {
    _enum: {
      Created: {
        depositor: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
      },
      Bonded: {
        member: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        bonded: 'u128',
        joined: 'bool',
      },
      PaidOut: {
        member: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        payout: 'u128',
      },
      Unbonded: {
        member: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
        era: 'u32',
      },
      Withdrawn: {
        member: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
      },
      Destroyed: {
        poolId: 'u32',
      },
      StateChanged: {
        poolId: 'u32',
        newState: 'PezpalletNominationPoolsPoolState',
      },
      MemberRemoved: {
        poolId: 'u32',
        member: 'PezspCoreCryptoAccountId32',
        releasedBalance: 'u128',
      },
      RolesUpdated: {
        root: 'Option<PezspCoreCryptoAccountId32>',
        bouncer: 'Option<PezspCoreCryptoAccountId32>',
        nominator: 'Option<PezspCoreCryptoAccountId32>',
      },
      PoolSlashed: {
        poolId: 'u32',
        balance: 'u128',
      },
      UnbondingPoolSlashed: {
        poolId: 'u32',
        era: 'u32',
        balance: 'u128',
      },
      PoolCommissionUpdated: {
        poolId: 'u32',
        current: 'Option<(u32,PezspCoreCryptoAccountId32)>',
      },
      PoolMaxCommissionUpdated: {
        poolId: 'u32',
        maxCommission: 'u32',
      },
      PoolCommissionChangeRateUpdated: {
        poolId: 'u32',
        changeRate: 'PezpalletNominationPoolsCommissionChangeRate',
      },
      PoolCommissionClaimPermissionUpdated: {
        poolId: 'u32',
        permission: 'Option<PezpalletNominationPoolsCommissionClaimPermission>',
      },
      PoolCommissionClaimed: {
        poolId: 'u32',
        commission: 'u128',
      },
      MinBalanceDeficitAdjusted: {
        poolId: 'u32',
        amount: 'u128',
      },
      MinBalanceExcessAdjusted: {
        poolId: 'u32',
        amount: 'u128',
      },
      MemberClaimPermissionUpdated: {
        member: 'PezspCoreCryptoAccountId32',
        permission: 'PezpalletNominationPoolsClaimPermission',
      },
      MetadataUpdated: {
        poolId: 'u32',
        caller: 'PezspCoreCryptoAccountId32',
      },
      PoolNominationMade: {
        poolId: 'u32',
        caller: 'PezspCoreCryptoAccountId32',
      },
      PoolNominatorChilled: {
        poolId: 'u32',
        caller: 'PezspCoreCryptoAccountId32',
      },
      GlobalParamsUpdated: {
        minJoinBond: 'u128',
        minCreateBond: 'u128',
        maxPools: 'Option<u32>',
        maxMembers: 'Option<u32>',
        maxMembersPerPool: 'Option<u32>',
        globalMaxCommission: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup509: pallet_ranked_collective::Tally<T, I, M>
   **/
  PezpalletRankedCollectiveTally: {
    bareAyes: 'u32',
    ayes: 'u32',
    nays: 'u32'
  },
  /**
   * Lookup510: pallet_ranked_collective::pallet::Event<T, I>
   **/
  PezpalletRankedCollectiveEvent: {
    _enum: {
      MemberAdded: {
        who: 'PezspCoreCryptoAccountId32',
      },
      RankChanged: {
        who: 'PezspCoreCryptoAccountId32',
        rank: 'u16',
      },
      MemberRemoved: {
        who: 'PezspCoreCryptoAccountId32',
        rank: 'u16',
      },
      Voted: {
        who: 'PezspCoreCryptoAccountId32',
        poll: 'u32',
        vote: 'PezpalletRankedCollectiveVoteRecord',
        tally: 'PezpalletRankedCollectiveTally',
      },
      MemberExchanged: {
        who: 'PezspCoreCryptoAccountId32',
        newWho: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup511: pallet_ranked_collective::VoteRecord
   **/
  PezpalletRankedCollectiveVoteRecord: {
    _enum: {
      Aye: 'u32',
      Nay: 'u32'
    }
  },
  /**
   * Lookup512: pallet_asset_conversion::pallet::Event<T>
   **/
  PezpalletAssetConversionEvent: {
    _enum: {
      PoolCreated: {
        creator: 'PezspCoreCryptoAccountId32',
        poolId: '(PezframeSupportTokensFungibleUnionOfNativeOrWithId,PezframeSupportTokensFungibleUnionOfNativeOrWithId)',
        poolAccount: 'PezspCoreCryptoAccountId32',
        lpToken: 'u32',
      },
      LiquidityAdded: {
        who: 'PezspCoreCryptoAccountId32',
        mintTo: 'PezspCoreCryptoAccountId32',
        poolId: '(PezframeSupportTokensFungibleUnionOfNativeOrWithId,PezframeSupportTokensFungibleUnionOfNativeOrWithId)',
        amount1Provided: 'u128',
        amount2Provided: 'u128',
        lpToken: 'u32',
        lpTokenMinted: 'u128',
      },
      LiquidityRemoved: {
        who: 'PezspCoreCryptoAccountId32',
        withdrawTo: 'PezspCoreCryptoAccountId32',
        poolId: '(PezframeSupportTokensFungibleUnionOfNativeOrWithId,PezframeSupportTokensFungibleUnionOfNativeOrWithId)',
        amount1: 'u128',
        amount2: 'u128',
        lpToken: 'u32',
        lpTokenBurned: 'u128',
        withdrawalFee: 'u32',
      },
      SwapExecuted: {
        who: 'PezspCoreCryptoAccountId32',
        sendTo: 'PezspCoreCryptoAccountId32',
        amountIn: 'u128',
        amountOut: 'u128',
        path: 'Vec<(PezframeSupportTokensFungibleUnionOfNativeOrWithId,u128)>',
      },
      SwapCreditExecuted: {
        amountIn: 'u128',
        amountOut: 'u128',
        path: 'Vec<(PezframeSupportTokensFungibleUnionOfNativeOrWithId,u128)>',
      },
      Touched: {
        poolId: '(PezframeSupportTokensFungibleUnionOfNativeOrWithId,PezframeSupportTokensFungibleUnionOfNativeOrWithId)',
        who: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup517: pallet_fast_unstake::pallet::Event<T>
   **/
  PezpalletFastUnstakeEvent: {
    _enum: {
      Unstaked: {
        stash: 'PezspCoreCryptoAccountId32',
        result: 'Result<Null, PezspRuntimeDispatchError>',
      },
      Slashed: {
        stash: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      BatchChecked: {
        eras: 'Vec<u32>',
      },
      BatchFinished: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      InternalError: 'Null'
    }
  },
  /**
   * Lookup518: pallet_message_queue::pallet::Event<T>
   **/
  PezpalletMessageQueueEvent: {
    _enum: {
      ProcessingFailed: {
        id: 'H256',
        origin: 'u32',
        error: 'PezframeSupportMessagesProcessMessageError',
      },
      Processed: {
        id: 'H256',
        origin: 'u32',
        weightUsed: 'PezspWeightsWeightV2Weight',
        success: 'bool',
      },
      OverweightEnqueued: {
        id: '[u8;32]',
        origin: 'u32',
        pageIndex: 'u32',
        messageIndex: 'u32',
      },
      PageReaped: {
        origin: 'u32',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup519: frame_support::traits::messages::ProcessMessageError
   **/
  PezframeSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: 'Null',
      Corrupt: 'Null',
      Unsupported: 'Null',
      Overweight: 'PezspWeightsWeightV2Weight',
      Yield: 'Null',
      StackLimitReached: 'Null'
    }
  },
  /**
   * Lookup520: frame_benchmarking_pallet_pov::pallet::Event<T>
   **/
  PezframeBenchmarkingPezpalletPovEvent: {
    _enum: ['TestEvent']
  },
  /**
   * Lookup521: pallet_tx_pause::pallet::Event<T>
   **/
  PezpalletTxPauseEvent: {
    _enum: {
      CallPaused: {
        fullName: '(Bytes,Bytes)',
      },
      CallUnpaused: {
        fullName: '(Bytes,Bytes)'
      }
    }
  },
  /**
   * Lookup522: pallet_safe_mode::pallet::Event<T>
   **/
  PezpalletSafeModeEvent: {
    _enum: {
      Entered: {
        until: 'u32',
      },
      Extended: {
        until: 'u32',
      },
      Exited: {
        reason: 'PezpalletSafeModeExitReason',
      },
      DepositPlaced: {
        account: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      DepositReleased: {
        account: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        account: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      CannotDeposit: 'Null',
      CannotRelease: 'Null'
    }
  },
  /**
   * Lookup523: pallet_safe_mode::pallet::ExitReason
   **/
  PezpalletSafeModeExitReason: {
    _enum: ['Timeout', 'Force']
  },
  /**
   * Lookup524: pallet_statement::pallet::Event<T>
   **/
  PezpalletStatementEvent: {
    _enum: {
      NewStatement: {
        account: 'PezspCoreCryptoAccountId32',
        statement: 'PezspStatementStoreStatement'
      }
    }
  },
  /**
   * Lookup525: sp_statement_store::Statement
   **/
  PezspStatementStoreStatement: {
    proof: 'Option<PezspStatementStoreProof>',
    decryptionKey: 'Option<[u8;32]>',
    channel: 'Option<[u8;32]>',
    priority: 'Option<u32>',
    numTopics: 'u8',
    topics: '[[u8;32];4]',
    data: 'Option<Bytes>'
  },
  /**
   * Lookup527: sp_statement_store::Proof
   **/
  PezspStatementStoreProof: {
    _enum: {
      Sr25519: {
        signature: '[u8;64]',
        signer: '[u8;32]',
      },
      Ed25519: {
        signature: '[u8;64]',
        signer: '[u8;32]',
      },
      Secp256k1Ecdsa: {
        signature: '[u8;65]',
        signer: '[u8;33]',
      },
      OnChain: {
        who: '[u8;32]',
        blockHash: '[u8;32]',
        eventIndex: 'u64'
      }
    }
  },
  /**
   * Lookup529: pallet_migrations::pallet::Event<T>
   **/
  PezpalletMigrationsEvent: {
    _enum: {
      UpgradeStarted: {
        migrations: 'u32',
      },
      UpgradeCompleted: 'Null',
      UpgradeFailed: 'Null',
      MigrationSkipped: {
        index: 'u32',
      },
      MigrationAdvanced: {
        index: 'u32',
        took: 'u32',
      },
      MigrationCompleted: {
        index: 'u32',
        took: 'u32',
      },
      MigrationFailed: {
        index: 'u32',
        took: 'u32',
      },
      HistoricCleared: {
        nextCursor: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup530: pallet_broker::pallet::Event<T>
   **/
  PezpalletBrokerEvent: {
    _enum: {
      Purchased: {
        who: 'PezspCoreCryptoAccountId32',
        regionId: 'PezpalletBrokerRegionId',
        price: 'u128',
        duration: 'u32',
      },
      Renewable: {
        core: 'u16',
        price: 'u128',
        begin: 'u32',
        workload: 'Vec<PezpalletBrokerScheduleItem>',
      },
      Renewed: {
        who: 'PezspCoreCryptoAccountId32',
        price: 'u128',
        oldCore: 'u16',
        core: 'u16',
        begin: 'u32',
        duration: 'u32',
        workload: 'Vec<PezpalletBrokerScheduleItem>',
      },
      Transferred: {
        regionId: 'PezpalletBrokerRegionId',
        duration: 'u32',
        oldOwner: 'Option<PezspCoreCryptoAccountId32>',
        owner: 'Option<PezspCoreCryptoAccountId32>',
      },
      Partitioned: {
        oldRegionId: 'PezpalletBrokerRegionId',
        newRegionIds: '(PezpalletBrokerRegionId,PezpalletBrokerRegionId)',
      },
      Interlaced: {
        oldRegionId: 'PezpalletBrokerRegionId',
        newRegionIds: '(PezpalletBrokerRegionId,PezpalletBrokerRegionId)',
      },
      Assigned: {
        regionId: 'PezpalletBrokerRegionId',
        duration: 'u32',
        task: 'u32',
      },
      AssignmentRemoved: {
        regionId: 'PezpalletBrokerRegionId',
      },
      Pooled: {
        regionId: 'PezpalletBrokerRegionId',
        duration: 'u32',
      },
      CoreCountRequested: {
        coreCount: 'u16',
      },
      CoreCountChanged: {
        coreCount: 'u16',
      },
      ReservationMade: {
        index: 'u32',
        workload: 'Vec<PezpalletBrokerScheduleItem>',
      },
      ReservationCancelled: {
        index: 'u32',
        workload: 'Vec<PezpalletBrokerScheduleItem>',
      },
      SaleInitialized: {
        saleStart: 'u32',
        leadinLength: 'u32',
        startPrice: 'u128',
        endPrice: 'u128',
        regionBegin: 'u32',
        regionEnd: 'u32',
        idealCoresSold: 'u16',
        coresOffered: 'u16',
      },
      Leased: {
        task: 'u32',
        until: 'u32',
      },
      LeaseRemoved: {
        task: 'u32',
      },
      LeaseEnding: {
        task: 'u32',
        when: 'u32',
      },
      SalesStarted: {
        price: 'u128',
        coreCount: 'u16',
      },
      RevenueClaimBegun: {
        region: 'PezpalletBrokerRegionId',
        maxTimeslices: 'u32',
      },
      RevenueClaimItem: {
        when: 'u32',
        amount: 'u128',
      },
      RevenueClaimPaid: {
        who: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
        next: 'Option<PezpalletBrokerRegionId>',
      },
      CreditPurchased: {
        who: 'PezspCoreCryptoAccountId32',
        beneficiary: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      RegionDropped: {
        regionId: 'PezpalletBrokerRegionId',
        duration: 'u32',
      },
      ContributionDropped: {
        regionId: 'PezpalletBrokerRegionId',
      },
      HistoryInitialized: {
        when: 'u32',
        privatePoolSize: 'u32',
        systemPoolSize: 'u32',
      },
      HistoryDropped: {
        when: 'u32',
        revenue: 'u128',
      },
      HistoryIgnored: {
        when: 'u32',
        revenue: 'u128',
      },
      ClaimsReady: {
        when: 'u32',
        systemPayout: 'u128',
        privatePayout: 'u128',
      },
      CoreAssigned: {
        core: 'u16',
        when: 'u32',
        assignment: 'Vec<(PezpalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
      },
      PotentialRenewalDropped: {
        when: 'u32',
        core: 'u16',
      },
      AutoRenewalEnabled: {
        core: 'u16',
        task: 'u32',
      },
      AutoRenewalDisabled: {
        core: 'u16',
        task: 'u32',
      },
      AutoRenewalFailed: {
        core: 'u16',
        payer: 'Option<PezspCoreCryptoAccountId32>',
      },
      AutoRenewalLimitReached: 'Null'
    }
  },
  /**
   * Lookup535: pallet_parameters::pallet::Event<T>
   **/
  PezpalletParametersEvent: {
    _enum: {
      Updated: {
        key: 'KitchensinkRuntimeRuntimeParametersKey',
        oldValue: 'Option<KitchensinkRuntimeRuntimeParametersValue>',
        newValue: 'Option<KitchensinkRuntimeRuntimeParametersValue>'
      }
    }
  },
  /**
   * Lookup536: kitchensink_runtime::RuntimeParametersKey
   **/
  KitchensinkRuntimeRuntimeParametersKey: {
    _enum: {
      Storage: 'KitchensinkRuntimeDynamicParamsStorageParametersKey',
      Referenda: 'KitchensinkRuntimeDynamicParamsReferendaParametersKey'
    }
  },
  /**
   * Lookup537: kitchensink_runtime::dynamic_params::storage::ParametersKey
   **/
  KitchensinkRuntimeDynamicParamsStorageParametersKey: {
    _enum: ['BaseDeposit', 'ByteDeposit']
  },
  /**
   * Lookup538: kitchensink_runtime::dynamic_params::referenda::ParametersKey
   **/
  KitchensinkRuntimeDynamicParamsReferendaParametersKey: {
    _enum: ['Tracks', 'Origins']
  },
  /**
   * Lookup540: kitchensink_runtime::RuntimeParametersValue
   **/
  KitchensinkRuntimeRuntimeParametersValue: {
    _enum: {
      Storage: 'KitchensinkRuntimeDynamicParamsStorageParametersValue',
      Referenda: 'KitchensinkRuntimeDynamicParamsReferendaParametersValue'
    }
  },
  /**
   * Lookup541: kitchensink_runtime::dynamic_params::storage::ParametersValue
   **/
  KitchensinkRuntimeDynamicParamsStorageParametersValue: {
    _enum: {
      BaseDeposit: 'u128',
      ByteDeposit: 'u128'
    }
  },
  /**
   * Lookup542: kitchensink_runtime::dynamic_params::referenda::ParametersValue
   **/
  KitchensinkRuntimeDynamicParamsReferendaParametersValue: {
    _enum: {
      Tracks: 'Vec<PezpalletReferendaTrack>',
      Origins: 'Vec<(KitchensinkRuntimeOriginCaller,u16)>'
    }
  },
  /**
   * Lookup543: pallet_skip_feeless_payment::pallet::Event<T>
   **/
  PezpalletSkipFeelessPaymentEvent: {
    _enum: {
      FeeSkipped: {
        origin: 'KitchensinkRuntimeOriginCaller'
      }
    }
  },
  /**
   * Lookup544: pallet_asset_conversion_ops::pallet::Event<T>
   **/
  PezpalletAssetConversionOpsEvent: {
    _enum: {
      MigratedToNewAccount: {
        poolId: '(PezframeSupportTokensFungibleUnionOfNativeOrWithId,PezframeSupportTokensFungibleUnionOfNativeOrWithId)',
        priorAccount: 'PezspCoreCryptoAccountId32',
        newAccount: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup545: pallet_revive::pallet::Event<T>
   **/
  PezpalletReviveEvent: {
    _enum: {
      ContractEmitted: {
        contract: 'H160',
        data: 'Bytes',
        topics: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup546: pallet_delegated_staking::pallet::Event<T>
   **/
  PezpalletDelegatedStakingEvent: {
    _enum: {
      Delegated: {
        agent: 'PezspCoreCryptoAccountId32',
        delegator: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Released: {
        agent: 'PezspCoreCryptoAccountId32',
        delegator: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      Slashed: {
        agent: 'PezspCoreCryptoAccountId32',
        delegator: 'PezspCoreCryptoAccountId32',
        amount: 'u128',
      },
      MigratedDelegation: {
        agent: 'PezspCoreCryptoAccountId32',
        delegator: 'PezspCoreCryptoAccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup547: pallet_asset_rewards::pallet::Event<T>
   **/
  PezpalletAssetRewardsEvent: {
    _enum: {
      Staked: {
        staker: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      Unstaked: {
        caller: 'PezspCoreCryptoAccountId32',
        staker: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      RewardsHarvested: {
        caller: 'PezspCoreCryptoAccountId32',
        staker: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      PoolCreated: {
        creator: 'PezspCoreCryptoAccountId32',
        poolId: 'u32',
        stakedAssetId: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        rewardAssetId: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
        rewardRatePerBlock: 'u128',
        expiryBlock: 'u32',
        admin: 'PezspCoreCryptoAccountId32',
      },
      PoolRewardRateModified: {
        poolId: 'u32',
        newRewardRatePerBlock: 'u128',
      },
      PoolAdminModified: {
        poolId: 'u32',
        newAdmin: 'PezspCoreCryptoAccountId32',
      },
      PoolExpiryBlockModified: {
        poolId: 'u32',
        newExpiryBlock: 'u32',
      },
      PoolCleanedUp: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup548: pallet_assets_freezer::pallet::Event<T, I>
   **/
  PezpalletAssetsFreezerEvent: {
    _enum: {
      Frozen: {
        who: 'PezspCoreCryptoAccountId32',
        assetId: 'u32',
        amount: 'u128',
      },
      Thawed: {
        who: 'PezspCoreCryptoAccountId32',
        assetId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup549: pallet_meta_tx::pallet::Event<T>
   **/
  PezpalletMetaTxEvent: {
    _enum: {
      Dispatched: {
        result: 'Result<PezframeSupportDispatchPostDispatchInfo, PezspRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup550: frame_system::Phase
   **/
  PezframeSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup552: frame_system::LastRuntimeUpgradeInfo
   **/
  PezframeSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup555: frame_system::CodeUpgradeAuthorization<T>
   **/
  PezframeSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup556: frame_system::limits::BlockWeights
   **/
  PezframeSystemLimitsBlockWeights: {
    baseBlock: 'PezspWeightsWeightV2Weight',
    maxBlock: 'PezspWeightsWeightV2Weight',
    perClass: 'PezframeSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup557: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  PezframeSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'PezframeSystemLimitsWeightsPerClass',
    operational: 'PezframeSystemLimitsWeightsPerClass',
    mandatory: 'PezframeSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup558: frame_system::limits::WeightsPerClass
   **/
  PezframeSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'PezspWeightsWeightV2Weight',
    maxExtrinsic: 'Option<PezspWeightsWeightV2Weight>',
    maxTotal: 'Option<PezspWeightsWeightV2Weight>',
    reserved: 'Option<PezspWeightsWeightV2Weight>'
  },
  /**
   * Lookup559: frame_system::limits::BlockLength
   **/
  PezframeSystemLimitsBlockLength: {
    max: 'PezframeSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup560: frame_support::dispatch::PerDispatchClass<T>
   **/
  PezframeSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup561: sp_weights::RuntimeDbWeight
   **/
  PezspWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup562: sp_version::RuntimeVersion
   **/
  PezspVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    systemVersion: 'u8'
  },
  /**
   * Lookup566: frame_system::pallet::Error<T>
   **/
  PezframeSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'MultiBlockMigrationsOngoing', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup567: pallet_utility::pallet::Error<T>
   **/
  PezpalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup574: sp_consensus_babe::digests::PreDigest
   **/
  PezspConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'PezspConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'PezspConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'PezspConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup575: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  PezspConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'PezspCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup576: sp_core::sr25519::vrf::VrfSignature
   **/
  PezspCoreSr25519VrfVrfSignature: {
    preOutput: '[u8;32]',
    proof: '[u8;64]'
  },
  /**
   * Lookup577: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  PezspConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup578: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  PezspConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'PezspCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup579: sp_consensus_babe::BabeEpochConfiguration
   **/
  PezspConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'PezspConsensusBabeAllowedSlots'
  },
  /**
   * Lookup583: pallet_babe::pallet::Error<T>
   **/
  PezpalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup585: pallet_indices::pallet::Error<T>
   **/
  PezpalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup587: pallet_balances::types::BalanceLock<Balance>
   **/
  PezpalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PezpalletBalancesReasons'
  },
  /**
   * Lookup588: pallet_balances::types::Reasons
   **/
  PezpalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup591: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PezpalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup594: frame_support::traits::tokens::misc::IdAmount<kitchensink_runtime::RuntimeHoldReason, Balance>
   **/
  PezframeSupportTokensMiscIdAmountRuntimeHoldReason: {
    id: 'KitchensinkRuntimeRuntimeHoldReason',
    amount: 'u128'
  },
  /**
   * Lookup595: kitchensink_runtime::RuntimeHoldReason
   **/
  KitchensinkRuntimeRuntimeHoldReason: {
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
      Staking: 'PezpalletStakingPezpalletHoldReason',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Council: 'PezpalletCollectiveHoldReason',
      TechnicalCommittee: 'PezpalletCollectiveHoldReason',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      Contracts: 'PezpalletContractsHoldReason',
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
      Preimage: 'PezpalletPreimageHoldReason',
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
      Nis: 'PezpalletNisHoldReason',
      __Unused46: 'Null',
      __Unused47: 'Null',
      NftFractionalization: 'PezpalletNftFractionalizationHoldReason',
      __Unused49: 'Null',
      __Unused50: 'Null',
      TransactionStorage: 'PezpalletTransactionStorageHoldReason',
      __Unused52: 'Null',
      StateTrieMigration: 'PezpalletStateTrieMigrationHoldReason',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      AllianceMotion: 'PezpalletCollectiveHoldReason',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      SafeMode: 'PezpalletSafeModeHoldReason',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      Revive: 'PezpalletReviveHoldReason',
      __Unused81: 'Null',
      DelegatedStaking: 'PezpalletDelegatedStakingHoldReason',
      AssetRewards: 'PezpalletAssetRewardsHoldReason'
    }
  },
  /**
   * Lookup596: pallet_staking::pallet::pallet::HoldReason
   **/
  PezpalletStakingPezpalletHoldReason: {
    _enum: ['Staking']
  },
  /**
   * Lookup597: pallet_collective::pallet::HoldReason<I>
   **/
  PezpalletCollectiveHoldReason: {
    _enum: ['ProposalSubmission']
  },
  /**
   * Lookup599: pallet_contracts::pallet::HoldReason
   **/
  PezpalletContractsHoldReason: {
    _enum: ['CodeUploadDepositReserve', 'StorageDepositReserve']
  },
  /**
   * Lookup600: pallet_preimage::pallet::HoldReason
   **/
  PezpalletPreimageHoldReason: {
    _enum: ['Preimage']
  },
  /**
   * Lookup601: pallet_nis::pallet::HoldReason
   **/
  PezpalletNisHoldReason: {
    _enum: ['NftReceipt']
  },
  /**
   * Lookup602: pallet_nft_fractionalization::pallet::HoldReason
   **/
  PezpalletNftFractionalizationHoldReason: {
    _enum: ['Fractionalized']
  },
  /**
   * Lookup603: pallet_transaction_storage::pallet::HoldReason
   **/
  PezpalletTransactionStorageHoldReason: {
    _enum: ['StorageFeeHold']
  },
  /**
   * Lookup604: pallet_state_trie_migration::pallet::HoldReason
   **/
  PezpalletStateTrieMigrationHoldReason: {
    _enum: ['SlashForMigrate']
  },
  /**
   * Lookup606: pallet_safe_mode::pallet::HoldReason
   **/
  PezpalletSafeModeHoldReason: {
    _enum: ['EnterOrExtend']
  },
  /**
   * Lookup607: pallet_revive::pallet::HoldReason
   **/
  PezpalletReviveHoldReason: {
    _enum: ['CodeUploadDepositReserve', 'StorageDepositReserve', 'AddressMapping']
  },
  /**
   * Lookup608: pallet_delegated_staking::pallet::HoldReason
   **/
  PezpalletDelegatedStakingHoldReason: {
    _enum: ['StakingDelegation']
  },
  /**
   * Lookup609: pallet_asset_rewards::pallet::HoldReason
   **/
  PezpalletAssetRewardsHoldReason: {
    _enum: ['PoolCreation']
  },
  /**
   * Lookup612: frame_support::traits::tokens::misc::IdAmount<kitchensink_runtime::RuntimeFreezeReason, Balance>
   **/
  PezframeSupportTokensMiscIdAmountRuntimeFreezeReason: {
    id: 'KitchensinkRuntimeRuntimeFreezeReason',
    amount: 'u128'
  },
  /**
   * Lookup613: kitchensink_runtime::RuntimeFreezeReason
   **/
  KitchensinkRuntimeRuntimeFreezeReason: {
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
      NominationPools: 'PezpalletNominationPoolsFreezeReason',
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
      AssetRewards: 'PezpalletAssetRewardsFreezeReason'
    }
  },
  /**
   * Lookup614: pallet_nomination_pools::pallet::FreezeReason
   **/
  PezpalletNominationPoolsFreezeReason: {
    _enum: ['PoolMinBalance']
  },
  /**
   * Lookup615: pallet_asset_rewards::pallet::FreezeReason
   **/
  PezpalletAssetRewardsFreezeReason: {
    _enum: ['Staked']
  },
  /**
   * Lookup617: pallet_balances::pallet::Error<T, I>
   **/
  PezpalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes', 'IssuanceDeactivated', 'DeltaZero']
  },
  /**
   * Lookup618: pallet_transaction_payment::Releases
   **/
  PezpalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup619: pallet_election_provider_multi_phase::ReadySolution<AccountId, MaxWinners>
   **/
  PezpalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(PezspCoreCryptoAccountId32,PezspNposElectionsSupport)>',
    score: 'PezspNposElectionsElectionScore',
    compute: 'PezpalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup621: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32, VoterType>
   **/
  PezpalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(PezspCoreCryptoAccountId32,u64,Vec<PezspCoreCryptoAccountId32>)>',
    targets: 'Vec<PezspCoreCryptoAccountId32>'
  },
  /**
   * Lookup628: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, kitchensink_runtime::NposSolution16>
   **/
  PezpalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'PezspCoreCryptoAccountId32',
    deposit: 'u128',
    rawSolution: 'PezpalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup629: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PezpalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed', 'BoundNotMet', 'TooManyWinners', 'PreDispatchDifferentRound']
  },
  /**
   * Lookup630: pallet_staking::StakingLedger<T>
   **/
  PezpalletStakingStakingLedger: {
    stash: 'PezspCoreCryptoAccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PezpalletStakingUnlockChunk>',
    legacyClaimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup632: pallet_staking::Nominations<T>
   **/
  PezpalletStakingNominations: {
    targets: 'Vec<PezspCoreCryptoAccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup633: pallet_staking::ActiveEraInfo
   **/
  PezpalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup636: sp_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PezspStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PezspStakingIndividualExposure>'
  },
  /**
   * Lookup638: sp_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PezspStakingIndividualExposure: {
    who: 'PezspCoreCryptoAccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup639: sp_staking::PagedExposureMetadata<Balance>
   **/
  PezspStakingPagedExposureMetadata: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    nominatorCount: 'u32',
    pageCount: 'u32'
  },
  /**
   * Lookup641: sp_staking::ExposurePage<sp_core::crypto::AccountId32, Balance>
   **/
  PezspStakingExposurePage: {
    pageTotal: 'Compact<u128>',
    others: 'Vec<PezspStakingIndividualExposure>'
  },
  /**
   * Lookup642: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PezpalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<PezspCoreCryptoAccountId32, u32>'
  },
  /**
   * Lookup647: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletStakingUnappliedSlash: {
    validator: 'PezspCoreCryptoAccountId32',
    own: 'u128',
    others: 'Vec<(PezspCoreCryptoAccountId32,u128)>',
    reporters: 'Vec<PezspCoreCryptoAccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup649: pallet_staking::slashing::SlashingSpans
   **/
  PezpalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup650: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PezpalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup651: pallet_staking::pallet::pallet::Error<T>
   **/
  PezpalletStakingPezpalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'InvalidPage', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet', 'ControllerDeprecated', 'CannotRestoreLedger', 'RewardDestinationRestricted', 'NotEnoughFunds', 'VirtualStakerNotAllowed', 'CannotReapStash', 'AlreadyMigrated', 'Restricted']
  },
  /**
   * Lookup658: sp_core::crypto::KeyTypeId
   **/
  PezspCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup659: pallet_session::pallet::Error<T>
   **/
  PezpalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup665: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PezpalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PezpalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup666: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PezpalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'PezframeSupportPreimagesBounded',
    threshold: 'PezpalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PezpalletDemocracyTally'
  },
  /**
   * Lookup667: pallet_democracy::types::Tally<Balance>
   **/
  PezpalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup668: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PezpalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PezpalletDemocracyVoteAccountVote)>',
        delegations: 'PezpalletDemocracyDelegations',
        prior: 'PezpalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'PezspCoreCryptoAccountId32',
        conviction: 'PezpalletDemocracyConviction',
        delegations: 'PezpalletDemocracyDelegations',
        prior: 'PezpalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup672: pallet_democracy::types::Delegations<Balance>
   **/
  PezpalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup673: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PezpalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup676: pallet_democracy::pallet::Error<T>
   **/
  PezpalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup680: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PezpalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<PezspCoreCryptoAccountId32>',
    nays: 'Vec<PezspCoreCryptoAccountId32>',
    end: 'u32'
  },
  /**
   * Lookup681: pallet_collective::pallet::Error<T, I>
   **/
  PezpalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember', 'ProposalActive']
  },
  /**
   * Lookup685: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletElectionsPhragmenSeatHolder: {
    who: 'PezspCoreCryptoAccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup686: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletElectionsPhragmenVoter: {
    votes: 'Vec<PezspCoreCryptoAccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup687: pallet_elections_phragmen::pallet::Error<T>
   **/
  PezpalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup689: pallet_membership::pallet::Error<T, I>
   **/
  PezpalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup690: pallet_grandpa::StoredState<N>
   **/
  PezpalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup691: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PezpalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(PezspConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup693: pallet_grandpa::pallet::Error<T>
   **/
  PezpalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup694: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletTreasuryProposal: {
    proposer: 'PezspCoreCryptoAccountId32',
    value: 'u128',
    beneficiary: 'PezspCoreCryptoAccountId32',
    bond: 'u128'
  },
  /**
   * Lookup696: pallet_treasury::SpendStatus<frame_support::traits::tokens::fungible::union_of::NativeOrWithId<AssetId>, AssetBalance, sp_core::crypto::AccountId32, BlockNumber, PaymentId>
   **/
  PezpalletTreasurySpendStatus: {
    assetKind: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
    amount: 'u128',
    beneficiary: 'PezspCoreCryptoAccountId32',
    validFrom: 'u32',
    expireAt: 'u32',
    status: 'PezpalletTreasuryPaymentState'
  },
  /**
   * Lookup697: pallet_treasury::PaymentState<Id>
   **/
  PezpalletTreasuryPaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'Null',
      },
      Failed: 'Null'
    }
  },
  /**
   * Lookup698: frame_support::PalletId
   **/
  PezframeSupportPezpalletId: '[u8;8]',
  /**
   * Lookup699: pallet_treasury::pallet::Error<T, I>
   **/
  PezpalletTreasuryError: {
    _enum: ['InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved', 'FailedToConvertBalance', 'SpendExpired', 'EarlyPayout', 'AlreadyAttempted', 'PayoutError', 'NotAttempted', 'Inconclusive']
  },
  /**
   * Lookup700: pallet_asset_rate::pallet::Error<T>
   **/
  PezpalletAssetRateError: {
    _enum: ['UnknownAssetKind', 'AlreadyExists', 'Overflow']
  },
  /**
   * Lookup702: pallet_contracts::wasm::CodeInfo<T>
   **/
  PezpalletContractsWasmCodeInfo: {
    owner: 'PezspCoreCryptoAccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    determinism: 'PezpalletContractsWasmDeterminism',
    codeLen: 'u32'
  },
  /**
   * Lookup703: pallet_contracts::storage::ContractInfo<T>
   **/
  PezpalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128',
    delegateDependencies: 'BTreeMap<H256, u128>'
  },
  /**
   * Lookup708: pallet_contracts::storage::DeletionQueueManager<T>
   **/
  PezpalletContractsStorageDeletionQueueManager: {
    insertCounter: 'u32',
    deleteCounter: 'u32'
  },
  /**
   * Lookup710: pallet_contracts::schedule::Schedule<T>
   **/
  PezpalletContractsSchedule: {
    limits: 'PezpalletContractsScheduleLimits',
    instructionWeights: 'PezpalletContractsScheduleInstructionWeights'
  },
  /**
   * Lookup711: pallet_contracts::schedule::Limits
   **/
  PezpalletContractsScheduleLimits: {
    eventTopics: 'u32',
    memoryPages: 'u32',
    subjectLen: 'u32',
    payloadLen: 'u32',
    runtimeMemory: 'u32',
    validatorRuntimeMemory: 'u32',
    eventRefTime: 'u64'
  },
  /**
   * Lookup712: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PezpalletContractsScheduleInstructionWeights: {
    base: 'u32'
  },
  /**
   * Lookup713: pallet_contracts::Environment<T>
   **/
  PezpalletContractsEnvironment: {
    _alias: {
      hash_: 'hash'
    },
    accountId: 'PezpalletContractsEnvironmentTypeAccountId32',
    balance: 'PezpalletContractsEnvironmentTypeU128',
    hash_: 'PezpalletContractsEnvironmentTypeH256',
    hasher: 'PezpalletContractsEnvironmentTypeBlakeTwo256',
    timestamp: 'PezpalletContractsEnvironmentTypeU64',
    blockNumber: 'PezpalletContractsEnvironmentTypeU32'
  },
  /**
   * Lookup714: pallet_contracts::EnvironmentType<sp_core::crypto::AccountId32>
   **/
  PezpalletContractsEnvironmentTypeAccountId32: 'Null',
  /**
   * Lookup715: pallet_contracts::EnvironmentType<T>
   **/
  PezpalletContractsEnvironmentTypeU128: 'Null',
  /**
   * Lookup716: pallet_contracts::EnvironmentType<primitive_types::H256>
   **/
  PezpalletContractsEnvironmentTypeH256: 'Null',
  /**
   * Lookup717: pallet_contracts::EnvironmentType<sp_runtime::traits::BlakeTwo256>
   **/
  PezpalletContractsEnvironmentTypeBlakeTwo256: 'Null',
  /**
   * Lookup718: pallet_contracts::EnvironmentType<T>
   **/
  PezpalletContractsEnvironmentTypeU64: 'Null',
  /**
   * Lookup719: pallet_contracts::EnvironmentType<T>
   **/
  PezpalletContractsEnvironmentTypeU32: 'Null',
  /**
   * Lookup721: pallet_contracts::pallet::Error<T>
   **/
  PezpalletContractsError: {
    _enum: ['InvalidSchedule', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'CodeInfoNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'NoChainExtension', 'XCMDecodeFailed', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'StateChangeDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic', 'MigrationInProgress', 'NoMigrationPerformed', 'MaxDelegateDependenciesReached', 'DelegateDependencyNotFound', 'DelegateDependencyAlreadyExists', 'CannotAddSelfAsDelegateDependency', 'OutOfTransientStorage']
  },
  /**
   * Lookup722: pallet_sudo::pallet::Error<T>
   **/
  PezpalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup725: pallet_im_online::pallet::Error<T>
   **/
  PezpalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup728: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  PezspStakingOffenceOffenceDetails: {
    offender: '(PezspCoreCryptoAccountId32,Null)',
    reporters: 'Vec<PezspCoreCryptoAccountId32>'
  },
  /**
   * Lookup732: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::legacy::IdentityInfo<FieldLimit>>
   **/
  PezpalletIdentityRegistration: {
    judgements: 'Vec<(u32,PezpalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PezpalletIdentityLegacyIdentityInfo'
  },
  /**
   * Lookup740: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, IdField>
   **/
  PezpalletIdentityRegistrarInfo: {
    account: 'PezspCoreCryptoAccountId32',
    fee: 'u128',
    fields: 'u64'
  },
  /**
   * Lookup743: pallet_identity::types::AuthorityProperties<sp_core::crypto::AccountId32>
   **/
  PezpalletIdentityAuthorityProperties: {
    accountId: 'PezspCoreCryptoAccountId32',
    allocation: 'u32'
  },
  /**
   * Lookup744: pallet_identity::types::UsernameInformation<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletIdentityUsernameInformation: {
    owner: 'PezspCoreCryptoAccountId32',
    provider: 'PezpalletIdentityProvider'
  },
  /**
   * Lookup745: pallet_identity::types::Provider<Balance>
   **/
  PezpalletIdentityProvider: {
    _enum: {
      Allocation: 'Null',
      AuthorityDeposit: 'u128',
      System: 'Null'
    }
  },
  /**
   * Lookup747: pallet_identity::pallet::Error<T>
   **/
  PezpalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed', 'InvalidSuffix', 'NotUsernameAuthority', 'NoAllocation', 'InvalidSignature', 'RequiresSignature', 'InvalidUsername', 'UsernameTaken', 'NoUsername', 'NotExpired', 'TooEarly', 'NotUnbinding', 'AlreadyUnbinding', 'InsufficientPrivileges']
  },
  /**
   * Lookup748: pallet_society::MemberRecord
   **/
  PezpalletSocietyMemberRecord: {
    rank: 'u32',
    strikes: 'u32',
    vouching: 'Option<PezpalletSocietyVouchingStatus>',
    index: 'u32'
  },
  /**
   * Lookup750: pallet_society::VouchingStatus
   **/
  PezpalletSocietyVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup751: pallet_society::PayoutRecord<Balance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PezpalletSocietyPayoutRecord: {
    paid: 'u128',
    payouts: 'Vec<(u32,u128)>'
  },
  /**
   * Lookup756: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletSocietyBid: {
    who: 'PezspCoreCryptoAccountId32',
    kind: 'PezpalletSocietyBidKind',
    value: 'u128'
  },
  /**
   * Lookup757: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletSocietyBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(PezspCoreCryptoAccountId32,u128)'
    }
  },
  /**
   * Lookup759: pallet_society::Candidacy<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletSocietyCandidacy: {
    round: 'u32',
    kind: 'PezpalletSocietyBidKind',
    bid: 'u128',
    tally: 'PezpalletSocietyTally',
    skepticStruck: 'bool'
  },
  /**
   * Lookup760: pallet_society::Tally
   **/
  PezpalletSocietyTally: {
    approvals: 'u32',
    rejections: 'u32'
  },
  /**
   * Lookup762: pallet_society::Vote
   **/
  PezpalletSocietyVote: {
    approve: 'bool',
    weight: 'u32'
  },
  /**
   * Lookup764: pallet_society::IntakeRecord<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletSocietyIntakeRecord: {
    who: 'PezspCoreCryptoAccountId32',
    bid: 'u128',
    round: 'u32'
  },
  /**
   * Lookup766: pallet_society::pallet::Error<T, I>
   **/
  PezpalletSocietyError: {
    _enum: ['NotMember', 'AlreadyMember', 'Suspended', 'NotSuspended', 'NoPayout', 'AlreadyFounded', 'InsufficientPot', 'AlreadyVouching', 'NotVouchingOnBidder', 'Head', 'Founder', 'AlreadyBid', 'AlreadyCandidate', 'NotCandidate', 'MaxMembers', 'NotFounder', 'NotHead', 'NotApproved', 'NotRejected', 'Approved', 'Rejected', 'InProgress', 'TooEarly', 'Voted', 'Expired', 'NotBidder', 'NoDefender', 'NotGroup', 'AlreadyElevated', 'AlreadyPunished', 'InsufficientFunds', 'NoVotes']
  },
  /**
   * Lookup767: pallet_recovery::RecoveryConfig<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PezpalletRecoveryRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'Vec<PezspCoreCryptoAccountId32>',
    threshold: 'u16'
  },
  /**
   * Lookup769: pallet_recovery::ActiveRecovery<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PezpalletRecoveryActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'Vec<PezspCoreCryptoAccountId32>'
  },
  /**
   * Lookup770: pallet_recovery::pallet::Error<T>
   **/
  PezpalletRecoveryError: {
    _enum: ['NotAllowed', 'ZeroThreshold', 'NotEnoughFriends', 'MaxFriends', 'NotSorted', 'NotRecoverable', 'AlreadyRecoverable', 'AlreadyStarted', 'NotStarted', 'NotFriend', 'DelayPeriod', 'AlreadyVouched', 'Threshold', 'StillActive', 'AlreadyProxy', 'BadState']
  },
  /**
   * Lookup773: pallet_vesting::Releases
   **/
  PezpalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup774: pallet_vesting::pallet::Error<T>
   **/
  PezpalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup777: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, kitchensink_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PezpalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'PezframeSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'KitchensinkRuntimeOriginCaller'
  },
  /**
   * Lookup779: pallet_scheduler::RetryConfig<Period>
   **/
  PezpalletSchedulerRetryConfig: {
    totalRetries: 'u8',
    remaining: 'u8',
    period: 'u32'
  },
  /**
   * Lookup780: pallet_scheduler::pallet::Error<T>
   **/
  PezpalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup781: pallet_glutton::pallet::Error<T>
   **/
  PezpalletGluttonError: {
    _enum: ['AlreadyInitialized', 'InsaneLimit']
  },
  /**
   * Lookup782: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletPreimageOldRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(PezspCoreCryptoAccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(PezspCoreCryptoAccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup784: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D, Fp>>
   **/
  PezpalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: '(PezspCoreCryptoAccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(PezspCoreCryptoAccountId32,u128)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup789: pallet_preimage::pallet::Error<T>
   **/
  PezpalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested', 'TooMany', 'TooFew']
  },
  /**
   * Lookup792: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, kitchensink_runtime::ProxyType, BlockNumber>
   **/
  PezpalletProxyProxyDefinition: {
    delegate: 'PezspCoreCryptoAccountId32',
    proxyType: 'KitchensinkRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup796: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PezpalletProxyAnnouncement: {
    real: 'PezspCoreCryptoAccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup798: pallet_proxy::pallet::Error<T>
   **/
  PezpalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup800: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PezpalletMultisigMultisig: {
    when: 'PezpalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'PezspCoreCryptoAccountId32',
    approvals: 'Vec<PezspCoreCryptoAccountId32>'
  },
  /**
   * Lookup801: pallet_multisig::pallet::Error<T>
   **/
  PezpalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup802: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PezpalletBountiesBounty: {
    proposer: 'PezspCoreCryptoAccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PezpalletBountiesBountyStatus'
  },
  /**
   * Lookup803: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PezpalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'PezspCoreCryptoAccountId32',
      },
      Active: {
        curator: 'PezspCoreCryptoAccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'PezspCoreCryptoAccountId32',
        beneficiary: 'PezspCoreCryptoAccountId32',
        unlockAt: 'u32',
      },
      ApprovedWithCurator: {
        curator: 'PezspCoreCryptoAccountId32'
      }
    }
  },
  /**
   * Lookup805: pallet_bounties::pallet::Error<T, I>
   **/
  PezpalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup806: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PezpalletTipsOpenTip: {
    reason: 'H256',
    who: 'PezspCoreCryptoAccountId32',
    finder: 'PezspCoreCryptoAccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(PezspCoreCryptoAccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup807: pallet_tips::pallet::Error<T, I>
   **/
  PezpalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'MaxTipAmountExceeded', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup808: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PezpalletAssetsAssetDetails: {
    owner: 'PezspCoreCryptoAccountId32',
    issuer: 'PezspCoreCryptoAccountId32',
    admin: 'PezspCoreCryptoAccountId32',
    freezer: 'PezspCoreCryptoAccountId32',
    supply: 'u128',
    deposit: 'u128',
    minBalance: 'u128',
    isSufficient: 'bool',
    accounts: 'u32',
    sufficients: 'u32',
    approvals: 'u32',
    status: 'PezpalletAssetsAssetStatus'
  },
  /**
   * Lookup809: pallet_assets::types::AssetStatus
   **/
  PezpalletAssetsAssetStatus: {
    _enum: ['Live', 'Frozen', 'Destroying']
  },
  /**
   * Lookup810: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra, sp_core::crypto::AccountId32>
   **/
  PezpalletAssetsAssetAccount: {
    balance: 'u128',
    status: 'PezpalletAssetsAccountStatus',
    reason: 'PezpalletAssetsExistenceReason',
    extra: 'Null'
  },
  /**
   * Lookup811: pallet_assets::types::AccountStatus
   **/
  PezpalletAssetsAccountStatus: {
    _enum: ['Liquid', 'Frozen', 'Blocked']
  },
  /**
   * Lookup812: pallet_assets::types::ExistenceReason<Balance, sp_core::crypto::AccountId32>
   **/
  PezpalletAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null',
      DepositFrom: '(PezspCoreCryptoAccountId32,u128)'
    }
  },
  /**
   * Lookup814: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PezpalletAssetsApproval: {
    amount: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup815: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PezpalletAssetsAssetMetadata: {
    deposit: 'u128',
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    isFrozen: 'bool'
  },
  /**
   * Lookup817: pallet_assets::pallet::Error<T, I>
   **/
  PezpalletAssetsError: {
    _enum: ['BalanceLow', 'NoAccount', 'NoPermission', 'Unknown', 'Frozen', 'InUse', 'BadWitness', 'MinBalanceZero', 'UnavailableConsumer', 'BadMetadata', 'Unapproved', 'WouldDie', 'AlreadyExists', 'NoDeposit', 'WouldBurn', 'LiveAsset', 'AssetNotLive', 'IncorrectStatus', 'NotFrozen', 'CallbackFailed', 'BadAssetId', 'ContainsFreezes', 'ContainsHolds']
  },
  /**
   * Lookup821: pallet_beefy::pallet::Error<T>
   **/
  PezpalletBeefyError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidDoubleVotingProof', 'InvalidForkVotingProof', 'InvalidFutureBlockVotingProof', 'InvalidEquivocationProofSession', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup822: sp_consensus_beefy::mmr::BeefyAuthoritySet<primitive_types::H256>
   **/
  PezspConsensusBeefyMmrBeefyAuthoritySet: {
    id: 'u64',
    len: 'u32',
    keysetCommitment: 'H256'
  },
  /**
   * Lookup823: pallet_lottery::LotteryConfig<BlockNumber, Balance>
   **/
  PezpalletLotteryLotteryConfig: {
    price: 'u128',
    start: 'u32',
    length: 'u32',
    delay: 'u32',
    repeat: 'bool'
  },
  /**
   * Lookup827: pallet_lottery::pallet::Error<T>
   **/
  PezpalletLotteryError: {
    _enum: ['NotConfigured', 'InProgress', 'AlreadyEnded', 'InvalidCall', 'AlreadyParticipating', 'TooManyCalls', 'EncodingFailed']
  },
  /**
   * Lookup830: pallet_nis::pallet::Bid<Balance, sp_core::crypto::AccountId32>
   **/
  PezpalletNisBid: {
    amount: 'u128',
    who: 'PezspCoreCryptoAccountId32'
  },
  /**
   * Lookup832: pallet_nis::pallet::SummaryRecord<BlockNumber, Balance>
   **/
  PezpalletNisSummaryRecord: {
    proportionOwed: 'u64',
    index: 'u32',
    thawed: 'u64',
    lastPeriod: 'u32',
    receiptsOnHold: 'u128'
  },
  /**
   * Lookup833: pallet_nis::pallet::ReceiptRecord<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PezpalletNisReceiptRecord: {
    proportion: 'u64',
    owner: 'Option<(PezspCoreCryptoAccountId32,u128)>',
    expiry: 'u32'
  },
  /**
   * Lookup835: pallet_nis::pallet::Error<T>
   **/
  PezpalletNisError: {
    _enum: ['DurationTooSmall', 'DurationTooBig', 'AmountTooSmall', 'BidTooLow', 'UnknownReceipt', 'NotOwner', 'NotExpired', 'UnknownBid', 'PortionTooBig', 'Unfunded', 'AlreadyFunded', 'Throttled', 'MakesDust', 'AlreadyCommunal', 'AlreadyPrivate']
  },
  /**
   * Lookup836: pallet_uniques::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PezpalletUniquesCollectionDetails: {
    owner: 'PezspCoreCryptoAccountId32',
    issuer: 'PezspCoreCryptoAccountId32',
    admin: 'PezspCoreCryptoAccountId32',
    freezer: 'PezspCoreCryptoAccountId32',
    totalDeposit: 'u128',
    freeHolding: 'bool',
    items: 'u32',
    itemMetadatas: 'u32',
    attributes: 'u32',
    isFrozen: 'bool'
  },
  /**
   * Lookup838: pallet_uniques::types::ItemDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PezpalletUniquesItemDetails: {
    owner: 'PezspCoreCryptoAccountId32',
    approved: 'Option<PezspCoreCryptoAccountId32>',
    isFrozen: 'bool',
    deposit: 'u128'
  },
  /**
   * Lookup839: pallet_uniques::types::CollectionMetadata<DepositBalance, StringLimit>
   **/
  PezpalletUniquesCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup840: pallet_uniques::types::ItemMetadata<DepositBalance, StringLimit>
   **/
  PezpalletUniquesItemMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup844: pallet_uniques::pallet::Error<T, I>
   **/
  PezpalletUniquesError: {
    _enum: ['NoPermission', 'UnknownCollection', 'AlreadyExists', 'WrongOwner', 'BadWitness', 'InUse', 'Frozen', 'WrongDelegate', 'NoDelegate', 'Unapproved', 'Unaccepted', 'Locked', 'MaxSupplyReached', 'MaxSupplyAlreadySet', 'MaxSupplyTooSmall', 'UnknownItem', 'NotForSale', 'BidTooLow']
  },
  /**
   * Lookup845: pallet_nfts::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PezpalletNftsCollectionDetails: {
    owner: 'PezspCoreCryptoAccountId32',
    ownerDeposit: 'u128',
    items: 'u32',
    itemMetadatas: 'u32',
    itemConfigs: 'u32',
    attributes: 'u32'
  },
  /**
   * Lookup847: pallet_nfts::types::CollectionRole
   **/
  PezpalletNftsCollectionRole: {
    _enum: ['__Unused0', 'Issuer', 'Freezer', '__Unused3', 'Admin']
  },
  /**
   * Lookup848: pallet_nfts::types::ItemDetails<sp_core::crypto::AccountId32, pallet_nfts::types::ItemDeposit<DepositBalance, sp_core::crypto::AccountId32>, bounded_collections::bounded_btree_map::BoundedBTreeMap<sp_core::crypto::AccountId32, Option<T>, S>>
   **/
  PezpalletNftsItemDetails: {
    owner: 'PezspCoreCryptoAccountId32',
    approvals: 'BTreeMap<PezspCoreCryptoAccountId32, Option<u32>>',
    deposit: 'PezpalletNftsItemDeposit'
  },
  /**
   * Lookup849: pallet_nfts::types::ItemDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PezpalletNftsItemDeposit: {
    account: 'PezspCoreCryptoAccountId32',
    amount: 'u128'
  },
  /**
   * Lookup854: pallet_nfts::types::CollectionMetadata<Deposit, StringLimit>
   **/
  PezpalletNftsCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes'
  },
  /**
   * Lookup855: pallet_nfts::types::ItemMetadata<pallet_nfts::types::ItemMetadataDeposit<DepositBalance, sp_core::crypto::AccountId32>, StringLimit>
   **/
  PezpalletNftsItemMetadata: {
    deposit: 'PezpalletNftsItemMetadataDeposit',
    data: 'Bytes'
  },
  /**
   * Lookup856: pallet_nfts::types::ItemMetadataDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PezpalletNftsItemMetadataDeposit: {
    account: 'Option<PezspCoreCryptoAccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup859: pallet_nfts::types::AttributeDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PezpalletNftsAttributeDeposit: {
    account: 'Option<PezspCoreCryptoAccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup862: pallet_nfts::types::PendingSwap<CollectionId, ItemId, pallet_nfts::types::PriceWithDirection<Amount>, Deadline>
   **/
  PezpalletNftsPendingSwap: {
    desiredCollection: 'u32',
    desiredItem: 'Option<u32>',
    price: 'Option<PezpalletNftsPriceWithDirection>',
    deadline: 'u32'
  },
  /**
   * Lookup864: pallet_nfts::types::PalletFeature
   **/
  PezpalletNftsPezpalletFeature: {
    _enum: ['__Unused0', 'Trading', 'Attributes', '__Unused3', 'Approvals', '__Unused5', '__Unused6', '__Unused7', 'Swaps']
  },
  /**
   * Lookup865: pallet_nfts::pallet::Error<T, I>
   **/
  PezpalletNftsError: {
    _enum: ['NoPermission', 'UnknownCollection', 'AlreadyExists', 'ApprovalExpired', 'WrongOwner', 'BadWitness', 'CollectionIdInUse', 'ItemsNonTransferable', 'NotDelegate', 'WrongDelegate', 'Unapproved', 'Unaccepted', 'ItemLocked', 'LockedItemAttributes', 'LockedCollectionAttributes', 'LockedItemMetadata', 'LockedCollectionMetadata', 'MaxSupplyReached', 'MaxSupplyLocked', 'MaxSupplyTooSmall', 'UnknownItem', 'UnknownSwap', 'MetadataNotFound', 'AttributeNotFound', 'NotForSale', 'BidTooLow', 'ReachedApprovalLimit', 'DeadlineExpired', 'WrongDuration', 'MethodDisabled', 'WrongSetting', 'InconsistentItemConfig', 'NoConfig', 'RolesNotCleared', 'MintNotStarted', 'MintEnded', 'AlreadyClaimed', 'IncorrectData', 'WrongOrigin', 'WrongSignature', 'IncorrectMetadata', 'MaxAttributesLimitReached', 'WrongNamespace', 'CollectionNotEmpty', 'WitnessRequired']
  },
  /**
   * Lookup866: pallet_nft_fractionalization::types::Details<AssetId, Fractions, Deposit, sp_core::crypto::AccountId32>
   **/
  PezpalletNftFractionalizationDetails: {
    asset: 'u32',
    fractions: 'u128',
    deposit: 'u128',
    assetCreator: 'PezspCoreCryptoAccountId32'
  },
  /**
   * Lookup867: pallet_nft_fractionalization::pallet::Error<T>
   **/
  PezpalletNftFractionalizationError: {
    _enum: ['IncorrectAssetId', 'NoPermission', 'NftNotFound', 'NftNotFractionalized']
  },
  /**
   * Lookup868: pallet_salary::StatusType<CycleIndex, BlockNumber, Balance>
   **/
  PezpalletSalaryStatusType: {
    cycleIndex: 'u32',
    cycleStart: 'u32',
    budget: 'u128',
    totalRegistrations: 'u128',
    totalUnregisteredPaid: 'u128'
  },
  /**
   * Lookup869: pallet_salary::ClaimantStatus<CycleIndex, Balance, Id>
   **/
  PezpalletSalaryClaimantStatus: {
    lastActive: 'u32',
    status: 'PezpalletSalaryClaimState'
  },
  /**
   * Lookup870: pallet_salary::ClaimState<Balance, Id>
   **/
  PezpalletSalaryClaimState: {
    _enum: {
      Nothing: 'Null',
      Registered: 'u128',
      Attempted: {
        registered: 'Option<u128>',
        id: 'Null',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup871: pallet_salary::pallet::Error<T, I>
   **/
  PezpalletSalaryError: {
    _enum: ['AlreadyStarted', 'NotMember', 'AlreadyInducted', 'NotInducted', 'NoClaim', 'ClaimZero', 'TooLate', 'TooEarly', 'NotYet', 'NotStarted', 'Bankrupt', 'PayError', 'Inconclusive', 'NotCurrent']
  },
  /**
   * Lookup872: pallet_core_fellowship::MemberStatus<BlockNumber>
   **/
  PezpalletCoreFellowshipMemberStatus: {
    isActive: 'bool',
    lastPromotion: 'u32',
    lastProof: 'u32'
  },
  /**
   * Lookup874: pallet_core_fellowship::pallet::Error<T, I>
   **/
  PezpalletCoreFellowshipError: {
    _enum: ['Unranked', 'Ranked', 'UnexpectedRank', 'InvalidRank', 'NoPermission', 'NothingDoing', 'AlreadyInducted', 'NotTracked', 'TooSoon']
  },
  /**
   * Lookup876: pallet_transaction_storage::TransactionInfo
   **/
  PezpalletTransactionStorageTransactionInfo: {
    _alias: {
      size_: 'size'
    },
    chunkRoot: 'H256',
    contentHash: 'H256',
    size_: 'u32',
    blockChunks: 'u32'
  },
  /**
   * Lookup878: pallet_transaction_storage::pallet::Error<T>
   **/
  PezpalletTransactionStorageError: {
    _enum: ['NotConfigured', 'RenewedNotFound', 'EmptyTransaction', 'UnexpectedProof', 'InvalidProof', 'MissingProof', 'MissingStateData', 'DoubleCheck', 'ProofNotChecked', 'TransactionTooLarge', 'TooManyTransactions', 'BadContext']
  },
  /**
   * Lookup879: pallet_bags_list::list::Node<T, I>
   **/
  PezpalletBagsListListNode: {
    id: 'PezspCoreCryptoAccountId32',
    prev: 'Option<PezspCoreCryptoAccountId32>',
    next: 'Option<PezspCoreCryptoAccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup880: pallet_bags_list::list::Bag<T, I>
   **/
  PezpalletBagsListListBag: {
    head: 'Option<PezspCoreCryptoAccountId32>',
    tail: 'Option<PezspCoreCryptoAccountId32>'
  },
  /**
   * Lookup882: pallet_bags_list::pallet::Error<T, I>
   **/
  PezpalletBagsListError: {
    _enum: {
      List: 'PezpalletBagsListListListError'
    }
  },
  /**
   * Lookup883: pallet_bags_list::list::ListError
   **/
  PezpalletBagsListListListError: {
    _enum: ['Duplicate', 'NotHeavier', 'NotInSameBag', 'NodeNotFound']
  },
  /**
   * Lookup884: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PezpalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PezpalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup885: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PezpalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'PezspCoreCryptoAccountId32',
      },
      Active: {
        curator: 'PezspCoreCryptoAccountId32',
      },
      PendingPayout: {
        curator: 'PezspCoreCryptoAccountId32',
        beneficiary: 'PezspCoreCryptoAccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup886: pallet_child_bounties::pallet::Error<T>
   **/
  PezpalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup887: pallet_referenda::types::ReferendumInfo<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PezpalletReferendaReferendumInfoConvictionVotingTally: {
    _enum: {
      Ongoing: 'PezpalletReferendaReferendumStatusConvictionVotingTally',
      Approved: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      Rejected: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup888: pallet_referenda::types::ReferendumStatus<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PezpalletReferendaReferendumStatusConvictionVotingTally: {
    track: 'u16',
    origin: 'KitchensinkRuntimeOriginCaller',
    proposal: 'PezframeSupportPreimagesBounded',
    enactment: 'PezframeSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PezpalletReferendaDeposit',
    decisionDeposit: 'Option<PezpalletReferendaDeposit>',
    deciding: 'Option<PezpalletReferendaDecidingStatus>',
    tally: 'PezpalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup889: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletReferendaDeposit: {
    who: 'PezspCoreCryptoAccountId32',
    amount: 'u128'
  },
  /**
   * Lookup892: pallet_referenda::types::DecidingStatus<BlockNumber>
   **/
  PezpalletReferendaDecidingStatus: {
    since: 'u32',
    confirming: 'Option<u32>'
  },
  /**
   * Lookup898: pallet_referenda::types::TrackDetails<Balance, Moment, Name>
   **/
  PezpalletReferendaTrackDetails: {
    name: 'Text',
    maxDeciding: 'u32',
    decisionDeposit: 'u128',
    preparePeriod: 'u32',
    decisionPeriod: 'u32',
    confirmPeriod: 'u32',
    minEnactmentPeriod: 'u32',
    minApproval: 'PezpalletReferendaCurve',
    minSupport: 'PezpalletReferendaCurve'
  },
  /**
   * Lookup899: pallet_referenda::pallet::Error<T, I>
   **/
  PezpalletReferendaError: {
    _enum: ['NotOngoing', 'HasDeposit', 'BadTrack', 'Full', 'QueueEmpty', 'BadReferendum', 'NothingToDo', 'NoTrack', 'Unfinished', 'NoPermission', 'NoDeposit', 'BadStatus', 'PreimageNotExist', 'PreimageStoredWithDifferentLength']
  },
  /**
   * Lookup900: pallet_remark::pallet::Error<T>
   **/
  PezpalletRemarkError: {
    _enum: ['Empty', 'BadContext']
  },
  /**
   * Lookup902: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
   **/
  PezpalletConvictionVotingVoteVoting: {
    _enum: {
      Casting: 'PezpalletConvictionVotingVoteCasting',
      Delegating: 'PezpalletConvictionVotingVoteDelegating'
    }
  },
  /**
   * Lookup903: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
   **/
  PezpalletConvictionVotingVoteCasting: {
    votes: 'Vec<(u32,PezpalletConvictionVotingVoteAccountVote)>',
    delegations: 'PezpalletConvictionVotingDelegations',
    prior: 'PezpalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup907: pallet_conviction_voting::types::Delegations<Balance>
   **/
  PezpalletConvictionVotingDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup908: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
   **/
  PezpalletConvictionVotingVotePriorLock: '(u32,u128)',
  /**
   * Lookup909: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PezpalletConvictionVotingVoteDelegating: {
    balance: 'u128',
    target: 'PezspCoreCryptoAccountId32',
    conviction: 'PezpalletConvictionVotingConviction',
    delegations: 'PezpalletConvictionVotingDelegations',
    prior: 'PezpalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup913: pallet_conviction_voting::pallet::Error<T, I>
   **/
  PezpalletConvictionVotingError: {
    _enum: ['NotOngoing', 'NotVoter', 'NoPermission', 'NoPermissionYet', 'AlreadyDelegating', 'AlreadyVoting', 'InsufficientFunds', 'NotDelegating', 'Nonsense', 'MaxVotesReached', 'ClassNeeded', 'BadClass']
  },
  /**
   * Lookup914: pallet_whitelist::pallet::Error<T>
   **/
  PezpalletWhitelistError: {
    _enum: ['UnavailablePreImage', 'UndecodableCall', 'InvalidCallWeightWitness', 'CallIsNotWhitelisted', 'CallAlreadyWhitelisted']
  },
  /**
   * Lookup919: pallet_alliance::MemberRole
   **/
  PezpalletAllianceMemberRole: {
    _enum: ['Fellow', 'Ally', 'Retiring']
  },
  /**
   * Lookup923: pallet_alliance::pallet::Error<T, I>
   **/
  PezpalletAllianceError: {
    _enum: ['AllianceNotYetInitialized', 'AllianceAlreadyInitialized', 'AlreadyMember', 'NotMember', 'NotAlly', 'NoVotingRights', 'AlreadyElevated', 'AlreadyUnscrupulous', 'AccountNonGrata', 'NotListedAsUnscrupulous', 'TooManyUnscrupulousItems', 'TooLongWebsiteUrl', 'InsufficientFunds', 'WithoutRequiredIdentityFields', 'WithoutGoodIdentityJudgement', 'MissingProposalHash', 'MissingAnnouncement', 'TooManyMembers', 'TooManyAnnouncements', 'BadWitness', 'AlreadyRetiring', 'RetirementNoticeNotGiven', 'RetirementPeriodNotPassed', 'FellowsMissing']
  },
  /**
   * Lookup924: pallet_nomination_pools::PoolMember<T>
   **/
  PezpalletNominationPoolsPoolMember: {
    poolId: 'u32',
    points: 'u128',
    lastRecordedRewardCounter: 'u128',
    unbondingEras: 'BTreeMap<u32, u128>'
  },
  /**
   * Lookup927: pallet_nomination_pools::BondedPoolInner<T>
   **/
  PezpalletNominationPoolsBondedPoolInner: {
    commission: 'PezpalletNominationPoolsCommission',
    memberCounter: 'u32',
    points: 'u128',
    roles: 'PezpalletNominationPoolsPoolRoles',
    state: 'PezpalletNominationPoolsPoolState'
  },
  /**
   * Lookup928: pallet_nomination_pools::Commission<T>
   **/
  PezpalletNominationPoolsCommission: {
    current: 'Option<(u32,PezspCoreCryptoAccountId32)>',
    max: 'Option<u32>',
    changeRate: 'Option<PezpalletNominationPoolsCommissionChangeRate>',
    throttleFrom: 'Option<u32>',
    claimPermission: 'Option<PezpalletNominationPoolsCommissionClaimPermission>'
  },
  /**
   * Lookup930: pallet_nomination_pools::PoolRoles<sp_core::crypto::AccountId32>
   **/
  PezpalletNominationPoolsPoolRoles: {
    depositor: 'PezspCoreCryptoAccountId32',
    root: 'Option<PezspCoreCryptoAccountId32>',
    nominator: 'Option<PezspCoreCryptoAccountId32>',
    bouncer: 'Option<PezspCoreCryptoAccountId32>'
  },
  /**
   * Lookup931: pallet_nomination_pools::RewardPool<T>
   **/
  PezpalletNominationPoolsRewardPool: {
    lastRecordedRewardCounter: 'u128',
    lastRecordedTotalPayouts: 'u128',
    totalRewardsClaimed: 'u128',
    totalCommissionPending: 'u128',
    totalCommissionClaimed: 'u128'
  },
  /**
   * Lookup932: pallet_nomination_pools::SubPools<T>
   **/
  PezpalletNominationPoolsSubPools: {
    noEra: 'PezpalletNominationPoolsUnbondPool',
    withEra: 'BTreeMap<u32, PezpalletNominationPoolsUnbondPool>'
  },
  /**
   * Lookup933: pallet_nomination_pools::UnbondPool<T>
   **/
  PezpalletNominationPoolsUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup938: pallet_nomination_pools::pallet::Error<T>
   **/
  PezpalletNominationPoolsError: {
    _enum: {
      PoolNotFound: 'Null',
      PoolMemberNotFound: 'Null',
      RewardPoolNotFound: 'Null',
      SubPoolsNotFound: 'Null',
      AccountBelongsToOtherPool: 'Null',
      FullyUnbonding: 'Null',
      MaxUnbondingLimit: 'Null',
      CannotWithdrawAny: 'Null',
      MinimumBondNotMet: 'Null',
      OverflowRisk: 'Null',
      NotDestroying: 'Null',
      NotNominator: 'Null',
      NotKickerOrDestroying: 'Null',
      NotOpen: 'Null',
      MaxPools: 'Null',
      MaxPoolMembers: 'Null',
      CanNotChangeState: 'Null',
      DoesNotHavePermission: 'Null',
      MetadataExceedsMaxLen: 'Null',
      Defensive: 'PezpalletNominationPoolsDefensiveError',
      PartialUnbondNotAllowedPermissionlessly: 'Null',
      MaxCommissionRestricted: 'Null',
      CommissionExceedsMaximum: 'Null',
      CommissionExceedsGlobalMaximum: 'Null',
      CommissionChangeThrottled: 'Null',
      CommissionChangeRateNotAllowed: 'Null',
      NoPendingCommission: 'Null',
      NoCommissionCurrentSet: 'Null',
      PoolIdInUse: 'Null',
      InvalidPoolId: 'Null',
      BondExtraRestricted: 'Null',
      NothingToAdjust: 'Null',
      NothingToSlash: 'Null',
      SlashTooLow: 'Null',
      AlreadyMigrated: 'Null',
      NotMigrated: 'Null',
      NotSupported: 'Null',
      Restricted: 'Null'
    }
  },
  /**
   * Lookup939: pallet_nomination_pools::pallet::DefensiveError
   **/
  PezpalletNominationPoolsDefensiveError: {
    _enum: ['NotEnoughSpaceInUnbondPool', 'PoolNotFound', 'RewardPoolNotFound', 'SubPoolsNotFound', 'BondedStashKilledPrematurely', 'DelegationUnsupported', 'SlashNotApplied']
  },
  /**
   * Lookup940: pallet_referenda::types::ReferendumInfo<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PezpalletReferendaReferendumInfoRankedCollectiveTally: {
    _enum: {
      Ongoing: 'PezpalletReferendaReferendumStatusRankedCollectiveTally',
      Approved: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      Rejected: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PezpalletReferendaDeposit>,Option<PezpalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup941: pallet_referenda::types::ReferendumStatus<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PezpalletReferendaReferendumStatusRankedCollectiveTally: {
    track: 'u16',
    origin: 'KitchensinkRuntimeOriginCaller',
    proposal: 'PezframeSupportPreimagesBounded',
    enactment: 'PezframeSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PezpalletReferendaDeposit',
    decisionDeposit: 'Option<PezpalletReferendaDeposit>',
    deciding: 'Option<PezpalletReferendaDecidingStatus>',
    tally: 'PezpalletRankedCollectiveTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup944: pallet_ranked_collective::MemberRecord
   **/
  PezpalletRankedCollectiveMemberRecord: {
    rank: 'u16'
  },
  /**
   * Lookup948: pallet_ranked_collective::pallet::Error<T, I>
   **/
  PezpalletRankedCollectiveError: {
    _enum: ['AlreadyMember', 'NotMember', 'NotPolling', 'Ongoing', 'NoneRemaining', 'Corruption', 'RankTooLow', 'InvalidWitness', 'NoPermission', 'SameMember', 'TooManyMembers']
  },
  /**
   * Lookup949: pallet_asset_conversion::types::PoolInfo<PoolAssetId>
   **/
  PezpalletAssetConversionPoolInfo: {
    lpToken: 'u32'
  },
  /**
   * Lookup950: pallet_asset_conversion::pallet::Error<T>
   **/
  PezpalletAssetConversionError: {
    _enum: ['InvalidAssetPair', 'PoolExists', 'WrongDesiredAmount', 'AmountOneLessThanMinimal', 'AmountTwoLessThanMinimal', 'ReserveLeftLessThanMinimal', 'AmountOutTooHigh', 'PoolNotFound', 'Overflow', 'AssetOneDepositDidNotMeetMinimum', 'AssetTwoDepositDidNotMeetMinimum', 'AssetOneWithdrawalDidNotMeetMinimum', 'AssetTwoWithdrawalDidNotMeetMinimum', 'OptimalAmountLessThanDesired', 'InsufficientLiquidityMinted', 'ZeroLiquidity', 'ZeroAmount', 'ProvidedMinimumNotSufficientForSwap', 'ProvidedMaximumNotSufficientForSwap', 'InvalidPath', 'NonUniquePath', 'IncorrectPoolAssetId', 'BelowMinimum']
  },
  /**
   * Lookup951: pallet_fast_unstake::types::UnstakeRequest<T>
   **/
  PezpalletFastUnstakeUnstakeRequest: {
    stashes: 'Vec<(PezspCoreCryptoAccountId32,u128)>',
    checked: 'Vec<u32>'
  },
  /**
   * Lookup954: pallet_fast_unstake::pallet::Error<T>
   **/
  PezpalletFastUnstakeError: {
    _enum: ['NotController', 'AlreadyQueued', 'NotFullyBonded', 'NotQueued', 'AlreadyHead', 'CallNotAllowed']
  },
  /**
   * Lookup955: pallet_message_queue::BookState<MessageOrigin>
   **/
  PezpalletMessageQueueBookState: {
    _alias: {
      size_: 'size'
    },
    begin: 'u32',
    end: 'u32',
    count: 'u32',
    readyNeighbours: 'Option<PezpalletMessageQueueNeighbours>',
    messageCount: 'u64',
    size_: 'u64'
  },
  /**
   * Lookup957: pallet_message_queue::Neighbours<MessageOrigin>
   **/
  PezpalletMessageQueueNeighbours: {
    prev: 'u32',
    next: 'u32'
  },
  /**
   * Lookup958: pallet_message_queue::Page<Size, HeapSize>
   **/
  PezpalletMessageQueuePage: {
    remaining: 'u32',
    remainingSize: 'u32',
    firstIndex: 'u32',
    first: 'u32',
    last: 'u32',
    heap: 'Bytes'
  },
  /**
   * Lookup960: pallet_message_queue::pallet::Error<T>
   **/
  PezpalletMessageQueueError: {
    _enum: ['NotReapable', 'NoPage', 'NoMessage', 'AlreadyProcessed', 'Queued', 'InsufficientWeight', 'TemporarilyUnprocessable', 'QueuePaused', 'RecursiveDisallowed']
  },
  /**
   * Lookup961: pallet_tx_pause::pallet::Error<T>
   **/
  PezpalletTxPauseError: {
    _enum: ['IsPaused', 'IsUnpaused', 'Unpausable', 'NotFound']
  },
  /**
   * Lookup962: pallet_safe_mode::pallet::Error<T>
   **/
  PezpalletSafeModeError: {
    _enum: ['Entered', 'Exited', 'NotConfigured', 'NoDeposit', 'AlreadyDeposited', 'CannotReleaseYet', 'CurrencyError']
  },
  /**
   * Lookup963: pallet_migrations::pallet::Error<T>
   **/
  PezpalletMigrationsError: {
    _enum: ['Ongoing']
  },
  /**
   * Lookup967: pallet_broker::types::LeaseRecordItem
   **/
  PezpalletBrokerLeaseRecordItem: {
    until: 'u32',
    task: 'u32'
  },
  /**
   * Lookup969: pallet_broker::types::StatusRecord
   **/
  PezpalletBrokerStatusRecord: {
    coreCount: 'u16',
    privatePoolSize: 'u32',
    systemPoolSize: 'u32',
    lastCommittedTimeslice: 'u32',
    lastTimeslice: 'u32'
  },
  /**
   * Lookup970: pallet_broker::types::SaleInfoRecord<Balance, RelayBlockNumber>
   **/
  PezpalletBrokerSaleInfoRecord: {
    saleStart: 'u32',
    leadinLength: 'u32',
    endPrice: 'u128',
    regionBegin: 'u32',
    regionEnd: 'u32',
    idealCoresSold: 'u16',
    coresOffered: 'u16',
    firstCore: 'u16',
    selloutPrice: 'Option<u128>',
    coresSold: 'u16'
  },
  /**
   * Lookup971: pallet_broker::types::PotentialRenewalId
   **/
  PezpalletBrokerPotentialRenewalId: {
    core: 'u16',
    when: 'u32'
  },
  /**
   * Lookup972: pallet_broker::types::PotentialRenewalRecord<Balance>
   **/
  PezpalletBrokerPotentialRenewalRecord: {
    price: 'u128',
    completion: 'PezpalletBrokerCompletionStatus'
  },
  /**
   * Lookup973: pallet_broker::types::CompletionStatus
   **/
  PezpalletBrokerCompletionStatus: {
    _enum: {
      Partial: 'PezpalletBrokerCoreMask',
      Complete: 'Vec<PezpalletBrokerScheduleItem>'
    }
  },
  /**
   * Lookup974: pallet_broker::types::RegionRecord<sp_core::crypto::AccountId32, Balance>
   **/
  PezpalletBrokerRegionRecord: {
    end: 'u32',
    owner: 'Option<PezspCoreCryptoAccountId32>',
    paid: 'Option<u128>'
  },
  /**
   * Lookup976: pallet_broker::types::ContributionRecord<sp_core::crypto::AccountId32>
   **/
  PezpalletBrokerContributionRecord: {
    length: 'u32',
    payee: 'PezspCoreCryptoAccountId32'
  },
  /**
   * Lookup977: pallet_broker::types::PoolIoRecord
   **/
  PezpalletBrokerPoolIoRecord: {
    private: 'i32',
    system: 'i32'
  },
  /**
   * Lookup979: pallet_broker::types::InstaPoolHistoryRecord<Balance>
   **/
  PezpalletBrokerInstaPoolHistoryRecord: {
    privateContributions: 'u32',
    systemContributions: 'u32',
    maybePayout: 'Option<u128>'
  },
  /**
   * Lookup981: pallet_broker::types::AutoRenewalRecord
   **/
  PezpalletBrokerAutoRenewalRecord: {
    core: 'u16',
    task: 'u32',
    nextRenewal: 'u32'
  },
  /**
   * Lookup983: pallet_broker::pallet::Error<T>
   **/
  PezpalletBrokerError: {
    _enum: ['UnknownRegion', 'NotOwner', 'PivotTooLate', 'PivotTooEarly', 'ExteriorPivot', 'VoidPivot', 'CompletePivot', 'CorruptWorkplan', 'NoSales', 'Overpriced', 'Unavailable', 'SoldOut', 'WrongTime', 'NotAllowed', 'Uninitialized', 'TooEarly', 'NothingToDo', 'TooManyReservations', 'TooManyLeases', 'LeaseNotFound', 'UnknownRevenue', 'UnknownContribution', 'IncompleteAssignment', 'StillValid', 'NoHistory', 'UnknownReservation', 'UnknownRenewal', 'AlreadyExpired', 'InvalidConfig', 'NoClaimTimeslices', 'NoPermission', 'TooManyAutoRenewals', 'NonTaskAutoRenewal', 'SovereignAccountNotFound', 'AutoRenewalNotEnabled', 'AssignmentNotFound', 'CreditPurchaseTooSmall']
  },
  /**
   * Lookup984: pallet_example_tasks::pallet::Error<T>
   **/
  PezpalletExampleTasksError: {
    _enum: ['NotFound']
  },
  /**
   * Lookup985: pallet_asset_conversion_ops::pallet::Error<T>
   **/
  PezpalletAssetConversionOpsError: {
    _enum: ['InvalidAssetPair', 'PoolNotFound', 'ZeroBalance', 'PartialTransfer']
  },
  /**
   * Lookup987: pallet_revive::wasm::CodeInfo<T>
   **/
  PezpalletReviveWasmCodeInfo: {
    owner: 'PezspCoreCryptoAccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    codeLen: 'u32',
    behaviourVersion: 'u32'
  },
  /**
   * Lookup988: pallet_revive::storage::ContractInfo<T>
   **/
  PezpalletReviveStorageContractInfo: {
    trieId: 'Bytes',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128',
    immutableDataLen: 'u32'
  },
  /**
   * Lookup990: pallet_revive::storage::DeletionQueueManager<T>
   **/
  PezpalletReviveStorageDeletionQueueManager: {
    insertCounter: 'u32',
    deleteCounter: 'u32'
  },
  /**
   * Lookup991: pallet_revive::pallet::Error<T>
   **/
  PezpalletReviveError: {
    _enum: ['InvalidSchedule', 'InvalidCallFlags', 'OutOfGas', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeNotFound', 'CodeInfoNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'TooManyTopics', 'NoChainExtension', 'XCMDecodeFailed', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'ReenteredPallet', 'StateChangeDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'BlobTooLarge', 'StaticMemoryTooLarge', 'BasicBlockTooLarge', 'InvalidInstruction', 'MaxDelegateDependenciesReached', 'DelegateDependencyNotFound', 'DelegateDependencyAlreadyExists', 'CannotAddSelfAsDelegateDependency', 'OutOfTransientStorage', 'InvalidSyscall', 'InvalidStorageFlags', 'ExecutionFailed', 'BalanceConversionFailed', 'DecimalPrecisionLoss', 'InvalidImmutableAccess', 'AccountUnmapped', 'AccountAlreadyMapped', 'InvalidGenericTransaction', 'RefcountOverOrUnderflow', 'UnsupportedPrecompileAddress', 'PrecompileFailure']
  },
  /**
   * Lookup992: pallet_delegated_staking::types::Delegation<T>
   **/
  PezpalletDelegatedStakingDelegation: {
    agent: 'PezspCoreCryptoAccountId32',
    amount: 'u128'
  },
  /**
   * Lookup993: pallet_delegated_staking::types::AgentLedger<T>
   **/
  PezpalletDelegatedStakingAgentLedger: {
    payee: 'PezspCoreCryptoAccountId32',
    totalDelegated: 'Compact<u128>',
    unclaimedWithdrawals: 'Compact<u128>',
    pendingSlash: 'Compact<u128>'
  },
  /**
   * Lookup994: pallet_delegated_staking::pallet::Error<T>
   **/
  PezpalletDelegatedStakingError: {
    _enum: ['NotAllowed', 'AlreadyStaking', 'InvalidRewardDestination', 'InvalidDelegation', 'NotEnoughFunds', 'NotAgent', 'NotDelegator', 'BadState', 'UnappliedSlash', 'NothingToSlash', 'WithdrawFailed', 'NotSupported']
  },
  /**
   * Lookup995: pallet_asset_rewards::PoolStakerInfo<Balance>
   **/
  PezpalletAssetRewardsPoolStakerInfo: {
    amount: 'u128',
    rewards: 'u128',
    rewardPerTokenPaid: 'u128'
  },
  /**
   * Lookup996: pallet_asset_rewards::PoolInfo<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::union_of::NativeOrWithId<AssetId>, Balance, BlockNumber>
   **/
  PezpalletAssetRewardsPoolInfo: {
    stakedAssetId: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
    rewardAssetId: 'PezframeSupportTokensFungibleUnionOfNativeOrWithId',
    rewardRatePerBlock: 'u128',
    expiryBlock: 'u32',
    admin: 'PezspCoreCryptoAccountId32',
    totalTokensStaked: 'u128',
    rewardPerTokenStored: 'u128',
    lastUpdateBlock: 'u32',
    account: 'PezspCoreCryptoAccountId32'
  },
  /**
   * Lookup999: pallet_asset_rewards::pallet::Error<T>
   **/
  PezpalletAssetRewardsError: {
    _enum: ['NotEnoughTokens', 'NonExistentPool', 'NonExistentStaker', 'NonExistentAsset', 'BlockNumberConversionError', 'ExpiryBlockMustBeInTheFuture', 'InsufficientFunds', 'ExpiryCut', 'RewardRateCut', 'NonEmptyPool']
  },
  /**
   * Lookup1000: pallet_assets_freezer::pallet::Error<T, I>
   **/
  PezpalletAssetsFreezerError: {
    _enum: ['TooManyFreezes']
  },
  /**
   * Lookup1001: pallet_meta_tx::pallet::Error<T>
   **/
  PezpalletMetaTxError: {
    _enum: ['BadProof', 'Future', 'Stale', 'AncientBirthBlock', 'UnknownOrigin', 'Invalid']
  },
  /**
   * Lookup1003: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  PezframeSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup1004: pallet_asset_conversion_tx_payment::ChargeAssetTxPayment<T>
   **/
  PezpalletAssetConversionTxPaymentChargeAssetTxPayment: {
    tip: 'Compact<u128>',
    assetId: 'Option<PezframeSupportTokensFungibleUnionOfNativeOrWithId>'
  },
  /**
   * Lookup1006: frame_system::extensions::weight_reclaim::WeightReclaim<T>
   **/
  PezframeSystemExtensionsWeightReclaim: 'Null',
  /**
   * Lookup1007: sp_runtime::generic::block::Block<sp_runtime::generic::header::Header<Number, Hash>, sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic<sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>, kitchensink_runtime::RuntimeCall, sp_runtime::MultiSignature, Extra>>
   **/
  PezspRuntimeBlock: {
    header: 'PezspRuntimeHeader',
    extrinsics: 'Vec<Bytes>'
  },
  /**
   * Lookup1010: sp_runtime::ExtrinsicInclusionMode
   **/
  PezspRuntimeExtrinsicInclusionMode: {
    _enum: ['AllExtrinsics', 'OnlyInherents']
  },
  /**
   * Lookup1013: frame_support::view_functions::ViewFunctionId
   **/
  PezframeSupportViewFunctionsViewFunctionId: {
    prefix: '[u8;16]',
    suffix: '[u8;16]'
  },
  /**
   * Lookup1015: frame_support::view_functions::ViewFunctionDispatchError
   **/
  PezframeSupportViewFunctionsViewFunctionDispatchError: {
    _enum: {
      NotImplemented: 'Null',
      NotFound: 'PezframeSupportViewFunctionsViewFunctionId',
      Codec: 'Null'
    }
  },
  /**
   * Lookup1017: sp_runtime::transaction_validity::TransactionValidityError
   **/
  PezspRuntimeTransactionValidityTransactionValidityError: {
    _enum: {
      Invalid: 'PezspRuntimeTransactionValidityInvalidTransaction',
      Unknown: 'PezspRuntimeTransactionValidityUnknownTransaction'
    }
  },
  /**
   * Lookup1018: sp_runtime::transaction_validity::InvalidTransaction
   **/
  PezspRuntimeTransactionValidityInvalidTransaction: {
    _enum: {
      Call: 'Null',
      Payment: 'Null',
      Future: 'Null',
      Stale: 'Null',
      BadProof: 'Null',
      AncientBirthBlock: 'Null',
      ExhaustsResources: 'Null',
      Custom: 'u8',
      BadMandatory: 'Null',
      MandatoryValidation: 'Null',
      BadSigner: 'Null',
      IndeterminateImplicit: 'Null',
      UnknownOrigin: 'Null'
    }
  },
  /**
   * Lookup1019: sp_runtime::transaction_validity::UnknownTransaction
   **/
  PezspRuntimeTransactionValidityUnknownTransaction: {
    _enum: {
      CannotLookup: 'Null',
      NoUnsignedValidator: 'Null',
      Custom: 'u8'
    }
  },
  /**
   * Lookup1020: sp_inherents::InherentData
   **/
  PezspInherentsInherentData: {
    data: 'BTreeMap<[u8;8], Bytes>'
  },
  /**
   * Lookup1024: sp_inherents::CheckInherentsResult
   **/
  PezspInherentsCheckInherentsResult: {
    okay: 'bool',
    fatalError: 'bool',
    errors: 'PezspInherentsInherentData'
  },
  /**
   * Lookup1025: sp_runtime::transaction_validity::TransactionSource
   **/
  PezspRuntimeTransactionValidityTransactionSource: {
    _enum: ['InBlock', 'Local', 'External']
  },
  /**
   * Lookup1027: sp_runtime::transaction_validity::ValidTransaction
   **/
  PezspRuntimeTransactionValidityValidTransaction: {
    priority: 'u64',
    requires: 'Vec<Bytes>',
    provides: 'Vec<Bytes>',
    longevity: 'u64',
    propagate: 'bool'
  },
  /**
   * Lookup1028: sp_statement_store::runtime_api::StatementSource
   **/
  PezspStatementStoreRuntimeApiStatementSource: {
    _enum: ['Chain', 'Network', 'Local']
  },
  /**
   * Lookup1030: sp_statement_store::runtime_api::ValidStatement
   **/
  PezspStatementStoreRuntimeApiValidStatement: {
    maxCount: 'u32',
    maxSize: 'u32'
  },
  /**
   * Lookup1031: sp_statement_store::runtime_api::InvalidStatement
   **/
  PezspStatementStoreRuntimeApiInvalidStatement: {
    _enum: ['BadProof', 'NoProof', 'InternalError']
  },
  /**
   * Lookup1035: sp_consensus_babe::BabeConfiguration
   **/
  PezspConsensusBabeBabeConfiguration: {
    slotDuration: 'u64',
    epochLength: 'u64',
    c: '(u64,u64)',
    authorities: 'Vec<(PezspConsensusBabeAppPublic,u64)>',
    randomness: '[u8;32]',
    allowedSlots: 'PezspConsensusBabeAllowedSlots'
  },
  /**
   * Lookup1036: sp_consensus_babe::Epoch
   **/
  PezspConsensusBabeEpoch: {
    epochIndex: 'u64',
    startSlot: 'u64',
    duration: 'u64',
    authorities: 'Vec<(PezspConsensusBabeAppPublic,u64)>',
    randomness: '[u8;32]',
    config: 'PezspConsensusBabeBabeEpochConfiguration'
  },
  /**
   * Lookup1041: pallet_contracts::primitives::ExecReturnValue
   **/
  PezpalletContractsPrimitivesExecReturnValue: {
    flags: 'PezpalletContractsUapiFlagsReturnFlags',
    data: 'Bytes'
  },
  /**
   * Lookup1042: pallet_contracts_uapi::flags::ReturnFlags
   **/
  PezpalletContractsUapiFlagsReturnFlags: {
    bits: 'u32'
  },
  /**
   * Lookup1043: pallet_contracts::primitives::StorageDeposit<Balance>
   **/
  PezpalletContractsPrimitivesStorageDeposit: {
    _enum: {
      Refund: 'u128',
      Charge: 'u128'
    }
  },
  /**
   * Lookup1046: pallet_contracts::primitives::Code<primitive_types::H256>
   **/
  PezpalletContractsPrimitivesCode: {
    _enum: {
      Upload: 'Bytes',
      Existing: 'H256'
    }
  },
  /**
   * Lookup1047: pallet_contracts::primitives::ContractResult<Result<pallet_contracts::primitives::InstantiateReturnValue<sp_core::crypto::AccountId32>, sp_runtime::DispatchError>, Balance, frame_system::EventRecord<kitchensink_runtime::RuntimeEvent, primitive_types::H256>>
   **/
  PezpalletContractsPrimitivesContractResult: {
    gasConsumed: 'PezspWeightsWeightV2Weight',
    gasRequired: 'PezspWeightsWeightV2Weight',
    storageDeposit: 'PezpalletContractsPrimitivesStorageDeposit',
    debugMessage: 'Bytes',
    result: 'Result<PezpalletContractsPrimitivesInstantiateReturnValue, PezspRuntimeDispatchError>',
    events: 'Option<Vec<PezframeSystemEventRecord>>'
  },
  /**
   * Lookup1049: pallet_contracts::primitives::InstantiateReturnValue<sp_core::crypto::AccountId32>
   **/
  PezpalletContractsPrimitivesInstantiateReturnValue: {
    result: 'PezpalletContractsPrimitivesExecReturnValue',
    accountId: 'PezspCoreCryptoAccountId32'
  },
  /**
   * Lookup1051: pallet_contracts::primitives::CodeUploadReturnValue<primitive_types::H256, Balance>
   **/
  PezpalletContractsPrimitivesCodeUploadReturnValue: {
    codeHash: 'H256',
    deposit: 'u128'
  },
  /**
   * Lookup1053: pallet_contracts::primitives::ContractAccessError
   **/
  PezpalletContractsPrimitivesContractAccessError: {
    _enum: ['DoesntExist', 'KeyDecodingFailed', 'MigrationInProgress']
  },
  /**
   * Lookup1056: pallet_revive::primitives::ContractResult<pallet_revive::primitives::ExecReturnValue, Balance>
   **/
  PezpalletRevivePrimitivesContractResultExecReturnValue: {
    gasConsumed: 'PezspWeightsWeightV2Weight',
    gasRequired: 'PezspWeightsWeightV2Weight',
    storageDeposit: 'PezpalletRevivePrimitivesStorageDeposit',
    result: 'Result<PezpalletRevivePrimitivesExecReturnValue, PezspRuntimeDispatchError>'
  },
  /**
   * Lookup1057: pallet_revive::primitives::ExecReturnValue
   **/
  PezpalletRevivePrimitivesExecReturnValue: {
    flags: 'PezpalletReviveUapiFlagsReturnFlags',
    data: 'Bytes'
  },
  /**
   * Lookup1058: pallet_revive_uapi::flags::ReturnFlags
   **/
  PezpalletReviveUapiFlagsReturnFlags: {
    bits: 'u32'
  },
  /**
   * Lookup1059: pallet_revive::primitives::StorageDeposit<Balance>
   **/
  PezpalletRevivePrimitivesStorageDeposit: {
    _enum: {
      Refund: 'u128',
      Charge: 'u128'
    }
  },
  /**
   * Lookup1061: pallet_revive::primitives::Code
   **/
  PezpalletRevivePrimitivesCode: {
    _enum: {
      Upload: 'Bytes',
      Existing: 'H256'
    }
  },
  /**
   * Lookup1062: pallet_revive::primitives::ContractResult<pallet_revive::primitives::InstantiateReturnValue, Balance>
   **/
  PezpalletRevivePrimitivesContractResultInstantiateReturnValue: {
    gasConsumed: 'PezspWeightsWeightV2Weight',
    gasRequired: 'PezspWeightsWeightV2Weight',
    storageDeposit: 'PezpalletRevivePrimitivesStorageDeposit',
    result: 'Result<PezpalletRevivePrimitivesInstantiateReturnValue, PezspRuntimeDispatchError>'
  },
  /**
   * Lookup1063: pallet_revive::primitives::InstantiateReturnValue
   **/
  PezpalletRevivePrimitivesInstantiateReturnValue: {
    result: 'PezpalletRevivePrimitivesExecReturnValue',
    addr: 'H160'
  },
  /**
   * Lookup1065: pallet_revive::evm::api::rpc_types_gen::GenericTransaction
   **/
  PezpalletReviveEvmApiRpcTypesGenGenericTransaction: {
    _alias: {
      r_type: 'r#type'
    },
    accessList: 'Option<Vec<PezpalletReviveEvmApiRpcTypesGenAccessListEntry>>',
    blobVersionedHashes: 'Vec<H256>',
    blobs: 'Vec<Bytes>',
    chainId: 'Option<U256>',
    from: 'Option<H160>',
    gas: 'Option<U256>',
    gasPrice: 'Option<U256>',
    input: 'PezpalletReviveEvmApiRpcTypesGenInputOrData',
    maxFeePerBlobGas: 'Option<U256>',
    maxFeePerGas: 'Option<U256>',
    maxPriorityFeePerGas: 'Option<U256>',
    nonce: 'Option<U256>',
    to: 'Option<H160>',
    r_type: 'Option<u8>',
    value: 'Option<U256>'
  },
  /**
   * Lookup1068: pallet_revive::evm::api::rpc_types_gen::AccessListEntry
   **/
  PezpalletReviveEvmApiRpcTypesGenAccessListEntry: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup1073: pallet_revive::evm::api::rpc_types_gen::InputOrData
   **/
  PezpalletReviveEvmApiRpcTypesGenInputOrData: {
    input: 'Option<Bytes>',
    data: 'Option<Bytes>'
  },
  /**
   * Lookup1078: pallet_revive::primitives::EthTransactInfo<Balance>
   **/
  PezpalletRevivePrimitivesEthTransactInfo: {
    gasRequired: 'PezspWeightsWeightV2Weight',
    storageDeposit: 'u128',
    ethGas: 'U256',
    data: 'Bytes'
  },
  /**
   * Lookup1079: pallet_revive::primitives::EthTransactError
   **/
  PezpalletRevivePrimitivesEthTransactError: {
    _enum: {
      Data: 'Bytes',
      Message: 'Text'
    }
  },
  /**
   * Lookup1081: pallet_revive::primitives::CodeUploadReturnValue<Balance>
   **/
  PezpalletRevivePrimitivesCodeUploadReturnValue: {
    codeHash: 'H256',
    deposit: 'u128'
  },
  /**
   * Lookup1083: pallet_revive::primitives::ContractAccessError
   **/
  PezpalletRevivePrimitivesContractAccessError: {
    _enum: ['DoesntExist', 'KeyDecodingFailed']
  },
  /**
   * Lookup1084: pallet_revive::evm::api::debug_rpc_types::TracerType
   **/
  PezpalletReviveEvmApiDebugRpcTypesTracerType: {
    _enum: {
      CallTracer: 'Option<PezpalletReviveEvmApiDebugRpcTypesCallTracerConfig>'
    }
  },
  /**
   * Lookup1086: pallet_revive::evm::api::debug_rpc_types::CallTracerConfig
   **/
  PezpalletReviveEvmApiDebugRpcTypesCallTracerConfig: {
    withLogs: 'bool',
    onlyTopCall: 'bool'
  },
  /**
   * Lookup1089: pallet_revive::evm::api::debug_rpc_types::Trace
   **/
  PezpalletReviveEvmApiDebugRpcTypesTrace: {
    _enum: {
      Call: 'PezpalletReviveEvmApiDebugRpcTypesCallTrace'
    }
  },
  /**
   * Lookup1090: pallet_revive::evm::api::debug_rpc_types::CallTrace<primitive_types::U256>
   **/
  PezpalletReviveEvmApiDebugRpcTypesCallTrace: {
    from: 'H160',
    gas: 'U256',
    gasUsed: 'U256',
    to: 'H160',
    input: 'Bytes',
    output: 'Bytes',
    error: 'Option<Text>',
    revertReason: 'Option<Text>',
    calls: 'Vec<PezpalletReviveEvmApiDebugRpcTypesCallTrace>',
    logs: 'Vec<PezpalletReviveEvmApiDebugRpcTypesCallLog>',
    value: 'Option<U256>',
    callType: 'PezpalletReviveEvmApiDebugRpcTypesCallType'
  },
  /**
   * Lookup1094: pallet_revive::evm::api::debug_rpc_types::CallLog
   **/
  PezpalletReviveEvmApiDebugRpcTypesCallLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes',
    position: 'u32'
  },
  /**
   * Lookup1095: pallet_revive::evm::api::debug_rpc_types::CallType
   **/
  PezpalletReviveEvmApiDebugRpcTypesCallType: {
    _enum: ['Call', 'StaticCall', 'DelegateCall']
  },
  /**
   * Lookup1098: pallet_transaction_payment::types::RuntimeDispatchInfo<Balance, sp_weights::weight_v2::Weight>
   **/
  PezpalletTransactionPaymentRuntimeDispatchInfo: {
    weight: 'PezspWeightsWeightV2Weight',
    class: 'PezframeSupportDispatchDispatchClass',
    partialFee: 'u128'
  },
  /**
   * Lookup1099: pallet_transaction_payment::types::FeeDetails<Balance>
   **/
  PezpalletTransactionPaymentFeeDetails: {
    inclusionFee: 'Option<PezpalletTransactionPaymentInclusionFee>',
    tip: 'u128'
  },
  /**
   * Lookup1101: pallet_transaction_payment::types::InclusionFee<Balance>
   **/
  PezpalletTransactionPaymentInclusionFee: {
    baseFee: 'u128',
    lenFee: 'u128',
    adjustedWeightFee: 'u128'
  },
  /**
   * Lookup1105: sp_consensus_beefy::ValidatorSet<sp_consensus_beefy::ecdsa_crypto::Public>
   **/
  PezspConsensusBeefyValidatorSet: {
    validators: 'Vec<PezspConsensusBeefyEcdsaCryptoPublic>',
    id: 'u64'
  },
  /**
   * Lookup1106: sp_consensus_beefy::ForkVotingProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_beefy::ecdsa_crypto::Public, sp_runtime::OpaqueValue>
   **/
  PezspConsensusBeefyForkVotingProofOpaqueValue: {
    vote: 'PezspConsensusBeefyVoteMessage',
    ancestryProof: 'Bytes',
    header: 'PezspRuntimeHeader'
  },
  /**
   * Lookup1108: sp_mmr_primitives::Error
   **/
  PezspMmrPrimitivesError: {
    _enum: ['InvalidNumericOp', 'Push', 'GetRoot', 'Commit', 'GenerateProof', 'Verify', 'LeafNotFound', 'PalletNotIncluded', 'InvalidLeafIndex', 'InvalidBestKnownBlock']
  },
  /**
   * Lookup1114: sp_mmr_primitives::LeafProof<primitive_types::H256>
   **/
  PezspMmrPrimitivesLeafProof: {
    leafIndices: 'Vec<u64>',
    leafCount: 'u64',
    items: 'Vec<H256>'
  },
  /**
   * Lookup1116: sp_mixnet::types::SessionStatus
   **/
  PezspMixnetSessionStatus: {
    currentIndex: 'u32',
    phase: 'PezspMixnetSessionPhase'
  },
  /**
   * Lookup1117: sp_mixnet::types::SessionPhase
   **/
  PezspMixnetSessionPhase: {
    _enum: ['CoverToCurrent', 'RequestsToCurrent', 'CoverToPrev', 'DisconnectFromPrev']
  },
  /**
   * Lookup1120: sp_mixnet::types::Mixnode
   **/
  PezspMixnetMixnode: {
    kxPublic: '[u8;32]',
    peerId: '[u8;32]',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup1121: sp_mixnet::types::MixnodesErr
   **/
  PezspMixnetMixnodesErr: {
    _enum: {
      InsufficientRegistrations: {
        num: 'u32',
        min: 'u32'
      }
    }
  },
  /**
   * Lookup1127: kitchensink_runtime::RuntimeError
   **/
  KitchensinkRuntimeRuntimeError: {
    _enum: {
      System: 'PezframeSystemError',
      Utility: 'PezpalletUtilityError',
      Babe: 'PezpalletBabeError',
      __Unused3: 'Null',
      __Unused4: 'Null',
      Indices: 'PezpalletIndicesError',
      Balances: 'PezpalletBalancesError',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      ElectionProviderMultiPhase: 'PezpalletElectionProviderMultiPhaseError',
      Staking: 'PezpalletStakingPezpalletError',
      Session: 'PezpalletSessionError',
      Democracy: 'PezpalletDemocracyError',
      Council: 'PezpalletCollectiveError',
      TechnicalCommittee: 'PezpalletCollectiveError',
      Elections: 'PezpalletElectionsPhragmenError',
      TechnicalMembership: 'PezpalletMembershipError',
      Grandpa: 'PezpalletGrandpaError',
      Treasury: 'PezpalletTreasuryError',
      AssetRate: 'PezpalletAssetRateError',
      Contracts: 'PezpalletContractsError',
      Sudo: 'PezpalletSudoError',
      ImOnline: 'PezpalletImOnlineError',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      Identity: 'PezpalletIdentityError',
      Society: 'PezpalletSocietyError',
      Recovery: 'PezpalletRecoveryError',
      Vesting: 'PezpalletVestingError',
      Scheduler: 'PezpalletSchedulerError',
      Glutton: 'PezpalletGluttonError',
      Preimage: 'PezpalletPreimageError',
      Proxy: 'PezpalletProxyError',
      Multisig: 'PezpalletMultisigError',
      Bounties: 'PezpalletBountiesError',
      Tips: 'PezpalletTipsError',
      Assets: 'PezpalletAssetsError',
      PoolAssets: 'PezpalletAssetsError',
      Beefy: 'PezpalletBeefyError',
      __Unused42: 'Null',
      __Unused43: 'Null',
      Lottery: 'PezpalletLotteryError',
      Nis: 'PezpalletNisError',
      Uniques: 'PezpalletUniquesError',
      Nfts: 'PezpalletNftsError',
      NftFractionalization: 'PezpalletNftFractionalizationError',
      Salary: 'PezpalletSalaryError',
      CoreFellowship: 'PezpalletCoreFellowshipError',
      TransactionStorage: 'PezpalletTransactionStorageError',
      VoterList: 'PezpalletBagsListError',
      StateTrieMigration: 'PezpalletStateTrieMigrationError',
      ChildBounties: 'PezpalletChildBountiesError',
      Referenda: 'PezpalletReferendaError',
      Remark: 'PezpalletRemarkError',
      __Unused57: 'Null',
      ConvictionVoting: 'PezpalletConvictionVotingError',
      Whitelist: 'PezpalletWhitelistError',
      AllianceMotion: 'PezpalletCollectiveError',
      Alliance: 'PezpalletAllianceError',
      NominationPools: 'PezpalletNominationPoolsError',
      RankedPolls: 'PezpalletReferendaError',
      RankedCollective: 'PezpalletRankedCollectiveError',
      AssetConversion: 'PezpalletAssetConversionError',
      FastUnstake: 'PezpalletFastUnstakeError',
      MessageQueue: 'PezpalletMessageQueueError',
      __Unused68: 'Null',
      TxPause: 'PezpalletTxPauseError',
      SafeMode: 'PezpalletSafeModeError',
      __Unused71: 'Null',
      MultiBlockMigrations: 'PezpalletMigrationsError',
      Broker: 'PezpalletBrokerError',
      TasksExample: 'PezpalletExampleTasksError',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      AssetConversionMigration: 'PezpalletAssetConversionOpsError',
      Revive: 'PezpalletReviveError',
      __Unused81: 'Null',
      DelegatedStaking: 'PezpalletDelegatedStakingError',
      AssetRewards: 'PezpalletAssetRewardsError',
      AssetsFreezer: 'PezpalletAssetsFreezerError',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      MetaTx: 'PezpalletMetaTxError'
    }
  }
};
