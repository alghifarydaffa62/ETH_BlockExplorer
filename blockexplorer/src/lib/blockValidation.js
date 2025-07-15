import alchemy from "./alchemy";

export default async function BlockValdation(searchInput) {
    if (!searchInput) return null;
    
    try {
        const isHash = typeof blockNumberOrHash === "string" && searchInput.startsWith("0x");

        const block = isHash
        ? await alchemy.core.getBlock(searchInput)
        : await alchemy.core.getBlock(Number(searchInput));

        if (
            !block ||
            block.hash === "0x0000000000000000000000000000000000000000000000000000000000000000" ||
            block.timestamp === 0
        ) {
            return { block: null, error: "Block not found" };
        }

        return { block, error: null };

    } catch (error) {
        return { block: null, error: "Block not found" };
    }
}