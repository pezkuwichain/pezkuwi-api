// Copyright 2017-2025 @pezkuwi/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@pezkuwi/api/base';

import { TypeRegistry } from '@pezkuwi/types';

const registry = new TypeRegistry();

const instantiateWithCode = (): never => {
  throw new Error('mock');
};

instantiateWithCode.meta = { args: new Array(6) };

export const mockApi = {
  call: {
    contractsApi: {
      call: (): never => {
        throw new Error('mock');
      }
    }
  },
  isConnected: true,
  registry,
  tx: {
    contracts: {
      instantiateWithCode
    }
  }
} as unknown as ApiBase<'promise'>;

export const mockReviveApi = {
  call: {
    reviveApi: {
      call: (): never => {
        throw new Error('mock');
      }
    }
  },
  isConnected: true,
  registry,
  tx: {
    revive: {
      instantiateWithCode
    }
  }
} as unknown as ApiBase<'promise'>;
