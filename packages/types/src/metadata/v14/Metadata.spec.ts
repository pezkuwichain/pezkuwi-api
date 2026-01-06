// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import bizinikiwiData from '@pezkuwi/types-support/metadata/v14/bizinikiwi-hex';
import dicleData from '@pezkuwi/types-support/metadata/v14/dicle-hex';
import pezkuwiData from '@pezkuwi/types-support/metadata/v14/pezkuwi-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(14, {
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
