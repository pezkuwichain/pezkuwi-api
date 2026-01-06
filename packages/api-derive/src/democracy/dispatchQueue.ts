// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Bytes, Option, u8, u32, Vec } from '@pezkuwi/types';
import type { BlockNumber, Call, Hash, ReferendumIndex, Scheduled } from '@pezkuwi/types/interfaces';
import type { PezframeSupportPreimagesBounded, PezpalletSchedulerScheduled } from '@pezkuwi/types/lookup';
import type { Codec, ITuple } from '@pezkuwi/types/types';
import type { HexString } from '@pezkuwi/util/types';
import type { DeriveApi, DeriveDispatch, DeriveProposalImage } from '../types.js';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { Enum } from '@pezkuwi/types';
import { isFunction, objectSpread, stringToHex } from '@pezkuwi/util';

import { memo } from '../util/index.js';
import { getImageHashBounded } from './util.js';

const DEMOCRACY_ID = stringToHex('democrac');

// included here for backwards compat
interface PezpalletSchedulerScheduledV3 extends Codec {
  maybeId: Option<Bytes>;
  priority: u8;
  call: PezframeSupportScheduleMaybeHashed;
  maybePeriodic: Option<ITuple<[u32, u32]>>;
  origin: Codec;
}

// included here for backwards compat
interface PezframeSupportScheduleMaybeHashed extends Codec {
  isHash: boolean;
  isValue: boolean;
  asValue: Call;
  asHash: Hash;
}

interface SchedulerInfo {
  at: BlockNumber;
  imageHash: HexString;
  index: ReferendumIndex;
}

function isMaybeHashedOrBounded (call: PezframeSupportPreimagesBounded | PezframeSupportScheduleMaybeHashed | Call): call is PezframeSupportScheduleMaybeHashed | PezframeSupportPreimagesBounded {
  // check for enum
  return call instanceof Enum;
}

function isBounded (call: PezframeSupportPreimagesBounded | PezframeSupportScheduleMaybeHashed): call is PezframeSupportPreimagesBounded {
  // check for type
  return (call as PezframeSupportPreimagesBounded).isInline || (call as PezframeSupportPreimagesBounded).isLegacy || (call as PezframeSupportPreimagesBounded).isLookup;
}

function queryQueue (api: DeriveApi): Observable<DeriveDispatch[]> {
  return api.query.democracy['dispatchQueue']<Vec<ITuple<[BlockNumber, Hash, ReferendumIndex]>>>().pipe(
    switchMap((dispatches) =>
      combineLatest([
        of(dispatches),
        api.derive.democracy.preimages(
          dispatches.map(([, hash]) => hash))
      ])
    ),
    map(([dispatches, images]) =>
      dispatches.map(([at, imageHash, index], dispatchIndex): DeriveDispatch => ({
        at,
        image: images[dispatchIndex],
        imageHash: getImageHashBounded(imageHash),
        index
      }))
    )
  );
}

function schedulerEntries (api: DeriveApi): Observable<[BlockNumber[], Option<PezpalletSchedulerScheduled | PezpalletSchedulerScheduledV3 | Scheduled>[][]]> {
  // We don't get entries, but rather we get the keys (triggered via finished referendums) and
  // the subscribe to those keys - this means we pickup when the schedulers actually executes
  // at a block, the entry for that block will become empty
  return api.derive.democracy.referendumsFinished().pipe(
    switchMap(() =>
      api.query.scheduler.agenda.keys()
    ),
    switchMap((keys) => {
      const blockNumbers = keys.map(({ args: [blockNumber] }) => blockNumber);

      return blockNumbers.length
        ? combineLatest([
          of(blockNumbers),
          // this should simply be api.query.scheduler.agenda.multi,
          // however we have had cases on Darwinia where the indices have moved around after an
          // upgrade, which results in invalid on-chain data
          api.query.scheduler.agenda.multi(blockNumbers).pipe(
            catchError(() => of(blockNumbers.map(() => [])))
          )
        ])
        : of<[BlockNumber[], Option<PezpalletSchedulerScheduledV3 | Scheduled>[][]]>([[], []]);
    })
  );
}

function queryScheduler (api: DeriveApi): Observable<DeriveDispatch[]> {
  return schedulerEntries(api).pipe(
    switchMap(([blockNumbers, agendas]): Observable<[SchedulerInfo[], (DeriveProposalImage | undefined)[]]> => {
      const result: SchedulerInfo[] = [];

      blockNumbers.forEach((at, index): void => {
        (agendas[index] || []).filter((o) => o.isSome).forEach((o): void => {
          const scheduled = o.unwrap();

          if (scheduled.maybeId.isSome) {
            const id = scheduled.maybeId.unwrap().toHex();

            if (id.startsWith(DEMOCRACY_ID)) {
              const imageHash = isMaybeHashedOrBounded(scheduled.call)
                ? isBounded(scheduled.call)
                  ? getImageHashBounded(scheduled.call)
                  : scheduled.call.isHash
                    ? scheduled.call.asHash.toHex()
                    : scheduled.call.asValue.args[0].toHex()
                : scheduled.call.args[0].toHex();

              result.push({ at, imageHash, index: api.registry.createType('(u64, ReferendumIndex)', id)[1] });
            }
          }
        });
      });

      return combineLatest([
        of(result),
        result.length
          ? api.derive.democracy.preimages(result.map(({ imageHash }) => imageHash))
          : of([])
      ]);
    }),
    map(([infos, images]): DeriveDispatch[] =>
      infos.map((info, index) => objectSpread({ image: images[index] }, info))
    )
  );
}

/**
 * @name dispatchQueue
 * @description Retrieves the list of scheduled or pending dispatches in the governance system.
 * @example
 * ```javascript
 * const queue = await api.derive.democracy.dispatchQueue();
 * console.log("Dispatch Queue:", queue);
 * ```
 */
export function dispatchQueue (instanceId: string, api: DeriveApi): () => Observable<DeriveDispatch[]> {
  return memo(instanceId, (): Observable<DeriveDispatch[]> =>
    isFunction(api.query.scheduler?.agenda)
      ? queryScheduler(api)
      : api.query.democracy['dispatchQueue']
        ? queryQueue(api)
        : of([])
  );
}
