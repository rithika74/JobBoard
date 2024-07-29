const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    dob: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
})

let User = mongoose.model('User', userScheme, 'user')

module.exports = User