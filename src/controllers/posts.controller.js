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
    const post = await postService.createPost(req.body);

    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// UPDATE POST → PATCH /api/v1/posts/:postId
const updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.postId, req.body);

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

// DELETE POST → DELETE /api/v1/posts/:postId
const deletePost = async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: `Post with id ${req.params.postId} not found`,
      });
    }

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
