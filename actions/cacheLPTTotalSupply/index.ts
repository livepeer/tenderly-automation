import {ActionFn, Context, Event} from '@tenderly/actions';
import {ethers} from 'ethers';
import {getArbParams, getCache} from './helpers';

export const triggerCache: ActionFn = async (
    context: Context,
    _event: Event,
) => {
  // rpc key should include full URL eg:
  // infura key for mainnet: https://mainnet.infura.io/v3/<infura key>
  // or alchemy https://arb-rinkeby.g.alchemy.com/v2/<alchemy key>
  const rpcL1 = await context.secrets.get('RPC_KEY_ETH_TEST_NITRO');
  const rpcL2 = await context.secrets.get('RPC_KEY_ARB_TEST_NITRO');

  const ethProvider = new ethers.providers.JsonRpcProvider(rpcL1);
  const arbProvider = new ethers.providers.JsonRpcProvider(rpcL2);

  const pvtKey = await context.secrets.get('PVT_KEY_SIGNER_TEST_NITRO');
  const signer = new ethers.Wallet(pvtKey, ethProvider);

  const cache = getCache(ethProvider);

  const {maxGas, gasPriceBid, maxSubmissionCost, ethValue} =
    await getArbParams(cache, ethProvider, arbProvider, signer.address);

  const tx = await cache
    .connect(signer)
    .cacheTotalSupply(maxGas, gasPriceBid, maxSubmissionCost, {
      value: ethValue,
    });

  await context.storage.putStr('CACHE_LPT_SUPPLY/L1_HASH', tx.hash);
};
