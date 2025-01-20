const express = require("express");
const router = express.Router();
const User = require("../models/user");

//get all users
router.get("/", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.json(allUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create a new User
router.post("/", async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    res.json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//show route - get 1 User
router.get("/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    res.json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//edit route
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete route
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;