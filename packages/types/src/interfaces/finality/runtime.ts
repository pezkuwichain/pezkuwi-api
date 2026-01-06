// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

// implemented by chains bridging into the relay, not the relay itself
const finalityV1 = {
  methods: {
    best_finalized: {
      description: 'Returns number and hash of the best finalized header known to the bridge module.',
      params: [],
      type: '(BlockNumber, Hash)'
    }
  },
  version: 1
};

export const runtime: DefinitionsCall = {
  DicleFinalityApi: [finalityV1],
  ZagrosFinalityApi: [finalityV1],
  PezkuwiFinalityApi: [finalityV1],
  PezkuwichainFinalityApi: [finalityV1]
};
