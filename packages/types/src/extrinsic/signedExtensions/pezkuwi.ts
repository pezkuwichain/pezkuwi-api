// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef } from './types.js';

import { emptyCheck } from './emptyCheck.js';

export const pezkuwi: ExtDef = {
  LimitParathreadCommits: emptyCheck,
  OnlyStakingAndClaims: emptyCheck,
  PrevalidateAttests: emptyCheck,
  RestrictFunctionality: emptyCheck,
  TransactionCallFilter: emptyCheck,
  ValidateDoubleVoteReports: emptyCheck
};
