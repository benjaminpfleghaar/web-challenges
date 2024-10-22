import Spotlight from "../components/Spotlight";
import ArtPieces from "../components/ArtPieces";

export default function HomePage({ pieces }) {
  return (
    <>
      <Spotlight pieces={pieces} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
