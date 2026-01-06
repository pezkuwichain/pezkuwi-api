// Copyright 2017-2025 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@pezkuwi/api';
import type { SubmittableExtrinsic } from '@pezkuwi/api-base/types';
import type { Proposal, ProposalIndex } from '@pezkuwi/types/interfaces';
import type { Registry } from '@pezkuwi/types/types';

export class ProposalFactory {
  readonly #api: ApiPromise;
  readonly #registry: Registry;

  constructor (api: ApiPromise) {
    this.#api = api;
    this.#registry = this.#api.registry;
  }

  public createProposal = (method: SubmittableExtrinsic<'promise'>): Proposal => {
    return this.#registry.createType('Proposal', method);
  };

  public proposalIndex = (index: number): ProposalIndex => {
    return this.#registry.createType('ProposalIndex', index);
  };
}
