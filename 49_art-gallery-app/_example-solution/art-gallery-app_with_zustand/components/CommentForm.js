import styled from "styled-components";
import { useArtPieceStore } from "../stores/artPieces";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: white;
  color: tomato;
  padding: 0.5rem 1rem 0.5rem 1rem;
  width: 100%;
  border-radius: 50px;
  transition: all 0.25s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 20px 20px 20px 0;
  resize: vertical;
`;

function CommentForm({ slug }) {
  const setComment = useArtPieceStore((state) => state.setComment);
  const onSubmitComment = (event) => {
    event.preventDefault();
    const newComment = {
      comment: event.target.elements.comment.value,
      date: new Date(),
      slug: slug,
    };
    setComment(newComment);
  };
  return (
    <Form onSubmit={onSubmitComment}>
      <Input type="text" name="comment" placeholder="comment here..." />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default CommentForm;
