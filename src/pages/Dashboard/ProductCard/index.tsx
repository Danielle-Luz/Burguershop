import { ButtonStyled } from "../../../components/Button/styles";
import { TextStyled, TitleStyled } from "../../../components/Texts/styles";
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

export function ProductCard({product:{id, name, category, price, img}}: iProductCardProps) {
  return (
    <ProductCardStyled>
      <div>
        <img src={img} alt={name} />
      </div>
      <article>
        <TitleStyled tag="h2">{name}</TitleStyled>
        <TextStyled tag="span" gray={1} weight={400}>{category}</TextStyled>
        <TextStyled tag="p" weight={600}>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</TextStyled>
        <ButtonStyled type="button" buttonStyle="add">Adicionar</ButtonStyled>
      </article>
    </ProductCardStyled>
  );
}