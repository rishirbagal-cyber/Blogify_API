// src/controllers/users.controller.js
const { validationResult } = require('express-validator');
const User = require('../models/users.models');

// POST /api/v1/users/register
const registerUser = async (req, res) => {
  // 1. Run validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'A user with this email already exists',
      });
    }

    // Create and save user to DB
    const user = await User.create({ name, email });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  registerUser,
};
