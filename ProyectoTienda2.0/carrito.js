/**
 * Variable que almacena los productos en el carrito. 
 * Se obtiene del localStorage o se inicializa como un array vacio.
 * @type {Array}
 */
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

/**
 * Funcion que guarda el contenido del carrito en el localStorage.
 */
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

/**
 * Funcion que agrega un producto al carrito por su ID cuando le damos a agregar al carrito.
 * @param {number} id - ID del producto a agregar al carrito.
 */
function agregarAlCarrito(id) {
    let producto = productos.find(item => item.id === id);
    if (producto) {
        let cantidad = 1;
        let productoExistente;

        for (let i = 0; i < carrito.length; i++) {
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
        actualizarCantidadCarrito();
        guardarCarritoEnLocalStorage();
        alert("PRODUCTO AÑADIDO AL CARRITO")
    } else {
        alert('Producto no encontrado.');
    }
}
/**
 * Funcion que muestra los productos del carrito en la interfaz.
 */
function mostrarCarrito() {
    let token = localStorage.getItem('token');

    if (token !== null) {
    let selectcategorias = document.getElementById('filtros');
    selectcategorias.innerHTML="";
    let divProductos = document.getElementById('productos');
    divProductos.innerHTML="";
    let divPaginacion = document.getElementById('paginacion');
    divPaginacion.innerHTML="";
    let carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    let divdetalle=document.getElementById("detalle");
    divdetalle.innerHTML= "";
    let total = 0;
    let h2 = document.createElement('h2');
    h2.textContent = 'Carrito de Compras';

    let ul = document.createElement('ul');

    carrito.forEach((producto, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${producto.nombre} x${producto.cantidad} - ${producto.precio}€</span>
            <button onclick="incrementarCantidad(${index})">+</button>
            <button onclick="decrementarCantidad(${index})">-</button>
        `;
        ul.appendChild(li);

        total += producto.precio * producto.cantidad;
    });

    let finalizarPedidoButton = document.createElement('button');
    finalizarPedidoButton.textContent = 'Finalizar Pedido';
    finalizarPedidoButton.addEventListener('click', finalizarPedido);

    let p = document.createElement('p');
    p.textContent = `Total: ${total}€`;
    carritoDiv.appendChild(h2);
    carritoDiv.appendChild(ul);
    carritoDiv.appendChild(p);
    carritoDiv.appendChild(finalizarPedidoButton);
    }
}
/**
 * Funcion que incrementa la cantidad de un producto en el carrito cuando pulsamos en el boton de mas.
 * @param {number} index - indice del producto en el carrito.
 */
function incrementarCantidad(index) {
    carrito[index].cantidad++;
    mostrarCarrito();
    actualizarCantidadCarrito();
    guardarCarritoEnLocalStorage();
}
/**
 * Funcion que decrementa la cantidad de un producto en el carrito cuando se pulsa menos
 * o lo elimina si la cantidad llega a cero.
 * @param {number} index - indice del producto en el carrito.
 */
function decrementarCantidad(index) {
    carrito[index].cantidad--;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    mostrarCarrito();
    actualizarCantidadCarrito();
    guardarCarritoEnLocalStorage();
}

/**
 * Funcion que finaliza el pedido y muestra un mensaje con los productos y el total de ejemplo.
 */
function finalizarPedido() {
    let mensaje = 'Productos en el carrito:\n';

    carrito.forEach(producto => {
        mensaje += `${producto.nombre} x${producto.cantidad} - ${producto.precio}€\n`;
    });

    let total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    mensaje += `\nTotal: ${total}€`;

    alert(mensaje);
}
/**
 * Funcion que actualiza la cantidad total de productos en el carrito que se muestran en la interfaz.
 */
function actualizarCantidadCarrito() {
    let cantidadCarrito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    let cantidadCarritoElement = document.getElementById("carritonum");
    cantidadCarritoElement.textContent = cantidadCarrito;
}

/**
 * Funcion que recupera la cantidad de un producto en el carrito por su ID.
 * @param {number} productoId - ID del producto.
 * @returns {number} - Cantidad del producto en el carrito.
 */
function recuperarcantidad(productoid){
    let producto = productos.find(item => item.id === productoid);
    if (producto) {
        let productoExistente;
        console.log(producto);
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id === productoid) {
                productoExistente = carrito[i];
                break;
            }
        }
        if (productoExistente){
            return productoExistente.cantidad;
        } else {
            return 0;
        }
    }
}