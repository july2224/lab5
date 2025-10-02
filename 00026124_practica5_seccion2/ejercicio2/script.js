// Carrito de compras
const carrito = {
  productos: [
    { nombre: 'papel higienico', unidades: 4, precio: 5 },
    { nombre: 'chocolate', unidades: 2, precio: 1.5 }
  ],

  get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos.length; i++) {
      precio += this.productos[i].unidades * this.productos[i].precio;
    }
    return precio;
  }
};

// Mostrar en la página
document.body.innerHTML += `<h2>Productos</h2>`;
carrito.productos.forEach(p => {
  document.body.innerHTML += `<p>${p.unidades} x ${p.nombre} → $${p.precio}</p>`;
});
document.body.innerHTML += `<h3>Total: $${carrito.precioTotal}</h3>`;
