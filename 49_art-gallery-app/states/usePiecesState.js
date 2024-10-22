import { create } from "zustand";
import { persist } from "zustand/middleware";

// Without localstorage
export const usePiecesState = create((set) => ({
	artPiecesInfo: [],
	setArtPiecesInfo: (newState) => set({ artPiecesInfo: newState }),
}));

// Localstorage
// export const usePiecesState = create(
// 	persist(
// 		(set) => ({
// 			artPiecesInfo: [],
// 			setArtPiecesInfo: (newState) => set({ artPiecesInfo: newState }),
// 		}),
// 		{
// 			name: "art-pieces",
// 		}
// 	)
// );
