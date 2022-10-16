const EthSwap = artifacts.require("EthSwap");
const Gelatoken = artifacts.require("Gelatoken")

module.exports = async function(deployer){
    deployer.deploy(Gelatoken)
    //fetching the token
    const gelaToken = await Gelatoken.deployed()

    deployer.deploy(EthSwap)
    //fecthing the exchange contract
    const ethSwap = EthSwap.deployed()

    //transfer all token from deployer of gelatoken to EthSwap
    gelaToken.transfer(ethSwap.address, "1000000000")
}