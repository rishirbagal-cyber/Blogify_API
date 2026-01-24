const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blogify API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use("/api/v1/posts", postRoutes);  // attach router

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});    

// module.exports = app;
