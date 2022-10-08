
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert } from "chai";
import { BigNumberish, TypedDataDomain } from "ethers";
import { defaultAbiCoder, joinSignature, keccak256, recoverAddress, toUtf8Bytes } from "ethers/lib/utils";
import { deployments, ethers } from "hardhat";
import { type } from "os";
import { ERC1271Caller, Exchange } from "../typechain-types";
import { domainSeparatorV4, signatureLikeToBytesString, signatureWithTypeDataHash, signTypedData, signWithPrivateKey, toTypedDataHash, TYPE_HASH, verifySignature } from "../utils/eip712";
import { erc20PermitSignWithSinger } from "../utils/erc20Permit";

describe("eip1271 contract signature", async () => {

    let erc1271Caller: ERC1271Caller;
    let exchange: Exchange;
    let signers: SignerWithAddress[]

    const types =  {
        order: [
          {name:'owner', type:'address'},
          {name:'tokenId', type:'uint256'},
        ]
    }

    const getSignTypeDataHash = async (owner: string, tokenId: BigNumberish) : Promise<string> => {

        const signer = await ethers.getSigner(owner)

        const domainSeparator: TypedDataDomain = {
            name: "exchange",
            version: "1",
            chainId: await signer.getChainId(),
            verifyingContract: exchange.address
        }

        const signValues = {
            owner: owner,
            tokenId: tokenId,
        }

        const signTypeDataHash = await signTypedData(signers[0], domainSeparator, types, signValues)
        return signTypeDataHash
    }

    const getTypeDataHash = async (owner: string, tokenId: BigNumberish): Promise<string> => {
        const signer = await ethers.getSigner(owner)
        const domainSeparator = domainSeparatorV4(TYPE_HASH, "exchange", "1", exchange.address, await signer.getChainId())
        const type_hash = keccak256(toUtf8Bytes("order(address owner, uint256 tokenId)"))

        const structHash = keccak256(defaultAbiCoder.encode(
            ['bytes32', 'address', 'uint256'],
            [type_hash, owner, tokenId]
        ))

        const typeDataHash = toTypedDataHash(domainSeparator, structHash);
         
        return typeDataHash;
    }

    beforeEach(async () => {
        await deployments.fixture(["erc1271Caller", "exchange"])
        erc1271Caller = await ethers.getContract<ERC1271Caller>("ERC1271Caller")
        exchange = await ethers.getContract<Exchange>("Exchange")

        signers = await ethers.getSigners()
    })

    //eip1271   合约签名实际上还是用户进行签名，然后在发起签名的合约中进行验证
    it("verify ERC1271",async () => {
        const owenr = signers[0].address
        console.log("owner = ", owenr);
        
        assert.equal(owenr, await erc1271Caller.owner(), "contract owner error")
        
        const typedatahash = await getTypeDataHash(owenr, 1)
        console.log("typedataHash = ", typedatahash);

        const sigTypeData = await getSignTypeDataHash(owenr, 1)
        console.log("sigTypeData = ", sigTypeData);

        // const verifyHash = keccak256(sigTypeData)
        // console.log(verifyHash);
        // 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
        
        const signature =  signatureWithTypeDataHash(sigTypeData) //?
        
        const signatureLike = signWithPrivateKey("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", typedatahash)
        console.log(signatureLike);
        
        // console.log(signatureStr);
        console.log("验证签名者：", recoverAddress(typedatahash, signatureLike));
        const real = joinSignature(signatureLike)
        console.log("real = ", real);
        

        await erc1271Caller.callExchange(typedatahash, joinSignature(signatureLike))



        assert.isTrue(await exchange.success(), "signature invalidate");

        

    })
    

})