// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import type { HexString } from '@pezkuwi/util/types';

import bizinikiwiV14 from '@pezkuwi/types-support/metadata/v14/bizinikiwi-hex';
import dicleV14 from '@pezkuwi/types-support/metadata/v14/dicle-hex';
import pezkuwiV14 from '@pezkuwi/types-support/metadata/v14/pezkuwi-hex';
import bizinikiwi from '@pezkuwi/types-support/metadata/v15/bizinikiwi-hex';
import dicle from '@pezkuwi/types-support/metadata/v15/dicle-hex';
import pezkuwi from '@pezkuwi/types-support/metadata/v15/pezkuwi-hex';

import { TypeRegistry } from '../create/index.js';
import { Metadata } from './Metadata.js';

const allData: Record<string, HexString> = {
  dicle,
  pezkuwi,
  bizinikiwi
};

const allDataV14: Record<string, HexString> = {
  dicle: dicleV14,
  pezkuwi: pezkuwiV14,
  bizinikiwi: bizinikiwiV14
};

for (const type of ['dicle', 'pezkuwi', 'bizinikiwi'] as const) {
  describe(`${type}metadata`, (): void => {
    const registry = new TypeRegistry();
    const opaqueMetadata = registry.createType('Option<OpaqueMetadata>', registry.createType('Raw', allData[type]).toU8a()).unwrap();
    const metadata = new Metadata(registry, opaqueMetadata.toHex());

    it('allows creation from hex', (): void => {
      expect(
        new Metadata(new TypeRegistry(), metadata.toHex()).toJSON()
      ).toEqual(metadata.toJSON());
    });

    it('has a sane toCallsOnly V14 only', (): void => {
      const metadatav14 = new Metadata(new TypeRegistry(), allDataV14[type]);
      const test = metadatav14.asCallsOnly;

      // it has a useful length
      expect(
        test.toU8a().length > 65536
      ).toBe(true);

      // it sets it to the correct version
      expect(
        test.version
      ).toEqual(14);
    });
  });
}
