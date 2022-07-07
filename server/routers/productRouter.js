const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.route('/').get(productController.getAllProducts)
router.route('/categories').get(productController.getCategories)
router.route('/:id').get(productController.getProduct)

router.route('/').post(productController.postNewProduct)

module.exports = router
