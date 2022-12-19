import logo from "../../assets/imgs/logo.svg";
import bag from "../../assets/imgs/bag.svg";
import points from "../../assets/imgs/points.svg";

import { StyledSiteInfo } from "./styles";
import { TextStyled } from "../Texts/styles";

export function SiteInfo() {
  return (
    <StyledSiteInfo>
      <img src={logo} alt="logo" />
      <article>
        <div>
          <img src={bag} alt="ícone de sacola" />
        </div>
        <TextStyled tag="p" weight={400} gray={1}>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</TextStyled>
      </article>
      <img src={points} alt="" />
    </StyledSiteInfo>
  );
}