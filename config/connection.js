const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/socialDB')

module.exports = mongoose.connection