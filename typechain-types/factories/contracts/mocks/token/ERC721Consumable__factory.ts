/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC721Consumable,
  ERC721ConsumableInterface,
} from "../../../../contracts/mocks/token/ERC721Consumable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ConsumerChanged",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
        name: "_consumer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "changeConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "consumerOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "symbol",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600d81526c149959995c995b98d9525b5c1b609a1b602080830191825283518085019094526005845264149253541360da1b908401528151919291620000649160009162000083565b5080516200007a90600190602084019062000083565b50505062000166565b828054620000919062000129565b90600052602060002090601f016020900481019282620000b5576000855562000100565b82601f10620000d057805160ff191683800117855562000100565b8280016001018555821562000100579182015b8281111562000100578251825591602001919060010190620000e3565b506200010e92915062000112565b5090565b5b808211156200010e576000815560010162000113565b600181811c908216806200013e57607f821691505b602082108114156200016057634e487b7160e01b600052602260045260246000fd5b50919050565b61167080620001766000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063b88d4fde11610066578063b88d4fde14610212578063c87b56dd14610225578063e589233114610238578063e985e9c51461024b57600080fd5b806370a08231146101d157806370b5aecb146101e457806395d89b41146101f7578063a22cb465146101ff57600080fd5b80631249c58b116100d35780631249c58b1461018257806323b872dd1461019857806342842e0e146101ab5780636352211e146101be57600080fd5b806301ffc9a71461010557806306fdde031461012d578063081812fc14610142578063095ea7b31461016d575b600080fd5b61011861011336600461118e565b61025e565b60405190151581526020015b60405180910390f35b610135610289565b6040516101249190611203565b610155610150366004611216565b61031b565b6040516001600160a01b039091168152602001610124565b61018061017b366004611244565b610342565b005b61018a61045d565b604051908152602001610124565b6101806101a6366004611270565b610489565b6101806101b9366004611270565b6104ba565b6101556101cc366004611216565b6104d5565b61018a6101df3660046112b1565b610535565b6101806101f2366004611244565b6105bb565b6101356106e7565b61018061020d3660046112ce565b6106f6565b610180610220366004611322565b610705565b610135610233366004611216565b61073d565b610155610246366004611216565b6107b1565b610118610259366004611402565b610850565b60006001600160e01b03198216634a9e46fd60e11b148061028357506102838261087e565b92915050565b60606000805461029890611430565b80601f01602080910402602001604051908101604052809291908181526020018280546102c490611430565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b5050505050905090565b6000610326826108ce565b506000908152600460205260409020546001600160a01b031690565b600061034d826104d5565b9050806001600160a01b0316836001600160a01b031614156103c05760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806103dc57506103dc8133610850565b61044e5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016103b7565b6104588383610930565b505050565b600061046d600680546001019055565b600061047860065490565b9050610484338261099e565b919050565b6104933382610b37565b6104af5760405162461bcd60e51b81526004016103b79061146b565b610458838383610b96565b61045883838360405180602001604052806000815250610705565b6000818152600260205260408120546001600160a01b0316806102835760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103b7565b60006001600160a01b03821661059f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103b7565b506001600160a01b031660009081526003602052604090205490565b6040516331a9108f60e11b8152600481018290526000903090636352211e90602401602060405180830381865afa1580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e91906114b8565b9050336001600160a01b0382161480610650575061063b8261031b565b6001600160a01b0316336001600160a01b0316145b8061066057506106608133610850565b6106dc5760405162461bcd60e51b815260206004820152604160248201527f455243373231436f6e73756d61626c653a206368616e6765436f6e73756d657260448201527f2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656064820152601960fa1b608482015260a4016103b7565b610458818484610d07565b60606001805461029890611430565b610701338383610d63565b5050565b61070f3383610b37565b61072b5760405162461bcd60e51b81526004016103b79061146b565b61073784848484610e32565b50505050565b6060610748826108ce565b600061075f60408051602081019091526000815290565b9050600081511161077f57604051806020016040528060008152506107aa565b8061078984610e65565b60405160200161079a9291906114d5565b6040516020818303038152906040525b9392505050565b6000818152600260205260408120546001600160a01b03166108345760405162461bcd60e51b815260206004820152603660248201527f455243373231436f6e73756d61626c653a20636f6e73756d6572207175657279604482015275103337b9103737b732bc34b9ba32b73a103a37b5b2b760511b60648201526084016103b7565b506000908152600760205260409020546001600160a01b031690565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b14806108af57506001600160e01b03198216635b5e139f60e01b145b8061028357506301ffc9a760e01b6001600160e01b0319831614610283565b6000818152600260205260409020546001600160a01b031661092d5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103b7565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610965826104d5565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166109f45760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103b7565b6000818152600260205260409020546001600160a01b031615610a595760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103b7565b610a67600083836001610f02565b6000818152600260205260409020546001600160a01b031615610acc5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103b7565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080610b43836104d5565b9050806001600160a01b0316846001600160a01b03161480610b6a5750610b6a8185610850565b80610b8e5750836001600160a01b0316610b838461031b565b6001600160a01b0316145b949350505050565b826001600160a01b0316610ba9826104d5565b6001600160a01b031614610bcf5760405162461bcd60e51b81526004016103b790611504565b6001600160a01b038216610c315760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103b7565b610c3e8383836001610f02565b826001600160a01b0316610c51826104d5565b6001600160a01b031614610c775760405162461bcd60e51b81526004016103b790611504565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60008181526007602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917f42ef856c2602f37ce625d252830bed486c5c8e9a4de8aa36cc3d15f304eb662b91a4505050565b816001600160a01b0316836001600160a01b03161415610dc55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103b7565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e3d848484610b96565b610e4984848484610f1a565b6107375760405162461bcd60e51b81526004016103b790611549565b60606000610e7283611018565b600101905060008167ffffffffffffffff811115610e9257610e9261130c565b6040519080825280601f01601f191660200182016040528015610ebc576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610ef557610efa565b610ec6565b509392505050565b610f0e848484846110f0565b61073784600084610d07565b60006001600160a01b0384163b1561100d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f5e90339089908890889060040161159b565b6020604051808303816000875af1925050508015610f99575060408051601f3d908101601f19168201909252610f96918101906115d8565b60015b610ff3573d808015610fc7576040519150601f19603f3d011682016040523d82523d6000602084013e610fcc565b606091505b508051610feb5760405162461bcd60e51b81526004016103b790611549565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b8e565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106110575772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611083576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106110a157662386f26fc10000830492506010015b6305f5e10083106110b9576305f5e100830492506008015b61271083106110cd57612710830492506004015b606483106110df576064830492506002015b600a83106102835760010192915050565b6001811115610737576001600160a01b03841615611136576001600160a01b0384166000908152600360205260408120805483929061113090849061160b565b90915550505b6001600160a01b03831615610737576001600160a01b0383166000908152600360205260408120805483929061116d908490611622565b909155505050505050565b6001600160e01b03198116811461092d57600080fd5b6000602082840312156111a057600080fd5b81356107aa81611178565b60005b838110156111c65781810151838201526020016111ae565b838111156107375750506000910152565b600081518084526111ef8160208601602086016111ab565b601f01601f19169290920160200192915050565b6020815260006107aa60208301846111d7565b60006020828403121561122857600080fd5b5035919050565b6001600160a01b038116811461092d57600080fd5b6000806040838503121561125757600080fd5b82356112628161122f565b946020939093013593505050565b60008060006060848603121561128557600080fd5b83356112908161122f565b925060208401356112a08161122f565b929592945050506040919091013590565b6000602082840312156112c357600080fd5b81356107aa8161122f565b600080604083850312156112e157600080fd5b82356112ec8161122f565b91506020830135801515811461130157600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561133857600080fd5b84356113438161122f565b935060208501356113538161122f565b925060408501359150606085013567ffffffffffffffff8082111561137757600080fd5b818701915087601f83011261138b57600080fd5b81358181111561139d5761139d61130c565b604051601f8201601f19908116603f011681019083821181831017156113c5576113c561130c565b816040528281528a60208487010111156113de57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561141557600080fd5b82356114208161122f565b915060208301356113018161122f565b600181811c9082168061144457607f821691505b6020821081141561146557634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000602082840312156114ca57600080fd5b81516107aa8161122f565b600083516114e78184602088016111ab565b8351908301906114fb8183602088016111ab565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906115ce908301846111d7565b9695505050505050565b6000602082840312156115ea57600080fd5b81516107aa81611178565b634e487b7160e01b600052601160045260246000fd5b60008282101561161d5761161d6115f5565b500390565b60008219821115611635576116356115f5565b50019056fea2646970667358221220a0f5e41513a8a9752df1205401b98b2781f5b0ff9aa7f9912aafc14e2b4fdfa664736f6c634300080a0033";

type ERC721ConsumableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConsumableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Consumable__factory extends ContractFactory {
  constructor(...args: ERC721ConsumableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Consumable> {
    return super.deploy(overrides || {}) as Promise<ERC721Consumable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Consumable {
    return super.attach(address) as ERC721Consumable;
  }
  override connect(signer: Signer): ERC721Consumable__factory {
    return super.connect(signer) as ERC721Consumable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ConsumableInterface {
    return new utils.Interface(_abi) as ERC721ConsumableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Consumable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Consumable;
  }
}