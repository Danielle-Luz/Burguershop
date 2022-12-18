import { createContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { iLoginFormFields } from "../pages/Login";
import { iRegisterFormFields } from "../pages/Register";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface iUserProviederValues {
  registerUser(newUser: iRegisterFormFields): void;
  login(user: iLoginFormFields): void;
}

export const UserContext = createContext({} as iUserProviederValues);

export function UserProvider() {
  const navigate = useNavigate();

  async function registerUser(newUser: iRegisterFormFields) {
    try {
      await api.post("users", newUser);

      toast.success("Usuário registrado com sucesso");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  async function login(user: iLoginFormFields) {
    try {
      const loggedUser = await api.post("login", user);
      
      localStorage.setItem("@token", loggedUser.data.accessToken);

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider value={{registerUser, login}}>
      <Outlet />
    </UserContext.Provider>
  );
}
