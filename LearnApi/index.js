const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
require('dotenv').config();

const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const newsletterRoutes = require('./src/routes/newsletterRoutes');
const globalErrorHandler = require('./src/middleware/errorMiddleware');
const AppError = require('./src/utils/AppError');

connectDB();

const app = express();

// Security HTTP headers
app.use(helmet());

// CORS
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api', limiter);

// Stricter rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many auth attempts from this IP, please try again later.'
});
app.use('/api/auth', authLimiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
// NOTE: mongoSanitize(v2) is throwing: "Cannot set property query ..." on this Node/Express combo.
// Temporarily disable to unblock auth/signup until we upgrade the sanitizer or adjust middleware.
// app.use(mongoSanitize());

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'LearnAPI running - Auth ready!' });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Handle undefined routes
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
