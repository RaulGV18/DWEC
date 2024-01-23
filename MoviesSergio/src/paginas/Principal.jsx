import "../styles.css";

import { ProductosGrid } from "../ProductosGrid";
import { Search } from "../componentes/Search";
export function Principal() {
  return (
    <div className="App">
      <h1>Peliculas</h1>
      <h2>Listado de Peliculas</h2>
      <Search />
      <ProductosGrid />
    </div>
  );
}
