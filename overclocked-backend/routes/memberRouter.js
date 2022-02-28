const express = require('express')
const memberController = require('../controllers/memberController')
const authController = require('../controllers/authController')

const router = express.Router()

router
  .route('/')
  .get(memberController.getMembers)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    memberController.uploadImage,
    memberController.resizeImage,
    memberController.createMember
  )

router
  .route('/:id')
  .get(memberController.getSingleMember)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    memberController.uploadImage,
    memberController.resizeImage,
    memberController.updateMember
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    memberController.deleteMember
  )

module.exports = router
