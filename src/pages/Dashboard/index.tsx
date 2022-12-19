import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from "../../components/Modal";
import { CartContext } from "../../providers/CartContext";
import { Header } from "./Header";
import { ProductCard } from "./ProductCard";
import { ProductsListWrapperStyled } from "./styles";

export function Dashboard() {
  const [toggleModal, setToggleModal] = useState(false);
  const { searchedProducts } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = localStorage.getItem("@token");

    if (!hasToken) {
      navigate("/user/login");
    }
  }, []);

  return (
    <>
      {
        toggleModal && <Modal setToggleModal={setToggleModal} />
      }
      <Header toggleModal={toggleModal} setToggleModal={setToggleModal} />
      <ProductsListWrapperStyled>
        <ul>
          {searchedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
      </ProductsListWrapperStyled>
    </>
  );
}
