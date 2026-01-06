// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi } from '../types.js';

export function getQueryInterface (api: DeriveApi): DeriveApi['query']['voterList'] {
  return (
    // latest bizinikiwi & pezkuwi
    api.query.voterList ||
    // previous bizinikiwi
    api.query['voterBagsList'] ||
    api.query['bagsList']
  );
}
