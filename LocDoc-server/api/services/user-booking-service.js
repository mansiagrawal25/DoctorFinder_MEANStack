const mongoose = require('mongoose'),
    Booking = mongoose.model('Booking');

exports.get = function (patientEmailId) {
    console.log('ee'+patientEmailId);
    const promise = Booking.find({patientEmailId:patientEmailId}).exec();
    
    return promise;
    
};
