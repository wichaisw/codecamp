const express = require('express');
const router = express.Router();
const counterController = require('../controller/counterController');


router.get('/', counterController.getCurrentCounter);

router.put('/', counterController.updateCounter);

module.exports = router;