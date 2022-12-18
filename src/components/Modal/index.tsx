import { TextStyled, TitleStyled } from "../Texts/styles";
import { ModalStyled } from "./styles";
import closeIcon from "../../assets/imgs/close.svg";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

export function Modal() {
  const { cart } = useContext(CartContext);

  return (
    <ModalStyled>
      <article>
        <header>
          <TitleStyled tag="h3">Carrinho de compras</TitleStyled>
          <button>
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
              <article></article>
            </ul>
          )}
        </main>
      </article>
    </ModalStyled>
  );
}
