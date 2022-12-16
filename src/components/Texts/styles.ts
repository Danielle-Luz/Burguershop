import { LabelHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Title, Text } from ".";
import { iTheme } from "../../styles/theme";

interface iTitleProps {
  theme: iTheme;
}

interface iTextProps {
  theme: iTheme;
  tag: "p" | "label";
  weight: 400 | 600;
}


const titleFontSize = {
  h1: css`${({theme}: iTitleProps) => theme.fontSizes[0]}`,
  h2: css`${({theme}: iTitleProps) => theme.fontSizes[1]}`,
  h3: css`${({theme}: iTitleProps) => theme.fontSizes[2]}`
}

export const TitleStyled = styled(Title)<iTitleProps>`
  font-weight: 700;
  ${({tag}) => titleFontSize[tag]};
`

export const TextStyled = styled(Text)<iTextProps>`
  font-size: ${({theme, tag}) => theme.fontSizes[tag === "p" ? 4 : 5]};
  font-weight: ${({weight}) => weight};
`