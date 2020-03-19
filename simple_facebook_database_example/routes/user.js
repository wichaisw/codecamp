const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

// แยกส่วน handler ไปไว้ใน userController.js แล้วเรียกใช้
router.get("/:id", userController.addFiveFromId);



module.exports = router;