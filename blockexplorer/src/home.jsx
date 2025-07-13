// import { useState } from "react";
import BlockNumber from "./component/blockNumber"
import { useState, useEffect } from "react"
import alchemy from "./lib/alchemy"
import BlockInfo from "./component/blockInfo"
import ethereum from "./assets/coins.png"

export default function Home() {
    const [blockNumber, setBlockNumber] = useState()

    useEffect(() => {
        async function getBlockNumber() {
        let latestBlock = await alchemy.core.getBlockNumber()
        setBlockNumber(latestBlock);
        }

        getBlockNumber()
    }, [])

    return(
        <div className="text-white font-mono mt-5">
            <div className="flex items-center justify-center gap-3">
                <img src={ethereum} alt="Ethereum Logo" className="w-8 h-8 object-contain" />
                <h1 className="text-4xl font-bold text-white">Ethereum Block Explorer</h1>
            </div>

            <h1 className="text-center mt-2 font-bold">Project by <a className="text-blue-300" href="https://github.com/alghifarydaffa62" target="_blank">alghifarydaffa62</a></h1>
            <BlockNumber blockNumber={blockNumber}/>
            <BlockInfo blockNumber={blockNumber}/>
        </div>
    )
}