const UserSubscription = require("../models/UserSubscription");

exports.createSubscription = async (req, res) => {
  try {
    const subscription = new UserSubscription(req.body);
    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await UserSubscription.find();
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};