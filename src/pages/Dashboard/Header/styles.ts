import styled from "styled-components";
import { iTheme } from "../../../styles/theme";

interface iHeaderStyledProps {
  theme: iTheme;
  toggleSearchBar: boolean;
  setToggleSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
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

    & > img {
      width: 150px;
      display: ${({toggleSearchBar}) => toggleSearchBar ? "none" : "block"};
    }
  }

  & > div > div {
    align-items: center;
    display: flex;
    gap: 23px;
    width: ${({toggleSearchBar}) => toggleSearchBar ? "100%" : "unset"};

    & > button {
      background-color: transparent;
      display: ${({toggleSearchBar}) => toggleSearchBar ? "none" : "block"};
      position: relative;

      span {
        background-color: ${({theme}: iHeaderStyledProps) => theme.colors.brand.secondary[0]};
        border-radius: ${({theme}: iHeaderStyledProps) => theme.radius[0]};
        color: white;
        font-weight: 600;
        padding: 5px;
        position: absolute;
        top: -18px;
        right: -10px;
      }
    }
  }

  & > div > div > form {
    display: ${({toggleSearchBar}) => toggleSearchBar ? "block" : "none"};
  }

  @media (min-width: 700px) {
    .search-button {
      display: none;
    }

    & > div > div > form {
      display: block;
    }
  }
`;
