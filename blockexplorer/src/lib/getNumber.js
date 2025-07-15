import alchemy from "./alchemy";
import { useState, useEffect } from "react";

export default function GetNumber() {
    const [blockNumber, setBlockNumber] = useState()

    useEffect(() => {
        const interval = setInterval(async () => {
            let latestBlock = await alchemy.core.getBlockNumber()
            setBlockNumber(latestBlock);
        }, 2000)
        
        return () => clearInterval(interval)
    }, [blockNumber])

    return(blockNumber)
}