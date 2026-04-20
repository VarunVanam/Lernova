const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const createTransporter = () => {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
    console.warn('Email transporter not configured. Newsletter emails will not be sent.');
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: EMAIL_PORT === '465',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });

  transporter.verify().catch((err) => {
    console.warn('Email transporter verification failed:', err.message);
  });

  return transporter;
};

const transporter = createTransporter();

const signToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  return jwt.sign(payload, secret, { expiresIn: '30d' });
};

// @desc    Register user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({ name, email, password });

    // Generate JWT
    const token = signToken({ id: user._id });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error('registerUser error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email }).select('+password');
    if (user && (await user.matchPassword(password))) {
      const token = signToken({ id: user._id });
      res.status(200).json({
        message: 'Login successful',
        token,
        user: { id: user._id, name: user.name, email: user.email }
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('loginUser error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// @desc    Newsletter subscribe (create/update + welcome email)
// @route   POST /api/users/newsletter
// @access  Public
const subscribeNewsletter = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Please provide name and email' });
    }

    // Find or create user (no password for newsletter)
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, isSubscribed: true });
    } else {
      user.isSubscribed = true;
      await user.save();
    }

    if (transporter) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Welcome to Learnova! 🎉',
          html: `
            <h1>Hello ${name}!</h1>
            <p>Thank you for subscribing to Learnova Newsletter!</p>
            <p>Stay ignited with the latest on transforming learning into impact.</p>
            <p>Best,<br>The Learnova Team</p>
            <hr>
            <p><small>You received this because you subscribed at learnova.com</small></p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent to ${email}`);
      } catch (emailError) {
        console.error('Email send error:', emailError.message);
      }
    } else {
      console.warn('Skipping welcome email because transporter is not configured.');
    }

    res.status(200).json({ message: 'Thank you for subscribing to Learnova!' });
  } catch (error) {
    console.error('subscribeNewsletter error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  subscribeNewsletter
};
