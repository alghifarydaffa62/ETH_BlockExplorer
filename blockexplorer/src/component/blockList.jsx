import ShortHash from "../lib/shortenHash";
import blockIcon from "../assets/block.png"
import BlockInfo from "./blockInfo";
import { useBlockStore } from "../store/blockStore";
import { Link } from "react-router-dom"

export default function BlockList() {
  const blocks = useBlockStore((s) => s.blocks);
  const latestBlockNumber = blocks[0]?.number ?? null;

  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-xl md:text-3xl">
        Latest Block Number:{" "}
        <span className="text-blue-400">#{latestBlockNumber}</span>
      </h1>

      {/* Tambahan responsif: flex-col di mobile, gap lebih kecil */}
      <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8 my-5 px-4">
        
        {/* Recent Blocks */}
        <div className="bg-[#0b1c3b] p-6 rounded-lg shadow-md shadow-white/10 text-white w-full lg:w-auto">
          <h2 className="text-xl font-bold mb-5">Recent Blocks</h2>
          {blocks.length === 0 ? (
            <p className="text-gray-400">Waiting for blocks…</p>
          ) : (
            <ul className="space-y-3">
              {blocks.map((block) => (
                <li
                  key={block.number}
                  className="border-b border-white/10 pb-2"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={blockIcon}
                      alt=""
                      className="w-9 h-9 object-contain p-2 bg-blue-950 rounded-md"
                    />
                    <div className="overflow-hidden">
                      <p className="text-lg font-bold truncate">
                        Block{" "}
                        <Link
                          to={`/block/${block.number}`}
                          className="text-blue-500"
                        >
                          #{block.number}
                        </Link>
                      </p>
                      <Link
                        to={`/block/${block.number}`}
                        className="text-sm text-gray-400 break-all"
                      >
                        Hash:{" "}
                        <span className="hover:text-blue-400">
                          {ShortHash(block.hash)}
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Block Info */}
        <div className="w-full lg:w-auto">
          <BlockInfo blockNumber={latestBlockNumber} />
        </div>
      </div>
    </div>
  );
}