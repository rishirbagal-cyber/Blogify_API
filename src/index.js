const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
