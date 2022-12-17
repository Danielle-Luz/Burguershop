import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iInputWrapperProps {
  theme: iTheme;
}

export const InputWrapperStyled = styled.div`
  input {
    background-color: ${({theme}: iInputWrapperProps) => theme.colors.gray[3]};
    border-radius: ${({theme}: iButtonStyledProps) => theme.radius[1]};
    padding: 20.5px 15px;

    &:focus {
      background-color: white;
      outline: 2px solid black;

      & + label {
        border: 2px solid white;
        font-size: ${({theme}: iInputWrapperProps) => theme.fontSizes[5]};
        transform: translateY(50px);
      }
    }
  }

  label {
    color: ${({theme}: iInputWrapperProps) => theme.colors.gray[1]};
    font-size: ${({theme}: iInputWrapperProps) => theme.fontSizes[3]};
    transform: translateY(-50px);
  }
`