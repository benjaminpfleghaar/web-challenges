import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useState } from "react";
import Link from "next/link";

export const ImageCaption = styled.figcaption`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  bottom: 0;
  font-weight: 900;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 40px;
  p {
    font-size: 5vw;
    font-weight: 400;
  }
`;
const SpotlightContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  aspect-ratio: 16 / 9;
  pointer-events: none;
  z-index: 99;
  /* transition: border 0.2s ease-in-out;
  ${ImageCaption}:hover & {
    border: solid 5px tomato;
  } */
`;
const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: -2;
  opacity: 0;
  transition: all 1s ease-in-out;
  filter: grayscale(1);
  transform: rotate(0deg);
  ${ImageCaption}:hover & {
    opacity: 1;
    transform: rotate(360deg);
  }
`;

const BackgroundBlurContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

const BackgroundBlur = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0) grayscale(0) invert(0);
  opacity: 0;
  transition: backdrop-filter 1s ease-in-out, opacity 1s ease-in-out;
  ${ImageCaption}:hover & {
    backdrop-filter: blur(10px) grayscale(1) invert(1);
    opacity: 1;
  }
`;

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <ImageWrapper key={slug}>
      <ImageCaption>
        <SpotlightContainer>
          <StyledImage src={image} fill priority alt={title}></StyledImage>
        </SpotlightContainer>

        <BackgroundBlurContainer>
          <BackgroundBlur />
        </BackgroundBlurContainer>
        <Link href={`art-pieces/${slug}`}>
          <p>{title}</p>
          <p>{artist}</p>
        </Link>
      </ImageCaption>
      <FavoriteButton slug={slug} />
    </ImageWrapper>
  );
}
