import styled from "styled-components";
import { iTheme } from "../../styles/theme";

interface iFormUserStyledProps {
  theme: iTheme;
}

export const FormUserStyled = styled.article`
  border: 2px solid ${({theme}: iFormUserStyledProps) => theme.colors.gray[3]};
  border-radius: ${({theme}: iFormUserStyledProps) => theme.radius[1]};
  max-width: 500px;
  padding: 21px 24px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 15px;
    width: 100%;
  }
`