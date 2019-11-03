const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
   
     /**
      * Doctor search by name object
     * @type {Object}
     */
     docSearchName:
        {
            type: String,
            // required: true
        },
          /**
           * Doctor search by specialty obj
     * @type {Object}
     */
    docSpeciality:
        {
            type: String,
            // required: true
        },

});

module.exports = mongoose.model("DoctorSearch", bookingSchema);

