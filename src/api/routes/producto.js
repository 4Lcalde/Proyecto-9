const {
  getProductos,
  insertProductos,
  putProductos,
  deleteProducto
} = require('../controller/producto')

const productoRouter = require('express').Router()

productoRouter.get('/', getProductos)
productoRouter.post('/publicar', insertProductos)
productoRouter.put('/:id', putProductos)
productoRouter.delete('/:id', deleteProducto)

module.exports = { productoRouter }
