'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  /**
     * @type {Object}
 * Mongoose schema for User object.
 */

let UserSchema = new Schema({
    /**
     * Name of the User.
     */
    fullname: {
        type: String,
        // required: "name is required"
    },

    secretKey: {
        type: String,
    },

    confirmed: {
        type: Boolean,
    },

    gender: {
        type: String,
        
    },

      /** city of User  */ 
      city: {
        type: String,
   },

    /** State name of User  */ 
   state: {
        type: String,
   },   

    /** date of birth User  */ 
    dateofBirth: {
        type: Date,
   },

     /**User number  */
   contactNumber:{
   type: String,
   },
    localAddress: {
        type: String,
        // required: "address is required",
   },
       /** login password  */ 
       password: {
        type: String,
   },
    /**
     * User email
     */
    emailId: {
        type: String,
        // unique :"email id alredy exist",
        // required: "email is required"
    },
    
    /**
     * Last modified date.
     */
    
}, {
    versionKey: false
});

module.exports = mongoose.model('User', UserSchema);
