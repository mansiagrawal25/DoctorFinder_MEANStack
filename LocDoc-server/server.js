/**declaring variables
 * @type {object}
 */
let express = require('express'),
    app = express(),
    port =  3000,//process.env.PORT ||
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser'),
    cors = require('cors');
    // const loginRoutes = require('./api/routes/login');

    
// mongoose instance connection url connection
mongoose.connect('mongodb://wild-users:Theforerunners19%40@cluster0-shard-00-00-ceczv.mongodb.net:27017,cluster0-shard-00-01-ceczv.mongodb.net:27017,cluster0-shard-00-02-ceczv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true }); 

mongoose.Promise = global.Promise;

// app.use('/User/authenticate', loginRoutes);
//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin: *");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
    next();
});

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Users RESTful API server started on: ' + port);
module.exports = app;