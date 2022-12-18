import styled, { css } from "styled-components"
import { Button } from "."
import { iTheme } from "../../styles/theme"

interface iButtonStyledProps {
  theme: iTheme;
  buttonStyle: "brand" | "gray" | "add";
}

const buttonStyleType = {
  brand: css`
    background-color: ${({theme}: iButtonStyledProps) => theme.colors.brand.secondary[0]};
    color: white;

    &:hover {
      background-color: ${({theme}: iButtonStyledProps) => theme.colors.brand.secondary[1]};
    }
  `,
  gray: css`
    background-color: ${({theme}: iButtonStyledProps) => theme.colors.gray[3]};
    color: ${({theme}: iButtonStyledProps) => theme.colors.gray[1]};

    &:hover {
      background-color: ${({theme}: iButtonStyledProps) => theme.colors.gray[1]};
      color: ${({theme}: iButtonStyledProps) => theme.colors.gray[2]};
    }
  `,
  add: css`
    background-color: ${({theme}: iButtonStyledProps) => theme.colors.gray[4]};
    color: white;
    padding: 11.5px 20px;
  `
}

export const ButtonStyled = styled(Button)<iButtonStyledProps>`
  border-radius: ${({theme}: iButtonStyledProps) => theme.radius[1]};
  font-size: ${({theme}: iButtonStyledProps) => theme.fontSizes[3]};
  font-weight: 600;
  padding: 16px;
  text-align: center;

  ${({buttonStyle}: iButtonStyledProps) => buttonStyleType[buttonStyle]}
`