const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.route('/categories').get(productController.getCategories)
router.route('/page/:page').get(productController.getProductByPage)
//router.route('/:title').get(productController.getProductByTitle)
router.route('/id/:id').get(productController.getProductById)

router.route('/').post(productController.postNewProduct)

module.exports = router
