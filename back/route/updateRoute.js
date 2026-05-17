const express = require('express');
const router = express.Router();

const updateCourse = require('../controller/updateController');

router.put('/update/:id', updateCourse);

module.exports = router;