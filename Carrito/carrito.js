import { tiendaDeportiva, renderizarProductos } from "../products.js";
// Selección de elementos del DOM
const contenedorProductos = document.querySelector(".product-container");
const filters = document.querySelector(".filters-container");
const carritoItemsContenedor = document.querySelector('.car-items');
const precioTotalElemento = document.querySelector('.total-price span');
const contadorCarrito = document.querySelector('.counter-car');
const botonVaciar = document.querySelector('.btn-vaciar')
const mensajeVacio = document.querySelector('.msg-vacio')

// Definición de variables globales
let carrito = [];

// Calcula los datos desde el array con acumulador
function getTotalItems() {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
}
function getTotalPrecio() {
    return carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
}

// Event delegation: un solo listener para todos los botones, incluso los creados al filtrar
function asignarEventosBotones() {
    contenedorProductos.addEventListener('click', function(event) {
        const boton = event.target.closest('.add-to-cart-btn');
        if (!boton) return;

        const id = Number(boton.dataset.id);
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);
        agregarAlCarrito(id, nombre, precio);
    });
}

// Función para agregar los productos al carrito
function agregarAlCarrito(id, nombre, precio) {

    // Busca si el producto ya existe en el carrito
    const productoExistente = carrito.find(function(item) {
        return item.id === id;
    });

    if (productoExistente) {
        // Si ya existe, solo aumentamos la cantidad
        productoExistente.cantidad++;
        //Formato consistente con espacios
        productoExistente.li.querySelector('.cantidad').textContent = ` x ${productoExistente.cantidad} `;
    } else {
        // Si es nuevo, lo agregamos al array y renderizamos el li
        const nuevoItem = { id, nombre, precio, cantidad: 1 }
        carrito.push(nuevoItem);
        renderizarItem(nuevoItem);
    }

    // Actualizamos y guardamos en localStorage
    updateBadge();
    updateTotal();
    guardarCarrito();
}

// Función para crear el elemento en el carrito al cargar y recargar
function renderizarItem(item) {

    // Creación de elementos y asignamos el contenido
    const liCar = document.createElement("li");
    const info = document.createElement("div");
    const spanNombre = document.createElement("span");
    spanNombre.textContent = item.nombre;
    const spanCantidad = document.createElement("span");
    spanCantidad.className = "cantidad";
    spanCantidad.textContent = ` x ${item.cantidad} `;
    const spanPrecio = document.createElement("span");
    spanPrecio.textContent = "$" + item.precio.toLocaleString('es-CO');
    const button = document.createElement("button");
    button.className = "btn-eliminar";
    button.textContent = "🗑️";

    // Ocultar mensaje de carrito vacío
    mensajeVacio.style.display = 'none';

    info.appendChild(spanNombre);
    info.appendChild(spanCantidad);
    liCar.appendChild(info);
    liCar.appendChild(spanPrecio);
    liCar.appendChild(button);
    carritoItemsContenedor.appendChild(liCar);

    // Guardamos referencia al li dentro del objeto del carrito
    // para poder manipularlo directamente sin buscar en el DOM
    item.li = liCar;

    // Evento para eliminar desde el carrito
    button.addEventListener('click', function() {
        eliminarItem(liCar, item.precio, item.id);
    });
}

// función para actualizar cantidad de productos agregador al carrito
function updateBadge() {
    contadorCarrito.textContent = getTotalItems();
}

// Función para actualizar valor total del carrito
function updateTotal() {
    precioTotalElemento.textContent = "$" + getTotalPrecio().toLocaleString('es-CO');
}

// Elimina un item seleccionado
function eliminarItem(liCar, precio, id) {
    const productoExistente = carrito.find(function(item) {
        return item.id === id;
    });

    if (productoExistente.cantidad > 1) {
        // Si hay más de una unidad, solo restamos una
        productoExistente.cantidad--;
        productoExistente.li.querySelector('.cantidad').textContent = ` x ${productoExistente.cantidad} `;
    } else {
        // Si solo queda una unidad del producto eliminamos el li del DOM y del array
        liCar.remove();
        carrito = carrito.filter(function(item) { return item.id !== id; });

        // Mostrar mensaje si el carrito quedó vacío
        if (carrito.length === 0) {
            mensajeVacio.style.display = 'block';
        }
    }

    updateBadge();
    updateTotal();
    guardarCarrito();
}

//Función para vaciar todo el carrito
botonVaciar.addEventListener('click', function() {
    // Elimina todos los li del DOM
    carritoItemsContenedor.querySelectorAll('li').forEach(function(li) {
        li.remove();
    });

    // Resetea el estado
    carrito = [];
    mensajeVacio.style.display = 'block';

    updateBadge();
    updateTotal();

    // Limpia el localStorage
    localStorage.removeItem("carrito");
});

// Función para guardar los datos en local storage
function guardarCarrito() {
    const carritoGuardado = carrito.map(item => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad
    }));

    localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
}

// Función para cargar el carrito en local storage
function cargarCarrito() {
    const data = localStorage.getItem("carrito")

    if (data) {
        const carritoParseado = JSON.parse(data);

        // Validar que haya items antes de procesar
        if (carritoParseado.length === 0) return;

        carritoParseado.forEach(item => {
            item.id = Number(item.id);
            carrito.push(item);
            renderizarItem(item); // Reconstruye el DOM del carrito
        });

        updateBadge();
        updateTotal();
    }
}

// Renderizar filtros
function disenoFiltro(nombre, imagen) {
    return `<div class="card bg-dark-subtle text-black" style="cursor: pointer;">
  <img src="${imagen}" class="card-img-top" alt="${nombre}">
  <div class="card-body">
    <h5 class="card-title">${nombre.toUpperCase()}</h5>
  </div>
</div>`;
}

function renderizarFiltros() {
    const divTodos = document.createElement("div");
    divTodos.innerHTML = disenoFiltro(
        "Todo",
        "https://i0.wp.com/panamericanworld.com/wp-content/uploads/2023/12/ropa-deportiva.jpg?fit=900%2C720&ssl=1"
    );
    divTodos.firstElementChild.addEventListener("click", function() {
        localStorage.removeItem("filtro");
        renderizarProductos();
    });
    filters.appendChild(divTodos);

    tiendaDeportiva.forEach(function(categoria) {
        const divImg = document.createElement("div");
        divImg.innerHTML = disenoFiltro(categoria.categoria, categoria.imagen);
        divImg.firstElementChild.addEventListener("click", function() {
            localStorage.setItem("filtro", categoria.categoria);
            renderizarProductos(categoria.categoria);
        });
        filters.appendChild(divImg);
    });
}

// Punto inicial
document.addEventListener("DOMContentLoaded", function() {
    const filtroGuardado = localStorage.getItem("filtro");
    renderizarProductos(filtroGuardado || null);
    renderizarFiltros();
    asignarEventosBotones();
    cargarCarrito();
});