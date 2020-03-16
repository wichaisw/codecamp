const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let studentsList = [
  {
    "id": 1,
    "picture": "🌽",
    "name": "sonter",
    "age": 18,
    "point": 75,
    "description": "I'm sonter from computer engineering A university. I'm 18 years old."
  },
  {
    "id": 2,
    "picture": "🥑",
    "name": "nat",
    "age": 19,
    "point": 78,
    "description": "I'm nat from computer engineering B university. I'm 19 years old."
  },
  {
    "id": 3,
    "picture": "🥦",
    "name": "tle",
    "age": 22,
    "point": 97,
    "description": "I'm tle from computer engineering C university. I'm 22 years old."
  }
];

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/student", (req, res) => {
  res.send(studentsList)
});

function getNewId() {
  return findMaxId() + 1;
}

function findMaxId() {
  let max = 0;
  for (let student of studentsList) {
    if (student.id > max) {
      max = student.id;    
    } 
  } 
  return max;
}

app.post("/student", (req, res) => {
  let newStudent = {
    id: getNewId(),
    name: req.body.name,
    picture: req.body.picture,
    age: req.body.age,
    point: req.body.point,
    description: req.body.description
  };
  studentsList.push(newStudent);
  res.send(studentsList);
});

app.delete("/student/:id", (req, res) => {
  studentsList = studentsList.filter(function(student) {
    return student.id !== Number(req.params.id);
  });
  res.send(studentsList);
});

let newStudent = {}
app.put("/student/:id", (req, res) => {
  studentsList = studentsList.map(function(student) {

    if (student.id == Number(req.params.id)) {
      
      newStudent = {
        id: student.id,
        picture: req.body.picture || student.picture,
        name: req.body.name || student.name,
        age: req.body.age || student.age,
        point: req.body.point || student.point,
        description: req.body.description || student.description
      };

      student = newStudent;
    };
    return student
  });
  res.send(studentsList);
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});