const user = require('../controllers/createUsers.controller');
const express = require('express');
const router = express.Router()

router.post('/create',user.create);

module.exports = router;