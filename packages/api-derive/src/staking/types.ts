// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, u32, Vec } from '@pezkuwi/types';
import type { AccountId, Balance, EraIndex, RewardPoint } from '@pezkuwi/types/interfaces';
import type { PezpalletStakingRewardDestination, PezpalletStakingStakingLedger, PezpalletStakingValidatorPrefs, PezspStakingExposure, PezspStakingExposurePage, PezspStakingPagedExposureMetadata } from '@pezkuwi/types/lookup';
import type { BN } from '@pezkuwi/util';
import type { DeriveSessionIndexes } from '../session/types.js';

export type DeriveEraValPoints = Record<string, RewardPoint>;

export type DeriveEraValPrefs = Record<string, PezpalletStakingValidatorPrefs>;

export type DeriveEraValSlash = Record<string, Balance>;

export interface DeriveEraPoints {
  era: EraIndex;
  eraPoints: RewardPoint;
  validators: DeriveEraValPoints;
}

export interface DeriveEraPrefs {
  era: EraIndex;
  validators: DeriveEraValPrefs;
}

export interface DeriveEraRewards {
  era: EraIndex;
  eraReward: Balance;
}

export interface DeriveEraSlashes {
  era: EraIndex;
  nominators: DeriveEraValSlash;
  validators: DeriveEraValSlash;
}

export interface DeriveStakerPoints {
  era: EraIndex;
  eraPoints: RewardPoint;
  points: RewardPoint;
}

export interface DeriveOwnExposure {
  clipped: PezspStakingExposure;
  exposurePaged: Option<PezspStakingExposurePage>;
  era: EraIndex;
  exposure: PezspStakingExposure;
  exposureMeta: Option<PezspStakingPagedExposureMetadata>;
}

export interface DeriveEraExposureNominating {
  validatorId: string;
  validatorIndex: number;
}

export type DeriveEraNominatorExposure = Record<string, DeriveEraExposureNominating[]>;

export type DeriveEraValidatorExposure = Record<string, PezspStakingExposure>;

export type DeriveEraValidatorExposurePaged = Record<string, PezspStakingExposurePage | PezspStakingExposure>;

export interface DeriveEraExposure {
  era: EraIndex;
  nominators: DeriveEraNominatorExposure;
  validators: DeriveEraValidatorExposure;
}

export interface DeriveEraExposurePaged {
  era: EraIndex;
  nominators: DeriveEraNominatorExposure;
  validators: DeriveEraValidatorExposurePaged;
}

export interface DeriveStakerExposure {
  era: EraIndex;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: DeriveEraExposureNominating[];
  validators: DeriveEraValidatorExposurePaged;
}

export interface DeriveStakerPrefs {
  era: EraIndex;
  validatorPrefs: PezpalletStakingValidatorPrefs;
}

export interface DeriveStakerRewardValidator {
  total: Balance;
  value: Balance;
}

export interface DeriveStakerReward {
  era: EraIndex;
  eraReward: Balance;
  isClaimed: boolean;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: DeriveEraExposureNominating[];
  validators: Record<string, DeriveStakerRewardValidator>;
}

export interface DeriveStakerSlashes {
  era: EraIndex;
  total: Balance;
}

export type DeriveOwnSlashes = DeriveStakerSlashes;

export interface DeriveStakingKeys {
  nextSessionIds: AccountId[];
  sessionIds: AccountId[];
}

export interface DeriveStakingValidators {
  nextElected: AccountId[];
  validators: AccountId[];
}

export interface DeriveStakingStash {
  controllerId: AccountId | null;
  // Legacy Support for erasStakers
  exposureEraStakers: PezspStakingExposure;
  exposurePaged: Option<PezspStakingExposurePage>;
  exposureMeta: Option<PezspStakingPagedExposureMetadata>;
  nominators: AccountId[];
  rewardDestination: PezpalletStakingRewardDestination | null;
  stashId: AccountId;
  validatorPrefs: PezpalletStakingValidatorPrefs;
  claimedRewardsEras: Vec<u32>
}

export interface DeriveStakingQuery extends DeriveStakingStash {
  accountId: AccountId;
  stakingLedger: PezpalletStakingStakingLedger;
}

export interface DeriveStakingElected {
  info: DeriveStakingQuery[];
  nextElected: AccountId[];
  validators: AccountId[];
}

export interface DeriveStakingWaiting {
  info: DeriveStakingQuery[];
  waiting: AccountId[];
}

export interface DeriveUnlocking {
  remainingEras: BN;
  value: Balance;
}

export interface DeriveStakingAccount extends DeriveStakingQuery, DeriveStakingKeys {
  redeemable?: Balance;
  unlocking?: DeriveUnlocking[];
}

export interface DeriveStakingOverview extends DeriveSessionIndexes {
  nextElected: AccountId[];
  validators: AccountId[];
}

export interface StakingQueryFlags {
  withController?: boolean;
  withDestination?: boolean;
  withExposure?: boolean;
  withExposureErasStakersLegacy?: boolean,
  withLedger?: boolean;
  withNominations?: boolean;
  withPrefs?: boolean;
  withExposureMeta?: boolean;
  withClaimedRewardsEras?: boolean;
}
