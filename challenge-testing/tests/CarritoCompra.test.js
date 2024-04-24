const { CarritoCompra } = require("../index");

describe("CarritoCompra class testing.", function () {
  const miCarrito = new CarritoCompra();

  it("La clase CarritoCompra deberia ser una clase.", function () {
    expect(typeof CarritoCompra).toBe("function");
  });

  it("La instancia de miCarrito deberia ser un objeto.", function () {
    expect(typeof miCarrito).toBe("object");
  });

  it("La instancia de miCarrito deberia inicializarse con un array vacio en la propiedad carrito.", function () {
    expect(Array.isArray(miCarrito.carrito)).toBe(true);
    expect(miCarrito.carrito).toEqual([]);
  });

  it("El metodo agregarProducto deberia poder agregar un producto al carrito.", function () {
    miCarrito.agregarProducto({ nombre: "coca-cola", precio: 5, cantidad: 2 });
    expect(miCarrito.carrito.length).toBe(1);
    expect(miCarrito.carrito[0]).toEqual({ nombre: "coca-cola", precio: 5, cantidad: 2 });
  });

  it("El metodo calcularTotal deberia retornar el total de la suma de los precios del carrito.", function () {
    miCarrito.agregarProducto({ nombre: "pepsi", precio: 7, cantidad: 3 });
    expect(miCarrito.carrito.length).toBe(2);
    expect(miCarrito.calcularTotal()).toBe(31);
  });

  it("El metodo aplicarDescuento deberia aplicar correctamente el descuento al precio total.", function () {
    expect(miCarrito.aplicarDescuento(50)).toBe(15.5);
  });

  it("El metodo aplicarDescuento deberia llamar a la funcion calcularTotal.", function () {
    miCarrito.calcularTotal = jest.fn(miCarrito.calcularTotal);
    miCarrito.aplicarDescuento(50);
    expect(miCarrito.calcularTotal).toHaveBeenCalled();
  });
});

console.log("Tests Finalizados.")