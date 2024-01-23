import { Principal } from "./paginas/Principal";
import { DetalleProducto } from "./paginas/DetalleProducto";
import { Filtro } from "./componentes/Filtro";
import React from "react";
import styles from "./Navegacion.module.css";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ul className={styles.navi} >
        <li className={styles.navegacion}>
          <Link  to="/home">Home</Link>
        </li>
        <li className={styles.navegacion}>
          <Link to="/detalle">Detalle</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Principal />}></Route>
        <Route path="/detalle/:movieID" element={<DetalleProducto />}></Route>
        <Route path="/filtrar" element={<Filtro />}></Route>
      </Routes>
    </Router>
  );
}
