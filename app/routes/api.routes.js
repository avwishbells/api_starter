var express = require('express');
var router = express.Router();

var createUser = require('../create/user');
var viewUser = require('../view/user');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', function(req, res) {
    res.send('Birds home page')
})

// define the about route
router.get('/user', function(req, res) {
    var users = viewUser.getAllAdminUsers();
    console.log(typeof(users));
    res.send('its working');


    router.get('/products', function(req, res) {

        res.send('Get all products endpoint');

    })

    router.get('/vendors', function(req, res) {
        res.send('See all vendors');
    })

    router.post('/product', function(req, res) {
        res.send('Add new product');
    })

    router.post('/vendor', function(req, res) {
        res.send('Add new vendor');
    })


    router.post('/order', function(req, res) {
        res.send('Add A new Order');
    })




})

module.exports = router