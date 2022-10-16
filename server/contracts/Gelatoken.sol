// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Gelatoken is ERC20{

  address public deployer;

  constructor() ERC20("Gelatoken", "GET") {
    deployer = msg.sender;
    _mint(deployer, 1000000000000000000000000);
  }
}
