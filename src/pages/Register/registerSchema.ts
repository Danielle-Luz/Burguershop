import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Insira um nome").max(120, "O nome deve ter no máximo 120 caracteres").min(3, "O nome deve ter no mínimo 3 caracteres").matches(/^([^0-9]+)$/, "Não insira números no nome"),
  email: yup.string().required("Insira um email").email("Digite um email válido"),
  password: yup.string().required("Insira uma senha").min(6, "A senha deve ter no mínimo 8 caracteres").matches(/[a-zA-Z]/, "A senha deve ter pelo menos uma letra").matches(/[0-9]/, "A senha deve ter pelo menos um número").matches(/[!@#$%^&*\\)(+=._-]+/, "A senha deve ter pelo menos um caractere especial"),
  confirmPassword: yup.string().required("Confirme a sua senha").oneOf([yup.ref("password")], "As senhas não são iguais")
});