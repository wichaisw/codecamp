const express = require("express");
const app = express();


// MVC Controller lab 1
// lab 1-a. GET /static -> คืนค่าเป็น “Hello World”
app.get("/static", function(req, res) {
  res.status(200).send("Hello World");
});

// lab 1-b. GET /staticJSON -> คืนค่าเป็น JSON ของ {text:”Hello World”}
app.get("/staticJSON", function(req, res) {
  res.send(JSON.stringify({text:"Hello World"}));
});

// lab 1-c. GET /echo?text=Heyyyy -> คืนค่าเป็น string ของตัวแปร text เช่น “Heyyyy”
app.get("/echo", function(req, res) {
  res.send(req.query.text);
});

// lab 1-d. GET /plus?a=3&b=5 -> คืนค่าเป็นผลบวกของ a + b เช่น 8
app.get("/plus", function(req, res) {
  let numResult = Number(req.query.a) + Number(req.query.b)
  res.send(String(numResult));
});

// lab 1-e. GET /plusByJSON?jsonText={a:3,b:5} -> คืนค่าเป็น ผลรวมของ a+b, parsed json object จากตัวแปร jsonText และคำตอบควรจะเป็น 8
app.get("/plusByJSON", function(req, res) {
  let jsonObject = JSON.parse(req.query.jsonText);
  result = Number(jsonObject.a) +  Number(jsonObject.b);
  res.send(String(result))
});

// lab 1-f. GET /plus/6/7 -> คืนค่าเป็น ผลบวกของ 6+7 ณ ที่นี้คือ 13
app.get("/plus/:a/:b", function(req, res) {
  let numResult = Number(req.params.a) + Number(req.params.b)
  res.send(String(numResult));
});

// lab 1-g. GET /checkEvenNumber/3
app.get("/checkEvenNumber/:num", function(req, res) {
  if(req.params.num %2 == 0) {
    res.send(`${req.params.num} is a even number.`)
  } else {
    res.send(`${req.params.num} is not a even number`)
  }
});

// 4.15. แบบฝึกหัด - Controller Only - English Exercise
// 1. Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.
// 2. Return the Success (200) response code if the input number is a even.

app.get("/EvenNumber/:num", (req, res) => {
  if(req.params.num %2 == 0) {
    res.status(200).send(`${req.params.num} is a even number.`)
  } else {
    res.status(400).send(`Bad input <br> ${req.params.num} is not a even number`)
  }
});


// response code.
// 3. POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example
// 4. POST /number/1 -> [1]
// 5. POST /number/2 -> [1,2]
// 6. POST /number/5 -> [1,2,5]
let numArr = [];
app.post("/number/:num", (req, res) => { 
  numArr.push(req.params.num);
  let numJSON = JSON.stringify(numArr);
  res.status(201).send(numJSON);
});


// 7. DELETE /number/1, remove the number in the array
// 8. DELETE /number/1 -> [2,5]
// 9. DELETE /number/2 → [5]
app.delete("/number/:num", (req, res) => {
  numArr = numArr.filter( (num => num != req.params.num ));
  res.send(numArr);
});

app.put

app.listen(3000, () => {
  console.log("server is running on port 3000")
});

