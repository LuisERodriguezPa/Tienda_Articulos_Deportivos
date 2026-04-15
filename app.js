// Selección de elementos del DOM
const carritoItemsContenedor = document.querySelector('.car-items');
const precioTotalElemento = document.querySelector('.total-price span');
const contadorCarrito = document.querySelector('.counter-car');
const contenedorProductos = document.querySelector('.product-container')
const botonVaciar = document.querySelector('.btn-vaciar')
const mensajeVacio = document.querySelector('.msg-vacio')
const filters = document.querySelector('.filters-container');

// Definición de variables globales
let carrito = [];
let cantidadItems = 0
let totalAcumulado = 0

// Array de categorias

let categorias = {"Camisetas": "https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente.jpg?x81271", 
"Tenis": "https://pilatos21.vtexassets.com/arquivos/ids/1399946-800-800?v=638569333850270000&width=800&height=800&aspect=true", 
"Conjuntos": "https://exitocol.vtexassets.com/arquivos/ids/31512884/conjunto-deportivo-o-sudadera-para-mujer-en-vioto-sin-capota.jpg?v=638978869737130000",
"Accesorios": "https://http2.mlstatic.com/D_Q_NP_868434-MCO98700523458_112025-O.webp",
"Shorts": "https://f.fcdn.app/imgs/422ab3/www.globalsports.com.uy/gls/4dc1/original/catalogo/ADJN5459-3283-1/460x460/adidas-short-squadra-25-black-white.jpg"}

const Listaproductos = [
  {
    imagen: "https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente.jpg?x81271",
    categoria: "Camisetas",
    productos: [
      {
        id: 1,
        nombre: "Camiseta Nike Dry Fit",
        descripcion: "Camiseta ligera con tecnología Dry Fit que absorbe el sudor, ideal para entrenamientos intensos.",
        precio: 85000,
        imagen: "https://picsum.photos/200?1",
        stock: 15,
        talla: ["S", "M", "L", "XL"],
      },
      {
        id: 2,
        nombre: "Camiseta Adidas Training",
        descripcion: "Camiseta transpirable diseñada para máxima comodidad durante rutinas deportivas.",
        precio: 90000,
        imagen: "https://picsum.photos/200?2",
        stock: 10,
        talla: ["M", "L"],
      },
      {
        id: 3,
        nombre: "Camiseta Puma Sport",
        descripcion: "Camiseta deportiva de ajuste cómodo, perfecta para uso diario o entrenamiento.",
        precio: 78000,
        imagen: "https://picsum.photos/200?3",
        stock: 20,
        talla: ["S", "M", "L"],
      },
      {
        id: 4,
        nombre: "Camiseta Reebok Active",
        descripcion: "Diseño moderno con tela flexible que permite libertad de movimiento.",
        precio: 82000,
        imagen: "https://picsum.photos/200?4",
        stock: 12,
        talla: ["M", "L", "XL"],
      },
      {
        id: 5,
        nombre: "Camiseta Under Armour HeatGear",
        descripcion: "Tecnología HeatGear que mantiene el cuerpo fresco incluso en altas temperaturas.",
        precio: 95000,
        imagen: "https://picsum.photos/200?5",
        stock: 9,
        talla: ["S", "M", "L"],
      }
    ]
 } ,
  {
    imagen: "https://pilatos21.vtexassets.com/arquivos/ids/1399946-800-800?v=638569333850270000&width=800&height=800&aspect=true",
    categoria: "Tenis",
    productos: [
      {
        id: 1,
        nombre: "Camiseta Nike Dry Fit",
        descripcion: "Camiseta ligera con tecnología Dry Fit que absorbe el sudor, ideal para entrenamientos intensos.",
        precio: 85000,
        imagen: "https://picsum.photos/200?1",
        stock: 15,
        talla: ["S", "M", "L", "XL"],
      },
      {
        id: 2,
        nombre: "Camiseta Adidas Training",
        descripcion: "Camiseta transpirable diseñada para máxima comodidad durante rutinas deportivas.",
        precio: 90000,
        imagen: "https://picsum.photos/200?2",
        stock: 10,
        talla: ["M", "L"],
      },
      {
        id: 3,
        nombre: "Camiseta Puma Sport",
        descripcion: "Camiseta deportiva de ajuste cómodo, perfecta para uso diario o entrenamiento.",
        precio: 78000,
        imagen: "https://picsum.photos/200?3",
        stock: 20,
        talla: ["S", "M", "L"],
      },
      {
        id: 4,
        nombre: "Camiseta Reebok Active",
        descripcion: "Diseño moderno con tela flexible que permite libertad de movimiento.",
        precio: 82000,
        imagen: "https://picsum.photos/200?4",
        stock: 12,
        talla: ["M", "L", "XL"],
      },
      {
        id: 5,
        nombre: "Camiseta Under Armour HeatGear",
        descripcion: "Tecnología HeatGear que mantiene el cuerpo fresco incluso en altas temperaturas.",
        precio: 95000,
        imagen: "https://picsum.photos/200?5",
        stock: 9,
        talla: ["S", "M", "L"],
      }
    ]
 } ,
  {
    imagen: "https://exitocol.vtexassets.com/arquivos/ids/31512884/conjunto-deportivo-o-sudadera-para-mujer-en-vioto-sin-capota.jpg?v=638978869737130000",
    categoria: "Conjuntos",
    productos: [
      {
        id: 1,
        nombre: "Camiseta Nike Dry Fit",
        descripcion: "Camiseta ligera con tecnología Dry Fit que absorbe el sudor, ideal para entrenamientos intensos.",
        precio: 85000,
        imagen: "https://picsum.photos/200?1",
        stock: 15,
        talla: ["S", "M", "L", "XL"],
      },
      {
        id: 2,
        nombre: "Camiseta Adidas Training",
        descripcion: "Camiseta transpirable diseñada para máxima comodidad durante rutinas deportivas.",
        precio: 90000,
        imagen: "https://picsum.photos/200?2",
        stock: 10,
        talla: ["M", "L"],
      },
      {
        id: 3,
        nombre: "Camiseta Puma Sport",
        descripcion: "Camiseta deportiva de ajuste cómodo, perfecta para uso diario o entrenamiento.",
        precio: 78000,
        imagen: "https://picsum.photos/200?3",
        stock: 20,
        talla: ["S", "M", "L"],
      },
      {
        id: 4,
        nombre: "Camiseta Reebok Active",
        descripcion: "Diseño moderno con tela flexible que permite libertad de movimiento.",
        precio: 82000,
        imagen: "https://picsum.photos/200?4",
        stock: 12,
        talla: ["M", "L", "XL"],
      },
      {
        id: 5,
        nombre: "Camiseta Under Armour HeatGear",
        descripcion: "Tecnología HeatGear que mantiene el cuerpo fresco incluso en altas temperaturas.",
        precio: 95000,
        imagen: "https://picsum.photos/200?5",
        stock: 9,
        talla: ["S", "M", "L"],
      }
    ]
 } ,
  {
    imagen: "https://http2.mlstatic.com/D_Q_NP_868434-MCO98700523458_112025-O.webp",
    categoria: "Accesorios",
    productos: [
      {
        id: 1,
        nombre: "Camiseta Nike Dry Fit",
        descripcion: "Camiseta ligera con tecnología Dry Fit que absorbe el sudor, ideal para entrenamientos intensos.",
        precio: 85000,
        imagen: "https://picsum.photos/200?1",
        stock: 15,
        talla: ["S", "M", "L", "XL"],
      },
      {
        id: 2,
        nombre: "Camiseta Adidas Training",
        descripcion: "Camiseta transpirable diseñada para máxima comodidad durante rutinas deportivas.",
        precio: 90000,
        imagen: "https://picsum.photos/200?2",
        stock: 10,
        talla: ["M", "L"],
      },
      {
        id: 3,
        nombre: "Camiseta Puma Sport",
        descripcion: "Camiseta deportiva de ajuste cómodo, perfecta para uso diario o entrenamiento.",
        precio: 78000,
        imagen: "https://picsum.photos/200?3",
        stock: 20,
        talla: ["S", "M", "L"],
      },
      {
        id: 4,
        nombre: "Camiseta Reebok Active",
        descripcion: "Diseño moderno con tela flexible que permite libertad de movimiento.",
        precio: 82000,
        imagen: "https://picsum.photos/200?4",
        stock: 12,
        talla: ["M", "L", "XL"],
      },
      {
        id: 5,
        nombre: "Camiseta Under Armour HeatGear",
        descripcion: "Tecnología HeatGear que mantiene el cuerpo fresco incluso en altas temperaturas.",
        precio: 95000,
        imagen: "https://picsum.photos/200?5",
        stock: 9,
        talla: ["S", "M", "L"],
      }
    ]
 } ,
  {
    imagen: "https://f.fcdn.app/imgs/422ab3/www.globalsports.com.uy/gls/4dc1/original/catalogo/ADJN5459-3283-1/460x460/adidas-short-squadra-25-black-white.jpg",
    categoria: "Shorts",
    productos: [
      {
        id: 1,
        nombre: "Camiseta Nike Dry Fit",
        descripcion: "Camiseta ligera con tecnología Dry Fit que absorbe el sudor, ideal para entrenamientos intensos.",
        precio: 85000,
        imagen: "https://picsum.photos/200?1",
        stock: 15,
        talla: ["S", "M", "L", "XL"],
      },
      {
        id: 2,
        nombre: "Camiseta Adidas Training",
        descripcion: "Camiseta transpirable diseñada para máxima comodidad durante rutinas deportivas.",
        precio: 90000,
        imagen: "https://picsum.photos/200?2",
        stock: 10,
        talla: ["M", "L"],
      },
      {
        id: 3,
        nombre: "Camiseta Puma Sport",
        descripcion: "Camiseta deportiva de ajuste cómodo, perfecta para uso diario o entrenamiento.",
        precio: 78000,
        imagen: "https://picsum.photos/200?3",
        stock: 20,
        talla: ["S", "M", "L"],
      },
      {
        id: 4,
        nombre: "Camiseta Reebok Active",
        descripcion: "Diseño moderno con tela flexible que permite libertad de movimiento.",
        precio: 82000,
        imagen: "https://picsum.photos/200?4",
        stock: 12,
        talla: ["M", "L", "XL"],
      },
      {
        id: 5,
        nombre: "Camiseta Under Armour HeatGear",
        descripcion: "Tecnología HeatGear que mantiene el cuerpo fresco incluso en altas temperaturas.",
        precio: 95000,
        imagen: "https://picsum.photos/200?5",
        stock: 9,
        talla: ["S", "M", "L"],
      }
    ]
 } 
];

// Array de productos
let productos = [
    {nombre:"Cama para perro", categoria: "Mujer", precio:260000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXTgoIHO7sV_eaa0lB8Jylma1cx4eUc14cw&s"},
    {nombre:"Cama para gato", categoria: "Hombre", precio:180000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dwub7KNi04QZhzzjHMqVZthFFGbUdwJrsA&s"},
    {nombre:"Rascador para gato XL", categoria: "Niños", precio:450000, imagen: "https://www.elcontainer.cl/3850-thickbox_default/rascador-para-gatos-tres-niveles.jpg"},
    {nombre:"Pechera para perro", categoria: "Mujer", precio:150000, imagen: "https://veterinariadrmartinez.com/wp-content/uploads/2021/08/1561577103-41G38Fnwy4L.jpeg"},
    {nombre:"Alimento para perro", categoria: "Hombre", precio:90000, imagen: "https://i0.wp.com/www.ecovet.com.co/wp-content/uploads/2023/04/Agility-gold-pequenos-adultos.webp?resize=300%2C300&ssl=1"},
    {nombre:"Alimento para gato", categoria: "Niños", precio:700000, imagen: "https://petgold.s3.amazonaws.com/wp-content/uploads/2023/08/10031527/br-for-cat-adultos-salmon.webp"}
]

// Renderizar filtros
function disenoFiltro (nombre, imagen){
return `<div class="card" style="cursor: pointer;">
  <img src ="${imagen}" class="card-img-top" alt="${nombre}">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
 </div>
</div>`; 
}
function renderizarFiltros() {
Listaproductos.forEach(productos => {
        const divImg = document.createElement("div");
        divImg.innerHTML = disenoFiltro(productos.categoria, productos.imagen); 
        filters.appendChild(divImg);
    });
}

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

renderizarFiltros();