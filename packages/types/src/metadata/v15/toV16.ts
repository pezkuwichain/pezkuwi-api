// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtrinsicMetadataV15, ExtrinsicMetadataV16, ItemDeprecationInfoV16, MetadataV15, MetadataV16, PezpalletAssociatedTypeMetadataV16, PezpalletCallMetadataV14, PezpalletCallMetadataV16, PezpalletConstantMetadataV14, PezpalletConstantMetadataV16, PezpalletErrorMetadataV14, PezpalletErrorMetadataV16, PezpalletEventMetadataV14, PezpalletEventMetadataV16, PezpalletMetadataV15, PezpalletMetadataV16, PezpalletStorageMetadataV14, PezpalletStorageMetadataV16, RuntimeApiMetadataV15, RuntimeApiMetadataV16, StorageEntryMetadataV16, TransactionExtensionMetadataV16 } from '../../interfaces/metadata/index.js';
import type { Registry } from '../../types/index.js';

import { type Vec } from '@pezkuwi/types-codec';
import { objectSpread } from '@pezkuwi/util';

function palletsFromV15 (registry: Registry, palletV15: PezpalletMetadataV15): PezpalletMetadataV16 {
  const deprecationInfo: ItemDeprecationInfoV16 = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);
  const associatedTypes: Vec<PezpalletAssociatedTypeMetadataV16> = registry.createTypeUnsafe('Vec<PezpalletAssociatedTypeMetadataV16>', [[]]);
  const viewFunctions: Vec<PezpalletAssociatedTypeMetadataV16> = registry.createTypeUnsafe('Vec<PezpalletViewFunctionMetadataV16>', [[]]);

  return registry.createTypeUnsafe('PezpalletMetadataV16', [
    objectSpread({}, palletV15, {
      associatedTypes,
      calls: palletV15.calls.isSome ? convertCalls(registry, palletV15.calls.unwrap()) : null,
      constants: convertConstants(registry, palletV15.constants),
      deprecationInfo,
      errors: palletV15.errors.isSome ? converErrors(registry, palletV15.errors.unwrap()) : null,
      events: palletV15.events.isSome ? convertEvents(registry, palletV15.events.unwrap()) : null,
      storage: palletV15.storage.isSome ? convertStorage(registry, palletV15.storage.unwrap()) : null,
      viewFunctions
    })
  ]);
}

function convertStorage (registry: Registry, storage: PezpalletStorageMetadataV14): PezpalletStorageMetadataV16 {
  const deprecationInfo: ItemDeprecationInfoV16 = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);

  const items: StorageEntryMetadataV16[] = storage.items.map((item) =>
    registry.createTypeUnsafe('StorageEntryMetadataV16', [
      objectSpread({}, item, { deprecationInfo })
    ])
  );

  return registry.createTypeUnsafe('PezpalletStorageMetadataV16', [{
    items: registry.createTypeUnsafe('Vec<StorageEntryMetadataV16>', [items]),
    prefix: storage.prefix
  }]);
}

function convertCalls (registry: Registry, calls: PezpalletCallMetadataV14): PezpalletCallMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('EnumDeprecationInfoV16', []);

  return registry.createTypeUnsafe('PezpalletCallMetadataV16', [{
    deprecationInfo,
    type: calls.type
  }]);
}

function convertEvents (registry: Registry, events: PezpalletEventMetadataV14): PezpalletEventMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('EnumDeprecationInfoV16', []);

  return registry.createTypeUnsafe('PezpalletEventMetadataV16', [{
    deprecationInfo,
    type: events.type
  }]);
}

function convertConstants (registry: Registry, constants: Vec<PezpalletConstantMetadataV14>): Vec<PezpalletConstantMetadataV16> {
  const deprecationInfo: ItemDeprecationInfoV16 = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);

  return registry.createTypeUnsafe('Vec<PezpalletConstantMetadataV16>', [
    constants.map((constant) => registry.createTypeUnsafe('PezpalletConstantMetadataV16', [
      objectSpread({}, constant, { deprecationInfo })
    ]))]
  );
}

function converErrors (registry: Registry, errors: PezpalletErrorMetadataV14): PezpalletErrorMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('EnumDeprecationInfoV16', []);

  return registry.createTypeUnsafe('PezpalletErrorMetadataV16', [{
    deprecationInfo,
    type: errors.type
  }]);
}

function extrinsicFromV15 (registry: Registry, extrinsicV15: ExtrinsicMetadataV15): ExtrinsicMetadataV16 {
  const transactionExtensions: TransactionExtensionMetadataV16[] = extrinsicV15.signedExtensions.map(({ additionalSigned, identifier, type }) =>
    registry.createTypeUnsafe('TransactionExtensionMetadataV16', [{
      identifier,
      implict: additionalSigned,
      type
    }])
  );

  const indexes = transactionExtensions.map((_, i) =>
    registry.createTypeUnsafe('Compact<u32>', [i])
  );

  const transactionExtensionsByVersion = registry.createTypeUnsafe(
    'BTreeMap<u8, Vec<Compact<u32>>>',
    [new Map([[registry.createTypeUnsafe('u8', [extrinsicV15.version]), registry.createTypeUnsafe('Vec<Compact<u32>>', [indexes])]])]
  );

  return registry.createTypeUnsafe('ExtrinsicMetadataV16', [
    {
      addressType: extrinsicV15.addressType,
      callType: extrinsicV15.callType,
      signatureType: extrinsicV15.signatureType,
      transactionExtensions,
      transactionExtensionsByVersion,
      versions: [extrinsicV15.version]
    }
  ]);
}

function apisFromV15 (registry: Registry, runtimeApiV15: RuntimeApiMetadataV15): RuntimeApiMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);

  const methods = runtimeApiV15.methods.map((method) =>
    registry.createTypeUnsafe('RuntimeApiMethodMetadataV16',
      [objectSpread({}, method, { deprecationInfo })]
    )
  );

  return registry.createTypeUnsafe('RuntimeApiMetadataV16', [
    objectSpread({}, runtimeApiV15, {
      deprecationInfo,
      methods,
      version: registry.createTypeUnsafe('Compact<u32>', [0])
    })
  ]);
}

/**
 * Convert the Metadata to v16
 * @internal
 **/
export function toV16 (registry: Registry, v15: MetadataV15, _: number): MetadataV16 {
  const pallets: PezpalletMetadataV16[] = v15.pallets.map((pallet) => {
    return palletsFromV15(registry, pallet);
  });
  const extrinsic: ExtrinsicMetadataV16 = extrinsicFromV15(registry, v15.extrinsic);
  const apis: RuntimeApiMetadataV16[] = v15.apis.map((runtimeApi) => apisFromV15(registry, runtimeApi));

  return registry.createTypeUnsafe('MetadataV16', [
    objectSpread({}, v15, {
      apis,
      extrinsic,
      pallets
    })
  ]);
}
