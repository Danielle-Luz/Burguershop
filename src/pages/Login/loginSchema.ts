import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Insira um email"),
  password: yup.string().required("Insira uma senha")
});