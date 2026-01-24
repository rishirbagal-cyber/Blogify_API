// src/controllers/posts.controller.js

// This function will run when someone hits GET /api/v1/posts
const getAllPosts = (req, res) => {

  // Set HTTP status code to 200 (means request was successful)
  res.status(200)

    // Send a JSON response back to the user
    .json({
      // Message that will be shown in browser/Postman
      message: "Route handled by postController.getAllPosts"
    });
};

// Export the function so routes file can use it
module.exports = {
  getAllPosts
};
