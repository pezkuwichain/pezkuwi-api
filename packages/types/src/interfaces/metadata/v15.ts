// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v15: DefinitionsTypes = {
  // new/adjusted in v15
  CustomMetadata15: {
    map: 'BTreeMap<Text, CustomValueMetadata15>'
  },
  CustomValueMetadata15: {
    type: 'SiLookupTypeId',
    value: 'Bytes'
  },
  ExtrinsicMetadataV15: {
    version: 'u8',
    addressType: 'SiLookupTypeId',
    callType: 'SiLookupTypeId',
    signatureType: 'SiLookupTypeId',
    extraType: 'SiLookupTypeId',
    signedExtensions: 'Vec<SignedExtensionMetadataV14>'
  },
  OuterEnums15: {
    callType: 'SiLookupTypeId',
    eventType: 'SiLookupTypeId',
    errorType: 'SiLookupTypeId'
  },
  PezpalletMetadataV15: {
    name: 'Text',
    storage: 'Option<PezpalletStorageMetadataV14>',
    calls: 'Option<PezpalletCallMetadataV14>',
    events: 'Option<PezpalletEventMetadataV14>',
    constants: 'Vec<PezpalletConstantMetadataV14>',
    errors: 'Option<PezpalletErrorMetadataV14>',
    index: 'u8',
    docs: 'Vec<Text>'
  },
  RuntimeApiMetadataV15: {
    name: 'Text',
    methods: 'Vec<RuntimeApiMethodMetadataV15>',
    docs: 'Vec<Text>'
  },
  RuntimeApiMethodMetadataV15: {
    name: 'Text',
    inputs: 'Vec<RuntimeApiMethodParamMetadataV15>',
    output: 'SiLookupTypeId',
    docs: 'Vec<Text>'
  },
  RuntimeApiMethodParamMetadataV15: {
    name: 'Text',
    type: 'SiLookupTypeId'
  },

  // actual v15 definition
  MetadataV15: {
    lookup: 'PortableRegistry',
    pallets: 'Vec<PezpalletMetadataV15>',
    extrinsic: 'ExtrinsicMetadataV15',
    type: 'SiLookupTypeId',
    apis: 'Vec<RuntimeApiMetadataV15>',
    outerEnums: 'OuterEnums15',
    custom: 'CustomMetadata15'
  }
};
