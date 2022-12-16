interface iTitleProps {
  className?: string;
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3";
}

interface iTextProps {
  className?: string;
  children: React.ReactNode;
  tag: "p" | "label";
  weight: 400 | 600;
}

export function Title({children, tag, className}: iTitleProps) {
  if (tag === "h1")  return <h1 className={className}>{children}</h1> 
  else if (tag === "h2")  return <h2 className={className}>{children}</h2>
  else return <h3 className={className}>{children}</h3>
}

export function Text({children, tag, className}: iTextProps) {
  if (tag === "p")  return <p className={className}>{children}</p>;
  else  return <label className={className}>{children}</label>
}