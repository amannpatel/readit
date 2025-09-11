const likeService = require("../services/likeService");
const { success, error } = require("../utils/response");

exports.likePost = async (req, res) => {
  try {
    await likeService.likePost(req.params.postId, req.user.id);
    return success(res, "Post liked");
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.unlikePost = async (req, res) => {
  try {
    await likeService.unlikePost(req.params.postId, req.user.id);
    return success(res, "Post unliked");
  } catch (err) {
    return error(res, 400, err.message);
  }
};
