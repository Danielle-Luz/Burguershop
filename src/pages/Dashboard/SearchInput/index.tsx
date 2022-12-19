import { SearchInputStyled } from "./styles";
import searchIcon from "../../../assets/imgs/search.svg";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../../providers/CartContext";
import { useForm } from "react-hook-form";

interface iSearchInputProps {
  toggleSearchBar: boolean;
  setToggleSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iSearchFormFields {
  searchedTerm: string;
}

export function SearchInput({toggleSearchBar, setToggleSearchBar}: iSearchInputProps) {
  const {searchProducts} = useContext(CartContext);

  const {register, handleSubmit, setFocus, reset} = useForm<iSearchFormFields>();

  const formRef = useRef() as React.RefObject<HTMLFormElement>;

  useEffect(() => {
    if(toggleSearchBar) {
      setFocus("searchedTerm");
      reset();
    }
  }, [toggleSearchBar]);


  useEffect(() => {
    document.addEventListener("click", (event: MouseEvent) => {
      const hasHeaderAsAncestral = event.composedPath().find(element => {
        const actualElement = element as HTMLElement;

        return actualElement.localName === "header";
      });

      if(!hasHeaderAsAncestral) {
        setToggleSearchBar(false)
      }
    });
  }, []);

  return (
    <SearchInputStyled ref={formRef} onSubmit={handleSubmit((data) => console.log(data))}>
      <input type="text" placeholder="Digitar pesquisa" {...register("searchedTerm")} />
      <button>
        <img src={searchIcon} alt="ícone de busca" />
      </button>
    </SearchInputStyled>
  );
}