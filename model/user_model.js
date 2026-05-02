const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    email : {
        required : true,
        unique : true,
        type : String,
        lowercase : true
    },
    password : {
        required : true,
        type : String
    }
})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel