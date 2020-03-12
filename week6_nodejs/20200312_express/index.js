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

// return network status
app.get("/picture.png", function(req, res) {
  res.status(404).send("404 NOT FOUND");
});

// receive 'query string' via URL path and operate it with cal() function
app.get('/add', function(req, res) {
  // function cal(a, b, mode) {
  //   a = Number(a);
  //   b = Number(b);
  //   if (mode == "add") {
  //     return String(a + b);
  //   } else if (mode == "substract") {
  //     return String(a - b);
  //   } else if (mode == "multiply") {
  //     return String(a * b);
  //   } else if (mode == "divide") {
  //     return String(a / b);
  //   } else {
  //     return "your mode is incorrect"; 
  //   }
  // }

  function cal(a, b, mode) {
    a = Number(a);
    b = Number(b);
    switch (mode) {
      case "add": 
        return String(a + b);
        break;
      case "substract":
        return String(a - b);
        break;
      case "multiply":
        return String(a * b);
        break;
      case "divide":
        return String(a / b);
        break;
      default:
        return "your mode is incorrect";
    }
  }

  let result = cal(req.query.a, req.query.b, req.query.mode);
  res.status(200).send(`The answer is ${result}`);
});

// parameters from URL path
app.get("/cal/:a/:mode/:b/", function(req, res) {
  
    firstNumber = Number(req.params.a);
    secondNumber = Number(req.params.b);
    if (req.params.mode == "add") {
      result = firstNumber + secondNumber;
    } else if (req.params.mode == "substract") {
      result = firstNumber - secondNumber;
    } else if (req.params.mode == "multiply") {
      result = firstNumber * secondNumber;
    } else if (req.params.mode == "divide") {
      result = firstNumber / secondNumber;
    } else {
      res.status(400).send(`<h1 style="color:red">400 Bad Request</h1><br>your mode is incorrect`); 
    }
  
  res.status(200).send(`The answer is ${String(result)}`);
});



app.get("/query_path", function(req, res) {
  console.log(req.query.name);
  console.log(req.query.age);
  console.log(req.query.number);
  res.send(req.query);
});


// set app listen on port 8000
app.listen(8000, function() {
  console.log("server is running on port 8000");
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});

