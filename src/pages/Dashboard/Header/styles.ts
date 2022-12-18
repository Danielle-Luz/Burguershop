import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iHeaderStyledProps {
  theme: iTheme;
}

export const HeaderStyled = styled.header`
  align-self: flex-start;
  background-color: ${({theme}: iHeaderStyledProps) => theme.colors.gray[3]};
  position: sticky;
  top: 0;
  width: 100%;
  
  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 650px) {
    & > div {
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
