const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.route('/categories').get(productController.getCategories)
router.route('/page/:page').get(productController.getProductsByPage)
router
  .route('/page/:page/category/:category')
  .get(productController.getProductsByCategory)
router
  .route('/page/:page/title/:title')
  .get(productController.getProductsByTitle)
router
  .route('/page/:page/seller/:seller')
  .get(productController.getProductsBySeller)
router.route('/id/:id').get(productController.getProductById)

router.route('/').post(productController.postNewProduct)

router.route('/id/:id').patch(productController.updateProductListing)

module.exports = router
