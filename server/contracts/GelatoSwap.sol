// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import './Gelatoken.sol';

contract GelatoSwap{
   
   //creating a new token variable
    Gelatoken public GelaToken;
    uint public rate = 100;

    constructor(Gelatoken _gelaToken){
        GelaToken = _gelaToken;
    }

    function buyTokens() public payable {
        uint amountToSend = rate * msg.value;
        GelaToken.transfer(msg.sender, amountToSend);
    }

    function checkBalance(address account) public{
        GelaToken.balanceOf(account);
    }

    
}