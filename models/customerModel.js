const mongoose = require("mongoose");
const { Schema } = mongoose;
var bcrypt = require('bcryptjs');

const customerSchema = new Schema({
    
    first_name: {
        type : String,
        required : true
    },
    last_name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    phone_number: {
        type : [Number],
        required : false
    }
});
customerSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
  })

const customer = mongoose.model('customer', customerSchema);
module.exports = customer;