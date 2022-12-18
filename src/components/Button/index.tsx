import { Link } from "react-router-dom";

interface iButton {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit";
  buttonStyle: "brand" | "gray" | "add";
  to?: string;
  onClick?: () => void;
}

export function Button({className, children, type, buttonStyle, to, onClick}: iButton) {
  return (
    <>
      {
        to ? <Link to={to} className={className}>{children}</Link> : <button onClick={onClick} className={className}>{children}</button>
      }
    </>
  );
}