import ArtPiecePreview from "./ArtPiecesPreview.js";
import styled from "styled-components";
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100vw;
`;

export default function ArtPieces({ pieces }) {
  if (!pieces) {
    return null;
  }
  return (
    <ImageGrid>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={piece.isFavorite}
            slug={piece.slug}
          />
        );
      })}
    </ImageGrid>
  );
}
