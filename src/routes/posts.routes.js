const express = require("express");
const router = express.Router();

const { authenticate } = require("../middleware");
const postController = require("../controllers/posts.controller");

router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPostById);

// Protected routes
router.post("/", authenticate, postController.createPost);
router.patch("/:postId", authenticate, postController.updatePost);
router.delete("/:postId", authenticate, postController.deletePost);

module.exports = router;
