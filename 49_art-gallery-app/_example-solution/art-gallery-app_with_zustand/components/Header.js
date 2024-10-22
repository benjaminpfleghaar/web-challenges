import styled from "styled-components";

export const StyledHeader = styled.header`
  mix-blend-mode: multiply;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 200vh;
  transform: translateY(-25%);
  overflow: hidden;
  z-index: -1;
  background-color: tomato;
`;

export const Spotlight = styled.p`
  cursor: pointer;
  width: auto;
  text-align: center;
  line-height: 0.8;
  font-size: 100vh;
  margin: 0;
  color: lightgrey;
`;

function Header({ piece }) {
  return (
    <StyledHeader>
      <Spotlight>{piece?.artist}</Spotlight>
    </StyledHeader>
  );
}

export default Header;
