import { TitleStyled } from "./styles";

interface iTitleProps {
  children: React.ReactNode;
  tag: string;
}

export function Title({children, tag}: iTitle) {
  switch(tag) {
    case "h1":
      return <h1>{children}</h1>
    case "h2":
      return <h2>{children}</h2>
    case "h3":
      return <h3>{children}</h3>
  }
}