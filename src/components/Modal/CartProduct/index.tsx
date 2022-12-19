import { iCartProduct } from "../../../providers/CartContext";
import { TextStyled, TitleStyled } from "../../Texts/styles";
import { CartProductStyled } from "./styles";
import trash from "../../../assets/imgs/trash.svg";

interface iCartProductProps {
  product: iCartProduct;
}

export function CartProduct({ product }: iCartProductProps) {
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
            <button>-</button>
            <TextStyled tag="span" gray={0} weight={400}>{quantity}</TextStyled>
            <button>+</button>
          </article>
        </div>
      </div>
      <button>
        <img src={trash} alt="ícone de lixeira" />
      </button>
    </CartProductStyled>
  );
}
