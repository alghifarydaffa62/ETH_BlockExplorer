import alchemy from "../lib/alchemy"
import { useState, useEffect } from "react"
import ShortHash from "../lib/shortenHash"
import { ethers } from "ethers"

export default function TransactionBoxDetail({hash}) {
    const [transactionInfo, setTransactionInfo] = useState()

    useEffect(() => {
        async function fetchTransaction() {
            const transaction = await alchemy.core.getTransaction(hash)
            setTransactionInfo(transaction)
        }

        fetchTransaction()
    }, [hash])

    return(
        <div className="flex justify-center">
            {transactionInfo ? (
                <div className="text-white bg-[#0b1c3b] p-6 flex flex-col gap-4 rounded-xl">
                    <div>
                        <h1 className="text-lg font-semibold">Transaction hash: </h1>
                        <p className="text-gray-400">{ShortHash(transactionInfo.hash)}</p>
                    </div>
                    
                    <div>
                        <h1 className="text-lg font-semibold">Transaction From: </h1>
                        <p className="text-gray-400">{transactionInfo.from}</p>
                    </div>
                    
                    <div>
                        <h1 className="text-lg font-semibold">Transaction To: </h1>
                        <p className="text-gray-400">{transactionInfo.to}</p>
                    </div>
                    
                    <div>
                        <h1 className="text-lg font-semibold">
                            Block Number: 
                            <span className="text-gray-400"> {transactionInfo.blockNumber}</span>
                        </h1>
                    </div>
                    
                    <div>
                        <h1 className="text-lg font-semibold">
                            Transaction Id: 
                            <span className="text-gray-400"> {transactionInfo.chainId}</span>
                        </h1>
                    </div>

                    <div>
                        <h1 className="text-lg font-semibold">Transaction Value: </h1>
                        <p className="text-gray-400">{ethers.formatEther(transactionInfo.value)}</p>
                    </div>
                </div>
            ) : (
                <h1>Loading transaction info...</h1>
            )}
        </div>
    )
}