/**
 * Variable que almacena la lista de productos.
 * @type {Array}
 */
let productos=[];

/**
 * Numero de productos por pagina, se puede modificar a gusto de cada uno.
 * @type {number}
 */
let productosporpagina = 8;

/**
 * Numero de pagina actual.
 * @type {number}
 */
let paginactual = 1;

/**
 * Comprueba la página actual almacenada en el localStorage y la recupera para devolver al usuario a ella.
 */
if (localStorage.getItem('pagina')!=null){
    paginactual = localStorage.getItem('pagina');
}
/**
 * Comprueba si esta almacenado el token de inicio de sesion
 * si esta almacenado nos llevara a los productos
 * y si no esta almacenado creara el login y nos pedira que iniciemos sesion.
 */
function comprobarpagina(){

let token = localStorage.getItem('token');

if (token !== null) {
    obtenerProductos();
    let divdetalle=document.getElementById("detalle");
    divdetalle.innerHTML= "";
    let divLogin = document.getElementById('login');
    divLogin.innerHTML="";
    agregarControlesPaginacion();
    crearcategorias();
    crearorden();
} else {
    let formulario = document.createElement('form');

let usuario = document.createElement('input');
usuario.type = 'text';
usuario.id = 'usuario';
usuario.name = 'usuario';
usuario.placeholder = 'Usuario';

let contrasena = document.createElement('input');
contrasena.type = 'password';
contrasena.id = 'contrasena';
contrasena.name = 'contrasena';
contrasena.placeholder = 'Contraseña';

let enviar = document.createElement('input');
enviar.type = 'submit';
enviar.value = 'Iniciar sesión';
let espacio = document.createElement("br");
formulario.appendChild(usuario);
formulario.appendChild(espacio);
formulario.appendChild(contrasena);
formulario.appendChild(espacio);
formulario.appendChild(enviar);

let divLogin = document.getElementById('login');
divLogin.appendChild(formulario);

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let contrasena = document.getElementById('contrasena').value;
    console.log(usuario);
    console.log(contrasena);

    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username: usuario,
                password: contrasena
            })
        })
        .then (res => {
            if (!res.ok){
                alert('usuario incorrecto');
            }
            return res.json();
        })
        .then (json =>{
            let token = json.token;
            if(token){
                localStorage.setItem('token',token);
                console.log('Inicio de sesión exitoso. Token:', token);
                comprobarpagina();
            }else{
                console.error('no es un token la respuesta');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        })
});

}
}
/**
 * Obtiene los productos desde la API y los ordena para mostrarlos.
 */
function obtenerProductos() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            productos = data;
            productos.sort((a, b) => b.price - a.price);
            mostrarProductos();
        });
}
/**
 * Recoge la lista de productos desde la API.
 * @returns {Array} - Lista de productos.
 */
function recogerproductos(){
    let productoscompar=[];
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
             productoscompar=data;
        });
    return productoscompar;
}
/**
 * Crea la interfaz para mostrar los productos
 * con los productos devueltos por la api
 */
function mostrarProductos() {
    let divProductos = document.getElementById('productos');
    let lista=document.getElementById('cerrarsesion');
    lista.style.display = "block";
    divProductos.innerHTML = '';
    productos.forEach(producto => {
        divProductos.innerHTML += `<div class="Tarjeta">
            <h2>${producto.title}</h2>
            <img src="${producto.image}" alt="${producto.title}">
            <p>${producto.price}€</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            <button onclick="mostrardetalles(${producto.id})">Ver detalles</button>
        </div>`;
    });
}

/**
 * Muestra los detalles de el producto seleccionado y la cantidad de el que tenemos en el carrito.
 * @param {number} idProducto - ID del producto a mostrar.
 */

function mostrardetalles(idproducto){
    let producto = productos.find(producto => producto.id === idproducto);
    let selectcategorias = document.getElementById('filtros');
    selectcategorias.innerHTML="";
    let divProductos = document.getElementById('productos');
    divProductos.innerHTML="";
    let divPaginacion = document.getElementById('paginacion');
    divPaginacion.innerHTML="";
    let carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    let divdetalle=document.getElementById("detalle");
    divdetalle.innerHTML= `<div class="Tarjeta">
    <h2>${producto.title}</h2>
    <img src="${producto.image}" alt="${producto.title}">
    <h3>${producto.category}</h3>
    <p>cantidad en carrito:${recuperarcantidad(idproducto)}</p>
    <p>${producto.price}€</p>
    <p>${producto.description}</p>
</div>`;
}

/**
 * Cierra la sesion del usuario y nos devuelve al login.
 */
function cerrarsesion(){
    localStorage.clear();
    comprobarpagina();
    let divProductos = document.getElementById('productos');
    divProductos.innerHTML="";
}

/**
 * Muestra todos los productos de forma paginada en la interfaz.
 */
function mostrarProductos() {
    let divProductos = document.getElementById('productos');
    let lista = document.getElementById('cerrarsesion');
    lista.style.display = "block";
    let carritoDiv = document.getElementById('carrito');
    actualizarCantidadCarrito();
    carritoDiv.innerHTML = '';

    let indiceinicial = (paginactual - 1) * productosporpagina;
    let indicefinal = indiceinicial + productosporpagina;

    divProductos.innerHTML = '';

    for (let i = indiceinicial; i < indicefinal && i < productos.length; i++) {
        let producto = productos[i];
        divProductos.innerHTML += `<div class="Tarjeta">
            <h2>${producto.title}</h2>
            <img src="${producto.image}" alt="${producto.title}">
            <p>${producto.price}€</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            <button onclick="mostrardetalles(${producto.id})">Ver detalles</button>
        </div>`;
    }
    agregarControlesPaginacion();
}

/**
 * Agrega controles de paginacion segun el numero de productos por pagina
 * que tengamos.
 */
function agregarControlesPaginacion() {
    let divPaginacion = document.getElementById('paginacion');
    
    let totalPaginas = Math.ceil(productos.length / productosporpagina);

    divPaginacion.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        divPaginacion.innerHTML += `<button onclick="cambiarPagina(${i})">${i}</button>`;
    }
}

/**
 * Cambia la pagina de productos que esta mostrando la interfaz.
 * @param {number} pagina - Numero de la nueva pagina.
 */
function cambiarPagina(pagina) {
    localStorage.setItem('pagina',pagina);
    paginactual = pagina;
    mostrarProductos();
}

/**
 * Crea y muestra las categorías en un elemento select.
 */
function crearcategorias() {
    let selectElement = document.createElement("select");
    selectElement.id = "selectcategorias";
    selectElement.onchange = filtrocat;

    let optionElement = document.createElement("option");
    optionElement.value = "Todo";
    optionElement.text = "Todo";
    optionElement.selected = true;
    selectElement.appendChild(optionElement);

    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categorias => {
            categorias.forEach(categoria => {
                let option = document.createElement('option');
                option.value = categoria;
                option.text = categoria;
                selectElement.appendChild(option);
            });
        })
        .catch(error => console.error('Error al obtener las categorías:', error));
        let filtrosDiv = document.getElementById("filtros");
        filtrosDiv.appendChild(selectElement);
}

/**
 * Filtra los productos por categoria cuando se cambia la categoria seleccionada
 * devuelve los productos a orden descendente cuando se recargan los productos.
 */
function filtrocat() {
    categoriaseleccionada = selectcategorias.value;
    document.getElementById('selectorden').value = "descendente";
    if (categoriaseleccionada=="Todo"){
        obtenerProductos();
        mostrarProductos();
    } else {
        paginactual=1;
        fetch('https://fakestoreapi.com/products/category/'+ categoriaseleccionada)
            .then(res => res.json())
            .then(data => {
                productos = data;
                productos.sort((a, b) => b.price - a.price);
                mostrarProductos();
            });
    }

}

/**
 * Recoge el valor del select orden y ordena segun si es ascendente o descendente.
 */
function filtroorden(){
    orden = document.getElementById('selectorden').value;
    if (orden === 'ascendente') {
        productos.sort((a, b) => a.price - b.price);
    } else if (orden === 'descendente') {
        productos.sort((a, b) => b.price - a.price);
    }
    mostrarProductos();
}
/**
 * Crea y muestra las opciones de orden en un elemento select.
 */
function crearorden() {
    let selectOrdenElement = document.createElement("select");
    selectOrdenElement.id = "selectorden";
    selectOrdenElement.onchange = filtroorden;

    let optionDescendente = document.createElement("option");
    optionDescendente.value = "descendente";
    optionDescendente.id = "descendente";
    optionDescendente.text = "Descendente";
    optionDescendente.selected = true;

    let optionAscendente = document.createElement("option");
    optionAscendente.value = "ascendente";
    optionAscendente.id = "ascendente";
    optionAscendente.text = "Ascendente";

    selectOrdenElement.appendChild(optionDescendente);
    selectOrdenElement.appendChild(optionAscendente);

    let filtrosDiv = document.getElementById("filtros");
    filtrosDiv.appendChild(selectOrdenElement);
}