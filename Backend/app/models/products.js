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
    Price:{
        type:Number
    },
    Unit:{
        type:Number
    }
   
})
var products = new mongoose.model('products', productsSchema);

module.exports = products;