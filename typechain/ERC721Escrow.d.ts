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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ERC721EscrowInterface extends ethers.utils.Interface {
  functions: {
    "inventory()": FunctionFragment;
    "rollbackGameItem(address)": FunctionFragment;
    "sendGameItem(address,uint256)": FunctionFragment;
    "withdrawGameItem()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "inventory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rollbackGameItem",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "sendGameItem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawGameItem",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "inventory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollbackGameItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendGameItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawGameItem",
    data: BytesLike
  ): Result;

  events: {
    "LogItemRolledBack(address,address,uint256)": EventFragment;
    "LogItemSend(address,address,uint256)": EventFragment;
    "LogItemWithDraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogItemRolledBack"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogItemSend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogItemWithDraw"): EventFragment;
}

export type LogItemRolledBackEvent = TypedEvent<
  [string, string, BigNumber] & { sender: string; to: string; item: BigNumber }
>;

export type LogItemSendEvent = TypedEvent<
  [string, string, BigNumber] & { sender: string; to: string; item: BigNumber }
>;

export type LogItemWithDrawEvent = TypedEvent<
  [string, BigNumber] & { to: string; item: BigNumber }
>;

export class ERC721Escrow extends BaseContract {
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

  interface: ERC721EscrowInterface;

  functions: {
    inventory(overrides?: CallOverrides): Promise<[BigNumber]>;

    rollbackGameItem(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendGameItem(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawGameItem(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  inventory(overrides?: CallOverrides): Promise<BigNumber>;

  rollbackGameItem(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendGameItem(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawGameItem(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    inventory(overrides?: CallOverrides): Promise<BigNumber>;

    rollbackGameItem(to: string, overrides?: CallOverrides): Promise<void>;

    sendGameItem(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawGameItem(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "LogItemRolledBack(address,address,uint256)"(
      sender?: string | null,
      to?: string | null,
      item?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; item: BigNumber }
    >;

    LogItemRolledBack(
      sender?: string | null,
      to?: string | null,
      item?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; item: BigNumber }
    >;

    "LogItemSend(address,address,uint256)"(
      sender?: string | null,
      to?: string | null,
      item?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; item: BigNumber }
    >;

    LogItemSend(
      sender?: string | null,
      to?: string | null,
      item?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; to: string; item: BigNumber }
    >;

    "LogItemWithDraw(address,uint256)"(
      to?: string | null,
      item?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; item: BigNumber }>;

    LogItemWithDraw(
      to?: string | null,
      item?: null
    ): TypedEventFilter<[string, BigNumber], { to: string; item: BigNumber }>;
  };

  estimateGas: {
    inventory(overrides?: CallOverrides): Promise<BigNumber>;

    rollbackGameItem(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendGameItem(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawGameItem(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    inventory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rollbackGameItem(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendGameItem(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawGameItem(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
