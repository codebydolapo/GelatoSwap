const Gelatoken = artifacts.require("Gelatoken");


contract("Gelatoken", async (accounts) => {

    let gelaToken
    before(async () => {
        gelaToken = await Gelatoken.new()
    })

    
    it("token deployment should assert true", async function () {
      await gelaToken.deployed;
      return assert.isTrue(true);
    });

})