import { SearchInputStyled } from "./styles";
import searchIcon from "../../../assets/imgs/search.svg";
import { useEffect, useRef } from "react";

interface iSearchInputProps {
  toggleSearchBar: boolean;
  setToggleSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchInput({toggleSearchBar, setToggleSearchBar}: iSearchInputProps) {

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = "";
  }, [toggleSearchBar]);

  return (
    <SearchInputStyled>
      <input autoFocus={true} ref={inputRef} onBlur={() => setToggleSearchBar(false)} type="text" placeholder="Digitar pesquisa" />
      <button>
        <img src={searchIcon} alt="ícone de busca" />
      </button>
    </SearchInputStyled>
  );
}