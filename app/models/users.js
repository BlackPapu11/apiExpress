const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    lastname:{
        type: String
    },
    surname:{
        type:String
    },
    phone:{
        type:Number
    },
    ext_phone:{
        type:String
    },
    name_photo:{
        type:String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('users', UserScheme)