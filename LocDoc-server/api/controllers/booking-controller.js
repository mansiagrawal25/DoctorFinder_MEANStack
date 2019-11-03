/**
 * Controller for doctor endpoints.
 */

'use strict';
//import booking service.
const bookingService = require('../services/booking-service');
const bookController = require('../models/bookingModel');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

/**
 * Returns a list of doctors in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (bookings) => {
        response.status(200);
        response.json(bookings);
    };
    bookingService.search({doctorName})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new booking with the request JSON and
 * returns doctor JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newDoctor = Object.assign({}, request.body);
    const resolve = (booking) => {
        response.status(200);
        response.json(booking);
    };

    const mailOptions = {
        from: "LocDoc@gmail.com",
        to: newDoctor.emailId,
        subject: "Appointment confirmation</a>",
        generateTextFromHTML: true,
        html: "<bold>Your appointment is confirmed</bold>"
    };
    // sendEmailForVerification(newUser).catch(console.error);
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });

    bookingService.save(newDoctor)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

const oauth2Client = new OAuth2(
    "614562343340-qpilksdg4uvm44vghecnl5phjojbhcck.apps.googleusercontent.com", // ClientID
    "0BX3pzDJy1fZC8dYwdSYWTAc", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: "1/iyag998ApgayU3HwKTMmepuCutOpu7ySRDqhx-aYnI8"
});
const tokens =   oauth2Client.refreshAccessToken();
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "locdocapp@gmail.com",
        clientId: "614562343340-qpilksdg4uvm44vghecnl5phjojbhcck.apps.googleusercontent.com",
        clientSecret: "0BX3pzDJy1fZC8dYwdSYWTAc",
        refreshToken: "1/iyag998ApgayU3HwKTMmepuCutOpu7ySRDqhx-aYnI8",
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});

/**
 * Creates a new booking with the request JSON and
 * returns booking JSON object.
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
 * Returns a booking object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getDocApp = function (request, response) {
    const resolve = (booking) => {
        response.status(200);
        response.json(booking);
    };
    bookingService.get(request.params.doctorName)
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
    const booking = Object.assign({}, request.body);
    const resolve = (booking) => {
        response.status(200);
        response.json(booking);
    };
    booking._id = request.params.id;
    bookingService.update(booking)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


// exports.delete = function (request, response) {
//     const resolve = (booking) => {
//         response.status(200);
//         response.json({
//             message: 'doctor Successfully deleted'
//         });
//     };
//     bookingService.delete(request.params.bookingId)
//         .then(resolve)
//         .catch(renderErrorResponse(response));
// };
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
/**
 * Deletes a booking object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */

exports.delete = (req, res) => {
    bookController.findByIdAndRemove(req.params.id)
        .then(bookController => {
            if(!bookController) {
                return res.status(404).send({
                    message: "contact not found with id " + req.params.id
                });
            }
            res.send({message: "contact deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "contact not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete contact with id " + req.params.id
        });
    });
};
