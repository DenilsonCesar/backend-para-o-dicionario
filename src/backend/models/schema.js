const mongoose = require('mongoose');

const table = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('schema', table);