import { create } from "zustand";
import { persist } from "zustand/middleware";

// Without localstorage
export const usePiecesState = create((set) => ({
	artPiecesInfo: [],
	toggleFavorite: (slug) =>
		set((state) => ({
			artPiecesInfo: state.artPiecesInfo.some((piece) => piece.slug === slug) ? state.artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, isFavorite: !piece.isFavorite } : piece)) : [...state.artPiecesInfo, { slug, isFavorite: true, comments: [] }],
		})),
	addComment: (slug, comment, date) =>
		set((state) => ({
			artPiecesInfo: state.artPiecesInfo.some((piece) => piece.slug === slug) ? state.artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, comments: [{ comment: comment, date: date }, ...piece.comments] } : piece)) : [...state.artPiecesInfo, { slug, isFavorite: false, comments: [{ comment, date: date }] }],
		})),
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
