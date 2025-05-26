const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "CollaborationProject" },
    status: { type: String, enum: ["accepted", "rejected", "pending"], default: "pending" },
    skills: [String],
    createdAt: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model("ProjectApplication", applicationSchema);