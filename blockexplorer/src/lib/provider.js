import { ethers } from "ethers"
import { WebSocketProvider } from "ethers"

export const wsProvider = new WebSocketProvider(import.meta.env.VITE_ALCHEMY_WSS_URL)