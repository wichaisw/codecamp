const db = require('../models');

const getAllStudents = async(req, res) => {
  const student = await db.Student.findAll()
  res.send(student)
}

const getStudentById = async(req, res) => {
  const stundentId = Number(req.params.id);
  const targetStudent = await db.Student.findOne({ where: {id: stundentId}});

  if (targetStudent) {
    res.status(200).send(targetStudent)
  } else {
    res.status(400).send('student not found')
  }
}

const createNewStudent = async(req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const phoneNumber = req.body.number;

  const newStudent = await db.Student.create({
    name,
    age,
    phone_number: phoneNumber
  });

  res.status(201).send(newStudent);
}

const editStudentById = async(req, res) => {
  const studentId = req.params.id;
  const name = req.body.name;
  const age = Number(req.body.age);
  const phoneNumber = req.body.number;

  await db.Student.update(
    {
      name,
      age,
      phone_number: phoneNumber
    },
    { 
      where : {id:studentId}
    }
  );

  res
    .status(200)
    .send({message: `student id: ${studentId} has been updated.`});
};

const deleteStudentById = async(req, res) => {
  const studentId = req.params.id;
  await db.Student.destroy({ where: {id: studentId} });
  
  res.status(204).send();
}

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent,
  editStudentById,
  deleteStudentById
}