const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  /**
     * @type {Object}
     */
const doctorModelSchema = new Schema({
    fullName: String,
    gender: String,
    doctorEmailId: String,
    localAddress: String,
    city: String,
    state: String,
    speciality: String,
    contactNumber: String,
    doctorPassword: String

});

module.exports = mongoose.model('Doctor', doctorModelSchema);

