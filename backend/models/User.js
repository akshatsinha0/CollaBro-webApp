const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  category: { type: String, enum: ["Student", "Fresher", "Working Professional"] },
  currentCity: String,
  university: String,
  stream: String,
  domains: [String],
  profilePicture: String,
  resume: String,
  createdAt: { type: Date, default: Date.now },
  username: { type: String, unique: true },
  fullName: String,
  email: { type: String, unique: true },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  bio: String,
  communities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Community" }],
  joinedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", userSchema);
