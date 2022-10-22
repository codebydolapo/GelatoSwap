// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "./Gelatoken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GelatoSwap {
    //creating a new token variable
    // Gelatoken public GelaToken;
    ERC20 public gelaToken;

    uint public rate = 100;

    event TokenPurchased(
        address account,
        address token,
        uint amount,
        uint rate
    );

    // constructor(Gelatoken _gelaToken){
    constructor() {
        //GelaToken = _gelaToken;
        gelaToken = new Gelatoken();
    }

    function buyTokens() public payable {
        uint256 amountToSend = msg.value * rate;
        require(
            gelaToken.balanceOf(address(this)) >= amountToSend,
            "Insufficient send balance"
        );
        gelaToken.transfer(msg.sender, amountToSend);

        emit TokenPurchased(
            address(msg.sender),
            address(gelaToken),
            amountToSend,
            rate
        );
    }

    function checkBalance(address account) public view {
        // return GelaToken.balanceOf(account);
        gelaToken.balanceOf(account);
    }

    function sellTokens(uint _amount) public payable returns (bool) {
        //transferring ether to the customer when they pay in $GET
        uint etherAmountToSend = _amount / rate;
        payable(msg.sender).transfer(etherAmountToSend);

        //recieving $GET from the customer
        // return GelaToken.transferFrom(payable(address(msg.sender)), payable(address(this)), _amount);
        return
            gelaToken.transferFrom(
                payable(address(msg.sender)),
                payable(address(this)),
                _amount
            );
    }
}

//NOTES:
//The difference between transefer() and transferFrom()

//transfer(address, amount) takes out of the account of the "address" argument and pays the contract the specified amount

//transferFrom(address from, address to, amount) takes from "from", and pays "to" for the amount
