// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "./Gelatoken.sol";

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GelatoSwap {
    //creating a new token variable
    Gelatoken public gelaToken;
    // Gelatoken public GelaToken;
    //Gelatoken public gelaToken;

    uint public rate = 100;

    event TokenPurchased(
        address account,
        address token,
        uint amount,
        uint rate
    );

    event TokenSold(
        address sender,
        address recipient,
        uint amountBought,
        uint amountSent
    );

    // constructor(Gelatoken _gelaToken){
    constructor(Gelatoken _gelaToken) {
        //GelaToken = _gelaToken;
        gelaToken = _gelaToken;
    }

    function buyTokens() public payable {
        uint256 amountToSend = msg.value * rate;
        require(
            gelaToken.balanceOf(address(this)) >= amountToSend,
            "Insufficient send balance"
        );

        emit TokenPurchased(
            address(msg.sender),
            address(gelaToken),
            amountToSend,
            rate
        );
        gelaToken.transfer(msg.sender, amountToSend);
    }

    function checkBalance(address account) public view {
        // return GelaToken.balanceOf(account);
        gelaToken.balanceOf(account);
    }

    function sellTokens(uint _amount) public{
        //transferring ether to the customer when they pay in $GET
        uint etherAmountToSend = _amount / rate;
        gelaToken.approve(msg.sender, _amount);
        gelaToken.transferFrom(
            address(msg.sender),
            payable(address(this)),
            _amount
        );
        payable(msg.sender).transfer(etherAmountToSend);
        emit TokenSold(
            address(msg.sender),
            address(this),
            uint(_amount),
            uint(etherAmountToSend)
        );
    }
}

//NOTES:
//The difference between transefer() and transferFrom()

//transfer(address, amount) takes out of the account of the "address" argument and pays the contract the specified amount

//transferFrom(address from, address to, amount) takes from "from", and pays "to" for the amount
