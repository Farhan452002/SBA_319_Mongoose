const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  age: {
    type: Intl,
    required: true,
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;