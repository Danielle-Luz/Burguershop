import { ButtonStyled } from "../../components/Button/styles";
import { InputWrapper } from "../../components/FormUser/InputWrapper";
import { FormUserStyled } from "../../components/FormUser/styles";
import { SiteInfo } from "../../components/SiteInfo";
import { TextStyled, TitleStyled } from "../../components/Texts/styles";
import { LoginStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

export interface iLoginFormFields {
  email: "string";
  password: "string";
}

export function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm<iLoginFormFields>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema)
  })

  return (
    <LoginStyled>
      <SiteInfo />
      <FormUserStyled>
        <TitleStyled tag="h3">Login</TitleStyled>
        <form noValidate>
          <InputWrapper label="Email" type="email" register={register("email")} error={errors["email"]} />
          <InputWrapper label="Senha" type="password" register={register("password")} error={errors["password"]} />
          <ButtonStyled type="button" buttonStyle="brand">Logar</ButtonStyled>
          <TextStyled tag="p" gray={1} weight={400}>Crie sua conta para saborear muitas delícias e matar sua fome!</TextStyled>
          <ButtonStyled type="button" buttonStyle="gray" to="/user/register">Cadastrar</ButtonStyled>
        </form>
      </FormUserStyled>
    </LoginStyled>
  );
}