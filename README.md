# @pezkuwi/api

Promise and RxJS APIs for interacting with PezkuwiChain and Bizinikiwi-based networks.

**Developed by Dijital Kurdistan Tech Institute**

## Overview

This library provides a clean wrapper around all the methods exposed by a PezkuwiChain/Bizinikiwi network client and defines all the types exposed by a node.

## Documentation

The API reference and a getting-started guide are at [developers.pezkuwichain.io](https://developers.pezkuwichain.io).

## Installation

```bash
# Using npm
npm install @pezkuwi/api

# Using yarn
yarn add @pezkuwi/api
```

## Quick Start

```javascript
import { ApiPromise, WsProvider } from '@pezkuwi/api';

// Connect to a PezkuwiChain node
const wsProvider = new WsProvider('wss://rpc.pezkuwichain.io');
const api = await ApiPromise.create({ provider: wsProvider });

// Query chain info
const chain = await api.rpc.system.chain();
console.log(`Connected to ${chain}`);
```

## Packages

| Package | Description |
|---------|-------------|
| @pezkuwi/api | Main API package |
| @pezkuwi/api-derive | Derived API methods |
| @pezkuwi/types | Type definitions |
| @pezkuwi/rpc-core | RPC core functionality |
| @pezkuwi/rpc-provider | RPC providers (WS, HTTP) |

## Tutorials

Looking for a walkthrough? [Getting started](https://developers.pezkuwichain.io/documents/Getting_started.html) connects, reads chain state, follows blocks and sends a transfer.

## Changelog

If you are an existing user, please track the [CHANGELOG](CHANGELOG.md) when changing versions.

## Links

- Website: https://pezkuwichain.io
- Developer docs: https://developers.pezkuwichain.io
- Wiki: https://wiki.pezkuwichain.io
- GitHub: https://github.com/pezkuwichain

## License

Apache-2.0

## Author

Dijital Kurdistan Tech Institute
