// Copyright 2017-2026 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideVersionedType } from '@pezkuwi/types/types';

export const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      // nothing, API tracks master
      // (v2 weights are not yet the default)
      Weight: 'WeightV2'
    }
  }
];
