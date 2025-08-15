import { useEffect } from "react"
import { useState } from "react"
import BlockValidation from "../lib/blockValidation"
import { useParams } from "react-router-dom";
import ShortHash from "../lib/shortenHash";
import { Link } from "react-router-dom";

export default function BlockTransaction() {
    const { number } = useParams();
    const [blockInfo, setBlockInfo] = useState();

    useEffect(() => {
        async function getinfo() {
            const { block } = await BlockValidation(number);
            setBlockInfo(block);
        }
        getinfo();
    }, [number]);

    return (
        <div className="bg-[#0b1c3b] p-6 rounded-lg shadow-md shadow-white/10 h-[45rem] flex flex-col text-white w-full">
            <div className="mb-4">
                <h1 className="font-bold text-xl">
                    Block <span className="text-blue-300">#{number}</span> transactions:
                </h1>
            </div>

            {/* Scrollable transactions */}
            <div className="flex-1 overflow-y-auto pr-2">
                {blockInfo ? (
                    <div className="flex flex-col gap-4">
                        {blockInfo.transactions.slice(0, 15).map((txHash, index) => (
                            <div
                                key={index}
                                className="bg-[#12263e] p-4 rounded-lg text-sm shadow shadow-black/10"
                            >
                                <p className="text-blue-200 text-lg font-bold mb-1">
                                    Transaction {index + 1}
                                </p>
                                <Link
                                    to={`/transaction/${txHash}`}
                                    className="text-gray-300 hover:text-blue-500"
                                >
                                    {ShortHash(txHash)}
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-white">Loading block info...</p>
                )}
            </div>
        </div>
    );
}