pragma solidity ^0.8.0;

import "./KIP7.sol";

contract KIP7Token is KIP7 {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply
    ) {
        _name = name;
        _symbol = symbol;
        _mint(msg.sender, initialSupply);
    }
}
