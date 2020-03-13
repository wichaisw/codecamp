const express = require("express");
const bodyParser = require("body-parser")
const app = express();

// ใช้ middleware body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}) );

// เลือกใช้ view engine เป็น ejs
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render( "index", {items: "you", 
    name: "Wichai", 
    age: "25", 
    numberList: [1,5,8,77,3], 
    studentsList: [
      {
        "id": 1,
        "picture": "🌽",
        "name": "sonter",
        "age": 18,
        "point": 75,
        "discription": "I'm sonter from computer engineering A university. I'm 18 years old."
      },
      {
        "id": 2,
        "picture": "🥑",
        "name": "nat",
        "age": 19,
        "point": 78,
        "discription": "I'm nat from computer engineering B university. I'm 19 years old."
      },
      {
        "id": 3,
        "picture": "🥦",
        "name": "tle",
        "age": 22,
        "point": 97,
        "discription": "I'm tle from computer engineering C university. I'm 22 years old."
      }
    ]
  });
});



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
  if(Number(req.params.num) % 2 == 0) {
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

app.get("/number", (req, res) => { 
  res.status(200).send(numArr);
});

app.post("/number/:num", (req, res) => { 
  numArr.push(Number(req.params.num));
  res.status(201).send(numArr);
});


// 7. DELETE /number/1, remove the number in the array
// 8. DELETE /number/1 -> [2,5]
// 9. DELETE /number/2 → [5]
app.delete("/number/:num", (req, res) => {
  numArr = numArr.filter( (num => num != req.params.num ));
  res.send(numArr);
});

// PUT method by splice มีปัญหาเพราะ splice จัดการแค่ตัวแรกที่เจอ
// app.put("/number/:oldnum/:newnum", (req, res) => {
//   let oldIndex = numArr.indexOf(Number(req.params.oldnum));
//   numArr.splice(oldIndex, 1, Number(req.params.newnum));
//   res.send(numArr);
// });

// PUT solution
app.put("/number/:from/:to", (req, res) => {
  numArr = numArr.map( (item) => {
    if(item == Number(req.params.from)) {
      return Number(req.params.to);
    } else {
      return item;
    }
  });
  res.send(numArr);
});


// 12. POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,
// 13. POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
// 14. POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4
app.post("/countFields", (req, res) => {
  // let jsonObj = JSON.parse(req.body.numObj);
  let jsonLength = Object.keys(req.body).length;
  res.status(200).send(String(jsonLength));
}); // body-parser เปลี่ยน key & value จาก string เป็น object ให้


app.listen(3000, () => {
  console.log("server is running on port 3000");
});

