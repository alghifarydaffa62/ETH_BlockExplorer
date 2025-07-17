import { useParams } from "react-router-dom";
import BlockInfo from "../component/blockInfo";
import BlockTransaction from "../component/blockTransaction";
import BackButton from "../component/BackButton";
import Header from "../component/Header";

export default function BlockDetail() {
  const { number } = useParams();

  return (
    <div className="min-h-screen pb-2 text-white">
      <Header/>

      <div className="mt-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Block <span className="text-blue-400">#{number}</span>
        </h1>

        <BackButton/>

        <div className="flex justify-center gap-6">
          <div className="w-[38rem]">
            <BlockInfo blockNumber={number} />
          </div>
          <div className="w-2/5">
            <BlockTransaction blockNumber={number}/>
          </div>
        </div>

      </div>
    </div>
  );
}
