/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC20Auction,
  ERC20AuctionInterface,
} from "../../../../contracts/Wyvern/auction/ERC20Auction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "AuctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AuctionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "AuctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "AuctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "interrupt",
        type: "bool",
      },
    ],
    name: "AuctionInterrupted",
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
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minStep",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxStep",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "coin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "HighestBid",
    type: "event",
  },
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "coin",
        type: "address",
      },
    ],
    name: "Rebate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "coin",
        type: "address",
      },
    ],
    name: "WithDraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "activeAuctionByTokenId",
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
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getCoin",
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
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getFloorPrice",
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
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getHighester",
    outputs: [
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getHighesterAccount",
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
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getOwner",
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
        name: "_auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRefundAmount",
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
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getRegistry",
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
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getTokenId",
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
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "isCanceled",
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
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "isEnded",
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
    name: "latestAuctionId",
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
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b50600061002561007c565b60008054610100600160a81b0319166101006001600160a01b038416908102919091178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610080565b3390565b610b7d8061008f6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638e05529311610097578063c41a360a11610066578063c41a360a14610270578063da3115881461028d578063f2fde38b146102aa578063f53bba09146102d0576100f5565b80638e055293146101ca578063a47995da1461020a578063b2d4cf1814610236578063b66f7a8b14610253576100f5565b80634026d63e116100d35780634026d63e146101935780634f0a44a01461019b578063715018a6146101b85780638da5cb5b146101c2576100f5565b806314ff5ea3146100fa578063193c045e1461012957806339e3af9b14610162575b600080fd5b6101176004803603602081101561011057600080fd5b50356102fc565b60408051918252519081900360200190f35b6101466004803603602081101561013f57600080fd5b50356103b0565b604080516001600160a01b039092168252519081900360200190f35b61017f6004803603602081101561017857600080fd5b503561046c565b604080519115158252519081900360200190f35b610117610481565b610146600480360360208110156101b157600080fd5b5035610487565b6101c0610543565b005b610146610606565b6101e7600480360360208110156101e057600080fd5b503561061a565b604080516001600160a01b03909316835260208301919091528051918290030190f35b6101176004803603604081101561022057600080fd5b506001600160a01b0381351690602001356106dd565b6101176004803603602081101561024c57600080fd5b5035610705565b61017f6004803603602081101561026957600080fd5b50356107c1565b6101466004803603602081101561028657600080fd5b50356107d7565b610146600480360360208110156102a357600080fd5b503561088f565b6101c0600480360360208110156102c057600080fd5b50356001600160a01b0316610948565b610117600480360360408110156102e657600080fd5b50803590602001356001600160a01b0316610a67565b6000610306610a93565b505060009081526003602081815260409283902083516101808101855281546001600160a01b0390811682526001830154811693820193909352600282015494810185905292810154606084015260048101546080840152600581015460a0840152600681015460c0840152600781015460e08401526008810154821661010084015260098101548216610120840152600a810154610140840152600b0154166101609091015290565b60006103ba610a93565b505060009081526003602081815260409283902083516101808101855281546001600160a01b039081168252600183015481169382019390935260028201549481019490945291820154606084015260048201546080840152600582015460a0840152600682015460c0840152600782015460e084015260088201548116610100840181905260098301548216610120850152600a830154610140850152600b90920154166101609092019190915290565b60009081526006602052604090205460ff1690565b60015490565b6000610491610a93565b505060009081526003602081815260409283902083516101808101855281546001600160a01b039081168252600183015481169382019390935260028201549481019490945291820154606084015260048201546080840152600582015460a0840152600682015460c0840152600782015460e084015260088201548116610100840152600982015481166101208401819052600a830154610140850152600b90920154166101609092019190915290565b61054b610a8f565b6001600160a01b031661055c610606565b6001600160a01b0316146105b7576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516101009091046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360008054610100600160a81b0319169055565b60005461010090046001600160a01b031690565b600080610625610a93565b50505060009081526003602081815260409283902083516101808101855281546001600160a01b039081168252600183015481169382019390935260028201549481019490945291820154606084015260048201546080840152600582015460a0840152600682015460c0840152600782015460e084015260088201548116610100840152600982015481166101208401819052600a8301546101408501819052600b90930154909116610160909301929092529091565b6001600160a01b03919091166000908152600460209081526040808320938352929052205490565b600061070f610a93565b505060009081526003602081815260409283902083516101808101855281546001600160a01b0390811682526001830154811693820193909352600282015494810194909452918201546060840181905260048301546080850152600583015460a0850152600683015460c0850152600783015460e08501526008830154821661010085015260098301548216610120850152600a830154610140850152600b90920154166101609092019190915290565b60009081526005602052604090205460ff161590565b60006107e1610a93565b505060009081526003602081815260409283902083516101808101855281546001600160a01b03908116808352600184015482169483019490945260028301549582019590955292810154606084015260048101546080840152600581015460a0840152600681015460c0840152600781015460e08401526008810154841661010084015260098101548416610120840152600a810154610140840152600b01549092166101609091015290565b6000610899610a93565b505060009081526003602081815260409283902083516101808101855281546001600160a01b039081168252600183015481169382019390935260028201549481019490945291820154606084015260048201546080840152600582015460a0840152600682015460c0840152600782015460e08401526008820154811661010084015260098201548116610120840152600a820154610140840152600b909101541661016090910181905290565b610950610a8f565b6001600160a01b0316610961610606565b6001600160a01b0316146109bc576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610a015760405162461bcd60e51b8152600401808060200182810382526026815260200180610b226026913960400191505060405180910390fd5b600080546040516001600160a01b038085169361010090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60009182526007602090815260408084206001600160a01b0393909316845291905290205490565b3390565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220fcd32b201a35d45de8d662adf3a39b8acbb2b799b6c29a4f7162537c98e3dd1164736f6c63430007050033";

type ERC20AuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20AuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Auction__factory extends ContractFactory {
  constructor(...args: ERC20AuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Auction> {
    return super.deploy(overrides || {}) as Promise<ERC20Auction>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Auction {
    return super.attach(address) as ERC20Auction;
  }
  override connect(signer: Signer): ERC20Auction__factory {
    return super.connect(signer) as ERC20Auction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20AuctionInterface {
    return new utils.Interface(_abi) as ERC20AuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Auction {
    return new Contract(address, _abi, signerOrProvider) as ERC20Auction;
  }
}