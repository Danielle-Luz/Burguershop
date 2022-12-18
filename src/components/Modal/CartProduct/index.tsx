import { iCartProduct } from "../../../providers/CartContext";
import { TitleStyled } from "../../Texts/styles";
import { CartProductStyled } from "./styles";
import trash from "../../../assets/imgs/trash.svg";

interface iCartProductProps {
  product: iCartProduct;
}

export function CartProduct({product}: iCartProductProps ) {
  const {id, img, name, quantity} = product;
  
  return (
    <CartProductStyled>
      <div>
        <div>
          <img src={img} alt={name} />
        </div>
        <div>
          <TitleStyled tag="h3">{name}</TitleStyled>
          <article>
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
          </article>
        </div>
        <button>
          <img src={trash} alt="ícone de lixeira" />
        </button>
      </div>
    </CartProductStyled>
  );
}