import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    text-align: center;
  }

  input {
    border: none;
    outline: none;
  }
`