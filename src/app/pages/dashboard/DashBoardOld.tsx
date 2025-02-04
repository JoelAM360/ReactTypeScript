import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks/";

export function DashBoardTeste() {
  const { nomeDoUsuario, logout } = useUsuarioLogado()


  return (
    <div>
      DashBoard
      <h2>Nome: {nomeDoUsuario}</h2>
      <br />
      <Link to={"/entrar"}>Login </Link>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  )
}


