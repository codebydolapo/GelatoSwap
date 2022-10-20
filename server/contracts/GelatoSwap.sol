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

    function buyTokens() public payable returns(bool){
        uint amountToSend = rate * msg.value;
        return GelaToken.transfer(msg.sender, amountToSend);
    }

    // function buyTokens() public payable{
    //     uint amountToSend = rate * msg.value;
    //     GelaToken.transferToBuyer(msg.sender, amountToSend);
    // }

    function checkBalance(address account) public view returns(uint256){
        return GelaToken.balanceOf(account);
    }

    
}