var express = require('express')

var app = express();
var mongoose = require('mongoose');
var createUser = require('./app/create/user');
var viewUser = require('./app/view/user');
var apiRoute = require('./app/routes/api.routes');

app.use('/api', apiRoute)

app.listen(3400, () => {
    console.log('App Now listening on Server: Port 3000');
});