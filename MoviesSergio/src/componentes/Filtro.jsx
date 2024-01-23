import "../styles.css";
import { useLocation } from "react-router-dom";
import { ProductoCard } from "../ProductCard";
import { useEffect, useState } from "react";
import styles from "../ProductosGrid.module.css";

export function Filtro() {
  const location = useLocation();
  console.log("este es el location"+location);
  const busqueda = Parametro(location);
  console.log("esta es la busqueda"+busqueda);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=57537ff19f381dd7b67eee1ea8b8164a`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovies(json);
      });
  }, []);

  return (
    <>
      <div className="lista">
        <ul className={styles.contenedor}>
          {movies.results && movies.results.map((result) => (
              <ProductoCard key={result.id} movie={result} />
            ))}
        </ul>
      </div>
    </>
  );
}

function Parametro(objeto) {
  let parametro = objeto.search.split("?search=")[1];
  return parametro;
}
