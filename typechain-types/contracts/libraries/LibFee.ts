/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface LibFeeInterface extends utils.Interface {
  functions: {};

  events: {
    "SetFee(address,uint256)": EventFragment;
    "SetTokenPayment(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTokenPayment"): EventFragment;
}

export interface SetFeeEventObject {
  _token: string;
  _fee: BigNumber;
}
export type SetFeeEvent = TypedEvent<[string, BigNumber], SetFeeEventObject>;

export type SetFeeEventFilter = TypedEventFilter<SetFeeEvent>;

export interface SetTokenPaymentEventObject {
  _token: string;
  _status: boolean;
}
export type SetTokenPaymentEvent = TypedEvent<
  [string, boolean],
  SetTokenPaymentEventObject
>;

export type SetTokenPaymentEventFilter = TypedEventFilter<SetTokenPaymentEvent>;

export interface LibFee extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibFeeInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "SetFee(address,uint256)"(
      _token?: PromiseOrValue<string> | null,
      _fee?: null
    ): SetFeeEventFilter;
    SetFee(
      _token?: PromiseOrValue<string> | null,
      _fee?: null
    ): SetFeeEventFilter;

    "SetTokenPayment(address,bool)"(
      _token?: PromiseOrValue<string> | null,
      _status?: null
    ): SetTokenPaymentEventFilter;
    SetTokenPayment(
      _token?: PromiseOrValue<string> | null,
      _status?: null
    ): SetTokenPaymentEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}