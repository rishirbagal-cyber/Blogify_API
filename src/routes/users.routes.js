const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const userController = require('../controllers/users.controller');

// Validation Rules
const registrationRules = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address'),

  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long')
];

// GET /api/v1/users
router.get('/', (req, res) => {
  res.json({
    message: 'Users route is working'
  });
});

// POST /api/v1/users/register
router.post('/register', registrationRules, userController.registerUser);

module.exports = router;
