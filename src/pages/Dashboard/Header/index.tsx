import { ContainerStyled } from "../styles";
import { HeaderStyled } from "./styles";
import logo from "../../../assets/imgs/logo.svg";

export function Header() {
  return ( 
    <HeaderStyled>
      <ContainerStyled>
        <img src={logo} alt="logo" />
        <div>
          
        </div>
      </ContainerStyled>
    </HeaderStyled>
  );
}
