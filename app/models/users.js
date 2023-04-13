const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String,
        default:'user'
    }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('users', UserScheme)