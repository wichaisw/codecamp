const express = require("express"); // import express module
const app = express(); // create express
const dogRoute = require("./routes/dogRoute");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");

app.use("/dog", dogRoute);
app.use("/cat", catRoute);
app.use("/user", userRoute);

// ข้าม path /public ไป เข้าถึง google.txt ได้ด้วย localhost:8000/google.txt
app.use(express.static("./public/"))

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

app.get("/picture.png", function(req, res) {
  res.status(404).send("404 NOT FOUND");
});


// set app listen on port 8000
app.listen(8000, function() {
  console.log("server is running on port 8000");
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});

