const express = require("express");
const app = express();
const db = require("./models")
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());

db.sequelize.sync( {force:true} ).then( () => {
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
});
