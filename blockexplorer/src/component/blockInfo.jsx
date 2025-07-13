import { useEffect, useState } from "react"
import alchemy from "../lib/alchemy"

export default function BlockInfo({blockNumber}) {
    const [blockInfo, setBlockInfo] = useState()

    useEffect(() => {
        async function fetchBlock() {
            if(blockNumber) {
                const block = await alchemy.core.getBlock(blockNumber);
                setBlockInfo(block);
            }
        }

        fetchBlock()
    }, [blockNumber])

    return(
        <div>

        </div>
    )
}