import {ActionFn, Context, Event} from '@tenderly/actions';
import axios from 'axios';
import {ethers} from 'ethers';

export const alertDiscord = async (url: string, message: string) => {
    const data = {
        username: "Gas Alert Bot",
        avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS_GeWLv-1KuqeJCxOxjPX5ywcLeAxcWWhQ&usqp=CAU",
        embeds: [{
            title: message,
            color: 16711680
        }]
      }
    await axios.post(url, data)
}

export const trackGas: ActionFn = async (
    context: Context,
    _event: Event,
) => {  
  const cronDuration = 5                                // the script will be ran after every cronDuration minutes
  const timeperiod = 6                                 // period of in hours
  const occurenceThreshold = (60 * timeperiod) / cronDuration    // how many times script will run before resetting
  const countThreshold = 36                             // check if gas was above 100 this many times in the interval
  const gasThreshold = 100

  const updateOccurenceCount = async (value: number) => {
    await context.storage.putNumber('TRACK_GAS/COUNT_OCCURENCE', value);
  }

  const updateHighGasCount = async (value: number) => {
    await context.storage.putNumber('TRACK_GAS/COUNT_GAS_GT_100', value);
  }
 
  const rpcL2 = await context.secrets.get('RPC_KEY_ARB');
  const webhookURL = await context.secrets.get('WEBHOOK_URL');

  const arbProvider = new ethers.providers.JsonRpcProvider(rpcL2);
  const gasPriceBid = Number(ethers.utils.formatUnits(await arbProvider.getGasPrice(), 'gwei'));
  
  await context.storage.putStr('TRACK_GAS/LAST_GAS', gasPriceBid.toString());

  const count = await context.storage.getNumber('TRACK_GAS/COUNT_GAS_GT_100');
  const occurences = await context.storage.getNumber('TRACK_GAS/COUNT_OCCURENCE');

  await updateOccurenceCount(occurences+1)
  
  if(gasPriceBid >= gasThreshold) {
    if(count >= countThreshold) { 
      await alertDiscord(webhookURL, `Arbitrum Mainnet gas has been above 100 gwei in the past ${timeperiod} hours`)
      await updateHighGasCount(0)
      await updateOccurenceCount(0)
    } else {
      await updateHighGasCount(count+1)
    }
  }
  
  if(occurences >= occurenceThreshold) { 
    // reset occurences as well as high gas count after interval
    await updateHighGasCount(0)
    await updateOccurenceCount(0)
  } 
};
