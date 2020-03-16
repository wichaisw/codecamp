const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(8000, () => {
  console.log("server is running on port 8000");
});