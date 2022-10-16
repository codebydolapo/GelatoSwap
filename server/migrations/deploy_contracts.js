const GelatoSwap = artifacts.require("GelatoSwap");
const Gelatoken = artifacts.require("Gelatoken")

module.exports = async function(deployer){
    await deployer.deploy(Gelatoken)
    //fetching the token
    const gelaToken = await Gelatoken.deployed()

    //deploying the exchange contract.
    await deployer.deploy(GelatoSwap, gelaToken.address /*constructor argument*/)
    //fetching the deployed exchange contract
    const gelatoSwap = await GelatoSwap.deployed()
    //transfer all tokens from deployer of gelatoken to EthSwap
    await gelaToken.transfer(gelatoSwap.address, "1000000000000000000000000")
}