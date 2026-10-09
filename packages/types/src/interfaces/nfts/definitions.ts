// Copyright 2017-2026 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

export default {
  rpc: {},
  runtime,
  types: {
    NftCollectionId: 'u32',
    NftItemId: 'u32'
  }
} as Definitions;
