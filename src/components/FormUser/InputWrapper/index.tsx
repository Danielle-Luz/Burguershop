import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextStyled } from "../../Texts/styles";
import { InputWrapperStyled } from "./styles";

interface iInputWrapperProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export function InputWrapper({label, type, register, error}: iInputWrapperProps) {
  return (
    <InputWrapperStyled error={error}>
      <input type={type} {...register} autoComplete="off" />
      <label>{label}</label>
      {error && <p>{error.message}</p>}
    </InputWrapperStyled>
  );
}