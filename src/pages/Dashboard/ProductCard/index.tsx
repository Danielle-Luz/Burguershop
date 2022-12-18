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

    </ProductCardStyled>
  );
}