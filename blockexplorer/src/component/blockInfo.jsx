import { useEffect, useState } from "react";
import alchemy from "../lib/alchemy";
import ShortHash from "../lib/shortenHash";
import block from "../assets/block.png";

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
    <div className="mt-5">
    {blockInfo ? (
      <div className="flex flex-col md:flex-row justify-evenly">
        
        {/* Block Info */}
        <div className="bg-[#092039] p-6 rounded-xl shadow-md shadow-white/10 text-white w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <img src={block} alt="Block icon" className="w-8 h-8 object-contain" />
            <h1 className="text-3xl font-semibold text-white">Block #{blockNumber}:</h1>
          </div>
          
          <p className="mb-2 text-lg">
            <span className="font-bold text-xl text-blue-200">Block Hash:</span><br/>{ShortHash(blockInfo.hash)}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-bold text-xl text-blue-200">Parent Hash:</span> {ShortHash(blockInfo.parentHash)}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-bold text-xl text-blue-200">Timestamp:</span> {new Date(blockInfo.timestamp * 1000).toLocaleString()}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-bold text-xl text-blue-200">Total transaction:</span> {blockInfo.transactions.length}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-bold text-xl text-blue-200">Gas Limit:</span> {blockInfo.gasLimit.toString()}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-bold text-xl text-blue-200">Gas used:</span> {blockInfo.gasUsed.toString()}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-bold text-xl text-blue-200">Miner:</span> {blockInfo.miner}
          </p>
        </div>

        {/* Transactions */}
        <div className="bg-[#092039] p-6 rounded-xl shadow-md shadow-white/10 text-white">
          <div className="flex items-center gap-3 mb-6">
            <img src={block} alt="Block icon" className="w-8 h-8 object-contain" />
            <h1 className="text-2xl font-semibold text-white">All transactions:</h1>
          </div>
          <ul className="">
            {blockInfo.transactions.slice(0, 15).map((txHash, index) => (
              <li key={index} className="text-md border-b border-white/12 py-1">
                Tx: {ShortHash(txHash)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <p className="text-center text-white">Loading block info...</p>
    )}
  </div>

  );
}