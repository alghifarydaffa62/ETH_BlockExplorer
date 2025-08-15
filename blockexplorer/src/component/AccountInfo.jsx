import { ethers } from "ethers"
import alchemy from "../lib/alchemy"
import { useEffect, useState } from "react"
import ethereum from "../assets/ethereum.png"
import wallet from "../assets/wallet.png"

// AccountInfo.jsx
export default function AccountInfo({ address }) {
    const [balance, setBalance] = useState(null)
    const [transactionSum, setTransactionSum] = useState(null)

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const userBal = await alchemy.core.getBalance(address)
                const transactions = await alchemy.core.getTransactionCount(address)
                setBalance(userBal)
                setTransactionSum(transactions)
            } catch (error) {
                console.error(error)
            }
        }

        fetchInfo()
    }, [address])

    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-4">
            <div className="flex gap-4 md:gap-10 items-center bg-blue-950 p-4 md:p-6 rounded-lg w-full md:w-auto">
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg md:text-xl font-semibold">Account balance:</h1>
                    <h1 className="p-2 md:p-3 bg-blue-900 rounded-md w-fit">
                        {balance ? `${ethers.formatEther(balance.toString())} ETH` : 'Loading...'}
                    </h1>
                </div>
                <img src={ethereum} alt="" className="w-12 md:w-18 object-contain" />
            </div>

            <div className="flex gap-4 md:gap-10 items-center bg-blue-950 p-4 md:p-6 rounded-lg w-full md:w-auto">
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg md:text-xl font-semibold">Total Transactions:</h1>
                    <h1 className="p-2 md:p-3 bg-blue-900 rounded-md w-fit">{transactionSum} Transactions</h1>
                </div>
                <img src={wallet} alt="" className="w-12 md:w-18 object-contain" />
            </div>
        </div>
    )
}