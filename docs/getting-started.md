---
title: Getting started
---

# Getting started

Every example on this page was run against the live PezkuwiChain network,
except the final `signAndSend`, which needs a funded account. Each runs as an
ES module (`node example.mjs`) on Node.js 18 or newer, and works the
same way in a browser bundle.

## Install

```bash
npm install @pezkuwi/api @pezkuwi/keyring
```

## Connect

```js
import { ApiPromise, WsProvider } from '@pezkuwi/api';

const api = await ApiPromise.create({
  provider: new WsProvider('wss://rpc.pezkuwichain.io')
});

const [chain, nodeName, nodeVersion] = await Promise.all([
  api.rpc.system.chain(),
  api.rpc.system.name(),
  api.rpc.system.version()
]);

console.log(`Connected to ${chain} via ${nodeName} v${nodeVersion}`);
```

`ApiPromise.create` resolves once the API has fetched the runtime metadata, so
from that point `api.query`, `api.tx` and `api.consts` reflect exactly what the
connected chain supports.

## Read chain state

```js
const header = await api.rpc.chain.getHeader();
console.log(`Best block: #${header.number}`);

const { tokenSymbol, tokenDecimals } = api.registry.getChainProperties().toHuman();
console.log('Token:', tokenSymbol, 'decimals:', tokenDecimals); // [ 'HEZ' ] [ '12' ]

const address = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
const { data: { free } } = await api.query.system.account(address);
console.log(`Free balance: ${free} TYR`);
```

HEZ has 12 decimals: 1 HEZ = 10^12 TYR. Balances come back in TYR, the smallest
unit.

## Follow new blocks

```js
const unsubscribe = await api.rpc.chain.subscribeNewHeads((head) => {
  console.log(`New block #${head.number}`);
});

// later
unsubscribe();
```

## Build, price and send a transfer

```js
import { Keyring } from '@pezkuwi/keyring';

const keyring = new Keyring({ type: 'sr25519' });
const sender = keyring.addFromUri('//Alice'); // a development key: never hold real funds with it

const recipient = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
const amount = 10n ** 12n; // 1 HEZ

const tx = api.tx.balances.transferKeepAlive(recipient, amount);

const { partialFee } = await tx.paymentInfo(sender);
console.log(`Estimated fee: ${partialFee} TYR`);

// Submitting needs a funded account:
const unsub = await tx.signAndSend(sender, ({ status, dispatchError }) => {
  if (dispatchError) {
    console.error(dispatchError.toString());
  }
  if (status.isInBlock) {
    console.log(`Included in block ${status.asInBlock}`);
  }
  if (status.isFinalized) {
    unsub();
  }
});
```

`transferKeepAlive` refuses a transfer that would take the sender below the
existential deposit and reap the account. Use `transferAllowDeath` only when
that is what you want.

## Disconnect

```js
await api.disconnect();
```

## Other networks

The same code works against any endpoint listed on the [home page](index.md),
for example `wss://asset-hub-rpc.pezkuwichain.io` for PezkuwiChain Asset Hub.
