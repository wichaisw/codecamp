// ได้ function express() 
const express = require("express");
// ได้ ผลจากการ return function express()
const app = express();
// เรียกไฟล์ route
const userRoute = require("./routes/userRoute")
const itemRoute = require("./routes/itemRoute")
app.use("/item", itemRoute)
app.use("/user", userRoute); 


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