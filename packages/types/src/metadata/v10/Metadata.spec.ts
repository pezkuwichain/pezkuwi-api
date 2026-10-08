// Copyright 2017-2026 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import bizinikiwiData from '@pezkuwi/types-support/metadata/v10/bizinikiwi-hex';

import { testMeta } from '../test/testUtil.js';

testMeta(10, {
  bizinikiwi: {
    data: bizinikiwiData
  }
}, false);
