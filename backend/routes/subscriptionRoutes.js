const express = require("express");
const router = express.Router();
const UserSubscription = require("../models/UserSubscription");

router.post("/", async (req, res) => {
  try {
    const subscription = new UserSubscription(req.body);
    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const subscriptions = await UserSubscription.find();
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
