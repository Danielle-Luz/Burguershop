import styled from "styled-components";

export const RegisterStyled = styled.article`
  display: flex;
  gap: 146px;
  
  & > article:nth-of-type(1) {
    display: none;
  }

  @media(min-width: 875px) {
    & > article:nth-of-type(1) {
      display: block;
    }
  }
`