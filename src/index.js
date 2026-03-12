require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { requestLogger, errorHandler } = require('./middleware');
const mainRouter = require('./routes');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 2350;

// ---------------------------
// Global Middleware
// ---------------------------
connectDB();
app.use(express.json());
app.use(cors());
app.use(requestLogger);

// ---------------------------
// Base Route
// ---------------------------

app.get('/', (req, res) => {
  res.send('Blogify API is running and it is working');
});

// ---------------------------
// Versioned API Routes
// ---------------------------

app.use('/api/v1', mainRouter);

// ---------------------------
// 404 Handler
// ---------------------------

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// ---------------------------
// Central Error Handler (LAST)
// ---------------------------

app.use(errorHandler);

// ---------------------------
// Start Server
// ---------------------------

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
