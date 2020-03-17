const express = require("express")
const bodyParser = require("body-parser");
const db = require("./models")
const { Op } = require("sequelize");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/student", function(req, res) {
  let newStudent = {
    name: req.body.name,
    year: Number(req.body.year)
  }
  db.student.create(newStudent)
    .then( (result) => res.status(200).send(result) )
    .catch( (err) => res.status(400).send(err) )
});

// read ทุกตัวด้วย findAll
// app.get("/get-all-student", (req, res) => {
//   db.student.findAll()
//     .then( result => {
//       console.log(result)
//       res.status(200).send(result)
//     })
//     .catch( error => {
//       console.log(error);
//       res.status(400).send(error)
//     })
// });

// https://sequelize.org/master/manual/model-querying-basics.html
app.get("/get-all-student", async (req, res) => {
  // READ
  const students = await db.student.findAll({ where: { year: {[Op.gt]: 2} } })
  res.send(students);
});

app.delete("/delete-student", async (req, res) => {
  // DELETE
  await db.student.destroy({ where: { name: "cat"} })
  // no content
  res.status(204).send();
});

app.put("/update-student", async function(req, res) {
  // UPDATE 
  await db.student.update({ year: 4}, {
    where: {
      name: "Minny"
    }
  })
  res.send();
});

// update ฐานข้อมูลด้วย params และ find one (หลัง update() ไม่ต้องใส่ where เพราะคัดหามาก่อนแล้ว)
app.put("/change-name/:from/:to", async function(req, res) {
  const targetStudent = await db.student.findOne( { where: { name: req.params.from} } )
  targetStudent.update( {name:req.params.to} )
  res.send(targetStudent);
});

// delete ฐานข้อมูลด้วย params
app.delete("/delete-student/:name", async function(req, res) {
  const targetStudent = await db.student.findOne({ where: {name: req.params.name} })
  targetStudent.destroy();
  res.send(targetStudent);
});

// sync เสร็จก่อนค่อยรันเซิรืฟเวอร์
// สร้างฐานข้อมูลแล้ว ถ้าไม่ใส่ alter: true เวลาไปแก้ตารางในไฟล์ ./models/student.js มันจะไม่สร้างเพิ่มให้
db.sequelize.sync({ alter : true }).then( () => {
  
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
  
})
