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
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface ERC20EscrowInterface extends ethers.utils.Interface {
  functions: {
    'getERC20Balance()': FunctionFragment;
    'rollbackERC20(address)': FunctionFragment;
    'sendERC20(address,uint256)': FunctionFragment;
    'withdrawERC20()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'getERC20Balance',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'rollbackERC20',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'sendERC20',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawERC20',
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: 'getERC20Balance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'rollbackERC20',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'sendERC20', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawERC20',
    data: BytesLike
  ): Result;

  events: {
    'LogERC20RolledBack(address,address,uint256)': EventFragment;
    'LogERC20Send(address,address,uint256)': EventFragment;
    'LogERC20WithDraw(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'LogERC20RolledBack'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogERC20Send'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogERC20WithDraw'): EventFragment;
}

export type LogERC20RolledBackEvent = TypedEvent<
  [string, string, BigNumber] & { sender: string; to: string; value: BigNumber }
>;

export type LogERC20SendEvent = TypedEvent<
  [string, string, BigNumber] & { sender: string; to: string; value: BigNumber }
>;

export type LogERC20WithDrawEvent = TypedEvent<
  [string, BigNumber] & { to: string; value: BigNumber }
>;

export class ERC20Escrow extends BaseContract {
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

  interface: ERC20EscrowInterface;

  functions: {
    getERC20Balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    rollbackERC20(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendERC20(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawERC20(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getERC20Balance(overrides?: CallOverrides): Promise<BigNumber>;

  rollbackERC20(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendERC20(
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawERC20(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getERC20Balance(overrides?: CallOverrides): Promise<BigNumber>;

    rollbackERC20(to: string, overrides?: CallOverrides): Promise<void>;

    sendERC20(
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawERC20(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'LogERC20RolledBack(address,address,uint256)'(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    LogERC20RolledBack(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    'LogERC20Send(address,address,uint256)'(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    LogERC20Send(
      sender?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; value: BigNumber }
    >;

    'LogERC20WithDraw(address,uint256)'(
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; value: BigNumber }>;

    LogERC20WithDraw(
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; value: BigNumber }>;
  };

  estimateGas: {
    getERC20Balance(overrides?: CallOverrides): Promise<BigNumber>;

    rollbackERC20(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendERC20(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawERC20(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getERC20Balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rollbackERC20(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendERC20(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawERC20(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
