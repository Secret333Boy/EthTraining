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

interface EscrowInterface extends ethers.utils.Interface {
  functions: {
    'getEtherBalance()': FunctionFragment;
    'rollbackEther(address)': FunctionFragment;
    'sendEther(address)': FunctionFragment;
    'withdrawEther()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'getEtherBalance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'rollbackEther',
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: 'sendEther', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'withdrawEther',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'getEtherBalance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'rollbackEther',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'sendEther', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawEther',
    data: BytesLike
  ): Result;

  events: {
    'Error(string)': EventFragment;
    'LogRolledBack(address,address,uint256)': EventFragment;
    'LogSend(address,address,uint256)': EventFragment;
    'LogWithDraw(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Error'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogRolledBack'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogSend'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogWithDraw'): EventFragment;
}

export type ErrorEvent = TypedEvent<[string] & { arg0: string }>;

export type LogRolledBackEvent = TypedEvent<
  [string, string, BigNumber] & { sender: string; to: string; value: BigNumber }
>;

export type LogSendEvent = TypedEvent<
  [string, string, BigNumber] & { sender: string; to: string; value: BigNumber }
>;

export type LogWithDrawEvent = TypedEvent<
  [string, BigNumber] & { to: string; value: BigNumber }
>;

export class Escrow extends BaseContract {
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

  interface: EscrowInterface;

  functions: {
    getEtherBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    rollbackEther(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendEther(
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawEther(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getEtherBalance(overrides?: CallOverrides): Promise<BigNumber>;

  rollbackEther(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendEther(
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawEther(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEtherBalance(overrides?: CallOverrides): Promise<BigNumber>;

    rollbackEther(to: string, overrides?: CallOverrides): Promise<void>;

    sendEther(to: string, overrides?: CallOverrides): Promise<void>;

    withdrawEther(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Error(string)'(
      undefined?: null
    ): TypedEventFilter<[string], { arg0: string }>;

    Error(undefined?: null): TypedEventFilter<[string], { arg0: string }>;

    'LogRolledBack(address,address,uint256)'(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    LogRolledBack(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    'LogSend(address,address,uint256)'(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    LogSend(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    'LogWithDraw(address,uint256)'(
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; value: BigNumber }>;

    LogWithDraw(
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; value: BigNumber }>;
  };

  estimateGas: {
    getEtherBalance(overrides?: CallOverrides): Promise<BigNumber>;

    rollbackEther(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendEther(
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawEther(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEtherBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rollbackEther(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendEther(
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEther(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
