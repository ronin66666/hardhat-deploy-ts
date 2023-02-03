/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RentFacet,
  RentFacetInterface,
} from "../../../contracts/facets/RentFacet";

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
        indexed: false,
        internalType: "uint256",
        name: "_rentId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_referrer",
        type: "address",
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
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "AccrueReferralFee",
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
        name: "_renter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_end",
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
        name: "_rent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_protocolFee",
        type: "uint256",
      },
    ],
    name: "Rent",
    type: "event",
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
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "calculateRentFee",
    outputs: [
      {
        internalType: "address",
        name: "paymentToken_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
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
    name: "rent",
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
    name: "rentAt",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "renter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
        ],
        internalType: "struct LibMarketplace.Rent",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061181f806100206000396000f3fe6080604052600436106100345760003560e01c80632ad503af146100395780635f70897014610066578063caca9e25146100a5575b600080fd5b61004c610047366004611601565b6100f0565b604080519283529015156020830152015b60405180910390f35b34801561007257600080fd5b50610086610081366004611659565b610149565b604080516001600160a01b03909316835260208301919091520161005d565b3480156100b157600080fd5b506100c56100c036600461168e565b6103d5565b6040805182516001600160a01b0316815260208084015190820152918101519082015260600161005d565b60008061013a6040518060c001604052808a8152602001898152602001888152602001876001600160a01b03168152602001868152602001856001600160a01b0316815250610413565b90999098509650505050505050565b60008061015585610aa6565b61019b5760405162461bcd60e51b815260206004820152601260248201527117d85cdcd95d1259081b9bdd08199bdd5b9960721b60448201526064015b60405180910390fd5b60006101a686610ae2565b905060008160e00151866101ba91906116c6565b90506001600160a01b0385166101d957606090910151925090506103cd565b6001600160a01b03851660009081527f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc6602090815260409182902082518084019093525462ffffff8082168085526301000000909204169183019190915261027f5760405162461bcd60e51b815260206004820152601960248201527817dc9959995c9c995c881b9bdd081dda1a5d195b1a5cdd1959603a1b6044820152606401610192565b60608301516001600160a01b031660009081527f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca206020526040812054620186a0906102ca90856116c6565b6102d491906116e5565b6020858101516001600160a01b0390811660009081527f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc5835260408082208151808301909252549283168152600160a01b90920462ffffff169282018390529293509190620186a09061034790856116c6565b61035191906116e5565b9050600061035f8285611707565b90506000620186a0866000015162ffffff168361037c91906116c6565b61038691906116e5565b90506000620186a0876020015162ffffff16836103a391906116c6565b6103ad91906116e5565b60608a01519091506103bf828a611707565b9a509a505050505050505050505b935093915050565b610402604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b61040c8383610bca565b9392505050565b805160009081907f0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb3820549061044590610aa6565b6104865760405162461bcd60e51b815260206004820152601260248201527117d85cdcd95d1259081b9bdd08199bdd5b9960721b6044820152606401610192565b8351600090815260018083016020908152604080842081516101408101835281548152818501546001600160a01b03908116948201949094526002820154928101929092526003810154909216606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154909261012084019160ff169081111561052b5761052b61171e565b600181111561053c5761053c61171e565b90525090506000816101200151600181111561055a5761055a61171e565b1461059d5760405162461bcd60e51b815260206004820152601360248201527217d85cdcd95d1259081b9bdd081b1a5cdd1959606a1b6044820152606401610192565b8060800151856020015110156105f55760405162461bcd60e51b815260206004820152601b60248201527f5f706572696f64206c657373207468616e206d696e506572696f6400000000006044820152606401610192565b8060a001518560200151111561064d5760405162461bcd60e51b815260206004820152601b60248201527f5f706572696f64206d6f7265207468616e206d6178506572696f6400000000006044820152606401610192565b80606001516001600160a01b031685606001516001600160a01b0316146106ae5760405162461bcd60e51b815260206004820152601560248201527434b73b30b634b2102fb830bcb6b2b73a2a37b5b2b760591b6044820152606401610192565b60a08501516001600160a01b03161561076d5760a08501516001600160a01b031660009081527f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc6602090815260409182902082518084019093525462ffffff8082168085526301000000909204169183019190915261076b5760405162461bcd60e51b815260206004820152601960248201527817dc9959995c9c995c881b9bdd081dda1a5d195b1a5cdd1959603a1b6044820152606401610192565b505b84516000908152600280840160209081526040808420610100860151855290915290912001546001904290818111156107a857809150600092505b87604001518211156107fc5760405162461bcd60e51b815260206004820152601f60248201527f72656e742073746172742065786365656473206d617852656e745374617274006044820152606401610192565b600088602001518361080e9190611734565b9050808560c00151426108219190611734565b101561087b5760405162461bcd60e51b8152602060048201526024808201527f72656e74206d6f7265207468616e2063757272656e74206d617846757475726560448201526354696d6560e01b6064820152608401610192565b60008560e001518a6020015161089191906116c6565b905060006108a58b60000151338786610c5e565b905060006109096040518060c001604052808e6000015181526020018481526020018a602001516001600160a01b031681526020018a606001516001600160a01b031681526020018581526020018e60a001516001600160a01b0316815250610d41565b805160808e0151919250146109525760405162461bcd60e51b815260206004820152600f60248201526e1a5b9d985b1a590817d85b5bdd5b9d608a1b6044820152606401610192565b60608801516001600160a01b0316600114156109b157805134146109ac5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964206d73672e76616c756560781b6044820152606401610192565b6109ff565b34156109ff5760405162461bcd60e51b815260206004820152601760248201527f696e76616c696420746f6b656e206d73672e76616c75650000000000000000006044820152606401610192565b60608801516001600160a01b0316600114610a2857610a2888606001513330846000015161131b565b6060808901518d5160208085015160408087015181518981529384018d90529083018a90529482015260808101939093526001600160a01b03909116913391907f2dca64968c847cb004b20d4047b1e1a56b2fa19e565d750542682c432f76656f9060a00160405180910390a4509a94995093975050505050505050565b60009081527fead7485caf5f3be13698f775d295954588c5e11a5dad4f8c6640595d9a0cc46f60205260409020546001600160a01b0316151590565b610aea611570565b60008281527f0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb3820556020908152604091829020825161014081018452815481526001828101546001600160a01b03908116948301949094526002830154948201949094526003820154909216606083015260048101546080830152600581015460a0830152600681015460c0830152600781015460e0830152600881015461010083015260098101549192909161012084019160ff90911690811115610bb057610bb061171e565b6001811115610bc157610bc161171e565b90525092915050565b610bf7604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b5060009182527f0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb3820566020908152604080842092845291815291819020815160608101835281546001600160a01b03168152600182015493810193909352600201549082015290565b60008481527f0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb38205560205260408120600801547f0a9d4881d6513ea484cc5630de44314cca750c9a2c1407addd3eebd4cb382054908290610cbe906001611734565b600088815260018481016020908152604080842060080185905580516060810182526001600160a01b038c811682528184018c81528284018c81528f885260029a8b01865284882089895290955292909520905181546001600160a01b03191695169490941784555191830191909155519301929092555090505b949350505050565b610d6560405180606001604052806000815260200160008152602001600081525090565b60608201516001600160a01b031660009081527f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca20602052604090205460808301517f3edf7e48c941a251579fc686bc2f4eca23df9bf60f08e5fe8ad25af5660cca1e917f20f768e0a584c1b5bdbcf9e35ca67412652e2e1e36038625a8885f93278f2cc291620186a091610df8916116c6565b610e0291906116e5565b604084018190526080850151610e189190611707565b602084810191909152608085015184526040808601516001600160a01b0390811660009081526003850184528290208251808401909352549081168252600160a01b900462ffffff169181018290529015610f50576000620186a0826020015162ffffff168660400151610e8c91906116c6565b610e9691906116e5565b82516001600160a01b039081166000908152600286016020908152604080832060608c0151909416835292905290812080549293508392909190610edb908490611734565b925050819055508085604001818151610ef49190611707565b9052506060860151825187516020808a0151604080519182529181018690526001600160a01b0394851694909316927fe9b2bc9ea14daac8677cbb1519c8d18a2ebe9571842b1013c9775d0cbbbeb29b910160405180910390a4505b506040830151801561129557845160009081526001830160205260409020546001600160a01b03168015611107576001600160a01b038116600090815260048401602090815260409182902082518084019093525462ffffff8082168085526301000000909204169183019190915215611105578051600090620186a090610fdd9062ffffff16866116c6565b610fe791906116e5565b90508087604001818151610ffb9190611707565b9052506020820151600090620186a09061101a9062ffffff16846116c6565b61102491906116e5565b905080886020018181516110389190611734565b90525060006110478284611707565b905080876002016000876001600160a01b03166001600160a01b0316815260200190815260200160002060008c606001516001600160a01b03166001600160a01b0316815260200190815260200160002060008282546110a79190611734565b909155505060608a01518a516020808d0151604080519182529181018590526001600160a01b0393841693891692917fe9b2bc9ea14daac8677cbb1519c8d18a2ebe9571842b1013c9775d0cbbbeb29b910160405180910390a45050505b505b5060a08501516001600160a01b0316156112955760a08501516001600160a01b03166000908152600483016020908152604080832081518083019092525462ffffff808216808452630100000090920416928201929092529190620186a09061117090856116c6565b61117a91906116e5565b9050808660400181815161118e9190611707565b9052506020820151600090620186a0906111ad9062ffffff16846116c6565b6111b791906116e5565b905080876000018181516111cb9190611707565b90525060006111da8284611707565b60a08a01516001600160a01b039081166000908152600289016020908152604080832060608f0151909416835292905290812080549293508392909190611222908490611734565b9250508190555088606001516001600160a01b03168960a001516001600160a01b03168a600001517fe9b2bc9ea14daac8677cbb1519c8d18a2ebe9571842b1013c9775d0cbbbeb29b8c6020015185604051611288929190918252602082015260400190565b60405180910390a4505050505b60208085015186516000908152600386018352604080822060608a01516001600160a01b031683529093529182208054919290916112d4908490611734565b909155505060408085015160608701516001600160a01b031660009081526004860160205291822080549192909161130d908490611734565b909155509395945050505050565b6113306001600160a01b038516848484611336565b50505050565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180516001600160e01b03166323b872dd60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152611330928792916000916113ce918516908490611450565b80519091501561144b57808060200190518101906113ec919061174c565b61144b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610192565b505050565b6060610d39848460008585600080866001600160a01b03168587604051611477919061179a565b60006040518083038185875af1925050503d80600081146114b4576040519150601f19603f3d011682016040523d82523d6000602084013e6114b9565b606091505b50915091506114ca878383876114d5565b979650505050505050565b6060831561154157825161153a576001600160a01b0385163b61153a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610192565b5081610d39565b610d3983838151156115565781518083602001fd5b8060405162461bcd60e51b815260040161019291906117b6565b6040518061014001604052806000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600060018111156115e0576115e061171e565b905290565b80356001600160a01b03811681146115fc57600080fd5b919050565b60008060008060008060c0878903121561161a57600080fd5b863595506020870135945060408701359350611638606088016115e5565b92506080870135915061164d60a088016115e5565b90509295509295509295565b60008060006060848603121561166e57600080fd5b8335925060208401359150611685604085016115e5565b90509250925092565b600080604083850312156116a157600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156116e0576116e06116b0565b500290565b60008261170257634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611719576117196116b0565b500390565b634e487b7160e01b600052602160045260246000fd5b60008219821115611747576117476116b0565b500190565b60006020828403121561175e57600080fd5b8151801515811461040c57600080fd5b60005b83811015611789578181015183820152602001611771565b838111156113305750506000910152565b600082516117ac81846020870161176e565b9190910192915050565b60208152600082518060208401526117d581604085016020870161176e565b601f01601f1916919091016040019291505056fea26469706673582212204decfa3ec4b866263227f243bacaea426b845eb30bd141a2566f70d0962551c764736f6c634300080a0033";

type RentFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RentFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RentFacet__factory extends ContractFactory {
  constructor(...args: RentFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RentFacet> {
    return super.deploy(overrides || {}) as Promise<RentFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RentFacet {
    return super.attach(address) as RentFacet;
  }
  override connect(signer: Signer): RentFacet__factory {
    return super.connect(signer) as RentFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RentFacetInterface {
    return new utils.Interface(_abi) as RentFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RentFacet {
    return new Contract(address, _abi, signerOrProvider) as RentFacet;
  }
}
