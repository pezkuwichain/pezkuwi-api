// Copyright 2017-2026 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@pezkuwi/api-base/types';
import type { u32 } from '@pezkuwi/types';
import type { Balance, BlockNumber, BountyIndex, Hash, Proposal, ProposalIndex, SetIndex, Votes } from '@pezkuwi/types/interfaces';
import type { PezpalletBountiesBounty, PezpalletTreasuryProposal } from '@pezkuwi/types/lookup';
import type { BN } from '@pezkuwi/util';
import type { ExactDerive } from './derive.js';

export type * from './accounts/types.js';
export type * from './bagsList/types.js';
export type * from './balances/types.js';
export type * from './council/types.js';
export type * from './crowdloan/types.js';
export type * from './democracy/types.js';
export type * from './elections/types.js';
export type * from './session/types.js';
export type * from './society/types.js';
export type * from './staking/types.js';
export type * from './teyrchains/types.js';
export type * from './type/types.js';

export interface DeriveApi extends ApiInterfaceRx {
  derive: ExactDerive;
}

export interface DeriveContractFees {
  callBaseFee: BN;
  contractFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  surchargeReward: BN;
  tombstoneDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DeriveCollectiveProposal {
  hash: Hash;
  proposal: Proposal | null;
  votes: Votes | null;
}

export interface DeriveFees {
  creationFee: Balance;
  existentialDeposit: Balance;
  transactionBaseFee: Balance;
  transactionByteFee: Balance;
  transferFee: Balance;
}

export interface DeriveHeartbeatAuthor {
  blockCount: u32;
  hasMessage: boolean;
  isOnline: boolean;
}

export type DeriveHeartbeats = Record<string, DeriveHeartbeatAuthor>;

export interface RecentlyOffline {
  blockNumber: BlockNumber;
  count: BN;
}

export type DeriveRecentlyOffline = Record<string, RecentlyOffline[]>;

export interface DeriveTreasuryProposal {
  council: DeriveCollectiveProposal[];
  id: ProposalIndex;
  proposal: PezpalletTreasuryProposal;
}

export interface DeriveTreasuryProposals {
  approvals: DeriveTreasuryProposal[];
  proposalCount: ProposalIndex;
  proposals: DeriveTreasuryProposal[];
}

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DeriveVoterPositions = Record<string, VoterPosition>;

export interface DeriveBounty {
  bounty: PezpalletBountiesBounty;
  description: string;
  index: BountyIndex;
  proposals: DeriveCollectiveProposal[];
}

export type DeriveBounties = DeriveBounty[];
