import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { useArtPieceStore } from "../stores/artPieces";
import Spotlight from "./Header";
import StyledHeader from "./Header";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  colors,
}) {
  const ColorContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      ${colors
        ?.map(
          (color, index) => `${color} ${index * (100 / (colors.length - 1))}%`
        )
        .join(", ")}
    );
    filter: blur(100px);
    height: 100vh;
    width: 100vw;
    z-index: -1;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  `;
  const StyledImage = styled(Image)`
    object-fit: cover;
  `;

  const Wrapper = styled.div`
    margin-bottom: 20px;
  `;

  const Form = styled.form`
    gap: 20px;
    display: flex;
    flex-direction: column;
  `;

  const comments = useArtPieceStore((state) => state.comments).filter(
    (comment) => comment.slug === slug
  );

  return (
    <>
      <StyledHeader>
        <Spotlight>{artist}</Spotlight>
      </StyledHeader>
      <Wrapper>
        <h4>{title}</h4>
        <h3>{artist}</h3>
        <h3>{genre}</h3>
        <h3>{year}</h3>
      </Wrapper>
      <Container colors={colors}>
        <StyledImage
          src={image}
          alt={title}
          priority
          width={400}
          height={200}
        />
        <FavoriteButton slug={slug} />

        {comments.length > 0 && (
          <>
            <h2>Comments:</h2>
            {comments.map(({ comment, date }) => {
              return (
                <Comment
                  key={date.toLocaleString()}
                  comment={comment}
                  date={date.toLocaleString()}
                />
              );
            })}
          </>
        )}
        <CommentForm slug={slug} />
      </Container>
      <Link href="../">Go Back</Link>
      <ColorContainer />
    </>
  );
}
