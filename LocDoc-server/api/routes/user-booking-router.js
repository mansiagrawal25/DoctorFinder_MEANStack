'use strict';
module.exports = function (app) {
    const userBookingController = require('../controllers/user-booking-controller');

    app.route('/Booking/:patientEmailId')
        .get(userBookingController.getUserApp);

}

