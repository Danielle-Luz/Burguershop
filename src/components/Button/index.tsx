import { Link } from "react-router-dom";

interface iButton {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit";
  buttonStyle: "brand" | "gray" | "add";
  to?: string;
}

export function Button({className, children, type, buttonStyle, to}: iButton) {
  return (
    <>
      {
        to ? <Link to={to} className={className}></Link> : <button className={className}>{children}</button>
      }
    </>
  );
}