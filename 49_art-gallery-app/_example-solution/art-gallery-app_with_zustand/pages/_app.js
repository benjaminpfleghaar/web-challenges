import GlobalStyle from "../styles";
import useSWR from "swr";
import { useArtPieceStore } from "../stores/artPieces";
import { useEffect } from "react";
import Nav from "../components/Nav";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const setData = useArtPieceStore((state) => state.setData);
  const pieces = useArtPieceStore((state) => state.pieces);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data, setData]);

  if (error) return;
  if (!data || !pieces) return;
  return (
    <>
      <Nav />
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
