const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/", playerController.getPlayers);
router.post("/", playerController.createPlayer);
router.put("/:id", playerController.updatePlayer);
router.delete("/:id", playerController.deletePlayer);

module.exports = router;
