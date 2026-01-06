// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PezframeSystemEventRecord } from '@pezkuwi/types/lookup';
import type { Vec } from '@pezkuwi/types-codec';
import type { BN } from '@pezkuwi/util';

interface Changes {
  added: string[];
  blockHash: string;
  removed: string[];
}

export function extractContributed (paraId: string | number | BN, events: Vec<PezframeSystemEventRecord>): Changes {
  const added: string[] = [];
  const removed: string[] = [];

  return events
    .filter(({ event: { data: [, eventParaId], method, section } }) =>
      section === 'crowdloan' &&
      ['Contributed', 'Withdrew'].includes(method) &&
      eventParaId.eq(paraId)
    )
    .reduce((result: Changes, { event: { data: [accountId], method } }): Changes => {
      if (method === 'Contributed') {
        result.added.push(accountId.toHex());
      } else {
        result.removed.push(accountId.toHex());
      }

      return result;
    }, { added, blockHash: events.createdAtHash?.toHex() || '-', removed });
}
