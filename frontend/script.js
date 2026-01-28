const contractAddress = "0x7D52422D3A5fE9bC92D3aE8167097eE09F1b347d";
const baseEchoAddress = "0xcd3e564072f664cabed275cc4ebcb096d96e0c80";

const abi = [
  "function getAllEchoes() view returns (tuple(address user, string ipfsHash, string description, uint256 timestamp)[])",
  "function likeEcho(string ipfsHash) external",
  "function skipEcho(string ipfsHash) external"
];

let provider, signer, contract, echoes = [], current = 0;

async function init() {
  if (!window.ethereum) return alert("Install MetaMask");
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);
  loadStream();
}

async function loadStream() {
  echoes = await contract.getAllEchoes();
  if (!echoes.length) {
    document.getElementById("desc").innerText = "No echoes yet.";
    return;
  }
  playNext();
}

function playNext() {
  if (!echoes.length) return;
  const e = echoes[current];
  document.getElementById("desc").innerText = e.description;
  document.getElementById("audio").src = `https://ipfs.io/ipfs/${e.ipfsHash}`;
  addToHistory(e);
  current = (current + 1) % echoes.length;
}

document.getElementById("skipBtn").onclick = async () => {
  const e = echoes[(current - 1 + echoes.length) % echoes.length];
  await contract.skipEcho(e.ipfsHash);
  playNext();
};

document.getElementById("likeBtn").onclick = async () => {
  const e = echoes[(current - 1 + echoes.length) % echoes.length];
  await contract.likeEcho(e.ipfsHash);
  alert("❤️ Echo liked!");
};

function addToHistory(e) {
  const div = document.createElement("div");
  div.className = "history-card";
  div.innerHTML = `
    <p><strong>${e.description}</strong></p>
    <audio controls src="https://ipfs.io/ipfs/${e.ipfsHash}"></audio>
    <small>${new Date(Number(e.timestamp) * 1000).toLocaleString()}</small>
  `;
  document.getElementById("history").prepend(div);
}

window.onload = init;
