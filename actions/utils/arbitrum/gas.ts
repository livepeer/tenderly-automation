import {BigNumber, ethers} from 'ethers';
import { Inbox } from '../../cacheLPTTotalSupply/addresses';
import {getArbitrumCoreContracts} from './contracts';

export async function getGasPriceBid(
    l2: ethers.providers.BaseProvider,
): Promise<BigNumber> {
  return await l2.getGasPrice();
}

export async function getMaxSubmissionPrice(
    l1: ethers.providers.BaseProvider,
    calldataOrCalldataLength: string | number,
) {
  const calldataLength =
  typeof calldataOrCalldataLength === 'string' ?
    calldataOrCalldataLength.length :
    calldataOrCalldataLength;

  const abi = [
    'function calculateRetryableSubmissionFee(uint256 dataLength,uint256 baseFee) external view returns (uint256)',
  ];
  const inbox = new ethers.Contract(
      Inbox,
      abi,
      l1,
  );
  const maxSubmissionPrice = await inbox.calculateRetryableSubmissionFee(
      calldataLength,
      await l1.getGasPrice(),
  );

  return maxSubmissionPrice;
}

export async function getMaxGas(
    l2: ethers.providers.BaseProvider,
    sender: string,
    destination: string,
    refundDestination: string,
    calldata: string,
): Promise<BigNumber> {
  const estimatedGas = await getArbitrumCoreContracts(
    l2,
  ).nodeInterface.estimateGas.estimateRetryableTicket(
      sender,
      ethers.utils.parseEther('0.05'),
      destination,
      0,
      refundDestination,
      refundDestination,
      calldata,
  );
  const maxGas = estimatedGas.mul(4);

  return maxGas;
}
