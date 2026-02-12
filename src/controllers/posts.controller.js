// GET ALL POSTS
const getAllPosts = (req, res) => {
  const { sortBy } = req.query;

  if (sortBy === "date") {
    console.log("Sorting posts by date...");
  }

  res.status(200).json({
    success: true,
    results: 0,
    data: {
      message: "All posts fetched successfully"
    }
  });
};

// GET SINGLE POST
const getPostById = (req, res) => {
  const { postId } = req.params;

  res.status(200).json({
    success: true,
    data: {
      postId,
      message: `Post ${postId} fetched successfully`
    }
  });
};

// CREATE POST
const createPost = (req, res) => {
  res.status(201).json({
    success: true,
    data: {
      message: "Post created successfully",
      body: req.body
    }
  });
};

// UPDATE POST
const updatePost = (req, res) => {
  const { postId } = req.params;

  res.status(200).json({
    success: true,
    data: {
      message: `Post ${postId} updated successfully`
    }
  });
};

// DELETE POST
const deletePost = (req, res) => {
  const { postId } = req.params;

  res.status(200).json({
    success: true,
    data: {
      message: `Post ${postId} deleted successfully`
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
