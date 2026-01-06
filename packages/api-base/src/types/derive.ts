// Copyright 2017-2025 @pezkuwi/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';

type DeriveCreator = (instanceId: string, api: unknown) => (...args: unknown[]) => Observable<any>;

export type DeriveCustom = Record<string, Record<string, DeriveCreator>>;
