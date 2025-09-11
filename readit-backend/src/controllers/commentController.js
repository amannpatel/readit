const commentService = require("../services/commentService");
const { success, error } = require("../utils/response");

exports.addComment = async (req, res) => {
  try {
    const comment = await commentService.addComment(
      req.params.postId,
      req.body.content,
      req.user.id
    );
    return success(res, "Comment added", comment);
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const comments = await commentService.getCommentsByPost(req.params.postId);
    return success(res, "Comments fetched", comments);
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await commentService.deleteComment(
      req.params.commentId,
      req.user.id,
      req.user.role
    );
    return success(res, "Comment deleted");
  } catch (err) {
    return error(res, 403, err.message);
  }
};
