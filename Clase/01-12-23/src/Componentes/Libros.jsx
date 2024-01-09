import estilos from"./libros.module.css"
import { Link } from "react-router-dom";
export function Libros({lib}){
    console.log(lib);
    return (
        <Link to={"/Componentes/" + lib.id}>
        <li key={lib.id} className={estilos.lib}>
            <p>{lib.title}</p>
            <p>{lib.authors}</p>
        </li>
        </Link>
    )
}