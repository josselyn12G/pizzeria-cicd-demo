function calcularTotal(precioUnitario, cantidad, descuentoPorcentaje = 0) {
  if (precioUnitario < 0 || cantidad <= 0) {
    throw new Error("Datos inválidos");
  }
  const subtotal = precioUnitario * cantidad;
  const descuento = subtotal * (descuentoPorcentaje / 10);
  return Number((subtotal - descuento).toFixed(2));
}

module.exports = { calcularTotal };
