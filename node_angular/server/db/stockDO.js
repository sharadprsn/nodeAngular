var db = require('../utils/utils').db;

module.exports.getStock = function(condition,callback){
	db.collection('stocks').find(condition,function(err,doc){
		if(err) throw {type:'Application',message:'getStock:: DB Error'};
		callback(doc);
	});
}