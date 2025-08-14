import { ethers } from "ethers";

// Ganti dengan link WebSocket-mu
const provider = new ethers.WebSocketProvider("wss://eth-mainnet.g.alchemy.com/v2/rCrDSzBlwrg0IXnT_HrD_kbFHwJ-BOhb");

provider.on("block", (blockNumber) => {
  console.log("New block:", blockNumber);
});

provider.websocket.on("open", () => {
  console.log("✅ Connected to WebSocket");
});

provider.websocket.on("error", (err) => {
  console.error("❌ WebSocket Error:", err);
});

provider.websocket.on("close", (code) => {
  console.log("🔌 WebSocket Closed:", code);
});
