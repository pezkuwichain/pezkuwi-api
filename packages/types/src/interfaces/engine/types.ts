// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool } from '@pezkuwi/types-codec';
import type { BlockHash } from '@pezkuwi/types/interfaces/chain';

/** @name CreatedBlock */
export interface CreatedBlock extends Struct {
  readonly blockHash: BlockHash;
  readonly aux: ImportedAux;
}

/** @name ImportedAux */
export interface ImportedAux extends Struct {
  readonly headerOnly: bool;
  readonly clearJustificationRequests: bool;
  readonly needsJustification: bool;
  readonly badJustification: bool;
  readonly needsFinalityProof: bool;
  readonly isNewBest: bool;
}

export type PHANTOM_ENGINE = 'engine';
