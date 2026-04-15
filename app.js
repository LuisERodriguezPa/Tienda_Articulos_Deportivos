import { tiendaDeportiva, renderizarProductos } from "./products.js";
// Selección de elementos del DOM
const carritoItemsContenedor = document.querySelector(".car-items");
const precioTotalElemento = document.querySelector(".total-price span");
const contadorCarrito = document.querySelector(".counter-car");
const contenedorProductos = document.querySelector(".product-container");
const botonVaciar = document.querySelector(".btn-vaciar");
const mensajeVacio = document.querySelector(".msg-vacio");
const filters = document.querySelector(".filters-container");

// Definición de variables globales
let carrito = [];
let cantidadItems = 0;
let totalAcumulado = 0;

// Renderizar filtros
function disenoFiltro(nombre, imagen) {
  return `<div class="card bg-dark-subtle text-black" style="cursor: pointer;">
  <img src ="${imagen}" class="card-img-top" alt="${nombre}">
  <div class="card-body">
    <h5 class="card-title">${nombre.toUpperCase()}</h5>
 </div>
</div>`;
}

function filtrarCategoria(categoriaSeleccionada) {
  localStorage.setItem("filtro", categoriaSeleccionada);
  renderizarProductos(categoriaSeleccionada);
}

function renderizarFiltros() {
  const divTodos = document.createElement("div");
  divTodos.innerHTML = disenoFiltro(
    "Todo",
    "https://i0.wp.com/panamericanworld.com/wp-content/uploads/2023/12/ropa-deportiva.jpg?fit=900%2C720&ssl=1",
  );

  divTodos.firstElementChild.addEventListener("click", function () {
    localStorage.removeItem("filtro");
    renderizarProductos();
  });

  filters.appendChild(divTodos);
  tiendaDeportiva.forEach((productos) => {
    const divImg = document.createElement("div");
    divImg.innerHTML = disenoFiltro(productos.categoria, productos.imagen);
    divImg.firstElementChild.addEventListener("click", function () {
      filtrarCategoria(productos.categoria);
    });
    filters.appendChild(divImg);
  });
}

// Event delegation: un solo listener para todos los botones, incluso los creados al filtrar
contenedorProductos.addEventListener("click", function (event) {
  const boton = event.target.closest(".add-to-cart-btn");
  if (!boton) return;

  const nombre = boton.dataset.nombre;
  const precio = Number(boton.dataset.precio);
  agregarAlCarrito(nombre, precio);
});

// Agragar productos al carrito
function agregarAlCarrito(nombre, precio) {
  // Asigna el estado a productoExixtente del valor encontrado con find
  const productoExistente = carrito.find(function (item) {
    return item.nombre === nombre;
  });
  // Valida si el productoExistente esta en true
  // Modifica los elementos ya creados anteriormente y modifica las variables
  if (productoExistente) {
    productoExistente.cantidad++;
    productoExistente.li.querySelector(".cantidad").textContent =
      " x" + productoExistente.cantidad + " ";
    totalAcumulado += precio;
    cantidadItems++;
    updateBadge();
    updateTotal();
    // Valida si el producto no existe
    // Crea los elementos y modifica el estado de las variables
  } else {
    // Crear elementos
    const liCar = document.createElement("li");
    const spanNombre = document.createElement("span");
    const spanCantidad = document.createElement("span");
    spanCantidad.className = "cantidad";
    const spanPrecio = document.createElement("span");
    const button = document.createElement("button");
    button.className = "btn-eliminar";
    button.textContent = "🗑️";

    // Asignar valores
    spanNombre.textContent = nombre;
    spanCantidad.textContent = " x 1 ";
    spanPrecio.textContent = "$" + precio.toLocaleString("es-CO");
    mensajeVacio.style.display = "none";

    // AppendChild
    liCar.appendChild(spanNombre);
    liCar.appendChild(spanCantidad);
    liCar.appendChild(spanPrecio);
    liCar.appendChild(button);
    carritoItemsContenedor.appendChild(liCar);

    // Agregar al array
    carrito.push({ nombre: nombre, precio: precio, cantidad: 1, li: liCar });

    // Evento eliminar
    button.addEventListener("click", function () {
      eliminarItem(liCar, precio, nombre);
    });

    // Modificación de variables
    totalAcumulado += precio;
    cantidadItems++;

    // Ejecución de funciones para actualizar los datos
    updateBadge();
    updateTotal();
  }
}

// Función actualización de variable
function updateBadge() {
  contadorCarrito.textContent = cantidadItems;
}

// Actuailización de variables
function updateTotal() {
  precioTotalElemento.textContent =
    "$" + totalAcumulado.toLocaleString("es-CO");
}

// Función eliminación de producto del carrito y actualización de contadores y acumulador
function eliminarItem(liCar, precio, nombre) {
  const productoExistente = carrito.find(function (item) {
    return item.nombre === nombre;
  });

  if (productoExistente.cantidad > 1) {
    totalAcumulado -= precio;
    cantidadItems--;
    productoExistente.cantidad--;
    productoExistente.li.querySelector(".cantidad").textContent =
      "x" + productoExistente.cantidad;
  } else {
    liCar.remove();
    cantidadItems--;
    totalAcumulado -= precio;
    carrito = carrito.filter(function (item) {
      return item.nombre !== nombre;
    });
    mensajeVacio.style.display = "block";
  }

  updateBadge();
  updateTotal();
}

// Evento encargado de vaciar el carrito, los remueve uno por uno y actualiza variables
botonVaciar.addEventListener("click", function () {
  carritoItemsContenedor.querySelectorAll("li").forEach(function (li) {
    li.remove();
  });
  mensajeVacio.style.display = "block";
  totalAcumulado = 0;
  cantidadItems = 0;
  carrito = [];
  updateBadge();
  updateTotal();
});

renderizarFiltros();

const filtroGuardado = localStorage.getItem("filtro");

if (filtroGuardado) {
  renderizarProductos(filtroGuardado);
} else {
  renderizarProductos();
}
