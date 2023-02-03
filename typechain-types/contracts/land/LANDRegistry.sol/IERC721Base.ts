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

export interface IERC721BaseInterface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "isAuthorized(address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "getApprovedAddress(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "totalSupply"
      | "transferFrom"
      | "isAuthorized"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "ownerOf"
      | "balanceOf"
      | "setApprovalForAll"
      | "isApprovedForAll"
      | "getApprovedAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getApprovedAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApprovedAddress",
    data: BytesLike
  ): Result;

  events: {
    "Transfer(address,address,uint256,address,bytes,bytes)": EventFragment;
    "Transfer(address,address,uint256,address,bytes)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "Transfer(address,address,uint256,address,bytes,bytes)"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Transfer(address,address,uint256,address,bytes)"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Transfer(address,address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
}

export interface Transfer_address_address_uint256_address_bytes_bytes_EventObject {
  from: string;
  to: string;
  assetId: BigNumber;
  operator: string;
  userData: string;
  operatorData: string;
}
export type Transfer_address_address_uint256_address_bytes_bytes_Event =
  TypedEvent<
    [string, string, BigNumber, string, string, string],
    Transfer_address_address_uint256_address_bytes_bytes_EventObject
  >;

export type Transfer_address_address_uint256_address_bytes_bytes_EventFilter =
  TypedEventFilter<Transfer_address_address_uint256_address_bytes_bytes_Event>;

export interface Transfer_address_address_uint256_address_bytes_EventObject {
  from: string;
  to: string;
  assetId: BigNumber;
  operator: string;
  userData: string;
}
export type Transfer_address_address_uint256_address_bytes_Event = TypedEvent<
  [string, string, BigNumber, string, string],
  Transfer_address_address_uint256_address_bytes_EventObject
>;

export type Transfer_address_address_uint256_address_bytes_EventFilter =
  TypedEventFilter<Transfer_address_address_uint256_address_bytes_Event>;

export interface Transfer_address_address_uint256_EventObject {
  from: string;
  to: string;
  assetId: BigNumber;
}
export type Transfer_address_address_uint256_Event = TypedEvent<
  [string, string, BigNumber],
  Transfer_address_address_uint256_EventObject
>;

export type Transfer_address_address_uint256_EventFilter =
  TypedEventFilter<Transfer_address_address_uint256_Event>;

export interface ApprovalForAllEventObject {
  holder: string;
  operator: string;
  authorized: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface ApprovalEventObject {
  owner: string;
  operator: string;
  assetId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface IERC721Base extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC721BaseInterface;

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
    approve(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isAuthorized(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ownerOf(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    balanceOf(
      holder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      authorized: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      assetHolder: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getApprovedAddress(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  approve(
    operator: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isAuthorized(
    operator: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "safeTransferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ownerOf(
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  balanceOf(
    holder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    authorized: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    assetHolder: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getApprovedAddress(
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    approve(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isAuthorized(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerOf(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    balanceOf(
      holder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      authorized: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedForAll(
      assetHolder: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getApprovedAddress(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Transfer(address,address,uint256,address,bytes,bytes)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      operator?: null,
      userData?: null,
      operatorData?: null
    ): Transfer_address_address_uint256_address_bytes_bytes_EventFilter;
    "Transfer(address,address,uint256,address,bytes)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      operator?: null,
      userData?: null
    ): Transfer_address_address_uint256_address_bytes_EventFilter;
    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      assetId?: PromiseOrValue<BigNumberish> | null
    ): Transfer_address_address_uint256_EventFilter;

    "ApprovalForAll(address,address,bool)"(
      holder?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      authorized?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      holder?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      authorized?: null
    ): ApprovalForAllEventFilter;

    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      assetId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      assetId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
  };

  estimateGas: {
    approve(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isAuthorized(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ownerOf(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      holder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      authorized: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      assetHolder: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApprovedAddress(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isAuthorized(
      operator: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ownerOf(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      holder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      authorized: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      assetHolder: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApprovedAddress(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}