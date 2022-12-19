import { CartContext, iCartProduct } from "../../../providers/CartContext";
import { TextStyled, TitleStyled } from "../../Texts/styles";
import { CartProductStyled } from "./styles";
import trash from "../../../assets/imgs/trash.svg";
import { useContext } from "react";

interface iCartProductProps {
  product: iCartProduct;
}

export function CartProduct({ product }: iCartProductProps) {
  const { addQuantity, removeProductFromCart } = useContext(CartContext);

  const { id, img, name, quantity } = product;

  return (
    <CartProductStyled>
      <div>
        <div className="img-wrapper">
          <img src={img} alt={name} />
        </div>
        <div>
          <TitleStyled tag="h3">{name}</TitleStyled>
          <article>
            <button onClick={() => addQuantity(id, "remove")}>-</button>
            <TextStyled tag="span" gray={0} weight={400}>
              {quantity}
            </TextStyled>
            <button onClick={() => addQuantity(id, "add")}>+</button>
          </article>
        </div>
      </div>
      <button onClick={() => removeProductFromCart(id)}>
        <img src={trash} alt="ícone de lixeira" />
      </button>
    </CartProductStyled>
  );
}
