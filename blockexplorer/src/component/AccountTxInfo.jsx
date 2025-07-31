import { useEffect, useState } from "react"
import alchemy from "../lib/alchemy"
import ShortHash from "../lib/shortenHash"

export default function AccountTxInfo({address}) {
    const [txInfo, setTxInfo] = useState([])

    useEffect(() => {
        const fetchTxInfo = async () => {
            const result = await alchemy.core.getAssetTransfers({
                fromBlock: '0x0',
                toBlock: 'latest',
                fromAddress: address,
                category: ['external', 'internal', 'erc20'],
                maxCount: 20,
                order: 'asc'
            })

            setTxInfo(result.transfers)
        }

        fetchTxInfo()
    }, [address])

    return(
        <div className="flex justify-center mt-8">
            <table className="bg-[#0c1f3e] border-collapse border border-gray-400">
                <th className="p-4">Transaction Hash</th>
                <th>Block Number</th>
                <th>Sender</th>
                <th>Recipient</th>
                <th>Value</th>
                <th>Category</th>

                {txInfo.map((tx, index) => (
                    <tr key={index}>
                        <td>{tx.hash.slice(0, 20)}...</td>
                        <td>{tx.blockNum.toString()}</td>
                        <td>{tx.to.slice(0, 20)}...</td>
                        <td>{tx.from.slice(0, 20)}...</td>
                        <td>{tx.value} {tx.asset}</td>
                        <td>{tx.category}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}