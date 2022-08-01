const register = require('../controllers/auth');
const express = require('express');
const router = express.Router()

router.post('/signup',register.signup);
router.post('/signin',register.signin);
router.post('/signout',register.signout);

module.exports = router;