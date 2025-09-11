const Comment = require("../models/Comment");
const Post = require("../models/Post");

exports.addComment = async (postId, content, userId) => {
  const comment = new Comment({ content, post: postId, author: userId });
  await comment.save();

  // increment comments count on Post
  await Post.findByIdAndUpdate(postId, { $inc: { commentsCount: 1 } });

  return comment.populate("author", "name username avatarUrl");
};

exports.getCommentsByPost = async (postId) => {
  return Comment.find({ post: postId })
    .populate("author", "name username avatarUrl")
    .sort({ createdAt: -1 });
};

exports.deleteComment = async (commentId, userId, userRole) => {
  const comment = await Comment.findById(commentId);
  if (!comment) throw new Error("Comment not found");

  // Author or Admin can delete
  if (comment.author.toString() !== userId && userRole !== "ADMIN") {
    throw new Error("Not authorized to delete this comment");
  }

  await Post.findByIdAndUpdate(comment.post, { $inc: { commentsCount: -1 } });
  await comment.deleteOne();
  return true;
};
