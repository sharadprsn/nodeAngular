/*********************
 * Module dependencies
 *********************/
 
var express = require('express'),
    //routes  = require('./routes'),
    utils  = require('./server/utils/utils'),
    http    = require('http'),
    path    = require('path'),
    session = require('express-session'),
    passport = require('passport'),
   bodyParser = require('body-parser');
	//logger = require('express-logger')
 
var app = module.exports = express();
 //app.use(logger({path: "logfile.txt"}));
app.engine('html', require('ejs').renderFile);
 
/***************
 * Configuration
 ***************/
 
// all environments
//var env = process.env.NODE_ENV || 'development';
//NODE_ENV=production
//NODE_ENV=development
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
	secret:'nujhdfksdjfj12747563487',
	saveUninitialized:true,
	resave:true,
	name:'invent',
	//store:'sessionStore',
	proxy: true
}));
//app.use(express.favicon());
/*Securing App with passport.js*/
app.use(passport.initialize());
app.use(passport.session());
passport.use('local-login',utils.localStrategy);
passport.serializeUser(utils.serialize);
passport.deserializeUser(utils.deserialize);
//transfer control to urls
routes = require('./server/controller.js')(app,passport,utils);

 
/**************
 * Start Server
 **************/
 
http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});