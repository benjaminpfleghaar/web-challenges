import Link from "next/link";
import Image from "next/image";
import styles from "./ArtPiecePreview.module.css";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPiecePreview({ slug, artist, name, imageSource, dimensions: { width, height } }) {
	return (
		<>
			<section className={styles.piece}>
				<FavoriteButton slug={slug} />
				<Link href={`/${slug}`} title={name}>
					<Image src={imageSource} width={width} height={height} alt={name} />
				</Link>
			</section>
			<h3>{name}</h3>
			<p>{artist}</p>
		</>
	);
}
