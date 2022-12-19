import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface CartTotalStyledProps {
  theme: iTheme;
}

export const CartTotalStyled = styled.article`
  align-items: center;
  border-top: 2px solid ${({theme}: CartTotalStyledProps) => theme.colors.gray[2]};
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 15px;
  width: 100%;
  
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`