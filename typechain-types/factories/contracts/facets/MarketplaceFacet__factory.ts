/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MarketplaceFacet,
  MarketplaceFacetInterface,
} from "../../../contracts/facets/MarketplaceFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "ClaimRentFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "Delist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_metaverseRegistry",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_metaverseAssetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxFutureTime",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pricePerSecond",
        type: "uint256",
      },
    ],
    name: "List",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "SetMetaverseName",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "SetRegistry",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxFutureTime",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pricePerSecond",
        type: "uint256",
      },
    ],
    name: "UpdateConditions",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
    ],
    name: "assetAt",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "metaverseId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "metaverseRegistry",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "metaverseAssetId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFutureTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerSecond",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRents",
            type: "uint256",
          },
          {
            internalType: "enum LibMarketplace.AssetStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct LibMarketplace.Asset",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
    ],
    name: "delist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_metaverseRegistry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_metaverseAssetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxFutureTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pricePerSecond",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "list",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
    ],
    name: "metaverseName",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "registryAt",
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
        name: "_metaverseId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setMetaverseName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_metaverseId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    name: "supportsRegistry",
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
        name: "_metaverseId",
        type: "uint256",
      },
    ],
    name: "totalRegistries",
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
        name: "_assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxFutureTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pricePerSecond",
        type: "uint256",
      },
    ],
    name: "updateConditions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612de4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806382482f0d1161007157806382482f0d146101585780639125478b14610179578063964bc33f1461018c578063a41076d71461019f578063aa9239f5146101ca578063bf11a288146101ea57600080fd5b806309a77b79146100b9578063150b7a02146100ce5780632e1a7d4d146100ff5780633e7873f9146101125780634719c1771461013257806373ca2d9014610145575b600080fd5b6100cc6100c736600461276b565b61020d565b005b6100e16100dc3660046127e2565b61025b565b6040516001600160e01b031990911681526020015b60405180910390f35b6100cc61010d36600461285e565b61026c565b61012561012036600461285e565b61055c565b6040516100f691906128cf565b6100cc6101403660046128f3565b61056d565b6100cc610153366004612933565b610620565b61016b610166366004612984565b6108c5565b6040519081526020016100f6565b61016b61018736600461285e565b6108e6565b6100cc61019a36600461285e565b6108f1565b6101b26101ad366004612a02565b610a61565b6040516001600160a01b0390911681526020016100f6565b6101dd6101d836600461285e565b610a74565b6040516100f69190612a5c565b6101fd6101f8366004612af5565b610a85565b60405190151581526020016100f6565b610215610a91565b61021f8282610b08565b817f92ebb3b3ac128c70b4e086477c1ae8ecfa7d1b75878322f9907332fff17382948260405161024f91906128cf565b60405180910390a25050565b630a85bd0160e11b5b949350505050565b8061027681610b34565b5050600061028f600080516020612d4f83398151915290565b905061029b3384610c31565b6102c05760405162461bcd60e51b81526004016102b790612b21565b60405180910390fd5b600083815260018083016020908152604080842081516101408101835281548152818501546001600160a01b03908116948201949094526002820154928101929092526003810154909216606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154909261012084019160ff169081111561036357610363612a24565b600181111561037457610374612a24565b90525090506001816101200151600181111561039257610392612a24565b146103d75760405162461bcd60e51b815260206004820152601560248201527417d85cdcd95d1259081b9bdd0819195b1a5cdd1959605a1b60448201526064016102b7565b60008481526002808401602090815260408084206101008601518552909152909120015442101561044a5760405162461bcd60e51b815260206004820152601b60248201527f5f617373657449642068617320616e206163746976652072656e74000000000060448201526064016102b7565b61045381610d36565b6000848152600080516020612d8f833981519152602090815260408083208381556001810180546001600160a01b0319908116909155600282018590556003820180548216905560048201859055600582018590556006820185905560078201859055600882018590556009909101805460ff191690557f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc390925282208054909116905561050085610de9565b905061050b85610e7f565b61051f826020015130838560400151610f58565b6040516001600160a01b0382169086907f8353ffcac0876ad14e226d9783c04540bfebf13871e868157d2a391cad98e91890600090a35050505050565b606061056782610fc8565b92915050565b6001600160a01b0382166105c35760405162461bcd60e51b815260206004820152601960248201527f5f7265676973747279206d757374206e6f74206265203078300000000000000060448201526064016102b7565b6105cb610a91565b6105d6838383611077565b604080516001600160a01b0384168152821515602082015284917f440dd4423dfde224649fc2c69e465320920653bf1308d18125ae1a017b54aa65910160405180910390a2505050565b8561062a81610b34565b50506106363388610c31565b806106465750610646338861114b565b6106b15760405162461bcd60e51b815260206004820152603660248201527f63616c6c6572206d75737420626520636f6e73756d65722c20617070726f766560448201527519081bdc881bdddb995c881bd98817d85cdcd95d125960521b60648201526084016102b7565b856106f95760405162461bcd60e51b815260206004820152601860248201527705f6d696e506572696f64206d757374206e6f7420626520360441b60448201526064016102b7565b846107415760405162461bcd60e51b815260206004820152601860248201527705f6d6178506572696f64206d757374206e6f7420626520360441b60448201526064016102b7565b848611156107915760405162461bcd60e51b815260206004820152601f60248201527f5f6d696e506572696f64206d6f7265207468616e205f6d6178506572696f640060448201526064016102b7565b838511156107b15760405162461bcd60e51b81526004016102b790612b6d565b6107ba83611172565b6108065760405162461bcd60e51b815260206004820152601a60248201527f7061796d656e742074797065206e6f7420737570706f7274656400000000000060448201526064016102b7565b6000878152600080516020612d8f83398151915260209081526040918290206003810180546001600160a01b0388166001600160a01b03199091168117909155600482018a905560058201899055600682018890556007820186905583518a8152928301899052828401889052606083018690529251600080516020612d4f8339815191529391928b917f6337c57f3fd18b809115e4d1740b67703492d985e4dfc6304c7d9ec54feba75f9181900360800190a3505050505050505050565b60006108d88a8a8a8a8a8a8a8a8a61119e565b9a9950505050505050505050565b600061056782611686565b600080516020612d4f83398151915261090a3383610c31565b6109265760405162461bcd60e51b81526004016102b790612b21565b600082815260018083016020908152604080842081516101408101835281548152818501546001600160a01b03908116948201949094526002820154928101929092526003810154909216606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154909261012084019160ff16908111156109c9576109c9612a24565b60018111156109da576109da612a24565b905250600084815260018481016020526040808320600901805460ff191690921790915551919250339185917fd086a6d78197a44cff795053ba5ef5cc0c13d6b3bb79afa267be823596e516a291a36000838152600280840160209081526040808420610100860151855290915290912001544210610a5c57610a5c8361026c565b505050565b6000610a6d83836116ad565b9392505050565b610a7c6125d1565b610567826116d5565b6000610a6d83836117ab565b7faba9fab218e99d82c4cdc7f8050a7ec15e88f8ccb78565ad22c8882d1563dfd6600401546001600160a01b03163314610b065760405162461bcd60e51b815260206004820152601660248201527526bab9ba1031329031b7b73a3930b1ba1037bbb732b960511b60448201526064016102b7565b565b6000828152600080516020612d4f833981519152602090815260409091208251610a5c92840190612646565b6000818152600080516020612d8f83398151915260209081526040808320600301547f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca2183528184206001600160a01b039091168085529252822080549083905582919080610ba6579094909350915050565b6000610bb1866117d3565b90506001600160a01b038116610bcd57610bca86610de9565b90505b610bd8838284611882565b806001600160a01b0316836001600160a01b0316877f3d5971fa9da202801ea7b636399b6d073418176344e3de9134cebd23432db9d285604051610c1e91815260200190565b60405180910390a4509094909350915050565b6000610c3c826118de565b610c9d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016102b7565b6000610ca883610de9565b9050806001600160a01b0316846001600160a01b03161480610ce35750836001600160a01b0316610cd88461191a565b6001600160a01b0316145b8061026457506001600160a01b0380821660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc472602090815260408083209388168352929052205460ff16610264565b6020818101516001600160a01b0390811660009081527ff51182120ec544b7618269e1d13d22411486cf3aab4ebb054ff902f277c2618f909252604090912054168015610de55760408281015190516370b5aecb60e01b81526000600482015260248101919091526001600160a01b038216906370b5aecb90604401600060405180830381600087803b158015610dcc57600080fd5b505af1158015610de0573d6000803e3d6000fd5b505050505b5050565b60008181527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46f60205260408120546001600160a01b0316806105675760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016102b7565b6000610e8a82610de9565b9050610e98816000846119c1565b610ea3600083611ac8565b6001600160a01b03811660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc470602052604081208054600080516020612d6f8339815191529260019291610efb908490612bc6565b9091555050600083815260058201602052604080822080546001600160a01b0319169055518491906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505050565b604051632142170760e11b81526001600160a01b0384811660048301528381166024830152604482018390528516906342842e0e90606401600060405180830381600087803b158015610faa57600080fd5b505af1158015610fbe573d6000803e3d6000fd5b5050505050505050565b6000818152600080516020612d4f83398151915260205260409020805460609190610ff290612bdd565b80601f016020809104026020016040519081016040528092919081815260200182805461101e90612bdd565b801561106b5780601f106110405761010080835404028352916020019161106b565b820191906000526020600020905b81548152906001019060200180831161104e57829003601f168201915b50505050509050919050565b6000838152600080516020612d4f8339815191526020526040902081156110f6576110a56001820184611b55565b6110f15760405162461bcd60e51b815260206004820152601760248201527f5f726567697374727920616c726561647920616464656400000000000000000060448201526064016102b7565b611145565b6111036001820184611b6a565b6111455760405162461bcd60e51b815260206004820152601360248201527217dc9959da5cdd1c9e481b9bdd08199bdd5b99606a1b60448201526064016102b7565b50505050565b6000611156826117d3565b6001600160a01b0316836001600160a01b031614905092915050565b60006105677f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca1e83611b7f565b60006001600160a01b0389166112015760405162461bcd60e51b815260206004820152602260248201527f5f6d65746176657273655265676973747279206d757374206e6f742062652030604482015261078360f41b60648201526084016102b7565b61120b8a8a6117ab565b6112575760405162461bcd60e51b815260206004820152601760248201527f5f7265676973747279206e6f7420737570706f7274656400000000000000000060448201526064016102b7565b8661129f5760405162461bcd60e51b815260206004820152601860248201527705f6d696e506572696f64206d757374206e6f7420626520360441b60448201526064016102b7565b856112e75760405162461bcd60e51b815260206004820152601860248201527705f6d6178506572696f64206d757374206e6f7420626520360441b60448201526064016102b7565b858711156113375760405162461bcd60e51b815260206004820152601f60248201527f5f6d696e506572696f64206d6f7265207468616e205f6d6178506572696f640060448201526064016102b7565b848611156113575760405162461bcd60e51b81526004016102b790612b6d565b61136084611172565b6113ac5760405162461bcd60e51b815260206004820152601a60248201527f7061796d656e742074797065206e6f7420737570706f7274656400000000000060448201526064016102b7565b6001600160a01b03821615611467576001600160a01b03821660009081527f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc6602090815260409182902082518084019093525462ffffff808216808552630100000090920416918301919091526114655760405162461bcd60e51b815260206004820152601960248201527f5f7265666572726572206e6f742077686974656c69737465640000000000000060448201526064016102b7565b505b600061147233611ba1565b90506000600080516020612d4f83398151915290506040518061014001604052808d81526020018c6001600160a01b031681526020018b8152602001876001600160a01b031681526020018a815260200189815260200188815260200186815260200160008152602001600060018111156114ef576114ef612a24565b9052600083815260018381016020908152604092839020845181559084015181830180546001600160a01b03199081166001600160a01b039384161790915593850151600283015560608501516003830180549095169116179092556080830151600483015560a0830151600583015560c0830151600683015560e0830151600783015561010083015160088301556101208301516009830180549192909160ff19169083818111156115a4576115a4612a24565b0217905550905050836115d47f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc290565b60008481526001919091016020526040902080546001600160a01b0319166001600160a01b03929092169190911790556116108b33308d610f58565b5060408051828152602081018d9052908101899052606081018890526080810187905260a081018590526001600160a01b03808716918b918d16907fa6065b2a055a9c120a93fb532bad2b63012bd21e0631f20c99f5a1c25567580c9060c00160405180910390a49a9950505050505050505050565b6000818152600080516020612d4f8339815191526020526040812061056790600101611bf8565b6000828152600080516020612d4f83398151915260205260408120610a6d9060010183611c02565b6116dd6125d1565b6000828152600080516020612d8f8339815191526020908152604091829020825161014081018452815481526001828101546001600160a01b03908116948301949094526002830154948201949094526003820154909216606083015260048101546080830152600581015460a0830152600681015460c0830152600781015460e0830152600881015461010083015260098101549192909161012084019160ff9091169081111561179157611791612a24565b60018111156117a2576117a2612a24565b90525092915050565b6000828152600080516020612d4f83398151915260205260408120610a6d9060010183611b7f565b60006117de826118de565b6118475760405162461bcd60e51b815260206004820152603460248201527f455243373231436f6e73756d65723a20636f6e73756d6572207175657279206660448201527337b9103737b732bc34b9ba32b73a103a37b5b2b760611b60648201526084016102b7565b5060009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc47360205260409020546001600160a01b031690565b6001600160a01b038316600114156118ca576040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015611145573d6000803e3d6000fd5b610a5c6001600160a01b0384168383611c0e565b60009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46f60205260409020546001600160a01b0316151590565b6000611925826118de565b6119865760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016102b7565b5060009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc47160205260409020546001600160a01b031690565b6001600160a01b038316611a5a57611a55817fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc476805460008381527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc47760205260408120829055600182018355919091527f78275a15b232bc86904929c87ea66a63ec326283a91ad09a61c5f56a6412799a0155565b611a7d565b816001600160a01b0316836001600160a01b031614611a7d57611a7d8382611c60565b6001600160a01b038216611a9957611a9481611d35565b611abc565b826001600160a01b0316826001600160a01b031614611abc57611abc8282611e1e565b610a5c83600083611ea1565b60008181527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc4716020526040902080546001600160a01b0319166001600160a01b0384169081179091558190611b1c82610de9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610a6d836001600160a01b038416611f2e565b6000610a6d836001600160a01b038416611f7d565b6001600160a01b03811660009081526001830160205260408120541515610a6d565b7fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46e805460018101909155600090600080516020612d6f83398151915290610a6d848260405180602001604052806000815250612070565b6000610567825490565b6000610a6d83836120a3565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a5c9084906120cd565b60006001611c6d8461219f565b611c779190612bc6565b60008381527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc4756020526040902054909150600080516020612d6f83398151915290808314611cfd576001600160a01b0385166000908152600a8301602090815260408083208684528252808320548484528184208190558352600b850190915290208190555b506000928352600b8101602090815260408085208590556001600160a01b039095168452600a90910181528383209183525290812055565b7fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc47654600080516020612d6f83398151915290600090611d7690600190612bc6565b6000848152600d84016020526040812054600c85018054939450909284908110611da257611da2612c18565b906000526020600020015490508084600c018381548110611dc557611dc5612c18565b6000918252602080832090910192909255828152600d86019091526040808220849055868252812055600c8401805480611e0157611e01612c2e565b600190038181906000526020600020016000905590555050505050565b6000611e298361219f565b6001600160a01b039390931660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc4746020908152604080832086845282528083208590559382527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc4759052919091209190915550565b60008181527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc473602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151600080516020612d6f833981519152938593928816917f42ef856c2602f37ce625d252830bed486c5c8e9a4de8aa36cc3d15f304eb662b9190a450505050565b6000818152600183016020526040812054611f7557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610567565b506000610567565b60008181526001830160205260408120548015612066576000611fa1600183612bc6565b8554909150600090611fb590600190612bc6565b905081811461201a576000866000018281548110611fd557611fd5612c18565b9060005260206000200154905080876000018481548110611ff857611ff8612c18565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061202b5761202b612c2e565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610567565b6000915050610567565b61207a8383612245565b61208760008484846123b6565b610a5c5760405162461bcd60e51b81526004016102b790612c44565b60008260000182815481106120ba576120ba612c18565b9060005260206000200154905092915050565b6000612122826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166124b19092919063ffffffff16565b805190915015610a5c57808060200190518101906121409190612c96565b610a5c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102b7565b60006001600160a01b03821661220a5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016102b7565b506001600160a01b031660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc470602052604090205490565b6001600160a01b03821661229b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016102b7565b6122a4816118de565b156122f15760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016102b7565b6122fd600083836119c1565b6001600160a01b03821660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc470602052604081208054600080516020612d6f8339815191529260019291612355908490612cb3565b9091555050600082815260058201602052604080822080546001600160a01b0319166001600160a01b03871690811790915590518492907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4505050565b60006001600160a01b0384163b156124a957604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906123fa903390899088908890600401612ccb565b6020604051808303816000875af1925050508015612435575060408051601f3d908101601f1916820190925261243291810190612d08565b60015b61248f573d808015612463576040519150601f19603f3d011682016040523d82523d6000602084013e612468565b606091505b5080516124875760405162461bcd60e51b81526004016102b790612c44565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610264565b506001610264565b6060610264848460008585600080866001600160a01b031685876040516124d89190612d32565b60006040518083038185875af1925050503d8060008114612515576040519150601f19603f3d011682016040523d82523d6000602084013e61251a565b606091505b509150915061252b87838387612536565b979650505050505050565b606083156125a257825161259b576001600160a01b0385163b61259b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102b7565b5081610264565b61026483838151156125b75781518083602001fd5b8060405162461bcd60e51b81526004016102b791906128cf565b6040518061014001604052806000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000600181111561264157612641612a24565b905290565b82805461265290612bdd565b90600052602060002090601f01602090048101928261267457600085556126ba565b82601f1061268d57805160ff19168380011785556126ba565b828001600101855582156126ba579182015b828111156126ba57825182559160200191906001019061269f565b506126c69291506126ca565b5090565b5b808211156126c657600081556001016126cb565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115612710576127106126df565b604051601f8501601f19908116603f01168101908282118183101715612738576127386126df565b8160405280935085815286868601111561275157600080fd5b858560208301376000602087830101525050509392505050565b6000806040838503121561277e57600080fd5b82359150602083013567ffffffffffffffff81111561279c57600080fd5b8301601f810185136127ad57600080fd5b6127bc858235602084016126f5565b9150509250929050565b80356001600160a01b03811681146127dd57600080fd5b919050565b600080600080608085870312156127f857600080fd5b612801856127c6565b935061280f602086016127c6565b925060408501359150606085013567ffffffffffffffff81111561283257600080fd5b8501601f8101871361284357600080fd5b612852878235602084016126f5565b91505092959194509250565b60006020828403121561287057600080fd5b5035919050565b60005b8381101561289257818101518382015260200161287a565b838111156111455750506000910152565b600081518084526128bb816020860160208601612877565b601f01601f19169290920160200192915050565b602081526000610a6d60208301846128a3565b80151581146128f057600080fd5b50565b60008060006060848603121561290857600080fd5b83359250612918602085016127c6565b91506040840135612928816128e2565b809150509250925092565b60008060008060008060c0878903121561294c57600080fd5b86359550602087013594506040870135935060608701359250612971608088016127c6565b915060a087013590509295509295509295565b60008060008060008060008060006101208a8c0312156129a357600080fd5b893598506129b360208b016127c6565b975060408a0135965060608a0135955060808a0135945060a08a013593506129dd60c08b016127c6565b925060e08a013591506129f36101008b016127c6565b90509295985092959850929598565b60008060408385031215612a1557600080fd5b50508035926020909101359150565b634e487b7160e01b600052602160045260246000fd5b60028110612a5857634e487b7160e01b600052602160045260246000fd5b9052565b81518152602080830151610140830191612a80908401826001600160a01b03169052565b50604083015160408301526060830151612aa560608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151612aed82850182612a3a565b505092915050565b60008060408385031215612b0857600080fd5b82359150612b18602084016127c6565b90509250929050565b6020808252602c908201527f63616c6c6572206d75737420626520617070726f766564206f72206f776e657260408201526b081bd98817d85cdcd95d125960a21b606082015260800190565b60208082526023908201527f5f6d6178506572696f64206d6f7265207468616e205f6d617846757475726554604082015262696d6560e81b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082821015612bd857612bd8612bb0565b500390565b600181811c90821680612bf157607f821691505b60208210811415612c1257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060208284031215612ca857600080fd5b8151610a6d816128e2565b60008219821115612cc657612cc6612bb0565b500190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612cfe908301846128a3565b9695505050505050565b600060208284031215612d1a57600080fd5b81516001600160e01b031981168114610a6d57600080fd5b60008251612d44818460208701612877565b919091019291505056fe0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb382054ead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46a0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb382055a26469706673582212205f6e5dea10516e06661302f32bb8da83fe24c8f54d0d7dc421b334614b8efc3f64736f6c634300080a0033";

type MarketplaceFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketplaceFacet__factory extends ContractFactory {
  constructor(...args: MarketplaceFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketplaceFacet> {
    return super.deploy(overrides || {}) as Promise<MarketplaceFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MarketplaceFacet {
    return super.attach(address) as MarketplaceFacet;
  }
  override connect(signer: Signer): MarketplaceFacet__factory {
    return super.connect(signer) as MarketplaceFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceFacetInterface {
    return new utils.Interface(_abi) as MarketplaceFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketplaceFacet {
    return new Contract(address, _abi, signerOrProvider) as MarketplaceFacet;
  }
}
