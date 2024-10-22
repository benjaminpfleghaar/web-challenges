import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    color: black;
  }

  body {
    margin: 0;
    font-family: system-ui;
    text-align: center;
  }
  ul{
    display: grid;
grid-template-columns: repeat(3, 1fr);
  }
  li {
  list-style: none;
  padding: 30px;
  }
  button {
    border: none;
    background: transparent;
    z-index: 9;
    cursor: pointer;
  }
  a{
    text-decoration:none;
    font-weight: 900;
  }
  input {
    border-radius: 50px;
    padding: 10px;
    border: none;
  }
`;
