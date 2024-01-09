import "./Cabecera.module.css"
import foto from "../img/imagenPajaro.jpg"
export function Cabecera() {
    return (
    <header>
        <img src={ foto } alt="Foto de un Pajaro" />
    </header>
    )
}