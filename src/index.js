const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Blogify API is running!");
});

app.get("/api/v1/posts", (req, res) => {
  res.send("Fetching all blog posts...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
