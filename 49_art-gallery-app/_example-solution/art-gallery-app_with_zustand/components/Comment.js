import styled from "styled-components";

const StyledComment = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  color: #fff;
  margin: 0;
  padding: 1rem;
  border-radius: 20px 20px 0 20px;

  & span:last-child {
    font-size: 0.7rem;
    color: grey;
  }
`;

function Comment({ comment, date }) {
  return (
    <StyledComment key={date}>
      <span>{comment}</span>
      <span>{date}</span>
    </StyledComment>
  );
}

export default Comment;
