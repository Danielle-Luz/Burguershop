import { TextStyled, TitleStyled } from "../Texts/styles";
import { ModalStyled } from "./styles";
import closeIcon from "../../assets/imgs/close.svg";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";

interface iModalProps {
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({setToggleModal}: iModalProps) {
  const { cart } = useContext(CartContext);

  return (
    <ModalStyled>
      <article>
        <header>
          <TitleStyled tag="h3">Carrinho de compras</TitleStyled>
          <button onClick={() => setToggleModal(false)}>
            <img src={closeIcon} alt="ícone de x" />
          </button>
        </header>
        <main>
          {cart.length === 0 ? (
            <div>
              <TitleStyled tag="h3">Sua sacola está vazia</TitleStyled>
              <TextStyled tag="p" gray={1} weight={400}>
                Adicione itens
              </TextStyled>
            </div>
          ) : (
            <ul>
              {
                cart.map(product => <CartProduct key={product.id} product={product} />)
              }
            </ul>
          )}
          {cart.length !== 0 && <CartTotal />}
        </main>
      </article>
    </ModalStyled>
  );
}
