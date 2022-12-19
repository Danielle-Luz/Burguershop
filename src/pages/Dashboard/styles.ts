import styled from "styled-components";
import { iTheme } from "../../styles/theme";

interface iProductsListWrapperStyled {
  theme: iTheme;
}

export const ContainerStyled = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 26px 16px;
  width: 100%;

  @media (min-width: 700px) {
    padding: 10px 16px;
  }
`

export const ProductsListWrapperStyled = styled.main`
  max-width: none;
  margin: 0 auto;
  padding: 26px 0 26px 16px;
  width: 100%;

  ul {
    display: flex;
    gap: 30px;
    overflow-x: auto;
    list-style: none;
    padding: 10px 0;
    width: 100%;
  }

  ul::-webkit-scrollbar {
    height: 10px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: iProductsListWrapperStyled) => theme.colors.gray[0]};
    border-radius: ${({theme}: iProductsListWrapperStyled) => theme.radius[0]};
  }

  ul::-webkit-scrollbar-track {
    background-color: ${({ theme }: iProductsListWrapperStyled) => theme.colors.gray[2]};
  }

  @media (min-width: 700px) {
    ul {
      justify-content: center;
      flex-wrap: wrap;
    }

    max-width: 1368px;
    padding: 26px 16px;
  }
`

export const CenterContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`