import { UseFormRegisterReturn } from "react-hook-form";
import { InputWrapperStyled } from "./styles";

interface iInputWrapperProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
}

export function InputWrapper({label, type, register}: iInputWrapperProps) {
  return (
    <InputWrapperStyled>
      <input type={type} {...register} />
      <label>{label}</label>
    </InputWrapperStyled>
  );
}