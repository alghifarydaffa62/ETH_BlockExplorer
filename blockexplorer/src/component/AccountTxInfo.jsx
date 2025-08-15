import { useEffect, useState } from "react"
import alchemy from "../lib/alchemy"
import ShortHash from "../lib/shortenHash"
import { Link } from "react-router-dom"

// AccountTxInfo.jsx
export default function AccountTxInfo({ address }) {
    const [txInfo, setTxInfo] = useState([])

    useEffect(() => {
        const fetchTxInfo = async () => {
            const result = await alchemy.core.getAssetTransfers({
                fromBlock: '0x0',
                toBlock: 'latest',
                fromAddress: address,
                category: ['external', 'internal', 'erc20', 'erc721', 'erc1155', 'specialnft'],
                maxCount: 20,
                order: 'asc'
            })

            setTxInfo(result.transfers)
        }

        fetchTxInfo()
    }, [address])

    return (
        <div className="flex justify-center my-8 px-2">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#0c1f3e] text-white border border-gray-700 rounded-lg overflow-hidden shadow-md">
                    <thead>
                        <tr className="bg-[#122c52] text-sm md:text-base">
                            <th className="p-2 md:p-4 border-b border-gray-600">Transaction Hash</th>
                            <th className="p-2 md:p-4 border-b border-gray-600">Block Number</th>
                            <th className="p-2 md:p-4 border-b border-gray-600">From</th>
                            <th className="p-2 md:p-4 border-b border-gray-600">To</th>
                            <th className="p-2 md:p-4 border-b border-gray-600">Value</th>
                            <th className="p-2 md:p-4 border-b border-gray-600">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {txInfo.map((tx, index) => (
                            <tr key={index} className="hover:bg-[#1a3766] transition-colors text-xs md:text-sm">
                                <td className="py-2 md:py-4 px-3 md:px-6 border-b border-gray-600 hover:text-blue-400">
                                    <Link to={`/transaction/${tx.hash}`}>{tx.hash.slice(0, 15)}...</Link>
                                </td>
                                <td className="py-2 md:py-4 px-3 md:px-6 border-b border-gray-600">{parseInt(tx.blockNum, 16)}</td>
                                <td className="py-2 md:py-4 px-3 md:px-6 border-b border-gray-600">{tx.from?.slice(0, 15)}...</td>
                                <td className="py-2 md:py-4 px-3 md:px-6 border-b border-gray-600 hover:text-blue-400">
                                    <Link to={`/Account/${tx.to}`}>{tx.to?.slice(0, 15)}...</Link>
                                </td>
                                <td className="py-2 md:py-4 px-3 md:px-6 border-b border-gray-600 text-center">{tx.value} {tx.asset}</td>
                                <td className="py-2 md:py-4 px-3 md:px-6 border-b border-gray-600">{tx.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}