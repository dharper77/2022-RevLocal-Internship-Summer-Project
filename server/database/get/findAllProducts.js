const mongoose = require('mongoose');
const Product = require('./database/schemas/Product')

async function findAllProducts() {
    mongoose.connect("mongodb+srv://landonbconnell:consumore@cluster0.7lcwkon.mongodb.net/consumore" )

    Product.find({}, (err, collection) => {
        if (err) return err
        return collection
    })
}

module.exports = findAllProducts