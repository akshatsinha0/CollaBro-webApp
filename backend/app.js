// app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/UserRoutes"));
app.use("/api/posts", require("./routes/PostRoutes"));
app.use("/api/communities", require("./routes/communityRoutes"));
app.use("/api/recommendations", require("./routes/recommendationRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/plans", require("./routes/planRouts"));
app.use("/api/subscriptions", require("./routes/subscriptionRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

