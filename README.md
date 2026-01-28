# BaseStream 📻

**BaseStream** is a decentralized radio dApp built on the **Base Network**, streaming all voice notes recorded in [BaseEcho](https://github.com/arawrdn/BaseEcho).  
It transforms the on-chain audio feed into a continuous community radio — owned by no one, powered by everyone.

This project continues the **BaseLoops Universe**, where each voice becomes a living part of the ecosystem.

---

## 🎧 Features
- Stream audio uploaded via BaseEcho
- Randomized and infinite playback
- Like / Skip interactions stored on-chain
- NFT holders from BaseLoops gain DJ privileges
- Community-powered, transparent, immutable

---

## 🧠 Tech Stack
- Solidity `^0.8.24`
- Base Network (Mainnet / Sepolia)
- Ethers.js + Vanilla JS Frontend
- Integration with BaseEcho contract

---

## 🧱 Smart Contract Overview
The `BaseStream.sol` contract:
- Reads voice data from BaseEcho
- Tracks likes and skips for each audio
- Allows only BaseLoops NFT holders to moderate playback order.
