const multer = require('multer')
const sharp = require('sharp')
const Product = require('../models/productModel')
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

// When there is a mix of single and multiple images
exports.uploadProductImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 5 },
])

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  // 1) Cover Images
  if (req.files.imageCover) {
    req.body.imageCover = `product-${req.user.id}-${Date.now()}-cover.png`
    await sharp(req.files.imageCover[0].buffer)
      .resize(500, 500)
      .toFormat('png')
      .png({ quality: 90 })
      .toFile(`uploads/products/${req.body.imageCover}`)
  }

  // 2) Images
  if (req.files.images) {
    req.body.images = []

    await Promise.all(
      req.files.images.map(async (file, i) => {
        const filename = `product-${req.user.id}-${Date.now()}-${i + 1}.png`

        await sharp(file.buffer)
          .toFormat('png')
          .png({ quality: 90 })
          .toFile(`uploads/products/${filename}`)

        req.body.images.push(filename)
      })
    )
  }
  next()
})

// Routes Handler
exports.getProducts = factory.getAll(Product)
exports.getSingleProduct = factory.getOne(Product)
exports.createProduct = factory.createOne(Product)
exports.updateProduct = factory.updateOne(Product)
exports.deleteProduct = factory.deleteOne(Product)

exports.aliesTopProducts = (req, res, next) => {
  req.query.limit = req.params.limit
  req.query.sort = 'price'

  next()
}
