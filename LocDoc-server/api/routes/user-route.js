/**
 * User endpoint route definitions.
 */


'use strict';
<<<<<<< HEAD
=======
//import  { User } from "../../../LocDoc-client/locdoc-app/src/app/models/user";
>>>>>>> 946034a7fae5938f59051422276191b72071214a

module.exports = function (app) {
      /**userController object
     * @type {Object}
     */
    const userController = require('../controllers/user-controller');
    const isAuthenticated = ""
    // User Routes for search and create.
    app.route('/User')
        .get(userController.list)
        .post(userController.post);

    // User Routes for get, update and delete.
    app.route('/User/:emailId')
        .get(userController.get)
        .put(userController.put)
        .delete(userController.delete);
        // app.route('/User/:userId')
        // .get(userController.get);




};
