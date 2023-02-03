/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IApplication,
  IApplicationInterface,
} from "../../../../contracts/land/LANDProxy.sol/IApplication";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IApplication__factory {
  static readonly abi = _abi;
  static createInterface(): IApplicationInterface {
    return new utils.Interface(_abi) as IApplicationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IApplication {
    return new Contract(address, _abi, signerOrProvider) as IApplication;
  }
}