const express = require("express")
const bodyParser = require("body-parser");
const db = require("./models")
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// sync เสร็จก่อนค่อยรันเซิรืฟเวอร์
db.sequelize.sync().then( () => {
  
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
  
})
