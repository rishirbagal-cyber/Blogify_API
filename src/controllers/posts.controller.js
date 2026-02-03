const getAllPosts = (req, res) => {
  const { sortBy } = req.query;

  if (sortBy === "date") {
    console.log("Sorting posts by date...");
  }

  res.status(200).json({
    success: true,
    data: {
      message: "Route handled by postController.getAllPosts"
    }
  });
};

const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    success: true,
    data: {
      postId: postId
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById
};
