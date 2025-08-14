import { useEffect } from "react";
import { wsProvider } from "../lib/provider";
import { useBlockStore } from "../store/blockStore";

export default function BlockListener() {
    const addBlock = useBlockStore((state) => state.addBlock)

    useEffect(() => {
        wsProvider.on("block", async (blockNumber) => {
            const block = await wsProvider.getBlock(blockNumber)
            addBlock(block)
        })

        return () => {
            wsProvider.removeAllListeners("block")
        }
    }, [addBlock])

    return null
}