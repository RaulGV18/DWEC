import "../styles.css";
import { Search } from "../componentes/Search";
import { Productosgrid } from "../productosGrid";
import { useState } from "react";
export function Principal() {
  const [search,setsearch] = useState("");
  return (
    <div>
      <h1>Peliculas</h1>
      <Search search={search} setsearch={setsearch} />
      <Productosgrid search={search} />
    </div>
  );
}
