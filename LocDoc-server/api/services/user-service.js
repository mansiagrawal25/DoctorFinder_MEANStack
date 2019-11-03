/**
 * Service for User operations.
 */

'use strict';
const mongoose = require('mongoose'),
User = mongoose.model('User');

/**
 * Returns an array of User object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = User.find(params).exec()
    return promise;
};



/**
 * Saves and returns the new User object.
 *
 * @param {Object} user {User object}
 */
exports.save = function (user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return promise;
};

/**
 * Returns the User object matching the id.
 *
 * @param {string} userId {Id of the user object}
 */
exports.get = function (emaiId) {
    const promise = User.find({emailId:emaiId}).exec();
    return promise;
};

/**
 * Updates and returns the User object.
 *
 * @param {Object} user {User object}
 */
exports.update = function (user) {
    // user.modified_date = new Date();
    // user :
    // {
    // user.fullname =req.body.fullname;
    // user.emailId=req.body.emaiId;
    // user.localAddress=req.body.localAddress;
    // user.city=req.body.city;
    // user.state=req.body.state
    // user.gender=req.body.gender;
    // user.dateofBirth=req.body.dateofBirth;
    // user.contactNumber =req.body.contactNumber;
    // user.password=req.body.password;}
    
    const promise = User.updateMany({emailId: user.emailId}, user).exec();
    console.log('user' +user.fullname);
    return promise;
};

/**
 * Deletes the User object matching the id.
 *
 * @param {string} userId {Id of the user object}
 */
exports.delete = function (emailId) {
    const promise = User.remove({emailId: emailId});
    return promise;
};

// exports.get = function (userId) {
//     const promise = Doctor.findById(userId).exec();
//     return promise;
// };