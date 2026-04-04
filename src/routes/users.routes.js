const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

// GET /api/v1/users
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Users route is working' });
});

// POST /api/v1/users/register
router.post('/register', userController.registerUser);

// POST /api/v1/users/login
router.post('/login', userController.loginUser);

module.exports = router;
