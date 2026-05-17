const express = require('express');
const router = express.Router();

const getSingleCourse = require('../controller/getSingleController');


router.get('/getSingleCourse/:id',getSingleCourse);

module.exports = router;