let productos=[];
let productosporpagina = 8;
let paginactual = 1;
if (localStorage.getItem('pagina')!=null){
    paginactual = localStorage.getItem('pagina');
}

function comprobarpagina(){

let token = localStorage.getItem('token');

if (token !== null) {
    obtenerProductos();
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

function obtenerProductos() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            productos = data;
            productos.sort((a, b) => b.price - a.price);
            mostrarProductos();
        });
}
function recogerproductos(){
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            productos = data;
        });
}

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

function mostrardetalles(idproducto){
    let producto = productos.find(producto => producto.id === idproducto);
    alert(`Nombre: ${producto.title}\nPrecio: ${producto.price}\nDescripción: ${producto.description}`);
}
function cerrarsesion(){
    localStorage.clear();
    comprobarpagina();
    let divProductos = document.getElementById('productos');
    divProductos.innerHTML="";
}


function mostrarProductos() {
    let divProductos = document.getElementById('productos');
    let lista = document.getElementById('cerrarsesion');
    lista.style.display = "block";
    let carritoDiv = document.getElementById('carrito');
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

function agregarControlesPaginacion() {
    let divPaginacion = document.getElementById('paginacion');
    
    let totalPaginas = Math.ceil(productos.length / productosporpagina);

    divPaginacion.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        divPaginacion.innerHTML += `<button onclick="cambiarPagina(${i})">${i}</button>`;
    }
}
function cambiarPagina(pagina) {
    localStorage.setItem('pagina',pagina);
    paginactual = pagina;
    mostrarProductos();
}
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
function filtroorden(){
    orden = document.getElementById('selectorden').value;
    if (orden === 'ascendente') {
        productos.sort((a, b) => a.price - b.price);
    } else if (orden === 'descendente') {
        productos.sort((a, b) => b.price - a.price);
    }
    mostrarProductos();
}

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
    recogerproductos();
    let producto = productos.find(item => item.id === id);
    console.log(producto);
    if (producto) {
        let cantidad = 1;
        let productoExistente;
        console.log(carrito);

        for (var i = 0; i < carrito.length; i++) {
            if (carrito[i].id === id) {
                productoExistente = carrito[i];
                break;
            }
        }

        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            carrito.push({ id, nombre: producto.title, precio: producto.price, cantidad });
        }
        console.log(carrito);
        guardarCarritoEnLocalStorage();
    } else {
        alert('Producto no encontrado.');
    }
}

function mostrarCarrito() {
    let selectcategorias = document.getElementById('filtros');
    selectcategorias.innerHTML="";
    let divProductos = document.getElementById('productos');
    divProductos.innerHTML="";
    let divPaginacion = document.getElementById('paginacion');
    divPaginacion.innerHTML="";
    let carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    console.log(carritoDiv);
    let total = 0;
    let h2 = document.createElement('h2');
    h2.textContent = 'Carrito de Compras';

    let ul = document.createElement('ul');

    carrito.forEach((producto, index) => {
        var li = document.createElement('li');
        li.innerHTML = `
            <span>${producto.nombre} x${producto.cantidad} - ${producto.precio}€</span>
            <button onclick="incrementarCantidad(${index})">+</button>
            <button onclick="decrementarCantidad(${index})">-</button>
        `;
        ul.appendChild(li);

        total += producto.precio * producto.cantidad;
    });

    var finalizarPedidoButton = document.createElement('button');
    finalizarPedidoButton.textContent = 'Finalizar Pedido';
    finalizarPedidoButton.addEventListener('click', finalizarPedido);

    let p = document.createElement('p');
    p.textContent = `Total: ${total}€`;
    carritoDiv.appendChild(h2);
    carritoDiv.appendChild(ul);
    carritoDiv.appendChild(p);
    carritoDiv.appendChild(finalizarPedidoButton);
}
function crearorden() {
    var selectOrdenElement = document.createElement("select");
    selectOrdenElement.id = "selectorden";
    selectOrdenElement.onchange = filtroorden;

    var optionDescendente = document.createElement("option");
    optionDescendente.value = "descendente";
    optionDescendente.id = "descendente";
    optionDescendente.text = "Descendente";
    optionDescendente.selected = true;

    var optionAscendente = document.createElement("option");
    optionAscendente.value = "ascendente";
    optionAscendente.id = "ascendente";
    optionAscendente.text = "Ascendente";

    selectOrdenElement.appendChild(optionDescendente);
    selectOrdenElement.appendChild(optionAscendente);

    var filtrosDiv = document.getElementById("filtros");
    filtrosDiv.appendChild(selectOrdenElement);
}

function incrementarCantidad(index) {
    carrito[index].cantidad++;
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}

function decrementarCantidad(index) {
    carrito[index].cantidad--;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}
function finalizarPedido() {
    var mensaje = 'Productos en el carrito:\n';

    carrito.forEach(producto => {
        mensaje += `${producto.nombre} x${producto.cantidad} - ${producto.precio}€\n`;
    });

    var total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    mensaje += `\nTotal: ${total}€`;

    alert(mensaje);
}
