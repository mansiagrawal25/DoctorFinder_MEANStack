const mongoose = require('mongoose');

  /**
     * @type {Object}
     */
const bookingSchema = mongoose.Schema({

    patientName:
        {
            type: String,
            // required: true
        },
    patientEmailId:
        {
            type: String,
            // required: true
        },
    contactNumber:
        {
            type: String,
            // required: true
        },
    doctorName:
        {
            type: String,
            // required: true
        },
    dateofApp:
        {
            type: Date,
            // required: true
        },
    timeofApp:
        {
            type: String,
            // required: true
        },
});

module.exports = mongoose.model("Booking", bookingSchema);

