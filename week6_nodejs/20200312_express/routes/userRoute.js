const express = require("express");
const router = express.Router();

router.get("/*", function(req, res) {
  res.status(404).send("NOT FOUND");
});

module.exports = router;