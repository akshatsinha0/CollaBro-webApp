const CollaborationProject = require("../models/CollaborationProject");

exports.createProject = async (req, res) => {
  try {
    const project = new CollaborationProject(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await CollaborationProject.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
