var connect = require('../connect/db.connect');
var userAdmin = require('../schemas/user.schema');
var colors = require('colors');

module.exports = {
    getAllAdminUsers: () => {
        userAdmin.find({}).exec((err, result) => {
            return result;
        })

    }
}