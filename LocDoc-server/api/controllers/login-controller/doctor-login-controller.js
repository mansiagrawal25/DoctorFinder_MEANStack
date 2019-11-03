
'use strict';
//import user service.
const doctorService = require('../../services/login-service/doctor-login');
/**
 * Creates a new User with the request JSON and
 * returns User JSON object.
 * This is for authentication
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newDoctor = Object.assign({}, request.body);
    const resolve = (doctor) => {
        response.status(200);
        response.json(doctor);
    };
    doctorService.search(newDoctor)
        .then(resolve)
        .catch(renderErrorResponse(response));
};



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