// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@pezkuwi/types-codec/types';
import type { StorageEntry } from '../../../primitive/types.js';
import type { Storage } from '../types.js';

import { bizinikiwi } from './bizinikiwi.js';

/** @internal */
export function getStorage (registry: Registry): Storage {
  const storage: Record<string, StorageEntry> = {};
  const entries = Object.entries(bizinikiwi);

  for (let e = 0, count = entries.length; e < count; e++) {
    storage[entries[e][0]] = entries[e][1](registry);
  }

  return { bizinikiwi: storage };
}
