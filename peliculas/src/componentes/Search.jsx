import estilo from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

export function Search({search,setsearch}) {
  const handleSearch =  (e) => {
    setsearch(e.target.value);
  }
  return (
    <form action="#" className={estilo.formulario}>
      <input type="text" id="busqueda"  value={search} onChange={handleSearch} />
    <FaSearch />
    </form>
  );
}