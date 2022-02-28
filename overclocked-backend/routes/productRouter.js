const express = require('express')
const productController = require('../controllers/productController')
const authController = require('../controllers/authController')

const router = express.Router()

router
  .route('/top-cheap/:limit')
  .get(productController.aliesTopProducts, productController.getProducts)

router
  .route('/')
  .get(productController.getProducts)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.createProduct
  )

router
  .route('/:id')
  .get(productController.getSingleProduct)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    productController.uploadProductImages,
    productController.resizeProductImages,
    productController.updateProduct
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    productController.deleteProduct
  )

module.exports = router
