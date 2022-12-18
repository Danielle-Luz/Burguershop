import { ContainerStyled } from "../styles";
import { HeaderStyled } from "./styles";
import logo from "../../../assets/imgs/logo.svg";
import searchIcon from "../../../assets/imgs/search-gray.svg";
import cartIcon from "../../../assets/imgs/cart.svg";
import quitIcon from "../../../assets/imgs/quit.svg";
import { SearchInput } from "../SearchInput";
import { useState } from "react";

export function Header() {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  return ( 
    <HeaderStyled toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar}>
      <ContainerStyled>
        <img src={logo} alt="logo" />
        <div>
          <SearchInput toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar} />
          <button className="search-button" onClick={() => setToggleSearchBar(true)}>
            <img src={searchIcon} alt="ícone de busca" />
          </button>
          <button>
            <img src={cartIcon} alt="ícone de carrinho" />
          </button>
          <button>
            <img src={quitIcon} alt="ícone de saída" />
          </button>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  );
}
