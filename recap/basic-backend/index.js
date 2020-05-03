const express = require('express');
const db = require('./models');
const cors = require('cors')

const app = express(); // สร้าง express app
// Express จัดการ http request

const studentRoute = require('./routes/student.js');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.get('/hello', (req, res) => {
  res.send('<h1>hello world</h1>');
});

app.post('/hello', (req, res) => {
  res.send('hello world, post method');
});

app.post('/add', (req, res) => {
  let a = Number(req.body.a);
  let b = Number(req.body.b);
  res.send({result: a + b });
});

app.use('/student', studentRoute);

// สั่งให้ sequelize ไป sync database ให้ตรงกับโมเดล
// เอา express App ที่สร้างไปจัดการ http request ที่พอร์ต 8000
db.sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log('server is running on port 8000.');
  });
});