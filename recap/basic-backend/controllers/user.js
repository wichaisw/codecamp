const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAllUser = async(req,res) => {
  const users = await db.User.findAll()
  res.status(200).send(users)
}

const registerUser = async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  
  const user = await db.User.findOne({ where: {username: username} });

  if(user) {
    res.status(400).send({message: "username's already taken"})
  } else {
    const salt = bcryptjs.genSaltSync(12); // สร้าง salt
    const hashedPassword = bcryptjs.hashSync(password, salt); // hash password ด้วย bcryptjs ก่อนเก็บลง database

    await db.User.create({
      username,
      password: hashedPassword,
      name
    })

    res.status(201).send({ message: "User's created" })
  }
} 

const loginUser = async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // check user
  const user = await db.User.findOne({ where: {username: username} });

  // ถ้าไม่มี user ส่งว่า username or password ผิด
  if(!user) {
    res.status(400).send({message: "username or password is invalid"});
  } else {
    const isSuccess = bcryptjs.compareSync(password, user.password);   // เทียบ password ที่ส่งมาจาก postman กับ user.password ที่มาจากดาต้าเบส ถ้าตรงกันคืนค่าเป็น true

    if(isSuccess) {
      // ใส่ข้อมูลที่จะแนบไปกับ token ใน obj ชื่อ payload
      const payload = {
        id: user.id
      }

      // generate โทเคนที่มีอายุ 3600 วินาที มี supersecret เป็น codecamp5 และส่ง payload ให้แนบไปกับโทเคนด้วย
      const token = jwt.sign(payload, 'codecamp5', {expiresIn: 3600});

      res.status(200).send({ token: token });
    } else {
      res.status(400).send({ message: 'invalid username or password' });
    }
  }
}


module.exports = {
  getAllUser,
  registerUser,
  loginUser
}