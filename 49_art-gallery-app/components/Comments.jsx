"use client";

import { Fragment } from "react";
import { usePiecesState } from "@/libs/usePiecesState";

export default function Comments({ slug }) {
	const { artPiecesInfo } = usePiecesState();
	const { comments } = artPiecesInfo.find((piece) => piece.slug === slug) ?? { comments: [] };

	return (
		<>
			<h2>Comments ({comments.length})</h2>
			<hr />
			{comments.length === 0 ? (
				<h3>No comments</h3>
			) : (
				comments.map(({ comment, date }) => (
					<Fragment key={comment}>
						<p>
							{comment}
							<br />
							<small>{date}</small>
						</p>
						<hr />
					</Fragment>
				))
			)}
		</>
	);
}
