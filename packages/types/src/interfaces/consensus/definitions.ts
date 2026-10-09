// Copyright 2017-2026 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)

import type { Definitions } from '../../types/index.js';

export default {
  rpc: {},
  types: {
    AuthorityId: 'AccountId',
    RawVRFOutput: '[u8; 32]'
  }
} as Definitions;
