const postService = require("../services/postService");
const { success, error } = require("../utils/response");

exports.create = async (req, res) => {
  try {
    const post = await postService.createPost(req.body, req.user.id);
    return success(res, "Post created", post);
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.list = async (req, res) => {
  try {
    const result = await postService.listPosts(req.query);
    return success(res, "Posts fetched", result);
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.getBySlug = async (req, res) => {
  try {
    const post = await postService.getPostBySlug(req.params.slug);
    if (!post) return error(res, 404, "Post not found");
    return success(res, "Post fetched", post);
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updatedPost = await postService.updatePost(
      req.params.slug,
      req.body,
      req.user.id,
      req.user.role
    );
    return success(res, "Post updated", updatedPost);
  } catch (err) {
    return error(res, 403, err.message);
  }
};

exports.remove = async (req, res) => {
  try {
    await postService.deletePost(req.params.slug, req.user.id, req.user.role);
    return success(res, "Post deleted");
  } catch (err) {
    return error(res, 403, err.message);
  }
};
