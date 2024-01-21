import { Principal } from "./paginas/Principal.jsx";
import { Detalles } from "./paginas/Detalleproducto.jsx";
import { Filtro } from "./filtro.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <ul className="nav">
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/detalle/:IdPelicula" element={<Detalles />}></Route>
          <Route path="/filtro" element={<Filtro />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
