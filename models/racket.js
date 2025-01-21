const mongoose = require("mongoose");

const RacketSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  series: { type: String, required: true },
  model: { type: String, required: true },
});

module.exports = mongoose.model("Racket", RacketSchema);