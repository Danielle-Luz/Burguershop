import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iHeaderStyledProps {
  theme: iTheme;
}

export const HeaderStyled = styled.header`
  align-self: flex-start;
  background-color: ${({theme}: iHeaderStyledProps) => theme.colors.gray[3]};
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
`;
