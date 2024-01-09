import "../styles.css";
import { Search } from "../componentes/Search";
import { Productosgrid } from "../productosGrid";
export function Principal() {
  return (
    <div>
      <h1>Productos</h1>
      <Search />
      <Productosgrid />
    </div>
  );
}
