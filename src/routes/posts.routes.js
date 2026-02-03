const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller");

router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPostById);

// 🔹 TEMP route to test JSON body parsing (2.8 requirement)
router.post("/test-body", (req, res) => {
  console.log("Received body:", req.body);
  res.status(200).json({
    status: "success",
    received: req.body
  });
});

module.exports = router;
