var routes = require('./routes/index.js');
var services = require('./services/Main.js');
var stockServices = require('./services/StockService.js');

module.exports = function(app,passport,utils){
	
/********
 * Routes
 ********/
 
// serve index and view partials
app.get('/login*', routes.loginGet);
app.get('/index',utils.requireAuth, routes.index);
app.get('/partials/:name', routes.partials);

app.post('/login',function(req,res,next){
	return routes.loginPost(req,res,next,passport);
});

app.post('/organization',utils.requireAuth,services.organization);

//for stock
app.post('/getStock',utils.requireAuth,stockServices.getStock);

app.get('/logout', routes.logoutHandler);
/*In case none of above urls match the requested url*/
app.get('*', function(req,res){
	throw {name : "url error", message : "Requested page is not available"};
});

/* In case of error */
app.use(utils.errorHandler);
}