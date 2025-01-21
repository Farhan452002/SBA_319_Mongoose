const mongoose = require("mongoose");

const ShuttleSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  speed: { type: String, required: true },
});

module.exports = mongoose.model("Shuttle", ShuttleSchema);
