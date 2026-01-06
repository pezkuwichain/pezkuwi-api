// Copyright 2017-2025 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@pezkuwi/types/types';

import { mapXcmTypes } from '@pezkuwi/types-create';

const sharedTypes = {
  DispatchErrorModule: 'DispatchErrorModuleU8',
  TAssetBalance: 'u128',
  ProxyType: {
    _enum: [
      'Any',
      'NonTransfer',
      'CancelProxy',
      'Assets',
      'AssetOwner',
      'AssetManager',
      'Staking'
    ]
  },
  Weight: 'WeightV1'
};

// these are override types for Statemine, Westmint
export const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 3],
    types: {
      // Enum was modified mid-flight -
      // https://github.com/pezkuwichain/bizinikiwi/pull/10382/files#diff-e4e016b33a82268b6208dc974eea841bad47597865a749fee2f937eb6fdf67b4R498
      DispatchError: 'DispatchErrorPre6First',
      ...sharedTypes,
      ...mapXcmTypes('V0')
    }
  },
  {
    minmax: [4, 5],
    types: {
      // As above, see https://github.com/pezkuwichain/pezkuwi-api/issues/5301
      DispatchError: 'DispatchErrorPre6First',
      ...sharedTypes,
      ...mapXcmTypes('V1')
    }
  },
  {
    // metadata V14
    minmax: [500, 9434],
    types: {
      Weight: 'WeightV1',
      TAssetConversion: 'Option<AssetId>'
    }
  },
  {
    minmax: [9435, undefined],
    types: {
      Weight: 'WeightV1'
    }
  }
];
