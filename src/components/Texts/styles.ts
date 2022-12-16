import styled, { css } from "styled-components";
import { Title } from ".";
import { iTheme } from "../../styles/theme";

interface iTitleStyledProps {
  theme: iTheme;
}

const titleFontSize = {
  h1: css`${({theme}: iTitleStyledProps) => theme.fontSizes[0]}`,
  h2: css`${({theme}: iTitleStyledProps) => theme.fontSizes[1]}`,
  h3: css`${({theme}: iTitleStyledProps) => theme.fontSizes[2]}`
}

export const TitleStyled = styled(Title)<iTitleStyledProps>`
  font-weight: 700;
  ${({titleTag}) => titleFontSize[titleTag]};
`