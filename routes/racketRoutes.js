const express = require("express");
const router = express.Router();
const racketController = require("../controllers/racketController");

router.get("/", racketController.getRackets);
router.post("/", racketController.createRacket);
router.put("/:id", racketController.updateRacket);
router.delete("/:id", racketController.deleteRacket);

module.exports = router;
