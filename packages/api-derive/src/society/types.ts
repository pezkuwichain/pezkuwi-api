// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from '@pezkuwi/types';
import type { AccountId, Balance, BalanceOf, BlockNumber, StrikeCount } from '@pezkuwi/types/interfaces';
import type { PezpalletSocietyBid, PezpalletSocietyBidKind, PezpalletSocietyVote, PezpalletSocietyVouchingStatus } from '@pezkuwi/types/lookup';

export interface DeriveSociety {
  bids: PezpalletSocietyBid[];
  defender?: AccountId | undefined;
  hasDefender: boolean;
  head?: AccountId | undefined;
  founder?: AccountId | undefined;
  maxMembers?: u32 | undefined;
  pot: BalanceOf;
}

export interface DeriveSocietyCandidate {
  accountId: AccountId;
  kind: PezpalletSocietyBidKind;
  value: Balance;
  isSuspended: boolean;
}

export interface DeriveSocietyMember {
  accountId: AccountId;
  isDefenderVoter: boolean;
  isSuspended: boolean;
  payouts: [BlockNumber, Balance][];
  strikes: StrikeCount;
  vote?: PezpalletSocietyVote | undefined;
  vouching?: PezpalletSocietyVouchingStatus | undefined;
}
