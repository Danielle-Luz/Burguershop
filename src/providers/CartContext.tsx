import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { iProduct } from "../pages/Dashboard/ProductCard";
import { api } from "../services/api";

interface iCartProviderValues {
  productsList: iProduct[];
  addProductOnCart(addedProduct: iProduct): void;
}

interface iCartProduct extends iProduct {
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
          authorization: "Bearer " + localStorage.getItem("@token")
        }
      });

      setProductsList(foundProducts.data);
    } catch(err) {
    }
  }

  function addProductOnCart(addedProduct: iProduct) {
    const foundProductIndex = cart.findIndex(product => product.id === addedProduct.id);

    if(foundProductIndex != -1) {
      const newList = [...cart];

      newList[foundProductIndex].quantity += 1;

      setCart([...newList]);
    } else {
      setCart([...cart, {...addedProduct, quantity: 1}]);
    }
  }

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <CartContext.Provider value={{productsList, addProductOnCart}}>
      <Outlet />
    </CartContext.Provider>
  );
}
