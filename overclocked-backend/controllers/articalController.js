const multer = require('multer')
const sharp = require('sharp')
const Artical = require('../models/articalModel')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) cb(null, true)
  else cb(new AppError('Not an image! Please upload only images.', 400), false)
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
})

exports.uploadImage = upload.single('image')

exports.resizeImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next()

  req.body.image = `artical-${req.user.id}-${Date.now()}.jpeg`

  await sharp(req.file.buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`uploads/blog/${req.body.image}`)

  next()
})

// Routes Handler
exports.getArticals = factory.getAll(Artical)
exports.getSingleArtical = factory.getOne(Artical, { path: 'comments' })
exports.createArtical = factory.createOne(Artical)
exports.updateArtical = factory.updateOne(Artical)
exports.deleteArtical = factory.deleteOne(Artical)

exports.aliesTopArticals = (req, res, next) => {
  req.query.limit = req.params.limit
  // req.query.sort = 'price,-ratingsAverage'
  next()
}
