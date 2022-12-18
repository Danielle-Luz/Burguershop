import { useContext } from "react";
import { ButtonStyled } from "../../../components/Button/styles";
import { TextStyled, TitleStyled } from "../../../components/Texts/styles";
import { CartContext } from "../../../providers/CartContext";
import { ProductCardStyled } from "./styles";

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iProductCardProps {
  product: iProduct;
}

export function ProductCard({ product }: iProductCardProps) {
  const { addProductOnCart } = useContext(CartContext);

  const { name, category, price, img } = product;

  return (
    <ProductCardStyled>
      <div>
        <img src={img} alt={name} />
      </div>
      <article>
        <TitleStyled tag="h3">{name}</TitleStyled>
        <TextStyled tag="span" gray={1} weight={400}>
          {category}
        </TextStyled>
        <TextStyled tag="p" weight={600}>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </TextStyled>
        <ButtonStyled
          onClick={() => addProductOnCart(product)}
          type="button"
          buttonStyle="add"
        >
          Adicionar
        </ButtonStyled>
      </article>
    </ProductCardStyled>
  );
}
