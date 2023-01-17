/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LibOwnership,
  LibOwnershipInterface,
} from "../../../contracts/libraries/LibOwnership";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208bad5a1bad9af228aac25287aeb6648e26b1c6d8abbe360c07489c7bd94270f964736f6c634300080a0033";

type LibOwnershipConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibOwnershipConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibOwnership__factory extends ContractFactory {
  constructor(...args: LibOwnershipConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibOwnership> {
    return super.deploy(overrides || {}) as Promise<LibOwnership>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibOwnership {
    return super.attach(address) as LibOwnership;
  }
  override connect(signer: Signer): LibOwnership__factory {
    return super.connect(signer) as LibOwnership__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibOwnershipInterface {
    return new utils.Interface(_abi) as LibOwnershipInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibOwnership {
    return new Contract(address, _abi, signerOrProvider) as LibOwnership;
  }
}