"use client";

import { usePiecesState } from "@/libs/usePiecesState";

export default function FavoriteButton({ slug }) {
	const { artPiecesInfo, setArtPiecesInfo } = usePiecesState();
	const { isFavorite } = artPiecesInfo.find((piece) => piece.slug === slug) ?? { isFavorite: false };

	function handleToggle() {
		if (artPiecesInfo.some((piece) => piece.slug === slug)) {
			setArtPiecesInfo(artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, isFavorite: !piece.isFavorite } : piece)));
		} else {
			setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true, comments: [] }]);
		}
	}

	return (
		<button type="button" onClick={handleToggle}>
			{isFavorite ? "Remove from favorites ✕" : "Add to favorites"}
		</button>
	);
}
