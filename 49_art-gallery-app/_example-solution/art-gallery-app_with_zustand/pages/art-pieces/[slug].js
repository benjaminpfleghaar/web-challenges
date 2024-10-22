import ArtPieceDetails from "../../components/ArtPieceDetails";
import Router from "next/router";

export default function Detail({ pieces }) {
  const { slug } = Router.query;
  const selectedArtPiece = pieces?.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      image={selectedArtPiece?.imageSource}
      title={selectedArtPiece?.name}
      artist={selectedArtPiece?.artist}
      year={selectedArtPiece?.year}
      genre={selectedArtPiece?.genre}
      slug={selectedArtPiece?.slug}
      isFavorite={selectedArtPiece?.isFavorite}
      colors={selectedArtPiece?.colors}
    />
  );
}
