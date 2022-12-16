import { Link } from "react-router-dom";

interface iButton {
  children: React.ReactNode;
  type: "button" | "submit";
  style: "brand" | "gray" | "add";
  to: string;
}

export function Button({children, type, style, to}: iButton) {
  return (
    <>
      {
        to ? <Link to={to}></Link> : <button>{children}</button>
      }
    </>
  );
}