// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Booking = require('../models/bookingModel');
// // mongoose.Promise = global.Promise;
//
// router.post('/', (req, res, next) => {
//
//     console.log("Data received from body " + req.body.name);
//
//     const booking = new Booking({
//
//         patientName: req.body.fullname,
//         emailId: req.body.emailId,
//         contactNumber: req.body.contactNumber,
//         doctorName: req.body.doctorName,
//         dateofApp: req.body.dateofApp,
//         timeofApp: req.body.timeofApp
//
//     });
//
//     booking.save().then((data) => {
//         console.log(data)
//     }).catch((err) => {
//         console.log(err);
//     });
//     res.status(201).json({
//         message: 'Handling POST requests to /Booking',
//         booking: booking
//     });
//
// });
//
// router.get('/Booking', (req, res, next) => {
//
//     Booking.find()
//         .then(cont => {
//             res.send(cont);
//         }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving Users."
//         });
//     });
//
// });
//
// router.put('/', (req, res, next) => {
//
// });
//
// router.delete('/', (req, res, next) => {
//
// });
//
// module.exports = router;
