const Shuttle = require("../models/Shuttle");

// Get all shuttles
exports.getShuttles = async (req, res) => {
  try {
    const shuttles = await Shuttle.find();
    res.status(200).json(shuttles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new shuttle
exports.createShuttle = async (req, res) => {
  try {
    const newShuttle = new Shuttle(req.body);
    await newShuttle.save();
    res.status(201).json(newShuttle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing shuttle
exports.updateShuttle = async (req, res) => {
  try {
    const updatedShuttle = await Shuttle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedShuttle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a shuttle
exports.deleteShuttle = async (req, res) => {
  try {
    await Shuttle.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Shuttle deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
