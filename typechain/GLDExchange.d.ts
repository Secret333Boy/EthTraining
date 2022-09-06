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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface GLDExchangeInterface extends ethers.utils.Interface {
  functions: {
    'balance()': FunctionFragment;
    'buy()': FunctionFragment;
    'sell(uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'balance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'buy', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sell', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'balance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'buy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sell', data: BytesLike): Result;

  events: {
    'Bought(uint256)': EventFragment;
    'Sold(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Bought'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Sold'): EventFragment;
}

export type BoughtEvent = TypedEvent<[BigNumber] & { amount: BigNumber }>;

export type SoldEvent = TypedEvent<[BigNumber] & { amount: BigNumber }>;

export class GLDExchange extends BaseContract {
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

  interface: GLDExchangeInterface;

  functions: {
    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    buy(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sell(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  buy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sell(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    buy(overrides?: CallOverrides): Promise<BigNumber>;

    sell(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Bought(uint256)'(
      amount?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    Bought(
      amount?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    'Sold(uint256)'(
      amount?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    Sold(
      amount?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;
  };

  estimateGas: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sell(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buy(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sell(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
