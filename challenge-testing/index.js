class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto({ nombre, precio, cantidad }) {
    this.carrito.push({ nombre, precio, cantidad });
  }
  calcularTotal() {
    return this.carrito.reduce((accum, producto) => {
      return (accum += producto.precio * producto.cantidad);
    }, 0);
  }
  aplicarDescuento(porcentaje) {
    return (this.calcularTotal() * porcentaje) / 100;
  }
}

module.exports = { CarritoCompra };