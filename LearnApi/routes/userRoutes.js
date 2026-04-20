const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  subscribeNewsletter
} = require('../controllers/userController');

// POST /api/users/register
router.post('/register', registerUser);

// POST /api/users/login  
router.post('/login', loginUser);

// POST /api/users/newsletter
router.post('/newsletter', subscribeNewsletter);

module.exports = router;