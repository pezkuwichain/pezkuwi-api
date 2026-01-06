// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@pezkuwi/types';
import type { AccountId, Balance, Call, Hash, PropIndex, ReferendumIndex, ReferendumInfoTo239, Vote } from '@pezkuwi/types/interfaces';
import type { PezpalletDemocracyReferendumStatus, PezpalletDemocracyVoteThreshold } from '@pezkuwi/types/lookup';
import type { BN } from '@pezkuwi/util';
import type { HexString } from '@pezkuwi/util/types';

export interface AtBlock {
  at: BN;
}

export interface DeriveDemocracyLock {
  balance: Balance;
  isDelegated: boolean;
  isFinished: boolean;
  referendumEnd: BN;
  referendumId: ReferendumIndex;
  unlockAt: BN;
  vote: Vote;
}

export interface DeriveProposalImage extends AtBlock {
  balance: Balance;
  proposal?: Call | undefined;
  proposalHash?: HexString;
  proposalLen?: number;
  proposer: AccountId;
}

export interface DeriveDispatch extends AtBlock {
  index: ReferendumIndex;
  imageHash: HexString;
  image?: DeriveProposalImage | undefined;
}

export interface DeriveProposal {
  balance?: Balance;
  index: PropIndex;
  image?: DeriveProposalImage | undefined;
  imageHash: Hash;
  proposer: AccountId;
  seconds: Vec<AccountId>;
}

export interface DeriveProposalExternal {
  image?: DeriveProposalImage | undefined;
  imageHash: HexString;
  threshold: PezpalletDemocracyVoteThreshold;
}

export interface DeriveReferendum {
  index: ReferendumIndex;
  image?: DeriveProposalImage | undefined;
  imageHash: HexString;
  status: PezpalletDemocracyReferendumStatus | ReferendumInfoTo239;
}

export interface DeriveReferendumVote {
  accountId: AccountId;
  balance: Balance;
  isDelegating: boolean;
  vote: Vote;
}

export interface DeriveReferendumVoteState {
  allAye: DeriveReferendumVote[];
  allNay: DeriveReferendumVote[];
  voteCount: number;
  voteCountAye: number;
  voteCountNay: number;
  votedAye: BN;
  votedNay: BN;
  votedTotal: BN;
}

export interface DeriveReferendumVotes extends DeriveReferendumVoteState {
  isPassing: boolean;
  votes: DeriveReferendumVote[];
}

export interface DeriveReferendumExt extends DeriveReferendum, DeriveReferendumVotes {
}
