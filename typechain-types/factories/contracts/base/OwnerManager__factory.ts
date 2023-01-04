/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OwnerManager,
  OwnerManagerInterface,
} from "../../../contracts/base/OwnerManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AddedOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "ChangedThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "RemovedOwner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "addOwnerWithThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "changeThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "isOwner",
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
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "swapOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a6d806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a0e67e2b1161005b578063a0e67e2b146100d2578063e318b52b146100e7578063e75235b8146100fa578063f8dc5dd91461010b57600080fd5b80630d582f13146100825780632f54bf6e14610097578063694e80c3146100bf575b600080fd5b6100956100903660046108fd565b61011e565b005b6100aa6100a536600461085c565b610297565b60405190151581526020015b60405180910390f35b6100956100cd366004610927565b6102d2565b6100da610388565b6040516100b69190610940565b6100956100f536600461087e565b610478565b6002546040519081526020016100b6565b6100956101193660046108c1565b61067d565b610126610807565b6001600160a01b0382161580159061014857506001600160a01b038216600114155b801561015d57506001600160a01b0382163014155b6101825760405162461bcd60e51b81526004016101799061098d565b60405180910390fd5b6001600160a01b0382811660009081526020819052604090205416156101d25760405162461bcd60e51b815260206004820152600560248201526411d4cc8c0d60da1b6044820152606401610179565b600060208190527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d80546001600160a01b03858116808552604085208054929093166001600160a01b03199283161790925560018085528354909116909117909155805491610240836109da565b90915550506040516001600160a01b03831681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a1806002541461029357610293816102d2565b5050565b60006001600160a01b0382166001148015906102cc57506001600160a01b038281166000908152602081905260409020541615155b92915050565b6102da610807565b6001548111156103145760405162461bcd60e51b8152602060048201526005602482015264475332303160d81b6044820152606401610179565b600181101561034d5760405162461bcd60e51b815260206004820152600560248201526423a999181960d91b6044820152606401610179565b60028190556040518181527f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c939060200160405180910390a150565b6060600060015467ffffffffffffffff8111156103a7576103a7610a21565b6040519080825280602002602001820160405280156103d0578160200160208202803683370190505b506001600090815260208190527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d54919250906001600160a01b03165b6001600160a01b038116600114610470578083838151811061043157610431610a0b565b6001600160a01b039283166020918202929092018101919091529181166000908152918290526040909120541681610468816109da565b92505061040d565b509092915050565b610480610807565b6001600160a01b038116158015906104a257506001600160a01b038116600114155b80156104b757506001600160a01b0381163014155b6104d35760405162461bcd60e51b81526004016101799061098d565b6001600160a01b0381811660009081526020819052604090205416156105235760405162461bcd60e51b815260206004820152600560248201526411d4cc8c0d60da1b6044820152606401610179565b6001600160a01b0382161580159061054557506001600160a01b038216600114155b6105615760405162461bcd60e51b81526004016101799061098d565b6001600160a01b038381166000908152602081905260409020548116908316146105b55760405162461bcd60e51b8152602060048201526005602482015264475332303560d81b6044820152606401610179565b6001600160a01b03828116600081815260208181526040808320805487871680865283862080549289166001600160a01b0319938416179055968a1685528285208054821690971790965592849052825490941690915591519081527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf910160405180910390a16040516001600160a01b03821681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a1505050565b610685610807565b806001805461069491906109ac565b10156106ca5760405162461bcd60e51b8152602060048201526005602482015264475332303160d81b6044820152606401610179565b6001600160a01b038216158015906106ec57506001600160a01b038216600114155b6107085760405162461bcd60e51b81526004016101799061098d565b6001600160a01b0383811660009081526020819052604090205481169083161461075c5760405162461bcd60e51b8152602060048201526005602482015264475332303560d81b6044820152606401610179565b6001600160a01b03828116600081815260208190526040808220805488861684529183208054929095166001600160a01b031992831617909455918152825490911690915560018054916107af836109c3565b90915550506040516001600160a01b03831681527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf9060200160405180910390a1806002541461080257610802816102d2565b505050565b33301461083e5760405162461bcd60e51b8152602060048201526005602482015264475330333160d81b6044820152606401610179565b565b80356001600160a01b038116811461085757600080fd5b919050565b60006020828403121561086e57600080fd5b61087782610840565b9392505050565b60008060006060848603121561089357600080fd5b61089c84610840565b92506108aa60208501610840565b91506108b860408501610840565b90509250925092565b6000806000606084860312156108d657600080fd5b6108df84610840565b92506108ed60208501610840565b9150604084013590509250925092565b6000806040838503121561091057600080fd5b61091983610840565b946020939093013593505050565b60006020828403121561093957600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156109815783516001600160a01b03168352928401929184019160010161095c565b50909695505050505050565b602080825260059082015264475332303360d81b604082015260600190565b6000828210156109be576109be6109f5565b500390565b6000816109d2576109d26109f5565b506000190190565b60006000198214156109ee576109ee6109f5565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122057e96aa27d2df54a6ae9f5cf074b84174be4923cde4013e31a5d0bce58401f7064736f6c63430008070033";

type OwnerManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnerManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnerManager__factory extends ContractFactory {
  constructor(...args: OwnerManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnerManager> {
    return super.deploy(overrides || {}) as Promise<OwnerManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnerManager {
    return super.attach(address) as OwnerManager;
  }
  override connect(signer: Signer): OwnerManager__factory {
    return super.connect(signer) as OwnerManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnerManagerInterface {
    return new utils.Interface(_abi) as OwnerManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerManager {
    return new Contract(address, _abi, signerOrProvider) as OwnerManager;
  }
}