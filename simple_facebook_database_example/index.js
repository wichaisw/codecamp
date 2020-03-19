const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const friendRoute = require("./routes/friend")
const userRoute = require("./routes/user")
const app = express();

app.use("/friend", friendRoute);
app.use("/user", userRoute);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


db.sequelize.sync({ force : true }).then( () => {

  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
});
