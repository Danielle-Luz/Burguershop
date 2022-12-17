import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iInputWrapperProps {
  theme: iTheme;
}

export const InputWrapperStyled = styled.div`
  position: relative;

  input {
    background-color: ${({theme}: iInputWrapperProps) => theme.colors.gray[3]};
    border-radius: ${({theme}: iInputWrapperProps) => theme.radius[1]};
    padding: 20.5px 15px;

    &:focus {
      background-color: white;
      outline: 2px solid black;

      & + label {
        background-color: white;
        border: 3px solid white;
        font-size: ${({theme}: iInputWrapperProps) => theme.fontSizes[5]};
        top: -10px;
      }
    }
  }

  label {
    color: ${({theme}: iInputWrapperProps) => theme.colors.gray[1]};
    font-size: ${({theme}: iInputWrapperProps) => theme.fontSizes[3]};
    left: 15px;
    top: 16px;
    transition: 0.5s;
    position: absolute;
  }
`