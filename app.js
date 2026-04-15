// Selección de elementos del DOM
const carritoItemsContenedor = document.querySelector('.car-items');
const precioTotalElemento = document.querySelector('.total-price span');
const contadorCarrito = document.querySelector('.counter-car');
const contenedorProductos = document.querySelector('.product-container')
const botonVaciar = document.querySelector('.btn-vaciar')
const mensajeVacio = document.querySelector('.msg-vacio')

// Definición de variables globales
let carrito = [];
let cantidadItems = 0
let totalAcumulado = 0

// Array de productos
let productos = [
    {nombre:"Cama para perro", precio:260000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXTgoIHO7sV_eaa0lB8Jylma1cx4eUc14cw&s"},
    {nombre:"Cama para gato", precio:180000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dwub7KNi04QZhzzjHMqVZthFFGbUdwJrsA&s"},
    {nombre:"Rascador para gato XL", precio:450000, imagen: "https://www.elcontainer.cl/3850-thickbox_default/rascador-para-gatos-tres-niveles.jpg"},
    {nombre:"Pechera para perro", precio:150000, imagen: "https://veterinariadrmartinez.com/wp-content/uploads/2021/08/1561577103-41G38Fnwy4L.jpeg"},
    {nombre:"Alimento para perro", precio:90000, imagen: "https://i0.wp.com/www.ecovet.com.co/wp-content/uploads/2023/04/Agility-gold-pequenos-adultos.webp?resize=300%2C300&ssl=1"},
    {nombre:"Alimento para gato", precio:700000, imagen: "https://petgold.s3.amazonaws.com/wp-content/uploads/2023/08/10031527/br-for-cat-adultos-salmon.webp"}
]

// Renderizar cards
function renderizarProductos(){
    productos.forEach(function(producto){
        // Creación de elementos
        const card = document.createElement("div")
        card.className = "product-card"
        const image = document.createElement("img")
        image.className = "product-image"
        const name = document.createElement("h3")
        name.className = "product-name"
        const price = document.createElement("p")
        price.className = "product-price"
        const button = document.createElement('button')
        button.className = 'add-to-cart-btn'
        button.dataset.nombre = producto.nombre
        button.dataset.precio = producto.precio

        // Asignacion de valores a cada elemento
        image.src = producto.imagen
        name.textContent = producto.nombre
        price.textContent = '$' + producto.precio.toLocaleString('es-CO')
        button.textContent = "Agregar"

        // Asignar cada hijo a su padre
        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(price)
        card.appendChild(button)
        contenedorProductos.appendChild(card)
    }
)}
// Llamada a la función para mostrar los productos
renderizarProductos()
const botonesAgregar = document.querySelectorAll('.add-to-cart-btn');

// Funcion para recorrer los datos del producto a mostrar en el carrito
botonesAgregar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        const nombre = boton.dataset.nombre
        const precio = Number(boton.dataset.precio)

        agregarAlCarrito(nombre, precio)
    })
})

// Agragar productos al carrito
function agregarAlCarrito(nombre, precio){
    // Asigna el estado a productoExixtente del valor encontrado con find
    const productoExistente = carrito.find(function(item){
        return item.nombre === nombre
    })
    // Valida si el productoExistente esta en true
    // Modifica los elementos ya creados anteriormente y modifica las variables
    if(productoExistente){
        productoExistente.cantidad ++
        productoExistente.li.querySelector('.cantidad').textContent = " x" + productoExistente.cantidad + " "
        totalAcumulado += precio
        cantidadItems++
        updateBadge()
        updateTotal()
    // Valida si el producto no existe
    // Crea los elementos y modifica el estado de las variables
    } else {
    // Crear elementos
    const liCar = document.createElement("li")
    const spanNombre = document.createElement("span")
    const spanCantidad = document.createElement("span")
    spanCantidad.className = "cantidad"
    const spanPrecio = document.createElement("span")
    const button = document.createElement("button")
    button.className = "btn-eliminar"
    button.textContent = "🗑️"

    // Asignar valores
    spanNombre.textContent = nombre
    spanCantidad.textContent = " x 1 "
    spanPrecio.textContent = "$" + precio.toLocaleString('es-CO')
    mensajeVacio.style.display = 'none'

    // AppendChild
    liCar.appendChild(spanNombre)
    liCar.appendChild(spanCantidad)
    liCar.appendChild(spanPrecio)
    liCar.appendChild(button)
    carritoItemsContenedor.appendChild(liCar)

    // Agregar al array
    carrito.push({ nombre: nombre, precio: precio, cantidad: 1, li: liCar })

    // Evento eliminar
    button.addEventListener('click', function(){
        eliminarItem(liCar, precio, nombre)
    })

    // Modificación de variables
    totalAcumulado += precio
    cantidadItems++

    // Ejecución de funciones para actualizar los datos
    updateBadge()
    updateTotal()
    }
}

// Función actualización de variable
function updateBadge(){
    contadorCarrito.textContent = cantidadItems
}

// Actuailización de variables
function updateTotal(){
    precioTotalElemento.textContent = "$" + totalAcumulado.toLocaleString('es-CO')
}

// Función eliminación de producto del carrito y actualización de contadores y acumulador
function eliminarItem(liCar, precio, nombre){
    const productoExistente = carrito.find(function(item){
        return item.nombre === nombre
    })

    if (productoExistente.cantidad > 1){
        totalAcumulado -= precio
        cantidadItems --
        productoExistente.cantidad--
        productoExistente.li.querySelector('.cantidad').textContent = "x" + productoExistente.cantidad
    }else{
        liCar.remove()
        cantidadItems --
        totalAcumulado -= precio
        carrito = carrito.filter(function(item){ return item.nombre !== nombre })
        mensajeVacio.style.display = 'block'
    }
    
    updateBadge()
    updateTotal()
}

// Eveneto encargado de vaciar el carrito, los remueve uno por uno y actualiza variables
botonVaciar.addEventListener('click', function(){
    carritoItemsContenedor.querySelectorAll('li').forEach(function(li){
    li.remove()
    })
    mensajeVacio.style.display = 'block'
    totalAcumulado = 0
    cantidadItems = 0
    carrito = []
    updateBadge()
    updateTotal()
})