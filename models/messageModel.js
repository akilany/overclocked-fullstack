const mongoose = require('mongoose')
const validator = require('validator')

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A message must have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A message must have an email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please, provide a valid email'],
  },
  subject: {
    type: String,
    required: [true, 'A message must have a subject'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'A message must have content'],
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now()),
  },
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
