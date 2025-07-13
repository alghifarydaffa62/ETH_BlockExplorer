export default function BlockNumber({blockNumber}) {
    return (
        <div className="text-center mt-10 font-bold text-xl">
            <h2>Latest Block number: <span className="text-blue-400">#{blockNumber ?? "loading.."}</span></h2>
        </div>
    )
}