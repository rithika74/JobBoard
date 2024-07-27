const mongoose = require('mongoose')

const jobScheme = new mongoose.Schema({
    title: {
        type: String
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: String
    },
    schedule: {
        type: String
    },
    skills: {
        type: String
    },
    description: {
        type: String
    },
    qualification: {
        type: String
    }
})

let Jobs = mongoose.model('Jobs', jobScheme, 'jobs')

module.exports = Jobs