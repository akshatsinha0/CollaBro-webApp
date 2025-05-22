const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
    planType: String,
    startDate: Date,
    endDate: Date,
    isActive: Boolean,
    paymentStatus: String,
    transactionId: String,
  });
  module.exports = mongoose.model("UserSubscription", subscriptionSchema);