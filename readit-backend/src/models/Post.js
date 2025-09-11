const mongoose = require("mongoose");

const postScheme = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // SEO-friendly URL
    content: { type: String, required: true },
    tags: [{ type: String }], // ["tech", "node", "mongodb"]
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postScheme);
