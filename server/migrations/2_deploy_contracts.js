const EthSwap = artifacts.require("EthSwap");
const Gelatoken = artifacts.require("Gelatoken")

module.exports = async function(deployer){
    await deployer.deploy(Gelatoken)
    //fetching the token
    const gelaToken = await Gelatoken.deployed()

    await deployer.deploy(EthSwap)
    //fecthing the exchange contract
    const ethSwap = await EthSwap.deployed()

    //transfer all token from deployer of gelatoken to EthSwap
    await gelaToken.transfer(ethSwap.address, "1000000000")
}