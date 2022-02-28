const express = require('express')
const articalController = require('../controllers/articalController')
const authController = require('../controllers/authController')

const commentRouter = require('./commentRouter')

const router = express.Router()

router.use('/:articalId/comments', commentRouter)

router
  .route('/top/:limit')
  .get(articalController.aliesTopArticals, articalController.getArticals)

router
  .route('/')
  .get(articalController.getArticals)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    articalController.uploadImage,
    articalController.resizeImage,
    articalController.createArtical
  )

router
  .route('/:id')
  .get(articalController.getSingleArtical)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    articalController.uploadImage,
    articalController.resizeImage,
    articalController.updateArtical
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    articalController.deleteArtical
  )

module.exports = router
