const test = require("node:test");
const assert = require("node:assert");
const { calcularTotal } = require("../src/pedido");

test("calcula el total sin descuento", () => {
  // 2 pizzas de $10 sin descuento = $20
  assert.strictEqual(calcularTotal(10, 2), 20);
});

test("aplica 10% de descuento", () => {
  // 2 pizzas de $10 con 10% de descuento = $18
  assert.strictEqual(calcularTotal(10, 2, 10), 18);
});

test("rechaza cantidades en cero", () => {
  // un pedido de 0 pizzas debe dar error
  assert.throws(() => calcularTotal(10, 0), /inválidos/);
});
