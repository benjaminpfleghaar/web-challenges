"use client";

import styles from "./ArtFavorites.module.css";
import { usePiecesSWR } from "@/states/usePiecesSWR";
import { usePiecesState } from "@/states/usePiecesState";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtFavorites() {
	const { pieces, isLoading, isError } = usePiecesSWR();
	const { artPiecesInfo } = usePiecesState();

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Failed to fetch!</h1>;

	const filteredPieces = pieces.filter(({ slug }) => artPiecesInfo.find((piece) => piece.slug === slug && piece.isFavorite));

	return (
		<>
			{filteredPieces.length === 0 ? (
				<h1>No favorites</h1>
			) : (
				<>
					<h1 className={styles.headline}>Favorites ({filteredPieces.length})</h1>
					<section className={styles.pieces}>
						{filteredPieces.map((piece) => (
							<article key={piece.slug} className={styles.piece}>
								<ArtPiecePreview {...piece} />
							</article>
						))}
					</section>
				</>
			)}
		</>
	);
}
