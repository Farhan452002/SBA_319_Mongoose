const Racket = require("../models/racket");

// Get all rackets
exports.getRackets = async (req, res) => {
  try {
    const rackets = await Racket.find();
    res.status(200).json(rackets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new racket
exports.createRacket = async (req, res) => {
  try {
    const newRacket = new Racket(req.body);
    await newRacket.save();
    res.status(201).json(newRacket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing racket
exports.updateRacket = async (req, res) => {
  try {
    const updatedRacket = await Racket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedRacket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a racket
exports.deleteRacket = async (req, res) => {
  try {
    await Racket.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Racket deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
