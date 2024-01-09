export function Formulario() {
    return (
            <form>
                <h2>Debes Añadir todos los campos de forma Valida para añadir un libro</h2>
                <label for="isbn">ISBN (13 Numeros)</label>
                <input type="text" name="isbn" id="isbn"/>
                <br />
                <label for="titulo">Titulo</label>
                <input type="text" name="titulo" id="titulo"/>
                 <br />
                <label for="autor">Autor</label>
                <input type="text" name="autor" id="autor"/>
                <label for="genero">Genero</label>
                <select name="genero" id="genero">
                    <option value="Desconocido">Desconocido</option>
                    <option value="Accion">Accion</option>
                    <option value="Fantasia">Fantasia</option>
                    <option value="Romance">Romance</option>
                    <option value="Terror">Terror</option>
                    <option value="Policial">Policial</option>
                    <option value="Historico">Historico</option>
                </select>
                <br />
                <a href="#" id="enlace" onclick="añadirlibroslista()">Añadir libro</a>
            </form>
    )
}