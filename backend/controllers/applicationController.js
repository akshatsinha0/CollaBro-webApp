const ProjectApplication = require("../models/ProjectApplication");

exports.createApplication = async (req, res) => {
  try {
    const application = new ProjectApplication(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await ProjectApplication.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};