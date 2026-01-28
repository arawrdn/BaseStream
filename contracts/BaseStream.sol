// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IBaseLoopsNFT {
    function balanceOf(address owner) external view returns (uint256);
}

interface IBaseEcho {
    function getAllEchoes() external view returns (
        tuple(address user, string ipfsHash, string description, uint256 timestamp)[]
    );
}

contract BaseStream {
    struct Reaction {
        uint256 likes;
        uint256 skips;
    }

    address public owner;
    IBaseEcho public baseEcho;
    IBaseLoopsNFT public baseLoopsNFT;
    mapping(string => Reaction) public reactions; // ipfsHash => reactions

    event Liked(address indexed user, string ipfsHash);
    event Skipped(address indexed user, string ipfsHash);

    constructor(address _baseEcho, address _baseLoopsNFT) {
        owner = msg.sender;
        baseEcho = IBaseEcho(_baseEcho);
        baseLoopsNFT = IBaseLoopsNFT(_baseLoopsNFT);
    }

    function likeEcho(string calldata ipfsHash) external {
        reactions[ipfsHash].likes += 1;
        emit Liked(msg.sender, ipfsHash);
    }

    function skipEcho(string calldata ipfsHash) external {
        reactions[ipfsHash].skips += 1;
        emit Skipped(msg.sender, ipfsHash);
    }

    function getReactions(string calldata ipfsHash) external view returns (uint256, uint256) {
        Reaction memory r = reactions[ipfsHash];
        return (r.likes, r.skips);
    }

    function getAllEchoes() external view returns (
        tuple(address user, string ipfsHash, string description, uint256 timestamp)[]
    ) {
        return baseEcho.getAllEchoes();
    }
}
