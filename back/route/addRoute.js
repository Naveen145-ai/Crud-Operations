const express = require('express');

const router = express.Router();

const addCourse = require('../controller/addController');


router.post('/add', addCourse);


module.exports = router;