const express = require("express");
const app = express();
const PORT = 3000;

const postRoutes = require("./routes/posts.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blogify API is running 🚀");
});

app.use("/api/v1/posts", postRoutes);   // attach router

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
