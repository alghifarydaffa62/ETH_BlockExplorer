import { useParams } from "react-router-dom";
import BlockInfo from "../component/blockInfo";
import BlockTransaction from "../component/blockTransaction";
import ethereum from "../assets/coins.png"
import SearchBlock from "../component/searchBlock";

export default function BlockDetail() {
  const { number } = useParams();

  return (
    <div className="min-h-screen px-4 py-8 bg-[#0b1a2f] text-white">
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

      <div className="mt-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Block <span className="text-blue-400">#{number}</span>
        </h1>

        <div className="flex justify-center mb-10">
          <a
            href="/"
            className="inline-block bg-[#18385b] hover:bg-[#20527c] transition text-white font-semibold px-6 py-2 rounded-lg shadow-md"
          >
            ← Back to home
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <div className="w-1/2">
            <BlockInfo blockNumber={number} />
          </div>
          <div className="w-1/2">
            <BlockTransaction blockNumber={number}/>
          </div>
        </div>

      </div>
    </div>
  );
}
