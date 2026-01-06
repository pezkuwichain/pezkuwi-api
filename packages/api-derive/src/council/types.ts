// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance } from '@pezkuwi/types/interfaces';

export interface DeriveCouncilVote {
  stake: Balance;
  votes: AccountId[];
}

export type DeriveCouncilVotes = [AccountId, DeriveCouncilVote][];
