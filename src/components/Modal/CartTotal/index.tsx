import { ButtonStyled } from "../../Button/styles";
import { TextStyled } from "../../Texts/styles";
import { CartTotalStyled } from "./styles";

export function CartTotal() {
  return (
    <CartTotalStyled>
      <div>
        <TextStyled tag="p" gray={0} weight={600}>Total</TextStyled>
        <TextStyled tag="p" gray={1} weight={600}>Total</TextStyled>
      </div>
      <ButtonStyled type="button" buttonStyle="gray">Remover todos</ButtonStyled>
    </CartTotalStyled>
  );
}