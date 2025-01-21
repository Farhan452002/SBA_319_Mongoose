const mongoose = require("mongoose");

const racketSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const Racket = mongoose.model("Racket", racketSchema);

module.exports = Racket;