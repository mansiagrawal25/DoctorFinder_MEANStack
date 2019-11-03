'use strict';
module.exports = function (app) {
    const userController = require('../../controllers/login-controller/login-controller');
    const doctorController = require('../../controllers/login-controller/doctor-login-controller');
    const user = require('../../services/user-service');
//User Routes for authentication
app.route('/User/authenticate')
.post(userController.post);

//Doctor Routes for authentication

app.route('/Doctor/authenticate')
.post(doctorController.post);


    app.route('/verify')
        .get((req, res) => {
        })
        .post((req, res) => {
            try {
                const secretToken = Object.assign({}, req.body);
                const obj = {
                    secretKey: secretToken.seckey
                }
                console.log(obj);
                const resolve = (userdetails) => {
                    console.log(userdetails );
                    userdetails.secretKeyConfirmed = "";
                    userdetails.confirmedTrue = true;
                    const promiseUser = user.update(userdetails).then(res.status(200));
                    console.log("Verified");
                    res.status(200);
                    res.json({msg:"verified"});
                    console.log(userdetails);
                };

                const userPromise = user.search(obj).then(resolve);

                //res.redirect('/login');
            } catch(error) {
                console.log(error)
            }

        })
    }


