import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

export function ProductoCard({ movie }) {
  let urlImagen="https://image.tmdb.org/t/p/w300";
  return (
    <li className={styles.cardprincipal} key={movie.id}>
      <div>
        <img className={styles.contenedorimagen} src={urlImagen.concat(movie.poster_path)} alt="" />
      </div>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
      <p>{movie.vote_average}</p>
      {/* <button onClick={() => mostrar(movie.id)}>Mostrar</button> */}
      <Link to={"/detalle/" + movie.id}>
        <button>Detalle</button>
      </Link>
    </li>
  );
}
