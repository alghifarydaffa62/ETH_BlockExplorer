import { useEffect, useState } from "react";
import ShortHash from "../lib/shortenHash";
import block from "../assets/block.png";
import getBlockInfo from "../lib/getBlockInfo";

export default function BlockInfo({ blockNumber }) {
  const [blockInfo, setBlockInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlock() {
      const {block, error} = await getBlockInfo(blockNumber);
      setBlockInfo(block)
      setError(error)
    }

    fetchBlock();
  }, [blockNumber]);

  if (error) {
    return <p className="text-center text-red-400 text-xl mt-6">{error}</p>;
  }

  if (!blockInfo) {
    return <p className="text-center text-white">Loading block info...</p>;
  }

  return (
    <div className="mt-5">
      {blockInfo ? (
        <div className="bg-[#0b1c3b] p-6 rounded-xl shadow-md shadow-white/10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <img src={block} alt="Block icon" className="w-8 h-8 object-contain" />
              <h1 className="text-3xl font-semibold text-white">Block <span className="text-blue-300">#{blockNumber}</span>:</h1>
            </div>
            
            <p className="mb-2 text-md">
              <span className="font-bold text-md text-blue-200">Block Hash:</span><br/>{ShortHash(blockInfo.hash)}
            </p>
            <p className="mb-2 text-md">
              <span className="font-bold text-md text-blue-200">Parent Hash:</span> {ShortHash(blockInfo.parentHash)}
            </p>
            <p className="mb-2 text-md">
              <span className="font-bold text-md text-blue-200">Timestamp:</span> {new Date(blockInfo.timestamp * 1000).toLocaleString()}
            </p>
            <p className="mb-2 text-md">
              <span className="font-bold text-md text-blue-200">Total transaction:</span> {blockInfo.transactions.length}
            </p>
            <p className="mb-2 text-md">
              <span className="font-bold text-md text-blue-200">Gas Limit:</span> {blockInfo.gasLimit.toString()}
            </p>
            <p className="mb-2 text-md">
              <span className="font-bold text-md text-blue-200">Gas used:</span> {blockInfo.gasUsed.toString()}
            </p>
            <p className="mb-2 text-md">
              <span className="font-bold text-md text-blue-200">Miner:</span> {blockInfo.miner}
            </p>
        </div>
      ) : (
        <p className="text-center text-white">Loading block info...</p>
      )}
    </div>

  );
}