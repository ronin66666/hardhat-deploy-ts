/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC721Enumerable,
  IERC721EnumerableInterface,
} from "../../../../contracts/land/LANDRegistry.sol/IERC721Enumerable";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "tokensOf",
    outputs: [
      {
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC721Enumerable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721EnumerableInterface {
    return new utils.Interface(_abi) as IERC721EnumerableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721Enumerable {
    return new Contract(address, _abi, signerOrProvider) as IERC721Enumerable;
  }
}