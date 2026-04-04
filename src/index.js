require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const { errorHandler, requestLogger } = require('./middleware');
const mainRouter = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

// Global Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(requestLogger);

// API Routes
app.use('/api/v1', mainRouter);
app.use('/api', require('./routes/songs'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Central Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
