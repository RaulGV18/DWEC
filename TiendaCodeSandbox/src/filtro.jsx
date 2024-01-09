import { useLocation } from "react-router-dom";
import { Productosgridfiltrado } from "./productosgridfiltrado.jsx";
export function Filtro() {
  const location = useLocation();
  let filtro = location.search.split("search=")[1];
  return (
    <div>
      <h1>FILTRO DE PRODUCTOS</h1>
      <Productosgridfiltrado filtro={filtro} />
    </div>
  );
}
