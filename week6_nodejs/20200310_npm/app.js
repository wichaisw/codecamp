// ได้ function express() 
const express = require("express");
// เรียกใช้ body-parser
const bodyParser = require("body-parser")
// ได้ ผลจากการ return function express()
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// เรียกไฟล์ route lab1
const userRoute = require("./routes/userRoute");
const itemRoute = require("./routes/itemRoute");

//Routes สองชั้น lab2
const dogRoute = require("./routes/dogRoute");
const catRoute = require("./routes/catRoute");

app.use("/item", itemRoute);
app.use("/user", userRoute); 
app.use("/dog", dogRoute);
app.use("/cat", catRoute);


app.post("/addNumber", function(req, res) {
  console.log(req.body);
  res.send(req.body);
})

app.get("/hello", function(req, res) {
  res.send("hello, world")
});

app.get("/saygoodbye", function(req, res) {
  res.send("goodbye, world");
})

app.get("/bye", function(req, res) {
  res.send("Good Bye");
})

app.get("/bye", function(req, res) {
  res.send("Good Bye");
})

// app.get("/user/first", function(req, res) {
//   res.send("hello first user")
// })

// app.get("/user/second", function(req, res) {
//   res.send("hello second user")
// })

// app.post("/hello", (req, res) => {
//   res.send("hello POST");
// })

// app.put("/hello", (req, res) => {
//   res.send("hello PUT");
// })

// app.delete("/hello", (req, res) => {
//   res.send("hello DELETE");
// })




app.listen(5000);
app.listen(3000, function() {
  console.log("server is running")
});