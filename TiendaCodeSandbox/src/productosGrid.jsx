// import productos from "./productos.json";
import { Tarjetaproducto } from "./tarjetaproducto";
import estilo from "./productosGrid.module.css";
import { useEffect, useState } from "react";
export function Productosgrid() {
  const [productos,setproductos] = useState([]);
  useEffect( () => { 
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setproductos(json))
},[]
  )
  return (
    <>
      <h2>N.Productos:{productos.length}</h2>
      <ul className={estilo.contenedor}>
        {productos.map((producto) => (
          <Tarjetaproducto producto={producto} key={producto.id} />
        ))}
      </ul>
    </>
  );
}
