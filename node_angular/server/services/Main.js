var user = require('../db/userDO');

module.exports.organization= function(req,res){
	var email = req.session.email;

	user.getUserOrgByEmail(email,function(doc){
		res.json(doc);
	});
}