import { createContext, useEffect, useState } from "react";
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
      const foundProducts = await api.get("products", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("@token")
        }
      });

      console.log(foundProducts)

      setProductsList(foundProducts.data);
    } catch(err) {
    }
  }

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <CartContext.Provider value={{productsList}}>
      <Outlet />
    </CartContext.Provider>
  );
}
