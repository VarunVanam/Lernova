const crypto = require('crypto');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const AppError = require('../utils/AppError');
const asyncHandler = require('../utils/asyncHandler');
const { sendEmail } = require('../config/email');

const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedName = name.trim();
  const normalizedRole = (role || 'student').toLowerCase();

  const userExists = await User.findOne({ email: normalizedEmail }).select('+password');
  let user;

  if (userExists) {
    // Newsletter-only accounts may exist without a password
    if (!userExists.password) {
      userExists.name = normalizedName;
      userExists.password = password;
      userExists.role = normalizedRole;
      await userExists.save();
      user = userExists;
    } else {
      return next(new AppError('User already exists', 409));
    }
  } else {
    user = await User.create({
      name: normalizedName,
      email: normalizedEmail,
      password,
      role: normalizedRole
    });
  }

  const token = generateToken({ id: user._id });

  res.status(201).json({
    status: 'success',
    message: 'User registered successfully',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isSubscribed: user.isSubscribed
    }
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const normalizedEmail = email.trim().toLowerCase();
  const user = await User.findOne({ email: normalizedEmail }).select('+password');

  if (user && !user.password) {
    return next(new AppError('Please complete signup to set your password first', 400));
  }

  if (!user || !(await user.matchPassword(password))) {
    return next(new AppError('Invalid credentials', 401));
  }

  const token = generateToken({ id: user._id });

  res.status(200).json({
    status: 'success',
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isSubscribed: user.isSubscribed
    }
  });
});

const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    status: 'success',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isSubscribed: user.isSubscribed,
      isEmailVerified: user.isEmailVerified,
      createdAt: user.createdAt
    }
  });
});

const forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email.trim().toLowerCase() });

  if (!user) {
    return next(new AppError('There is no user with that email address', 404));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${process.env.FRONTEND_URL || 'http://localhost:5174'}/reset-password?token=${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password to: ${resetURL}.\nIf you didn't forget your password, please ignore this email.`;

  try {
    await sendEmail({
      to: user.email,
      subject: 'Your password reset token (valid for 10 minutes)',
      text: message,
      html: `<p>Forgot your password? <a href="${resetURL}">Click here to reset it</a>.</p><p>If you didn't forget your password, please ignore this email.</p>`
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email'
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new AppError('There was an error sending the email. Try again later.', 500));
  }
});

const resetPassword = asyncHandler(async (req, res, next) => {
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  const token = generateToken({ id: user._id });

  res.status(200).json({
    status: 'success',
    message: 'Password reset successful',
    token
  });
});

const updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');

  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new AppError('Your current password is wrong', 401));
  }

  user.password = req.body.newPassword;
  await user.save();

  const token = generateToken({ id: user._id });

  res.status(200).json({
    status: 'success',
    message: 'Password updated successfully',
    token
  });
});

module.exports = {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updatePassword
};

