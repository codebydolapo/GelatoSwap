// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import './Gelatoken.sol';

contract GelatoSwap{
   
   //creatig a new token variable
    Gelatoken public GelaToken;

    constructor(Gelatoken _gelaToken){
        GelaToken = _gelaToken;
    }
}