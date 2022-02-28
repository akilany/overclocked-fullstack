const mongoose = require('mongoose')
const slugify = require('slugify')

const articalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'An Artical must have a title'],
      unique: true,
      trim: true,
      maxlength: [60, 'An Artical must have less or equal than 60 characters'],
      minlength: [10, 'An Artical must have more or equal than 10 characters'],
    },
    description: {
      type: String,
      required: [true, 'An Artical requires a description'],
    },
    slug: String,
    publisher: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Artical must belong to a publisher.'],
    },
    topic: {
      type: String,
      required: [true, 'An Article must have a topic'],
    },
    image: {
      type: String,
      required: [true, 'An Artical must have an image'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

articalSchema.index({ slug: 1 })

// Virtual Populate
articalSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'artical',
  localField: '_id',
})

// DOCUMENT MIDDLEWARE => RUNS BEFORE .save() AND .create()
articalSchema.pre('save', function (next) {
  this.slug = slugify(this.title, {
    lower: true,
  })

  next()
})

// Populate document with publisher data insted of just their IDs
articalSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'publisher',
    select: 'name photo',
  })
  next()
})

const Artical = mongoose.model('Artical', articalSchema)

module.exports = Artical
