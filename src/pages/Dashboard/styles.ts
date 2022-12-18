import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 1368px;
  padding: 26px 16px;
  width: 100%;

  @media (min-width: 700px) {
    padding: 10px 16px;
  }
`

export const ProductsListWrapperStyled = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: none;
  padding: 26px 0 26px 16px;
  width: 100%;

  @media (min-width: 700px) {
    flex-wrap: wrap;
    max-width: 1368px;
    padding: 26px 16px;
  }
`