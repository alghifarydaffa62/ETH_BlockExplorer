import alchemy from "./alchemy";
import { useState, useEffect } from "react";

export default function GetNumber() {
    const [blockNumber, setBlockNumber] = useState()

    useEffect(() => {
        async function getBlockNumber() {
        let latestBlock = await alchemy.core.getBlockNumber()
        setBlockNumber(latestBlock);
        }

        getBlockNumber()
    }, [])

    return(blockNumber)
}