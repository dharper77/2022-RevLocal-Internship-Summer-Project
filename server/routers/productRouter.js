const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.route('/').get(productController.getAllProducts)
router.route('/categories').get(productController.getCategories)
//router.route('/:title').get(productController.getProductByTitle)
router.route('/:id').get(productController.getProductById)

router.route('/').post(productController.postNewProduct)

module.exports = router
