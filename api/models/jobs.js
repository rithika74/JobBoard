const mongoose = require('mongoose')

const jobScheme = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    company: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    salary: {
        type: String,
        required:true
    },
    schedule: {
        type: String,
        required:true
    },
    skills: {
        type: [String],
        required:true
    },
    description: {
        type: String,
        required:true
    },
    qualification: {
        type: String,
        required:true
    }
})

let Jobs = mongoose.model('Jobs', jobScheme, 'jobs')

module.exports = Jobs