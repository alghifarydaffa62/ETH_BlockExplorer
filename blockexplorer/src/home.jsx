// import { useState } from "react";
import BlockNumber from "./component/blockNumber"
import { useState, useEffect } from "react"
import alchemy from "./lib/alchemy"
import BlockInfo from "./component/blockInfo"

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
        <div>
            <h1 className="text-4xl text-blue-900 font-bold text-center">Ethereum Block Explorer</h1>
            <BlockNumber blockNumber={blockNumber}/>

            <h1>Block #{blockNumber} Information</h1>
            
        </div>
    )
}