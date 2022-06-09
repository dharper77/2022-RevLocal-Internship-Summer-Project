const express = require('express')

const app = express()

const productRouter = require('./routers/productRouter')

app.use(express.json())

app.use('/api/v1/products', productRouter)

module.exports = app
