import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { iProduct } from "../pages/Dashboard/ProductCard";
import { api } from "../services/api";

interface iCartProviderValues {
  productsList: iProduct[];
  addProductOnCart(addedProduct: iProduct): void;
  cart: iCartProduct[];
  addQuantity(productId: number, operation: "add" | "remove"): void;
  removeProductFromCart(removedProductId: number): void;
  removeAllProducts(): void;
}

export interface iCartProduct extends iProduct {
  quantity: number;
}

export const CartContext = createContext({} as iCartProviderValues);

export function CartProvider() {
  const [productsList, setProductsList] = useState([] as iProduct[]);
  const [cart, setCart] = useState([] as iCartProduct[]);

  async function getProductsList() {
    try {
      const foundProducts = await api.get("products", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("@token"),
        },
      });

      setProductsList(foundProducts.data);
    } catch (err) {}
  }

  function addProductOnCart(addedProduct: iProduct) {
    const foundProductIndex = cart.findIndex(
      (product) => product.id === addedProduct.id
    );

    if (foundProductIndex !== -1) {
      const newList = [...cart];

      newList[foundProductIndex].quantity += 1;

      setCart([...newList]);
    } else {
      setCart([...cart, { ...addedProduct, quantity: 1 }]);
    }
  }

  function addQuantity(productId: number, operation: "add" | "remove") {
    const foundProductIndex = cart.findIndex(
      (product) => product.id === productId
    );

    const newList = [...cart];

    if (operation === "add") {
      newList[foundProductIndex].quantity += 1;
    } else if (newList[foundProductIndex].quantity > 1) {
      newList[foundProductIndex].quantity -= 1;
    }

    setCart([...newList]);
  }

  function removeProductFromCart(removedProductId: number) {
    const newList = cart.filter((product) => product.id != removedProductId);

    setCart([...newList]);
  }
  
  function removeAllProducts() {
    setCart([]);
  }

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <CartContext.Provider
      value={{
        productsList,
        addProductOnCart,
        cart,
        addQuantity,
        removeProductFromCart,
        removeAllProducts
      }}
    >
      <Outlet />
    </CartContext.Provider>
  );
}
