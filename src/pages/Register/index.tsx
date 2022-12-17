import { ButtonStyled } from "../../components/Button/styles";
import { InputWrapper } from "../../components/FormUser/InputWrapper";
import { FormUserStyled } from "../../components/FormUser/styles";
import { SiteInfo } from "../../components/SiteInfo";
import { TitleStyled, TextStyled } from "../../components/Texts/styles";
import { RegisterStyled } from "./styles";

export function Register() {
  return (
    <RegisterStyled>
      <SiteInfo />
      <FormUserStyled>
        <TitleStyled tag="h3">Login</TitleStyled>
        <form>
          <InputWrapper label="Email" type="email" />
          <InputWrapper label="Senha" type="password" />
          <TextStyled tag="p" gray={1} weight={400}>Crie sua conta para saborear muitas delícias e matar sua fome!</TextStyled>
          <ButtonStyled type="button" buttonStyle="gray">Logar</ButtonStyled>
        </form>
      </FormUserStyled>
    </RegisterStyled>
  );
}