const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

router.post("/", async (req, res) => {
  try {
    const note = new Notification(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const notes = await Notification.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;