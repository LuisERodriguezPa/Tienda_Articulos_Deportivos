// Selección de elementos del DOM
const carritoItemsContenedor = document.querySelector('.car-items');
const precioTotalElemento = document.querySelector('.total-price span');
const contadorCarrito = document.querySelector('.counter-car');
const contenedorProductos = document.querySelector('.product-container')
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

// Array de productos
const tiendaDeportiva = [
    {
    categoria: "Camisetas",
    imagen: "https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente.jpg?x81271",
    productos: [
        { id: 1, nombre: "Camiseta Nike Dry Fit", precio: 85000, imagen: "https://picsum.photos/200?1", stock: 15, talla: ["S","M","L","XL"] },
        { id: 2, nombre: "Camiseta Adidas Training", precio: 90000, imagen: "https://picsum.photos/200?2", stock: 10, talla: ["M","L"] },
        { id: 3, nombre: "Camiseta Puma Sport", precio: 78000, imagen: "https://picsum.photos/200?3", stock: 20, talla: ["S","M","L"] },
        { id: 4, nombre: "Camiseta Reebok Active", precio: 82000, imagen: "https://picsum.photos/200?4", stock: 12, talla: ["M","L","XL"] },
        { id: 5, nombre: "Camiseta Under Armour HeatGear", precio: 95000, imagen: "https://picsum.photos/200?5", stock: 9, talla: ["S","M","L"] }
    ]
    },
    {
    categoria: "Tenis",
    imagen: "https://pilatos21.vtexassets.com/arquivos/ids/1399946-800-800?v=638569333850270000&width=800&height=800&aspect=true",
    productos: [
        { id: 6, nombre: "Tenis Nike Air Zoom", precio: 250000, imagen: "https://picsum.photos/200?6", stock: 8, talla: [38,39,40,41,42] },
        { id: 7, nombre: "Tenis Adidas Ultraboost", precio: 320000, imagen: "https://picsum.photos/200?7", stock: 5, talla: [39,40,41] },
        { id: 8, nombre: "Tenis Puma Runner", precio: 210000, imagen: "https://picsum.photos/200?8", stock: 11, talla: [38,39,40] },
        { id: 9, nombre: "Tenis Reebok Nano", precio: 280000, imagen: "https://picsum.photos/200?9", stock: 7, talla: [40,41,42] },
        { id: 10, nombre: "Tenis Under Armour Charged", precio: 260000, imagen: "https://picsum.photos/200?10", stock: 6, talla: [39,40,41,42] }
    ]
    },
    {
    categoria: "Accesorios",
    imagen: "https://http2.mlstatic.com/D_Q_NP_868434-MCO98700523458_112025-O.webp",
    productos: [
        { id: 11, nombre: "Gorra Nike", precio: 45000, imagen: "https://picsum.photos/200?11", stock: 20, talla: ["Única"] },
        { id: 12, nombre: "Morral Adidas", precio: 120000, imagen: "https://picsum.photos/200?12", stock: 12, talla: ["Única"] },
        { id: 13, nombre: "Botella Deportiva Puma", precio: 30000, imagen: "https://picsum.photos/200?13", stock: 25, talla: ["Única"] },
        { id: 14, nombre: "Guantes Gym Reebok", precio: 55000, imagen: "https://picsum.photos/200?14", stock: 18, talla: ["S","M","L"] },
        { id: 15, nombre: "Cinturón Fitness", precio: 70000, imagen: "https://picsum.photos/200?15", stock: 10, talla: ["M","L"] }
        ]
    },
    {
    categoria: "Shorts",
    imagen: "https://http2.mlstatic.com/D_Q_NP_868434-MCO98700523458_112025-O.webp",
    productos: [
        { id: 16, nombre: "Short Nike Pro", precio: 80000, imagen: "https://picsum.photos/200?16", stock: 14, talla: ["M","L","XL"] },
        { id: 17, nombre: "Short Adidas Running", precio: 70000, imagen: "https://picsum.photos/200?17", stock: 18, talla: ["S","M","L"] },
        { id: 18, nombre: "Short Puma Sport", precio: 65000, imagen: "https://picsum.photos/200?18", stock: 16, talla: ["S","M","L"] },
        { id: 19, nombre: "Short Reebok Training", precio: 72000, imagen: "https://picsum.photos/200?19", stock: 11, talla: ["M","L"] },
        { id: 20, nombre: "Short Under Armour", precio: 85000, imagen: "https://picsum.photos/200?20", stock: 9, talla: ["M","L","XL"] }
    ]
    },
    {
    categoria: "Conjuntos",
    imagen: "https://f.fcdn.app/imgs/422ab3/www.globalsports.com.uy/gls/4dc1/original/catalogo/ADJN5459-3283-1/460x460/adidas-short-squadra-25-black-white.jpg",
    productos: [
        { id: 21, nombre: "Conjunto Nike Deportivo", precio: 180000, imagen: "https://picsum.photos/200?21", stock: 10, talla: ["S","M","L"] },
        { id: 22, nombre: "Conjunto Adidas Training", precio: 200000, imagen: "https://picsum.photos/200?22", stock: 8, talla: ["M","L","XL"] },
        { id: 23, nombre: "Conjunto Puma Sport", precio: 170000, imagen: "https://picsum.photos/200?23", stock: 12, talla: ["S","M","L"] },
        { id: 24, nombre: "Conjunto Reebok Active", precio: 190000, imagen: "https://picsum.photos/200?24", stock: 7, talla: ["M","L"] },
        { id: 25, nombre: "Conjunto Under Armour", precio: 210000, imagen: "https://picsum.photos/200?25", stock: 6, talla: ["S","M","L","XL"] }
    ]
    }
];

function renderizarProductos() {
    tiendaDeportiva.forEach(function(tienda) {
        tienda.productos.forEach(function(producto) {

            // Crear la card del producto
            const card = document.createElement("div");
            card.className = "product-card";

            const image = document.createElement("img");
            image.className = "product-image";
            image.src = producto.imagen

            const name = document.createElement("h3");
            name.className = "product-name";
            name.textContent = producto.nombre;

            const price = document.createElement("p");
            price.className = "product-price"
            price.textContent = '$' + producto.precio.toLocaleString('es-CO');

            const button = document.createElement('button');
            button.className = 'add-to-cart-btn';
            button.textContent = "Agregar";

            // Guardamos los datos del producto en atributos del botón
            // para accederlos fácilmente en el evento click
            button.dataset.id = producto.id;
            button.dataset.nombre = producto.nombre;
            button.dataset.precio = producto.precio;

            // Armar la card
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(button);
            contenedorProductos.appendChild(card)
        });
    });
}

// Agregar eventos a los botones
function asignarEventosBotones() {
    // Se seleccionan después de renderizar para que existan en el DOM
    const botonesAgregar = document.querySelectorAll('.add-to-cart-btn');

    botonesAgregar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const id = Number(boton.dataset.id);
            const nombre = boton.dataset.nombre;
            const precio = Number(boton.dataset.precio)
            agregarAlCarrito(id, nombre, precio)
        });
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
            carrito.push(item);
            renderizarItem(item); // Reconstruye el DOM del carrito
        });

        updateBadge();
        updateTotal();
    }
}

// Punto inicial
document.addEventListener("DOMContentLoaded", function() {
    renderizarProductos()
    asignarEventosBotones();
    cargarCarrito();
});