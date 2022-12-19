import { Routes as RoutesWrapper, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { CartProvider } from "../../providers/CartContext";
import { UserProvider } from "../../providers/UserContext";

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/user" element={<UserProvider />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<CartProvider />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </RoutesWrapper>
  );
}
