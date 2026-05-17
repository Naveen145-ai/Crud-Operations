const express = require('express');
const router = express.Router();

const delCourse = require('../controller/deleteController');

router.delete('/del/:id',delCourse);

module.exports = router;