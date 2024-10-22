import { useArtPieceStore } from "../../stores/artPieces";
import ArtPiecesPreview from "../../components/ArtPiecesPreview";
import Spotlight from "../../components/Spotlight";
import styled from "styled-components";

export default function Favorites() {
  const pieces = useArtPieceStore((state) => state.pieces);
  const isFavorite = useArtPieceStore((state) => state.isFavorite);
  const favoritePieces = pieces.filter((piece) =>
    isFavorite.includes(piece.slug)
  );
  const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 35vh;
    grid-gap: 20px;
    width: 100vw;
    padding-block-end: calc(3rem + 12px);
  `;
  return (
    <>
      <Spotlight pieces={pieces} />
      <ImageGrid>
        {favoritePieces.length === 0 && (
          <aside style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            <h1>There are no favorites yet!</h1>
          </aside>
        )}
        {favoritePieces.map((piece) => {
          return (
            <ArtPiecesPreview
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
    </>
  );
}
