const express = require("express");
const router = express.Router();
const CollaborationProject = require("../models/CollaborationProject");

router.post("/", async (req, res) => {
  try {
    const project = new CollaborationProject(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await CollaborationProject.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;