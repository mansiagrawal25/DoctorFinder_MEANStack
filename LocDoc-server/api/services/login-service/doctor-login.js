
'use strict';
const mongoose = require('mongoose'),
Doctor = mongoose.model('Doctor');

/**
 * Returns an array of User object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
      /**
     * @type {Object}
     */
    const promise = Doctor.find(params).exec()
    return promise;
};