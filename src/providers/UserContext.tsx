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

interface iRequestError {
  response: {
    data: string;
  }
}

export const UserContext = createContext({} as iUserProviederValues);

export function UserProvider() {
  const navigate = useNavigate();

  async function registerUser(newUser: iRegisterFormFields) {
    try {
      await api.post("users", newUser);

      toast.success("Usuário registrado com sucesso");

      navigate("/user/login");
    } catch (err) {
      const error = err as iRequestError;

      if (error.response.data === "Email already exists") {
        toast.error("Email já cadastrado");
      } else {
        toast.error("Não foi possível fazer o cadastro");
      }
    }
  }

  async function login(user: iLoginFormFields) {
    try {
      const loggedUser = await api.post("login", user);
      
      localStorage.setItem("@token", loggedUser.data.accessToken);

      navigate("/dashboard");
    } catch (err) {
      const error = err as iRequestError;

      if (error.response.data === "Cannot find user" || error.response.data === "Incorrect password") {
        toast.error("Email ou senha incorretos");
      } else {
        toast.error("Não foi possível fazer o login");
      }
    }
  }

  return (
    <UserContext.Provider value={{registerUser, login}}>
      <Outlet />
    </UserContext.Provider>
  );
}
