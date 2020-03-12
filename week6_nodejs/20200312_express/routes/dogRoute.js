const express = require("express");
const dogRoute = express.Router();

dogRoute.post("/walk", function(req, res) {
  res.send("dog walk");
});


dogRoute.post("/play", function(req, res) {
  res.send("dog play");
});

module.exports = dogRoute;