var LocalStrategy = require('passport-local').Strategy;
/*var engine = require('./engine');
var db = engine.getDB();*/
/*var dbUrl = "localhost/test1";
var collections = ['users'];
var db = require('mongojs').connect(dbUrl,collections);
//db.users.ensureIndex({email:1},{unique:true})*/

//tingodb embbededed db in case of desktop
/*var Db = require('tingodb')().Db,
    assert = require('assert');

var db = new Db('d:/tingodb/test1', {});*/
//mongo in ase of web
var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert');

var mongoClient = new MongoClient(new Server('localhost', 27017),{'native_parser':true,auto_reconnect: true,safe:true});
var db = mongoClient.db('testdb');
module.exports.db = db;
mongoClient.open(function(err,client){
	if(err) throw err;
});

/*
	Universal error handler
*/
module.exports.errorHandler = function(err,req,res,next){
	console.log(err);
	res.writeHeader(500, {'Content-Type' : "text/html"});
    res.write("<h2>" + err.name + "</h2>");
    res.end("<p style='border:1px dotted red'>" + err.message + "</p>");
};


/*
	All passport related functions
*/
module.exports.localStrategy = new LocalStrategy({
				//set the fieldname here
				usernameField: 'email',
				passwordField: 'password'
			},
			function(email,password,done){
				console.time("sample");
				/*db.users.findOne({email:email},function(err,user){
					if(err){
						return done(err);
					}
					if(!user){
						return done(null,false,{message:"user doesnot exist"});
					}else{
						return done(null,user);
					}
				});*/
				db.collection('users').findOne({email:email},function(err,doc){
					if(err) return done(err);
					if(!doc){
						return done(null,false,{message:"user does not exist"})
					}else{
						console.log(doc.orgName);
						return done(null,doc);
					}
				});
			});

module.exports.requireAuth = function(req, res, next){

  // check if the user is logged in
  if(!req.user){
    req.session.message = "You need to login to view this page";
    res.redirect('/login');
  }else{
  	next();
  }
}


module.exports.serialize = function(user, done) {
  done(null, user.email);
};

module.exports.deserialize = function(email, done) {
  // query the current user from database
    db.collection('users').findOne({email:email},function(err,user){
    	if(err){
    		done(new Error('User ' + email + ' does not exist'));
    	}else{
    		done(null,user);
    	}
    });
};