const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productId:{
        type: Number,
    },
    productName:{
        type:String,
    },
    productDesc:{
        type: String
    },
   
})
var products = new mongoose.model('products', productsSchema);

module.exports = products;