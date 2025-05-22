const Recommendation = require("../models/Recommendation");

exports.createRecommendation = async (req, res) => {
  try {
    const recommendation = new Recommendation(req.body);
    await recommendation.save();
    res.status(201).json(recommendation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
