const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.js')

module.exports = router;

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createNewStudent);
router.put('/:id', studentController.editStudentById);
router.delete('/:id', studentController.deleteStudentById);