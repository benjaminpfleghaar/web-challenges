import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import Header from "./Header";
import Link from "next/link";

export default function Spotlight({ pieces }) {
  const [piece, setPiece] = useState([]);

  useEffect(() => {
    setPiece(pieces[Math.floor(Math.random() * pieces.length)]);
  }, [pieces]);

  const StyledWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const StyledHeader = styled.header`
    position: absolute;
    font-weight: 900;
    text-transform: uppercase;
    left: 0;
    width: 100%;
    p,
    h1 {
      color: lightgrey;
    }
  `;

  const StyledImage = styled(Image)`
    object-fit: cover;
    height: 75vh;
    width: 100vw;
    transition: all 1s;
    filter: grayscale(1);
    z-index: -2;
  `;

  if (!piece || !piece.name || !piece.artist) {
    return null;
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <Link href={`art-pieces/${piece.slug}`}>
          <h1>{piece.artist}</h1>
          <p> {piece.name}</p>
        </Link>
        <FavoriteButton slug={piece?.slug} />
      </StyledHeader>
      <Header piece={piece} />
      <StyledImage
        src={piece?.imageSource}
        alt={piece?.name}
        priority
        sizes="100vw, 400px"
        width={800}
        height={800}
      />
    </StyledWrapper>
  );
}
