import styled from "styled-components";
import { iTheme, theme } from "../../../styles/theme";

interface iSearchInputStyledProps {
  theme: iTheme;
}

export const SearchInputStyled = styled.div`
  height: 60px;
  position: relative;
  width: 100%;
  
  @media (min-width: 700px) {
    max-width: 365px;
  }

  input {
    height: 100%;
    width: 100%;
    border-radius: ${({theme}: iSearchInputStyledProps) => theme.radius[1]};
    padding-left: 10px;
    padding-right: 80px;
    outline: 2px solid ${({theme: iSearchInputStyledProps}) => theme.colors.gray[2]};
  }

  input::placeholder {
    color: ${({ theme }: iSearchInputStyledProps) => theme.colors.gray[2] };
  }

  input:focus {
    outline-color: black;
  }

  button {
    background-color: ${({ theme }: iSearchInputStyledProps) => theme.colors.brand.secondary[0] };
    border-radius: ${({theme}: iSearchInputStyledProps) => theme.radius[1]};
    padding: 12px 20px;
    position: absolute;
    right: 10px;
    top: 10px;

    &:hover {
      background-color: ${({ theme }: iSearchInputStyledProps) => theme.colors.brand.secondary[1] };
    }
  }
`;
