import styled from "styled-components";
import { iTheme } from "../../styles/theme";

interface iModalStyledProps {
  theme: iTheme;
}

export const ModalStyled = styled.div`
  align-items: center;
  background-color: rgba(51, 51, 51, 0.5);
  display: flex;
  justify-content: center;
  height: 100%;
  position: fixed;
  width: 100%;
  padding: 10px;
  z-index: 1;
  
  & > article {
    border-radius: ${({theme}: iModalStyledProps) => theme.radius[1]};
    max-width: 500px;
    overflow: hidden;
    width: 100%;
  }

  header {
    align-items: center;
    background-color: ${({theme}: iModalStyledProps) => theme.colors.brand.secondary[0]};
    display: flex;
    justify-content: space-between;
    padding: 17px 20px;

    h3 {
      color: white;
    }

    button {
      background-color: transparent;
    }
  }

  main {
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
    min-height: 158px;
    padding: 20px;
    width: 100%;

    div {
      text-align: center;

      h3 {
        color: ${({theme}: iModalStyledProps) => theme.colors.gray[0]};
        margin-bottom: 10px;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    max-height: 300px;
    overflow-y: auto;
    padding-inline: 20px;
    width: 100%;
  }
`