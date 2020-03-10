const express = require("express");
const router = express.Router();

router.get("/first", function(req, res) {
  res.send("hello first user");
});

router.get("/second", function(req, res) {
  res.send("hello second user");
});

module.exports = router;

