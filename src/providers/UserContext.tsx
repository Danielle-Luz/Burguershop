import { createContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { iLoginFormFields } from "../pages/Login";
import { iRegisterFormFields } from "../pages/Register";
import { api } from "../services/api";
import { toast } from 'react-toastify';

interface iUserProviederValues {}

export const UserContext = createContext({} as iUserProviederValues);

export function UserProvider() {
  const navigate = useNavigate();

  function registerUser(newUser: iRegisterFormFields) {
    try {
      api.post("/users", newUser);
      
      toast.success("Usuário registrado com sucesso");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  function login(user: iLoginFormFields) {}
  return (
    <UserContext.Provider value={{}}>
      <Outlet />
    </UserContext.Provider>
  );
}
