import BlockInfo from "../component/blockInfo"
import Header from "../component/Header"
import BlockList from "../component/blockList"

export default function Home() {
    return(
        <div className="text-white font-mono">
            <Header/>
            <BlockList/>
            {/* <BlockInfo blockNumber={blockNumber}/> */}
        </div>
    )
}