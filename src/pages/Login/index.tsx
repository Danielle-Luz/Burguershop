import { InputWrapper } from "../../components/FormUser/InputWrapper";
import { FormUserStyled } from "../../components/FormUser/styles";
import { SiteInfo } from "../../components/SiteInfo";
import { TitleStyled } from "../../components/Texts/styles";
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
        </form>
      </FormUserStyled>
    </LoginStyled>
  );
}