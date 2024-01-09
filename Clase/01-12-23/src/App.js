import "./styles.css";
import { Principal } from "./Paginas/Principal.jsx";
import { Detalles } from "./Paginas/Detalles.jsx";
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
        <ul>
          <li className="nav">
            <Link exact to="/">
              Home
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/Componentes/:Idlibro" element={<Detalles />}></Route>
        </Routes>
      </Router>

    </div>
  );
}
