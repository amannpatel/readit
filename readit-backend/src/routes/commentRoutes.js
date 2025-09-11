const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/commentController");
const { auth } = require("../middlewares/auth");

// Add comment
router.post("/:postId", auth, commentCtrl.addComment);

// Get comments for a post
router.get("/:postId", commentCtrl.getCommentsByPost);

// Delete comment
router.delete("/:commentId", auth, commentCtrl.deleteComment);

module.exports = router;
