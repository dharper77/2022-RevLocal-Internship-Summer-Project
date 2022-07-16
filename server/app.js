const express = require('express')
const app = express()
const productRouter = require('./routers/productRouter')
const userRouter = require('./routers/userRouter')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

app.use(bodyParser.json())
app.use(express.json())

mongoose.connect(process.env.DB_CONNECTION)

app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)

module.exports = app
