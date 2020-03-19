const express = require("express");
const friendController = require("../controller/friendController");

const router = express.Router();

router.get("/friends", friendController.sendhello);

module.exports = router;