import { create } from "zustand";
import { persist } from "zustand/middleware";

// Without localstorage
export const usePiecesState = create((set) => ({
	artPiecesInfo: [],
	toggleFavorite: (slug) =>
		set((state) => ({
			artPiecesInfo: state.artPiecesInfo.some((piece) => piece.slug === slug) ? state.artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, isFavorite: !piece.isFavorite } : piece)) : [...state.artPiecesInfo, { slug, isFavorite: true, comments: [] }],
		})),
	addComment: (slug, comment) =>
		set((state) => ({
			artPiecesInfo: state.artPiecesInfo.some((piece) => piece.slug === slug) ? state.artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, comments: [comment, ...piece.comments] } : piece)) : [...state.artPiecesInfo, { slug, isFavorite: false, comments: [comment] }],
		})),
}));

// Localstorage
// export const usePiecesState = create(
// 	persist(
// 		(set) => ({
// 			artPiecesInfo: [],
// 			toggleFavorite: (slug) =>
// 				set((state) => ({
// 					artPiecesInfo: state.artPiecesInfo.some((piece) => piece.slug === slug) ? state.artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, isFavorite: !piece.isFavorite } : piece)) : [...state.artPiecesInfo, { slug, isFavorite: true, comments: [] }],
// 				})),
// 			addComment: (slug, comment) =>
// 				set((state) => ({
// 					artPiecesInfo: state.artPiecesInfo.some((piece) => piece.slug === slug) ? state.artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, comments: [comment, ...piece.comments] } : piece)) : [...state.artPiecesInfo, { slug, isFavorite: false, comments: [comment] }],
// 				})),
// 		}),
// 		{
// 			name: "art-pieces",
// 		}
// 	)
// );
