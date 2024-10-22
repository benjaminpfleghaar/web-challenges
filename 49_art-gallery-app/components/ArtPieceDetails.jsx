"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";
import { usePiecesSWR } from "@/libs/usePiecesSWR";
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
			<h1>{name}</h1>
			<hr />
			<Image src={imageSource} width={width} height={height} alt={name} style={{ height: "auto", maxWidth: "300px" }} />
			<section>
				{colors.map((color) => (
					<span key={color} style={{ backgroundColor: color, width: "60px", height: "60px", display: "inline-block" }}></span>
				))}
			</section>
			<ul>
				<li>{artist}</li>
				<li>{year}</li>
				<li>{genre}</li>
			</ul>
			<FavoriteButton slug={slug} />
			<hr />
			<Comments slug={slug} />
			<CommentForm slug={slug} />
			<hr />
			<button type="button" onClick={() => router.push("/")}>
				Back to all pieces
			</button>
		</>
	);
}
