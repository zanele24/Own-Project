const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productName:{
        type:String,
    },
    productDesc:{
        type: String
    },
    Price:{
        type:Number
    },
    Liter:{
        type:Number
    },
    Unit:{
        type:Number
    },
}
   
,{timestamps: true})

module.exports = new mongoose.model('products', productsSchema);