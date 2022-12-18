import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Header } from "./Header";

export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = localStorage.getItem("@token");

    if (!hasToken) {
      navigate("/user/login");
    }
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
