import { Libros } from "./Libros.jsx"
import listalibros from "../libros.json"
export function Lista() {
    return(
        <ul id="listalibros">
            <h4>Lista de libros</h4>
            {listalibros.map((libro) => <Libros lib={libro} /> )}
        </ul>
    )
}