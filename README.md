# Ledger iframe connector

Connector for [web3-react](https://github.com/NoahZinsmeister/web3-react) based on `@ledgerhq/iframe-provider`

## Install

```bash
yarn add web3-ledgerhq-frame-connector
```

## Arguments

Connector has the same arguments as [IFrameEthereumProvider](https://github.com/LedgerHQ/iframe-provider#usage) as well an optional
`supportedChainIds` to support testnets, defaults to Ethereum Mainnet only.

```ts
new LedgerHQFrameConnector({
  targetOrigin?: string;
  timeoutMilliseconds?: number;
  supportedChainIds?: number[]
});
```

## Example

```ts
import { LedgerHQFrameConnector } from 'web3-ledgerhq-frame-connector';

const LedgerHQFrame = new LedgerHQFrameConnector();
```
