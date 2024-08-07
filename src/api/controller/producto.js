const Producto = require('../models/producto')
const productos = require('../../../productos.json')

const getProductos = async (req, res, next) => {
  try {
    const allProductos = await Producto.find()
    return res.status(200).json(allProductos)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const insertProductos = async (req, res, next) => {
  try {
    await Producto.insertMany(productos.results)
    return res.status(201).json('Subida realizada con éxito.')
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putProductos = async (req, res, next) => {
  try {
    const { id } = req.params

    const productoDuplicado = await Producto.findOne({
      nombre: req.body.nombre,
      _id: { $ne: id }
    })

    if (productoDuplicado) {
      return res.status(400).json('El producto ya existe')
    }

    const productoActualizado = await Producto.findByIdAndUpdateA
  } catch (error) {}
}

const deleteProducto = async (req, res, next) => {
  try {
    const { id } = req.params
    const productoEliminado = await Producto.findByIdAndDelete(id)
    return res.status(200).json(productoEliminado)
  } catch (error) {
    return res.status(400).json('Error al eliminar equipo')
  }
}

module.exports = { getProductos, insertProductos, putProductos, deleteProducto }
