

'use strict';
//import user service.
const userService = require('../../services/login-service/login-service');
/**
 * Creates a new User with the request JSON and
 * returns User JSON object.
 * This is for authentication
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newUser = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    userService.search(newUser)
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