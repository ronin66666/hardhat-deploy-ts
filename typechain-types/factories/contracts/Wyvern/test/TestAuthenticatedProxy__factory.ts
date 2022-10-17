/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestAuthenticatedProxy,
  TestAuthenticatedProxyInterface,
} from "../../../../contracts/Wyvern/test/TestAuthenticatedProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReceivedEther",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "ReceivedTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "revoked",
        type: "bool",
      },
    ],
    name: "Revoked",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addrUser",
        type: "address",
      },
      {
        internalType: "contract ProxyRegistry",
        name: "addrRegistry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "enum AuthenticatedProxy.HowToCall",
        name: "howToCall",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "proxy",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "enum AuthenticatedProxy.HowToCall",
        name: "howToCall",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "proxyAssert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "receiveApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract ProxyRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "revoked",
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
        internalType: "bool",
        name: "revoke",
        type: "bool",
      },
    ],
    name: "setRevoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newUser",
        type: "address",
      },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "user",
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
  "0x60806040526001805460ff60a01b1916905534801561001d57600080fd5b50610c968061002d6000396000f3fe6080604052600436106100955760003560e01c806363d256ce1161005957806363d256ce146103855780636fde8202146103ae5780637b103999146103c3578063858ced35146103d85780638f4ffcb11461040b5761009c565b80631b0f7ba9146100d45780633f801f9114610220578063485cc955146102ed5780634c93505f146103285780634f8632ba146103545761009c565b3661009c57005b60408051348152905133917fa419615bc8fda4c87663805ee2a3597a6d71c1d476911d9892f340d965bc7bf1919081900360200190a2005b3480156100e057600080fd5b5061019f600480360360608110156100f757600080fd5b6001600160a01b038235169160ff6020820135169181019060608101604082013564010000000081111561012a57600080fd5b82018360208201111561013c57600080fd5b8035906020019184600183028401116401000000008311171561015e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104dd945050505050565b60405180831515815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101e45781810151838201526020016101cc565b50505050905090810190601f1680156102115780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561022c57600080fd5b506102eb6004803603606081101561024357600080fd5b6001600160a01b038235169160ff6020820135169181019060608101604082013564010000000081111561027657600080fd5b82018360208201111561028857600080fd5b803590602001918460018302840111640100000000831117156102aa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610741945050505050565b005b3480156102f957600080fd5b506102eb6004803603604081101561031057600080fd5b506001600160a01b03813581169160200135166107f3565b34801561033457600080fd5b506102eb6004803603602081101561034b57600080fd5b5035151561087d565b34801561036057600080fd5b50610369610919565b604080516001600160a01b039092168252519081900360200190f35b34801561039157600080fd5b5061039a610928565b604080519115158252519081900360200190f35b3480156103ba57600080fd5b50610369610938565b3480156103cf57600080fd5b50610369610947565b3480156103e457600080fd5b506102eb600480360360208110156103fb57600080fd5b50356001600160a01b0316610956565b34801561041757600080fd5b506102eb6004803603608081101561042e57600080fd5b6001600160a01b03823581169260208101359260408201359092169181019060808101606082013564010000000081111561046857600080fd5b82018360208201111561047a57600080fd5b8035906020019184600183028401116401000000008311171561049c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109ea945050505050565b6002546000906060906001600160a01b03163314806105845750600354600160a01b900460ff161580156105845750600354604080516369dc9ff360e01b815233600482015290516001600160a01b03909216916369dc9ff391602480820192602092909190829003018186803b15801561055757600080fd5b505afa15801561056b573d6000803e3d6000fd5b505050506040513d602081101561058157600080fd5b50515b6105bf5760405162461bcd60e51b815260040180806020018281038252608a815260200180610ba4608a913960a00191505060405180910390fd5b60008460018111156105cd57fe5b141561067f57846001600160a01b0316836040518082805190602001908083835b6020831061060d5780518252601f1990920191602091820191016105ee565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461066f576040519150601f19603f3d011682016040523d82523d6000602084013e610674565b606091505b509092509050610739565b600184600181111561068d57fe5b141561073957846001600160a01b0316836040518082805190602001908083835b602083106106cd5780518252601f1990920191602091820191016106ae565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5090925090505b935093915050565b600060606107508585856104dd565b915091508161076157805160208201fd5b80826107eb5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107b0578181015183820152602001610798565b50505050905090810190601f1680156107dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050505050565b600154600160a01b900460ff161561083c5760405162461bcd60e51b8152600401808060200182810382526027815260200180610b7d6027913960400191505060405180910390fd5b6001805460ff60a01b1916600160a01b179055600280546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055565b6002546001600160a01b031633146108c65760405162461bcd60e51b8152600401808060200182810382526033815260200180610c2e6033913960400191505060405180910390fd5b60038054821515600160a01b810260ff60a01b199092169190911790915560408051918252517f2165014523a6f4135deffed62d70149aad59b64de5aac51e3abbcbe2a83e2f7e9181900360200190a150565b6002546001600160a01b031681565b600354600160a01b900460ff1681565b6001546001600160a01b031690565b6003546001600160a01b031681565b60035460025460408051636e7d491160e11b81526001600160a01b03928316600482015284831660248201529051919092169163dcfa922291604480830192600092919082900301818387803b1580156109af57600080fd5b505af11580156109c3573d6000803e3d6000fd5b5050600280546001600160a01b0319166001600160a01b0394909416939093179092555050565b604080516323b872dd60e01b81526001600160a01b03868116600483015230602483015260448201869052915184928316916323b872dd9160648083019260209291908290030181600087803b158015610a4357600080fd5b505af1158015610a57573d6000803e3d6000fd5b505050506040513d6020811015610a6d57600080fd5b5051610ac0576040805162461bcd60e51b815260206004820152601b60248201527f455243323020746f6b656e207472616e73666572206661696c65640000000000604482015290519081900360640190fd5b826001600160a01b0316856001600160a01b03167fd65b48fd35864b3528d38e44760be5553248f89bf3ff6b06cca57817cc2650bf86856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b3a578181015183820152602001610b22565b50505050905090810190601f168015610b675780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3505050505056fe41757468656e746963617465642070726f787920616c726561647920696e697469616c697a656441757468656e746963617465642070726f78792063616e206f6e6c792062652063616c6c65642062792069747320757365722c206f72206279206120636f6e747261637420617574686f72697a656420627920746865207265676973747279206173206c6f6e6720617320746865207573657220686173206e6f74207265766f6b65642061636365737341757468656e746963617465642070726f78792063616e206f6e6c79206265207265766f6b6564206279206974732075736572a26469706673582212209ad3ce146f4b179d38980504eb8bf5963c144c1ace7865e66467e9e31628c7d864736f6c63430007050033";

type TestAuthenticatedProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAuthenticatedProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAuthenticatedProxy__factory extends ContractFactory {
  constructor(...args: TestAuthenticatedProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestAuthenticatedProxy> {
    return super.deploy(overrides || {}) as Promise<TestAuthenticatedProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestAuthenticatedProxy {
    return super.attach(address) as TestAuthenticatedProxy;
  }
  override connect(signer: Signer): TestAuthenticatedProxy__factory {
    return super.connect(signer) as TestAuthenticatedProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAuthenticatedProxyInterface {
    return new utils.Interface(_abi) as TestAuthenticatedProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAuthenticatedProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestAuthenticatedProxy;
  }
}