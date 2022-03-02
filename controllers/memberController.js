const multer = require('multer')
const sharp = require('sharp')
const slugify = require('slugify')
const Member = require('../models/memberModel')
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

  req.body.image = `member-${slugify(req.body.name, {
    lower: true,
  })}-${Date.now()}.jpeg`

  await sharp(req.file.buffer)
    .resize(350, 360)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`uploads/team/${req.body.image}`)

  next()
})

// Routes Handler
exports.getMembers = factory.getAll(Member)
exports.getSingleMember = factory.getOne(Member)
exports.createMember = factory.createOne(Member)
exports.updateMember = factory.updateOne(Member)
exports.deleteMember = factory.deleteOne(Member)
