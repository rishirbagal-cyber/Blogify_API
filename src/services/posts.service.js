// src/services/posts.service.js
// Service layer: all Mongoose query logic lives here.
// No knowledge of req or res — just takes arguments and returns data.

const Post = require('../models/post.models');

// GET ALL POSTS
const getAllPosts = async () => {
  const posts = await Post.find().populate('author', 'name email');
  return posts;
};

// GET SINGLE POST BY ID
const getPostById = async (id) => {
  const post = await Post.findById(id).populate('author', 'name email');
  return post; // returns null if not found
};

// CREATE POST
const createPost = async (data) => {
  const post = await Post.create(data);
  return post;
};

// UPDATE POST
const updatePost = async (id, data) => {
  const post = await Post.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );
  return post; // returns null if not found
};

// DELETE POST
const deletePost = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post; // returns null if not found
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
