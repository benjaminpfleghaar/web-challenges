"use client";

import Image from "next/image";
import star from "@/public/star.svg";
import styles from "./FavoriteButton.module.css";
import starFilled from "@/public/star-filled.svg";
import { usePiecesState } from "@/states/usePiecesState";

export default function FavoriteButton({ slug }) {
	const { artPiecesInfo, toggleFavorite } = usePiecesState();
	const { isFavorite } = artPiecesInfo.find((piece) => piece.slug === slug) ?? { isFavorite: false };

	return (
		<button type="button" onClick={() => toggleFavorite(slug)} className={`${styles.button} ${isFavorite ? styles.button_favorite : ""}`}>
			{isFavorite ? <Image src={starFilled} width={20} height={20} alt="Remove from favorites" /> : <Image src={star} width={20} height={20} alt="Add to favorites" />}
		</button>
	);
}
