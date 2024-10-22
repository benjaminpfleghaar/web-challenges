"use client";

import { usePiecesSWR } from "@/libs/usePiecesSWR";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces() {
	const { pieces, isLoading, isError } = usePiecesSWR();

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Failed to fetch!</h1>;

	return (
		<>
			<h1>Art pieces</h1>
			<hr />
			{pieces.map((piece) => (
				<section key={piece.slug}>
					<ArtPiecePreview {...piece} />
				</section>
			))}
		</>
	);
}
