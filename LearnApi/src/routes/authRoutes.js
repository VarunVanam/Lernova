const express = require('express');
const router = express.Router();

const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updatePassword
} = require('../controllers/authController');

const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');
const {
  registerValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updatePasswordValidation
} = require('../validators/authValidator');

router.post('/register', validate(registerValidation), register);
router.post('/login', validate(loginValidation), login);
router.get('/me', protect, getMe);
router.post('/forgot-password', validate(forgotPasswordValidation), forgotPassword);
router.patch('/reset-password/:token', validate(resetPasswordValidation), resetPassword);
router.patch('/update-password', protect, validate(updatePasswordValidation), updatePassword);

module.exports = router;

