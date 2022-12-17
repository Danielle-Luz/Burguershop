import { ButtonStyled } from "../../components/Button/styles";
import { InputWrapper } from "../../components/FormUser/InputWrapper";
import { FormUserStyled } from "../../components/FormUser/styles";
import { SiteInfo } from "../../components/SiteInfo";
import { TextStyled, TitleStyled } from "../../components/Texts/styles";
import { LoginStyled } from "./styles";

export function Login() {
  return (
    <LoginStyled>
      <SiteInfo />
      <FormUserStyled>
        <TitleStyled tag="h3">Login</TitleStyled>
        <form>
          <InputWrapper label="Email" type="email" />
          <InputWrapper label="Senha" type="password" />
          <ButtonStyled type="button" buttonStyle="brand">Logar</ButtonStyled>
          <TextStyled tag="p" gray={1} weight={400}>Crie sua conta para saborear muitas delícias e matar sua fome!</TextStyled>
        </form>
      </FormUserStyled>
    </LoginStyled>
  );
}