// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance, BalanceLockTo212, Index } from '@pezkuwi/types/interfaces';
import type { PezpalletBalancesBalanceLock, PezpalletBalancesReserveData } from '@pezkuwi/types/lookup';
import type { BN } from '@pezkuwi/util';

export interface DeriveBalancesAccountData {
  frameSystemAccountInfo?: {
    frozen: Balance;
    flags: Balance;
  }
  freeBalance: Balance;
  frozenFee: Balance;
  frozenMisc: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
}

export interface DeriveBalancesAccount extends DeriveBalancesAccountData {
  accountId: AccountId;
  accountNonce: Index;
  additional: DeriveBalancesAccountData[];
}

export interface DeriveBalancesAllAccountData extends DeriveBalancesAccountData {
  /**
   * Calculated available balance. This uses the formula: max(0, free - locked)
   * This is only correct when the return type of `api.query.system.account` is `AccountInfo` which was replaced by `PezframeSystemAccountInfo`.
   * See `transferable` for the correct balance calculation.
   *
   * ref: https://github.com/pezkuwichain/bizinikiwi/pull/12951
   */
  availableBalance: Balance;
  /**
   * The amount of balance locked away.
   */
  lockedBalance: Balance;
  /**
   * The breakdown of locked balances.
   */
  lockedBreakdown: (PezpalletBalancesBalanceLock | BalanceLockTo212)[];
  /**
   * Calculated transferable balance. This uses the formula: free - max(maybeEd, frozen - reserve)
   * Where `maybeEd` means if there is no frozen and reserves it will be zero, else it will be the existential deposit.
   * This is only correct when the return type of `api.query.system.account` is `PezframeSystemAccountInfo`.
   * Which is the most up to date calulcation for transferrable balances.
   *
   * ref: https://github.com/pezkuwichain/pezkuwi-sdk/issues/1833
   */
  transferable: Balance | null;
  /**
   * Amount locked in vesting.
   */
  vestingLocked: Balance;
}

export interface DeriveBalancesVesting {
  startingBlock: BN;
  endBlock: BN;
  perBlock: BN;
  locked: BN;
  vested: BN;
}

export interface DeriveBalancesAllVesting {
  isVesting: boolean;
  vestedBalance: BN;
  vestedClaimable: BN;
  vesting: DeriveBalancesVesting[];
  vestingTotal: BN;
}

export interface DeriveBalancesAll extends DeriveBalancesAccount, DeriveBalancesAllAccountData, DeriveBalancesAllVesting {
  additional: DeriveBalancesAllAccountData[];
  namedReserves: PezpalletBalancesReserveData[][];
}

export type DeriveBalancesMap = Record<string, DeriveBalancesAll>;
