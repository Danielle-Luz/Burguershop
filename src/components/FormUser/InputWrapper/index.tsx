import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputWrapperStyled } from "./styles";

interface iInputWrapperProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export function InputWrapper({label, type, register, error}: iInputWrapperProps) {
  const[labelValue, setLabelValue] = useState(label);

  const {onBlur: registerOnBlur} = {...register};

  function hideLabel(event: React.FocusEvent<HTMLInputElement>) {
    registerOnBlur(event);

    if(event.target.value) {
      setLabelValue("");
    }
  }

  function showLabel(event: React.FocusEvent<HTMLInputElement>) {
    if(event.target.value) {
      setLabelValue(label);
    }
  }

  return (
    <InputWrapperStyled error={error}>
      <input type={type} {...register} autoComplete="off" onFocus={(event) => showLabel(event)} onBlur={(event) =>  hideLabel(event)} />
      <label>{labelValue}</label>
      <p>{error && error.message}</p>
    </InputWrapperStyled>
  );
}