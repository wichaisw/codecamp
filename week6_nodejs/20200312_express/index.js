const express = require("express"); // import express module
const app = express(); // create express
const dogRoute = require("./routes/dogRoute")
const catRoute = require("./routes/catRoute")

app.use("/dog", dogRoute);
app.use("/cat", catRoute);

// create ตัวที่ listen GET method ที่ path "/"
app.get("/", function(req, res) {
  res.send("Hello, world");
});

app.get("/myname", function(req, res) {
  res.send("My name is Wichai Sawangpongkasame");
});

app.post("/myname", function(req, res) {
  res.send("name POST");
});


// set app listen on port 8000
app.listen(8000, function() {
  console.log("server is running on port 8000");
});

