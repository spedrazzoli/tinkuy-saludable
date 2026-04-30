const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = 3000;

const categorias = [
  "Frutos Secos",
  "Pasta de Maní",
  "Frutas Glaseadas - Nevadas y Escurridas",
  "Frutas Desecadas",
  "Arropes y Molde de Membrillo (MUPAY)",
  "Frutas Deshidratada",
  "Arroces",
  "Fideos",
  "Avenas",
  "Legumbres",
  "Harinas",
  "Premezclas de Harinas",
  "Especias",
  "Hierbas - Yerbas e Infusiones",
  "Semillas",
  "Mix de Semillas",
  "Maíz - Maíz Frito",
  "Trigo",
  "Salvados",
  "Otros Cereales",
  "Cereales Envasados",
  "Cacao - Azúcares - Endulzantes",
  "Saborizantes - Aromatizantes",
  "Gustitos",
  "Levaduras",
  "Miel",
  "Gelatina",
  "Aceites - Salsa de soja - Caldos",
  "Galletitas",
  "Mermeladas"
];

const productos = {
  "Frutos Secos": [
    {
      nombre: "Mix de frutos secos Premium",
      detalle: "Nuez, Avellana, Cajú, Almendra",
      precioKilo: 17277
    },
    {
      nombre: "Mix de frutos secos Económico",
      detalle: "Nuez, Almendra, Cajú, Avellana, Maní sin sal, Pasas de uva",
      precioKilo: 7425
    },
    {
      nombre: "Mix de frutos secos SIN Maní",
      detalle: "Nuez, Almendra, Cajú, Avellana, Pasas de uva",
      precioKilo: 10909
    },
    {
      nombre: "Mix de frutos secos Tropical",
      detalle: "Nuez, Almendra, Cajú, Chip de banana, Ananá en cubo, Papaya en cubo, Pasas de uva",
      precioKilo: 9230
    },
    {
      nombre: "Mix Energético",
      detalle: "Almendra, Semillas de zapallo, Semillas de girasol pelado, Arandanos deshidratados, Chips de coco",
      precioKilo: 8054
    },
    {
      nombre: "Mix Pan Dulce",
      detalle: "Fruta nevada, Nuez pelada, Almendra pelada, Cajú, Avellana, Pasas rubias y morochas",
      precioKilo: 7583
    },
    {
      nombre: "Mix Patagónico",
      detalle: "Arándanos, Pasas rubias, Chips de coco, Avellana tostada, Cajú tostado, Nuez pelada, Manzana en cubos",
      precioKilo: 11930
    },
    {
      nombre: "Mix Picante",
      detalle: "Maíz saborizdo, Maní tostado salado, Pasas de uva",
      precioKilo: 4391
    },
    {
      nombre: "Mix Salado",
      detalle: "Maíz frito, Almendras peladas, Maní salado, Semmillas de zapallo, Semillas de girasol pelado",
      precioKilo: 5322
    },
    {
      nombre: "Mix Pecán",
      detalle: "Nuez mariposa, Nuez Pecán, Cajú, Almendras peladas, Pistacho",
      precioKilo: 16060
    },
    {
      nombre: "Almendra Pelada Non Pareil 27/30 (mas chica)",
      detalle: "",
      precioKilo: 20100
    },
    {
      nombre: "Almendra Pelada NON PAREIL 25/27 ORIGEN CHILE (mas grande)",
      detalle: "",
      precioKilo: 20000
    },
    {
      nombre: "Avellanas peladas 13/15",
      detalle: "",
      precioKilo: 0
    },
    {
      nombre: "Castañas De Caju Naturales W1",
      detalle: "",
      precioKilo: 15285
    },
    {
      nombre: "Castañas De Caju Naturales W4",
      detalle: "",
      precioKilo: 13629
    },
    {
      nombre: "Castañas De Caju Tostada Salada",
      detalle: "",
      precioKilo: 15987
    },
    {
      nombre: "Castañas de Caju Tostadas",
      detalle: "",
      precioKilo: 15987
    },
    {
      nombre: "Nuez PECAN pelada entera",
      detalle: "",
      precioKilo: 23520
    },
    {
      nombre: "Nuez PECAN PELADA MINI Y CUARTOS",
      detalle: "",
      precioKilo: 18584
    },
    {
      nombre: "Nuez Con Cascara Chandler 34/36 COSECHA 2026",
      detalle: "",
      precioKilo: 5589
    },
    {
      nombre: "Nuez Pelada Mariposa Chandler EXTRA LIGHT COSECHA 2026",
      detalle: "",
      precioKilo: 15604
    },
    {
      nombre: "Pistachos Tostado Y Salado",
      detalle: "",
      precioKilo: 31768
    },
    {
      nombre: "Pistacho Pelado",
      detalle: "",
      precioKilo: 0
    },
    {
      nombre: "Grana de maní tostado",
      detalle: "",
      precioKilo: 2125
    },
    {
      nombre: "Maní blanchado partido",
      detalle: "(Pelado)",
      precioKilo: 1969
    },
    {
      nombre: "Maní blanchado tostado",
      detalle: "",
      precioKilo: 1884
    },
    {
      nombre: "Maní crudo runner",
      detalle: "Natural",
      precioKilo: 2045
    },
    {
      nombre: "Maní japonés",
      detalle: "",
      precioKilo: 12480
    },
    {
      nombre: "Maní tostado salado",
      detalle: "",
      precioKilo: 2310
    },
    {
      nombre: "Maní con cáscara",
      detalle: "",
      precioKilo: 2563
    }
  ]
};

function calcularPrecios(precioKilo) {
  return {
    kilo: precioKilo,
    medio: precioKilo / 2,
    cuarto: precioKilo / 4,
    cien: precioKilo / 10
  };
}

function formatoPrecio(valor) {
  return valor.toLocaleString("es-AR");
}

function estilosGenerales() {
  return `
    <style>
.hoja-der {
  position: absolute;
  top: 40px;
  right: 220px;
  width: 260px;
  opacity: 0.9;
  z-index: 2;
  clip-path: inset(0 0 0 50%);
  transform: rotate(-25deg);
}

.hoja-izq {
  position: absolute;
  top: 40px;
  left: 220px;
  width: 260px;
  opacity: 0.9;
  z-index: 2;
  clip-path: inset(0 0 0 50%);
  transform: scaleX(-1) rotate(-25deg);
}

.logo {
  display: block;
  margin: 0 auto 15px auto;
  max-width: 200px;
  position: relative;
  z-index: 3;
}
    body {
  font-family: Arial;
  background: #f5e6cc;
  
  padding: 30px;
}

.card {
  background: #fffaf0;
  max-width: 900px;
  margin: auto;
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  position: relative;
}

h1 {
  color: #5a3b1e;
  text-align: center;
}

.categoria {
  display: block;
  padding: 14px;
  margin: 8px 0;
  background: #fdf6ec;
  border-left: 6px solid #6b7f3f;
  border-radius: 10px;
  text-decoration: none;
  color: #5a3b1e;
  font-size: 18px;
}

.categoria:hover {
  background: #e8a4a8;
  color: white;
}

.carrito-link {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #6b7f3f;
  color: white;
  padding: 12px 18px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  z-index: 99999;
}

.precios {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.precio {
  background: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  flex: 1;
}

.producto {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  color: #5a3b1e;
}

.detalle {
  font-size: 14px;
  color: #777;
  font-weight: normal;
  margin-left: 5px;
}
  button {
  margin-top: 8px;
  width: 100%;
  padding: 8px;
  background: #e8a4a8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #d98c91;
}
  .acciones-carrito {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

  .acciones {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.acciones a {
  flex: 1;
  text-align: center;
  padding: 12px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
}

/* Botón principal */
.btn-principal {
  background: #6b7f3f;
  color: white;
}

.btn-principal:hover {
  background: #5a6d34;
}

/* Botón secundario */
.btn-secundario {
  background: #f5e6cc;
  color: #5a3b1e;
  border: 1px solid #ddd;
}

.btn-secundario:hover {
  background: #e8a4a8;
  color: white;
}

@media (max-width: 900px) {

  body {
    padding: 6px;
  }

  .card {
    width: auto;
    max-width: 100%;
    padding: 14px;
    margin: 10px 6px;
  }

  .logo {
    max-width: 150px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  .categoria {
    font-size: 18px;
    padding: 16px;
    margin: 8px 0;
  }

  .detalle {
    font-size: 14px;
  }

  .producto {
    font-size: 16px;
    margin-top: 14px;
  }

  .precio {
    font-size: 17px;
    padding: 12px;
  }

  button {
    font-size: 17px;
    padding: 12px;
    min-height: 46px;
  }

  .acciones a {
    font-size: 16px;
    padding: 12px;
  }

  .precios {
    flex-direction: column;
  }

  .carrito-link {
    top: 8px;
    right: 8px;
    font-size: 13px;
    padding: 8px 10px;
    border-radius: 10px;
    z-index: 99999;
  }

  .hoja-izq {
  top: 75px;
  left: 50px;
  width: 150px;
  transform: scaleX(-1) rotate(-18deg);
}

  .hoja-der {
  top: 75px;
  right: 50px;
  width: 150px;
  transform: rotate(-18deg);
}

}
    </style>
  `;
}

function scriptCarrito() {
  return `
    <script>
      function obtenerCarrito() {
        return JSON.parse(localStorage.getItem("carrito")) || [];
      }

      function guardarCarrito(carrito) {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarContadorCarrito();
      }

      function agregarAlCarrito(nombre, presentacion, precio) {
        const carrito = obtenerCarrito();

        carrito.push({
          nombre,
          presentacion,
          precio
        });

        guardarCarrito(carrito);

        document.getElementById("acciones-carrito").style.display = "flex";
      }

      function actualizarContadorCarrito() {
        const carrito = obtenerCarrito();
        const contador = document.getElementById("contador-carrito");

        if (contador) {
          contador.innerText = carrito.length;
        }
      }

      function vaciarCarrito() {
        localStorage.removeItem("carrito");
        location.reload();
      }

      window.onload = actualizarContadorCarrito;
    </script>
  `;
}

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Lista de Precios</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${estilosGenerales()}
      </head>

      <body>
       
      <a class="carrito-link" href="/carrito">🛒 Carrito (<span id="contador-carrito">0</span>)</a>

        <div class="card">
          <img src="/logo.png" class="logo">
          <img src="/hojas.png" class="hoja-der">
          <img src="/hojas.png" class="hoja-izq">
          <h1>Lista de Precios</h1>

          ${categorias.map(categoria => `
            <a class="categoria" href="/categoria/${encodeURIComponent(categoria)}">
              ${categoria}
            </a>
          `).join("")}
        </div>

        ${scriptCarrito()}
      </body>
    </html>
  `);
});

app.get("/categoria/:nombre", (req, res) => {
  const nombreCategoria = decodeURIComponent(req.params.nombre);
  const listaProductos = productos[nombreCategoria] || [];

  res.send(`
    <html>
      <head>
        <title>${nombreCategoria}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${estilosGenerales()}
      </head>

      <body>
        
        <a class="carrito-link" href="/carrito">🛒 Carrito (<span id="contador-carrito">0</span>)</a>

        <div class="card">
          <h1>${nombreCategoria}</h1>

          ${listaProductos.length === 0
      ? `<p>Todavía no hay productos cargados en esta categoría.</p>`
      : listaProductos.map(producto => {
        const precios = calcularPrecios(producto.precioKilo);

        return `
                    <div class="producto">
                      <h2>
                      ${producto.nombre}
                      ${producto.detalle ? `<span class="detalle">(${producto.detalle})</span>` : ""}
                      </h2>
                      <div class="precios">
                        <div class="precio">
                          1 kg<br>
                          <strong>$${formatoPrecio(precios.kilo)}</strong>
                          <button onclick="agregarAlCarrito('${producto.nombre}', '1 kg', ${precios.kilo})">Agregar</button>
                        </div>

                        <div class="precio">
                          500 gr<br>
                          <strong>$${formatoPrecio(precios.medio)}</strong>
                          <button onclick="agregarAlCarrito('${producto.nombre}', '500 g', ${precios.medio})">Agregar</button>
                        </div>

                        <div class="precio">
                          250 gr<br>
                          <strong>$${formatoPrecio(precios.cuarto)}</strong>
                          <button onclick="agregarAlCarrito('${producto.nombre}', '250 g', ${precios.cuarto})">Agregar</button>
                        </div>

                        <div class="precio">
                          100 gr<br>
                          <strong>$${formatoPrecio(precios.cien)}</strong>
                          <button onclick="agregarAlCarrito('${producto.nombre}', '100 g', ${precios.cien})">Agregar</button>
                        </div>
                      </div>

                      <div class="acciones">
                      <a class="btn-secundario" href="/categoria/${encodeURIComponent(nombreCategoria)}">
                      Seguir comprando
                      </a>

                      <a class="btn-principal" href="/carrito">
                      🛒 Ir al carrito
                      </a>
                      </div>
                    </div>
                  `;
      }).join("")
    }

          <a class="btn-secundario volver-carrito" href="/">
          ← Seguir comprando
        </div>

        ${scriptCarrito()}
      </body>
    </html>
  `);
});

app.get("/carrito", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Carrito</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${estilosGenerales()}
      </head>

      <body>
        
        <a class="carrito-link" href="/carrito">🛒 Carrito (<span id="contador-carrito">0</span>)</a>

        <div class="card">
          <h1>Carrito</h1>

          <div id="lista-carrito"></div>
          <div id="total-carrito"></div>

          <a id="confirmar-compra" class="confirmar" href="#">Enviar pedido por WhatsApp</a>

          <button onclick="vaciarCarrito()">Vaciar carrito</button>

          <a class="btn-secundario volver-carrito" href="/">
          Seguir comprando
        </div>

        ${scriptCarrito()}

        <script>
         function eliminarProducto(index) {
          const carrito = obtenerCarrito();

          carrito.splice(index, 1);

          guardarCarrito(carrito);

          location.reload();
          }
          const carrito = obtenerCarrito();
          const lista = document.getElementById("lista-carrito");
          const totalDiv = document.getElementById("total-carrito");
          const confirmar = document.getElementById("confirmar-compra");

          if (carrito.length === 0) {
            lista.innerHTML = "<p>El carrito está vacío.</p>";
            confirmar.style.display = "none";
          } else {
            let total = 0;

            lista.innerHTML = carrito.map((item, index) => {
              total += item.precio;

              return \`
                <div class="item-carrito">
                  <strong>\${item.nombre}</strong><br>
                  Presentación: \${item.presentacion}<br>
                  Precio: $\${item.precio.toLocaleString("es-AR")}

                  <button onclick="eliminarProducto(\${index})">
                  Eliminar este producto
                  </button>
                </div>
              \`;
            }).join("");

            totalDiv.innerHTML = \`
              <h2>Total estimado: $\${total.toLocaleString("es-AR")}</h2>
              <p>El pedido queda sujeto a disponibilidad.</p>
            \`;

            let mensaje = "Hola! 👋%0A";
            mensaje += "Quisiera consultar disponibilidad para el siguiente pedido:%0A%0A";

            carrito.forEach(item => {
            mensaje += "• " + item.nombre + " (" + item.presentacion + ") - $" + item.precio.toLocaleString("es-AR") + "%0A";
            });

            mensaje += "%0A";
            mensaje += "🧾 Total estimado: $" + total.toLocaleString("es-AR") + "%0A%0A";
            mensaje += "Quedo a la espera de confirmación de stock y datos para realizar el pago por transferencia. Gracias! 🙌";

            confirmar.href = "https://wa.me/5491158099244?text=" + mensaje;
          }
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});