const express = require("express");
const catRoute = express.Router()

catRoute.get("/eat", function(req, res) {
  res.send("cat eat");
});

catRoute.get("/sleep", function(req, res) {
  res.send("cat sleep");
});

module.exports = catRoute;