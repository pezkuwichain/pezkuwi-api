// Copyright 2017-2026 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';

export default {
  rpc,
  types: {
    // StorageKey extends Bytes
    PrefixedStorageKey: 'StorageKey'
  }
} as Definitions;
