


/**
 * Doctor endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
      /** 
       * doctorController object
     * @type {Object}
     */
    const doctorController = require('../controllers/doctor-controller');
    // Doctor Routes for search and create.
    app.route('/Doctor')
        .get(doctorController.list)
        .post(doctorController.post);

        // //Doctor Routes for authentication
        // app.route('/Doctor/authenticate')
        // .post(doctorController.post);

    // Doctor Routes for get, update and delete.
    app.route('/Doctor/:doctorEmailId')
        .get(doctorController.get)
        .put(doctorController.put)
        .delete(doctorController.delete);
};

// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Doctor = require('../models/doctor-model');

// router.post('/', (req, res, next) => {

//     console.log("Body From POST " + req.body.name);
//     const doctor = new Doctor({
//         fullName: req.body.fullName,
//         emailId: req.body.emailId,
//         localAddress: req.body.localAddress,
//         city: req.body.city,
//         state: req.body.state,
//         gender: req.body.gender,
//         speciality: req.body.speciality,
//         contactNumber: req.body.contactNumber,
//         password: req.body.password
//     });
//     doctor.save().then((result) => {

//         console.log(result)
//     }).catch((err) => {
//         console.log(err);
//     });;
//     res.status(201).json({
//         message: 'Handling POST requests to /Doctor',
//         doctor: doctor
//     });
// });

// router.get('/', function (req,res){

//     Doctor.getDoctors(function (err, doctor){
//            if(err){
//                throw err;
//            }
//            res.json(doctor);
//        });
//    });
// module.exports = router;