import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
export function Search() {
  const history = useNavigate();

  const handAlert = () => {
    let searchText = document.querySelector("#texto").value;
    history("/filtrar/?search=" + searchText);
  };

  return (
    <div className={styles.formulario}>
      <input type="text" name="texto" id="texto" />
      <input type="submit" value="Buscar" onClick={handAlert} />
    </div>
  );
}
