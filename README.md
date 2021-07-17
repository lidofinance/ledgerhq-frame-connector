# Ledger iframe connector

Connector for [web3-react](https://github.com/NoahZinsmeister/web3-react) based on `@ledgerhq/iframe-provider`

## Install

```bash
yarn add web3-ledgerhq-frame-connector
```

## Arguments

Connector has the same arguments as [IFrameEthereumProvider](https://github.com/LedgerHQ/iframe-provider#usage)

```ts
new LedgerHQFrameConnector({
  targetOrigin?: string;
  timeoutMilliseconds?: number;
});
```

## Example

```ts
import { LedgerHQFrameConnector } from 'web3-ledgerhq-frame-connector';

const LedgerHQFrame = new LedgerHQFrameConnector();
```
