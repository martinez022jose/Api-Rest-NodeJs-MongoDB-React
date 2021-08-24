const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const Movie = new Schema({  
    "title": String,
    "year": Number
});

module.exports = mongoose.model('Movie', Movie);