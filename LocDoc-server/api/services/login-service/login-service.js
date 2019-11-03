
'use strict';
const mongoose = require('mongoose'),
User = mongoose.model('User');

/**
 * Returns an array of User object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
      /**
     * @type {Object}
     */
    const promise = User.find(params).exec()
    return promise;
};
