import { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom"
import ShortHash from "../lib/shortenHash";
import block from "../assets/block.png";
import hash from "../assets/hashtag.png";
import miner from "../assets/user.png";
import time from "../assets/clock.png";
import transaction from "../assets/transaction.png";
import getBlockInfo from "../lib/blockValidation";

export default function BlockInfo({ blockNumber }) {
  const [blockInfo, setBlockInfo] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchBlock() {
      const {block, error} = await getBlockInfo(blockNumber);
      setBlockInfo(block)
      setError(error)
    }

    fetchBlock();
  }, [location.pathname, blockNumber]);

  if (error) {
    return <p className="text-center text-red-400 text-xl mt-6">{error}</p>;
  }

  if (!blockInfo) {
    return <p className="text-center text-white">Loading block info...</p>;
  }

  return (
    <div>
      {blockInfo ? (
        <div className="flex flex-col gap-6 bg-[#0b1c3b] p-6 rounded-lg shadow-md shadow-white/10 text-white h-[45rem] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <img src={block} alt="Block icon" className="w-10 h-10 p-2 bg-blue-950 rounded-md object-contain" />
            <h1 className="text-xl font-semibold text-white">
              Block <Link to={`/block/${blockNumber}`} className="text-blue-300">#{blockNumber}</Link>:
            </h1>
          </div>

          {/* Block Hash */}
          <div className="bg-[#12263e] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src={hash} alt="Block icon" className="w-4 h-4 rounded-md object-contain" />
              <p className="text-blue-200 font-bold text-md">
                Block hash:
              </p>
            </div>
  
            <p className="font-semibold bg-[#1a3559] p-2 rounded-lg text-sm text-gray-300">{blockInfo.hash}</p>
          </div>

          {/* Parent Hash */}
          <div className="bg-[#12263e] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src={hash} alt="" className="object-contain w-4 h-4"/>
              <p className="text-blue-200 font-bold text-md">Parent Hash:</p>
            </div>
            
            <p className="font-semibold bg-[#1a3559] p-2 rounded-lg text-sm text-gray-300">{ShortHash(blockInfo.parentHash)}</p>
          </div>

          {/* Miner */}
          <div className="bg-[#12263e] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src={miner} alt="" className="object-contain w-4 h-4"/>
              <p className="text-blue-200 font-bold text-md">Miner:</p>
            </div>
            <p className="font-semibold bg-[#1a3559] p-2 rounded-lg text-sm text-gray-300">{blockInfo.miner}</p>
          </div>

          {/* Timestamp */}
          <div className="bg-[#12263e] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src={time} alt="" className="object-contain w-4 h-4"/>
              <p className="text-blue-200 font-bold text-md">Timestamp:</p>
            </div>

            <p className="font-semibold bg-[#1a3559] p-2 rounded-lg text-sm text-md text-gray-300">
              {new Date(blockInfo.timestamp * 1000).toLocaleString()}
            </p>
          </div>

          {/* Total Transactions */}
          <div className="bg-[#12263e] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src={transaction} alt="" className="object-contain w-5 h-5"/>
              <p className="text-blue-200 font-bold text-md">Total transaction:</p>
            </div>
            <p className="font-semibold bg-[#1a3559] p-2 rounded-lg text-sm text-gray-300">
              {blockInfo.transactions.length}
            </p>
          </div>

        </div>
      ) : (
        <p className="text-center text-white">Loading block info...</p>
      )}
    </div>
  );
}