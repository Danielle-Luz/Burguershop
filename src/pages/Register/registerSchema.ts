import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório").max(120, "O nome deve ter no máximo 120 caracteres").min(3, "O nome deve ter no mínimo 3 caracteres").matches(/^([^0-9]+)$/, "Não insira números no nome"),
  email: yup.string().required("O email é obrigatório").email("Digite um email válido"),
  password: yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no mínimo 6 caracteres").matches(/[a-zA-Z]/, "A senha deve ter pelo menos uma letra").matches(/[0-9]/, "A senha deve ter pelo menos um número").matches(/[!@#$%^&*\\)(+=._-]+/, "A senha deve ter pelo menos um caractere especial"),
  confirmPassword: yup.string().required("Confirme a sua senha").oneOf([yup.ref("password")], "As senhas não são iguais")
});