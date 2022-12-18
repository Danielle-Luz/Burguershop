import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iProductCardProps {
  theme: iTheme;
}

export const ProductCardStyled = styled.li`
  border: 2px solid transparent;
  border-radius: ${({theme}: iProductCardProps) => theme.radius[0]};
  flex-shrink: 0;
  max-width: 300px;
  width: 100%;

  h3 {
    color: ${({theme}: iProductCardProps) => theme.colors.gray[0]};
  }

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
      height: fit-content;
      width: fit-content;
    }
  }
`;
