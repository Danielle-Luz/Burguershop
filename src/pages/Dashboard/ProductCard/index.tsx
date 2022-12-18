import { ProductCardStyled } from "./styles";

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export function ProductCard({id, name, category, price, img}: iProduct) {
  return (
    <ProductCardStyled>
      
    </ProductCardStyled>
  );
}