import { ContainerStyled } from "../styles";
import { HeaderStyled } from "./styles";
import logo from "../../../assets/imgs/logo.svg";
import searchIcon from "../../../assets/imgs/search-gray.svg";
import cartIcon from "../../../assets/imgs/cart.svg";
import quitIcon from "../../../assets/imgs/quit.svg";
import { SearchInput } from "../SearchInput";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../../providers/CartContext";

interface iHeaderProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({toggleModal, setToggleModal}: iHeaderProps) {
  const navigate = useNavigate();
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const {cart} = useContext(CartContext);

  const totalProductsOnCart = cart.reduce((total, product) => total += product.quantity, 0)

  return ( 
    <HeaderStyled toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar}>
      <ContainerStyled>
        <img src={logo} alt="logo" />
        <div>
          <SearchInput toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar} />
          <button className="search-button" onClick={() => setToggleSearchBar(true)}>
            <img src={searchIcon} alt="ícone de busca" />
          </button>
          <button onClick={() => setToggleModal(true)}>
            <span>{totalProductsOnCart}</span>
            <img src={cartIcon} alt="ícone de carrinho" />
          </button>
          <button onClick={() => navigate("/user/login")}>
            <img src={quitIcon} alt="ícone de saída" />
          </button>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  );
}
