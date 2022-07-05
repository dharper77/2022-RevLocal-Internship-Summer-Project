const express = require('express')
const app = express()
const productRouter = require('./routers/productRouter')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

app.use(bodyParser.json())
app.use(express.json())

mongoose.connect(process.env.DB_CONNECTION)

app.use('/api/v1/products', productRouter)

module.exports = app
