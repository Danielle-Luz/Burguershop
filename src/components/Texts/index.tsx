import { JsxElement } from "typescript";
import { TitleStyled } from "./styles";

interface iTitleAndTextProps {
  children: React.ReactNode;
  titleTag: "h1" | "h2" | "h3";
  textTag: "p" | "label";
}

export function Title({children, titleTag}: iTitleAndTextProps) {
  if (titleTag === "h1")  return <h1>{children}</h1> 
  else if (titleTag === "h2")  return <h2>{children}</h2>
  else return <h3>{children}</h3>
}

export function Text({children, textTag}: iTitleAndTextProps) {
  if (textTag === "p")  return <p>{children}</p> 
  else  return <label>{children}</label>
}