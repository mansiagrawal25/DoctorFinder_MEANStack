/**
 * Controller for doctor endpoints.
 */

'use strict';
//import doctor service.
const doctorService = require('../services/doctor-service');
/**
 * Returns a list of doctors in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (doctors) => {
        response.status(200);
        response.json(doctors);
    };
    doctorService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new doctor with the request JSON and
 * returns doctor JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newDoctor = Object.assign({}, request.body);
    const resolve = (doctor) => {
        response.status(200);
        response.json(doctor);
    };
    doctorService.save(newDoctor)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new User with the request JSON and
 * returns User JSON object.
//  * This is for authentication
//  * @param {request} {HTTP request object}
//  * @param {response} {HTTP response object}
//  */
// exports.post = function (request, response) {
//     const newDoctor = Object.assign({}, request.body);
//     const resolve = (doctor) => {
//         response.status(200);
//         response.json(doctor);
//     };
//     userService.search(newDoctor)
//         .then(resolve)
//         .catch(renderErrorResponse(response));
// };

/**
 * Returns a doctor object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (doctor) => {
        response.status(200);
        response.json(doctor);
    };
    doctorService.get(request.params.doctorEmailId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a doctor object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const doctor = Object.assign({}, request.body);
    const resolve = (doctor) => {
        response.status(200);
        response.json(doctor);
    };
    doctor._id = request.params.doctorId;
    doctorService.update(doctor)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a doctor object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (doctor) => {
        response.status(200);
        response.json({
            message: 'doctor Successfully deleted'
        });
    };
    doctorService.delete(request.params.doctorId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};