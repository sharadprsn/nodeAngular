var db = require('../utils/utils').db;

module.exports.getUserOrgByEmail= function(email,callback){
	db.collection('users').findOne({email:email},{orgName: 1,_id:0},function(err,doc){
		if(err) throw {type:'Application',message:'getUserOrgByEmail:: Db Error'};
		callback(doc);
	});
}