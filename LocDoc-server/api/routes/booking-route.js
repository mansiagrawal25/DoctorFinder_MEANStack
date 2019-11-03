

/**
 * Doctor endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const bookingController = require('../controllers/booking-controller');

    // Doctor Routes for search and create.
    app.route('/Booking')
        .get(bookingController.list)
        .post(bookingController.post);

<<<<<<< HEAD
    // //Doctor Routes for authentication
    // app.route('/Doctor/authenticate')
    // .post(doctorController.post);

    // Doctor Routes for get, update and delete.
         app.route('/Booking/applist/:doctorName')
        // .get(bookingController.list)
         .get(bookingController.getDocApp)
    //     .put(bookingController.put);
=======
    // // Doctor Routes for get, update and delete.
    //      app.route('/Booking/:doctorName')
    //     // .get(bookingController.list)
    //      .get(bookingController.getDocApp);
        // .put(bookingController.put)
>>>>>>> 946034a7fae5938f59051422276191b72071214a
        // .delete(bookingController.delete);

    // app.route('Booking/:bookingId')
        // .put(bookingController.put)
        // .delete(bookingController.delete);

    app.delete('/Booking/:id', bookingController.delete);
    app.route('/Booking/:id')
    .put( bookingController.put);
    // app.put('/Booking/:bookingId', bookingController.update);
    //
    //User Routes for view Update Cancel

};
