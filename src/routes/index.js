const express = require('express');
const router = express.Router();

// ---------------------------
// Feature Routers
// ---------------------------

const usersRouter = require('./users.routes');
const postsRouter = require('./posts.routes');
const analyticsRouter = require('./analytics');
const authRouter = require('./auth.routes.js');

// ---------------------------
// Utility / Base Routes
// ---------------------------

router.get('/about', (req, res) => {
  res.send('About page');
});

router.get('/error-test', (req, res, next) => {
  next(new Error('Internal server error'));
});

// ---------------------------
// Feature Routes
// ---------------------------

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/analytics', analyticsRouter);
router.use('/auth', authRouter); // Mount at /api/v1/auth

module.exports = router;
