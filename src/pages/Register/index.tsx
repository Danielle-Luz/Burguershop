import { ButtonStyled } from "../../components/Button/styles";
import { InputWrapper } from "../../components/FormUser/InputWrapper";
import { FormUserStyled } from "../../components/FormUser/styles";
import { SiteInfo } from "../../components/SiteInfo";
import { TitleStyled } from "../../components/Texts/styles";
import { LoginLinkStyled, RegisterStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";

interface iRegisterFormFields {
  name: "string";
  email: "string";
  password: "string";
  confirmPassword: "string";
}

export function Register() {
  const {register, handleSubmit, formState:{errors}} = useForm<iRegisterFormFields>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema)
  });

  return (
  <RegisterStyled>
      <SiteInfo />
      <FormUserStyled>
        <div>
          <TitleStyled tag="h3">Cadastro</TitleStyled>
          <LoginLinkStyled to="/login">Retornar para o login</LoginLinkStyled>
        </div>
        <form noValidate>
          <InputWrapper label="Nome" type="text" register={register("name")} />
          <InputWrapper label="Email" type="email" register={register("email")} />
          <InputWrapper label="Senha" type="password" register={register("password")} />
          <InputWrapper label="Confirmar senha" type="password" register={register("confirmPassword")} />
          <ButtonStyled type="button" buttonStyle="gray">Cadastrar</ButtonStyled>
        </form>
      </FormUserStyled>
    </RegisterStyled>
  );
}