"use client";

import Link from "next/link";
import Image from "next/image";
import { usePiecesSWR } from "@/libs/usePiecesSWR";

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
			<h1>Spotlight</h1>
			<hr />
			<h3>{name}</h3>
			<Link href={`/${slug}`} title={name}>
				<Image src={imageSource} width={width} height={height} alt={name} style={{ height: "auto", maxWidth: "150px" }} />
			</Link>
			<p>{artist}</p>
		</>
	);
}
