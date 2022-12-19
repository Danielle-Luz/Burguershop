import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("O email é obrigatório").email("Insira um email válido"),
  password: yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no mínimo 6 caracteres")
});