const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const authController = require('../controllers/auth.controller.js'); // Import the real controller

const registrationRules = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('username').notEmpty().withMessage('Username is required'),
];

const loginRules = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Define the routes, applying the validation rules as middleware
router.post('/register', registrationRules, authController.registerUser);
router.post('/login', loginRules, authController.loginUser);
router.post('/logout', authController.logoutUser);

module.exports = router;
