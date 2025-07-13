export default function BlockNumber({blockNumber}) {
    return (
        <div className="text-center">
            <h2>Latest Block number: #{blockNumber ?? "loading.."}</h2>
        </div>
    )
}