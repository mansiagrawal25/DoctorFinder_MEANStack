'use strict';
module.exports = function (app) {
    //Initialize models
    let userModel = require('./models/user.js');
    let doctorModel = require('./models/doctor-model.js');
    let bookingModel = require('./models/bookingModel')

    //Initialize routes
    let userRoutes = require('./routes/user-route');
    let doctorRoutes = require('./routes/doctor.js');
    let loginRoutes = require('./routes/login/login');
    let doctorloginRoutes = require('./routes/login/doctor-login');
    let bookingRoutes = require('./routes/booking-route');
    let userBookingRoutes = require('./routes/user-booking-router');

    // loginRoutes(app);
    userRoutes(app);
    doctorRoutes(app);
    loginRoutes(app);
    doctorloginRoutes(app);
    bookingRoutes(app);
    userBookingRoutes(app);
};
