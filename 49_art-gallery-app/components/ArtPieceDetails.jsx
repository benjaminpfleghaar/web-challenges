"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Comments from "@/components/Comments";
import styles from "./ArtPieceDetails.module.css";
import CommentForm from "@/components/CommentForm";
import { usePiecesSWR } from "@/states/usePiecesSWR";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPieceDetails({ slug }) {
	const router = useRouter();
	const { pieces, isLoading, isError } = usePiecesSWR();

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Failed to fetch!</h1>;

	const {
		artist,
		name,
		imageSource,
		year,
		genre,
		dimensions: { width, height },
		colors,
	} = pieces.find((piece) => piece.slug === slug);

	return (
		<>
			<h1 className={styles.headline}>{name}</h1>
			<section className={styles.piece}>
				<FavoriteButton slug={slug} />
				<Image src={imageSource} width={width} height={height} alt={name} />
			</section>
			<section className={styles.colors}>
				{colors.map((color) => (
					<span key={color} style={{ backgroundColor: color }}></span>
				))}
			</section>
			<section className={styles.details}>
				<h2>{artist}</h2>
				<p>
					{genre}, {year}
				</p>
			</section>
			<Comments slug={slug} />
			<CommentForm slug={slug} />
			<button type="button" onClick={() => router.push("/")} className={styles.button}>
				Back to all pieces
			</button>
		</>
	);
}
