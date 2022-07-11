const fs = require('fs')
const Product = require('../database/models/Product')

exports.getProductByPage = async (req, res, next) => {
  try {
    if (req.query.categories) {
      const selectedCategories = req.query.categories.split(',')
      const products = await Product.paginate(
        { category: { $in: selectedCategories } },
        { page: req.params.page, limit: 12 }
      )
      res.status(200).json(products)
    } else {
      const products = await Product.paginate(
        {},
        { page: req.params.page, limit: 12 }
      )
      res.status(200).json(products)
    }
  } catch (err) {
    res.json({ message: err })
  }
}

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.find({ _id: req.params.id })
    res.status(200).json(product)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.getProductByTitle = async (req, res, next) => {
  try {
    const product = await Product.find({ title: { $regex: req.params.title } })
    res.status(200).json(product)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Product.find().distinct('category')
    res.status(200).json({ categories })
  } catch (err) {
    res.json({ message: err })
  }
}

exports.postNewProduct = async (req, res, next) => {
  try {
    const product = new Product({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      rating: {
        rate: req.body.rating.rate,
        count: req.body.rating.count
      }
    })
    await product.save()
    res.status(200).end()
  } catch (err) {
    res.json({ message: err })
  }
}
