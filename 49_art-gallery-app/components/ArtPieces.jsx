"use client";

import styles from "./ArtPieces.module.css";
import { usePiecesSWR } from "@/states/usePiecesSWR";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces() {
	const { pieces, isLoading, isError } = usePiecesSWR();

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Failed to fetch!</h1>;

	return (
		<>
			<h1 className={styles.headline}>Art pieces</h1>
			<section className={styles.pieces}>
				{pieces.map((piece) => (
					<article key={piece.slug} className={styles.piece}>
						<ArtPiecePreview {...piece} />
					</article>
				))}
			</section>
		</>
	);
}
