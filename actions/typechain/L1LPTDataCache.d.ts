/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface L1LPTDataCacheInterface extends ethers.utils.Interface {
  functions: {
    "cacheTotalSupply(uint256,uint256,uint256)": FunctionFragment;
    "getCacheTotalSupplyData()": FunctionFragment;
    "inbox()": FunctionFragment;
    "l2LPTDataCacheAddr()": FunctionFragment;
    "tokenAddr()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cacheTotalSupply",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCacheTotalSupplyData",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "l2LPTDataCacheAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokenAddr", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "cacheTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCacheTotalSupplyData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2LPTDataCacheAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenAddr", data: BytesLike): Result;

  events: {
    "CacheTotalSupplyInitiated(uint256,uint256)": EventFragment;
    "TxToL2(address,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CacheTotalSupplyInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxToL2"): EventFragment;
}

export type CacheTotalSupplyInitiatedEvent = TypedEvent<
  [BigNumber, BigNumber] & { seqNo: BigNumber; totalSupply: BigNumber }
>;

export type TxToL2Event = TypedEvent<
  [string, string, BigNumber, string] & {
    from: string;
    to: string;
    seqNum: BigNumber;
    data: string;
  }
>;

export class L1LPTDataCache extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: L1LPTDataCacheInterface;

  functions: {
    cacheTotalSupply(
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCacheTotalSupplyData(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { data: string; totalSupply: BigNumber }>;

    inbox(overrides?: CallOverrides): Promise<[string]>;

    l2LPTDataCacheAddr(overrides?: CallOverrides): Promise<[string]>;

    tokenAddr(overrides?: CallOverrides): Promise<[string]>;
  };

  cacheTotalSupply(
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCacheTotalSupplyData(
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { data: string; totalSupply: BigNumber }>;

  inbox(overrides?: CallOverrides): Promise<string>;

  l2LPTDataCacheAddr(overrides?: CallOverrides): Promise<string>;

  tokenAddr(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cacheTotalSupply(
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCacheTotalSupplyData(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { data: string; totalSupply: BigNumber }>;

    inbox(overrides?: CallOverrides): Promise<string>;

    l2LPTDataCacheAddr(overrides?: CallOverrides): Promise<string>;

    tokenAddr(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CacheTotalSupplyInitiated(uint256,uint256)"(
      seqNo?: null,
      totalSupply?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { seqNo: BigNumber; totalSupply: BigNumber }
    >;

    CacheTotalSupplyInitiated(
      seqNo?: null,
      totalSupply?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { seqNo: BigNumber; totalSupply: BigNumber }
    >;

    "TxToL2(address,address,uint256,bytes)"(
      from?: string | null,
      to?: string | null,
      seqNum?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { from: string; to: string; seqNum: BigNumber; data: string }
    >;

    TxToL2(
      from?: string | null,
      to?: string | null,
      seqNum?: BigNumberish | null,
      data?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { from: string; to: string; seqNum: BigNumber; data: string }
    >;
  };

  estimateGas: {
    cacheTotalSupply(
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCacheTotalSupplyData(overrides?: CallOverrides): Promise<BigNumber>;

    inbox(overrides?: CallOverrides): Promise<BigNumber>;

    l2LPTDataCacheAddr(overrides?: CallOverrides): Promise<BigNumber>;

    tokenAddr(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cacheTotalSupply(
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCacheTotalSupplyData(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2LPTDataCacheAddr(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}