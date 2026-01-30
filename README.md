![Built on Base](https://img.shields.io/badge/Built%20on%20Base-blue?logo=coinbase)
![Base Ecosystem Project](https://img.shields.io/badge/Base%20Ecosystem%20Project-0052ff?logo=coinbase)

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

## Roadmap

1. **MVP Release**
   - Finalize core smart contracts for streaming logic
   - Deploy contracts on Base Mainnet
   - Build initial frontend with wallet support (MetaMask, WalletConnect)
   - Integrate Google Sign-In for user identity

2. **User Experience Improvements**
   - Improve UI/UX for stream creation and dashboard
   - Add real-time updates for stream state and balances
   - Introduce clear status feedback and error handling

3. **Token and Reward Systems**
   - Design native token for stream incentives
   - Enable reward distribution based on streaming activity
   - Add staking or bonus mechanisms

4. **Streaming Analytics and Insights**
   - Provide user analytics dashboard
   - Add filters and historic stream data views
   - Integrate on-chain event tracking and logs

5. **Security and Testing**
   - Write comprehensive tests (Hardhat / Foundry)
   - Perform smart contract audits
   - Implement monitoring for live streams and funds

6. **Expansion and Ecosystem Integration**
   - Add mobile responsiveness and PWA support
   - Provide public API for third-party integrations
   - Expand into cross-chain streaming capabilities
