var connect = require('../connect/db.connect');
var userAdmin = require('../schemas/user.schema');


module.exports = {

    createNewAdminUser: (username, password) => {
        var user = new userAdmin({
            username: username,
            password: password
        });

        user.save((err) => {
            if (!err) {
                console.log("successfully inserted to database");
            } else {
                console.log(err)
            }
        });
        return "New User Created";

    },

    createNewCSUser: () => {
        return "New Customer Support User Created";
    },


    createNewAccUser: () => {
        return "New Accountant user Created";
    }




}


// var model1 = require('./lib/model1.js');
// var m1 = new model1({
//     foo: 'value_for_foo',
//     bar: 'value_for_bar'
// });

// m1.save(function(err) {
//     if (err) { console.log(err.stack); }
//     console.log('saving done...');
// });