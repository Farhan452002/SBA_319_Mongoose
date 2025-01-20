const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  newUser: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;