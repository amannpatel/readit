const Post = require("../models/Post");
const slugify = require("slugify");

exports.createPost = async (data, userId) => {
  const slug = slugify(data.title, { lower: true, strict: true });
  const post = new Post({ ...data, slug, author: userId });
  return post.save();
};

// exports.listPosts = async () => {
//   return Post.find().populate("author", "name username");
// };

// Pagination + filter by tag/author/search in title
exports.listPosts = async ({ page = 1, limit = 10, tag, author, search }) => {
  const query = {};
  if (tag) query.tags = tag;
  if (author) query.author = author;
  if (search) query.title = { $regex: search, $options: "i" };

  const skip = (page - 1) * limit;
  const posts = await Post.find(query)
    .populate("author", "name username avatarUrl")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Post.countDocuments(query);

  return {
    posts,
    total,
    page: Number(page),
    pages: Math.ceil(total / limit),
  };
};

exports.getPostBySlug = async (slug) => {
  return Post.findOne({ slug }).populate("author", "name username avatarUrl");
};

exports.updatePost = async (slug, updateData, userId, userRole) => {
  const post = await Post.findOne({ slug });
  if (!post) throw new Error("Post not found");

  if (post.author.toString() !== userId && userRole !== "ADMIN") {
    throw new Error("Not authorized to update this post");
  }

  if (updateData.title) {
    updateData.slug = slugify(updateData.title, { lower: true, strict: true });
  }

  Object.assign(post, updateData);
  return post.save();
};

exports.deletePost = async (slug, userId, userRole) => {
  const post = await Post.findOne({ slug });
  if (!post) throw new Error("Post not found");

  if (post.author.toString() !== userId && userRole !== "ADMIN") {
    throw new Error("Not authorized to delete this post");
  }

  await post.deleteOne();
  return true;
};
