const mongoose = require('mongoose');
const Product = require('../models/Product')
require('dotenv/config')

async function findAllProducts() {
    mongoose.connect(process.env.DB_CONNECTION)

    Product.find({}, (err, collection) => {
        return collection
    })
}

module.exports = findAllProducts