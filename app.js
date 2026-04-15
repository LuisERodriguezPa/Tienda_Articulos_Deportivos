import { tiendaDeportiva, renderizarProductos } from "./products.js";
// Selección de elementos del DOM
const carritoItemsContenedor = document.querySelector(".car-items");
const precioTotalElemento = document.querySelector(".total-price span");
const contadorCarrito = document.querySelector(".counter-car");
const contenedorProductos = document.querySelector(".product-container");
const botonVaciar = document.querySelector(".btn-vaciar");
const mensajeVacio = document.querySelector(".msg-vacio");
const filters = document.querySelector(".filters-container");

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
