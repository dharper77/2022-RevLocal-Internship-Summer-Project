const fs = require('fs')
const Product = require('../database/models/Product')

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch(err) {
    res.json({message: err})
  }
}

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find({ id: req.params.id })
    res.status(200).json(product)
  } catch(err) {
    res.json({message: err})
  }
}
