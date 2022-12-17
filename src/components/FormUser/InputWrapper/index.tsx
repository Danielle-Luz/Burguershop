import { InputWrapperStyled } from "./styles";

interface iInputWrapperProps {
  label: string;
  type: string;
}

export function InputWrapper({label, type}: iInputWrapperProps) {
  return (
    <InputWrapperStyled>
      <input type={type} />
      <label>{label}</label>
    </InputWrapperStyled>
  );
}