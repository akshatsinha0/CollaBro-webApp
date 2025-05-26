const express = require("express");
const router = express.Router();
const ProjectApplication = require("../models/ProjectApplication");

router.post("/", async (req, res) => {
  try {
    const app = new ProjectApplication(req.body);
    await app.save();
    res.status(201).json(app);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const apps = await ProjectApplication.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router
