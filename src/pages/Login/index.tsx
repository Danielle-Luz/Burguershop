import { FormUser } from "../../components/FormUser";
import { SiteInfo } from "../../components/SiteInfo";
import { LoginStyled } from "./styles";

export function Login() {
  return (
    <LoginStyled>
      <SiteInfo />
      <FormUser />
    </LoginStyled>
  );
}