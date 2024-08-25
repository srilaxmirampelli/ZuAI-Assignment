const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.post("/blog", createPost);
router.get("/blogs", getAllPosts);
router.get("/blog/:id", getPostById);
router.put("/blog/:id", updatePost);
router.delete("/blog/:id", deletePost);

module.exports = router;
