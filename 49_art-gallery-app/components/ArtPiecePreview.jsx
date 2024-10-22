import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPiecePreview({ slug, artist, name, imageSource, dimensions: { width, height } }) {
	return (
		<>
			<h3>{name}</h3>
			<Link href={`/${slug}`} title={name}>
				<Image src={imageSource} width={width} height={height} alt={name} style={{ height: "auto", maxWidth: "150px" }} />
			</Link>
			<p>{artist}</p>
			<FavoriteButton slug={slug} />
			<hr />
		</>
	);
}
