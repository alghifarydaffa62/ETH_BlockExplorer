import { useEffect } from "react";
import { wsProvider } from "../lib/provider";
import { useBlockStore } from "../store/blockStore";

export default function BlockListener() {
  const setBlocks = useBlockStore((s) => s.setBlocks);
  const addBlock = useBlockStore((s) => s.addBlock);

  useEffect(() => {
    let cancelled = false;

    const handler = async (bn) => {
      try {
        const block = await wsProvider.getBlock(bn);
        if (!cancelled) addBlock(block);
      } catch (e) {
        console.error("getBlock fail:", e);
      }
    };

    wsProvider.on("block", handler);

    (async () => {
      try {
        const latest = await wsProvider.getBlockNumber();
        const from = Math.max(0, latest - 9);
        const promises = [];
        for (let n = latest; n >= from; n--) promises.push(wsProvider.getBlock(n));
        const recent = await Promise.all(promises);
        if (!cancelled) setBlocks(recent);
      } catch (e) {
        console.error("bootstrap fail:", e);
      }
    })();

    return () => {
      cancelled = true;
      wsProvider.off("block", handler); 
    };
  }, [addBlock, setBlocks]);

  return null;
}