// Copyright 2017-2026 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import bizinikiwiData from '@pezkuwi/types-support/metadata/v14/bizinikiwi-hex';
import dicleData from '@pezkuwi/types-support/metadata/v14/dicle-hex';
import pezkuwiData from '@pezkuwi/types-support/metadata/v14/pezkuwi-hex';

import { testMeta } from '../test/testUtil.js';

testMeta(14, {
  bizinikiwi: {
    data: bizinikiwiData
  },
  dicle: {
    data: dicleData
  },
  pezkuwi: {
    data: pezkuwiData
  }
});
