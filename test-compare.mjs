import { ApiPromise, WsProvider, Keyring } from './packages/api/build/index.js';

const SENDER_SEED = 'crucial surge north silly divert throw habit fury zebra fabric tank output';
const RECEIVER = '5HdY6U2UQF8wPwczP3SoQz28kQu1WJSBqxKGePUKG4M5QYdV';
const RPC_ENDPOINT = 'wss://rpc.pezkuwichain.io';

const main = async () => {
  console.log('Connecting to Pezkuwi...');

  const provider = new WsProvider(RPC_ENDPOINT);
  const api = await ApiPromise.create({
    provider,
    signedExtensions: {
      AuthorizeCall: {
        extrinsic: {},
        payload: {}
      }
    }
  });

  console.log('Connected!');

  const keyring = new Keyring({ type: 'sr25519' });
  const sender = keyring.addFromUri(SENDER_SEED);

  console.log('Sender:', sender.address);
  console.log('Receiver:', RECEIVER);

  // Small amount: 0.0001 HEZ = 100000000 planks (10^8)
  const amount = 100000000n;

  const tx = api.tx.balances.transferAllowDeath(RECEIVER, amount);
  
  // Sign but don't send
  const signedTx = await tx.signAsync(sender);
  
  console.log('\n=== SIGNED EXTRINSIC ===');
  console.log('Hex:', signedTx.toHex());
  console.log('\nMethod:', signedTx.method.toHex());
  console.log('Signature:', signedTx.signature.toHex());
  
  await api.disconnect();
};

main().catch(console.error);
