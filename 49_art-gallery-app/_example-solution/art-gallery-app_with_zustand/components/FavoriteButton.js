import { useArtPieceStore } from "../stores/artPieces";

export default function FavoriteButton({ slug }) {
  const setFavorite = useArtPieceStore((state) => state.setFavorite);
  const isFavorite = useArtPieceStore((state) => state.isFavorite).includes(
    slug
  );

  return (
    <>
      <button onClick={() => setFavorite(slug)} className="fav">
        {isFavorite ? <h1>🤍</h1> : <h1>🖤</h1>}
      </button>
    </>
  );
}
