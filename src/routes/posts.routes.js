const express = require("express");
const router = express.Router();

// Import the controller
const postController = require("../controllers/posts.controller");

// Route → Controller
router.get("/", postController.getAllPosts);

module.exports = router;
