/**
 * Service for Booking operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Booking = mongoose.model('Booking');

/**
 * Returns an array of Doctor object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Booking.find(params).exec();
    console.log(promise);
    return promise;

};


/**
 * Saves and returns the new Doctor object.
 *
 * @param {Object} doctor {Doctor object}
 */
exports.save = function (booking) {
    const newBooking = new Booking(booking);
    const promise = newBooking.save();
    return promise;
};

/**
 * Returns the Doctor object matching the id.
 *
 * @param {string} bookingId {Id of the doctor object}
 */
exports.get = function (doctorName) {
    const promise = Booking.find({doctorName:doctorName}).exec();
    return promise;
};




/**
 * Updates and returns the Doctor object.
 *
 * @param {Object} Booking {Doctor object}
 */
exports.update = function (booking) {
    // booking.modified_date = new Date();
    const promise = Booking.findOneAndUpdate({_id: booking._id}, booking).exec();
    console.log('gg' + booking.doctorName);
    console.log("h" +booking);
    return promise;
};

/**
 * Deletes the Doctor object matching the id.
 *
 * @param {string} bookingId {Id of the doctor object}
 */
exports.delete = function (bookingId) {
    const promise = Booking.remove({_id: bookingId});
    return promise;
};
