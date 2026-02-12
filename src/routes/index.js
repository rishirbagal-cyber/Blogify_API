const express = require('express');
const router = express.Router();

// ---------------------------
// Feature Routers
// ---------------------------

const usersRouter = require('./users.routes');
const postsRouter = require('./posts.routes');

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

module.exports = router;
