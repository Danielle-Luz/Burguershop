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
    transition: background-color 0.5s;
  }

  input {
    border: none;
    outline: none;
  }

  #root {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
  }
`