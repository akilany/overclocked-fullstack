const Message = require('../models/messageModel')
const factory = require('./handlerFactory')

// Routes Handler
exports.getMessages = factory.getAll(Message)
exports.getSingleMessage = factory.getOne(Message)
exports.createMessage = factory.createOne(Message)
exports.updateMessage = factory.updateOne(Message)
exports.deleteMessage = factory.deleteOne(Message)
