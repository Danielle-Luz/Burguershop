import logo from "../../assets/imgs/logo.svg";
import bag from "../../assets/imgs/bag.svg";

import { StyledSiteInfo } from "./styles";

export function SiteInfo() {
  return (
    <StyledSiteInfo>
      <img src={logo} alt="logo" />
      <article>
        <img src={bag} alt="ícone de sacola" />
        <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
      </article>
    </StyledSiteInfo>
  );
}