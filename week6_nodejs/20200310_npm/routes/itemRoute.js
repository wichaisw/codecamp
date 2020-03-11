const express = require("express")
const itemRoute = express.Router();

itemRoute.get("/first", function(req, res) {
  res.send("item1");
});

itemRoute.get("/second", (req, res) => {
  res.send("item2");
});

module.exports = itemRoute;