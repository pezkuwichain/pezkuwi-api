// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import bizinikiwiData from '@pezkuwi/types-support/metadata/v9/bizinikiwi-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(9, {
  bizinikiwi: {
    data: bizinikiwiData
  }
}, false);
