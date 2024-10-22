import Link from "next/link";
import styled from "styled-components";

export default function Nav() {
  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 80px 80px;
    text-align: left;
    padding: 0 10px;
    a {
      text-align: center;
    }
  `;
  return (
    <>
      <Nav>
        <p>Art Gallery With Zustand</p>
        <Link href="../">Home</Link> <Link href="../favorites">Favorites</Link>
      </Nav>
    </>
  );
}
