import { Link } from "react-router-dom";
import styled from "styled-components";
import { iTheme } from "../../styles/theme";

interface iRegisterStyledProps {
  theme: iTheme;
}

export const RegisterStyled = styled.div`
  align-items: center;
  display: flex;
  gap: 146px;
  justify-content: center;
  padding: 20px;
  width: 100%;

  & > article {
    max-width: 452px;
    width: 100%;
  }
  
  & > article:nth-of-type(1) {
    display: none;
  }

  @media(min-width: 875px) {
    & > article:nth-of-type(1) {
      display: flex;
    }
  }

  article > div {
    display: flex;
    justify-content: space-between;
  }
`

export const LoginLinkStyled = styled(Link)`
    color: ${({theme}: iRegisterStyledProps) => theme.colors.gray[1]};
    font-size: ${({theme}: iRegisterStyledProps) => theme.fontSizes[5]};
    text-decoration: underline;

    &:hover {
      color: ${({theme}: iRegisterStyledProps) => theme.colors.brand.secondary[0]};
    }
`