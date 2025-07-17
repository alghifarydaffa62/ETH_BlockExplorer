import BlockNumber from "../component/blockNumber"
import BlockInfo from "../component/blockInfo"
import Header from "../component/Header"
import GetNumber from "../lib/getNumber"
import BlockList from "../component/blockList"

export default function Home() {
    let blockNumber = GetNumber();

    return(
        <div className="text-white font-mono">
            <Header/>
            <BlockNumber blockNumber={blockNumber}/>
            <BlockList/>
            {/* <BlockInfo blockNumber={blockNumber}/> */}
        </div>
    )
}