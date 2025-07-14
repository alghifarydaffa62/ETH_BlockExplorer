import { useParams } from "react-router-dom";
import BlockInfo from "../component/blockInfo";

export default function BlockDetail() {
  const { number } = useParams();

  return (
    <div className="min-h-screen px-4 py-8 bg-[#0b1a2f] text-white">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
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

        <BlockInfo blockNumber={number} />
      </div>
    </div>
  );
}
