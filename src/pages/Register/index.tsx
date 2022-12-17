import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/styles";
import { InputWrapper } from "../../components/FormUser/InputWrapper";
import { FormUserStyled } from "../../components/FormUser/styles";
import { SiteInfo } from "../../components/SiteInfo";
import { TitleStyled } from "../../components/Texts/styles";
import { Login } from "../Login";
import { LoginLinkStyled, RegisterStyled } from "./styles";

export function Register() {
  return (
  <RegisterStyled>
      <SiteInfo />
      <FormUserStyled>
        <div>
          <TitleStyled tag="h3">Cadastro</TitleStyled>
          <LoginLinkStyled to="/login">Retornar para o login</LoginLinkStyled>
        </div>
        <form>
          <InputWrapper label="Email" type="email" />
          <InputWrapper label="Senha" type="password" />
          <ButtonStyled type="button" buttonStyle="gray">Cadastrar</ButtonStyled>
        </form>
      </FormUserStyled>
    </RegisterStyled>
  );
}