import estilo from "./Detalleproducto.module.css";
// import productosImportados from "../productos.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function Detalles() {
  const { IdProducto } = useParams();
  const [producto,setproducto] = useState([]);
  useEffect( () => { 
    fetch('https://fakestoreapi.com/products/'+IdProducto)
    .then(res=>res.json())
    .then(json=>setproducto(json))
  },[]
    )
  return (
    <div className={estilo.contenedor}>
      <div className={estilo.contenedor_img}>
        <img src={producto.image} alt="" />
      </div>
      <div>
        <p>
          <strong>Descripcion:</strong>
          {producto.description}
        </p>
        <p>
          <strong>Precio:</strong>
          {producto.price}€
        </p>
      </div>
    </div>
  );
}
