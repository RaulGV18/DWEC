import "./Principal.module.css"
import { Formulario } from "../Componentes/Formulario.jsx"
import { Cabecera } from "../Componentes/Cabecera.jsx"
import { Lista } from "../Componentes/Lista.jsx"
export function Principal() {
    return (
        <div>
            <Cabecera />
            <main>
            <Formulario />
            <Lista />
            </main>
        </div>
    )
}