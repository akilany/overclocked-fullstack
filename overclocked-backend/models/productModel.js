const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A product must have a description'],
  },
  specs: {
    cpu: {
      type: String,
      required: [true, 'Please, provide cpu specifications'],
    },
    gpu: {
      type: String,
      required: [true, 'Please, provide gpu specifications'],
    },
    ram: {
      type: String,
      required: [true, 'Please, provide ram specifications'],
    },
    storage: {
      type: String,
      required: [true, 'Please, provide storage specifications'],
    },
  },
  type: {
    type: String,
    required: [true, 'A product must have a type'],
    enum: ['Workstation', 'Laptop', 'Desktop'],
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
  imageCover: {
    type: String,
    required: [true, 'A product must have image cover'],
  },
  images: [String],
})

productSchema.index({ price: 1 })

const Product = mongoose.model('Product', productSchema)

module.exports = Product
