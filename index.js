const productos = [
  {
    articulo: "Robot Darth Vader",
    precio: 10.99,
    detalle: "Figura decorativa",
    imagenUrl: "./img/Darthvader.png",
  },
  {
    articulo: "Muñeco Baby Yoda",
    precio: 19.99,
    detalle: "Descripción del producto 2",
    imagenUrl: "./img/babyyoda.png",
  },
  {
    articulo: "Taza Casco Blanco",
    precio: 19.99,
    detalle: "Descripción del producto 2",
    imagenUrl: "./img/eplicant.png",
  },
  {
    articulo: "Game Boy",
    precio: 19.99,
    detalle: "Descripción del producto 2",
    imagenUrl: "./img/gameboy.png",
  },
  {
    articulo: "Consola Nintendo",
    precio: 19.99,
    detalle: "Consola Juegos retro ",
    imagenUrl: "./img/nes.png",
  },

  {
    articulo: "Play Station 5",
    precio: 10.99,
    detalle: "Consola v.5.0",
    imagenUrl: "./img/ps5.png",
  },
  {
    articulo: "Sonic",
    precio: 19.99,
    detalle: "Muñeco Sonic",
    imagenUrl: "./img/sonic.png",
  },
  {
    articulo: "Nintendo Switch",
    precio: 19.99,
    detalle: "Gameplay Switch",
    imagenUrl: "./img/switch.png",
  },
  {
    articulo: "Control XBox",
    precio: 19.99,
    detalle: "Mando / Control XBox",
    imagenUrl: "./img/xbox.png",
  },
  {
    articulo: "Consola XBox One",
    precio: 19.99,
    detalle: "Consola V. One",
    imagenUrl: "./img/xboxone.png",
  },

  // Más objetos de productos...
];

// Contenedor de las cards
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorFavoritos = document.getElementById("containerFavoritos");

renderizarTarjetas(productos, contenedorTarjetas);
// Recorre el array de objetos y crea las tarjetas
// recibe el objeto y crea las tarjetas
function renderizarTarjetas(objetoProductos, containerDiv) {
  objetoProductos.forEach((producto) => {
    // Crea un elemento div para la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");

    // Crea la estructura HTML de la tarjeta usando una plantilla
    tarjeta.innerHTML = `
<img src="${producto.imagenUrl}" class="card-img-top" alt="${
      producto.articulo
    }">
<div class="card-body">
<h5 class="card-title">${producto.articulo}</h5>
<i class="favoritoUnSelected">★</i>
<p class="card-text">${producto.detalle}</p>
<p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
</div>
`;

    // Agrega la tarjeta al contenedor
    containerDiv.appendChild(tarjeta);
  });
}

//Ejemplo renderizando favoritos
//renderizarTarjetas(productos, contenedorFavoritos);

// NodeList con todas elementos que tienen clase "card"
const tarjetas = document.querySelectorAll(".card");

let tarjetasFavoritas = [];

// Atiende los eventos de clic de cada tarjeta recorre todo el Objeto tarjetas
tarjetas.forEach((tarjeta) => {
  const icono = tarjeta.querySelector(".favoritoUnSelected");

  tarjeta.addEventListener("click", () => {
    // Dispara una función personalizada al hacer clic en la tarjeta
    funcionPersonalizada(tarjeta);

    // Evita que el clic en la tarjeta afecte al icono de favorito
    if (!event.target.classList.contains("favoritoUnSelected")) {
      // Cambia el fondo de la tarjeta al hacer clic
      tarjeta.classList.toggle("cardSeleccionada");
    }
  });

  // Atiende los eventos de clic al icono de favorito
  icono.addEventListener("click", (event) => {
    // Cambia el estado del icono (activo o inactivo) al hacer clic en él
    icono.classList.toggle("favoritoSelected");
    const titulo = tarjeta.querySelector("h5").textContent;

    //Carga el array de tarjetasFavoritas hace un toggle
    if (tarjetasFavoritas.includes(titulo)) {
      // Si está en la lista de favoritos lo saca
      tarjetasFavoritas.splice(tarjetasFavoritas.indexOf(titulo), 1);
    } else {
      // Si el producto no está en la lista lo agrega
      tarjetasFavoritas.push(titulo);
    }

    console.log(tarjetasFavoritas);

    // Detiene la propagación del evento para evitar que afecte a la tarjeta
    event.stopPropagation();
  });
});

// Función personalizada que se dispara al hacer clic en una tarjeta
function funcionPersonalizada(tarjeta) {
  console.log("Tarjeta seleccionada:", tarjeta.textContent);
}

function mostrarProductosFavoritos() {
  const tarjetasFavoritasObjeto = obtenerTarjetasFavoritas();
  console.log(tarjetasFavoritasObjeto);
}

const btnMostrarFavoritos = document.getElementById("btnMostrarFavoritos");

btnMostrarFavoritos.addEventListener("click", () => {
  mostrarProductosFavoritos(); // Llama a la función para mostrar productos favoritos
});

function obtenerTarjetasFavoritas() {
  const tarjetasFavoritasObjeto = {};

  // Recorre el array de tarjetas favoritas
  tarjetasFavoritas.forEach((tarjeta, index) => {
    // Busca la tarjeta en el objeto 'productos' por su índice
    const producto = productos[index];

    // Crea una clave única para cada tarjeta favorita (por ejemplo, el índice)
    const clave = `tarjeta${index}`;

    // Almacena toda la información de la tarjeta favorita en el objeto
    tarjetasFavoritasObjeto[clave] = {
      articulo: producto.articulo,
      detalle: producto.detalle,
      precio: producto.precio,
      imagenUrl: producto.imagenUrl,
    };
  });
  console.log(tarjetasFavoritasObjeto);
}
