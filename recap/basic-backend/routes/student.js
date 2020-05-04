const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.js')
const passport = require('passport')

const auth = passport.authenticate('jwt-authentication', {session: false});

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createNewStudent);
router.put('/:id', studentController.editStudentById);
router.delete('/:id', auth, studentController.deleteStudentById);

module.exports = router;