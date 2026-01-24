const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Route handled by postController.getAllPosts"
  });
};

module.exports = { getAllPosts };


// Assignment 2.5 feat: add post controller and refactor router to use controller