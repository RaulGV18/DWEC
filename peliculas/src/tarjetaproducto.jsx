import estilo from "./tarjetaproducto.module.css";
import { Link } from "react-router-dom";

export function Tarjetaproducto({ pelicula, key }) {
  return (
    <div className={estilo.contenedorcard}>
      <li key={key}>
        <h2>{pelicula.title}</h2>
        <img src={"https://image.tmdb.org/t/p/w500/"+pelicula.poster_path} alt="" />
        <p>{pelicula.overview}</p>
          <p>{pelicula.vote_average}</p>
          <p>
            {pelicula.vote_count}
          </p>
        <Link to={"/detalle/" + pelicula.id}>
          <button>Detalle</button>
        </Link>
      </li>
    </div>
  );
}
