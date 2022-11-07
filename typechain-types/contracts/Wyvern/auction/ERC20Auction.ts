/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ERC20AuctionInterface extends utils.Interface {
  functions: {
    "activeAuctionByTokenId(address,uint256)": FunctionFragment;
    "getCoin(uint256)": FunctionFragment;
    "getFloorPrice(uint256)": FunctionFragment;
    "getHighester(uint256)": FunctionFragment;
    "getHighesterAccount(uint256)": FunctionFragment;
    "getOwner(uint256)": FunctionFragment;
    "getRefundAmount(uint256,address)": FunctionFragment;
    "getRegistry(uint256)": FunctionFragment;
    "getTokenId(uint256)": FunctionFragment;
    "isCanceled(uint256)": FunctionFragment;
    "isEnded(uint256)": FunctionFragment;
    "latestAuctionId()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activeAuctionByTokenId"
      | "getCoin"
      | "getFloorPrice"
      | "getHighester"
      | "getHighesterAccount"
      | "getOwner"
      | "getRefundAmount"
      | "getRegistry"
      | "getTokenId"
      | "isCanceled"
      | "isEnded"
      | "latestAuctionId"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeAuctionByTokenId",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCoin",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFloorPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getHighester",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getHighesterAccount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwner",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRefundAmount",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegistry",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isCanceled",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isEnded",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAuctionId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeAuctionByTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFloorPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHighester",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHighesterAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRefundAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isCanceled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isEnded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestAuctionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AuctionCanceled(uint256,uint256)": EventFragment;
    "AuctionEnded(address,uint256,uint256,uint256)": EventFragment;
    "AuctionInterrupted(uint256,uint256,bool)": EventFragment;
    "AuctionStarted(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)": EventFragment;
    "HighestBid(address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Rebate(uint256,uint256,address,address,address)": EventFragment;
    "WithDraw(uint256,uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionInterrupted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HighestBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Rebate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithDraw"): EventFragment;
}

export interface AuctionCanceledEventObject {
  AuctionId: BigNumber;
  tokenId: BigNumber;
}
export type AuctionCanceledEvent = TypedEvent<
  [BigNumber, BigNumber],
  AuctionCanceledEventObject
>;

export type AuctionCanceledEventFilter = TypedEventFilter<AuctionCanceledEvent>;

export interface AuctionEndedEventObject {
  winner: string;
  bid: BigNumber;
  AuctionId: BigNumber;
  tokenId: BigNumber;
}
export type AuctionEndedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  AuctionEndedEventObject
>;

export type AuctionEndedEventFilter = TypedEventFilter<AuctionEndedEvent>;

export interface AuctionInterruptedEventObject {
  AuctionId: BigNumber;
  tokenId: BigNumber;
  interrupt: boolean;
}
export type AuctionInterruptedEvent = TypedEvent<
  [BigNumber, BigNumber, boolean],
  AuctionInterruptedEventObject
>;

export type AuctionInterruptedEventFilter =
  TypedEventFilter<AuctionInterruptedEvent>;

export interface AuctionStartedEventObject {
  owner: string;
  tokenAddr: string;
  tokenId: BigNumber;
  price: BigNumber;
  startTime: BigNumber;
  endTime: BigNumber;
  minStep: BigNumber;
  maxStep: BigNumber;
  registry: string;
  coin: string;
  auctionId: BigNumber;
}
export type AuctionStartedEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber
  ],
  AuctionStartedEventObject
>;

export type AuctionStartedEventFilter = TypedEventFilter<AuctionStartedEvent>;

export interface HighestBidEventObject {
  bidder: string;
  bid: BigNumber;
  tokenId: BigNumber;
  auctionId: BigNumber;
}
export type HighestBidEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  HighestBidEventObject
>;

export type HighestBidEventFilter = TypedEventFilter<HighestBidEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RebateEventObject {
  auctionId: BigNumber;
  amount: BigNumber;
  from: string;
  to: string;
  coin: string;
}
export type RebateEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, string],
  RebateEventObject
>;

export type RebateEventFilter = TypedEventFilter<RebateEvent>;

export interface WithDrawEventObject {
  auctionId: BigNumber;
  amount: BigNumber;
  to: string;
  coin: string;
}
export type WithDrawEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  WithDrawEventObject
>;

export type WithDrawEventFilter = TypedEventFilter<WithDrawEvent>;

export interface ERC20Auction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20AuctionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    activeAuctionByTokenId(
      tokenAddr: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCoin(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getFloorPrice(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getHighester(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getHighesterAccount(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getOwner(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRefundAmount(
      _auctionId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRegistry(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTokenId(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isCanceled(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isEnded(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    latestAuctionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  activeAuctionByTokenId(
    tokenAddr: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCoin(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getFloorPrice(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getHighester(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  getHighesterAccount(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getOwner(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRefundAmount(
    _auctionId: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRegistry(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokenId(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isCanceled(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isEnded(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  latestAuctionId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activeAuctionByTokenId(
      tokenAddr: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCoin(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getFloorPrice(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHighester(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getHighesterAccount(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getOwner(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRefundAmount(
      _auctionId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegistry(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenId(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCanceled(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isEnded(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestAuctionId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuctionCanceled(uint256,uint256)"(
      AuctionId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null
    ): AuctionCanceledEventFilter;
    AuctionCanceled(
      AuctionId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null
    ): AuctionCanceledEventFilter;

    "AuctionEnded(address,uint256,uint256,uint256)"(
      winner?: null,
      bid?: null,
      AuctionId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null
    ): AuctionEndedEventFilter;
    AuctionEnded(
      winner?: null,
      bid?: null,
      AuctionId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null
    ): AuctionEndedEventFilter;

    "AuctionInterrupted(uint256,uint256,bool)"(
      AuctionId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null,
      interrupt?: null
    ): AuctionInterruptedEventFilter;
    AuctionInterrupted(
      AuctionId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null,
      interrupt?: null
    ): AuctionInterruptedEventFilter;

    "AuctionStarted(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)"(
      owner?: null,
      tokenAddr?: null,
      tokenId?: null,
      price?: null,
      startTime?: null,
      endTime?: null,
      minStep?: null,
      maxStep?: null,
      registry?: null,
      coin?: null,
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): AuctionStartedEventFilter;
    AuctionStarted(
      owner?: null,
      tokenAddr?: null,
      tokenId?: null,
      price?: null,
      startTime?: null,
      endTime?: null,
      minStep?: null,
      maxStep?: null,
      registry?: null,
      coin?: null,
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): AuctionStartedEventFilter;

    "HighestBid(address,uint256,uint256,uint256)"(
      bidder?: null,
      bid?: null,
      tokenId?: null,
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): HighestBidEventFilter;
    HighestBid(
      bidder?: null,
      bid?: null,
      tokenId?: null,
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): HighestBidEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Rebate(uint256,uint256,address,address,address)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      from?: null,
      to?: null,
      coin?: null
    ): RebateEventFilter;
    Rebate(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      from?: null,
      to?: null,
      coin?: null
    ): RebateEventFilter;

    "WithDraw(uint256,uint256,address,address)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: null,
      coin?: null
    ): WithDrawEventFilter;
    WithDraw(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: null,
      coin?: null
    ): WithDrawEventFilter;
  };

  estimateGas: {
    activeAuctionByTokenId(
      tokenAddr: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCoin(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFloorPrice(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHighester(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHighesterAccount(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRefundAmount(
      _auctionId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegistry(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenId(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCanceled(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isEnded(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestAuctionId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activeAuctionByTokenId(
      tokenAddr: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCoin(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFloorPrice(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHighester(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHighesterAccount(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRefundAmount(
      _auctionId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRegistry(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenId(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCanceled(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isEnded(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestAuctionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}