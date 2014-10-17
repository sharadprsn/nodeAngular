
exports.loginGet = function (req, res) {
	if(req.user){
		//already logged in 
		res.redirect('index')
	}else{
		// redirect to login page
		res.render('login',{message: req.session.message});
		//clear the message
		req.session.message = null;
	}
};

exports.logoutHandler = function(req,res){
	if(req.user){
		req.logout();
		req.session.message = "Log out successfully";
	}
	res.redirect('/login');
}

exports.loginPost = function(req,res,next,passport){
	passport.authenticate('local-login',function(err,user,info){
		if(err){
			return next(err);
		}
		if(!user){
			req.session.message = info.message;
			return res.redirect('login');
		}
		// if everything is ok
		req.logIn(user,function(err){
			if(err){
				req.session.message = 'Error';
				return next(err);
			}
			//successful login
			req.session.email=user.email;
			req.session.username=user.username;
			res.redirect('index');
		})
	})(req,res,next);
}

exports.index = function(req, res,next){
  res.render('index');
  //next();
};
 
exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
