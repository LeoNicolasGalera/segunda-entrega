let cuotas = 0;
let interes = 0;
let total = 0;
let descuento = 0;
let valorcuota = 0;

let arrayProducto = [
  {
    id: 1,
    nombre: "Griferia",
    precio: 25000,
    stock: 30,
  },
  {
    id: 2,
    nombre: "Bacha",
    precio: 35000,
    stock: 15,
  },
  {
    id: 3,
    nombre: "Espejos",
    precio: 20000,
    stock: 20,
  },
  {
    id: 4,
    nombre: "Terminaciones",
    precio: 30000,
    stock: 25,
  },
];
let arrayTarjeta = [
  {
    id: 1,
    tarjeta: "Cordobesa",
    interes: 1.1,
    interesNumero: 10,
  },
  {
    id: 2,
    tarjeta: "Visa",
    interes: 1.15,
    interesNumero: 15,
  },
  {
    id: 3,
    tarjeta: "Naranja",
    interes: 1.2,
    interesNumero: 20,
  },
  {
    id: 4,
    tarjeta: "Mastercard",
    interes: 1.25,
    interesNumero: 25,
  },
];

function consultarProductos() {
  let array = [];
  arrayProducto.forEach((p) => {
    array.push({
      nombre: p.nombre.toUpperCase(),
      precio: p.precio,
    });
  });
  let id = arrayProducto.map((i) => i.nombre);
  let consulta = prompt("Ingrese nombre del producto:" + "\n" + id);

  let productosFiltrados = [];
  for (let i = 0; i < array.length; i++) {
    const producto = array[i];
    if (producto.nombre.includes(`${consulta}`.toUpperCase())) {
      productosFiltrados.push(producto);
    }
  }
  let precio = alert(
    `Su compra es: ${productosFiltrados.map(
      (p) => p.nombre
    )} y su precio es: $${productosFiltrados.map((m) => m.precio)}`
  );
  let mensaje = prompt(
    "como lo quiere abonar\n 1) Tarjeta de Credito o 2)Efectivo"
  );

  if (mensaje == 1) {
    let mensaje2 = prompt(
      "Eliga Tarjeta:" +
        arrayTarjeta.map((t) => t.tarjeta + t.interesNumero + "%")
    );

    if (mensaje2 != "") {
      alert(
        `con tarjeta ${mensaje2} el total es:  ${productosFiltrados.map(
          (m) => m.precio
        )}`
      );
    }
  } else if (mensaje == 2) {
    alert(
      `en efectivo tiene un descuento del 20%  y el total de su compra es $${productosFiltrados.map(
        (m) => m.precio * 0.8
      )}`
    );
  }
}
consultarProductos();
