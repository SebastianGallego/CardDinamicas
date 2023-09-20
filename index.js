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

// Recorre el array de productos y crea las tarjetas
productos.forEach((producto) => {
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
  contenedorTarjetas.appendChild(tarjeta);
});

const tarjetas = document.querySelectorAll(".card");

let tarjetasFavoritas = [];

// Agrega un controlador de eventos de clic a cada tarjeta recorre todo el Objeto tarjetas
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

  // Agrega un controlador de eventos de clic al icono de favorito
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
