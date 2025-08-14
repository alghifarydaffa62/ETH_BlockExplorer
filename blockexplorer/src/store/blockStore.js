import { create } from "zustand";

export const useBlockStore = create((set) => ({
    blocks: [],
    addBlock: (block) => set((state) => ({
        blocks: [block, ...state.blocks].slice(0, 10)
    })) 
}))