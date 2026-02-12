const express = require("express");
const cors = require("cors");

const mainRouter = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const requestLogger = require("./middleware/requestlogger");

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Master Versioned Router
app.use("/api/v1", mainRouter);

// Centralized Error Handler (ALWAYS LAST)
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
