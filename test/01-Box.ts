import { expect } from "chai";
import { ethers } from "hardhat";
import { Box, Box__factory } from "../typechain";


describe("test Box", function () {
    let Box: Box__factory 
    let box: Box;

    beforeEach(async () => {
        Box = await ethers.getContractFactory("Box")
        box = await Box.deploy()
        await box.deployed()
    })
    
    it('retrieve returns a value previoously stored',async () => {
        await box.store(42)
        expect((await box.retrieve()).toString()).to.equal('42')
        
    })
})