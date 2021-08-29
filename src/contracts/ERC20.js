import ERC20Artifact from 'openzeppelin-solidity/build/contracts/ERC20.json'
export default function ERC20(web3, address = null) {
  const { abi } = ERC20Artifact
  return new web3.eth.Contract(abi, address)
}
