# Pizzería Don Luigi · Demo de CI/CD

Proyecto de ejemplo para mostrar integración y entrega continua con GitHub Actions.
Don Luigi es una pizzería pequeña con una página de pedidos en línea; aquí vive la función que calcula el total de un pedido, sus pruebas automáticas y el pipeline que las corre.

## Qué hay en el repositorio

| Archivo | Para qué sirve |
| --- | --- |
| `src/pedido.js` | La lógica del negocio: `calcularTotal(precio, cantidad, descuento)` |
| `test/pedido.test.js` | Tres pruebas automáticas: pedido normal, con descuento y pedido inválido |
| `.github/workflows/ci.yml` | El pipeline: corre las pruebas en cada push o Pull Request y despliega al entrar a `main` |

## Ramas

- `main`: producción. Solo se actualiza con un release (Pull Request desde `develop`).
- `develop`: integración. Aquí se juntan los cambios antes de publicarlos.
- `feature/...`: una rama corta por cada cambio, creada desde `develop`.

`main` y `develop` están protegidas: nada entra sin Pull Request y sin el check `test` en verde.

## Correr las pruebas en local

Requiere Node.js 20 o superior.

```bash
npm test
```
