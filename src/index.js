require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

// --- Our Custom Middleware ---
const requestLogger = (req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.originalUrl}`);
  next();
};

// --- Global Middleware Setup ---
app.use(express.json());
app.use(requestLogger); // We add our logger to the pipeline

// --- Routes ---


app.get('/about', (req, res) => {
  res.send('About Page!');
});

const postRoutes = require("./routes/posts.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blogify API is running 🚀");
});

// THE ERROR HANDLING MIDDLEWARE (MUST BE LAST!)
const errorHandler = (err, req, res, next) => {
  // 1. Log the error for the developer (on the server console)
  console.error(err.stack); // Shows the full error details

  // 2. Send a clean, generic JSON response to the client
  res.status(500).json({
    success: false,
    error: 'Internal Server Error' 
  });
};
app.get('/error-test', (req, res, next) => {
  // We create a new Error object.
  const myError = new Error('This is a deliberately thrown error!');
  
  // We pass it to next(), which sends it to our error handler.
  next(myError);
});

// Mount it at the very end of the file
app.use(errorHandler);

app.use("/api/v1/posts", postRoutes);   // attach router

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
