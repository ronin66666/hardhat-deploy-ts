/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DefaultCallbackHandler,
  DefaultCallbackHandlerInterface,
} from "../../../contracts/handler/DefaultCallbackHandler";

const _abi = [
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061058e806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063a3f4df7e1161005b578063a3f4df7e146100fb578063bc197c8114610144578063f23a6e6114610166578063ffa1ad741461018657600080fd5b806223de291461008157806301ffc9a71461009b578063150b7a02146100c3575b600080fd5b61009961008f3660046102a6565b5050505050505050565b005b6100ae6100a93660046104d2565b6101aa565b60405190151581526020015b60405180910390f35b6100e26100d13660046103eb565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016100ba565b6101376040518060400160405280601881526020017f44656661756c742043616c6c6261636b2048616e646c6572000000000000000081525081565b6040516100ba9190610503565b6100e2610152366004610351565b63bc197c8160e01b98975050505050505050565b6100e261017436600461045a565b63f23a6e6160e01b9695505050505050565b610137604051806040016040528060058152602001640312e302e360dc1b81525081565b60006001600160e01b03198216630271189760e51b14806101db57506001600160e01b03198216630a85bd0160e11b145b806101f657506001600160e01b031982166301ffc9a760e01b145b92915050565b80356001600160a01b038116811461021357600080fd5b919050565b60008083601f84011261022a57600080fd5b50813567ffffffffffffffff81111561024257600080fd5b6020830191508360208260051b850101111561025d57600080fd5b9250929050565b60008083601f84011261027657600080fd5b50813567ffffffffffffffff81111561028e57600080fd5b60208301915083602082850101111561025d57600080fd5b60008060008060008060008060c0898b0312156102c257600080fd5b6102cb896101fc565b97506102d960208a016101fc565b96506102e760408a016101fc565b955060608901359450608089013567ffffffffffffffff8082111561030b57600080fd5b6103178c838d01610264565b909650945060a08b013591508082111561033057600080fd5b5061033d8b828c01610264565b999c989b5096995094979396929594505050565b60008060008060008060008060a0898b03121561036d57600080fd5b610376896101fc565b975061038460208a016101fc565b9650604089013567ffffffffffffffff808211156103a157600080fd5b6103ad8c838d01610218565b909850965060608b01359150808211156103c657600080fd5b6103d28c838d01610218565b909650945060808b013591508082111561033057600080fd5b60008060008060006080868803121561040357600080fd5b61040c866101fc565b945061041a602087016101fc565b935060408601359250606086013567ffffffffffffffff81111561043d57600080fd5b61044988828901610264565b969995985093965092949392505050565b60008060008060008060a0878903121561047357600080fd5b61047c876101fc565b955061048a602088016101fc565b94506040870135935060608701359250608087013567ffffffffffffffff8111156104b457600080fd5b6104c089828a01610264565b979a9699509497509295939492505050565b6000602082840312156104e457600080fd5b81356001600160e01b0319811681146104fc57600080fd5b9392505050565b600060208083528351808285015260005b8181101561053057858101830151858201604001528201610514565b81811115610542576000604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220350b7fc88e497ffb585cdea817e5e7fb38f8e15beb719f6e622ad933d64cc4b764736f6c63430008070033";

type DefaultCallbackHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefaultCallbackHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DefaultCallbackHandler__factory extends ContractFactory {
  constructor(...args: DefaultCallbackHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DefaultCallbackHandler> {
    return super.deploy(overrides || {}) as Promise<DefaultCallbackHandler>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DefaultCallbackHandler {
    return super.attach(address) as DefaultCallbackHandler;
  }
  override connect(signer: Signer): DefaultCallbackHandler__factory {
    return super.connect(signer) as DefaultCallbackHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefaultCallbackHandlerInterface {
    return new utils.Interface(_abi) as DefaultCallbackHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultCallbackHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DefaultCallbackHandler;
  }
}