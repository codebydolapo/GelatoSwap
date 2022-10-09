const EthSwap = artifacts.require("EthSwap");
const Gelatoken = artifacts.require("Gelatoken")

module.exports = function(deployer){
    deployer.deploy(EthSwap)
    deployer.deploy(Gelatoken)
}