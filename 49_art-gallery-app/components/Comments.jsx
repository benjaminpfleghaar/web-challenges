"use client";

import styles from "./Comments.module.css";
import { usePiecesState } from "@/states/usePiecesState";

export default function Comments({ slug }) {
	const { artPiecesInfo } = usePiecesState();
	const { comments } = artPiecesInfo.find((piece) => piece.slug === slug) ?? { comments: [] };

	return (
		<>
			<h2 className={styles.headline}>Comments ({comments.length})</h2>
			<section className={styles.comments}>
				{comments.map(({ comment, date }) => (
					<section key={comment} className={styles.comment}>
						{comment}
						<br />
						<small>{date}</small>
					</section>
				))}
			</section>
		</>
	);
}
