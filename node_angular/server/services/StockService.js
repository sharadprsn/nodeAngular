var stockDO = require('../db/stockDO');

module.exports.getStock = function(req,res){
	var condition = {};
	stockDO.getStock(condition,function(doc){
		res.json(doc);
	});
}