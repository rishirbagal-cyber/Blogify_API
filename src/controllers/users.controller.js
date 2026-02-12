const { validationResult } = require('express-validator');

const registerUser = (req, res) => {

  // 1. Run validation check
  const errors = validationResult(req);

  // 2. If there are validation errors
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  // 3. If validation passed
  const { email, password } = req.body;

  // Your database logic would go here

  res.status(201).json({
    message: 'User registered successfully'
  });
};

module.exports = {
  registerUser,
};
