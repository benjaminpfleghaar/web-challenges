"use client";

import getDate from "@/utils/getDate";
import styles from "./CommentForm.module.css";
import { usePiecesState } from "@/states/usePiecesState";

export default function CommentForm({ slug }) {
	const { artPiecesInfo, setArtPiecesInfo } = usePiecesState();

	function handleSubmit(e) {
		e.preventDefault();

		const data = new FormData(e.target);
		const comment = data.get("comment");

		if (artPiecesInfo.some((piece) => piece.slug === slug)) {
			setArtPiecesInfo(artPiecesInfo.map((piece) => (piece.slug === slug ? { ...piece, comments: [{ comment: comment, date: getDate() }, ...piece.comments] } : piece)));
		} else {
			setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: false, comments: [{ comment, date: getDate() }] }]);
		}

		e.target.reset();
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input type="text" name="comment" required className={styles.input} />
			<button type="submit" className={styles.button}>
				Send
			</button>
		</form>
	);
}
