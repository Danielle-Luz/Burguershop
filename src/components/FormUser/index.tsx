import { InputWrapper } from "./InputWrapper";
import { FormUserStyled } from "./styles";

export function FormUser() {
  return (
    <>
      <FormUserStyled>
        <InputWrapper label="email" type="email" />
        <InputWrapper label="email" type="email" />
      </FormUserStyled>
    </>
  );
}