import { createContext, useState } from "react";
import { Outlet } from "react-router";
import { iProduct } from "../pages/Dashboard/ProductCard";
import { api } from "../services/api";

interface iCartProviderValues {
  productsList: iProduct[];
}

export const CartContext = createContext({} as iCartProviderValues);

export function CartProvider() {
  const [productsList, setProductsList] = useState([] as iProduct[]);

  async function getProductsList() {
    try {
      const foundProducts = await api.get("products");

      setProductsList(foundProducts.data);
    } catch(err) {

    }
  }
  return (
    <CartContext.Provider value={{productsList}}>
      <Outlet />
    </CartContext.Provider>
  );
}
