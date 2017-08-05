var mongoose = require('mongoose');
var connect = mongoose.connect('mongodb://localhost:27017/wishbells'); //connect once

module.exports = connect;