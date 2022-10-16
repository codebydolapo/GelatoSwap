const GelatoSwap = artifacts.require("GelatoSwap");
const Gelatoken = artifacts.require("Gelatoken")

module.exports = async function(deployer){
    await deployer.deploy(Gelatoken)
    //fetching the token
    const gelaToken = await Gelatoken.deployed()

    await deployer.deploy(GelatoSwap)
    //fecthing the exchange contract
    const gelatoSwap = await GelatoSwap.deployed()

    //transfer all tokens from deployer of gelatoken to EthSwap
    await gelaToken.transfer(gelatoSwap.address, "1000000000000000000000000")
}