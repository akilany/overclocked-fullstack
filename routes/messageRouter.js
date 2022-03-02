const express = require('express')
const messageContoller = require('../controllers/messageContoller')
const authController = require('../controllers/authController')

const router = express.Router()

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    messageContoller.getMessages
  )
  .post(messageContoller.createMessage)

router.use(authController.protect, authController.restrictTo('admin'))

router
  .route('/:id')
  .get(messageContoller.getSingleMessage)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    messageContoller.updateMessage
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    messageContoller.deleteMessage
  )

module.exports = router
