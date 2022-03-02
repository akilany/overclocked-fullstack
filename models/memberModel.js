const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A team member must have a name'],
  },
  title: {
    type: String,
    required: [true, 'A team member must have a job title'],
  },
  social: {
    type: String,
  },
  image: {
    type: String,
    required: [true, 'A team member must have an image'],
  },
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member
