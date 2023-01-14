const mongoose = require("mongoose");
const { Schema } = mongoose;
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const productSchema = new Schema({
    
    product_name: {
        type : String,
        required : true
    },
    product_price: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    category: {
        type : String,
        required : true
    },
    quantity: {
        type : String,
        required : true
    },
    best_seller: {
        type : Boolean,
        required : true
    },
    product_photo: {
        type : String,
        required : true
    },
    dateCreated : 
    {
        type : Date,
        default :  Date.now()
    }
});

const product = mongoose.model('product', productSchema);
module.exports = product;