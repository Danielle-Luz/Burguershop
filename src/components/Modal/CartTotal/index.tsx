import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";
import { ButtonStyled } from "../../Button/styles";
import { TextStyled } from "../../Texts/styles";
import { CartTotalStyled } from "./styles";

export function CartTotal() {
  const { removeAllProducts, sumCartProductsPrice } = useContext(CartContext);

  return (
    <CartTotalStyled>
      <div>
        <TextStyled tag="p" gray={0} weight={600}>
          Total
        </TextStyled>
        <TextStyled tag="p" gray={1} weight={600}>
          {sumCartProductsPrice().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </TextStyled>
      </div>
      <ButtonStyled
        onClick={() => removeAllProducts()}
        type="button"
        buttonStyle="gray"
      >
        Remover todos
      </ButtonStyled>
    </CartTotalStyled>
  );
}
