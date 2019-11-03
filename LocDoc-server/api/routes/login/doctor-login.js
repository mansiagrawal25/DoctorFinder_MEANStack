'use strict';
module.exports = function (app) {
    // const userController = require('../controllers/login-controller/login-controller');
    const doctorController = require('../../controllers/login-controller/doctor-login-controller');
//User Routes for authentication
// app.route('/User/authenticate')
// .post(userController.post);

app.route('/Doctor/authenticate')
.post(doctorController.post);

};