// src/controllers/posts.controller.js
// Thin controller: delegates all DB work to postService.
// Handles HTTP layer (req, res) only.

const postService = require('../services/posts.service');

// GET ALL POSTS → GET /api/v1/posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json({
      success: true,
      results: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET SINGLE POST → GET /api/v1/posts/:postId
const getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: `Post with id ${req.params.postId} not found`,
      });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// CREATE POST → POST /api/v1/posts
const createPost = async (req, res) => {
  try {
    // Automatically assign the logged-in user as the author
    const postData = {
      ...req.body,
      author: req.user.id,
    };
    const post = await postService.createPost(postData);

    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// UPDATE POST → PATCH /api/v1/posts/:postId
const updatePost = async (req, res) => {
  try {
    // 1. Get the post first to check ownership
    const post = await postService.getPostById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: `Post with id ${req.params.postId} not found`,
      });
    }

    // 2. Authorization check (Ownership)
    // Use .toString() to compare binary ObjectIds or handles populated objects if needed
    const authorId = post.author._id ? post.author._id.toString() : post.author.toString();
    if (authorId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to update this post',
      });
    }

    // 3. Proceed with update
    const updatedPost = await postService.updatePost(req.params.postId, req.body);

    res.status(200).json({ success: true, data: updatedPost });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE POST → DELETE /api/v1/posts/:postId
const deletePost = async (req, res) => {
  try {
    // 1. Get the post first to check ownership
    const post = await postService.getPostById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: `Post with id ${req.params.postId} not found`,
      });
    }

    // 2. Authorization check (Ownership)
    const authorId = post.author._id ? post.author._id.toString() : post.author.toString();
    if (authorId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to delete this post',
      });
    }

    // 3. Proceed with delete
    await postService.deletePost(req.params.postId);

    res.status(200).json({
      success: true,
      data: { message: 'Post deleted successfully' },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
