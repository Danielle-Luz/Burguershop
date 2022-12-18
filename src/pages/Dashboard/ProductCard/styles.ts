import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iProductCardProps {
  theme: iTheme;
}

export const ProductCardStyled = styled.li`
  border: 2px solid transparent;
  max-width: 300px;
  width: 100%;

  &:hover {
    border-color: ${({theme}: iProductCardProps) => theme.colors.brand.secondary[0]};

    button {
      background-color: ${({theme}: iProductCardProps) => theme.colors.brand.secondary[0]};
    }
  }

  div {
    align-items: center;
    background-color: ${({ theme }: iProductCardProps) => theme.colors.gray[3]};
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 125px;
      height: 125px;
      object-fit: contain;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    button {
      width: fit-content;
    }
  }
`;
