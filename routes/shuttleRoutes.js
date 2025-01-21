const express = require("express");
const router = express.Router();
const shuttleController = require("../controllers/shuttleController");

router.get("/", shuttleController.getShuttles);
router.post("/", shuttleController.createShuttle);
router.put("/:id", shuttleController.updateShuttle);
router.delete("/:id", shuttleController.deleteShuttle);

module.exports = router;
