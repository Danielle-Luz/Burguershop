import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../providers/CartContext";
import { Header } from "./Header";
import { ProductCard } from "./ProductCard";
import { ProductsListWrapperStyled } from "./styles";

export function Dashboard() {
  const { productsList } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = localStorage.getItem("@token");

    if (!hasToken) {
      navigate("/user/login");
    }
  }, []);

  return (
    <>
      <Header />
      <ProductsListWrapperStyled>
        <ul>
          {productsList.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
      </ProductsListWrapperStyled>
    </>
  );
}
