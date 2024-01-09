import librosImport from "../libros.json";
import { useParams } from "react-router-dom";
import estilos from "./Detalleslibros.module.css"
export function Detalles() {
  const { Idlibro } = useParams();
  const libro = librosImport.find((libro) => libro.id == Idlibro);
  return (
    <div className={estilos.contenedordet}>
      <div>
        <img src={libro.image} alt="" />
      </div>
      <div>
        <p className={estilos.parrafos}>
          <strong>Autor:</strong><br />
          {libro.authors}
        </p>
        <p className={estilos.parrafos}>
          <strong>Descripcion:</strong> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          consectetur architecto accusamus aperiam assumenda facere libero animi
          sit. Quos, repellendus.
        </p>
        <a href={libro.url} className={estilos.link}>Mas detalles</a>
      </div>
    </div>
  );
}