"use client";

import { usePiecesSWR } from "@/libs/usePiecesSWR";
import { usePiecesState } from "@/libs/usePiecesState";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtFavorites() {
	const { pieces, isLoading, isError } = usePiecesSWR();
	const { artPiecesInfo } = usePiecesState();

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Failed to fetch!</h1>;

	const filteredPieces = pieces.filter(({ slug }) => artPiecesInfo.find((piece) => piece.slug === slug && piece.isFavorite));

	return (
		<>
			<h1>Favorites ({filteredPieces.length})</h1>
			<hr />
			{filteredPieces.length === 0 ? (
				<h2>No favorites</h2>
			) : (
				filteredPieces.map((piece) => (
					<section key={piece.slug}>
						<ArtPiecePreview {...piece} />
					</section>
				))
			)}
		</>
	);
}
