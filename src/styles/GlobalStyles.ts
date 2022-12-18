import { createGlobalStyle } from "styled-components";
import { iTheme } from "./theme";

interface iGlobalStylesProps {
  theme: iTheme;
}

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
    font-size: ${({theme}: iGlobalStylesProps) => theme.fontSizes[3]};
    outline: none;
  }

  #root {
    position: relative;
    width: 100%;
  }
`