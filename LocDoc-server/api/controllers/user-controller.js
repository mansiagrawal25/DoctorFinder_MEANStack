/**
 * Controller for user endpoints.
 */


'use strict';
//import user service.
//import {User} from "../../../LocDoc-client/locdoc-app/src/app/models/user";

const userService = require('../services/user-service');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const randomstring = require('randomstring');
/**
 * Returns a list of users in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (users) => {
        response.status(200);
        response.json(users);
    };
    userService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


/**
 * Creates a new User with the request JSON and
 * returns User JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */

//const userDetails = Object.assign({}, request.body);
exports.post = function (request, response) {
    const newUser = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };

    //const userURL = "http://localhost:3000" + "/" + JSON.parse(newUser).toString();

    const secretToken = randomstring.generate();
    newUser.secretKey = secretToken;
    newUser.confirmed = false;

    const mailOptions = {
        from: "LocDoc@gmail.com",
        to: newUser.emailId,
        subject: "Verify Email" + "<a href='http://localhost:4200/verify'>http://localhost:4200/verify</a>",
        generateTextFromHTML: true,
        html: "<bold>" + newUser.secretKey + "</bold>" + "<a href='http://localhost:4200/verify'>http://localhost:4200/verify</a>"
    };
    // sendEmailForVerification(newUser).catch(console.error);
    // smtpTransport.sendMail(mailOptions, (error, response) => {
    //     error ? console.log(error) : console.log(response);
    //     smtpTransport.close();
    // });

    // const urlparams = new URLSearchParams(window.location.search)
    // const param = urlparams.get('key');
    //
    // console.log(param)

        userService.save(newUser)
            .then(resolve)
            .catch(renderErrorResponse(response));


};

// const oauth2Client = new OAuth2(
//     "614562343340-qpilksdg4uvm44vghecnl5phjojbhcck.apps.googleusercontent.com", // ClientID
//     "0BX3pzDJy1fZC8dYwdSYWTAc", // Client Secret
//     "https://developers.google.com/oauthplayground" // Redirect URL
// );

// oauth2Client.setCredentials({
//     refresh_token: "1/iyag998ApgayU3HwKTMmepuCutOpu7ySRDqhx-aYnI8"
// });
// const tokens =   oauth2Client.refreshAccessToken();
// const accessToken = oauth2Client.getAccessToken();

// const smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         type: "OAuth2",
//         user: "locdocapp@gmail.com",
//         clientId: "614562343340-qpilksdg4uvm44vghecnl5phjojbhcck.apps.googleusercontent.com",
//         clientSecret: "0BX3pzDJy1fZC8dYwdSYWTAc",
//         refreshToken: "1/iyag998ApgayU3HwKTMmepuCutOpu7ySRDqhx-aYnI8",
//         accessToken: accessToken
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });





// // let sendEmailForVerification = async function (newUser) {
// //     let testAccount = await nodeMailer.createTestAccount();
// //     let transporter = nodeMailer.createTransport({
// //
// //         host: "smtp.gmail.email",
// //         port: 465,
// //         secure: true,
// //         auth: {
// //             type: 'OAuth2',
// //             user: 'kashyapkrkashyap@gmail.com'
// //         },
// //         tls: {rejectUnauthorized: false}
// //
// //     });
// //     transporter.verify(function(error, success) {
// //         if (error) {
// //             console.log(error);
// //         } else {
// //             console.log('Server is ready to take our messages');
// //         }
// //     });
// //
// //     transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
// //         let accessToken = userTokens[user];
// //         if(!accessToken){
// //             return callback(new Error('Unknown user'));
// //         }else{
// //             return callback(null, accessToken);
// //         }
// //     });
// //
// //     let mailOptions = {
// //         from: "LocDoc@gmail.com",
// //         to: "akhileshkashyapkr@gmail.com",
// //         subject: "Verify email",
// //         text: "Hellow"
// //
// //     };
// //
// //     let emailMessage = ""
// //     transporter.sendMail(mailOptions, function(error, info){
// //         if(error){
// //              emailMessage = "there was an error :-(, and it was this: " + error.message;
// //         }else{
// //             console.log("Message sent: %s", info.messageId);
// //             console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
// //              emailMessage = "Message sent: " + info.response;
// //         }
// //
// //     });
// //
// //
// //
// // }





// /**
//  * Creates a new User with the request JSON and
//  * returns User JSON object.
// //  * This is for authentication
// //  * @param {request} {HTTP request object}
// //  * @param {response} {HTTP response object}
// //  */
// // exports.post = function (request, response) {
// //     const newUser = Object.assign({}, request.body);
// //     const resolve = (user) => {
// //         response.status(200);
// //         response.json(user);
// //     };
// //     userService.search(newUser)
// //         .then(resolve)
// //         .catch(renderErrorResponse(response));
// // };

// /**
//  * Returns a User object in JSON.
//  *
//  * @param {request} {HTTP request object}
//  * @param {response} {HTTP response object}
//  */
exports.get = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    userService.get(request.params.emailId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
// exports.get = function (request, response) {
//     const resolve = (user) => {
//         response.status(200);
//         response.json(user);
//     };
//     userService.get(request.params.userId)
//         .then(resolve)
//         .catch(renderErrorResponse(response));
// };

/**
 * Updates and returns a User object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const user = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    user.emailId = request.params.emailId;
    // console.log("check" +user.emailId);
    // user.fullname=request.params.fullname;
    userService.update(user)

        .then(resolve)
        
        .catch(renderErrorResponse(response));
        console.log("check" +user);

};

/**
 * Deletes a User object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json({
            message: 'User Successfully deleted'
        });
    };
    console.log(request.params.emailId);
    userService.delete(request.params.emailId)
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
