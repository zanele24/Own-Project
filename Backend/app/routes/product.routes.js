const product = require('../controllers/product');
const express = require('express');
const router = express.Router()

//API END POINTS OF ALL THE PRODUCTS ON THE CONTROLLER

router.post('/add',product.create)
router.get('/view',product.findAll)
router.get('/view/:id',product.findOne)
router.put('/update/:id',product.update)
router.delete('/delete/:id',product.delete)

module.exports = router;