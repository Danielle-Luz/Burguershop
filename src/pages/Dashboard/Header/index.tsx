import { ContainerStyled } from "../styles";
import { HeaderStyled } from "./styles";
import logo from "../../../assets/imgs/logo.svg";
import { SearchInput } from "../SearchInput";

export function Header() {
  return ( 
    <HeaderStyled>
      <ContainerStyled>
        <img src={logo} alt="logo" />
        <div>
          <SearchInput />
        </div>
      </ContainerStyled>
    </HeaderStyled>
  );
}
