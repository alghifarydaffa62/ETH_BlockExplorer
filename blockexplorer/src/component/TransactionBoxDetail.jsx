import alchemy from "../lib/alchemy"
import { useState, useEffect } from "react"
import ShortHash from "../lib/shortenHash"
import { ethers } from "ethers"
import { Link } from "react-router-dom"

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
        <div className="flex flex-col items-center">
            {transactionInfo ? (
                <>
                    <div className="flex justify-center mb-10 mt-4">
                        <Link
                            to={`/block/${transactionInfo.blockNumber}`}
                            className="inline-block bg-[#18385b] hover:bg-[#20527c] transition text-white font-semibold px-6 py-2 rounded-lg shadow-md"
                            >
                            ← Back to Block #{transactionInfo.blockNumber}
                        </Link>
                    </div>

                    <div className="text-white bg-[#0b1c3b] p-6 flex gap-10 rounded-xl w-fit">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h1 className="text-xl font-semibold">
                                    Block Number: 
                                    <span className="text-gray-400 "> #{transactionInfo.blockNumber}</span>
                                </h1>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold">Transaction hash: </h1>
                                <p className="text-gray-400 p-3 bg-[#1a3559] rounded-md mt-2">{ShortHash(transactionInfo.hash)}</p>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl font-semibold">Transaction From: </h1>
                                <Link to={`/Account/${transactionInfo.from}`} className="text-gray-400 hover:text-blue-500 p-3 bg-[#1a3559] rounded-md">{transactionInfo.from}</Link>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl font-semibold">Transaction To: </h1>
                                <Link to={`/Account/${transactionInfo.to}`} className="text-gray-400 hover:text-blue-500 p-3 bg-[#1a3559] rounded-md mt-2">{transactionInfo.to}</Link>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold">
                                    Transaction Value:
                                    <span className="text-gray-400"> {ethers.formatEther(transactionInfo.value.toString())} ETH</span>
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div>
                                <h1 className="text-xl font-semibold">Gas Limit: </h1>
                                <p className="text-gray-400 p-3 bg-[#1a3559] rounded-md mt-2">{transactionInfo.gasLimit.toString()}</p>
                            </div>
                            
                            <div>
                                <h1 className="text-xl font-semibold">Gas Price: </h1>
                                <p className="text-gray-400 p-3 bg-[#1a3559] rounded-md mt-2">{transactionInfo.gasPrice.toString()}</p>
                            </div>
                            
                            <div>
                                <h1 className="text-xl font-semibold">Max Fee Per Gas: </h1>
                                <p className="text-gray-400 p-3 bg-[#1a3559] rounded-md mt-2">{transactionInfo.maxFeePerGas.toString()}</p>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold">
                                    Transaction Type:
                                    <span className="text-gray-400"> 
                                        {transactionInfo.type === 0 ? (
                                            <> Legacy</>
                                        ) : transactionInfo === 1 ? (
                                            <> Access List</>
                                        ) : (
                                            <> Dynamic Fee</>
                                        )}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>    
                </>
            ) : (
                <h1>Loading transaction info...</h1>
            )}
        </div>
    )
}