// Array de productos
const contenedorProductos = document.querySelector(".product-container");
export const tiendaDeportiva = [
  {
    categoria: "Camisetas",
    imagen: "https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente.jpg?x81271",
    productos: [
      {
        id: 1,
        nombre: "Camiseta Nike Dry Fit",
        descripcion: "Camiseta ligera con tecnología Dry Fit que absorbe el sudor.",
        precio: 85000,
        imagen: "https://i.pinimg.com/736x/2c/4b/e0/2c4be09b4ab2d1f09e379dde48056e7e.jpg",
        stock: 15,
        talla: ["S", "M", "L", "XL"],
      },
      {
        id: 2,
        nombre: "Camiseta Adidas Training",
        descripcion: "Diseño cómodo y transpirable ideal para entrenamientos intensos.",
        precio: 90000,
        imagen: "https://i.pinimg.com/1200x/51/20/c3/5120c368c9251310d6ead9f8b82ba30e.jpg",
        stock: 10,
        talla: ["M", "L"],
      },
      {
        id: 3,
        nombre: "Camiseta Puma Sport",
        descripcion: "Estilo deportivo con ajuste perfecto para mayor movilidad.",
        precio: 78000,
        imagen: "https://i.pinimg.com/1200x/4f/35/12/4f351232179d2ec22d673cc6063b4616.jpg",
        stock: 20,
        talla: ["S", "M", "L"],
      },
      {
        id: 4,
        nombre: "Camiseta Reebok Active",
        descripcion: "Tela suave y resistente ideal para uso diario o gimnasio.",
        precio: 82000,
        imagen: "https://i.pinimg.com/1200x/b6/1d/04/b61d04deae79c89ed7daec4d2919a081.jpg",
        stock: 12,
        talla: ["M", "L", "XL"],
      },
      {
        id: 5,
        nombre: "Camiseta Under Armour HeatGear",
        descripcion: "Tecnología HeatGear que mantiene el cuerpo fresco y seco.",
        precio: 95000,
        imagen: "https://i.pinimg.com/736x/28/01/88/280188b734f0a40f581bf2ff3b387aa4.jpg",
        stock: 9,
        talla: ["S", "M", "L"],
      },
    ],
  },

  {
    categoria: "Tenis",
    imagen:"https://pilatos21.vtexassets.com/arquivos/ids/1399946-800-800?v=638569333850270000&width=800&height=800&aspect=true",
    productos: [
      {
        id: 6,
        nombre: "Tenis Nike Air Zoom",
        descripcion: "Amortiguación avanzada para máximo rendimiento al correr.",
        precio: 250000,
        imagen: "https://i.pinimg.com/736x/c2/36/3d/c2363dc5aea1525373d3a39ccdc73362.jpg",
        stock: 8,
        talla: [38, 39, 40, 41, 42],
      },
      {
        id: 7,
        nombre: "Tenis Adidas Ultraboost",
        descripcion: "Tecnología Boost para mayor retorno de energía.",
        precio: 320000,
        imagen: "https://i.pinimg.com/736x/63/15/b8/6315b8296d9a006211375b73e84d460a.jpg",
        stock: 5,
        talla: [39, 40, 41],
      },
      {
        id: 8,
        nombre: "Tenis Puma Runner",
        descripcion: "Diseño liviano ideal para running y entrenamiento.",
        precio: 210000,
        imagen: "https://i.pinimg.com/736x/c7/cd/f7/c7cdf751b6d5da593206bed57d736ec9.jpg",
        stock: 11,
        talla: [38, 39, 40],
      },
      {
        id: 9,
        nombre: "Tenis Reebok Nano",
        descripcion: "Perfectos para entrenamiento funcional y crossfit.",
        precio: 280000,
        imagen: "https://i.pinimg.com/1200x/4f/c1/ac/4fc1ac416319a2ad40edf97cd2aa1c39.jpg",
        stock: 7,
        talla: [40, 41, 42],
      },
      {
        id: 10,
        nombre: "Tenis Under Armour Charged",
        descripcion: "Comodidad y soporte para largas sesiones deportivas.",
        precio: 260000,
        imagen: "https://i.pinimg.com/1200x/5d/6c/8a/5d6c8a3dfab8f1fce0f079fb12e9f718.jpg",
        stock: 6,
        talla: [39, 40, 41, 42],
      },
    ],
  },

  {
    categoria: "Accesorios",
    imagen:"https://http2.mlstatic.com/D_Q_NP_868434-MCO98700523458_112025-O.webp",
    productos: [
      {
        id: 11,
        nombre: "Gorra Nike",
        descripcion: "Gorra deportiva ajustable con diseño moderno.",
        precio: 45000,
        imagen: "https://i.pinimg.com/1200x/a3/6f/3d/a36f3d84a0ac8de40ce557bc46585818.jpg",
        stock: 20,
        talla: ["Única"],
      },
      {
        id: 12,
        nombre: "Morral Adidas",
        descripcion: "Morral espacioso ideal para gimnasio o uso diario.",
        precio: 120000,
        imagen: "https://i.pinimg.com/1200x/a8/a8/db/a8a8db00bc4ffd6328e788440801a660.jpg",
        stock: 12,
        talla: ["Única"],
      },
      {
        id: 13,
        nombre: "Botella Deportiva Puma",
        descripcion: "Botella resistente perfecta para mantenerte hidratado.",
        precio: 30000,
        imagen: "https://i.pinimg.com/736x/9e/d7/4a/9ed74ab96539a53ef6e6a8cb46c66a64.jpg",
        stock: 25,
        talla: ["Única"],
      },
      {
        id: 14,
        nombre: "Guantes Gym Reebok",
        descripcion: "Guantes ergonómicos para mayor agarre y protección.",
        precio: 55000,
        imagen: "https://i.pinimg.com/1200x/b4/24/df/b424df1222d2f585aa66252312a14624.jpg",
        stock: 18,
        talla: ["S", "M", "L"],
      },
      {
        id: 15,
        nombre: "Cinturón Fitness",
        descripcion: "Soporte lumbar ideal para levantamiento de pesas.",
        precio: 70000,
        imagen: "https://i.pinimg.com/1200x/77/80/9d/77809dd1ee209977e421f656dcc6de06.jpg",
        stock: 10,
        talla: ["M", "L"],
      },
    ],
  },

  {
    categoria: "Shorts",
    imagen:"https://f.fcdn.app/imgs/422ab3/www.globalsports.com.uy/gls/4dc1/original/catalogo/ADJN5459-3283-1/460x460/adidas-short-squadra-25-black-white.jpg",
    productos: [
      {
        id: 16,
        nombre: "Short Nike Pro",
        descripcion: "Short ajustado con soporte y comodidad.",
        precio: 80000,
        imagen: "https://i.pinimg.com/736x/c9/34/79/c934791f4f48bb43f7bb0d75f554ca4f.jpg",
        stock: 14,
        talla: ["M", "L", "XL"],
      },
      {
        id: 17,
        nombre: "Short Adidas Running",
        descripcion: "Ligero y transpirable ideal para correr.",
        precio: 70000,
        imagen: "https://i.pinimg.com/736x/03/08/61/030861faaf12512bec2a42c9ac368616.jpg",
        stock: 18,
        talla: ["S", "M", "L"],
      },
      {
        id: 18,
        nombre: "Short Puma Sport",
        descripcion: "Diseño cómodo con ajuste flexible.",
        precio: 65000,
        imagen: "https://i.pinimg.com/1200x/c4/53/c2/c453c2e3a4d243043d306c37aa8bab43.jpg",
        stock: 16,
        talla: ["S", "M", "L"],
      },
      {
        id: 19,
        nombre: "Short Reebok Training",
        descripcion: "Ideal para entrenamientos intensos.",
        precio: 72000,
        imagen: "https://i.pinimg.com/1200x/6c/18/cb/6c18cb1a5805469eb2d2344e575d0ebb.jpg",
        stock: 11,
        talla: ["M", "L"],
      },
      {
        id: 20,
        nombre: "Short Under Armour",
        descripcion: "Tecnología que mantiene frescura y comodidad.",
        precio: 85000,
        imagen: "https://i.pinimg.com/1200x/04/16/a8/0416a85cfdf077c45d1f19e603208564.jpg",
        stock: 9,
        talla: ["M", "L", "XL"],
      },
    ],
  },

  {
    categoria: "Conjuntos",
    imagen:"https://exitocol.vtexassets.com/arquivos/ids/31512884/conjunto-deportivo-o-sudadera-para-mujer-en-vioto-sin-capota.jpg?v=638978869737130000",
    productos: [
      {
        id: 21,
        nombre: "Conjunto Nike Deportivo",
        descripcion: "Conjunto cómodo ideal para entrenar o salir.",
        precio: 180000,
        imagen: "https://i.pinimg.com/1200x/ad/35/7e/ad357e2820fbba699c92bdd7d74c13b6.jpg",
        stock: 10,
        talla: ["S", "M", "L"],
      },
      {
        id: 22,
        nombre: "Conjunto Adidas Training",
        descripcion: "Diseño moderno con materiales de alta calidad.",
        precio: 200000,
        imagen: "https://i.pinimg.com/736x/44/84/76/448476012c280239b282ab1f99ecbe77.jpg",
        stock: 8,
        talla: ["M", "L", "XL"],
      },
      {
        id: 23,
        nombre: "Conjunto Puma Sport",
        descripcion: "Estilo deportivo con gran comodidad.",
        precio: 170000,
        imagen: "https://i.pinimg.com/1200x/66/07/7d/66077d7eb4c7732a4090a9921de7b7f9.jpg",
        stock: 12,
        talla: ["S", "M", "L"],
      },
      {
        id: 24,
        nombre: "Conjunto Reebok Active",
        descripcion: "Perfecto para entrenamiento y uso diario.",
        precio: 190000,
        imagen: "https://i.pinimg.com/736x/74/18/16/741816c5f3735f5997649087fd0b0a26.jpg",
        stock: 7,
        talla: ["M", "L"],
      },
      {
        id: 25,
        nombre: "Conjunto Under Armour",
        descripcion: "Alta calidad y confort para cualquier actividad.",
        precio: 210000,
        imagen: "https://i.pinimg.com/1200x/bf/f9/a7/bff9a7f1f176535173d084a90abd3ed4.jpg",
        stock: 6,
        talla: ["S", "M", "L", "XL"],
      },
    ],
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