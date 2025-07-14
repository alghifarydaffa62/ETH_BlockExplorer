import { useParams } from "react-router-dom"
import GetNumber from "../lib/getNumber";
import BlockInfo from "../component/blockInfo";

export default function BlockDetail() {
    const { id } = useParams();

    return(
        <div className="mt-6">
            <h1 className="text-4xl text-white text-center font-bold">Block #<span className="text-blue-400">{id}</span></h1>
            <a href="" className="p-3 bg-[#18385b] text-white font-semibold rounded-lg">Back to home</a>
            <BlockInfo blockNumber={id}/>
        </div>
    )
}