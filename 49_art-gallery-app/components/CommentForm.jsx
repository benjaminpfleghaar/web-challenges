"use client";

import getDate from "@/utils/getDate";
import styles from "./CommentForm.module.css";
import { usePiecesState } from "@/states/usePiecesState";

export default function CommentForm({ slug }) {
	const { artPiecesInfo, addComment } = usePiecesState();

	function handleSubmit(e) {
		e.preventDefault();

		const data = new FormData(e.target);
		const comment = data.get("comment");

		addComment(slug, { comment: comment, date: getDate() });

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
