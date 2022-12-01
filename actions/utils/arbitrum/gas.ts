import {BigNumber, ethers} from 'ethers';
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
  const gasPrice = await l1.getGasPrice();
  const inbox = new ethers.Contract(
    '0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f',
    ['function calculateRetryableSubmissionFee(uint256 dataLength, uint256 baseFee) external view returns (uint256)'],
    l1
  )
  const submissionPrice = await inbox.calculateRetryableSubmissionFee(calldataLength, gasPrice);
  const maxSubmissionPrice = submissionPrice.mul(2);

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
