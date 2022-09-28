import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Profile() {
  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);

  return <h1>Pagina do perfil do usuário logado</h1>;
}
