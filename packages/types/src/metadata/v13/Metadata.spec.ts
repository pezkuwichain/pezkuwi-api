// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import bizinikiwiData from '@pezkuwi/types-support/metadata/v13/bizinikiwi-hex';
import dicleData from '@pezkuwi/types-support/metadata/v13/dicle-hex';
import pezkuwiData from '@pezkuwi/types-support/metadata/v13/pezkuwi-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(13, {
  dicle: {
    data: dicleData,
    fails: [
      // RawSolution has 24 entries
      'SignedSubmissionOf'
    ]
  },
  pezkuwi: {
    data: pezkuwiData
  },
  bizinikiwi: {
    data: bizinikiwiData
  }
});
