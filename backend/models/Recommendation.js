const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    suggestedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    generatedAt: Date,
  });
  module.exports = mongoose.model("Recommendation", recommendationSchema);