const { body } = require('express-validator');

const registerValidation = [
  body('name')
    .notEmpty().withMessage('Please enter your full name')
    .trim()
    .isLength({ max: 50 }).withMessage('Name cannot be more than 50 characters'),
  body('email')
    .notEmpty().withMessage('Please add an email')
    .isEmail().withMessage('Please add a valid email')
    .normalizeEmail(),
  body('password')
    .notEmpty().withMessage('Please provide a password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role')
    .optional()
    .isIn(['student', 'professional', 'academician']).withMessage('Invalid role')
    .toLowerCase()
];

const loginValidation = [
  body('email')
    .notEmpty().withMessage('Please provide email')
    .isEmail().withMessage('Please add a valid email')
    .normalizeEmail(),
  body('password')
    .notEmpty().withMessage('Please provide password')
];

const forgotPasswordValidation = [
  body('email')
    .notEmpty().withMessage('Please provide email')
    .isEmail().withMessage('Please add a valid email')
    .normalizeEmail()
];

const resetPasswordValidation = [
  body('password')
    .notEmpty().withMessage('Please provide a password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const updatePasswordValidation = [
  body('currentPassword')
    .notEmpty().withMessage('Please provide your current password'),
  body('newPassword')
    .notEmpty().withMessage('Please provide a new password')
    .isLength({ min: 6 }).withMessage('New password must be at least 6 characters')
];

module.exports = {
  registerValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updatePasswordValidation
};

