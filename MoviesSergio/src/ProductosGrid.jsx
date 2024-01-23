// import productos from "./productos.json";
import styles from "./ProductosGrid.module.css";
import { ProductoCard } from "./ProductCard";
import { useEffect, useState } from "react";

export function ProductosGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=57537ff19f381dd7b67eee1ea8b8164a"
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
