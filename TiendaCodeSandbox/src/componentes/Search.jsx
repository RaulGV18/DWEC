import estilo from "./Search.module.css";
import { useNavigate } from "react-router-dom";

export function Search() {
  const navigate = useNavigate();
  function mostrarbusqueda() {
    let texto = document.getElementById("busqueda").value;
    navigate("/filtro/?search=" + texto);
  }
  return (
    <form action="#" className={estilo.formulario}>
      <input type="text" id="busqueda" />
      <button onClick={() => mostrarbusqueda()}>Buscar</button>
    </form>
  );
}
