interface iTitleProps {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3";
}

interface iTextProps {
  children: React.ReactNode;
  tag: "p" | "label";
  weight: 400 | 600;
}

export function Title({children, tag}: iTitleProps) {
  if (tag === "h1")  return <h1>{children}</h1> 
  else if (tag === "h2")  return <h2>{children}</h2>
  else return <h3>{children}</h3>
}

export function Text({children, tag}: iTextProps) {
  if (tag === "p")  return <>{children}</>;
  else  return <label>{children}</label>
}