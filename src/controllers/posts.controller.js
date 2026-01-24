const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Route handled by postController.getAllPosts"
  });
};

const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: `You requested Post ID: ${postId}`
  });
};

module.exports = {
  getAllPosts,
  getPostById
};
