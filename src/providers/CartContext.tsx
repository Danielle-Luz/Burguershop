import { createContext } from "react";
import { Outlet } from "react-router";

interface iCartProviderValues {}

export const CartContext = createContext({} as iCartProviderValues);

export function CartProvider() {
  return (
    <CartContext.Provider value={{}}>
      <Outlet />
    </CartContext.Provider>
  );
}
