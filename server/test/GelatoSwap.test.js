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
    gelatoSwap = await GelatoSwap.new(gelaToken.address)
    await gelaToken.transfer(gelatoSwap.address, "1000000000000000000000000")
  })

  describe("GelatoSwap properties", async () => {
    it("GelatoSwap deployment should assert true", async function () {
      await gelatoSwap.deployed;
      return assert.isTrue(true);
    });
    
    it("should own all the tokens", async () => {
      const balance = await gelaToken.balanceOf(gelatoSwap.address)
      return assert.equal(balance.toString(), "1000000000000000000000000")
    })
  })
  
  describe("transfer should go through", ()=>{
    it("should allow user to purchase tokens", async ()=>{
      await gelatoSwap.buyTokens({from: investor, value: "1000000000000000000"})
      let investorBalance = await gelatoSwap.checkBalance(investor)
      assert.equal(investorBalance.toString(), "100000000000000000000")
    })

    // it("should credit investor", async()=>{
    // })
  })

  // describe("test function", ()=>{
  //   it("should return two", async ()=>{
  //     let num = await gelatoSwap.askNumber()
  //     await assert.equal("2", num)
  //   })
  // })


});
