const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: String,
    title: String,
    content: String,
    media: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: String,
        timestamp: Date,
      },
    ],
    tags: [String],
    createdAt: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model("Post", postSchema);
  