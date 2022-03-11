const path = require('path')
const express = require('express')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const cors = require('cors')

const userRouter = require('./routes/userRouter.js')
const productRouter = require('./routes/productRouter')
const articalRouter = require('./routes/articalRouter')
const commentRouter = require('./routes/commentRouter')
const memberRouter = require('./routes/memberRouter')
const messageRouter = require('./routes/messageRouter')

const globalErrorHandler = require('./controllers/errorController')
const AppError = require('./utils/appError')

const app = express()

// app.enable('trust proxy')

// Global Middlewares //
// Implement CORS
app.use(cors())

app.options('*', cors())

// Serving static files
app.use(express.static(path.join(__dirname, 'uploads')))

// Serving static files
// app.use(express.static(path.join(__dirname, '../overclocked-frontend/dist')))

// Set security HTTP headers
app.use(helmet())

// Development Logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

// Limit requests from same API
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
})
app.use('/api', limiter)

// Body parser, reading data from the body into req.body || cookies
app.use(express.json({ limit: '10kb' }))
app.use(cookieParser())

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

// Data sanitization against XSS
app.use(xss())

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
)

app.use(compression())

// Test Middlewares
app.use((req, res, next) => {
  req.requestTime = new Date().toUTCString()
  console.log(req.cookies)
  next()
})

// Routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/articals', articalRouter)
app.use('/api/v1/comments', commentRouter)
app.use('/api/v1/members', memberRouter)
app.use('/api/v1/messages', messageRouter)

// Catch Unhandled Routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)

module.exports = app
