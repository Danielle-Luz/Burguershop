import { TitleStyled } from "../Texts/styles";
import { InputWrapper } from "./InputWrapper";
import { FormUserStyled } from "./styles";

export function FormUser() {
  return (
    <>
      <FormUserStyled>
        <TitleStyled tag="h3">Login</TitleStyled>
        <form>
          <InputWrapper label="Email" type="email" />
          <InputWrapper label="Senha" type="password" />
        </form>
      </FormUserStyled>
    </>
  );
}