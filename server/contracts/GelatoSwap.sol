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

    function buyTokens(uint256 ethAmount) public payable {
        uint amountToSend = msg.value * ethAmount;
        GelaToken.transfer(msg.sender, amountToSend);
    }
}