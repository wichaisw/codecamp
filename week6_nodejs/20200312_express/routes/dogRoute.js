const express = require("express");
const dogRoute = express.Router();

dogRoute.get("/walk", function(req, res) {
  res.send("dog walk");
});


dogRoute.get("/play", function(req, res) {
  res.send("dog play");
});

module.exports = dogRoute;