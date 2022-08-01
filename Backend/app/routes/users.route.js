const user = require('../controllers/Users.controller');
const express = require('express');
const router = express.Router()

router.post('/create',user.create);
router.get('/users',user.findAll);
router.get('/user/:id',user.findOne);
router.put('/update/:id',user.update);
router.delete('/delete/:id',user.delete);

module.exports = router;