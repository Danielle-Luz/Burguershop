import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iCartProductStyledProps {
  theme: iTheme;
}


export const CartProductStyled = styled.li`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  .img-wrapper {
    align-items: center;
    background-color: ${({ theme }: iCartProductStyledProps) => theme.colors.gray[3]};
    border-radius: ${({theme}: iCartProductStyledProps) => theme.radius[1]};
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 14px;

    img {
      object-fit: contain;
      height: 100%;
      width: 55px;
    }
  }

  & > div {
    display: flex;
    gap: 10px;
    height: 83px;
  }

  & > div > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`