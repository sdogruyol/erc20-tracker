// src/eth/network.js
import Web3 from 'web3'
let web3
export function getWeb3() {
  if (!web3) {
    web3 = new Web3(
      window.ethereum ||
        (window.web3 && window.web3.currentProvider) ||
        'wss://mainnet.infura.io/ws/v3/PROJECT_ID',
    )
  }
  return web3
}
