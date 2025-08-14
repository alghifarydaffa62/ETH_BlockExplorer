import BlockNumber from "../component/blockNumber"
import BlockInfo from "../component/blockInfo"
import Header from "../component/Header"
import GetNumber from "../lib/getNumber"
import BlockList from "../component/blockList"
import BlockListener from "../component/BlockListener"

export default function Home() {
    let blockNumber = GetNumber();

    return(
        <div className="text-white font-mono">
            <Header/>
            <BlockListener/>
            <BlockNumber blockNumber={blockNumber}/>
            <BlockList/>
            {/* <BlockInfo blockNumber={blockNumber}/> */}
        </div>
    )
}