var mongoose = require('mongoose');

var userAdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    type: { type: String, required: true },
    recentLogins: { type: Array, required: false },
    profilePicture: { type: String, default: 'https://unsplash.it/200/300/?random' },
    dateOfCreating: { type: Date, default: +new Date() + 7 * 24 * 60 * 60 * 1000 },
    createdBy: { type: String },
    isLoggedIn: { type: Boolean, default: false }
});




var userAdmin = mongoose.model('userAdmin', userAdminSchema);

module.exports = userAdmin;