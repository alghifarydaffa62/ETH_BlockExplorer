import { useEffect, useState } from "react";
import alchemy from "../lib/alchemy";
import ShortHash from "../lib/shortenHash";

export default function BlockInfo({ blockNumber }) {
  const [blockInfo, setBlockInfo] = useState(null);

  useEffect(() => {
    async function fetchBlock() {
      if (blockNumber) {
        const block = await alchemy.core.getBlock(blockNumber);
        setBlockInfo(block);
      }
    }

    fetchBlock();
  }, [blockNumber]);

  return (
    <div className="">
        
      {blockInfo ? (
        <div className="flex mt-5 justify-evenly">
            <div>
                <p><strong>Block Hash:</strong> {ShortHash(blockInfo.hash)}</p>
                <p><strong>Parent Hash:</strong> {ShortHash(blockInfo.parentHash)}</p>
                <p><strong>Miner:</strong> {blockInfo.miner}</p>
            </div>

            <ul>
                {blockInfo.transactions.slice(0, 15).map((txHash, index) => (
                    <li key={index}>Tx: {ShortHash(txHash)}</li>
                ))}
            </ul>
        </div>
        
      ) : (
        <p>Loading block info...</p>
      )}
    </div>
  );
}