const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({
    projectTitle: String,
    description: String,
    domain: String,
    domainTags: [String],
    teamSize: Number,
    timeline: String,
    skillSet: [String],
    projectType: String,
    references: [
      {
        fileName: String,
        url: String,
      },
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model("CollaborationProject", projectSchema);
  