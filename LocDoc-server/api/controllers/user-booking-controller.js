/**
 * Controller for user booking endpoints.
 */

const bookingUserService = require('../services/user-booking-service');

/**
 * Returns a list of user bookings in JSON 
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getUserApp = function (request, response) {
    const resolve = (booking) => {
        response.status(200);
        response.json(booking);
    };
    bookingUserService.get(request.params.patientEmailId)
        .then(resolve)
        .catch(renderErrorResponse(response));
    console.log(request.params.patientEmailId);
    
    
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
