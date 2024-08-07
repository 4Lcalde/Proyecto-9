const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema(
  {
    nombre: { type: String },
    precio: { type: String },
    img: { type: String }
  },
  { timestamps: true, collection: 'productos' }
)

const Producto = mongoose.model('productos', productoSchema, 'productos')

module.exports = Producto
