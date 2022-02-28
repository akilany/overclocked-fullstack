const express = require('express')
const commentController = require('../controllers/commentController')
const authController = require('../controllers/authController')

const router = express.Router({ mergeParams: true })

// Protect all routes after this middleware
router.use(authController.protect)

router
  .route('/')
  .get(commentController.getComments)
  .post(
    authController.restrictTo('admin', 'user'),
    commentController.setArticalUserIDs,
    commentController.createComment
  )

router
  .route('/:id')
  .get(commentController.getSingleComment)
  .patch(
    authController.restrictTo('admin', 'user'),
    commentController.updateComment
  )
  .delete(
    authController.restrictTo('admin', 'user'),
    commentController.deleteComment
  )

module.exports = router
