import BlockNumber from "../component/blockNumber"
import BlockInfo from "../component/blockInfo"
import ethereum from "../assets/coins.png"
import SearchBlock from "../component/searchBlock"
import GetNumber from "../lib/getNumber"
import BlockList from "../component/blockList"

export default function Home() {
    let blockNumber = GetNumber();

    return(
        <div className="text-white font-mono mt-5">
            <div className="flex justify-around items-center">
                <div className="flex items-center justify-center gap-3">
                    <img src={ethereum} alt="Ethereum Logo" className="w-10 h-10 object-contain" />
                    <div>
                        <h1 className="text-4xl font-bold text-white">Ethereum Block Explorer</h1>
                        <h1 className=" mt-2 font-bold">Project by <a className="text-blue-300" href="https://github.com/alghifarydaffa62" target="_blank">alghifarydaffa62</a></h1>
                    </div>
                    
                </div>
                <SearchBlock/>
            </div>
            
            <BlockNumber blockNumber={blockNumber}/>
            <BlockList/>
            {/* <BlockInfo blockNumber={blockNumber}/> */}
        </div>
    )
}