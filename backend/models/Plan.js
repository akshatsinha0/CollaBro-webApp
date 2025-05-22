const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    planName: String,
    priceMonthly: Number,
    priceAnnually: Number,
    features: [String],
    isFree: Boolean,
    currency: String,
  });
  module.exports = mongoose.model("Plan", planSchema);
  