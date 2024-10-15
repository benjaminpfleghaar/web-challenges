import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
	return <StyledBox $isBlack={isBlack}></StyledBox>;
}

const StyledBox = styled.div`
	width: 100px;
	margin: 2rem;
	height: 100px;
	background-color: ${({ $isBlack }) => ($isBlack ? "red" : "black")};
`;
