const express = require("express");
// ได้ function express() 
const app = express();
// ได้ ผลจากการ return function express()

console.log(typeof express);

app.get("/sayhi", function(req, res) {
  res.send("hello, world")
});

app.get("/saygoodbye", function(req, res) {
  res.send("goodbye, world");
})

app.get("/bye", function(req, res) {
  res.send("Good Bye");
})

app.post("/google", (req, res) => {
  res.send("Google");
})

app.listen(3000);
app.listen(5000);