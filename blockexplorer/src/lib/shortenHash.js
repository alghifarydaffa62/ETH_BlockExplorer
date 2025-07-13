export default function ShortHash(hash) {
    return `${hash.slice(0, 50)}...`
}