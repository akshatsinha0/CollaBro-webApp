const express = require("express");
const router = express.Router();
const Community = require("../models/Community");

router.post("/", async (req, res) => {
  try {
    const community = new Community(req.body);
    await community.save();
    res.status(201).json(community);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get("/", async (req, res) => {
    try {
      const communities = await Community.find();
      res.json(communities);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
module.exports = router;