const express = require("express");
const app = express();
const PORT = 3000;

// import router
const postRouter = require("./routes/posts.routes");

app.get("/", (req, res) => {
  res.send("Blogify API is running!");
});

// mount router
app.use("/api/v1/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
