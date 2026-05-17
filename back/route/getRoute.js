const express = require('express');

const router = express.Router();


const getCourse = require('../controller/getController');
const filterCourse = require('../controller/filterController');

router.get('/courses',getCourse);
router.get('/search', filterCourse);

module.exports = router;