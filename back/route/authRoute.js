const express = require('express');

const router = express.Router();

const signUp = require('../controller/authController');
const Login = require('../controller/authController');

router.post('/signup',signUp);
router.post('/login',Login);

module.exports = router;
