/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OwnableDelegateProxy,
  OwnableDelegateProxyInterface,
} from "../../../../contracts/Wyvern/registry/OwnableDelegateProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "ProxyOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyType",
    outputs: [
      {
        internalType: "uint256",
        name: "proxyTypeId",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeabilityOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109ee3803806109ee8339818101604052606081101561003357600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005e57600080fd5b90830190602082018581111561007357600080fd5b825164010000000081118282018810171561008d57600080fd5b82525081516020918201929091019080838360005b838110156100ba5781810151838201526020016100a2565b50505050905090810190601f1680156100e75780820380516001836020036101000a031916815260200191505b506040525050506100fd836101f060201b60201c565b61010682610212565b6000826001600160a01b0316826040518082805190602001908083835b602083106101425780518252601f199092019160209182019101610123565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146101a2576040519150601f19603f3d011682016040523d82523d6000602084013e6101a7565b606091505b50509050806101e75760405162461bcd60e51b815260040180806020018281038252602a8152602001806109c4602a913960400191505060405180910390fd5b505050506102a7565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b038281169116141561025f5760405162461bcd60e51b815260040180806020018281038252602681526020018061099e6026913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b91a250565b6106e8806102b66000396000f3fe6080604052600436106100745760003560e01c80634f1ef2861161004e5780634f1ef286146101945780635c60da1b1461024a5780636fde82021461025f578063f1739cae146102745761007b565b8063025313a2146101075780633659cfe6146101385780634555d5c91461016d5761007b565b3661007b57005b60006100856102a7565b90506001600160a01b0381166100e2576040805162461bcd60e51b815260206004820152601d60248201527f50726f787920696d706c656d656e746174696f6e207265717569726564000000604482015290519081900360640190fd5b60405136600082376000803683855af43d806000843e818015610103578184f35b8184fd5b34801561011357600080fd5b5061011c6102b6565b604080516001600160a01b039092168252519081900360200190f35b34801561014457600080fd5b5061016b6004803603602081101561015b57600080fd5b50356001600160a01b03166102c5565b005b34801561017957600080fd5b50610182610328565b60408051918252519081900360200190f35b61016b600480360360408110156101aa57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156101d557600080fd5b8201836020820111156101e757600080fd5b8035906020019184600183028401116401000000008311171561020957600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061032d945050505050565b34801561025657600080fd5b5061011c6102a7565b34801561026b57600080fd5b5061011c610489565b34801561028057600080fd5b5061016b6004803603602081101561029757600080fd5b50356001600160a01b0316610498565b6000546001600160a01b031690565b60006102c0610489565b905090565b6102cd6102b6565b6001600160a01b0316336001600160a01b03161461031c5760405162461bcd60e51b815260040180806020018281038252602981526020018061068a6029913960400191505060405180910390fd5b61032581610588565b50565b600290565b6103356102b6565b6001600160a01b0316336001600160a01b0316146103845760405162461bcd60e51b815260040180806020018281038252602981526020018061068a6029913960400191505060405180910390fd5b61038d826102c5565b6000306001600160a01b0316826040518082805190602001908083835b602083106103c95780518252601f1990920191602091820191016103aa565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610429576040519150601f19603f3d011682016040523d82523d6000602084013e61042e565b606091505b5050905080610484576040805162461bcd60e51b815260206004820152601f60248201527f43616c6c206661696c65642061667465722070726f7879207570677261646500604482015290519081900360640190fd5b505050565b6001546001600160a01b031690565b6104a06102b6565b6001600160a01b0316336001600160a01b0316146104ef5760405162461bcd60e51b815260040180806020018281038252602981526020018061068a6029913960400191505060405180910390fd5b6001600160a01b0381166105345760405162461bcd60e51b81526004018080602001828103825260248152602001806106666024913960400191505060405180910390fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd961055d6102b6565b604080516001600160a01b03928316815291841660208301528051918290030190a16103258161061d565b6000546001600160a01b03828116911614156105d55760405162461bcd60e51b81526004018080602001828103825260268152602001806106406026913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b91a250565b600180546001600160a01b0319166001600160a01b039290921691909117905556fe50726f787920616c72656164792075736573207468697320696d706c656d656e746174696f6e4e6577206f776e65722063616e6e6f7420626520746865206e756c6c20616464726573734f6e6c79207468652070726f7879206f776e65722063616e2063616c6c2074686973206d6574686f64a2646970667358221220ca22dc4c69c700c574d0e19c43b96f8b8267c198c9babe7329c9097229b0548864736f6c6343000705003350726f787920616c72656164792075736573207468697320696d706c656d656e746174696f6e4f776e61626c6544656c656761746550726f7879206661696c656420696d706c656d656e746174696f6e";

type OwnableDelegateProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableDelegateProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnableDelegateProxy__factory extends ContractFactory {
  constructor(...args: OwnableDelegateProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    initialImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnableDelegateProxy> {
    return super.deploy(
      owner,
      initialImplementation,
      data,
      overrides || {}
    ) as Promise<OwnableDelegateProxy>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    initialImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      owner,
      initialImplementation,
      data,
      overrides || {}
    );
  }
  override attach(address: string): OwnableDelegateProxy {
    return super.attach(address) as OwnableDelegateProxy;
  }
  override connect(signer: Signer): OwnableDelegateProxy__factory {
    return super.connect(signer) as OwnableDelegateProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableDelegateProxyInterface {
    return new utils.Interface(_abi) as OwnableDelegateProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableDelegateProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnableDelegateProxy;
  }
}