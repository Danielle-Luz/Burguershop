import { SearchInputStyled } from "./styles";
import searchIcon from "../../../assets/imgs/search.svg";

export function SearchInput() {
  return (
    <SearchInputStyled>
      <input type="text" placeholder="Digitar pesquisa" />
      <button>
        <img src={searchIcon} alt="ícone de busca" />
      </button>
    </SearchInputStyled>
  );
}