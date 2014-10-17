/*********************
 * Module dependencies
 *********************/
'use strict()';
 
var express = require('express'),
    routes  = require('./routes'),
    http    = require('http'),
    path    = require('path');
	//logger = require('express-logger')
 
var app = module.exports = express();
 //app.use(logger({path: "logfile.txt"}));
app.engine('html', require('ejs').renderFile);
 
/***************
 * Configuration
 ***************/
 
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
 
/********
 * Routes
 ********/
 
// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.route('/')
.get(routes.index)
 
// redirect all others to the index (HTML5 history)
app.get('*', routes.index);
 
/**************
 * Start Server
 **************/
 
http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});

var o = {
	    a: "A",
	    b: "B",
	    c: "C"
	};
Object.preventExtensions(o)
o.d ="D";
console.log(o.d);

Object.seal(o);
delete o.a;
console.log(o);

process.on("uncaughtException",function(error){
	console.log(error);
	console.trace(error);
	process.exit();
})