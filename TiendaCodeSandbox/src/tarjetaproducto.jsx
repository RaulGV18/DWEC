import estilo from "./tarjetaproducto.module.css";
import { Link } from "react-router-dom";

export function Tarjetaproducto({ producto, key }) {
  return (
    <div className={estilo.contenedorcard}>
      <li key={key}>
        <h2>{producto.title}</h2>
        <img src={producto.image} alt="" />
        <p>{producto.description}</p>
        {producto.price < 100 ? (
          <p>{producto.price}€</p>
        ) : (
          <p>
            <strong>⬆{producto.price}€</strong>
          </p>
        )}
        <Link to={"/detalle/" + producto.id}>
          <button>Detalle</button>
        </Link>
      </li>
    </div>
  );
}
