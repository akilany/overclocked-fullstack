const Comment = require('../models/commentModel')
const factory = require('./handlerFactory')

// Middleware for create new comment on artical
exports.setArticalUserIDs = (req, res, next) => {
  // Allow nested routes
  if (!req.body.user) req.body.user = req.user.id
  if (!req.body.artical) req.body.artical = req.params.articalId

  next()
}

exports.getComments = factory.getAll(Comment)
exports.getSingleComment = factory.getOne(Comment)
exports.createComment = factory.createOne(Comment)
exports.updateComment = factory.updateOne(Comment)
exports.deleteComment = factory.deleteOne(Comment)
