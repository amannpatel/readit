const Like = require("../models/Like");
const Post = require("../models/Post");

exports.likePost = async (postId, userId) => {
  try {
    const like = new Like({ user: userId, post: postId });
    await like.save();

    await Post.findByIdAndUpdate(postId, { $inc: { likesCount: 1 } });
    return like;
  } catch (err) {
    if (err.code === 11000) {
      throw new Error("You already liked this post");
    }
    throw err;
  }
};

exports.unlikePost = async (postId, userId) => {
  const like = await Like.findOneAndDelete({ user: userId, post: postId });
  if (!like) throw new Error("Like not found");

  await Post.findByIdAndUpdate(postId, { $inc: { likesCount: -1 } });
  return true;
};
