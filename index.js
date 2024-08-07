require('dotenv').config()

const { productoRouter } = require('./src/api/routes/producto')
const { connectDB } = require('./src/config/db')

const express = require('express')
const app = express()
app.use(express.json())
connectDB()

app.listen(3000, () => {
  console.log('Servidor levantado en http://localhost:3000')
})

app.use('/api/v1/productos', productoRouter)
app.use('*', (req, res, next) => {
  return res.status(400).json('Route not found')
})
