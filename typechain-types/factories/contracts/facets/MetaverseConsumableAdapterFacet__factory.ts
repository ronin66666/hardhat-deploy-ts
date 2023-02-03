/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MetaverseConsumableAdapterFacet,
  MetaverseConsumableAdapterFacetInterface,
} from "../../../contracts/facets/MetaverseConsumableAdapterFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_metaverseRegistry",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_administrativeConsumer",
        type: "address",
      },
    ],
    name: "AdministrativeConsumerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_metaverseRegistry",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_adapter",
        type: "address",
      },
    ],
    name: "ConsumableAdapterUpdated",
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
        name: "_adapter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "UpdateAdapterAdministrativeConsumer",
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
        name: "_rentId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_adapter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "UpdateAdapterConsumer",
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
        name: "_rentId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "UpdateRentConsumer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_metaverseRegistry",
        type: "address",
      },
    ],
    name: "administrativeConsumer",
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
        name: "_metaverseRegistry",
        type: "address",
      },
    ],
    name: "consumableAdapter",
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
    name: "listWithConsumableAdapter",
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
        name: "_assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rentId",
        type: "uint256",
      },
    ],
    name: "rentConsumer",
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
        name: "_assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxRentStart",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "rentWithConsumer",
    outputs: [
      {
        internalType: "uint256",
        name: "rentId_",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "rentStartsNow_",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_metaverseRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_administrativeConsumer",
        type: "address",
      },
    ],
    name: "setAdministrativeConsumerFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_metaverseRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_consumableAdapter",
        type: "address",
      },
    ],
    name: "setConsumableAdapter",
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
    name: "updateAdapterAdministrativeState",
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
      {
        internalType: "uint256",
        name: "_rentId",
        type: "uint256",
      },
    ],
    name: "updateAdapterState",
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
      {
        internalType: "uint256",
        name: "_rentId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_newConsumer",
        type: "address",
      },
    ],
    name: "updateConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506130b3806100206000396000f3fe6080604052600436106100915760003560e01c8063ac5b9cff11610059578063ac5b9cff146101a9578063d7982e3e146101d7578063d97bc850146101f7578063e38f00041461024f578063f7f09fe21461026f57600080fd5b8063013dc9c6146100965780631abf5fd0146100b85780632810daaa1461011b57806360ba8ff01461013b5780639b2b845414610189575b600080fd5b3480156100a257600080fd5b506100b66100b1366004612c01565b610297565b005b3480156100c457600080fd5b506100fe6100d3366004612c34565b6001600160a01b03908116600090815260008051602061305e83398151915260205260409020541690565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561012757600080fd5b506100b6610136366004612c01565b6103bf565b34801561014757600080fd5b506100fe610156366004612c4f565b6000918252600080516020612ffe833981519152602090815260408084209284529190529020546001600160a01b031690565b34801561019557600080fd5b506100b66101a4366004612c71565b6104f9565b3480156101b557600080fd5b506101c96101c4366004612c8a565b610671565b604051908152602001610112565b3480156101e357600080fd5b506100b66101f2366004612c4f565b6106a0565b34801561020357600080fd5b506100fe610212366004612c34565b6001600160a01b0390811660009081527ff51182120ec544b7618269e1d13d22411486cf3aab4ebb054ff902f277c2619060205260409020541690565b34801561025b57600080fd5b506100b661026a366004612d08565b610823565b61028261027d366004612d3d565b6109f8565b60408051928352901515602083015201610112565b6001600160a01b0382166102f25760405162461bcd60e51b815260206004820152601a60248201527f5f6d6574617665727365206d757374206e6f742062652030783000000000000060448201526064015b60405180910390fd5b6001600160a01b0381166103535760405162461bcd60e51b815260206004820152602260248201527f5f636f6e73756d61626c6541646170746572206d757374206e6f742062652030604482015261078360f41b60648201526084016102e9565b61035b610b31565b6001600160a01b03828116600081815260008051602061305e833981519152602052604080822080546001600160a01b0319169486169485179055517f66f50453033fcc454860e6d8426874b9884e0f6672d44d23ce289d6f6436a9ef9190a35050565b6001600160a01b0382166104155760405162461bcd60e51b815260206004820152601a60248201527f5f6d6574617665727365206d757374206e6f742062652030783000000000000060448201526064016102e9565b6001600160a01b03811661047b5760405162461bcd60e51b815260206004820152602760248201527f5f61646d696e697374726174697665436f6e73756d6572206d757374206e6f746044820152660206265203078360cc1b60648201526084016102e9565b610483610b31565b6001600160a01b0382811660008181527ff51182120ec544b7618269e1d13d22411486cf3aab4ebb054ff902f277c26190602052604080822080546001600160a01b0319169486169485179055517f2f0144415896d08262dffc0f4023910a8e0426aefa80eebed94930d4d4a38dce9190a35050565b60008051602061301e83398151915261051182610ba8565b61052d5760405162461bcd60e51b81526004016102e990612da7565b600082815260018083016020908152604080842081516101408101835281548152818501546001600160a01b03908116948201949094526002820154928101929092526003810154909216606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154909261012084019160ff16908111156105d0576105d0612dd3565b60018111156105e1576105e1612dd3565b90525060008481526002808501602090815260408084206101008601518552909152909120015490915042116106595760405162461bcd60e51b815260206004820152601b60248201527f5f617373657449642068617320616e206163746976652072656e74000000000060448201526064016102e9565b61066c8382602001518360400151610be4565b505050565b6000806106858b8b8b8b8b8b8b8b8b610cc6565b9050610692818b8b610be4565b9a9950505050505050505050565b60008051602061301e8339815191526106b883610ba8565b6106d45760405162461bcd60e51b81526004016102e990612da7565b6000838152600280830160209081526040808420868552825292839020835160608101855281546001600160a01b03168152600182015492810183905292015492820192909252904210156107775760405162461bcd60e51b8152602060048201526024808201527f626c6f636b2074696d657374616d70206c657373207468616e2072656e7420736044820152631d185c9d60e21b60648201526084016102e9565b806040015142106107e15760405162461bcd60e51b815260206004820152602e60248201527f626c6f636b2074696d657374616d70206d6f7265207468616e206f722065717560448201526d185b081d1bc81c995b9d08195b9960921b60648201526084016102e9565b6000848152600080516020612ffe833981519152602090815260408083208684529091529020546001600160a01b031661081c8585836111f0565b5050505050565b6001600160a01b0381166108795760405162461bcd60e51b815260206004820152601c60248201527f5f6e6577436f6e73756d6572206d757374206e6f74206265203078300000000060448201526064016102e9565b60008051602061301e83398151915261089184610ba8565b6108ad5760405162461bcd60e51b81526004016102e990612da7565b600084815260028201602090815260408083208684529091529020546001600160a01b031633146109175760405162461bcd60e51b815260206004820152601460248201527331b0b63632b91034b9903737ba103932b73a32b960611b60448201526064016102e9565b6000848152600080516020612ffe8339815191526020908152604080832086845282529182902080546001600160a01b0319166001600160a01b03861690811790915582518681529251909287927fd6dc60936a4b1ca1af89495d165a9aec4aca95824306764cc1d35b8ae10bc1c192918290030190a36000848152600280830160209081526040808420878552825292839020835160608101855281546001600160a01b031681526001820154928101839052920154928201929092529042108015906109e85750806040015142105b1561081c5761081c8585856111f0565b6000806001600160a01b038616610a515760405162461bcd60e51b815260206004820152601960248201527f5f636f6e73756d6572206d757374206e6f74206265203078300000000000000060448201526064016102e9565b610a986040518060c001604052808b81526020018a8152602001898152602001876001600160a01b03168152602001868152602001856001600160a01b03168152506113ae565b60008b8152600080516020612ffe8339815191526020908152604080832085845282529182902080546001600160a01b0319166001600160a01b038c169081179091558251858152925194965092945091928c927fd6dc60936a4b1ca1af89495d165a9aec4aca95824306764cc1d35b8ae10bc1c1928290030190a38015610b2557610b258983886111f0565b97509795505050505050565b7faba9fab218e99d82c4cdc7f8050a7ec15e88f8ccb78565ad22c8882d1563dfd6600401546001600160a01b03163314610ba65760405162461bcd60e51b815260206004820152601660248201527526bab9ba1031329031b7b73a3930b1ba1037bbb732b960511b60448201526064016102e9565b565b60009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46f60205260409020546001600160a01b0316151590565b600060008051602061305e8339815191526001600160a01b03848116600090815260018301602090815260408083205491859052918290205491516370b5aecb60e01b8152908316600482018190526024820187905293945091169081906370b5aecb90604401600060405180830381600087803b158015610c6557600080fd5b505af1158015610c79573d6000803e3d6000fd5b50505050816001600160a01b0316816001600160a01b0316877f725369da578ba2fe7cbc0891849c2ca87ac2c44349353b02e5a8427d237fc05c60405160405180910390a4505050505050565b60006001600160a01b038916610d295760405162461bcd60e51b815260206004820152602260248201527f5f6d65746176657273655265676973747279206d757374206e6f742062652030604482015261078360f41b60648201526084016102e9565b610d338a8a611a0a565b610d7f5760405162461bcd60e51b815260206004820152601760248201527f5f7265676973747279206e6f7420737570706f7274656400000000000000000060448201526064016102e9565b86610dcc5760405162461bcd60e51b815260206004820152601860248201527f5f6d696e506572696f64206d757374206e6f742062652030000000000000000060448201526064016102e9565b85610e195760405162461bcd60e51b815260206004820152601860248201527f5f6d6178506572696f64206d757374206e6f742062652030000000000000000060448201526064016102e9565b85871115610e695760405162461bcd60e51b815260206004820152601f60248201527f5f6d696e506572696f64206d6f7265207468616e205f6d6178506572696f640060448201526064016102e9565b84861115610ec55760405162461bcd60e51b815260206004820152602360248201527f5f6d6178506572696f64206d6f7265207468616e205f6d617846757475726554604482015262696d6560e81b60648201526084016102e9565b610ece84611a39565b610f1a5760405162461bcd60e51b815260206004820152601a60248201527f7061796d656e742074797065206e6f7420737570706f7274656400000000000060448201526064016102e9565b6001600160a01b03821615610fd1576001600160a01b03821660009081527f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc6602090815260409182902082518084019093525462ffffff80821680855263010000009092041691830191909152610fcf5760405162461bcd60e51b815260206004820152601960248201527817dc9959995c9c995c881b9bdd081dda1a5d195b1a5cdd1959603a1b60448201526064016102e9565b505b6000610fdc33611a6b565b9050600060008051602061301e83398151915290506040518061014001604052808d81526020018c6001600160a01b031681526020018b8152602001876001600160a01b031681526020018a8152602001898152602001888152602001868152602001600081526020016000600181111561105957611059612dd3565b9052600083815260018381016020908152604092839020845181559084015181830180546001600160a01b03199081166001600160a01b039384161790915593850151600283015560608501516003830180549095169116179092556080830151600483015560a0830151600583015560c0830151600683015560e0830151600783015561010083015160088301556101208301516009830180549192909160ff191690838181111561110e5761110e612dd3565b02179055509050508361113e7f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc290565b60008481526001919091016020526040902080546001600160a01b0319166001600160a01b039290921691909117905561117a8b33308d611ac2565b5060408051828152602081018d9052908101899052606081018890526080810187905260a081018590526001600160a01b03808716918b918d16907fa6065b2a055a9c120a93fb532bad2b63012bd21e0631f20c99f5a1c25567580c9060c00160405180910390a49a9950505050505050505050565b60008381527f0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb38205560209081526040808320815161014081018352815481526001828101546001600160a01b03908116958301959095526002830154938201939093526003820154909316606084015260048101546080840152600581015460a0840152600681015460c0840152600781015460e084015260088101546101008401526009810154909161012084019160ff16908111156112b1576112b1612dd3565b60018111156112c2576112c2612dd3565b9052509050600060008051602061305e8339815191526020838101516001600160a01b03908116600090815292909152604091829020548285015192516370b5aecb60e01b81528683166004820152602481019390935216915081906370b5aecb90604401600060405180830381600087803b15801561134157600080fd5b505af1158015611355573d6000803e3d6000fd5b50505050826001600160a01b0316816001600160a01b0316867f9d8545434dc70b43990836de802a7f300c2dad16baa5b7449a5ec1a884b070698760405161139f91815260200190565b60405180910390a45050505050565b8051600090819060008051602061301e833981519152906113ce90610ba8565b6113ea5760405162461bcd60e51b81526004016102e990612da7565b8351600090815260018083016020908152604080842081516101408101835281548152818501546001600160a01b03908116948201949094526002820154928101929092526003810154909216606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154909261012084019160ff169081111561148f5761148f612dd3565b60018111156114a0576114a0612dd3565b9052509050600081610120015160018111156114be576114be612dd3565b146115015760405162461bcd60e51b815260206004820152601360248201527217d85cdcd95d1259081b9bdd081b1a5cdd1959606a1b60448201526064016102e9565b8060800151856020015110156115595760405162461bcd60e51b815260206004820152601b60248201527f5f706572696f64206c657373207468616e206d696e506572696f64000000000060448201526064016102e9565b8060a00151856020015111156115b15760405162461bcd60e51b815260206004820152601b60248201527f5f706572696f64206d6f7265207468616e206d6178506572696f64000000000060448201526064016102e9565b80606001516001600160a01b031685606001516001600160a01b0316146116125760405162461bcd60e51b815260206004820152601560248201527434b73b30b634b2102fb830bcb6b2b73a2a37b5b2b760591b60448201526064016102e9565b60a08501516001600160a01b0316156116d15760a08501516001600160a01b031660009081527f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc6602090815260409182902082518084019093525462ffffff808216808552630100000090920416918301919091526116cf5760405162461bcd60e51b815260206004820152601960248201527817dc9959995c9c995c881b9bdd081dda1a5d195b1a5cdd1959603a1b60448201526064016102e9565b505b845160009081526002808401602090815260408084206101008601518552909152909120015460019042908181111561170c57809150600092505b87604001518211156117605760405162461bcd60e51b815260206004820152601f60248201527f72656e742073746172742065786365656473206d617852656e7453746172740060448201526064016102e9565b60008860200151836117729190612dff565b9050808560c00151426117859190612dff565b10156117df5760405162461bcd60e51b8152602060048201526024808201527f72656e74206d6f7265207468616e2063757272656e74206d617846757475726560448201526354696d6560e01b60648201526084016102e9565b60008560e001518a602001516117f59190612e17565b905060006118098b60000151338786611b32565b9050600061186d6040518060c001604052808e6000015181526020018481526020018a602001516001600160a01b031681526020018a606001516001600160a01b031681526020018581526020018e60a001516001600160a01b0316815250611c03565b805160808e0151919250146118b65760405162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a590817d85b5bdd5b9d608a1b60448201526064016102e9565b60608801516001600160a01b03166001141561191557805134146119105760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964206d73672e76616c756560781b60448201526064016102e9565b611963565b34156119635760405162461bcd60e51b815260206004820152601760248201527f696e76616c696420746f6b656e206d73672e76616c756500000000000000000060448201526064016102e9565b60608801516001600160a01b031660011461198c5761198c8860600151333084600001516121dd565b6060808901518d5160208085015160408087015181518981529384018d90529083018a90529482015260808101939093526001600160a01b03909116913391907f2dca64968c847cb004b20d4047b1e1a56b2fa19e565d750542682c432f76656f9060a00160405180910390a4509a94995093975050505050505050565b600082815260008051602061301e83398151915260205260408120611a3290600101836121f8565b9392505050565b6000611a657f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca1e836121f8565b92915050565b7fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46e80546001810190915560009060008051602061303e83398151915290611a3284826040518060200160405280600081525061221a565b604051632142170760e11b81526001600160a01b0384811660048301528381166024830152604482018390528516906342842e0e90606401600060405180830381600087803b158015611b1457600080fd5b505af1158015611b28573d6000803e3d6000fd5b5050505050505050565b60008481527f0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb382055602052604081206008015460008051602061301e833981519152908290611b80906001612dff565b600088815260018481016020908152604080842060080185905580516060810182526001600160a01b038c811682528184018c81528284018c81528f885260029a8b01865284882089895290955292909520905181546001600160a01b03191695169490941784555191830191909155519301929092555090505b949350505050565b611c2760405180606001604052806000815260200160008152602001600081525090565b60608201516001600160a01b031660009081527f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca20602052604090205460808301517f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca1e917f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc291620186a091611cba91612e17565b611cc49190612e36565b604084018190526080850151611cda9190612e58565b602084810191909152608085015184526040808601516001600160a01b0390811660009081526003850184528290208251808401909352549081168252600160a01b900462ffffff169181018290529015611e12576000620186a0826020015162ffffff168660400151611d4e9190612e17565b611d589190612e36565b82516001600160a01b039081166000908152600286016020908152604080832060608c0151909416835292905290812080549293508392909190611d9d908490612dff565b925050819055508085604001818151611db69190612e58565b9052506060860151825187516020808a0151604080519182529181018690526001600160a01b0394851694909316927fe9b2bc9ea14daac8677cbb1519c8d18a2ebe9571842b1013c9775d0cbbbeb29b910160405180910390a4505b506040830151801561215757845160009081526001830160205260409020546001600160a01b03168015611fc9576001600160a01b038116600090815260048401602090815260409182902082518084019093525462ffffff8082168085526301000000909204169183019190915215611fc7578051600090620186a090611e9f9062ffffff1686612e17565b611ea99190612e36565b90508087604001818151611ebd9190612e58565b9052506020820151600090620186a090611edc9062ffffff1684612e17565b611ee69190612e36565b90508088602001818151611efa9190612dff565b9052506000611f098284612e58565b905080876002016000876001600160a01b03166001600160a01b0316815260200190815260200160002060008c606001516001600160a01b03166001600160a01b031681526020019081526020016000206000828254611f699190612dff565b909155505060608a01518a516020808d0151604080519182529181018590526001600160a01b0393841693891692917fe9b2bc9ea14daac8677cbb1519c8d18a2ebe9571842b1013c9775d0cbbbeb29b910160405180910390a45050505b505b5060a08501516001600160a01b0316156121575760a08501516001600160a01b03166000908152600483016020908152604080832081518083019092525462ffffff808216808452630100000090920416928201929092529190620186a0906120329085612e17565b61203c9190612e36565b905080866040018181516120509190612e58565b9052506020820151600090620186a09061206f9062ffffff1684612e17565b6120799190612e36565b9050808760000181815161208d9190612e58565b905250600061209c8284612e58565b60a08a01516001600160a01b039081166000908152600289016020908152604080832060608f01519094168352929052908120805492935083929091906120e4908490612dff565b9250508190555088606001516001600160a01b03168960a001516001600160a01b03168a600001517fe9b2bc9ea14daac8677cbb1519c8d18a2ebe9571842b1013c9775d0cbbbeb29b8c602001518560405161214a929190918252602082015260400190565b60405180910390a4505050505b60208085015186516000908152600386018352604080822060608a01516001600160a01b03168352909352918220805491929091612196908490612dff565b909155505060408085015160608701516001600160a01b03166000908152600486016020529182208054919290916121cf908490612dff565b909155509395945050505050565b6121f26001600160a01b03851684848461224d565b50505050565b6001600160a01b03811660009081526001830160205260408120541515611a32565b61222483836122a7565b6122316000848484612418565b61066c5760405162461bcd60e51b81526004016102e990612e6f565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526121f2908590612513565b6001600160a01b0382166122fd5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016102e9565b61230681610ba8565b156123535760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016102e9565b61235f600083836125e5565b6001600160a01b03821660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc47060205260408120805460008051602061303e83398151915292600192916123b7908490612dff565b9091555050600082815260058201602052604080822080546001600160a01b0319166001600160a01b03871690811790915590518492907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4505050565b60006001600160a01b0384163b1561250b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061245c903390899088908890600401612f19565b6020604051808303816000875af1925050508015612497575060408051601f3d908101601f1916820190925261249491810190612f56565b60015b6124f1573d8080156124c5576040519150601f19603f3d011682016040523d82523d6000602084013e6124ca565b606091505b5080516124e95760405162461bcd60e51b81526004016102e990612e6f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611bfb565b506001611bfb565b6000612568826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166126ec9092919063ffffffff16565b80519091501561066c57808060200190518101906125869190612f80565b61066c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102e9565b6001600160a01b03831661267e57612679817fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc476805460008381527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc47760205260408120829055600182018355919091527f78275a15b232bc86904929c87ea66a63ec326283a91ad09a61c5f56a6412799a0155565b6126a1565b816001600160a01b0316836001600160a01b0316146126a1576126a183826126fb565b6001600160a01b0382166126bd576126b8816127d0565b6126e0565b826001600160a01b0316826001600160a01b0316146126e0576126e082826128b9565b61066c8360008361293c565b6060611bfb84846000856129c9565b6000600161270884612aa4565b6127129190612e58565b60008381527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc475602052604090205490915060008051602061303e83398151915290808314612798576001600160a01b0385166000908152600a8301602090815260408083208684528252808320548484528184208190558352600b850190915290208190555b506000928352600b8101602090815260408085208590556001600160a01b039095168452600a90910181528383209183525290812055565b7fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc4765460008051602061303e8339815191529060009061281190600190612e58565b6000848152600d84016020526040812054600c8501805493945090928490811061283d5761283d612fa2565b906000526020600020015490508084600c01838154811061286057612860612fa2565b6000918252602080832090910192909255828152600d86019091526040808220849055868252812055600c840180548061289c5761289c612fb8565b600190038181906000526020600020016000905590555050505050565b60006128c483612aa4565b6001600160a01b039390931660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc4746020908152604080832086845282528083208590559382527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc4759052919091209190915550565b60008181527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc473602052604080822080546001600160a01b0319166001600160a01b03868116918217909255915160008051602061303e833981519152938593928816917f42ef856c2602f37ce625d252830bed486c5c8e9a4de8aa36cc3d15f304eb662b9190a450505050565b606082471015612a2a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102e9565b600080866001600160a01b03168587604051612a469190612fce565b60006040518083038185875af1925050503d8060008114612a83576040519150601f19603f3d011682016040523d82523d6000602084013e612a88565b606091505b5091509150612a9987838387612b4a565b979650505050505050565b60006001600160a01b038216612b0f5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016102e9565b506001600160a01b031660009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc470602052604090205490565b60608315612bb6578251612baf576001600160a01b0385163b612baf5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102e9565b5081611bfb565b611bfb8383815115612bcb5781518083602001fd5b8060405162461bcd60e51b81526004016102e99190612fea565b80356001600160a01b0381168114612bfc57600080fd5b919050565b60008060408385031215612c1457600080fd5b612c1d83612be5565b9150612c2b60208401612be5565b90509250929050565b600060208284031215612c4657600080fd5b611a3282612be5565b60008060408385031215612c6257600080fd5b50508035926020909101359150565b600060208284031215612c8357600080fd5b5035919050565b60008060008060008060008060006101208a8c031215612ca957600080fd5b89359850612cb960208b01612be5565b975060408a0135965060608a0135955060808a0135945060a08a01359350612ce360c08b01612be5565b925060e08a01359150612cf96101008b01612be5565b90509295985092959850929598565b600080600060608486031215612d1d57600080fd5b8335925060208401359150612d3460408501612be5565b90509250925092565b600080600080600080600060e0888a031215612d5857600080fd5b873596506020880135955060408801359450612d7660608901612be5565b9350612d8460808901612be5565b925060a08801359150612d9960c08901612be5565b905092959891949750929550565b60208082526012908201527117d85cdcd95d1259081b9bdd08199bdd5b9960721b604082015260600190565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612e1257612e12612de9565b500190565b6000816000190483118215151615612e3157612e31612de9565b500290565b600082612e5357634e487b7160e01b600052601260045260246000fd5b500490565b600082821015612e6a57612e6a612de9565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60005b83811015612edc578181015183820152602001612ec4565b838111156121f25750506000910152565b60008151808452612f05816020860160208601612ec1565b601f01601f19169290920160200192915050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612f4c90830184612eed565b9695505050505050565b600060208284031215612f6857600080fd5b81516001600160e01b031981168114611a3257600080fd5b600060208284031215612f9257600080fd5b81518015158114611a3257600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b60008251612fe0818460208701612ec1565b9190910192915050565b602081526000611a326020830184612eed56fef51182120ec544b7618269e1d13d22411486cf3aab4ebb054ff902f277c261910a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb382054ead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46af51182120ec544b7618269e1d13d22411486cf3aab4ebb054ff902f277c2618fa264697066735822122054b3bfc8b20be3bd7fe138f0e40ef6af6e7c7f14549a5adad4796f7e4b8df26c64736f6c634300080a0033";

type MetaverseConsumableAdapterFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaverseConsumableAdapterFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaverseConsumableAdapterFacet__factory extends ContractFactory {
  constructor(...args: MetaverseConsumableAdapterFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MetaverseConsumableAdapterFacet> {
    return super.deploy(
      overrides || {}
    ) as Promise<MetaverseConsumableAdapterFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MetaverseConsumableAdapterFacet {
    return super.attach(address) as MetaverseConsumableAdapterFacet;
  }
  override connect(signer: Signer): MetaverseConsumableAdapterFacet__factory {
    return super.connect(signer) as MetaverseConsumableAdapterFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaverseConsumableAdapterFacetInterface {
    return new utils.Interface(
      _abi
    ) as MetaverseConsumableAdapterFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaverseConsumableAdapterFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MetaverseConsumableAdapterFacet;
  }
}
