// src/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.DB_HOST || process.env.MONGO_URI;

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;