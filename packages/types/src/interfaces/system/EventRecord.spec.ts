// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import json1 from '@pezkuwi/types-support/json/EventRecord.001.json' with { type: 'json' };
import json3 from '@pezkuwi/types-support/json/EventRecord.003.json' with { type: 'json' };
import rpcMetadata from '@pezkuwi/types-support/metadata/static-bizinikiwi';

import { TypeRegistry } from '../../create/index.js';
import { Metadata } from '../../metadata/index.js';

describe('EventRecord', (): void => {
  const registry = new TypeRegistry();

  describe('EventRecord (current)', (): void => {
    beforeEach((): void => {
      const metadata = new Metadata(registry, rpcMetadata);

      registry.setMetadata(metadata);
    });

    it('decodes older EventRecord correctly', (): void => {
      const records = registry.createType('Vec<EventRecord>', json1.params.result.changes[0][1], true);
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });

    it('decodes EventRecord with topics correctly', (): void => {
      const hex = json3.params.result.changes[0][1];
      const records = registry.createType('Vec<EventRecord>', hex, true);
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
      expect(records.toHex()).toEqual(hex);
    });
  });
});
