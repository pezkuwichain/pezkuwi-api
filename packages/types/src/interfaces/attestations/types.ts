// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@pezkuwi/types-codec';
import type { AccountId, BlockNumber, H256, Hash } from '@pezkuwi/types/interfaces/runtime';
import type { SessionIndex } from '@pezkuwi/types/interfaces/session';
import type { CandidateReceipt, ParaId } from '@pezkuwi/types/interfaces/teyrchains';

/** @name BlockAttestations */
export interface BlockAttestations extends Struct {
  readonly receipt: CandidateReceipt;
  readonly valid: Vec<AccountId>;
  readonly invalid: Vec<AccountId>;
}

/** @name IncludedBlocks */
export interface IncludedBlocks extends Struct {
  readonly actualNumber: BlockNumber;
  readonly session: SessionIndex;
  readonly randomSeed: H256;
  readonly activeTeyrchains: Vec<ParaId>;
  readonly paraBlocks: Vec<Hash>;
}

/** @name MoreAttestations */
export interface MoreAttestations extends Struct {}

export type PHANTOM_ATTESTATIONS = 'attestations';
