"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Spotlight.module.css";
import { usePiecesSWR } from "@/states/usePiecesSWR";

export default function Spotlight() {
	const { pieces, isLoading, isError } = usePiecesSWR();

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Failed to fetch!</h1>;

	const randomIndex = Math.floor(Math.random() * pieces.length);
	const {
		slug,
		artist,
		name,
		imageSource,
		dimensions: { width, height },
	} = pieces[randomIndex];

	return (
		<>
			<h1 className={styles.headline}>Spotlight</h1>
			<section className={styles.pieces}>
				<Link href={`/${slug}`} title={name} className={styles.piece}>
					<Image src={imageSource} width={width} height={height} alt={name} />
				</Link>
			</section>
			<h3>{name}</h3>
			<p>{artist}</p>
		</>
	);
}
