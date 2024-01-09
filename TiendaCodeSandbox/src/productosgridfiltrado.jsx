import productos from "./productos.json";
import { Tarjetaproducto } from "./tarjetaproducto";
import estilo from "./productosgridfiltrado.module.css";
export function Productosgridfiltrado({ filtro }) {
  let productosfiltr;
  if (filtro !== undefined && filtro !== "") {
    productosfiltr = productos.filter((producto) =>
      producto.title.includes(filtro),
    );
  } else {
    productosfiltr = productos;
  }
  return (
    <>
      <h2>N.Productos:{productosfiltr.length}</h2>
      <ul className={estilo.contenedor}>
        {productosfiltr.map((producto) => (
          <Tarjetaproducto producto={producto} key={producto.id} />
        ))}
      </ul>
    </>
  );
}
