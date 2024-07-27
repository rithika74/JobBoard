const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String
    }
})

let User = mongoose.model('User', userScheme, 'user')

module.exports = User