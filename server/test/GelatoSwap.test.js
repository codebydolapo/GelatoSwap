const GelatoSwap = artifacts.require("GelatoSwap");
const Gelatoken = artifacts.require("Gelatoken")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("GelatoSwap", function ([deployer, investor]) {

  let gelatoSwap, gelaToken
  before(async () => {
    gelaToken = await Gelatoken.new()
    // gelatoSwap = await GelatoSwap.new(gelaToken.address)
    gelatoSwap = await GelatoSwap.new()
    await gelaToken.transfer(gelatoSwap.address, "1000000000000000000000000")
  })

  describe("GelatoSwap deployment", async () => {
    it("GelatoSwap deployment should assert true", async function () {
      await gelatoSwap.deployed;
      return assert.isTrue(true);
    });
  }),

  describe("GelatoSwap buy properties", async () => {
    
    it("should own all the tokens", async () => {
      const balance = await gelaToken.balanceOf(gelatoSwap.address)
      return assert.equal(balance.toString(), "1000000000000000000000000")
    })

    it("should allow user to purchase tokens", async ()=>{
      let result = await gelatoSwap.buyTokens({from: investor, value: "1000000000000000000"})
      // let investorBalance = await gelatoSwap.checkBalance(investor)
      let investorBalance = await gelaToken.balanceOf(investor)
      assert.equal(investorBalance.toString(), "100000000000000000000")
      console.log(result.logs)
    })
  })

  describe("GelatoSwap sell properties", async () => {
    it("should allow user to sell off tokens", async ()=>{
      await gelaToken.approve(gelatoSwap.address, "1000000000000000000", {from: investor})
      let result = await gelatoSwap.sellTokens("1000000000000000000", {from: investor})
      // let investorBalance = await gelatoSwap.checkBalance(investor)
      let investorBalance = await gelaToken.balanceOf(investor)
      assert.equal(investorBalance.toString(), "0")
      console.log(result.logs)
    })
    
  })
  
 
});
