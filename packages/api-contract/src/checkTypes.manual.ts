// Copyright 2017-2025 @pezkuwi/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Simple non-runnable checks to test type definitions in the editor itself

import '@pezkuwi/api-augment';

import type { TestKeyringMapBizinikiwi } from '@pezkuwi/keyring/testingPairs';

import { ApiPromise } from '@pezkuwi/api';
import { BlueprintPromise, ContractPromise } from '@pezkuwi/api-contract';
import { createTestPairs } from '@pezkuwi/keyring/testingPairs';

import abiIncrementer from './test/contracts/ink/v0/incrementer.json' assert { type: 'json' };

async function checkBlueprint (api: ApiPromise, pairs: TestKeyringMapBizinikiwi): Promise<void> {
  const blueprint = new BlueprintPromise(api, abiIncrementer as Record<string, unknown>, '0x1234');

  await blueprint.tx['new']({ gasLimit: 456, salt: '0x1234', value: 123 }, 42).signAndSend(pairs.bob);
  await blueprint.tx['new']({ gasLimit: 456, value: 123 }, 42).signAndSend(pairs.bob);
}

async function checkContract (api: ApiPromise, pairs: TestKeyringMapBizinikiwi): Promise<void> {
  const contract = new ContractPromise(api, abiIncrementer as Record<string, unknown>, '0x1234');

  // queries
  await contract.query['get'](pairs.alice.address, {});

  // execute
  await contract.tx['inc']({ gasLimit: 1234 }, 123).signAndSend(pairs.eve);
}

async function main (): Promise<void> {
  const api = await ApiPromise.create({
    hasher: (data: Uint8Array): Uint8Array => data
  });
  const pairs = createTestPairs();

  await Promise.all([
    checkBlueprint(api, pairs),
    checkContract(api, pairs)
  ]);
}

main().catch(console.error);
