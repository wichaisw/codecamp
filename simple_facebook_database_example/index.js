const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


db.sequelize.sync({ force : true }).then( () => {

  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
});
