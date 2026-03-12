const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const userController = require('../controllers/users.controller');

// Validation Rules
const registrationRules = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),

  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address'),
];

// GET /api/v1/users
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Users route is working' });
});

// POST /api/v1/users/register
router.post('/register', registrationRules, userController.registerUser);

module.exports = router;
