import { Listaproductos } from "./productos.js";
// Selección de elementos del DOM
const carritoItemsContenedor = document.querySelector(".car-items");
const precioTotalElemento = document.querySelector(".total-price span");
const contadorCarrito = document.querySelector(".counter-car");
const contenedorProductos = document.querySelector(".product-container");
const botonVaciar = document.querySelector(".btn-vaciar");
const mensajeVacio = document.querySelector(".msg-vacio");

// Definición de variables globales
let carrito = [];
let cantidadItems = 0;
let totalAcumulado = 0;



// Renderizar cards
function renderizarProductos() {
  Listaproductos.forEach(function (categoria) {
    console.log(categoria);
    
    // Arreglo por categorias
    categoria.productos.forEach((producto) => {
      // Creación de elementos
      const card = document.createElement("div");
      card.className = "product-card";
      const image = document.createElement("img");
      image.className = "product-image";
      const name = document.createElement("h3");
      name.className = "product-name";
      const description = document.createElement("small");
      description.className = "descripcion"
      const price = document.createElement("p");
      price.className = "product-price";
      const tallasContainer = document.createElement("div");
      tallasContainer.className = "tallas-container";
      producto.talla.forEach((t) => {
        const span = document.createElement("span");
        span.className = "talla-item";
        span.textContent = t;
        
        tallasContainer.appendChild(span);
        tallasContainer.textContent = producto.talla.join(", ");
      });
      const button = document.createElement("button");
      button.className = "add-to-cart-btn";
      button.dataset.nombre = producto.nombre;
      button.dataset.precio = producto.precio;

      // Asignacion de valores a cada elemento
      image.src = producto.imagen;
      name.textContent = producto.nombre;
      description.textContent = producto.descripcion;
      price.textContent = "$" + producto.precio.toLocaleString("es-CO");
      button.textContent = "Agregar";

      // Asignar cada hijo a su padre
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(tallasContainer);
      card.appendChild(price);
      card.appendChild(button);
      contenedorProductos.appendChild(card);
    });
  });
}

  // Llamada a la función para mostrar los productos
  renderizarProductos();
  const botonesAgregar = document.querySelectorAll(".add-to-cart-btn");

  // Funcion para recorrer los datos del producto a mostrar en el carrito
  botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const nombre = boton.dataset.nombre;
      const precio = Number(boton.dataset.precio);

      agregarAlCarrito(nombre, precio);
    });
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

  // Eveneto encargado de vaciar el carrito, los remueve uno por uno y actualiza variables
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

