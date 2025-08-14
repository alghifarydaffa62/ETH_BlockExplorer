import { create } from "zustand";
import { persist } from "zustand/middleware";

const dedupe = (arr) => {
  const seen = new Set();
  return arr.filter((b) => {
    if (seen.has(b.number)) return false;
    seen.add(b.number);
    return true;
  });
};

export const useBlockStore = create(
  persist(
    (set, get) => ({
      blocks: [],
      setBlocks: (list) =>
        set({
          blocks: dedupe(list)
            .sort((a, b) => b.number - a.number)
            .slice(0, 10),
        }),
      addBlock: (block) => {
        const next = dedupe([block, ...get().blocks])
          .sort((a, b) => b.number - a.number)
          .slice(0, 10);
        set({ blocks: next });
      },
    }),
    { name: "recent-blocks" }
  )
);
