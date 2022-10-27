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
    gelaToken = await Gelatoken.new("Gelatoken", "GET")
    // gelatoSwap = await GelatoSwap.new(gelaToken.address)
    gelatoSwap = await GelatoSwap.new(gelaToken.address)
    await gelaToken.transfer(gelatoSwap.address, "1000000000000000000000000")
  })
  
  describe("GelatoSwap deployment", async () => {
    it("GelatoSwap deployment should assert true", async function () {
      await gelatoSwap.deployed;
      return assert.isTrue(true);
    });
  }),

  describe("GelatoSwap buy properties", async () => {

  // before(async () => {
  //   gelaToken = await Gelatoken.new("Gelatoken", "GET")
  //   // gelatoSwap = await GelatoSwap.new(gelaToken.address)
  //   gelatoSwap = await GelatoSwap.new(gelaToken.address)
  //   await gelaToken.transfer(gelatoSwap.address, "1000000000000000000000000")
  // })
    
    it("should own all the tokens", async () => {
      const balance = await gelaToken.balanceOf(gelatoSwap.address)
      return await assert.equal(balance.toString(), "1000000000000000000000000")
    })

    it("should allow user to purchase tokens", async ()=>{
      let result = await gelatoSwap.buyTokens({from: investor, value: "1000000000000000000"})
      //let investorBalance = await gelatoSwap.checkBalance(investor)
      let investorBalance = await gelaToken.balanceOf(investor)
      await assert.equal(investorBalance.toString(), "100000000000000000000")
      console.log(result.logs)
    })
  })

  describe("GelatoSwap sell properties", async () => {
    before(async ()=>{
      await gelaToken.approve(gelatoSwap.address, "100000000000000000000", {from: investor})
      let result = await gelatoSwap.sellTokens("100000000000000000000", {from: investor})
      console.log(result.logs)
    })
    it("should allow user to sell off tokens", async ()=>{
      let investorBalance = await gelaToken.balanceOf(investor)
      await assert.equal(investorBalance.toString(), "0")
      //console.log(result.logs)
    })

    it("should check to see the exchange balance", async ()=>{
      let gelatoSwapBalance = await gelaToken.balanceOf(gelatoSwap.address)
      assert.equal(gelatoSwapBalance.toString(), "1000000000000000000000000")
    })
    
  })
  
 
});


// pragma solidity >=0.4.22 <0.9.0;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract Gelatoken is IERC20, ERC20 {
//     address public deployer;
//     ERC20 public implementation;

//     constructor() ERC20("Gelatoken", "GET") {
//         deployer = msg.sender;
//         _mint(deployer, 1000000000000000000000000);
//         implementation = new ERC20
//     }

    
// }