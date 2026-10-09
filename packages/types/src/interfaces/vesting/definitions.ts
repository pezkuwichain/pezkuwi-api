// Copyright 2017-2026 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)

import type { Definitions } from '../../types/index.js';

export default {
  rpc: {},
  types: {
    VestingInfo: {
      locked: 'Balance',
      perBlock: 'Balance',
      startingBlock: 'BlockNumber'
    }
  }
} as Definitions;
