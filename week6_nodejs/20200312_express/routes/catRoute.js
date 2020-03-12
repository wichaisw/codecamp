const express = require("express");
const catRoute = express.Router();

catRoute.post("/eat", function(req, res) {
  res.send("cat eat");
});

catRoute.post("/sleep", function(req, res) {
  res.send("cat sleep");
});

module.exports = catRoute;