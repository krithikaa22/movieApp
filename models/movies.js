const mongoose = require('mongoose')

const movie = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number
    },
    genre: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    review: {
        type: [String]
    }
})

module.exports = mongoose.model('movie', movie)