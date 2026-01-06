// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import assetHubDicleData from '@pezkuwi/types-support/metadata/v15/asset-hub-dicle-hex';
import assetHubPezkuwiData from '@pezkuwi/types-support/metadata/v15/asset-hub-pezkuwi-hex';
import bizinikiwiData from '@pezkuwi/types-support/metadata/v15/bizinikiwi-hex';
import dicleData from '@pezkuwi/types-support/metadata/v15/dicle-hex';
import pezkuwiData from '@pezkuwi/types-support/metadata/v15/pezkuwi-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(15, {
  'asset-hub-dicle': {
    data: assetHubDicleData
  },
  'asset-hub-pezkuwi': {
    data: assetHubPezkuwiData
  },
  dicle: {
    data: dicleData
  },
  pezkuwi: {
    data: pezkuwiData
  },
  bizinikiwi: {
    data: bizinikiwiData
  }
});
