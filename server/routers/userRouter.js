const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router
  .route('/username/:username/password/:password')
  .get(userController.isValidLogin)

router.route('/').post(userController.createNewUser)

router
  .route('/:userId/shippingAddress')
  .patch(userController.updateShippingAddress)

module.exports = router
