// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* import assetHubDicleData from '@pezkuwi/types-support/metadata/v16/asset-hub-dicle-hex';
import assetHubPezkuwiData from '@pezkuwi/types-support/metadata/v16/asset-hub-pezkuwi-hex';
import dicleData from '@pezkuwi/types-support/metadata/v16/dicle-hex';
import pezkuwiData from '@pezkuwi/types-support/metadata/v16/pezkuwi-hex';*/
import bizinikiwiData from '@pezkuwi/types-support/metadata/v16/bizinikiwi-hex';

import { testMeta } from '../util/testUtil.js';

// TODO: Once MetadataV16 lands in an official release, pull the
// latest metadata for each chain and update the tests
testMeta(16, {
/*   'asset-hub-dicle': {
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
  },*/
  bizinikiwi: {
    data: bizinikiwiData
  }
});
