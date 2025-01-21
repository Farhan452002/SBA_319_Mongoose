const express = require("express");
const router = express.Router();
const Player = require("../models/player");

//get all 
router.get("/", async (req, res) => {
  try {
    const allPlayer = await Player.find({});
    res.json(allPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create a new Player
router.post("/", async (req, res) => {
  try {
    const createdPlayer = await Player.create(req.body);
    res.json(createdPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//show route - get 1 Player
router.get("/:name", async (req, res) => {
  try {
    const singlePlayer = await Player.findById(req.params.id);
    res.json(singlePlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//edit route
router.put("/:name", async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete route
router.delete("/:name", async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    res.json(deletedPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;