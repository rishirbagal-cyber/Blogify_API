const express = require("express");
const app = express();

const postRoutes = require("./routes/posts.routes"); // import router

app.use("/api/v1/posts", postRoutes);  // attach router

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
