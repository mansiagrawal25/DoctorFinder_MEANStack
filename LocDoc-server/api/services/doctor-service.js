/**
 * Service for Doctor operations.
 */

'use strict';
const mongoose = require('mongoose'),
Doctor = mongoose.model('Doctor');

/**
 * Returns an array of Doctor object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Doctor.find(params).exec()
    return promise;
};

/**
 * Saves and returns the new Doctor object.
 *
 * @param {Object} doctor {Doctor object}
 */
exports.save = function (doctor) {
    const newDoctor = new Doctor(doctor);
    const promise = newDoctor.save();
    return promise;
};

/**
 * Returns the Doctor object matching the id.
 *
 * @param {string} doctorId {Id of the doctor object}
 */
exports.get = function (doctorEmailId) {
    const promise = Doctor.find({doctorEmailId:doctorEmailId}).exec();
    console.log
    return promise;
};

/**
 * Updates and returns the Doctor object.
 *
 * @param {Object} doctor {Doctor object}
 */
exports.update = function (doctor) {
    doctor.modified_date = new Date();
    const promise = Doctor.findOneAndUpdate({_id: doctor._id}, doctor).exec();
    return promise;
};

/**
 * Deletes the Doctor object matching the id.
 *
 * @param {string} doctorId {Id of the doctor object}
 */
exports.delete = function (doctorId) {
    const promise = Doctor.remove({_id: doctorId});
    return promise;
};
