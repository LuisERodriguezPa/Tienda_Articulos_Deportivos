// Array de productos
const contenedorProductos = document.querySelector(".product-container");
export const tiendaDeportiva = [
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

// Renderizar cards
export function renderizarProductos(categoriaSeleccionada = null) {
  contenedorProductos.innerHTML = "";

  tiendaDeportiva.forEach((categoria) => {
    if (
      categoriaSeleccionada &&
      categoria.categoria !== categoriaSeleccionada
    ) {
      return;
    }

    categoria.productos.forEach((producto) => {
      const card = document.createElement("div");
      card.className = "product-card";

      const image = document.createElement("img");
      image.className = "product-image";

      const name = document.createElement("h3");
      name.className = "product-name";

      const price = document.createElement("p");
      price.className = "product-price";

      const button = document.createElement("button");
      button.className = "add-to-cart-btn";

      // Dataset único
      button.dataset.id = producto.id;
      button.dataset.nombre = producto.nombre;
      button.dataset.precio = producto.precio;

      // Valores
      image.src = producto.imagen;
      name.textContent = producto.nombre;
      price.textContent = "$" + producto.precio.toLocaleString("es-CO");
      button.textContent = "Agregar";

      // Append
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(button);

      contenedorProductos.appendChild(card);
    });
  });
}