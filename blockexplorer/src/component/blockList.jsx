import { useState, useEffect } from "react";
import alchemy from "../lib/alchemy";
import ShortHash from "../lib/shortenHash";
import blockIcon from "../assets/block.png"
import BlockInfo from "./blockInfo";
import {Link} from "react-router-dom"

export default function BlockList() {
    const [blocks, setBlocks] = useState(() => {
        const savedBlocks = localStorage.getItem("recentBlocks");
        return savedBlocks ? JSON.parse(savedBlocks) : [];
    });

    const [latestBlockNumber, setLatestBlockNumber] = useState(() => {
        const savedBlocks = localStorage.getItem("recentBlocks");
        if (savedBlocks) {
            const parsed = JSON.parse(savedBlocks);
            return parsed.length > 0 ? parsed[0].number : null;
        }
        return null;
    });

    useEffect(() => {
        const interval = setInterval(async () => {
        const currentBlock = await alchemy.core.getBlockNumber();

        if (currentBlock !== latestBlockNumber) {
            const newBlock = await alchemy.core.getBlock(currentBlock);

            setBlocks(prev => {
            const updated = [newBlock, ...prev].slice(0, 10);

            localStorage.setItem("recentBlocks", JSON.stringify(updated));
            return updated;
            });

            setLatestBlockNumber(currentBlock);
        }
        }, 2000);

        return () => clearInterval(interval);
    }, [latestBlockNumber]);

    return(
        <div className="flex justify-center gap-8 my-5">
            <div className="bg-[#0b1c3b] p-6 rounded-lg shadow-md shadow-white/10 text-white">
                <h2 className="text-xl font-bold mb-5">Recent Blocks</h2>
                <ul className="space-y-3">
                    {blocks.map((block, index) => (
                    <li key={index} className="border-b border-white/10 pb-2">
                        <div className="flex gap-3">
                            <img src={blockIcon} alt="" className="w-9 h-9 object-contain p-2 bg-blue-950 rounded-md"/>
                            <div>
                                <p className="text-md font-bold">Block <Link to={`/block/${block.number}`} className="text-blue-500">#{block.number}</Link></p>
                                <p className="text-sm text-gray-400">Hash: {ShortHash(block.hash)}</p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>

            <BlockInfo blockNumber={latestBlockNumber}/>
        </div>
        
    )
}