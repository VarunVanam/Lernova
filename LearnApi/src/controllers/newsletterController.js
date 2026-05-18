const User = require('../models/User');
const AppError = require('../utils/AppError');
const asyncHandler = require('../utils/asyncHandler');
const { sendEmail } = require('../config/email');

const subscribeNewsletter = asyncHandler(async (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return next(new AppError('Please provide name and email', 400));
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  let user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    user = await User.create({
      name: normalizedName,
      email: normalizedEmail,
      isSubscribed: true
    });
  } else {
    user.name = user.name || normalizedName;
    user.isSubscribed = true;
    await user.save();
  }

  await sendEmail({
    to: normalizedEmail,
    subject: 'Welcome to TattvaLearn! 🎉',
    html: `
      <h1>Hello ${normalizedName}!</h1>
      <p>Thank you for subscribing to TattvaLearn Newsletter!</p>
      <p>Stay ignited with the latest on transforming learning into impact.</p>
      <p>Best,<br>The TattvaLearn Team</p>
      <hr>
      <p><small>You received this because you subscribed at TattvaLearn.com</small></p>
    `
  });

  res.status(200).json({
    status: 'success',
    message: 'Thank you for subscribing to TattvaLearn!'
  });
});

module.exports = {
  subscribeNewsletter
};

